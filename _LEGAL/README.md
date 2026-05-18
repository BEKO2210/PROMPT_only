# _LEGAL — Canonical Disclaimer Texts

This folder contains the **single source of truth** for disclaimer
language used across all sellable-deliverable prompts.

## Why this exists

Across 60+ Tier-2 / Tier-3 prompts, disclaimer language was being
maintained inline per file. When legal language needs updating
(jurisdictional change, new regulation, court-tested wording),
40+ files would drift out of sync.

Solution: prompts keep their disclaimers **inline** (so the prompt
remains self-contained and copy-paste usable), but every inline
disclaimer is sourced from this folder. When updating, update the
canonical text here AND propagate to every prompt that references it.

## Files

| File | Used by |
|---|---|
| [`AI-ASSISTED-METHODOLOGY.md`](./AI-ASSISTED-METHODOLOGY.md) | The generic "produced by AI agent" boilerplate that opens every Tier-2 limitations section |
| [`AUDIT-DISCLAIMER.md`](./AUDIT-DISCLAIMER.md) | AUDIT, PERF, ARCH, COST, K8S-AUDIT, OBSERVABILITY, ANALYTICS-AUDIT, SEO, RAG-AUDIT |
| [`COMPLIANCE-NOT-LEGAL-ADVICE.md`](./COMPLIANCE-NOT-LEGAL-ADVICE.md) | GDPR, HIPAA, PCI-DSS, ISO-27001, DORA, AI-ACT, MOBILE-PRIVACY, SBOM |
| [`MA-DD-DISCLAIMER.md`](./MA-DD-DISCLAIMER.md) | DD — strongest disclaimer language; investment-committee context |
| [`CONTRACT-NOT-LEGAL-ADVICE.md`](./CONTRACT-NOT-LEGAL-ADVICE.md) | CONTRACT-REVIEW — non-negotiable "NOT LEGAL ADVICE" at top of output |
| [`SECURITY-NOT-PENTEST.md`](./SECURITY-NOT-PENTEST.md) | AUDIT, PROMPT-SECURITY, THREATMODEL — explicitly NOT a penetration test |
| [`ESTIMATES-NOT-GUARANTEES.md`](./ESTIMATES-NOT-GUARANTEES.md) | PERF, COST, MIGRATE, DEPENDENCY-UPGRADE, CONVERSION-AUDIT — "estimates are forecasts, not guarantees" |

## Update process

When you update any file in this folder:

1. Note the change in the file (date + reason)
2. Update inline disclaimer language in every prompt that references it
3. Bump the version line at the top of every affected prompt
4. Add an entry in `CHANGELOG-LIBRARY.md` at repo root

## When to involve a lawyer

Have qualified counsel in your jurisdiction review:
- `MA-DD-DISCLAIMER.md` before first M&A engagement
- `CONTRACT-NOT-LEGAL-ADVICE.md` before publishing CONTRACT-REVIEW outputs
- `COMPLIANCE-NOT-LEGAL-ADVICE.md` before first regulated-industry engagement
- Any disclaimer when expanding to a new jurisdiction

The texts in this folder are reasonable starting points calibrated to
EU + US standard commercial practice. They are not legal advice.
