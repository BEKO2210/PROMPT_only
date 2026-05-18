# Sample: DD report for a fictional Series-B SaaS acquisition

**Source prompt:** `DD.md`
**Engagement:** Technical Due Diligence on behalf of "Helios
Capital" (fictional PE firm) evaluating acquisition of
"Verdant Health" (fictional Series-B clinical-trial-management
SaaS) at €120M valuation.

All companies, people, financials, and findings are **fictional**.
This shows the deliverable shape an investment committee would
actually receive.

---

# Technical Due Diligence — Verdant Health, Inc.

**Prepared for:** Helios Capital — Investment Committee
**Commit assessed:** `verdant-platform @ 8f3a2d1c` (2026-04-29)
**Date:** 2026-05-12
**Confidentiality:** [Highly Confidential — Investment Decision Material]
**Prepared by:** [Your firm] under engagement HC-DD-2026-014

---

## Executive Summary

**Verdict: ACCEPTABLE WITH CAVEATS — proceed at adjusted terms.**

Verdant has built a domain-strong clinical-trial-management
platform with credible product-market fit (signals: 38 enterprise
customers, 130% NRR on 2025 cohort, 9-figure contracted pipeline).
The codebase reflects 4+ years of focused work in a regulated
domain (HIPAA + 21 CFR Part 11), with non-trivial moat in the
trial-protocol DSL and audit-trail subsystem.

**Top 3 Strengths**
- Domain-specific abstractions (trial protocol DSL, audit chain)
  represent ~18 person-years of work; would cost €4–7M to
  recreate
- Test coverage 71% on critical path; CI green-rate 94% over
  last quarter
- Architecture supports stated scale (10× current load
  achievable without redesign)

**Top 3 Risks (R/A/G)**
- 🔴 **Key-person concentration**: 67% of commits in past 12
  months from one engineer (CTO/co-founder). Bus-factor on
  trial-protocol DSL is 1. Retention plan is critical condition
  of deal.
- 🟡 **OSS licence contamination risk**: 2 GPL-3.0 components
  (`pdf-render-lib`, `audit-store`) embedded in the proprietary
  product. Either licence purchase, replacement, or repo-split
  required before any commercial relicensing event.
- 🟡 **HIPAA BAA gaps**: 4 third-party vendors (OpenAI, Datadog,
  one analytics, one CDN) process PHI without verifiable BAAs
  in the repo. Likely solvable but creates breach-notification
  exposure today.

**Recommended Deal Conditions**
1. **Retention escrow**: 20% of CTO consideration into 2-year
   vesting tied to integration milestones
2. **Reps & warranties**: explicit on OSS licence cleanliness,
   BAA execution, and lack of disclosed-but-undocumented system
   dependencies
3. **Post-close investment**: budget €1.5–2.5M and 6 months for
   licence cleanup, second-engineer onboarding to DSL,
   formalising BAAs

---

## R/A/G Dashboard

| Section | Rating | Headline |
|---|---|---|
| 1. Codebase Health | 🟢 GREEN | Clean, tested, actively maintained |
| 2. Architecture | 🟢 GREEN | Scales to thesis; modular |
| 3. Security Posture | 🟡 AMBER | Solid design; BAA gaps in §7 |
| 4. Dependencies & Licensing | 🟡 AMBER | GPL contamination identified |
| 5. Operations & Reliability | 🟢 GREEN | Mature CI/CD, observability |
| 6. Team & Key-Person Risk | 🔴 RED | Single-engineer concentration |
| 7. IP Hygiene | 🟡 AMBER | Copyright headers inconsistent; cleanable |
| 8. Roadmap & Defensibility | 🟢 GREEN | DSL + audit chain = real moat |
| 9. Investment Thesis | 🟢 GREEN | Asset supports buyer thesis at terms |

---

## 1. Codebase Health

- **Size**: 184k LOC. 71% Python, 18% TypeScript (web), 7% Go
  (high-throughput services), 4% other.
- **Age**: oldest file 2022-03-14; newest 2026-04-29.
- **Activity**: 12-month commit rate avg 47/week (P50), 12/week
  (P10), 89/week (P90). Healthy.
- **Test coverage**: 71% line coverage, 64% branch (`pytest-cov`
  report at `8f3a2d1c`). Critical-path modules: 87%.
- **CI**: 94% green-rate over last quarter. Failures cluster in
  flaky integration tests against a deprecated staging service.
- **Build**: clean checkout → green build in 22 minutes
  (verified).

**Rating: 🟢 GREEN.** No structural concerns.

---

## 6. Team & Key-Person Risk

From `git log --since="12 months ago"`:

```
Top committers by lines:
  1. Marcus Liu      (CTO/co-founder)  342k LOC modified — 67%
  2. Priya Iyer      (Eng L7)           58k LOC          — 11%
  3. Jamal Carter    (Eng L6)           42k LOC          —  8%
  4. Three others    combined            72k LOC          — 14%
```

- **Marcus Liu** has touched every file in `core/protocol_dsl/`
  in the last 12 months. Bus factor on this subsystem: 1.
- **Marcus Liu** is also the sole author of `core/audit_chain/`
  — the second moat component.
- Priya Iyer (10% commits) has not contributed to either core
  subsystem.
- Three engineering hires in last 6 months (per LinkedIn);
  onboarding visible in commit history but no DSL touches yet.

This is the deal's single largest technical risk.

**Recommended deal conditions** (echo to Exec Summary):
- 20% of Marcus's consideration in 2-year escrow tied to
  documented knowledge transfer milestones
- Specific milestone: two non-founder engineers commit
  independently to `core/protocol_dsl/` within 6 months of close
- Standard founder lock-up (24-month) with carve-outs for
  customary exits

**Rating: 🔴 RED. Requires deal-term remediation.**

---

## 12. Limitations

This Technical Due Diligence report was produced by an AI agent
on 2026-05-12 from static analysis of the repository at commit
8f3a2d1c. It is **NOT** a substitute for: (a) legal due
diligence (contracts, IP ownership, employment agreements,
open-source compliance review by counsel), (b) commercial due
diligence (customer interviews, market sizing, revenue quality),
(c) financial due diligence (accounting standards, ARR quality,
churn cohorts), or (d) operational interviews with the engineering
team.

[Full disclaimer continues per `_LEGAL/MA-DD-DISCLAIMER.md`]

---

*Report length in actual delivery: 42 pages. This sample shows
~10% of total — the Executive Summary, R/A/G Dashboard, one full
section (§6, the highest-stakes finding), and the Limitations.
Other sections (§1–§5, §7–§11) follow the same template, each
with its own evidence and rating.*

*Engagement fee for this report: €38 000 plus expenses.*
