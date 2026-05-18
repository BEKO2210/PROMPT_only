# CHANGELOG — PROMPT_only library

Material changes to the library. Per-prompt versioning lives at the
bottom of each prompt file (in a `## Version` section).

## 2026-05-18 — Adversarial self-roleplay review on 5 sample prompts

Self-roleplay multi-reviewer stress test applied to the 5 A-tier prompts
that have samples: SHIP, HUNT, DD, GDPR, RAG-AUDIT. Documented in
[`ADVERSARIAL-REVIEW.md`](./ADVERSARIAL-REVIEW.md).

13 findings accepted, 3 rejected (each with documented reason).

### SHIP → v1.4
- New HARD RULE: confirm scope-OK before editing files marked in
  regulatory scope (HIPAA / GDPR / PCI / SOX / financial)
- Softened "≤40 lines" rule: trivial tasks can collapse sections to
  one line each; the discipline is the SEQUENCE, not verbosity

### HUNT → v1.1
- New HARD RULE: PII in §2 REPRO requires sanitised / synthetic data
- New HARD RULE: non-deterministic bugs require ≥20-run §7 verification
- New HARD RULE: post-fix, also run existing test suite (catches
  collateral regressions beyond the §8 new test)

### DD → v1.1
- §5 DEPENDENCIES & LICENSING: scan for change-of-control triggers
  in commercial contracts and OSS license clauses
- §7 TEAM & KEY-PERSON: weight review activity + design-doc authorship
  + incident-escalation patterns alongside commit volume (senior
  engineers commit less but matter more)

### GDPR → v1.1
- §2 PII INVENTORY: include tracking technologies (cookies, pixels,
  fingerprinting, server-side analytics) — these create personal data
  even when claimed "anonymised"
- §4 PURPOSE & LEGAL BASIS: Art. 6(1)(f) legitimate interests require
  documented LIA; absence is CRITICAL gap
- §7 THIRD-COUNTRY TRANSFERS: SCC alone insufficient post-Schrems-II;
  TIA (Transfer Impact Assessment per EDPB Recommendations 01/2020)
  required per transfer; new status `VISIBLE_NEEDS_TIA`

### RAG-AUDIT → v1.1
- §2 CORPUS QUALITY: PII inventory in corpus (cross-reference to
  GDPR.md / HIPAA.md scope); flag US-hosted LLMs receiving EU PII
- §5 RETRIEVAL METRICS: add context-precision, faithfulness, answer-
  correctness (RAGAS-style) alongside recall/MRR/nDCG
- §5 RETRIEVAL METRICS: sample-size guidance (30=directional only,
  100+=production, 300+=tail-behaviour)

### Honest caveat
This was self-roleplay, not real external model review. SHIP's
quality comes from three rounds of actual external review. The other
four prompts have now had one round of simulated review; real
external review of all five remains the highest-leverage next step.

## 2026-05-18 — A-tier quality hardening (Quality gates + Versioning + When NOT to use)

Applied to the 20 highest-stakes prompts (the A-tier from
`LIBRARY-AUDIT.md`):

SHIP, HUNT, MAP, DD, GDPR, AI-ACT, DORA, PCI-DSS, HIPAA, ISO-27001,
POSTMORTEM, RAG-AUDIT, EVAL-DESIGN, FINE-TUNE-PLAN, PROMPT-SECURITY,
AGENT-BUILDER, PROPOSAL, RETAINER, CHECKOUT-AUDIT, PR-PITCH.

Each now ships with three new sections at end of file:

1. **`## Version`** — explicit version tag (mostly v1.0; SHIP at v1.3
   reflecting three rounds of external review)
2. **`## When NOT to use this prompt`** — 4 explicit negative-indication
   bullets pointing users to the right alternative prompt or to walk
   away from the engagement entirely
3. **`## Quality gate — verify before treating as done`** — 6–7 checkbox
   verification items the user runs on the agent's output before
   delivering. Each checklist item references the prompt's specific
   hard rules and the canonical disclaimer file from `_LEGAL/`

The Quality Gate is the highest-leverage addition: it gives buyers a
concrete way to verify they got the deliverable they paid for, and
gives the user / consultant a clear hand-off check before shipping
to a client.

The Version + When NOT sections close two of the "Bottom 10 problems"
identified in LIBRARY-AUDIT.md. The Quality Gate closes a third.



## 2026-05-18 — Pruning, samples, disclaimer extraction (Option A from audit)

### Removed
- `TEST-PLAN.md` — too generic; competitive parity with any testing
  consultancy template. Recommendation in `LIBRARY-AUDIT.md` to cut.
- `DEAD-CODE.md` — niche, high false-positive risk despite caveats,
  rarely the deliverable a client pays for.

### Recategorised (from sellable to internal leverage)
- `STATUS-REPORT.md` — kept, marked ⚙️ in README. Internal hygiene
  habit, not a standalone product.
- `SCOPE-CHANGE.md` — kept, marked ⚙️. Captures upsell revenue but
  buyers don't pay for the template itself.
