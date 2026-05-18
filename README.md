# PROMPT_only — Production-Grade Prompts for Agentic Coding AIs

Copy-paste prompts for agents with filesystem + shell access (Claude Code,
Cursor agents, SDK loops). Not for chat. Each one targets a high-frequency
real-world workflow and is designed for token frugality, hallucination
resistance, and mandatory verification.

Two tiers:

- **Internal workflow** — prompts you run on your own code while you build.
- **Sellable deliverables** — prompts that produce client-grade reports
  you can invoice for. Each carries a realistic engagement price range.

---

## Tier 1 — Internal workflow

| Prompt | Use case | Key mechanic |
|---|---|---|
| [`PROMPT.md`](./PROMPT.md) (SHIP) | Execute any new task cleanly | 8 sections, ≤40 lines, mandatory §7 verification with real command output |
| [`MAP.md`](./MAP.md) | Map a codebase once, reuse forever | Produces a ≤500-token block you paste atop every future task — amortises discovery cost across sessions |
| [`HUNT.md`](./HUNT.md) | Find and fix a bug | No fix without a green reproducer; no "done" without a regression test |
| [`REVIEW.md`](./REVIEW.md) | Review a PR / diff | ≤60-line output, `file:line` for every claim, style nits explicitly deferred to linter |
| [`REFACTOR.md`](./REFACTOR.md) | Change structure without changing behaviour | Witness-test gate; PROOF must be bit-identical pre vs. post |
| [`TRIM.md`](./TRIM.md) | Audit tech debt with ROI | Each item: real file + recurring cost in hours/year, ranked by payback |

---

## Tier 2 — Sellable deliverables

Each of these produces a formal Markdown report with Executive Summary,
findings, methodology, and a verbatim Limitations & Disclaimer section.
Pandoc converts to PDF directly. All include disclaimers calibrated to
keep liability where it belongs.

| Prompt | Deliverable | Realistic price | Buyer |
|---|---|---|---|
| [`AUDIT.md`](./AUDIT.md) | Security & Code-Quality Report (OWASP / CWE / CVSS) | **€2 000 – 8 000** | SMBs without pentest budgets; insurers; board reviews |
| [`PERF.md`](./PERF.md) | Performance Audit with real measurements + ROI-ranked fixes | **€2 000 – 10 000** | Teams hitting scaling pain; cloud-cost-pressured CTOs |
| [`ARCH.md`](./ARCH.md) | Architecture Dossier (C4 + Mermaid + ADRs + data flows) | **€3 000 – 15 000** | CTOs preparing for ISO 27001, audits, onboarding at scale |
| [`MIGRATE.md`](./MIGRATE.md) | Phased Migration Roadmap with effort ranges + rollback per phase | **€5 000 – 30 000** | Anyone facing a stack change (Python 2→3, monolith→services, on-prem→cloud) |
| [`DD.md`](./DD.md) | Technical Due Diligence (R/A/G ratings, deal-term recommendations) | **€10 000 – 100 000+** | PE / VC / strategic acquirers; M&A counsel |

---

## Design contract (every prompt)

1. **Artefact-orientated** — output is the deliverable, not narration of thinking.
2. **Hallucination-resistant** — every `file:line` is verified before it's cited; never invent paths, symbols, dependencies, or grep results.
3. **Verification-mandatory** — claims are backed by command output pasted in the same turn.
4. **Token-budgeted** — explicit line / token caps prevent context bloat.
5. **Language-consistent** — agent responds in the language of the input.
6. **Liability-conscious** (Tier 2) — verbatim Limitations sections protect the consultant from over-reliance by the buyer.

---

## How to convert any Tier-2 report to PDF

After the agent emits a report between `--- REPORT START ---` and
`--- REPORT END ---` markers, save the inner content as `report.md` and run:

```bash
pandoc report.md -o report.pdf \
  --pdf-engine=xelatex \
  --toc --toc-depth=2 \
  --highlight-style=tango \
  -V geometry:margin=2cm \
  -V mainfont="Helvetica" \
  -V colorlinks=true
```

For ARCH.md (Mermaid diagrams), install
[`mermaid-filter`](https://github.com/raghur/mermaid-filter) and add
`--filter mermaid-filter` to the pandoc command.

---

## Status

Each prompt has gone through external review against at least one
independent model. Accepted refinements are committed; rejected ones are
documented in commit messages with rationale. The design contract above
is the result of that review loop.
