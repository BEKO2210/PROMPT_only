# Sample: Security & Code-Quality AUDIT for fictional B2B SaaS

**Source prompt:** `AUDIT.md`
**Engagement:** Security & Code-Quality audit for "Pivot Logistics"
(fictional B2B SaaS coordinating same-day shipping for ~400 EU
merchants, 60-person engineering team, processing ~12M PII records).

All entities, paths, CVEs, and findings are **fictional**. This
shows deliverable shape with realistic OWASP / CWE mapping and
severity ranking.

---

# Security & Code-Quality Audit

**Client:** Pivot Logistics B.V.
**Repository:** `pivot/platform @ a47b3f9c` (2026-04-22)
**Date:** 2026-05-03
**Auditor:** [Your firm] — engagement PL-AUD-2026-007

---

## Executive Summary

**Overall posture: ACCEPTABLE WITH CONCERNS — Critical items
require remediation within 30 days; Medium items within the
quarter.**

3 Critical findings, 7 High, 18 Medium, 22 Low, 11 Informational.
Two findings involve PII handling and should be prioritised given
DSGVO exposure.

**Top 3 risks in plain language**
1. A merchant-facing API endpoint allows order-history retrieval
   for any merchant ID without authorisation check — any
   authenticated merchant can read all merchants' orders.
2. SQL queries in the analytics pipeline are constructed via
   string concatenation, allowing injection in 4 endpoints.
3. AWS access keys are committed in two historical commits (last
   used 14 months ago — rotation required regardless).

**Top 3 recommended actions, ordered by ROI**
1. Patch the IDOR (Insecure Direct Object Reference) on
   `/api/v2/orders/{merchant_id}` immediately — single-line
   authorisation check
2. Parameterise the analytics queries (4 endpoints)
3. Rotate the AWS keys, scan commit history for additional
   exposed credentials

**Did NOT cover:** runtime penetration testing, social
engineering, physical security, compliance certifications.
See §11 LIMITATIONS.

---

## Scope

Repository `pivot/platform` at commit `a47b3f9c`, branch `main`,
last commit 2026-04-22 09:13 UTC.

Languages present: Python (62%), TypeScript (28%), Go (8%), SQL
(2%). Frameworks: Django 4.2, FastAPI 0.110, Next.js 14.

In-scope: production code paths, authentication, authorisation,
data handling, third-party integrations, deployment configuration.

Out-of-scope: infrastructure outside the repo (AWS console
configuration), runtime / dynamic testing, third-party SaaS
internals, mobile applications.

---

## Methodology

- OWASP Top 10 (2021) review
- Static pattern scan for unsafe sinks: SQL string concat, shell
  exec, deserialization, XSS sinks, path traversal, SSRF, open
  redirects
- Secret scan: `grep -rEn 'AKIA|sk_live|-----BEGIN|password\s*=' .`
- Dependency CVE check: `pip-audit --json`, `npm audit --json`,
  `govulncheck`
- Auth/Authz design review at every route handler
- Crypto usage review (algorithms, IVs, randomness sources)

Tools used and versions:
```
pip-audit 2.7.3
npm 10.2.4 with npm audit
govulncheck 1.1.3
gitleaks 8.18.2
ripgrep 14.1.0
```

Total tool calls: 27 (within the 30 cap).

---

## Findings

### 🔴 CRITICAL

#### AUD-001 — IDOR on order-history endpoint
- **Severity:** CRITICAL — CVSS 8.8 (AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:N/A:N)
- **OWASP:** A01:2021 Broken Access Control
- **CWE:** CWE-639 Authorization Bypass Through User-Controlled Key
- **Location:** `services/orders/api/v2.py:142-167`
- **Evidence:**
  ```python
  @router.get("/api/v2/orders/{merchant_id}")
  async def list_orders(merchant_id: str, user: User = Depends(auth)):
      # No check that user.merchant_id == merchant_id
      return await Orders.filter(merchant_id=merchant_id).all()
  ```
- **Impact:** Any authenticated merchant can read all merchants'
  order history (~12M orders containing customer addresses,
  contact info, order values, delivery instructions). DSGVO
  reportable breach if exploited.
