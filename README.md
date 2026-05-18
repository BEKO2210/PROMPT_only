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

### Compliance & operations — General

| Prompt | Deliverable | Realistic price | Regulatory hook / buyer |
|---|---|---|---|
| [`SBOM.md`](./SBOM.md) | CycloneDX 1.5 SBOM JSON + CVE / license / supply-chain analysis | **€2 000 – 8 000** / release | EU Cyber Resilience Act (Dec 2027); US EO 14028 (federal contractors today) |
| [`A11Y.md`](./A11Y.md) | WCAG 2.2 Conformance Report with remediation code | **€1 000 – 5 000** | EU Accessibility Act (enforceable since June 2025); US Section 508 |
| [`API-DOC.md`](./API-DOC.md) | OpenAPI 3.1 spec + Postman collection + Markdown reference | **€1 000 – 5 000** / API | Every startup with an undocumented public API |
| [`GDPR.md`](./GDPR.md) | DSGVO assessment: PII inventory + data-flow map + Article 30 RoPA | **€2 000 – 10 000** | Every EU-facing controller / processor; especially Schrems-II exposure |
| [`POSTMORTEM.md`](./POSTMORTEM.md) | Blameless incident RCA (timeline, root cause, SMART action items) | **€1 000 – 5 000** / incident | Enterprise SLAs requiring RCAs after SEV1 / SEV2; SRE practice |
| [`SEO.md`](./SEO.md) | Technical SEO audit (crawl, index, CWV, schema, internal linking) | **€1 000 – 5 000** | Every public-facing site competing on organic traffic |
| [`THREATMODEL.md`](./THREATMODEL.md) | STRIDE threat model with DFD, control mapping, residual risk | **€3 000 – 12 000** | ISO 27001 §A.8.27 / SOC2 CC7.1 evidence; mature security teams |
| [`COST.md`](./COST.md) | Cloud cost optimisation from IaC with ROI-ranked savings | **€3 000 – 15 000** | Anyone with a cloud bill that's growing faster than revenue; often + success-fee |
| [`RUNBOOK.md`](./RUNBOOK.md) | Production operations runbook bundle for handover | **€3 000 – 12 000** | M&A integration, outsourcing, team-transition, on-call standardisation |
| [`OBSERVABILITY.md`](./OBSERVABILITY.md) | Telemetry audit ranked by debug-time saved + cost optimisation | **€3 000 – 12 000** | Teams drowning in alerts or blind during incidents |
| [`DEPENDENCY-UPGRADE.md`](./DEPENDENCY-UPGRADE.md) | Phased major-version upgrade plan with usage analysis | **€2 000 – 15 000** | Stuck on EOL versions; React/Node/Python/Spring/Rails upgrades |

### Web — Build & Convert

