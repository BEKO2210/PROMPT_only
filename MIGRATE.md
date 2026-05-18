# MIGRATE — Migration-Roadmap (verkaufbares Deliverable)

Produces a phased migration plan with per-phase effort ranges, risks,
rollback strategies, and acceptance criteria. Each phase ships
independently — no big-bang. Target buyer: any team facing a non-trivial
stack change (Python 2→3, jQuery→React, monolith→services, on-prem→cloud,
Postgres→Aurora, REST→GraphQL, etc.).

**Realistic engagement price: €5 000 – 30 000.**

---

## How to use

Paste the block below, then on the next line:

    FROM: <current stack / state in 1–2 sentences>
    TO:   <target stack / state in 1–2 sentences>
    WHY:  <business driver — performance, cost, EOL, hiring, compliance>
    CONSTRAINTS: <SLAs, freeze windows, data-residency, regulator, team size>
    CLIENT: <client name for header — optional>

---

## The prompt (copy from here)

```
You are producing a Migration Roadmap the client will execute over weeks
or months. The §8 REPORT is the deliverable. The plan must be honest:
unrealistic ranges destroy your reputation faster than no plan at all.

1. CURRENT STATE
   Audit the current system as it relates to the migration:
     - tech stack components, versions, EOL dates
     - architecture in one paragraph
     - hotspots (where the FROM stack is most entangled with business logic)
     - critical dependencies that constrain the migration
     - test coverage status (high / partial / none) — drives risk
   Cite file paths and config files as evidence.

2. TARGET STATE
   What the system looks like post-migration:
     - tech stack components, versions
     - architectural changes (if any)
     - what becomes possible that isn't today
     - what's deliberately NOT changing (scope guardrails)

3. CONSTRAINTS
   What must not break during the migration:
     - SLAs (uptime, latency)
     - public APIs and their consumers
     - data formats and stored data
     - compliance (GDPR, HIPAA, SOC2 control X)
     - team capacity (people × weeks available)
     - freeze windows (Black Friday, fiscal year-end, etc.)

4. STRATEGY
   Pick one and justify in 3 sentences. Default vocabulary:
     - **Big Bang** — single cutover. Only when the system is small,
       not always-on, or the cost of parallel-run exceeds the risk.
     - **Strangler Fig** — new system grows alongside old; routes
       migrate one at a time; old retires when empty.
     - **Branch by Abstraction** — introduce an interface, swap
       implementations behind it. Best for library / framework swaps.
     - **Parallel Run** — both systems process the same input; results
       compared; switch when delta is acceptable. Best for risky logic
       migrations (billing, fraud, pricing).
     - **Expand–Migrate–Contract** — for schema and API changes:
       add new alongside old, migrate readers, retire old.

5. PHASES
   Break the migration into 3–8 phases. Each phase must:
     - ship independently to production
     - leave the system in a working state if the next phase is delayed
     - have its own rollback plan
   For each phase, table-row:
     | # | Phase | Scope | Effort (PW: best / likely / worst) | Risk | Rollback | Acceptance criterion |
   PW = person-weeks. If a phase doesn't fit in this table, it's too big.

6. RISKS
   Top 5 risks ordered by (probability × impact). For each:
     - description in one sentence
     - mitigation strategy
     - early warning signal that would trigger the mitigation

7. COST & TIMELINE
   - Total effort: sum of §5 PW columns (best / likely / worst)
   - Calendar timeline: total PW ÷ team size, plus dependency wait time
   - Critical path: which phases block which
   - Recommended team shape: roles × FTE during the migration

8. REPORT  ← the deliverable
   --- REPORT START ---
   # Migration Roadmap — <FROM> → <TO>
   **Client:** <…>   **Date:** <YYYY-MM-DD>   **Driver:** <WHY>

   ## Executive Summary       (3 paragraphs: why, how, when/cost)
   ## 1. Current State        (§1)
   ## 2. Target State         (§2)
   ## 3. Constraints          (§3)
   ## 4. Strategy             (§4, with rationale)
   ## 5. Phased Plan          (§5, table + per-phase detail)
   ## 6. Risk Register        (§6)
   ## 7. Cost & Timeline      (§7)
   ## 8. Decision Points      (gates where the client decides go/no-go)
   ## 9. Limitations          (§10, verbatim)
   ## Appendix: Inventory     (the file list from §1 that drove estimates)
   --- REPORT END ---

9. EXECUTIVE SUMMARY  (place at top of §8)
   ≤300 words. Plain language. Cover:
     - Why migrate now (business driver)
     - How (strategy in one sentence, number of phases)
     - When (calendar range, e.g. "5–9 months at current team size")
     - What it costs (PW range, with the worst-case explicitly named)
     - What could go wrong (top risk)

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This roadmap was produced by an AI agent from static analysis of the
    repository at commit <SHA> on <date>. Effort estimates are ranges
    based on observable complexity, not measured velocity; actual
    completion depends on team skill, parallelism, and unknown
    integration surprises. The plan assumes the constraints in §3 hold;
    changes to those (especially the freeze windows and team size)
    invalidate the timeline. Phase 1 should be re-estimated by the
    implementing team before committing to dates externally."

HARD RULES
- Every effort number is a RANGE (best / likely / worst). Single-point
  estimates in a migration plan are negligence.
- Every phase has its own rollback. "We'll figure that out when we get
  there" is not a rollback.
- The strategy in §4 follows the named vocabulary — if your migration
  needs a custom strategy, name it explicitly and justify why standard
  ones don't fit.
- Respond in the same language as the FROM/TO inputs.

FROM:
TO:
WHY:
CONSTRAINTS:
```

---

## What the buyer gets

A roadmap they can show their board: clear phases, honest ranges, named
rollbacks, named risks. Each phase is small enough that the team can
actually commit to it. The "no big bang" rule alone has saved migrations
that would otherwise have killed the team's quarter.
