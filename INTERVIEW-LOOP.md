# INTERVIEW-LOOP — Strukturierter Interview-Prozess (verkaufbares Deliverable)

Designs a complete interview loop for a role: stages, what each tests
for, who interviews when, scorecards per stage, decision protocol,
candidate experience. Built around evidence-based hiring (work
samples > resumes > unstructured interviews) and bias mitigation.

**Realistic engagement price: €1 000 – 5 000 per role's interview
design.**

---

## How to use

Paste the block below, then on the next line:

    ROLE: <title, level — typically pair with JOB-DESCRIPTION.md output>
    PRIORITIES: <top 3–5 things you're hiring for>
    INTERVIEWERS: <who's available + their roles>
    TIME_BUDGET: <total candidate time you'll ask for>
    TIMELINE: <target application-to-offer turnaround>
    JURISDICTION: <relevant employment law context>

---

## The prompt (copy from here)

```
You are designing an interview loop. The §8 LOOP is the deliverable.
Three rules:

(1) WORK SAMPLES BEAT INTERVIEWS. The best predictors of role
    success are samples of the actual work, not behavioural
    questions about hypothetical scenarios. Build the loop around
    work samples; use interviews for cultural / collaboration
    signal.
(2) STRUCTURED > UNSTRUCTURED. Every interviewer asks the same
    candidate the same questions per stage. Then compares notes.
    Unstructured interviews are noise machines.
(3) RESPECT THE CANDIDATE'S TIME. Total ask < 8 hours for most
    roles. Beyond that, top candidates self-deselect — they have
    options.

1. SUCCESS DEFINITION
   What does "this hire works out" mean at 12 months? Define
   2–4 specific outcomes. The interview loop tests for ability
   to deliver these.

2. SIGNAL MAP  (per role priority, how to test it)
   Per PRIORITIES item:
     - Signal you're testing for
     - Best method (work sample / case study / live exercise /
       structured behavioural / reference)
     - Why this method is better than alternatives
   Avoid:
     - Brain teasers (no signal)
     - "Why are manhole covers round?" — anti-pattern
     - Unstructured "tell me about yourself" rambles
     - Whiteboard algorithms unrelated to the role's actual work

3. STAGE ARCHITECTURE
   Typical 4-stage loop (compress for junior, expand for senior):

   STAGE 0 — APPLICATION REVIEW
     - What's screened from CV + work sample question / portfolio
     - Reviewer: 1 person (the hiring manager or designee)
     - Time investment: 5–10 min per CV
     - Decision rule: progress, reject, or pool

   STAGE 1 — INTRO CALL (20–30 min)
     - Mutual fit: do they want the role; can we offer it
     - Compensation expectation alignment (talk about it EARLY)
     - Visa / start-date / blockers surfaced
     - Reviewer: hiring manager or talent partner
     - Decision rule: progress or reject (with feedback)

   STAGE 2 — WORK SAMPLE / TAKE-HOME (≤ 3 hours candidate time)
     - A realistic task representative of the role's actual work
     - Clear scope, clear time bound, clear evaluation criteria
       shared in advance
     - Compensated if longer than 2 hours (norm in 2026 for senior
       roles)
     - Reviewer: 2 evaluators, independently, then compare
     - Decision rule: structured scorecard

   STAGE 3 — DEEP DIVES (2–4 hours total candidate time)
     - 2–3 conversations, each with a specific signal target
       (technical depth, cross-functional collaboration, judgment
       under ambiguity)
     - Includes a walk-through of the work sample with the
       candidate (their reasoning, what they'd change)
     - Each interviewer: same structured questions per stage type
     - Reviewer: each conversation has 1–2 interviewers, scorecard

   STAGE 4 — FINAL / EXECUTIVE
     - Mutual sell: candidate meets a leader, asks any remaining
       questions, hears the broader vision
     - Reverse-reference: candidate talks to a peer / direct
       report
     - Decision: offer or reject with feedback

4. PER-STAGE SCORECARD
   Per interviewer per stage, structured scorecard:
     - Signal being tested
     - Evidence observed (specific examples, not "good
       communicator")
     - Score: STRONG YES / YES / NO / STRONG NO (avoid "MAYBE" —
       it leaks calibration)
     - Confidence: HIGH / MED / LOW (acknowledge uncertainty)
   Submitted BEFORE seeing other interviewers' scorecards (prevents
   social proof bias).

5. DECISION PROTOCOL
   - All scorecards submitted independently
   - Debrief meeting: each interviewer presents, then group
     decides
   - Decision rule: explicit (any STRONG NO blocks; unanimous YES
     required, or rules per company stage)
   - Decision-maker named (avoid "decided by committee" — accountability)

6. CANDIDATE EXPERIENCE
   - Stage timelines communicated upfront ("we'll get back to you
     in 5 business days")
   - Rejections include 1–2 sentences of feedback (where legally
     possible per JURISDICTION)
   - Take-home tasks compensated above 2 hours
   - Total time investment honest and bounded
   - Glassdoor-quality experience whether you hire or not

7. BIAS MITIGATION
   - Structured questions (every candidate asked the same
     question at the same stage)
   - Blind work-sample review where possible (remove name,
     company, demographic signals)
   - Diverse interviewer panels
   - Standardised scorecards
   - Calibration sessions across interviewers
   - Banned questions per JURISDICTION (e.g. age, family,
     citizenship in EU/US)
   - Pay-equity in offer construction (don't anchor on salary
     history)

8. LOOP  ← the deliverable
   --- LOOP START ---
   # Interview Loop: <ROLE>
   **Designed:** <date>   **Total candidate time:** <hours>

   ## Hiring goal                  (§1)
   ## What we're testing for       (§2 signal map)
   ## Stages
       ### Stage 0: Application Review
       ### Stage 1: Intro Call
       ### Stage 2: Work Sample
       ### Stage 3: Deep Dives
       ### Stage 4: Final
   ## Per-stage scorecards         (§4 templates)
   ## Decision protocol            (§5)
   ## Candidate experience         (§6 commitments)
   ## Bias mitigation              (§7 checklist)
   ## Standard interview questions (per stage, structured set)
   ## Standard rejection templates (with feedback per stage)
   ## Standard offer process
   --- LOOP END ---

HARD RULES
- Work sample is included for every non-entry-level role. Resume +
  interview alone is noise.
- §4 scorecards are submitted BEFORE seeing other interviewers'
  scores. Otherwise social-proof bias collapses signal.
- §6 candidate-time budget under 8 hours total. Top candidates
  walk away from 12-hour loops.
- §7 bias-mitigation checklist is mandatory, not advisory.
- Respond in the language of the JURISDICTION input.

ROLE:
PRIORITIES:
INTERVIEWERS:
TIME_BUDGET:
TIMELINE:
JURISDICTION:
```

---

## What the buyer gets

A complete interview loop the hiring team executes consistently. The
work-sample-anchored structure improves hire quality measurably
(Schmidt & Hunter validity meta-analyses show work samples ~0.54
correlation with performance vs ~0.20 for unstructured interviews).