| Prompt | Deliverable | Realistic price | Buyer |
|---|---|---|---|
| [`LANDING-PAGE.md`](./LANDING-PAGE.md) | Conversion landing page (HTML + Tailwind + copy + A/B backlog) | **€500 – 3 000** / page | Founders launching offers; PMs running campaigns |
| [`WEBSITE-FULL.md`](./WEBSITE-FULL.md) | Complete multi-page marketing site (Astro/Next.js/HTML) | **€2 000 – 15 000** | SMBs, scaleups, rebrands |
| [`PRICING-PAGE.md`](./PRICING-PAGE.md) | Pricing page with anchor strategy + FAQ + comparison | **€500 – 2 500** | Anyone whose pricing page is losing money |
| [`DOCS-SITE.md`](./DOCS-SITE.md) | Developer docs site (Diátaxis structure: tutorials / how-to / reference / explanation) | **€2 000 – 15 000** | Technical products, SDKs, APIs |
| [`PRODUCT-PAGE.md`](./PRODUCT-PAGE.md) | E-commerce product page with structured data + JSON-LD for rich results | **€300 – 1 500** / page (bulk: €2 k–10 k for 10–50 pages) | E-commerce, DTC brands |
| [`CONVERSION-AUDIT.md`](./CONVERSION-AUDIT.md) | CRO audit with test backlog ranked by expected lift × traffic ÷ effort | **€1 500 – 7 500** | Sites with traffic but weak conversion |
| [`COPY-AUDIT.md`](./COPY-AUDIT.md) | Voice + clarity + specificity audit with rewrites | **€1 000 – 5 000** | Sites whose copy doesn't match positioning |
| [`DESIGN-AUDIT.md`](./DESIGN-AUDIT.md) | Visual + UX audit with optional design-system extraction | **€1 000 – 5 000** | Pre-rebrand or post-stitched-design state |
| [`TRUST-AUDIT.md`](./TRUST-AUDIT.md) | Trust-signal audit (testimonials, badges, founder visibility, fraud-risk findings) | **€500 – 2 500** | B2B sites where trust gaps lose deals |
| [`CHECKOUT-AUDIT.md`](./CHECKOUT-AUDIT.md) | E-commerce checkout flow audit with revenue-quantified fixes | **€1 500 – 7 500** | Stores with cart abandonment > 70% |
| [`CTA-OPTIMIZER.md`](./CTA-OPTIMIZER.md) | Site-wide CTA audit with placement + copy + A/B suggestions | **€500 – 2 500** | Sites with weak primary-CTA discipline |
| [`FORM-OPTIMIZER.md`](./FORM-OPTIMIZER.md) | Every form on a site reviewed for field count, mobile UX, validation | **€500 – 2 500** | Lead gen, signup, checkout flows |
| [`ONBOARDING-AUDIT.md`](./ONBOARDING-AUDIT.md) | First-time user experience audit with time-to-AHA analysis | **€1 500 – 7 500** | SaaS with high signup-to-activation drop |
| [`COMPETITOR-TEARDOWN.md`](./COMPETITOR-TEARDOWN.md) | Competitor deep teardown with steal-and-avoid playbook | **€1 000 – 5 000** | Founders + marketing teams pre-launch / pre-pivot |

### AI / LLM Engineering (verkaufbar, neuer Markt)

| Prompt | Deliverable | Realistic price | Buyer |
|---|---|---|---|
| [`RAG-AUDIT.md`](./RAG-AUDIT.md) | RAG system audit end-to-end (corpus, chunking, retrieval, reranking, citation, hallucination, cost-per-query) | **€3 000 – 15 000** | Anyone who shipped RAG without measuring it |
| [`EVAL-DESIGN.md`](./EVAL-DESIGN.md) | Evaluation framework: golden set + automated eval + safety eval + CI regression | **€3 000 – 12 000** | Teams making LLM changes blind |
| [`FINE-TUNE-PLAN.md`](./FINE-TUNE-PLAN.md) | Should-we-fine-tune decision tree + plan if yes; honest about the 80% who shouldn't | **€5 000 – 25 000** | Anyone with "we should fine-tune" on the roadmap |
| [`AI-DATASET.md`](./AI-DATASET.md) | Dataset construction + datasheet (Gebru et al. format) for training / eval / RAG | **€3 000 – 15 000** | Pre-training, pre-eval, pre-RAG |
| [`MODEL-CARD.md`](./MODEL-CARD.md) | Formal model card mapped to EU AI Act Annex IV technical documentation | **€2 000 – 8 000** | Any deployed model facing regulatory or procurement review |

### Compliance — Sector-specific (high-margin)

