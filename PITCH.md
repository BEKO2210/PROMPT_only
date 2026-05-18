# PITCH — Investor / Sales Pitch Deck (verkaufbares Deliverable)

Drafts a pitch deck in slide-by-slide outline form: investor pitch
(seed to Series B), enterprise sales deck, or partner / channel pitch.
Output is Marp / Reveal.js-compatible Markdown — renders to slides
without further work.

**Leverage value: replaces 5–15 hours of deck drafting per pitch. For
clients: realistic engagement price €2 000 – 10 000 per deck.**

---

## How to use

Paste the block below, then on the next line:

    TYPE: <INVESTOR_SEED | INVESTOR_SERIES_A | INVESTOR_SERIES_B
           | ENTERPRISE_SALES | PARTNER | M_AND_A | INTERNAL>
    COMPANY: <name, one-line description>
    PRODUCT: <what it does, who uses it>
    AUDIENCE: <who reads/watches this deck>
    GOAL: <the specific ask — raise €X, close €Y deal, sign partnership, etc.>
    CONTEXT: <traction, financials, customers, team — paste what you have>
    TIME_LIMIT: <minutes for the presentation — drives slide count>

---

## The prompt (copy from here)

```
You are producing a pitch deck in Marp/Reveal-compatible Markdown.
The §10 DECK is the deliverable. Three rules:

(1) ANCHOR EVERY CLAIM. Traction numbers, revenue, growth, customer
    counts come from CONTEXT input. Never invent metrics — investors
    do due diligence and reference-check, and a single inflated
    number kills the round.
(2) NARRATIVE BEFORE SLIDES. The deck is a story. Structure governs
    everything: Problem → Solution → Why Now → Why You → Traction →
    Ask. Detail follows narrative, never the reverse.
(3) ONE IDEA PER SLIDE. If a slide has two charts and three bullets,
    it has zero ideas. Strip until each slide says one thing the
    audience remembers.

1. SCOPE & NARRATIVE
   Per TYPE input, the underlying narrative spine:
     - INVESTOR_SEED: Problem big enough to matter, founders uniquely
       positioned, early proof it's real
     - INVESTOR_SERIES_A: Repeatable acquisition + retention proof,
       why $X gets you to Y, the next milestone
     - INVESTOR_SERIES_B: Scaling economics, defensibility, market
       capture trajectory, path to profitability or next round
     - ENTERPRISE_SALES: Buyer pain quantified, solution mapped to
       buyer's KPI, proof, why now, easy YES path
     - PARTNER: Mutual value, joint customer, attractive economics,
       low integration friction
     - M_AND_A: Strategic fit, integration thesis, financials,
       team retention plan
     - INTERNAL: Decision being asked of internal stakeholders,
       options, recommendation, risks
   State the narrative in one sentence: "<COMPANY> is the deck-style
   pitch for <AUDIENCE> to <GOAL>, telling the story of <plot>."

2. SLIDE COUNT
   Target slides = TIME_LIMIT × 1.0 to 1.5 (one minute per slide is
   typical for investor; faster for sales). Cap at 15 for investor
   seed/A, 20 for B+ or enterprise, 25 for M&A. Anything longer is
   appendix.

3. SLIDE-BY-SLIDE OUTLINE
   For each slide, plan:
     - Slide number and title
     - One-sentence message (the only thing the audience must
       remember)
     - Content elements (text, chart placeholder, image placeholder,
       quote)
     - Speaker note (what the presenter says off-slide)

   Standard investor deck structure:
     1. Title (logo, tagline, presenter, date, contact)
     2. Problem (specific, painful, big)
     3. Solution (your product in one slide)
     4. Why now (market timing, regulatory shift, tech inflection)
     5. Market size (TAM/SAM/SOM with sources)
     6. Product (demo / screenshot / key flows)
     7. Traction (the strongest number you have)
     8. Business model (how money comes in)
     9. Go-to-market (how you reach customers)
    10. Competition (positioning matrix, not feature checklist)
    11. Team (why you specifically can win)
    12. Financials (revenue / growth / unit economics; vary by stage)
    13. Funding history / runway
    14. The ask (€ raising, runway it buys, next milestone)
    15. Thank you (contact)
   Appendix: detailed financials, customer logos / quotes, technical
   deep-dive, FAQ pre-empts.

   Enterprise sales structure differs:
     1. Title
     2. Why we're here (their problem in their language)
     3. The cost of doing nothing
     4. Our approach (high-level)
     5. How it works (demo / 3-step explanation)
     6. Proof (case studies, named)
     7. Results customers see (numbers)
     8. Implementation (timeline, effort required from them)
     9. Pricing (anchored — value before number)
    10. Why us vs alternatives
    11. The yes path (next 3 steps to start)
    12. Q&A
   Appendix: security/compliance, integration architecture,
   procurement-friendly TCO.

4. TRACTION SLIDE  (the most-scrutinised slide)
   The strongest single metric goes here, in this order of
   investor-credibility:
     - Revenue (MRR, ARR, with growth rate)
     - Paying customer count (with growth)
     - Active users (with retention curve)
     - Pipeline (qualified, with conversion history)
     - Engagement (DAU/MAU, session frequency)
     - Waitlist (least credible, last resort)
   Show the trend, not just the point estimate. Honest cohort data
   beats hockey-stick projection every time.

5. ASK
   For investor: amount, valuation expectation if relevant, runway,
   specific milestone the funds buy.
   For sales: signature date, contract structure, kick-off date.
   For partner: pilot scope, integration steps, success metric.
   ALWAYS specific. "We're raising" is not an ask.

6. APPENDIX SLIDES
   Pre-empt the 5–10 hard questions the audience will ask:
     - "What about competitor X?"
     - "Your churn looks high — explain"
     - "How do you defend against Big Tech entering?"
     - "What if your top customer leaves?"
   Each: one slide ready to flip to if asked.

7. DESIGN GUIDELINES  (for the deck-builder downstream)
   - Sans-serif (Inter / Helvetica / system) for body, larger
     display font for slide titles
   - High contrast (black on white, or white on dark navy / black)
   - One chart per slide; no double y-axes
   - No bullet lists >5 items
   - Speaker notes in <!-- comments --> for Marp/Reveal compatibility

8. EXECUTIVE SUMMARY  (NOT a slide — a separate document for
   pre-share)
   ≤300 words covering: problem, solution, traction headline,
   market, ask, contact. Investors and procurement read this BEFORE
   the deck.

9. REFERENCES TABLE
   Every traction number / market size / external claim has a
   source. List them at the end of the deck markdown as a hidden
   slide / speaker-notes appendix so you can defend each number
   when asked.

10. DECK  ← the deliverable (Marp / Reveal.js compatible Markdown)
    --- DECK START ---
    ---
    marp: true
    theme: default
    paginate: true
    ---

    # <Company> — <Tagline>
    *<Presenter, role · date · email>*

    <!-- Speaker note: …-->

    ---

    # <Slide 2 Title>
    <Slide 2 content>

    <!-- Speaker note: …-->

    ---

    [continue for §3 slide-by-slide outline]

    ---

    # Thank you
    <Contact details, calendar link, repo / data-room link>

    <!-- Appendix follows -->

    ---

    # Appendix: <pre-emptive question 1>
    <answer>

    [continue for §6 appendix]
    --- DECK END ---

HARD RULES
- Every traction / market / financial number traces to CONTEXT input
  or a cited source. Inventing numbers in an investor deck is fraud
  in many jurisdictions.
- §4 traction slide uses the strongest credible metric. Do not pad
  with vanity metrics if revenue / paying-customer data exists.
- §5 ASK is specific (amount + use of funds + milestone) — never
  "we're open to investment".
- Speaker notes appear as `<!-- comments -->` so they don't render
  on slides but support the presenter.
- Respond in the language of the AUDIENCE input.

TYPE:
COMPANY:
PRODUCT:
AUDIENCE:
GOAL:
CONTEXT:
TIME_LIMIT:
```

---

## What you (or your client) get

A Marp-renderable Markdown deck plus an executive summary plus a
reference table. Run `marp deck.md -o deck.pdf` or open in VS Code
with the Marp extension and you have a presentation. For client work,
this is a €2–10k deliverable on its own; for your own pitches, it's a
1-day saving per investor round.
