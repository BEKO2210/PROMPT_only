# CHANGELOG — PROMPT_only library

Material changes to the library. Per-prompt versioning lives at the
top of each prompt file (planned, not yet rolled out).

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