| Prompt | Deliverable | Realistic price | Regulatory hook |
|---|---|---|---|
| [`AI-ACT.md`](./AI-ACT.md) | EU AI Act conformity assessment with risk classification | **€3 000 – 15 000** | Regulation 2024/1689 — high-risk obligations enforceable Aug 2026 |
| [`HIPAA.md`](./HIPAA.md) | HIPAA Security Rule + Privacy Rule + BAA audit | **€3 000 – 15 000** | US healthcare; every covered entity / business associate |
| [`PCI-DSS.md`](./PCI-DSS.md) | PCI-DSS v4.0.1 audit + scope-reduction analysis | **€3 000 – 15 000** | Anyone touching cardholder data; annual requirement |
| [`ISO-27001.md`](./ISO-27001.md) | ISO 27001:2022 control mapping + Statement of Applicability draft | **€5 000 – 25 000** | Cert prep, surveillance audit, customer-procurement gate |
| [`DORA.md`](./DORA.md) | EU Digital Operational Resilience Act assessment with Art. 28 register | **€5 000 – 30 000** | EU financial entities — enforceable Jan 2025 |
| [`PROMPT-SECURITY.md`](./PROMPT-SECURITY.md) | LLM application security audit (OWASP LLM Top 10 + indirect prompt injection) | **€3 000 – 15 000** | Every shipping LLM application; brand-new market, low competition |
| [`K8S-AUDIT.md`](./K8S-AUDIT.md) | Kubernetes cluster security + cost audit | **€3 000 – 15 000** | Platform teams running production Kubernetes |
| [`MOBILE-PRIVACY.md`](./MOBILE-PRIVACY.md) | App Store / Play Store privacy labels with code citations | **€1 000 – 5 000** | Every published mobile app; commonly mis-declared |

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
| [`CONTRACT-REVIEW.md`](./CONTRACT-REVIEW.md) | Red-flag analysis of inbound MSA / SOW / NDA / DPA before signing | Self-defence — prevents €10 k+ in bad terms; explicitly NOT legal advice |
| [`CASE-STUDY.md`](./CASE-STUDY.md) | Anonymised case study in 3 formats (long, short, social) after every engagement | One case study = 12+ months of inbound; €0 marginal cost |
| [`RELEASE-NOTES.md`](./RELEASE-NOTES.md) | Customer-facing changelog + in-app banner + email + blog from git history | Replaces 1–3 h per release; for clients **€500 – 2 000** per release-comms pack |
| [`PITCH.md`](./PITCH.md) | Investor / sales pitch deck as Marp/Reveal Markdown with speaker notes | For clients **€2 000 – 10 000** per deck; for own use saves 5–15 h per pitch |
| [`SEO-CONTENT.md`](./SEO-CONTENT.md) | Single SEO article from a target keyword (intent-matched, source-cited) | **€200 – 800** per article; recurring **€1 500 – 5 000/mo** for 10–25 articles |
| [`EMAIL-SEQUENCE.md`](./EMAIL-SEQUENCE.md) | Cold outreach / nurture / onboarding / re-engagement sequence + reply playbook | **€1 000 – 5 000** per sequence |
| [`AD-COPY.md`](./AD-COPY.md) | Multi-platform ad copy (Google + Meta + LinkedIn + TikTok) with creative brief | **€500 – 2 000** per campaign |
| [`SOCIAL-CALENDAR.md`](./SOCIAL-CALENDAR.md) | Monthly social calendar (pillars, posts per platform, engagement playbook) | **€500 – 2 500/mo** recurring per brand |
| [`NEWSLETTER.md`](./NEWSLETTER.md) | Weekly / monthly newsletter from your engagement work (compounding inbound) | **€300 – 1 500** per issue; weekly retainer **€1 200 – 6 000/mo** |
| [`YOUTUBE-SCRIPT.md`](./YOUTUBE-SCRIPT.md) | Long-form YouTube script + package + production notes | **€500 – 2 500** per script; weekly retainer **€2 000 – 10 000/mo** |
| [`PR-PITCH.md`](./PR-PITCH.md) | Press release + journalist-specific pitch + follow-up sequence | **€500 – 2 500** per pitch; PR retainer ongoing |
| [`PODCAST-PITCH.md`](./PODCAST-PITCH.md) | Show-research + custom pitch + talking points + episode proposal per podcast | **€500 – 2 000** per outreach batch |
| [`WEBINAR-PLAN.md`](./WEBINAR-PLAN.md) | Full webinar: title, reg page, agenda, promotion, live playbook, follow-up sequence, evergreen reuse | **€1 000 – 5 000** per webinar |

