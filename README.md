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

Each of these produces a formal Markdown report (and where useful, a
machine-readable artefact alongside it: SBOM JSON, OpenAPI YAML, Postman
collection, Article 30 RoPA). All include an Executive Summary, evidenced
findings, methodology, and a verbatim Limitations & Disclaimer section
calibrated to keep liability where it belongs. Pandoc converts the
Markdown to PDF directly.

### Strategic & technical

| Prompt | Deliverable | Realistic price | Buyer |
|---|---|---|---|
| [`AUDIT.md`](./AUDIT.md) | Security & Code-Quality Report (OWASP / CWE / CVSS) | **€2 000 – 8 000** | SMBs without pentest budgets; insurers; board reviews |
| [`PERF.md`](./PERF.md) | Performance Audit with real measurements + ROI-ranked fixes | **€2 000 – 10 000** | Teams hitting scaling pain; cloud-cost-pressured CTOs |
| [`ARCH.md`](./ARCH.md) | Architecture Dossier (C4 + Mermaid + ADRs + data flows) | **€3 000 – 15 000** | CTOs preparing for ISO 27001, audits, onboarding at scale |
| [`MIGRATE.md`](./MIGRATE.md) | Phased Migration Roadmap with effort ranges + rollback per phase | **€5 000 – 30 000** | Anyone facing a stack change (Python 2→3, monolith→services, on-prem→cloud) |
| [`DD.md`](./DD.md) | Technical Due Diligence (R/A/G ratings, deal-term recommendations) | **€10 000 – 100 000+** | PE / VC / strategic acquirers; M&A counsel |

### Compliance & operations

| Prompt | Deliverable | Realistic price | Regulatory hook / buyer |
|---|---|---|---|
| [`SBOM.md`](./SBOM.md) | CycloneDX 1.5 SBOM JSON + CVE / license / supply-chain analysis | **€2 000 – 8 000** / release | EU Cyber Resilience Act (Dec 2027); US EO 14028 (federal contractors today) |
| [`A11Y.md`](./A11Y.md) | WCAG 2.2 Conformance Report with remediation code | **€1 000 – 5 000** | EU Accessibility Act (enforceable since June 2025); US Section 508 |
| [`API-DOC.md`](./API-DOC.md) | OpenAPI 3.1 spec + Postman collection + Markdown reference | **€1 000 – 5 000** / API | Every startup with an undocumented public API |
| [`GDPR.md`](./GDPR.md) | DSGVO assessment: PII inventory + data-flow map + Article 30 RoPA | **€2 000 – 10 000** | Every EU-facing controller / processor; especially Schrems-II exposure |
| [`POSTMORTEM.md`](./POSTMORTEM.md) | Blameless incident RCA (timeline, root cause, SMART action items) | **€1 000 – 5 000** / incident | Enterprise SLAs requiring RCAs after SEV1 / SEV2; SRE practice |

---

## Tier 3 — Business operations (sell more of Tier 2)

The meta-layer. These don't produce client-facing technical deliverables;
they produce the sales artefacts and recurring-revenue artefacts that
let you sell, close, deliver, and renew Tier-2 engagements at higher
velocity. Built from research into what actually generates income for AI
freelancers and consultants in 2026 (PromptBase top-seller patterns,
side-hustle case studies, McKinsey 2026 State of AI).

| Prompt | Produces | Leverage / price |
|---|---|---|
| [`DISCOVERY.md`](./DISCOVERY.md) | Pre-call prospect briefing with sources, talk track, discovery questions | Saves 1–2 h per lead, raises close rate |
| [`PROPOSAL.md`](./PROPOSAL.md) | Send-ready consulting proposal with anchored pricing, scoped deliverables, AI-aware T&Cs | Saves 3–5 h per deal |
| [`AGENT-BUILDER.md`](./AGENT-BUILDER.md) | Deployable specialist-agent system prompt + ops handbook + eval set | **€500 – 1 500 build + €100 – 400/mo retainer** — the side-hustle case-study model |
| [`RETAINER.md`](./RETAINER.md) | Monthly status report that makes invisible work visible and seeds upsells | Protects €1 000 – 5 000/mo recurring per client |

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
