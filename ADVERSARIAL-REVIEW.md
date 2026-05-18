# ADVERSARIAL REVIEW — Roleplay multi-reviewer stress test on 5 A-tier prompts

**Date:** 2026-05-18
**Reviewer:** the agent that wrote them, roleplaying critical perspectives
**Scope:** SHIP, HUNT, DD, GDPR, RAG-AUDIT (the 5 prompts with samples)

## Honest caveat

This is **self-roleplay**, not actual external model review. SHIP earned
its current quality through real reviews by Kimi 2.6, Gemini, and a
third reviewer — the present exercise simulates that adversarial
pressure for the other four A-tier prompts which haven't been through
external review yet. The findings below are real (each addresses a gap
a real expert would identify), but they should be retested with actual
external reviewers when possible.

## Method

For each prompt, I roleplay 3–4 critical perspectives:
- **The Skeptical Buyer** — "Why should I pay for this?"
- **The Compliance Officer / Lawyer** — "What about [regulation]?"
- **The Domain Expert** — "This is wrong because [technical reason]"
- **The Hostile Reviewer** — "Show me where this breaks"

For each finding I record: ACCEPT (apply fix), REJECT (with reason), or
DEFER (real but lower priority).

---

## SHIP (PROMPT.md)

### 🔴 Compliance Officer
> "What if the agent edits a file in a HIPAA-regulated environment without
> realising? Your hard rules say nothing about regulatory scope."

**Verdict: ACCEPT.** Add HARD RULE: if the file is under regulatory
scope (cited at file top, in a `.regulatory.md`, or in repo CLAUDE.md),
require explicit scope-OK confirmation before editing.

### 🟡 Domain Expert (Senior Engineer)
> "Forcing 8 sections for a one-line typo fix is friction theatre. SHIP
> should scale to the task."

**Verdict: ACCEPT.** Add explicit guidance: for trivial tasks (typo,
rename, one-line config), sections can collapse to one line each. The
discipline is the SEQUENCE, not the verbosity.

### ⚪ Hostile Reviewer
> "What stops the agent from CLAIMING §1–§7 were produced when they
> were actually fabricated post-hoc?"

**Verdict: REJECT — already addressed.** §8 EXECUTE requires real
command output. Quality Gate (added in previous round) also catches
this. The verification IS the anti-fabrication mechanism.

---

## HUNT (HUNT.md)

### 🔴 Privacy / Compliance Officer
> "§2 REPRO often requires production data. If that data is PII, you're
> in DSGVO / HIPAA breach territory just by reproducing the bug."

**Verdict: ACCEPT.** Add HARD RULE: if the reproducer requires
production data containing PII, use sanitised / synthetic equivalents.
Reproducing on real PII without explicit lawful basis is itself a
violation.

### 🟡 Domain Expert (Distributed Systems)
> "Single-run reproducer is meaningless for race conditions or
> Heisenbugs. The current prompt doesn't enforce N-run discipline."

**Verdict: ACCEPT.** Strengthen §7 RE-REPRO: for non-deterministic
bugs (concurrency, timing, network), run the verification ≥20 times and
report pass rate. Sample shows `--count=20` already; make it a rule.

### 🟡 Hostile Reviewer
> "§8 adds a regression test for THE bug. What stops your fix from
> silently breaking ten other things?"

**Verdict: ACCEPT.** Add HARD RULE: post-fix, also run the existing
test suite (or a relevant subset) to surface regressions in adjacent
code. The new test catches the same bug returning; the existing suite
catches collateral damage.

---

## DD (DD.md)

### ⚪ Investment Committee Member
> "Your AI didn't talk to the founders. How is this 'due diligence'?"

**Verdict: REJECT — already addressed.** §11 LIMITATIONS verbatim
mandates this acknowledgement; the report explicitly is "advisory" and
"NOT a substitute for management interviews."

### 🔴 Acquirer's M&A Counsel
> "Change-of-control clauses in commercial vendor contracts and some
> OSS licenses can terminate or trigger fees on acquisition. Your
> dependency audit doesn't check this."

**Verdict: ACCEPT.** Add to §5 DEPENDENCIES & LICENSING: flag any
commercial vendor contract or OSS license with a change-of-control
trigger (some commercial licenses terminate or require re-licensing
on M&A; some OSS licenses with patent clauses have unusual
termination effects).

### 🟡 Domain Expert (VP Engineering at typical PE target)
> "Bus-factor based on git commit volume alone is misleading. Senior
> engineers commit less but matter more. Include code-review activity,
> design-doc authorship, incident-response patterns."

