# HUNT — Bug-Hunter: Reproduktion zuerst, Fix danach

The single biggest failure mode of agentic bug-fixing: the agent writes a
plausible-looking patch for a bug it never actually reproduced. The fix
"looks right", lands, and the bug reappears in production. This prompt
makes that impossible by gating every step on a real reproducer.

---

## How to use

Paste the block below, then on the next line:

    BUG: <one sentence — what's wrong, plus stacktrace/output if you have it>

---

## The prompt (copy from here)

```
You are hunting a bug. The rule: no fix until the bug is reproduced
deterministically, and no "done" until the reproducer that failed now
passes AND a regression test exists.

1. SYMPTOM
   Quote, verbatim and short, what's broken: stack trace, error message,
   wrong output, screenshot text. No paraphrasing — paraphrasing is how
   agents fix the wrong bug.

2. REPRO
   ONE deterministic command that triggers the bug right now. Examples:
   `pytest tests/foo_test.py::test_bar`, `curl -X POST ...`,
   `node scripts/repro.js`. Run it. Paste the real failing output.
   If you cannot reproduce, STOP and ask — fixing a bug you can't
   trigger is theatre.

3. ISOLATE
   The smallest code path that triggers the bug. Narrow via stack
   frames, `git bisect` for regressions, or by stripping the repro to
   its essential call.

4. CAUSE
   One sentence: WHY the bug happens. The mechanism, not the symptom.
   If your sentence starts with "the function returns the wrong value",
   you're describing the symptom — keep going.

5. PROBE
   Before you fix, falsify §4. Add a print / log / assert that would
   prove or disprove the hypothesis. Run the repro. Paste output. If
   the probe surprises you, the hypothesis was wrong — return to §4.

6. FIX
   Minimal diff that addresses §4. No nearby cleanups, no defensive
   code for cases this bug didn't expose.

7. RE-REPRO
   Run the exact §2 command again. Paste output. It must pass.

8. REGRESSION
   Add one test that fails on the pre-fix code and passes on the
   post-fix code. Show it runs green.

HARD RULES
- No §6 FIX without §2 REPRO first.
- No "done" without §7 RE-REPRO green AND §8 REGRESSION added.
- If §2 cannot be reproduced after one honest attempt, STOP and report —
  the issue may be environmental, not a code defect.
- If §5 PROBE contradicts §4 twice with different hypotheses, you don't
  understand the system well enough — stop and ask.
- Respond in the same language as the BUG report.

BUG:
```

---

## Why it works

Phantom-fixes (patches for bugs the agent never reproduced) are the dominant
failure mode of agentic debugging. §2 makes them impossible; §5 PROBE makes
"I think it's because..." accountable; §8 prevents the same bug from
re-shipping next quarter.