- `INVOICE-FOLLOWUP.md` — kept, marked ⚙️. AR self-defence.
- `JOB-DESCRIPTION.md` — kept, marked ⚙️. Most companies write
  their own JDs.
- `INTERVIEW-LOOP.md` — kept, marked ⚙️. Bundles with broader
  hiring strategy; rarely standalone.
- `CONTRACT-REVIEW.md` — already internal; explicit ⚙️ mark added.
  NOT legal advice; self-defence only.

### Added
- `_LEGAL/` folder containing canonical disclaimer texts:
  - `_LEGAL/README.md` — folder purpose and update process
  - `_LEGAL/AI-ASSISTED-METHODOLOGY.md`
  - `_LEGAL/AUDIT-DISCLAIMER.md`
  - `_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`
  - `_LEGAL/MA-DD-DISCLAIMER.md`
  - `_LEGAL/CONTRACT-NOT-LEGAL-ADVICE.md`
  - `_LEGAL/SECURITY-NOT-PENTEST.md`
  - `_LEGAL/ESTIMATES-NOT-GUARANTEES.md`
- `samples/` folder with redacted realistic examples:
  - `samples/SHIP-sample.md`
  - `samples/HUNT-sample.md`
  - `samples/DD-sample.md`
  - `samples/GDPR-sample.md`
  - `samples/RAG-AUDIT-sample.md`

### README updates
- Tier 1 reduced to 6 prompts (was 8)
- Talent / HR section in Tier 2 removed; entries moved to Tier 3
  ⚙️ internal leverage
- Internal-leverage prompts marked with ⚙️ icon for at-a-glance
  identification
- New "Sample outputs" section pointing to `samples/`
- New "Disclaimers — single source of truth" section pointing to
  `_LEGAL/`
- New "Recommended bundles" section with 8 high-value engagement
  packages
- "Status" section rewritten to honestly describe the audit and
  pruning round

### Net effect
Library moves from 80 prompts (with some weak / mis-categorised
entries) to:
- 78 active prompts (TEST-PLAN, DEAD-CODE removed)
- Cleaner tier classification (6 internal leverage downgrades)
- 5 sample outputs proving deliverable shape
- 7 canonical disclaimer documents
- 8 explicit engagement bundles in README

## 2026-05-18 — Library audit

Added `LIBRARY-AUDIT.md` — brutally honest review of all 80 prompts
against "best in the world" bar. Surfaced the prune-and-deepen plan
that drove the changes above.

## 2026-05-17 (multiple batches) — Library growth to 80 prompts

Earlier batches added:
- Tier 1 expansion (TEST-PLAN, DEAD-CODE — both since removed)
- Tier 2 strategic (AUDIT, PERF, ARCH, MIGRATE, DD)
- Tier 2 compliance general (SBOM, A11Y, API-DOC, GDPR, POSTMORTEM,
  SEO, THREATMODEL, COST, RUNBOOK, OBSERVABILITY, DEPENDENCY-UPGRADE)
- Tier 2 compliance sector (AI-ACT, HIPAA, PCI-DSS, ISO-27001, DORA,
  PROMPT-SECURITY, K8S-AUDIT, MOBILE-PRIVACY)
- Tier 2 web (LANDING-PAGE, WEBSITE-FULL, PRICING-PAGE, DOCS-SITE,
  PRODUCT-PAGE, CONVERSION-AUDIT, COPY-AUDIT, DESIGN-AUDIT, TRUST-
  AUDIT, CHECKOUT-AUDIT, CTA-OPTIMIZER, FORM-OPTIMIZER, ONBOARDING-
  AUDIT, COMPETITOR-TEARDOWN)
- Tier 2 AI engineering (RAG-AUDIT, EVAL-DESIGN, FINE-TUNE-PLAN,
  AI-DATASET, MODEL-CARD)
- Tier 2 data (ANALYTICS-AUDIT, DASHBOARD-DESIGN, METRICS-FRAMEWORK,
  DATA-PIPELINE-AUDIT)
- Tier 3 business ops (DISCOVERY, PROPOSAL, AGENT-BUILDER, RETAINER,
  CONTRACT-REVIEW, CASE-STUDY, RELEASE-NOTES, PITCH)
- Tier 3 marketing (SEO-CONTENT, EMAIL-SEQUENCE, AD-COPY, SOCIAL-
  CALENDAR, NEWSLETTER, YOUTUBE-SCRIPT, PR-PITCH, PODCAST-PITCH,
  WEBINAR-PLAN)
- Tier 3 agency ops (PROJECT-KICKOFF, SCOPE-CHANGE, STATUS-REPORT,
  CLIENT-OFFBOARDING, INVOICE-FOLLOWUP, TESTIMONIAL-REQUEST)
- HR (JOB-DESCRIPTION, INTERVIEW-LOOP — both now ⚙️ internal)

## 2026-05-17 — Library founding

`PROMPT.md` (SHIP) created and refined through three rounds of
external model review (Kimi 2.6, Gemini, third-party reviewer).
This established the design contract applied to all subsequent
prompts.
