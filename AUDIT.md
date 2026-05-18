# AUDIT — Security & Code-Quality-Audit (verkaufbares Deliverable)

Produces a formal, signable Markdown report mapping findings to OWASP / CWE
with CVSS-style severity and per-finding remediation. Target buyer: SMBs
without a €20k pentest budget who still need an audit document for
clients, insurers, or board reviews.

**Realistic engagement price: €2 000 – 8 000.**

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <repo, branch, cutoff commit, what is in/out of scope>
    CLIENT: <client name for report header — optional>

Run on a clean checkout. The §7 REPORT block is the deliverable.

---

## The prompt (copy from here)

```
You are producing a formal Security & Code-Quality Audit report that the
client will receive as a PDF. The §7 REPORT is the deliverable. Everything
else is your scratch work.

1. SCOPE
   Restate the audit scope in one paragraph: repository, branch, commit
   SHA, languages/frameworks present, explicit in-scope and out-of-scope
   items, audit date. Run `git rev-parse HEAD` and `git log -1 --format=%cI`
   so the report is reproducible.

2. METHODOLOGY
   List what you actually ran. Examples:
   - OWASP Top 10 (2021) review against the codebase
   - Static pattern scan for unsafe sinks (SQL string concat, shell exec,
     deserialization, XSS sinks, path traversal, SSRF, open redirects)
   - Secret scan (`grep -rEn 'AKIA|sk_live|-----BEGIN|password\s*=' …`)
   - Dependency CVE check (`npm audit --json`, `pip-audit`, `cargo audit`,
     `go list -m -u all`)
   - Auth/Authz design review at every endpoint or controller
   - Crypto usage review (algorithms, IVs, randomness sources)
   Cap exploration at 30 tool calls.

3. FINDINGS
   For each finding (max ~20 — quality over quantity):
     - ID:        AUD-001, AUD-002 …
     - Title:     ≤80 chars
     - Severity:  CRITICAL / HIGH / MEDIUM / LOW / INFO
                  CRITICAL = unauth RCE, full data exfil, auth bypass
                  HIGH     = privilege escalation, stored XSS, IDOR
                  MEDIUM   = info disclosure, weak crypto, CSRF gaps
                  LOW      = hardening / defense-in-depth gaps
                  INFO     = observations, not exploitable
     - CWE / OWASP: e.g. CWE-89 / A03:2021 Injection
     - Location:  file:line (must exist — verify before citing)
     - Evidence:  the actual code snippet (≤8 lines)
     - Impact:    one sentence on what an attacker / outage achieves
     - Reproduction: minimal steps or curl/payload if applicable
     - Remediation: concrete fix, ideally with corrected snippet

4. STATISTICS
   Counts by severity, top 5 affected files, dependency vulnerabilities
   by severity. Tables only — no prose.

5. EXECUTIVE SUMMARY
   ≤250 words, non-technical. Structure:
     - Overall posture: STRONG / ACCEPTABLE / CONCERNING / CRITICAL
     - Top 3 risks in plain language (no jargon)
     - Top 3 recommended actions, ordered by ROI
     - What this audit did NOT cover (see §6 LIMITATIONS)

6. LIMITATIONS & DISCLAIMER  (mandatory — do not omit)
   Verbatim, but tailored to scope:
     "This audit is a static code review assisted by an AI agent. It is
      NOT a penetration test, NOT a dynamic security assessment, and NOT
      a compliance certification (SOC2, ISO 27001, PCI-DSS, etc.). No
      runtime behaviour was probed. Findings reflect the code as of
      commit <SHA> on <date>. Dependencies were checked against public
      CVE databases on <date>; new CVEs may have been disclosed since.
      Risk ratings are advisory and based on standard CWE/CVSS heuristics
      applied without environmental context. For regulated workloads,
      engage a certified pentest provider."

7. REPORT  ← the deliverable
   Wrap a single polished Markdown document between markers:
     --- REPORT START ---
     # Security & Code-Quality Audit
     **Client:** <…>   **Repository:** <…>   **Commit:** <SHA>   **Date:** <YYYY-MM-DD>

     ## Executive Summary   (§5)
     ## Scope                (§1)
     ## Methodology          (§2)
     ## Findings             (§3, grouped by severity desc)
     ## Statistics           (§4)
     ## Limitations          (§6, verbatim)
     ## Appendix: Commands run   (the actual commands from §2)
     --- REPORT END ---

HARD RULES
- Every finding cites file:line. Verify the line exists before writing
  it — invented locations destroy the report's credibility.
- No finding without a concrete Impact sentence and a concrete
  Remediation. "Consider reviewing" is not a remediation.
- Severity follows the schema above strictly. Do not inflate.
- The §6 disclaimer is mandatory and verbatim (with substitutions).
  Omitting it transfers liability you do not want.
- Respond in the same language as the SCOPE input.

SCOPE:
```

---

## What the buyer gets

A single Markdown file (the §7 block) that pandoc converts to a PDF: cover
page, executive summary, findings table, per-finding detail, methodology
appendix, signed limitations page. Looks like a €5 000 consulting
deliverable because it is structurally the same as one.
