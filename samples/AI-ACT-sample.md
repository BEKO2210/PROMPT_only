# Sample: AI-ACT conformity for fictional HR-tech SaaS

**Source prompt:** `AI-ACT.md`
**Engagement:** EU AI Act conformity assessment for "Aurora Talent"
(fictional B2B HR-tech using LLM-based resume-screening sold to
~80 EU employers).

All entities, findings, and citations are **fictional**.
Demonstrates the high-stakes classification work + article-grounded
gap analysis that drives this engagement.

---

# EU AI Act Conformity Assessment — Aurora Talent Resume Screener

**Client:** Aurora Talent SAS (Paris)
**Role under AI Act:** PROVIDER (places on EU market)
**Markets served:** FR, DE, NL, ES, IT
**Assessment date:** 2026-05-14   **System version:** v4.2.1

---

## Executive Summary

**Verdict: HIGH-RISK under Art. 6 + Annex III §4 (Employment).
High-risk obligations enforceable from 2 August 2026 — 78 days.
Material gaps in 5 of 9 Chapter III obligation areas. Remediation
plan: 90-120 days realistic.**

Aurora's product ranks job candidates for hiring decisions. This
falls squarely in Annex III §4(a) ("recruitment or selection of
natural persons, in particular to place targeted job
advertisements, to analyse and filter job applications, and to
evaluate candidates"). Classification is not borderline.

**Top 3 compliance gaps**
1. **No risk management system per Art. 9** — informal risk
   tracking only; no documented framework
2. **No technical documentation per Art. 11 + Annex IV** — most
   sections require new authoring (data governance, accuracy
   metrics, intended use, etc.)
3. **No designed-in human oversight per Art. 14** — current
   product auto-ranks candidates; recruiter sees rank but no
   designed-in pause / review gate

**Estimated remediation effort:** 12-18 person-weeks across
engineering, product, legal, and DPO. Calendar timeline 3-4 months
at current team capacity.

**Penalty exposure if non-compliant by 2 August 2026:** up to
€15M or 3% global annual turnover per Art. 99(4) — for Aurora's
~€4M ARR, the percentage figure is the binding cap.

---

## 1. Scope & Role

- **System:** Aurora Talent Resume Screener v4.2.1
- **Provider:** Aurora Talent SAS (Paris), EU establishment
- **Use case:** B2B SaaS sold to ~80 EU employers (~12k recruiters
  use it monthly). Recruiters upload resumes; system returns
  ranked list of candidates per role.
- **Models in use:** OpenAI `gpt-4o-2024-08` (primary) +
  proprietary fine-tuned classifier on top
- **Deployment:** SaaS API + web UI

Multiple roles possible under Art. 3:
- **PROVIDER** under Art. 3(3): places the system on EU market
- The deployers (employer customers) take on Art. 26 obligations
  separately

---

## 2. Classification

### Prohibited (Art. 5) — checked

NONE applicable. The system does not perform: subliminal
manipulation, exploit vulnerabilities, social scoring, predictive
policing, untargeted scraping, workplace emotion recognition,
sensitive-attribute biometric categorisation, or real-time
remote biometric identification.

→ **NOT prohibited.**

### High-Risk (Art. 6 + Annex III) — applicable

**Annex III §4(a)** explicitly covers AI systems intended to be
used "for the recruitment or selection of natural persons, in
particular to analyse and filter job applications, and to evaluate
candidates."

Aurora's product analyses and filters job applications, and
evaluates candidates by ranking. This is HIGH-RISK by direct
match — no carve-out applies (Art. 6(3) exceptions require the
system to perform only narrow procedural tasks; ranking is
substantive).

→ **HIGH-RISK. Full Chapter III obligations apply.**

### Transparency obligations (Art. 50)

Additionally applies even for high-risk systems:
- Candidates whose applications are screened by AI must be
  informed (Art. 50(3) — under deployer Art. 26(6) but provider
  must support transparency)

---

## 3. System Inventory

- **Foundation model:** `gpt-4o-2024-08` (OpenAI L.L.C.) —
  hosted in OpenAI EU data residency tier (Ireland)
- **Custom fine-tune:** `aurora-classifier-v3` — proprietary LoRA
  on top of `gpt-4o` via OpenAI fine-tuning API
- **Training data origin:**
  - 250k resumes (purchased from 3rd-party HR-data vendor;
    license verified in §5)
  - 50k anonymised employer-provided historical hiring decisions
    (under DPA with each employer)
- **Languages:** EN (primary), FR, DE, ES, NL
- **Deployment endpoints:** REST API + web UI at `app.auroratalent.eu`

---

## 4. High-Risk Obligations (Chapter III)

| Article | Obligation | Status | Evidence / Gap |
|---|---|---|---|
| Art. 9 | Risk management system | 🔴 MISSING | Informal risk tracking in Notion; no documented framework, no iterative review schedule |
| Art. 10 | Data governance (quality, bias, representativeness) | 🟡 PARTIAL | Dataset documented (`data/README.md`) but no formal bias-testing protocol; bias evaluation last performed 2025-Q2 |
| Art. 11 + Annex IV | Technical documentation | 🔴 MISSING | No consolidated Annex IV documentation; pieces exist in scattered docs |
| Art. 12 | Record-keeping (automatic logs) | 🟡 PARTIAL | Inference logs retained 30 days; Art. 12 requires "appropriate" retention typically interpreted as full operational lifetime — need policy + evidence |
| Art. 13 | Transparency to deployers (instructions for use) | 🟡 PARTIAL | API docs exist but lack: capabilities/limitations, accuracy metrics per population, foreseeable misuse |
| Art. 14 | Human oversight | 🔴 MISSING | Product auto-ranks; no designed-in pause / review / override gate. Recruiters CAN ignore the ranking but the product does not require it. |
| Art. 15 | Accuracy, robustness, cybersecurity | 🟡 PARTIAL | Accuracy measured on aggregate (78%); not disaggregated by demographic group; no robustness testing against adversarial / drift inputs |
| Art. 17 | Quality management system (providers) | 🟡 PARTIAL | ISO 9001 framework partially adopted; AI-specific QMS gaps |
| Art. 72 | Post-market monitoring | 🔴 MISSING | No formal post-market monitoring system; customer complaints handled ad-hoc |
| Art. 73 | Serious incident reporting | 🔴 MISSING | No defined procedure for reporting to market surveillance authority |
| Art. 43 + 49 | Conformity assessment + CE marking | 🔴 MISSING | No conformity assessment performed; CE marking not affixed |

---

## 5. Transparency Obligations (Art. 50)

| Requirement | Status |
|---|---|
| Inform candidates that AI is screening their application | 🟡 PARTIAL — depends on deployer integration; Aurora provides template language but does not enforce display |
| Synthetic-content labelling | N/A — system does not generate content shown to public |
| Emotion / biometric categorisation notice | N/A — system does not perform these |

---

## 6. GPAI Obligations (Art. 53-55)

**NOT APPLICABLE as provider** — Aurora uses GPAI (OpenAI's
gpt-4o) but is not itself a GPAI provider. Upstream obligations
fall on OpenAI.

However: Aurora must obtain from OpenAI sufficient information
for downstream compliance (Art. 53(1)(b)). Currently relies on
OpenAI public documentation; may need to request additional
contractual disclosure.

---

## 7. Prohibited-Practice Gate (re-check after §4-§6)

Re-walked the prohibited-practice list against current product
roadmap. No prohibited practices introduced. NONE applicable.

---

## 8. Conformity Gaps & Roadmap

Ranked by deadline:

| # | Gap | Article | Effort | Target |
|---|---|---|---|---|
| 1 | Risk management system documented + reviewed | Art. 9 | 3 PW | 2026-06-30 |
| 2 | Technical documentation per Annex IV | Art. 11 | 4 PW | 2026-07-15 |
| 3 | Human-oversight designed-in (recruiter must explicitly approve before rank is used downstream) | Art. 14 | 2 PW + product change | 2026-07-15 |
| 4 | Accuracy disaggregated by demographic group + reported | Art. 15 | 2 PW | 2026-07-30 |
| 5 | Bias-testing protocol + quarterly cadence | Art. 10 | 1 PW + ongoing | 2026-07-30 |
| 6 | Post-market monitoring system | Art. 72 | 2 PW | 2026-08-01 |
| 7 | Serious-incident reporting procedure | Art. 73 | 0.5 PW | 2026-08-01 |
| 8 | Conformity assessment + CE marking (internal-control path per Art. 43(2)) | Art. 43, 49 | 1 PW (assuming above complete) | 2026-08-02 |

Total: ~15-17 person-weeks. Calendar 90-120 days assuming
focused team allocation.

---

## 9. Limitations

This assessment was produced by an AI agent from system
documentation and code as of 2026-05-14. It is NOT legal advice
and does NOT constitute a Conformity Assessment under Art. 43.
Risk classification under Art. 6 + Annex III requires legal
counsel review, particularly for borderline use-cases —
recruitment is NOT borderline. Items marked PARTIAL reflect what
is visible in code and documentation; operational controls
require interviews to verify. Reliance on this document for
placing a high-risk AI system on the EU market must be
supplemented by a notified-body assessment where required.

[Full disclaimer per `_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`]

---

*Report length in actual delivery: 36 pages including detailed
Annex IV mapping and recommended documentation templates. Sample
shows ~25%. Engagement fee: €9 500 for the assessment + €18 000
follow-on engagement for the documentation authoring.*
