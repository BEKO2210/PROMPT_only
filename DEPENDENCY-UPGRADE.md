# DEPENDENCY-UPGRADE — Safe Major-Version Upgrade Plan (verkaufbares Deliverable)

Phased upgrade plan for a single major-version dependency move
(e.g. React 17 → 19, Node 16 → 22, Python 3.9 → 3.13, Spring Boot 2 →
3, Rails 6 → 7.2). Breaking-change inventory, usage analysis, phased
plan with rollback per phase. Smaller and faster to execute than a full
MIGRATE engagement.

**Realistic engagement price: €2 000 – 15 000** depending on dep complexity and codebase size.

---

## How to use

Paste the block below, then on the next line:

    DEP: <dependency name>
    FROM: <current version>
    TO: <target version>
    WHY: <business driver — EOL, security, feature, hiring, performance>
    CLIENT: <client name — optional>

---

## The prompt (copy from here)

```
You are producing a Major-Version Upgrade Plan for a single
dependency. The §8 REPORT is the deliverable. Three rules:

(1) Breaking changes come from the upstream changelog/migration guide
    — read it, do not invent them. If the upstream provides codemods,
    use them; do not hand-rewrite what a codemod can do.
(2) Every breaking change is cross-referenced to actual usage in the
    client's code. A breaking change with zero usages is no work.
(3) Phased plan: each phase ends in a deployable state. No phase
    leaves the codebase broken.

1. SCOPE
   Dependency name, current and target version, why now, commit SHA
   of the codebase, languages affected. Confirm target version is
   stable (not pre-release) unless WHY justifies it.

2. UPSTREAM BREAKING-CHANGE INVENTORY
   From the dep's official changelog / migration guide / release notes,
   extract every breaking change between FROM and TO. Format:
     - Change description
     - Affected API / behaviour
     - Upstream rationale
     - Migration path (manual / codemod / config flag)
   Cite changelog URL.

3. USAGE ANALYSIS  ← the hard work
   For each §2 breaking change, grep / AST-scan the client's codebase
   for usage:
     - Direct API usage (function calls, imports, classes)
     - Indirect usage (extending changed base classes, implementing
       changed interfaces)
     - Configuration / build-tool usage
     - Test code usage
   Per breaking change: count of call sites, list with file:line,
   complexity tier (TRIVIAL — codemod handles / SIMPLE — find-replace
   / COMPLEX — semantic rewrite / RISKY — behaviour change).

4. INTERMEDIATE STABLE STATES  (when applicable)
   Many deps allow "compatibility mode" or feature flags. Identify:
     - Can we upgrade to TO with deprecation warnings allowed?
     - Can we adopt new APIs incrementally on the old version?
     - Is there a strangler-fig path?
   Cite specific config flags / API choices that enable incremental
   adoption.

5. AUTOMATED MIGRATION
   - Codemods provided by upstream (e.g. React's `react-codemod`,
     Next.js `@next/codemod`, Angular `ng update`, Vue migration
     build)
   - Community codemods (jscodeshift, semgrep rules)
   - Test the codemod on a sample file before claiming it works

6. PHASED PLAN
   Each phase:
     - Scope (which §3 changes / which subdirectories)
     - Effort (person-hours)
     - Risk (LOW / MED / HIGH)
     - Pre-deployment verification (which tests must pass)
     - Rollback (specific git command or revert path)
     - Acceptance: "this phase is done when ___"
   Typical structure:
     Phase 0 — Pre-flight (snapshot, ensure test coverage on
               affected areas, set up parallel build)
     Phase 1 — Codemods + trivial fixes (high-confidence, low-risk)
     Phase 2 — Simple manual fixes (per §3 SIMPLE tier)
     Phase 3 — Complex semantic changes (per §3 COMPLEX tier)
     Phase 4 — Risky behavioural changes (per §3 RISKY tier — under
               feature flag, parallel-run, monitor)
     Phase 5 — Upstream upgrade in package manifest, remove
               compatibility shims, declare done.

7. TESTING & VERIFICATION
   - What existing tests catch breakage? gap analysis
   - What new tests should be added before starting?
   - What manual verification is required (especially for §3 RISKY
     items where automated tests are weak)
   - Performance regression check post-upgrade (if relevant)

8. REPORT  ← the deliverable
   --- REPORT START ---
   # <Dep> Upgrade Plan: <FROM> → <TO>
   **Client:** <…>   **Driver:** <WHY>   **Date:** <…>

   ## Executive Summary             (≤250 words: total effort range,
                                     phase count, top 3 risks, when
                                     this becomes urgent if delayed)
   ## Scope                         (§1)
   ## Breaking Changes — Upstream   (§2, table)
   ## Usage in This Codebase        (§3, table per change with file:line)
   ## Intermediate Adoption Paths   (§4)
   ## Automated Migration           (§5)
   ## Phased Plan                   (§6, one section per phase)
   ## Testing Strategy              (§7)
   ## Rollback Strategy             (consolidated from §6)
   ## Effort Summary                (person-hours range: best/likely/worst)
   ## Limitations                   (§9, verbatim)
   --- REPORT END ---

9. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This plan was produced by an AI agent from analysis of the
    upstream <DEP> changelog and static analysis of the codebase at
    commit <SHA> on <date>. Breaking-change inventory reflects the
    upstream documentation as of <date>; subsequent <DEP> patch
    releases may add or revise items. Effort estimates assume the
    test coverage at audit time; codebases with sparse test coverage
    will see higher actual effort because verification depends on
    manual testing. Phase 4 (RISKY items) particularly benefits from
    a parallel-run / shadow-mode deployment that this plan does not
    prescribe in detail. This plan does not include security
    re-assessment if the upgrade introduces new dependencies (run
    SBOM after Phase 5)."

HARD RULES
- Every §2 breaking change has a changelog URL.
- Every §3 usage cites file:line — no hand-waved "various places".
- Every phase ends in a deployable state. If a phase requires the
  codebase to be broken intermediate, the phase is split.
- §6 effort estimates are RANGES (best/likely/worst), not point values.
- Respond in the language of the WHY input.

DEP:
FROM:
TO:
WHY:
```

---

## What the buyer gets

A 10–20 page plan that turns a scary "we need to upgrade React" into a
phased ticket-by-ticket execution plan. Most teams stall on these
because of unknown blast radius; the usage analysis section eliminates
the unknown.
