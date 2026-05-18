# Sample: GDPR Assessment + Article 30 RoPA for fictional EU SaaS

**Source prompt:** `GDPR.md`
**Engagement:** GDPR assessment for "Cumulus Customer Insights GmbH"
(fictional German B2B SaaS analyzing customer-support transcripts
with LLMs).

All entities, fields, and findings are **fictional**. This shows
deliverable shape including the Schrems-II analysis that drives
much of the recurring DACH-market demand.

---

# GDPR Assessment & Article 30 Record of Processing Activities

**Controller:** Cumulus Customer Insights GmbH
(Hauptstraße 47, 10115 Berlin, HRB 247891)
**Application:** Cumulus Platform v4.2 (production at
`8f3a2d1c`)
**Role under GDPR:** Processor (acting for B2B customers who are
controllers of their end-users' data)
**Jurisdiction:** EU (data subjects across DE, FR, NL, ES, IT)
**Assessment date:** 2026-05-08
**Assessor:** [Your firm]
**For internal adoption by:** Cumulus DPO

---

## Executive Summary

**Overall posture: PARTIAL — material gaps require remediation
before next supervisory review.**

Cumulus processes customer-support transcripts (including PII
and occasional Art. 9 special-category content) on behalf of 23
B2B controllers, using OpenAI and Anthropic APIs hosted in the US.

**Top 5 Gaps**
1. **Schrems-II SCC review missing for OpenAI** despite PHI-class
   data being sent (severity: HIGH)
2. **No retention enforcement** on `transcripts` table — records
   accumulate indefinitely (Art. 5(1)(e) violation)
3. **Right-to-erasure implementation deletes user record but
   not associated `embeddings` table** (incomplete Art. 17)
4. **Cookie consent: tracking SDKs fire before consent banner**
   in EU regions (ePrivacy + DSGVO violation)
5. **Article 22 trigger present**: the LLM classification flagged
   in `models/risk_classifier.py:88` produces auto-decisions
   affecting customer accounts. No human-review step. Either
   add human-in-the-loop or document Art. 22(2)(a) legal basis.

**Top 3 Risks**
- Supervisory authority (Berlin BfDI) audit exposure given §7
  third-country transfers without SCC documentation
- Class-action exposure under §8 retention gap (German
  Sammelklagengesetz 2023)
- Customer-side contractual breach: standard B2B DPAs require
  Cumulus to maintain SCCs for sub-processors

---

## 2. PII Inventory (excerpt — 47 fields total)

| Field | Class | File:Line | Storage | Notes |
|---|---|---|---|---|
| `customers.email` | IDENTIFIER | `models/customer.py:12` | Postgres `customers` | encrypted at rest |
| `transcripts.body` | BEHAVIOURAL + occasional SPECIAL | `models/transcript.py:34` | Postgres `transcripts` + Snowflake `analytics_transcripts` | full message text; may contain Art. 9 data when end-users discuss health / legal |
| `transcripts.author_email` | IDENTIFIER | `models/transcript.py:36` | as above | not hashed |
| `embeddings.vector` | DERIVED PII | `models/embedding.py:18` | Pinecone (US region!) | embeddings of transcript text; partial re-identification risk |
| `users.locale` | QUASI-IDENTIFIER | `models/user.py:22` | Postgres | not sensitive alone |
| ... 42 more fields ... | | | | |

---

## 7. Third-Country Transfers (Schrems-II focus)

| Service | Provider entity | Data sent | Safeguard status |
|---|---|---|---|
| LLM inference (classification) | OpenAI L.L.C. (US) | Full transcript bodies → US | 🔴 **VISIBLE_NEEDS_SCC** — no SCC reference in code or DPA folder; OpenAI 2024 enterprise BAA + SCC available but NOT executed per `legal/contracts/` review |
| LLM inference (summarization) | Anthropic PBC (US) | Transcript summaries → US | 🟡 **VISIBLE_NEEDS_SCC** — Anthropic SCC available; status unclear |
| Vector store | Pinecone (US-east-1) | Embeddings of all transcripts → US | 🔴 **VISIBLE_NEEDS_SCC** — SCC required; not in legal folder |
| Monitoring | Datadog (US) | Application logs (PII redacted) → US | 🟢 **VISIBLE_ADEQUATE** — Datadog EU instance available; current US instance has SCC on file |
| Error tracking | Sentry (US) | Stack traces with occasional PII in error payloads | 🟡 **VISIBLE_NEEDS_SCC** — need PII-scrubbing config review |
| CDN | Cloudflare | Edge logs | 🟢 **VISIBLE_ADEQUATE** — EU-only routing configured |
| Email | SendGrid (US) | Transactional email content | 🟡 **VISIBLE_NEEDS_SCC** — SCC available |

Schrems-II analysis: with EU customers' PII in scope, the three
🔴 transfers require either (a) SCC + supplementary measures,
(b) move to EU-hosted alternatives, or (c) explicit customer
controller consent recorded in DPAs. Current state exposes
Cumulus to direct DSGVO enforcement and contractual breach
against customers.

---

## 8. Article 30 Record of Processing Activities (draft)

**Controller / Processor**: Cumulus Customer Insights GmbH —
Processor for customer accounts

**DPO contact**: Hannah Bergmann, dpo@cumulus.io, +49 30 12345678
(per HR records; not visible in code repo)

**Purposes of processing**
- Provide customer-support-transcript analytics service to B2B
  customers (controllers)
- Train internal classification models (anonymised data only —
  but see §4 below)

**Categories of data subjects**
- End-users of B2B customer support channels
- Cumulus B2B customer staff

**Categories of personal data**
- Identifiers (email, account ID)
- Behavioural (full transcript text)
- Occasional special-category data (health, legal, etc. mentioned
  by end-users in support conversations) — Art. 9 trigger

**Recipients**
- OpenAI, Anthropic, Pinecone, Datadog, Sentry, Cloudflare,
  SendGrid (per §7)
- B2B customer (the controller of the data)

**Third-country transfers**
- US (see §7) — current safeguard status mixed; remediation
  needed

**Retention**
- Currently: indefinite (gap — recommended: 24 months active +
  6 months archived + delete)

**TOMs (Art. 32)**
- Encryption in transit (TLS 1.3 enforced)
- Encryption at rest (Postgres TDE, S3 SSE-KMS)
- RBAC (Auth0 + custom roles)
- Audit logging (per request)
- Access controls reviewed quarterly per `docs/security/access.md`

---

## 11. Limitations & Disclaimer

This assessment was produced by an AI agent from static analysis
of the codebase at commit 8f3a2d1c on 2026-05-08. It is NOT
legal advice and does NOT constitute a DPIA (Data Protection
Impact Assessment per Art. 35).

[Full disclaimer continues per `_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`]

---

*Report length in actual delivery: 38 pages. This sample shows
~12% — Executive Summary, PII Inventory excerpt, the Schrems-II
table (the highest-value section), the Article 30 RoPA draft,
and Limitations.*

*Engagement fee for this report: €6 500.*
