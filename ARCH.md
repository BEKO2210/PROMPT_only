# ARCH — Architecture-Dossier (verkaufbares Deliverable)

Produces a complete architecture documentation bundle in the C4 model
(System Context → Container → Component), with Mermaid diagrams that
render natively in GitHub, Confluence, and PDF — plus ADRs for the
load-bearing decisions and 3–5 data-flow walkthroughs. Target buyer:
CTOs preparing for board reviews, due diligence, ISO 27001, or new-hire
onboarding at scale.

**Realistic engagement price: €3 000 – 15 000.**

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <which system, which repo(s), which audience — CTO / dev team / auditor>
    CLIENT: <client name for header — optional>

---

## The prompt (copy from here)

```
You are producing an Architecture Dossier the client will receive as a
PDF and check into their docs repo. The §8 REPORT is the deliverable.
Every component and decision must be traceable to code — invented
boxes destroy the document's value.

1. CONTEXT  (C4 Level 1)
   What does this system DO, for WHOM, integrating with WHAT?
   - Actors: human roles and external systems that interact with it
   - External systems: payment, email, auth provider, analytics, CDN, …
   - One-sentence purpose
   Produce a Mermaid `flowchart LR` System Context diagram.

2. CONTAINERS  (C4 Level 2)
   The top-level deployable / runnable units: web app, API service,
   worker, database, queue, cache, scheduler. For each:
     - name + runtime (e.g. "Orders API — Node.js 20 on ECS Fargate")
     - responsibility in ≤12 words
     - protocols in/out (HTTPS, gRPC, AMQP, SQL …)
     - data it owns
   Produce a Mermaid Container diagram.

3. COMPONENTS  (C4 Level 3, per container that warrants it)
   Within each non-trivial container, the major internal components
   (modules / packages / layers). file:directory for each. Skip
   containers that are off-the-shelf (Postgres, Redis).
   Produce a Mermaid Component diagram per container.

4. DATA FLOWS
   3–5 end-to-end scenarios that exercise the system, e.g. "user places
   order", "nightly billing run", "password reset". For each: a
   numbered sequence (Mermaid `sequenceDiagram`) with the actors,
   containers, and components touched. Cite file:line for the entry
   point of each step.

5. DECISIONS  (ADRs)
   The 5–10 architectural decisions that most shape the system. Use
   the Nygard ADR format:
     ## ADR-NNN: <title>
     **Status:** Accepted | Superseded by ADR-XXX
     **Context:** the forces at play (technical, business, team)
     **Decision:** what was chosen
     **Consequences:** positive, negative, neutral
   Each ADR must cite the code evidence: "see <file:line>" or
   "implemented across <directory>/". Do not invent rationales — if
   the "why" isn't visible in code or commits, mark it
   "[inferred — confirm with team]".

6. RUNTIME & OPERATIONS
   How is it deployed, where does it run, what are the operational
   constraints visible in the repo (Dockerfile, CI config, IaC,
   Helm charts, GitHub Actions). Note: rate limits, scaling triggers,
   health checks, secrets management, observability stack.

7. RISKS & GAPS
   Top 5 architectural risks visible in the code (single points of
   failure, missing redundancy, scaling bottlenecks, security gaps in
   the design itself — not implementation bugs). One sentence each
   with file:line or directory evidence.

8. REPORT  ← the deliverable
   --- REPORT START ---
   # Architecture Dossier — <System Name>
   **Client:** <…>   **Date:** <YYYY-MM-DD>   **Commit:** <SHA>

   ## 1. System Context        (§1, with Mermaid diagram)
   ## 2. Containers            (§2, with Mermaid diagram)
   ## 3. Components            (§3, one section per container)
   ## 4. Data Flows            (§4, one section per scenario)
   ## 5. Decision Records      (§5, ADR-001 … ADR-NNN)
   ## 6. Runtime & Operations  (§6)
   ## 7. Risks & Gaps          (§7)
   ## 8. Limitations           (§9, verbatim)
   ## Appendix: Glossary       (terms specific to this system)
   --- REPORT END ---

9. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This dossier was produced by an AI agent from static analysis of the
    repository at commit <SHA> on <date>. ADR rationales marked
    '[inferred]' should be confirmed with the engineering team before
    publication. Diagrams reflect the code structure; runtime behaviour
    under load, failover paths, and operational procedures not captured
    in code are outside the scope of this document. For compliance use
    (ISO 27001 §A.8.27, SOC2 CC8.1) treat this as a draft to be reviewed
    and signed off by the system owner."

HARD RULES
- All diagrams in Mermaid (text, versionable, renders natively in
  GitHub and pandoc). No ASCII boxes, no PNG references.
- Every container, component, and ADR cites file or directory evidence.
- If a decision's "why" cannot be evidenced from code or commit history,
  mark the ADR `[inferred — confirm with team]` rather than fabricating.
- Cap exploration at 40 tool calls.
- Respond in the same language as the SCOPE input.

SCOPE:
```

---

## What the buyer gets

A single Markdown document the client can check into `/docs/architecture/`.
Pandoc renders it to a 20–40 page PDF; GitHub renders the Mermaid diagrams
inline; Confluence imports it directly. New hires can read it on day one
and orient themselves without bothering a senior.
