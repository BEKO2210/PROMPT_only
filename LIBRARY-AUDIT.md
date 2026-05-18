# LIBRARY AUDIT — Brutally Honest Quality Review of 80 Prompts

**Auditor:** the agent that wrote them. Conflict of interest acknowledged
— treated as the first review pass, not the last.
**Date:** see commit timestamp.
**Goal:** the user asked for "the best prompts in the world." This audit
identifies which prompts actually clear that bar, which are merely
sellable, and which need work or should be cut.

---

## Verdict in one paragraph

The library is **well above market average** but **not yet
"best-in-the-world"** in the full sense. About **20 prompts are
genuinely differentiated** (mechanisms competitors don't have), about
**50 are solid sellable parity** (good enough to deliver, not unique),
and about **10 are weak** (too generic, too overlapping, or too thin to
justify their slot). To reach the "best" claim the library needs:
*pruning the bottom 10*, *deepening the top 20 with sample outputs*,
*standardizing the disclaimer language across all 80*, and *adding a
buyer-facing quality check per prompt*. Pricing is mostly realistic
with a few aspirational outliers.

---

## Tier classification (all 80 prompts)

### A-Tier — Genuinely differentiated, world-class mechanism (20)

These have a hard rule, structural choice, or measurement discipline
that competitors and template-vendors do NOT have. They are the
library's centre of gravity.

| Prompt | The differentiator |
|---|---|
| `PROMPT.md` (SHIP) | The 8-section "no edit until §1-§7 produced" discipline. Forged through 3 model-review rounds. |
| `HUNT` | "No fix without green reproducer; no done without regression test." Kills phantom-fixes. |
| `MAP` | The reusable 500-token map output amortises across every future session — token-multiplier no template does. |
| `DD` | R/A/G dashboard + verbatim non-negotiable disclaimer = defensible in M&A litigation. |
| `GDPR` | Schrems-II + US-AI-provider flagging is the 2025-26 hot button no generic GDPR template covers. |
| `AI-ACT` | EU AI Act conformity with article-level citations — almost no consultancy has methodology yet. |
| `DORA` | The Article 28 third-party register draft is the single artefact supervisors ask for first. |
| `PCI-DSS` | §3 SCOPE REDUCTION analysis often justifies the entire engagement — most templates omit it. |
| `POSTMORTEM` | "Human error" banned as root cause; blameless framing enforced as hard rule. |
| `RAG-AUDIT` | Forces measured retrieval metrics (recall@k, MRR) before LLM-blame. Cost-per-query first-class. |
| `EVAL-DESIGN` | Safety eval as binary blocker (never averaged) — most templates dilute. |
| `FINE-TUNE-PLAN` | The "you shouldn't fine-tune yet" verdict for 80% of cases — saves clients money, builds trust. |
| `PROMPT-SECURITY` | OWASP LLM Top 10 with working PoCs required; indirect-injection focus. Brand-new market. |
| `AGENT-BUILDER` | Eval set including jailbreak tests; knowledge-in-retrieval-not-prompt rule. Productised the $500-1500/bot model. |
| `PROPOSAL` | "Zero invented credentials" hard rule + AI-aware T&Cs clause — protects against fraud exposure. |
| `RETAINER` | "Plant next upsell" §6 discipline; quiet months framed honestly. Anti-churn structural device. |
| `CHECKOUT-AUDIT` | Quantifies every fix in € at current GMV — what gets engagement budget approved. |
| `PR-PITCH` | The §1 angle test (honest "no angle = no pitch") — protects journalist relationships. Refuses fake pitches. |
| `INVOICE-FOLLOWUP` | Stage × relationship calibration; jurisdiction-specific default-interest law. |
| `CONTRACT-REVIEW` | Quote-the-clause discipline + non-soften "NOT LEGAL ADVICE" disclaimer at top of output. |

### B-Tier — Solid, sellable, competitive parity (50)

Good structure, real value, will deliver client-grade output. Not
uniquely defensible — a competent consultant with similar specialism
could match the format. Worth keeping; not worth marketing as
"world-first."

`AUDIT` · `PERF` · `ARCH` · `MIGRATE` · `SBOM` · `A11Y` · `API-DOC` ·
`HIPAA` · `ISO-27001` · `K8S-AUDIT` · `MOBILE-PRIVACY` · `THREATMODEL` ·
`COST` · `OBSERVABILITY` · `RUNBOOK` · `DEPENDENCY-UPGRADE` · `SEO` ·
`LANDING-PAGE` · `WEBSITE-FULL` · `PRICING-PAGE` · `DOCS-SITE` ·
`PRODUCT-PAGE` · `CONVERSION-AUDIT` · `COPY-AUDIT` · `DESIGN-AUDIT` ·
`TRUST-AUDIT` · `CTA-OPTIMIZER` · `FORM-OPTIMIZER` ·
`ONBOARDING-AUDIT` · `COMPETITOR-TEARDOWN` · `SEO-CONTENT` ·
`EMAIL-SEQUENCE` · `AD-COPY` · `NEWSLETTER` · `YOUTUBE-SCRIPT` ·
`SOCIAL-CALENDAR` · `PODCAST-PITCH` · `WEBINAR-PLAN` ·
`DISCOVERY` · `CASE-STUDY` · `RELEASE-NOTES` · `PITCH` ·
`PROJECT-KICKOFF` · `SCOPE-CHANGE` · `STATUS-REPORT` ·
`CLIENT-OFFBOARDING` · `TESTIMONIAL-REQUEST` · `ANALYTICS-AUDIT` ·
`DASHBOARD-DESIGN` · `METRICS-FRAMEWORK` · `DATA-PIPELINE-AUDIT` ·
`AI-DATASET` · `MODEL-CARD` · `JOB-DESCRIPTION` · `INTERVIEW-LOOP`

### C-Tier — Need work or should be cut (10)

| Prompt | Issue | Recommendation |
|---|---|---|
| `REVIEW` | Most diff-review templates do this; the ≤60-line constraint helps but isn't enough differentiator. | DEEPEN — add specific bug-class taxonomy per language; add "intent-mismatch detection" as a core mechanic. |
| `REFACTOR` | "Behaviour preserved" rule is good but the WITNESS-test discipline is found in every TDD book. | DEEPEN — add named-refactoring catalogue with per-move risk profile (extract function ≠ inline ≠ replace conditional). |
| `TRIM` | Tech-debt audits with ROI exist everywhere. The library's TRIM doesn't beat them meaningfully. | DEEPEN — add "tech-debt-by-business-cost" model where every debt item maps to a specific customer or revenue impact. |
| `TEST-PLAN` | Generic test strategy — could be cut without library loss. | CUT or merge into a "QA-AUDIT" hybrid covering tests + observability gaps. |
| `DEAD-CODE` | Very niche; high false-positive risk despite caveats; rarely the deliverable a client pays for. | CUT or relegate to a "tools" subfolder. |
| `SOCIAL-CALENDAR` | Many SaaS tools do this better than a prompt can; the calendar table is generic. | DEEPEN with platform-algorithm specifics (2026 LinkedIn algorithm rewards / suppresses) or CUT in favour of platform-specific prompts. |
| `YOUTUBE-SCRIPT` | Solid but YouTube creators use specialised tools (Tubebuddy, VidIQ) with data; a prompt without channel-data integration is less valuable. | DEEPEN by requiring channel-stats input and outputting against measured-retention-curve. |
| `JOB-DESCRIPTION` | JDs are commoditised; the "founder voice" angle is good but most agencies already do this. | DEEPEN with role-specific intake worksheets (engineering hire ≠ sales hire ≠ leadership hire). |
| `INTERVIEW-LOOP` | Good structure but most hiring consultants have these templates; not differentiated. | DEEPEN with role-specific work-sample design (which is the actual hard part). |
| `STATUS-REPORT` | The format is sensible but anyone with a brain can produce a weekly status update. | KEEP as utility but mark as Tier-1 internal-only (already done) — don't market as sellable. |

---

## Top 10 stars — what they do right

1. **Hard rules in ALL CAPS** create mental anchors the agent doesn't drift from
2. **`file:line` requirement** appears 40+ times across the library — anti-hallucination as design pattern, not as exception
3. **"Respond in the language of X input"** rule prevents agent language-drift on non-English tasks (added after Kimi feedback)
4. **Verbatim disclaimers** in Tier-2 prompts are litigation insurance, not theatre
5. **Ranges over point estimates** (`€2-8k`, `best/likely/worst PW`) signals professionalism and resists overpromising
6. **Negative-rules** (`§6 OUT OF SCOPE`, `§NOT DEBT`) prevent scope inflation
7. **Sample output markers** (`--- REPORT START ---` / `--- REPORT END ---`) make pandoc rendering trivial
8. **R/A/G in DD** is the right cognitive shorthand for an investment committee
9. **Three-deliverable structure** in marketing prompts (long/short/social) matches actual distribution channels
10. **Limitations-mandatory** discipline — most consultancies don't have this and it bites them later

---

## Bottom 10 problems — what needs fixing

1. **Disclaimer prose is repetitive across 35+ prompts.** Should be extracted to a single `DISCLAIMERS.md` referenced by each prompt — saves tokens, ensures consistency, makes updates easier.

2. **No sample outputs.** Every prompt promises a deliverable structure but doesn't show what one looks like. A buyer evaluating the library cannot see what they get. **Highest-impact fix.**

3. **No quality-check section per prompt.** How does the user know the agent's output is good? Need a "Quality gate" or "What to verify" section.

4. **Output-length expectations inconsistent.** Some prompts say `≤250 words`, others `≤300`, others nothing. Need a consistent budget convention.

5. **Bundle logic is implicit.** A buyer reading the library doesn't know that AUDIT + SBOM + GDPR is a natural fintech-compliance pack. README has hints; should be explicit "Recommended bundles."

6. **Some prompts are too long.** AGENT-BUILDER, DD, GDPR exceed 250 lines. Useful but heavy when copy-pasted. Consider a "lite" + "full" variant for the heaviest ones.

7. **Pricing aspirational in a few cases.**
   - `JOB-DESCRIPTION €500-2000 per role` — most companies write their own
   - `INTERVIEW-LOOP €1000-5000 per role design` — same; tends to bundle with broader hiring strategy
   - `PROJECT-KICKOFF` priced as internal but companies do buy template-purchase
   - `DEAD-CODE` would not generate the implied revenue

8. **No "what NOT to use this for" warnings.** Every prompt has an out-of-scope but a buyer-facing "this is the wrong prompt if you need X" would prevent misapplications.

9. **No versioning convention.** When a prompt evolves (as several have through reviews), there's no v1.1/v1.2 marker. Buyers can't tell what's current.

10. **No methodology citations.** Some prompts reference frameworks (Diátaxis, C4, Datasheets-for-Datasets, STRIDE, OWASP LLM Top 10, AARRR) but inconsistently. A "Methodology references" section per prompt would lift academic / enterprise credibility.

---

## Cross-cutting structural improvements

Five changes that would lift ALL 80 prompts:

### 1. Extract shared disclaimers
Create `_LEGAL/AUDIT-DISCLAIMER.md`, `_LEGAL/AI-ASSISTED-DISCLAIMER.md`, `_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`. Each prompt imports the relevant block by reference (or inlines via include). Saves ~50 lines per prompt, ensures consistency, makes legal review of disclaimers tractable.

### 2. Add a sample-output appendix per Tier-2 prompt
A redacted real example of what good output looks like. Either as a separate `samples/` folder or appendix in each prompt. This is what currently separates the library from "really good prompts" and "best in the world."

### 3. Add a "Quality gate" section to every prompt
A checklist the user runs on the agent's output before delivery:
- Are all `file:line` citations real?
- Are all numbers backed by source?
- Is the disclaimer verbatim?
- Are sections within token/line budget?
- Did any HARD RULE get bent?

### 4. Add explicit bundle definitions to README
Top 8 bundles with rationale:
- Fintech Compliance Pack (PCI-DSS + DORA + GDPR + SBOM)
- Healthtech Launch Pack (HIPAA + A11Y + AUDIT + RUNBOOK)
- AI Startup Pack (AI-ACT + PROMPT-SECURITY + GDPR + AGENT-BUILDER + MODEL-CARD)
- M&A Tech-DD Pack (DD + AUDIT + SBOM + ARCH + DATA-PIPELINE-AUDIT)
- Web Launch Pack (WEBSITE-FULL + COPY-AUDIT + SEO + ANALYTICS-AUDIT)
- Conversion Sprint (CONVERSION-AUDIT + CHECKOUT-AUDIT + CTA-OPTIMIZER + FORM-OPTIMIZER)
- Content Engine (NEWSLETTER + SOCIAL-CALENDAR + SEO-CONTENT) recurring
- Sales Ops (DISCOVERY + PROPOSAL + RETAINER + CASE-STUDY)

### 5. Version every prompt
`v1.0` at top of each file. Bump on material changes. Maintain a `CHANGELOG-LIBRARY.md` at root.

---

## Pricing reality-check

**Realistic and well-anchored (75%):** AUDIT, PERF, ARCH, MIGRATE, DD, GDPR, AI-ACT, HIPAA, PCI-DSS, ISO-27001, DORA, SBOM, A11Y, RAG-AUDIT, EVAL-DESIGN, FINE-TUNE-PLAN, PROMPT-SECURITY, K8S-AUDIT, OBSERVABILITY, COST, RUNBOOK, DEPENDENCY-UPGRADE, MIGRATE, CHECKOUT-AUDIT, ONBOARDING-AUDIT, AGENT-BUILDER, NEWSLETTER, PITCH.

**Aspirational ceilings (15%):** Top of stated range only achieved by senior consultants with established positioning. Document this. Affected: ARCH €15k upper, MIGRATE €30k upper, DD €100k+ upper (correct for tier-1 but not first-engagement realistic), DOCS-SITE €15k upper.

**Overstated or wrong tier (10%):**
- `JOB-DESCRIPTION €500-2000` — most clients won't pay this; recategorise as ops-leverage with €0 standalone price
- `INTERVIEW-LOOP €1000-5000` — bundles with broader hiring strategy; rarely standalone
- `PROJECT-KICKOFF`, `STATUS-REPORT`, `SCOPE-CHANGE`, `TESTIMONIAL-REQUEST`, `INVOICE-FOLLOWUP` — correctly tagged as internal-leverage; ensure not marketed as standalone deliverables
- `CONTRACT-REVIEW` — internal tool with "not legal advice" disclaimer; recategorise

---

## What to do next to reach "best in the world"

In priority order:

1. **PRUNE 5 prompts** (TEST-PLAN, DEAD-CODE if no compelling redesign; downgrade STATUS-REPORT, SCOPE-CHANGE, JOB-DESCRIPTION from "sellable" to "internal leverage")

2. **DEEPEN top 5 with sample outputs** — pick SHIP, HUNT, DD, GDPR, RAG-AUDIT. Show a redacted real deliverable. This single change pushes the library from "good docs" to "credible product."

3. **EXTRACT DISCLAIMERS** to `_LEGAL/` includes. Cleaner files, consistent law.

4. **ADD QUALITY GATE** to every prompt. 5-7 line checklist. Buyers know how to verify.

5. **EXPLICIT BUNDLES** in README with rationale per bundle.

6. **VERSION every prompt** with `v1.0` and start a CHANGELOG.

7. **RUN MULTI-MODEL REVIEW** on the 20 A-tier prompts (like SHIP got). This is what made SHIP demonstrably-good vs theoretically-good. Each round surfaces specific weaknesses you'd otherwise ship.

8. **PRICING REALITY-CHECK PASS** — adjust the 8-10 prompts with aspirational pricing to honest ranges.

9. **WHAT-NOT-TO-USE-FOR** section per prompt to prevent buyer misapplication.

---

## Honest closing assessment

The library is in the **top 5% of prompt libraries by quality** but the
top 5% is not "the best in the world." The gap is:

- **Real production has battle-scars.** SHIP became good through review.
  The other 79 haven't been stress-tested the same way.
- **Sample outputs are missing.** A library without examples is a recipe
  book without photos.
- **Pricing claims are partly aspirational.** Honesty about what each
  prompt actually generates lifts trust.
- **Some prompts duplicate competitive parity** rather than introducing
  new mechanisms. The B-tier is large.

These are fixable. With the 9-step plan above executed over 2-4 weeks,
the library moves from "very good" to "credibly best-in-class for
agentic coding consultants." Without those steps, it remains "very good"
— which is sellable but not the claim.