**Verdict: ACCEPT.** Refine §7 TEAM signal: weight commit volume
against review activity (PR comments, approvals authored), design-doc
authorship (`docs/adr/`, `docs/design/`), and incident-escalation
patterns from on-call logs. Single senior engineer absent from commit
top-10 may still be the bus-factor concern.

---

## GDPR (GDPR.md)

### 🔴 Practicing DPO
> "Where's the LIA (Legitimate Interest Assessment) check? Any
> processing under Art. 6(1)(f) requires a documented LIA. Your prompt
> mentions LI as a basis but doesn't enforce the assessment."

**Verdict: ACCEPT.** Strengthen §4 PURPOSE & LEGAL BASIS: for every
Art. 6(1)(f) basis claim, check for documented LIA presence; absence
is a Critical gap requiring DPO sign-off before processing.

### 🔴 EDPB / National DPA Reviewer
> "Schrems-II analysis needs Transfer Impact Assessment (TIA) per
> EDPB Recommendations 01/2020. SCC presence alone is insufficient
> post-Schrems-II."

**Verdict: ACCEPT.** Refine §7 THIRD-COUNTRY TRANSFERS: per transfer,
document TIA status (COMPLETE / MISSING / NOT APPLICABLE) per EDPB
Recommendations 01/2020. SCC + TIA together = adequate; SCC alone =
PARTIAL post-Schrems-II.

### 🟡 Privacy Engineer
> "Your PII inventory misses tracking technologies — pixels, cookies,
> fingerprinting, server-side analytics. These create personal data
> even when anonymised client-side."

**Verdict: ACCEPT.** Refine §2 PII INVENTORY: explicitly include
tracking technologies (cookies, pixels, fingerprinting libraries,
server-side analytics SDKs). Note that "anonymisation" claims for
these often fail re-identification testing.

---

## RAG-AUDIT (RAG-AUDIT.md)

### ⚪ Engineering Director
> "I can use Ragas + Phoenix for free. Why pay you?"

**Verdict: REJECT — sales-conversation issue, not prompt issue.** The
differentiator is integration / cost-per-query roadmap / actionable
recommendations grounded in measurement, not the measurement itself.
PROPOSAL.md handles the value articulation.

### 🔴 Privacy Engineer
> "Your prompt audits retrieval quality but doesn't check whether the
> CORPUS contains PII that reaches the LLM context. That's a GDPR / HIPAA
> issue independent of retrieval accuracy."

**Verdict: ACCEPT.** Refine §2 CORPUS QUALITY: add PII inventory check
in corpus — what categories of personal data reach LLM context? Cross-
reference against [`GDPR.md`](./GDPR.md) or [`HIPAA.md`](./HIPAA.md)
scope. Flag US-hosted LLM providers receiving EU PII.

### 🟡 ML Researcher (Domain Expert)
> "Recall@k alone misses noise sensitivity. Need RAGAS-style
> context-precision, faithfulness, and answer-correctness metrics."

**Verdict: ACCEPT.** Refine §5 RETRIEVAL METRICS: alongside recall@k,
MRR, nDCG, also compute context-precision (relevant retrieved / total
retrieved), faithfulness (output grounded in retrieved context), and
answer-correctness (output matches ground truth on ground-truthable
queries).

### 🟡 Statistician
> "30-query golden set gives directional signal at best. Drawing
> production conclusions from it is statistically irresponsible."

**Verdict: ACCEPT.** Refine §5: sample-size guidance — 30 queries =
directional only; 100+ = production confidence on common queries;
300+ = tail-behaviour detection. Document the confidence level per
metric reported.

---

## Summary

**Findings: 13 accepted, 3 rejected (each rejected with documented reason).**

| Prompt | Accepted refinements |
|---|---|
| SHIP | 2 (regulatory scope rule, scale-appropriately) |
| HUNT | 3 (PII in reproducers, non-deterministic discipline, broader regression check) |
| DD | 2 (change-of-control license check, bus-factor weighting refinement) |
| GDPR | 3 (LIA check, TIA per Schrems-II, tracking-tech inventory) |
| RAG-AUDIT | 3 (corpus-PII check, additional metrics, sample-size guidance) |

These refinements are applied in the same commit. SHIP advances to v1.4;
the other four advance to v1.1.

## What this doesn't replace

Real external model review. The next quality cycle should run these
same 5 prompts past Kimi 2.6 / Gemini / o-class reviewers (whichever
critical models are available) and apply any additional findings.
External review is what made SHIP good through 3 iterations; this
self-review simulates one round but cannot substitute for the diversity
of perspectives a real review panel brings.
