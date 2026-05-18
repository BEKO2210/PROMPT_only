# LANDING-PAGE — Conversion-Landing-Page aus Value-Proposition (verkaufbares Deliverable)

Produces a complete, conversion-optimized landing page (HTML + Tailwind
CSS + copy) from a brief. Built on the PASTOR / PAS / AIDA frameworks
that actually convert in 2026 — not 2018 hype copy. Output is
ready-to-deploy code, not a wireframe.

**Realistic engagement price: €500 – 3 000 per page.** Higher for B2B
SaaS, lower for solopreneur / info-product.

---

## How to use

Paste the block below, then on the next line:

    PRODUCT: <name, one-line description>
    AUDIENCE: <ICP — role, company size, primary pain, awareness stage>
    VALUE_PROP: <single sentence: outcome they get, time/cost it takes>
    PROOF: <testimonials, customer logos, metrics — paste verbatim if available>
    CTA: <primary action — book demo, start trial, buy, get pricing>
    BRAND: <colors hex, font family, voice (formal/friendly/bold)>
    STACK: <plain HTML+Tailwind | Next.js page | Astro | Webflow markup>

---

## The prompt (copy from here)

```
You are producing a complete conversion landing page. Three deliverables:
  (a) §8 PAGE CODE — paste-and-deploy markup
  (b) §9 COPY DOC — every text element with rationale, so the client
      can replace any line without breaking conversion intent
  (c) §10 A/B BACKLOG — 5 variant hypotheses to test next

Three rules:

(1) NEVER invent testimonials, logos, or metrics. PROOF input is the
    only allowed source — fabrication is fraud and gets sites pulled
    from ad networks.
(2) Copy follows AWARENESS STAGE. Unaware audience needs problem
    education; problem-aware needs solution category; solution-aware
    needs why-us; product-aware needs offer.
(3) ONE message per section. If a section has two ideas, split or cut.

1. AWARENESS-STAGE DIAGNOSIS
   From AUDIENCE input, identify Schwartz's awareness stage:
     - UNAWARE: doesn't know they have the problem
     - PROBLEM-AWARE: knows pain, doesn't know solutions
     - SOLUTION-AWARE: knows solution categories, comparing
     - PRODUCT-AWARE: knows you, evaluating
     - MOST-AWARE: ready to buy, needs offer
   Page structure and copy weight depend entirely on this.

2. PAGE ARCHITECTURE  (above the fold matters most)
   Standard section order, adjust per §1:
     1. HERO — headline + subhead + primary CTA + hero visual
     2. SOCIAL PROOF STRIP — logos / metric headline
     3. PROBLEM — articulate pain in audience's words (skip if MOST-AWARE)
     4. SOLUTION — your approach in 1 sentence + 3 capability cards
     5. HOW IT WORKS — 3 steps max
     6. PROOF — testimonials + case-study mini-cards
     7. FEATURES — only if buyer needs to compare against alternative
     8. PRICING — link or anchored teaser
     9. OBJECTION HANDLING — FAQ addressing top 5 buying blockers
    10. FINAL CTA — repeat hero CTA with risk reversal

3. HERO COPY  (the only section most visitors read)
   Headline rules:
     - ≤12 words
     - Outcome-focused, not feature-focused
     - Specific (numbers, named outcomes)
     - Match awareness stage
   Subhead rules:
     - 15–25 words
     - Who it's for + what it does + why it matters
     - Includes the time/effort dimension when possible
   Primary CTA button:
     - Verb + outcome ("Get my audit" not "Submit")
     - First-person possessive where conversion data supports it
   Optional secondary CTA: lower-commitment alternative (download,
   demo video, calendar link).

4. PROOF SECTIONS  (cite source for every element)
   - Customer logo strip: only logos client has permission to use
   - Testimonial: verbatim from PROOF input, with name + role +
     company (or anonymised role + company-type if permission is
     limited)
   - Metric headlines: only numbers from PROOF — no invented "10×
     faster" or "trusted by thousands"
   - Case-study mini-cards: link to longer write-ups

5. OBJECTION HANDLING (FAQ)
   The 5 questions a buyer at this awareness stage will ask before
   converting. Examples:
     - Price ("How much does it cost?")
     - Timing ("How quickly can we get value?")
     - Integration ("Does it work with X?")
     - Risk ("What if it doesn't work for us?")
     - Trust ("Who else has done this?")
   Answers are SPECIFIC and HONEST. Vague answers raise more questions.

6. RISK REVERSAL  (at final CTA)
   The promise that takes risk off the buyer's shoulders:
     - Free trial / money-back / first-result-or-refund / cancel
       anytime / no-credit-card-required
   Match risk reversal to product type — overpromising kills trust.

7. CONVERSION ELEMENTS  (technical)
   - Single, persistent primary CTA color (BRAND accent)
   - No competing CTAs above fold
   - Form fields: minimum viable (email is often enough at top of funnel)
   - Mobile: thumb-zone primary CTA, no horizontal scroll
   - Page weight: target <1MB above-fold, lazy-load below
   - LCP target ≤ 2.5s; INP ≤ 200ms

8. PAGE CODE  ← deliverable (a)
   Complete, paste-and-deploy markup per STACK input. Inline Tailwind
   classes (no external CSS file). Semantic HTML5 (header, main,
   section, article, footer). Accessible: alt text, ARIA labels where
   needed, color contrast ≥ 4.5:1 on body text.
   --- PAGE CODE START ---
   <!doctype html>
   <html lang="...">
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width,initial-scale=1">
     <meta name="description" content="<from §3 subhead>">
     <title><from §3 headline></title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body class="...">
   <!-- HERO -->
   <!-- SOCIAL PROOF -->
   <!-- [continue per §2] -->
   </body>
   </html>
   --- PAGE CODE END ---

9. COPY DOC  ← deliverable (b)
   For every text element on the page, document:
     - Element ID / location
     - Text shown
     - Awareness stage it serves
     - Rationale (why this word choice)
     - Edit risk: HIGH / MEDIUM / LOW (HIGH = changing this likely
       drops conversion)
   The client uses this to update copy without breaking intent.

10. A/B BACKLOG  ← deliverable (c)
    Five variant hypotheses worth testing next:
      - Variant ID
      - What changes (headline / CTA copy / proof position / pricing
        anchor / form length)
      - Hypothesis (specific, measurable: "Changing X to Y will lift
        sign-up conversion by Z% because [reasoning]")
      - Minimum sample size needed
      - Priority (1–5)

HARD RULES
- Every testimonial / logo / metric on the page traces to PROOF input.
  No fabricated social proof.
- Awareness stage drives every copy choice. Mismatched copy converts
  worse than no copy.
- Single primary CTA above fold. Competing CTAs kill conversion.
- Mobile-first layout — design for thumb, scale up to desktop.
- Respond in the language of the AUDIENCE input.

PRODUCT:
AUDIENCE:
VALUE_PROP:
PROOF:
CTA:
BRAND:
STACK:
```

---

## What the buyer gets

A single HTML file (or framework-page component) ready to deploy, plus a
copy doc explaining every word choice, plus 5 ready-to-run A/B tests
for continuous optimization. The copy doc is what separates a real
deliverable from a template — it lets the client update without
guessing what's load-bearing.
