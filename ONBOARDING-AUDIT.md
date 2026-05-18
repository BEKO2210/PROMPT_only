# ONBOARDING-AUDIT — First-Time-User-Experience Audit (verkaufbares Deliverable)

The first session after signup determines activation, which determines
retention, which determines LTV. Most SaaS products lose 40–80% of
signups in the first 7 days because the onboarding doesn't get the
user to their AHA moment fast enough. This audit walks the FTUE step
by step and finds every friction.

**Realistic engagement price: €1 500 – 7 500.**

---

## How to use

Paste the block below, then on the next line:

    PRODUCT: <name, what it does>
    ACCESS: <free trial credentials | sandbox | screenshots only>
    AHA_MOMENT: <the single moment a user realises the product's value>
    ICP: <ideal user — role, technical level, urgency>
    CURRENT_ACTIVATION: <activation rate if known, else: unknown>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing an Onboarding Audit. The §9 REPORT is the
deliverable. Three rules:

(1) Time-to-AHA is the primary metric. Every friction step is
    measured against how much it delays the AHA moment.
(2) Walk it as a new user — multiple times if needed. The author
    of the onboarding cannot see friction the new user feels.
(3) Activation is the dependent variable. Identify the activation
    metric (NOT signup) and trace which steps move it.

1. SCOPE & ACTIVATION DEFINITION
   - What's the activation moment? (a meaningful first use of core
     value — sent first message, created first project, integrated
     first API call)
   - Current activation rate (% of signups reaching activation
     within 7 days)
   - Time-to-AHA target (industry norms: <5 minutes for low-touch
     SaaS; <30 minutes for mid-touch; first day for complex
     enterprise)

2. PRE-SIGNUP REVIEW  (foundation matters)
   - Does the landing page clearly state what users will experience
     in first 5 minutes?
   - Are the signup form's fields minimal (see FORM-OPTIMIZER.md)?
   - Is there a "no credit card required" promise (if free trial)?
   - Is social signup offered (Google / GitHub / SSO)?
   - Does post-signup-email arrive within 60 seconds?

3. FIRST-LOAD AUDIT  (the make-or-break minute)
   - First screen after signup — is it the empty product, a welcome
     modal, a tour, a checklist, a setup wizard?
   - Is there a clear PRIMARY action visible above the fold?
   - Does the first action lead toward the AHA moment, or away
     (settings, profile completion, billing setup)?
   - Loading time of first screen?
   - Empty-state design — is the empty product instructive or
     forbidding?

4. ACTIVATION PATH AUDIT  (step by step to AHA)
   Walk every step from signup to AHA:
     - Step #
     - What the user is asked to do
     - What value they receive at this step (or nothing)
     - Friction observed (confusion, required info they don't
       have, errors, dead-ends)
     - Time taken (estimate)
   Identify steps that:
     - Could be removed (no value, no required data)
     - Could be deferred (collect after AHA, not before)
     - Could be auto-completed (defaults, inference, examples)
     - Need better instruction (unclear what to do next)

5. EMPTY STATES & SAMPLE DATA
   For each main feature, when a user opens it for the first time:
     - Is there sample / demo data so they can see what "good" looks
       like?
     - Is there an inline tutorial or just an empty grid?
     - Is there a clear "create your first X" CTA?
   Empty states are the highest-leverage UX surface in SaaS
   onboarding — most apps under-invest catastrophically.

6. PROGRESSIVE DISCLOSURE
   Are advanced features hidden until the user needs them?
   - First session shows core actions only
   - Settings / admin / billing disclosed only when relevant
   - Tooltips / inline help available on demand, not forced
   The opposite is "everything visible, paralysis" which kills
   activation.

7. ONBOARDING NUDGES
   - In-product checklist / progress bar (e.g. "3 of 5 steps to
     value")?
   - Email sequence reinforcing activation steps (see EMAIL-SEQUENCE.md
     ONBOARDING type)?
   - In-app messages / tooltips triggered by user behaviour, not
     time (better engagement)?
   - Re-engagement after inactivity (24h, 72h, 7d) ?
   - "Stuck?" exit-intent or 5-minute-idle helper?

8. AHA-MOMENT VERIFICATION
   Did your test reach the AHA moment? If not:
     - At which step did you drop off?
     - Why (confusion / required info you didn't have / waiting on
       async setup / no value visible / decided not worth the time)?
   If you did reach it:
     - How long did it take?
     - How many actions / clicks / fields?
     - Was the AHA moment recognisable as such, or did the product
       move on without celebrating it?

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Onboarding Audit — <Product>
   **Client:** <…>   **AHA Moment:** <AHA_MOMENT>
   **Current activation rate:** <…>   **Date:** <…>

   ## Executive Summary             (≤300 words: time-to-AHA
                                     measured, top 5 friction points,
                                     expected activation lift)
   ## Activation Definition         (§1)
   ## Pre-Signup                    (§2)
   ## First-Load                    (§3)
   ## Activation Path               (§4 — step-by-step table)
   ## Empty States                  (§5)
   ## Progressive Disclosure        (§6)
   ## Onboarding Nudges             (§7)
   ## AHA Verification              (§8)
   ## Prioritised Fix List          (each: step + friction + fix +
                                     expected lift + effort)
   ## Recommended Email Sequence    (link to EMAIL-SEQUENCE.md
                                     onboarding output)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from a
     simulated first-time-user experience using <ACCESS>. Expected
     activation lifts are estimates based on industry benchmarks
     and pattern matching; actual lifts require valid measurement
     against control cohorts on real signups. Onboarding
     performance varies significantly by traffic source (intent-
     matched users activate faster than cold sources), pricing tier,
     and audience experience. This audit does not include: pricing-
     tier comparison, sales-assisted onboarding paths (if PLG +
     sales motion), or long-tail retention beyond first 7 days."

HARD RULES
- Test the onboarding multiple times with different starting points
  (different inputs to see if the path differs).
- Every step has a time estimate and friction observation.
- Activation rate vs signup rate distinction is clear — don't
  confuse the two.
- AHA-moment verification is honest: if you didn't reach it, the
  report says so prominently.
- Respond in the language of the PRODUCT input.

PRODUCT:
ACCESS:
AHA_MOMENT:
ICP:
CURRENT_ACTIVATION:
CLIENT:
```

---

## What the buyer gets

A 15–25 page audit with step-by-step friction analysis and a fix
backlog ranked by activation impact. Pair with the EMAIL-SEQUENCE
(ONBOARDING type) prompt for the lifecycle-email side of the activation
problem — together they deliver the full onboarding lever.