### Agency operations (internal leverage)

| Prompt | Produces | Leverage |
|---|---|---|
| [`PROJECT-KICKOFF.md`](./PROJECT-KICKOFF.md) | Engagement kickoff document with stakeholder map, RACI, success criteria, risks | Saves 2–4 h per project; cuts scope disputes ~50% |
| [`SCOPE-CHANGE.md`](./SCOPE-CHANGE.md) ⚙️ | Change order document with itemised scope + cost + timeline impact | Internal leverage — captures 10–40% upsell revenue most consultants miss |
| [`STATUS-REPORT.md`](./STATUS-REPORT.md) ⚙️ | Weekly client status report (progress / upcoming / blockers / decisions) | Internal leverage — 30 min/week per active engagement |
| [`CLIENT-OFFBOARDING.md`](./CLIENT-OFFBOARDING.md) | Handover doc + final report + testimonial ask + referral ask + future-work hook | 50–70% of testimonials come from properly closed engagements |
| [`INVOICE-FOLLOWUP.md`](./INVOICE-FOLLOWUP.md) ⚙️ | Stage-appropriate reminder (gentle → firm → formal → final notice) | Internal leverage — prevents AR write-offs |
| [`TESTIMONIAL-REQUEST.md`](./TESTIMONIAL-REQUEST.md) | Full collection process: ask, draft-for-them, permission, LinkedIn rec | One testimonial = 12+ months of inbound; marginal cost ~15 min |
| [`JOB-DESCRIPTION.md`](./JOB-DESCRIPTION.md) ⚙️ | JD in founder voice with transparent comp + negative selection | Internal leverage when hiring; standalone-sale rarely viable |
| [`INTERVIEW-LOOP.md`](./INTERVIEW-LOOP.md) ⚙️ | Work-sample-anchored interview loop with scorecards + bias mitigation | Internal leverage; bundles with broader hiring strategy |
| [`CONTRACT-REVIEW.md`](./CONTRACT-REVIEW.md) ⚙️ | Red-flag analysis of inbound MSA / SOW / NDA — NOT legal advice | Self-defence; never sold standalone |

⚙️ = Internal-leverage prompt. Use them yourself; do not sell them as standalone deliverables.

### Data & Analytics (verkaufbar)

| Prompt | Deliverable | Realistic price | Buyer |
|---|---|---|---|
| [`ANALYTICS-AUDIT.md`](./ANALYTICS-AUDIT.md) | GA4 / Mixpanel / Amplitude / Plausible audit with recommended event taxonomy | **€1 500 – 5 000** | Sites measuring 60% of what matters, 40% wrong |
| [`DASHBOARD-DESIGN.md`](./DASHBOARD-DESIGN.md) | Exec / ops dashboard spec with KPIs, layout, queries, alerting | **€2 000 – 10 000** | Audiences currently making decisions on emailed screenshots |
| [`METRICS-FRAMEWORK.md`](./METRICS-FRAMEWORK.md) | North-star + metric tree + team ownership + anti-metric deprecation | **€2 000 – 8 000** | Companies with 50 metrics and zero clarity |
| [`DATA-PIPELINE-AUDIT.md`](./DATA-PIPELINE-AUDIT.md) | Data-pipeline reliability + cost + quality + lineage audit | **€3 000 – 12 000** | Data teams quietly delivering wrong numbers |

### Talent / HR

Moved to Tier 3 internal leverage. JOB-DESCRIPTION and INTERVIEW-LOOP
are useful when YOU hire (your own team or while advising clients on
hiring); standalone-sale rarely viable in the €500-2k range claimed in
early library versions. See Tier 3 listing.

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