- **Reproduction:** Authenticate as any merchant, send
  `GET /api/v2/orders/<other-merchant-id>` with valid bearer token.
- **Remediation:**
  ```python
  if user.merchant_id != merchant_id:
      raise HTTPException(403)
  ```

#### AUD-002 — SQL injection in analytics pipeline
- **Severity:** CRITICAL — CVSS 9.1
- **OWASP:** A03:2021 Injection
- **CWE:** CWE-89
- **Location:** `services/analytics/queries.py:78`, `:92`, `:118`, `:201`
- **Evidence:**
  ```python
  query = f"SELECT * FROM events WHERE merchant='{merchant_id}' "
          f"AND type='{event_type}'"
  ```
- **Impact:** All 4 endpoints accept user-controlled fragments
  concatenated into SQL. Full database read; potential write via
  stacked queries on the Postgres role used.
- **Remediation:** Replace with parameterised queries
  (`psycopg2` `%s` placeholders or SQLAlchemy ORM).

#### AUD-003 — AWS access keys in commit history
- **Severity:** CRITICAL — CVSS 7.5
- **OWASP:** A07:2021 Identification and Authentication Failures
- **CWE:** CWE-798 Use of Hard-coded Credentials
- **Location:** Commits `e12a4f9` (2025-03-14) and `92b78c1` (2025-08-09)
- **Evidence:** `AKIA*` strings found in `infra/deploy.sh` and
  `scripts/seed-prod.py` (now removed in current HEAD but still
  in git history).
- **Impact:** AWS keys are valid until rotated. CloudTrail
  inspection required to confirm no unauthorised use.
- **Remediation:** Rotate keys immediately. Add `git-secrets` or
  `gitleaks` pre-commit hook. Run BFG Repo-Cleaner if removing
  from history (only if no one has cloned).

### 🟠 HIGH  (7 findings — abbreviated for sample)

[AUD-004 through AUD-010 — including: missing CSRF protection on
state-changing endpoints, stored XSS in merchant-profile bio
field, weak password reset token entropy, ...]

### 🟡 MEDIUM  (18 findings — listed)
### 🔵 LOW  (22 findings)
### ⚪ INFORMATIONAL  (11 findings)

---

## Statistics

| Severity | Count |
|---|---|
| Critical | 3 |
| High | 7 |
| Medium | 18 |
| Low | 22 |
| Informational | 11 |
| **Total** | **61** |

**Top 5 affected files:**
1. `services/orders/api/v2.py` — 6 findings
2. `services/analytics/queries.py` — 4 findings
3. `services/auth/password_reset.py` — 4 findings
4. `services/merchant/profile.py` — 3 findings
5. `services/integrations/webhook.py` — 3 findings

**Dependency vulnerabilities:**

| Source | Critical | High | Medium | Low |
|---|---|---|---|---|
| Python (pip) | 1 | 4 | 11 | 23 |
| JavaScript (npm) | 0 | 2 | 7 | 18 |
| Go modules | 0 | 0 | 1 | 4 |

Notable: `cryptography==3.4.7` (CVE-2023-49083, High). Update path
clear: `cryptography>=42.0.0`.

---

## Limitations

This audit is a static code review assisted by an AI agent. It is
NOT a penetration test, NOT a dynamic security assessment, and
NOT a compliance certification (SOC2, ISO 27001, PCI-DSS, etc.).
No runtime behaviour was probed. Findings reflect the code as of
commit `a47b3f9c` on 2026-04-22. Dependencies were checked against
public CVE databases on 2026-05-03; new CVEs may have been
disclosed since. Risk ratings are advisory and based on standard
CWE/CVSS heuristics applied without environmental context. For
regulated workloads, engage a certified pentest provider.

[Full disclaimer per `_LEGAL/AUDIT-DISCLAIMER.md` +
`_LEGAL/SECURITY-NOT-PENTEST.md`]

---

*Report length in actual delivery: 28 pages. Sample shows ~25%.
Engagement fee: €5 800. Critical-finding patches were deployed to
production within 4 days.*
