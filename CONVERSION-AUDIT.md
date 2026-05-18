# CONVERSION-AUDIT — CRO-Audit mit Test-Hypothesen (verkaufbares Deliverable)

Conversion Rate Optimization audit of an existing website or funnel.
Identifies friction, drop-off points, and copy/design issues, then
produces a backlog of ranked A/B-test hypotheses with expected lift
estimates and required sample sizes. Different from PERF (technical
speed) and SEO (organic visibility): this is about converting visitors
you already have.

**Realistic engagement price: €1 500 – 7 500.** Often paired with a quarterly retainer for test execution.

---

## How to use

Paste the block below, then on the next line:

    URL: <site or specific funnel — comma-separate multiple>
    CURRENT_CR: <current conversion rate baseline if known, otherwise: unknown>
    AUDIENCE: <ICP — who you want to convert>
    GOAL: <macro-conversion: trial signup / demo book / purchase / lead form>
    ACCESS: <analytics view-only | heatmaps | session recordings | none>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a Conversion Audit. The §9 REPORT is the
deliverable. Three rules:

(1) Cite the page and the element. "The landing page has weak copy"
    is not a finding; "Hero subhead at <url> uses 27 words where
    benchmark is 15–20" is.
(2) Hypotheses are FALSIFIABLE. Every test has an expected
    direction, magnitude, and minimum sample size.
(3) Friction inventory beats opinion. Walk the funnel like a user;
    note every confusion, decision, and drag.

1. SCOPE & FUNNEL MAP
   From URL input, map the conversion funnel step by step:
     - Step 1 (entry — typically landing page or ad destination)
     - Step 2 (consideration — pricing, features, comparison)
     - Step 3 (decision — signup form, calendar, cart)
     - Step 4 (commitment — payment, account creation, calendar
       booking)
   Per step, note current URL and expected behaviour.

2. CURRENT-STATE BENCHMARKS
   Where measurable from ACCESS:
     - Page-level: bounce rate, time-on-page, scroll depth
     - Funnel-level: step-to-step conversion %, drop-off %
     - Goal-level: macro-conversion rate
   Compare to industry benchmarks (B2B SaaS landing: 2–5% trial
   signup; e-commerce: 1–3% purchase; lead form: 5–15%). State
   benchmark source.

3. ABOVE-FOLD AUDIT  (the most-leveraged surface)
   Per landing page:
     - Headline: clarity test (5-second test — does it pass?),
       outcome-focused?, awareness-stage match?
     - Subhead: who + what + why, 15–25 words?
     - Primary CTA: visible without scroll? thumb-zone on mobile?
       verb + outcome label?
     - Visual: supports headline or competes with it?
     - Trust strip: logos / metric headline?
     - Friction: anything making the visitor scroll to understand
       value

4. COPY AUDIT  (per page)
   - Awareness stage match (UNAWARE → MOST-AWARE) — see LANDING-PAGE.md
   - Specificity (numbers, named outcomes beat adjectives)
   - Voice (consistent, audience-appropriate)
   - Scannability (short paragraphs, subheads, bullets)
   - One idea per section
   - Excess words ("In order to" → "to"; "Utilize" → "use")
   - Jargon vs audience vocabulary

5. FORM AUDIT  (any conversion form)
   - Field count (every additional field drops conversion ~7%
     unless absolutely required)
   - Field order (easy/familiar before hard/personal)
   - Field labels (above field, not placeholder text)
   - Validation (inline, friendly, with format examples)
   - Optional/required clearly marked
   - Auto-complete attributes present
   - Mobile keyboard types (`type="email"`, `inputmode="numeric"`)
   - Submit button (verb + outcome, not "Submit")
   - Privacy reassurance near submit ("We never share your email")
   - Error states tested

6. TRUST & SOCIAL PROOF AUDIT
   - Above-fold trust strip (logos, metric, badge)
   - Real customer testimonials with full attribution
   - Specific metrics ("47% faster" beats "much faster")
   - Security badges (only real ones)
   - Money-back / guarantee visible at CTA
   - Risk reversal present

7. FRICTION INVENTORY  ← the high-value section
   Walk the funnel as a first-time visitor. Note every:
     - Decision point that pauses the user
     - Question the page doesn't answer
     - Visual competition (multiple competing CTAs)
     - Unexpected interrupt (popup, chat widget, cookie banner
       blocking content)
     - Required information the user might not have ready
     - Off-platform redirect (clicks that leave the funnel)
     - Mobile-specific failure (tap target too small, viewport
       overflow, fixed elements covering content)

8. TEST HYPOTHESES BACKLOG
   For each significant friction:
     - Hypothesis ID
     - Page / element
     - Current state (with screenshot reference)
     - Proposed change
     - Expected outcome: "Changing X to Y will lift <metric> by
       Z–W% because <reasoning>"
     - Minimum sample size (use a calculator with baseline CR,
       MDE 10–20%, 80% power, 95% confidence)
     - Effort: S (≤1d) / M (≤1w) / L (>1w) to implement
     - Priority score = expected lift × traffic ÷ effort
   Sort by priority. Top 5 in bold.

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Conversion Audit — <Client / URL>
   **Date:** <…>   **Funnel:** <…>   **Current CR baseline:** <…>

   ## Executive Summary             (≤300 words: posture, top 3
                                     friction points, expected lift
                                     from top 3 tests)
   ## Funnel Map & Baseline         (§1, §2)
   ## Above-Fold Audit              (§3, per page)
   ## Copy Audit                    (§4)
   ## Form Audit                    (§5)
   ## Trust & Social Proof Audit    (§6)
   ## Friction Inventory            (§7 — surface prominently)
   ## A/B Test Backlog              (§8, ranked)
   ## Implementation Roadmap        (test order: quick wins first,
                                     compound learnings second)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of <URLs> and <analytics access if granted>. Expected lift
     ranges are estimates based on industry benchmarks and pattern-
     matching to similar conversion problems; actual lifts require
     valid A/B tests run to statistical significance on the client's
     real traffic. Sample-size calculations assume statistical
     independence and normal-population assumptions that real traffic
     may violate (seasonality, source mix, device split). This audit
     does not include: technical SEO (see SEO.md), site performance
     (see PERF.md), accessibility (see A11Y.md), or commercial
     pricing strategy."

HARD RULES
- Every finding cites the URL and the specific element (CSS selector,
  visual landmark, or screenshot reference).
- Every hypothesis has an expected lift RANGE, sample size, and
  effort. Single-point estimates and "could improve" hypotheses
  are useless.
- Friction inventory walks the funnel like a real user — no
  abstract complaints.
- Respond in the language of the AUDIENCE input.

URL:
CURRENT_CR:
AUDIENCE:
GOAL:
ACCESS:
CLIENT:
```

---

## What the buyer gets

A ranked test backlog the client's team can execute over 1–2 quarters,
with expected lift, sample size, and implementation effort per test.
Pair with a quarterly retainer (see RETAINER.md) to execute the
backlog and report results — typical month-2 ROI: 1.5–3× the audit fee.
