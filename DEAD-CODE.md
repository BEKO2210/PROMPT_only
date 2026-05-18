# DEAD-CODE — Find Truly Unused Code with Confidence

Find code that is genuinely safe to delete. Hard problem because of
dynamic dispatch, framework hooks, public APIs, reflection, and
runtime-only paths. Most static analysers produce noise here — this
prompt explicitly separates HIGH / MEDIUM / LOW confidence to prevent
accidental deletion of load-bearing code.

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <module / package / repo>
    LANG: <primary language(s) — affects analysis approach>
    TRACE_DATA: <production tracing data available? yes/no — drives confidence>

---

## The prompt (copy from here)

```
You are hunting genuinely dead code. The §6 PLAN is the deliverable.
Three rules:

(1) Confidence comes from corroboration. Static analysis alone is
    NEVER HIGH confidence — it must be combined with at least one
    other signal.
(2) The false-positive filters matter more than the candidate list.
    Anything publicly callable, dynamically dispatched, framework-
    invoked, or test-only is presumed alive unless proven otherwise.
(3) Removal happens in stages: deprecate first, monitor, then delete.
    Big-bang deletion is how you find the call site you missed —
    in production.

1. STATIC SIGNALS  (cheap)
   Run language-appropriate static analysis:
     - TypeScript: `ts-prune`, `knip`, `tsc --noUnusedLocals`
     - Python: `vulture`, `dead`, IDE unused-symbol report
     - Go: `deadcode`, `staticcheck -checks=U1000`
     - Rust: `cargo +nightly udeps`, `#[warn(dead_code)]`
     - Java: IntelliJ unused-symbol or `pmd UnusedPrivateMethod`
     - C#: Roslyn analysers
   Capture findings. These are CANDIDATES, not verdicts.

2. DYNAMIC SIGNALS  (where available)
   - Production tracing / APM data: methods never observed in last
     30/60/90 days
   - Coverage from production-like load: regions never exercised
   - Feature-flag inventory: flags long-since 100%-on or 100%-off
     (the off branch is dead)
   Without dynamic data, the maximum confidence achievable is MEDIUM.

3. FALSE-POSITIVE FILTERS  (apply ruthlessly)
   Mark "ASSUME ALIVE" if any of:
     - Public API exported from a library / package
     - Framework convention name (Spring `@Controller` methods,
       Django views, Next.js page exports, React component default
       exports)
     - Dynamic dispatch target (called via reflection, registered in
       a map, plugin loader)
     - Test-only target (used by tests but not by production code —
       still alive, just only in test)
     - Generated code or codegen target
     - Migration / data-fix script (called once, then never — looks
       dead, isn't)
     - Recently added (< 30 days) — may not have been deployed long
       enough to know

4. CANDIDATES  (post-filter)
   For each candidate that survives §3:
     - Symbol (file:line, type: function/class/file/module)
     - Static signal that flagged it (§1 source)
     - Dynamic signal status (UNSEEN in trace / NO DATA)
     - Confidence:
       HIGH   = static + dynamic agreement + no §3 filter triggered
       MEDIUM = static only + no §3 filter triggered
       LOW    = static only + plausible §3 risk
     - Size of removal (LOC, transitive removable surface)

5. STAGED REMOVAL PLAN
   - HIGH-confidence: deprecate this iteration (add deprecation
     annotation, log on use), delete next iteration after 30 days
     of zero hits in logs
   - MEDIUM-confidence: deprecate + log + 60-day observation window
   - LOW-confidence: leave alone unless you can promote it to MEDIUM
     with better tooling

6. PLAN  ← the deliverable
   --- PLAN START ---
   # Dead-Code Removal Plan: <Scope>
   **Date:** <…>   **Signals used:** <…>

   ## Summary
   Candidates: <N HIGH / N MEDIUM / N LOW>
   Estimated removable LOC: <range>

   ## High-confidence removals  (§4 HIGH)
   ## Medium-confidence removals (§4 MEDIUM)
   ## Low-confidence (do not touch yet) (§4 LOW)
   ## Removal procedure         (§5 — deprecation, observation, delete)
   ## Rollback                  (per stage)
   ## What we deliberately did NOT mark dead
   (anything matching §3 filters — list explicitly so reviewers can
    see your filter applied)
   --- PLAN END ---

HARD RULES
- HIGH confidence requires BOTH static and dynamic signals AND no §3
  filter triggered. Otherwise it is MEDIUM at best.
- Public-API symbols are NEVER candidates regardless of static
  analyser claims. If a library, "unused locally" means nothing.
- Removal procedure is staged. Never recommend immediate deletion of
  anything above zero LOW-confidence risk.
- Cap exploration at 20 tool calls.
- Respond in the language of the SCOPE input.

SCOPE:
LANG:
TRACE_DATA:
```

---

## Why it pays off

The dominant failure mode of agentic dead-code cleanup is over-confident
deletion of dynamically referenced code, then a production incident
two weeks later. The HIGH / MEDIUM / LOW separation plus the §3 filter
discipline keeps you on the safe side of that line.