## Sample outputs

The [`samples/`](./samples/) folder contains redacted, realistic worked
examples for the 5 highest-stakes prompts:

- [`samples/SHIP-sample.md`](./samples/SHIP-sample.md) — the 8-section
  workflow applied to a real EU password-reset delay bug
- [`samples/HUNT-sample.md`](./samples/HUNT-sample.md) — full bug-hunt
  cycle on a data-corruption race condition
- [`samples/DD-sample.md`](./samples/DD-sample.md) — Technical Due
  Diligence for a fictional €120M clinical-trial-SaaS acquisition
- [`samples/GDPR-sample.md`](./samples/GDPR-sample.md) — DSGVO
  assessment + Article 30 RoPA for a fictional EU SaaS using
  US-hosted LLM providers
- [`samples/RAG-AUDIT-sample.md`](./samples/RAG-AUDIT-sample.md) —
  RAG-system audit with measured retrieval metrics on a fictional
  internal-docs chatbot

Use samples to evaluate the library before committing, to calibrate
clients during sales conversations, or to onboard the agent with a
concrete output reference.

---

## Disclaimers — single source of truth

All Tier-2 disclaimer texts are maintained canonically in
[`_LEGAL/`](./_LEGAL/). Prompts keep their disclaimers inline (so
each prompt is self-contained), but `_LEGAL/` is the source of
truth for updating the language across the library.

When jurisdictional law or industry practice changes, update the
relevant `_LEGAL/*.md` file and propagate to every prompt that
references it.

---

## Recommended bundles

The library was designed so prompts compose into engagement
packages. The 8 highest-value bundles:

| Bundle | Prompts | Realistic price |
|---|---|---|
| **Fintech Compliance Pack** | PCI-DSS + DORA + GDPR + SBOM | €15 000 – 40 000 |
| **Healthtech Launch Pack** | HIPAA + A11Y + AUDIT + RUNBOOK | €10 000 – 30 000 |
| **AI Startup Pack** | AI-ACT + PROMPT-SECURITY + GDPR + AGENT-BUILDER + MODEL-CARD | €10 000 – 35 000 |
| **M&A Tech-DD Pack** | DD + AUDIT + SBOM + ARCH + DATA-PIPELINE-AUDIT | €20 000 – 60 000 |
| **Web Launch Pack** | WEBSITE-FULL + COPY-AUDIT + SEO + ANALYTICS-AUDIT | €8 000 – 25 000 |
| **Conversion Sprint** | CONVERSION-AUDIT + CHECKOUT-AUDIT + CTA-OPTIMIZER + FORM-OPTIMIZER + 3-month retainer | €10 000 – 30 000 |
| **Content Engine (recurring)** | NEWSLETTER + SOCIAL-CALENDAR + SEO-CONTENT (monthly) | €3 000 – 10 000/month |
| **Sales Ops** | DISCOVERY + PROPOSAL + RETAINER + CASE-STUDY | Internal leverage; raises win-rate measurably |

Bundles convert better than individual sales — buyers have ONE
compliance budget, ONE marketing budget, ONE M&A advisory budget,
not three.

---

## Status

The library has been through one focused quality audit
([`LIBRARY-AUDIT.md`](./LIBRARY-AUDIT.md)) and one round of
pruning + sample-output addition + disclaimer extraction (the
state you're reading now). Two weak prompts (`TEST-PLAN`,
`DEAD-CODE`) were removed; five sellable-prompt claims were
recategorised as internal leverage where standalone-sale was
not realistic.

`SHIP` has additionally been through three rounds of external
model review (one round documented in commit history). The
other 78 prompts have not been individually stress-tested at
that depth. The design contract above is the result of that
review loop and is consistently applied across all current
prompts.

Future quality work: multi-model review of the A-tier prompts
(see LIBRARY-AUDIT.md §"What to do next"), addition of
quality-gate checklists per prompt, sample-output expansion
beyond the current 5.
