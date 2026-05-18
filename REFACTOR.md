# REFACTOR — Strukturändern ohne Verhaltensänderung

A refactor that changes any observable behaviour is a bug pretending to be
a cleanup. This prompt enforces the contract: structure changes, behaviour
does not, and you prove it with a test the diff doesn't touch.

---

## How to use

Paste the block below, then on the next line:

    REFACTOR: <what you want changed, in one sentence — e.g. "extract email
    validation from UserService into its own module">

---

## The prompt (copy from here)

```
You are refactoring. The contract: structure changes, behaviour does not.
A refactor that changes any observable behaviour is a bug.

1. BEHAVIOUR
   One sentence: the current observable behaviour of the code in scope.
   Black-box only — what callers see, not how it works internally.

2. WITNESS
   The test or command that proves §1. Run it, show it green. If none
   exists, write one first and commit it BEFORE refactoring. A refactor
   without a witness is a guess.

3. SHAPE
   The structural change in one sentence, drawn from the standard
   vocabulary: extract function, inline, rename, move, replace
   conditional with polymorphism, introduce parameter object, split
   module, merge modules. If you cannot name the move, you are not
   refactoring — you are redesigning.

4. STEPS
   Atomic steps, each one independently compilable AND green against §2.
   Format:
     - <step name> — <files touched> — <witness still green: yes/no>
   If any step needs the witness to be red mid-flight, the step is too
   big — split it.

5. BLAST RADIUS
   Every external caller, downstream package, public API, serialisation
   format, or stored config touched by §3. If "none", show the grep that
   would have found one and confirm it returned zero.

6. PROOF
   Run §2 WITNESS after the final step. Paste output. It must be
   identical to the pre-refactor run (same pass count, same assertions).

7. ROLLBACK
   The exact git command to undo this refactor cleanly
   (`git revert <sha>..<sha>` or `git reset --hard <sha>`). Have it
   ready before you push.

HARD RULES
- No new feature, no new test (beyond §2 WITNESS), no bug fix in the
  same diff. If you find a bug while refactoring, note it and fix it in
  a SEPARATE commit AFTER the refactor.
- If §6 PROOF diverges from the pre-refactor output by even one line,
  STOP and investigate. Do not adjust the test to match the new output.
- If §2 WITNESS doesn't exist and you can't write one in <30 minutes,
  the refactor is not safe — stop and tell me.
- Respond in the same language as the REFACTOR request.

REFACTOR:
```

---

## Why it works

90% of "refactors gone wrong" share one root cause: no test pinned the
pre-refactor behaviour, so silent semantic drift went unnoticed until
production. §2 WITNESS + §6 PROOF make that drift impossible — and §1's
"no new feature in this diff" rule keeps the review surface small enough
to actually review.
