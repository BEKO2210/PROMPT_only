# TEST-PLAN — Risk-Based Test Strategy für einen Codebereich

Generates a focused test plan for a specific area of code: what to test
first based on risk, where coverage gaps live, what tests to add ranked
by ROI, and what NOT to test. Internal workflow prompt — use this
before sinking 40 hours into testing the wrong things.

---

## How to use

Paste the block below, then on the next line:

    AREA: <module / package / service / feature in scope>
    CONTEXT: <why now — new feature / bug-prone area / pre-refactor / pre-launch>
    EXISTING: <test framework(s) in use, coverage stats if available>

---

## The prompt (copy from here)

```
You are producing a risk-based test plan for a specific area of code.
Do not edit files. Produce the §7 PLAN as the deliverable. Three rules:

(1) Test what's risky and uncovered first. Test what's safe and
    well-covered last (or never).
(2) Each test recommendation cites the file:line / function it
    targets and the failure mode it catches.
(3) Specify what NOT to test. Equally important.

1. AREA MAP
   List the files in scope (file:line range) and their primary
   responsibilities. Skip vendor / generated code.

2. RISK PRIORITIES
   Rank concerns by blast-radius if broken:
     - User-facing data corruption / data loss
     - Money handling / billing
     - Authentication / authorisation
     - External-contract breakage (public API, webhook, message format)
     - Compliance / audit (PII handling, logging requirements)
     - Performance regressions on hot paths
     - UI / UX issues
   For each concern present in §1, name the specific function / file
   that touches it.

3. CURRENT COVERAGE
   - What tests exist for §1? (cite test files)
   - What's covered (lines, branches, scenarios)?
   - What's NOT covered (the gaps that matter)?
   - Test quality assessment: are existing tests testing behaviour or
     implementation? (the latter rots fast)

4. RECOMMENDED TESTS  (ranked)
   Per recommendation:
     - ID: T-001 …
     - Target: file:line / function
     - Test type: UNIT / INTEGRATION / E2E / CONTRACT / PROPERTY /
       FUZZ / SNAPSHOT
     - What it would catch (the specific bug or regression)
     - Effort: S (≤30 min) / M (≤2 h) / L (≤1 d)
     - Priority: P0 (ship-blocker) / P1 (this sprint) / P2 (backlog)
   Sort by priority then by (catch-value ÷ effort).

5. TEST-PYRAMID SHAPE
   What ratio of unit / integration / e2e fits this area?
   Most projects over-invest in e2e (slow, flaky) and under-invest in
   unit (fast, precise). Recommend the shape.

6. INFRASTRUCTURE
   What needs to exist before writing the tests:
     - Test data / fixtures / factories
     - Mock external services (or use contract tests)
     - CI configuration changes (parallelism, sharding, artefacts)
     - Test database / container setup

7. PLAN  ← the deliverable
   --- PLAN START ---
   # Test Plan: <Area>
   **Context:** <…>   **Date:** <…>

   ## Recommended scope this iteration   (P0 + P1 from §4)
   ## Risks addressed                    (mapping §2 concerns →
                                          recommended tests)
   ## Recommended tests                  (§4 table)
   ## Test pyramid target                (§5)
   ## Infrastructure prep                (§6)
   ## Exit criteria                      (what "done" looks like:
                                          coverage threshold OR
                                          named tests pass OR
                                          named regressions reproduce)
   ## Out of scope                       (what we deliberately are
                                          NOT testing this iteration
                                          and why)
   --- PLAN END ---

HARD RULES
- Every recommendation in §4 cites a real function or file. No "test
  the database layer better".
- Coverage % alone is not a goal. Coverage of risky code paths is.
- §7 "Out of scope" is mandatory — sets boundaries that prevent
  testing-theatre.
- Cap exploration at 15 tool calls.
- Respond in the language of the AREA / CONTEXT input.

AREA:
CONTEXT:
EXISTING:
```

---

## Why it pays off

The default agent response to "write tests for X" is to produce maximum
volume — high coverage, low value. This prompt forces the inverse:
minimum volume, maximum value, with explicit out-of-scope guard rails
so you don't accidentally test six months of work in the wrong order.
