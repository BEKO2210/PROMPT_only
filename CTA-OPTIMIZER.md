# CTA-OPTIMIZER — Call-to-Action-Audit für eine Website (verkaufbares Deliverable)

Focused audit of every CTA across a website: placement, copy, design,
context, and conversion path. CTAs are the conversion fulcrum — small
copy changes ("Get my audit" vs "Submit") routinely lift conversion
10–30%. This finds those wins quickly.

**Realistic engagement price: €500 – 2 500.** Quick-turnaround audit.

---

## How to use

Paste the block below, then on the next line:

    URL: <site or specific pages>
    GOAL: <primary macro-conversion the CTAs should drive>
    AUDIENCE: <ICP and their awareness stage>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a CTA audit. The §7 REPORT is the deliverable.
Three rules:

(1) ONE primary CTA per page. Multiple competing CTAs split
    attention; conversion drops monotonically with CTA count.
(2) Verb + outcome beats verbs alone. "Submit" / "Click here" /
    "Learn more" leak conversion. "Get my audit" / "Start free
    trial" / "Book a 20-minute walkthrough" earn it.
(3) Context matters. The same CTA placed above fold (when value
    isn't proven) vs after a case study (when value is proven)
    performs very differently. Audit placement, not just copy.

1. CTA INVENTORY
   Walk every in-scope page. For each CTA observed:
     - URL + position (above fold / below / footer / sticky)
     - CTA label (verbatim)
     - Visual: button vs link, color, size relative to surrounding
     - Destination URL
     - Context (what precedes it — value-prop section, case study,
       price, FAQ)
     - Whether it's the page's PRIMARY CTA, SECONDARY (lower-
       commitment alternative), or NOISE (a tertiary link competing
       for attention)
   Cap inventory at top 20 pages by traffic.

2. PRIMARY-CTA AUDIT  (per page)
   For each page's primary CTA:
     - Is there only ONE above the fold? If multiple, which actually
       wins eye attention?
     - Verb + outcome? Or verb-only?
     - First-person framing where appropriate ("Get my report" tests
       higher than "Get your report" on B2C; flip for B2B)
     - Length (2–5 words ideal)
     - Match to page intent and visitor awareness stage
     - Visual prominence (contrast, size, position)
     - Risk reversal nearby ("Free, no credit card" / "30-day money
       back")

3. SECONDARY-CTA AUDIT
   For visitors not ready for primary:
     - Does each primary CTA have a lower-commitment alternative?
       (download, video demo, calendar later, FAQ)
     - Is the secondary visually subordinate so it doesn't compete?
     - Is the secondary appropriate to the page's audience stage?

4. CONTEXTUAL PATTERNS
   Audit CTA placement in relation to value delivery:
     - Above fold (must hint at value before asking)
     - After case study (CTA leverages proof — "Get the same result")
     - After pricing (CTA matches purchase intent)
     - After FAQ (CTA addresses what comes after they're convinced)
     - End of long-form content (re-state value + CTA)
     - Sticky / floating on scroll (only if it doesn't obscure
       content)
     - In-content link CTAs (mid-paragraph contextual)

5. MOBILE-SPECIFIC AUDIT
   - Primary CTA in thumb zone (bottom third of mobile screen)?
   - Tap target ≥ 48 × 48 px?
   - Sticky CTA that doesn't cover content?
   - Form CTAs trigger appropriate keyboard (`type="email"`,
     `inputmode="numeric"`)?

6. FRICTION INVENTORY  (CTAs that look ready but block conversion)
   - CTAs that demand form fill before showing pricing
   - CTAs that require account creation before value is shown
   - CTAs labelled "Contact us" when "Book a call" would convert
     better
   - CTAs that open chat widget (lower conversion than form for
     non-real-time intent)
   - CTAs with destination URL that doesn't match the CTA promise
     (clicked "Book demo" goes to a contact form, not a calendar)

7. REPORT  ← the deliverable
   --- REPORT START ---
   # CTA Audit — <Client>
   **Date:** <…>   **Scope:** <URLs>   **Primary goal:** <GOAL>

   ## Executive Summary             (≤250 words: top 3 CTA fixes
                                     ranked by expected lift,
                                     CTAs-per-page distribution,
                                     missing risk-reversal moments)
   ## CTA Inventory                 (§1 table)
   ## Primary CTA Findings          (§2, page by page)
   ## Secondary CTA Findings        (§3)
   ## Contextual Placement Issues   (§4)
   ## Mobile Issues                 (§5)
   ## Friction Inventory            (§6)
   ## Prioritised Fix List          (each: page + element + current
                                     state + recommended state +
                                     expected lift range + effort)
   ## A/B Test Suggestions          (top 5 hypotheses with sample
                                     size estimates)
   ## Limitations                   (§8, verbatim)
   --- REPORT END ---

8. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This audit was produced by an AI agent on <date> from analysis
    of <URLs> as visible at audit time. Expected lift ranges are
    estimates based on industry benchmarks and pattern matching;
    actual lifts require valid A/B tests run to statistical
    significance on the client's real traffic. CTA performance
    interacts with traffic source, audience segment, and seasonal
    factors not captured in this audit. This audit does not include:
    full funnel conversion analysis (see CONVERSION-AUDIT.md), copy
    voice / clarity beyond CTA labels (see COPY-AUDIT.md), or
    form-field optimisation (see FORM-OPTIMIZER.md)."

HARD RULES
- Every recommendation specifies current state + recommended state
  + expected lift range.
- Every CTA cited references the page URL and the visual position
  (so the client's team finds it without ambiguity).
- "Make CTAs more prominent" is not a recommendation; "Increase
  primary CTA button height from 32px to 48px and contrast ratio
  from 3.1:1 to 4.5:1" is.
- Respond in the language of the AUDIENCE input.

URL:
GOAL:
AUDIENCE:
CLIENT:
```

---

## What the buyer gets

A focused 10–15 page audit with quick-win CTA changes (deliverable in
a single afternoon) and a prioritised A/B test backlog. Often the
single highest-ROI audit type — small label and placement changes
compound across every page.
