# CASE-STUDY — Anonymised Customer Case Study (Marketing Asset)

Turns a successful engagement into a marketing case study you can put
on your website, in proposals, on LinkedIn, and into pitches. Properly
anonymised so it's defensible if the client hasn't formally approved
publication (and a "with-attribution" variant if they have).

**Leverage value: one good case study generates inbound leads for 12+
months. Marginal cost: 30 minutes of agent time after each engagement.**

---

## How to use

Paste the block below, then on the next line:

    CLIENT_ANON: <how to refer — "European fintech series-B" / "US public-sector agency">
    SECTOR: <industry / vertical>
    SCOPE: <which Tier-2 prompt drove the engagement>
    SITUATION: <what was the client's situation before engagement>
    APPROACH: <what we did — phases, methods, your prompts used>
    RESULTS: <measurable outcomes — be specific>
    QUOTE: <client testimonial verbatim, or "[none collected]">
    APPROVAL: <PUBLIC_WITH_NAME | ANONYMOUS | INTERNAL_ONLY>

---

## The prompt (copy from here)

```
You are producing case-study artefacts from an engagement summary.
Three artefacts are deliverables:
  (a) §6 LONG-FORM — website case study, ~600–1000 words
  (b) §7 SHORT-FORM — LinkedIn / proposal-appendix version, ~250 words
  (c) §8 SOCIAL — X / LinkedIn post draft, ~150 words

Three rules:

(1) NEVER invent results. If RESULTS doesn't quantify it, the
    case study doesn't claim it. "Improved security" without a
    number is a vague feel-good — drop it.
(2) Anonymisation is binary. If APPROVAL = ANONYMOUS, no clue should
    identify the client (city, employee count range, distinctive
    products, specific timelines tied to public events). Combinations
    are giveaways too — "Berlin-based logistics company that closed a
    Series B in 2025" is identifiable.
(3) Match audience. The same engagement reads differently for a CTO
    (technical depth) than a CEO (business outcome). The long-form
    leads with business outcome; the appendix dives into technique.

1. CHALLENGE  (the "before" state)
   Per SITUATION input, write the client's pain in their voice
   (sanitised). Three short paragraphs:
     - The business pressure they were under (regulatory deadline,
       customer churn, M&A audit, scaling pain)
     - The technical state they were in (what wasn't working, in
       general terms)
     - Why they needed external help now (in-house team capacity,
       missing expertise, third-party requirement)

2. APPROACH
   What you did, in 4–6 phases. Per phase:
     - Phase name
     - Duration
     - Activities (verbs: assessed, mapped, identified, drafted,
       reviewed)
     - Methodology reference (cite the §SCOPE prompt / framework)
   This proves you have a method, which is what separates a
   consultancy from a freelancer.

3. RESULTS  (numbers only — no adjectives without data)
   Per RESULTS input, extract:
     - Before vs after numerical comparison (where available)
     - Time-to-deliver (week count, day count)
     - Effort or cost saved (hours, €)
     - Compliance / certification achieved
     - Customer-facing outcomes (deals unlocked, audit passed)
     - Risk avoided (incident class prevented, fines avoided)
   Present in a "Results at a glance" callout box.

4. QUOTE
   If QUOTE input is provided, use it verbatim with attribution per
   APPROVAL. If APPROVAL = ANONYMOUS, use anonymised role: "Head
   of Engineering at the client" — never names.
   If QUOTE = "[none collected]", omit the quote section. Do not
   fabricate quotes. EVER.

5. TECHNICAL DEPTH  (appendix for the long-form, for CTO audience)
   2–3 short paragraphs going deeper:
     - The methodology used (cite the §SCOPE prompt structure as
       the methodology)
     - What was non-obvious / counterintuitive
     - What the client's team learned and now owns

6. LONG-FORM  ← deliverable (a)
   --- LONG-FORM START ---
   # <Catchy Title>: <One-line outcome>
   *<Sector> · <Engagement type> · <Quarter-Year>*

   ## At a glance
   - <Numeric result 1>
   - <Numeric result 2>
   - <Numeric result 3>
   - Engagement: <duration> · Deliverable: <named artefact>

   ## The challenge          (§1)
   ## Our approach           (§2)
   ## Results                (§3, with the numbers)
   > <§4 quote with attribution>
   ## How we did it          (§5)
   ## What's next            (1 paragraph: what the client is now able
                              to do that they couldn't before)
   --- LONG-FORM END ---

7. SHORT-FORM  ← deliverable (b)
   --- SHORT-FORM START ---
   **<Sector> · <Engagement>**

   <2-sentence challenge>

   <2-sentence approach citing your methodology>

   **Results:** <bulleted numerics>

   > <§4 quote if available>
   --- SHORT-FORM END ---

8. SOCIAL  ← deliverable (c)
   --- SOCIAL START ---
   <Hook: 1 sentence about the surprising result>

   <Context: 2 sentences on the challenge>

   <What we did: 2 sentences on the approach>

   <Result: 1 sentence with the headline number>

   <CTA: 1 line — "Working on similar? DM me." or "Full case study:
    link">
   --- SOCIAL END ---

9. ANONYMISATION CHECK  (mandatory before output if APPROVAL = ANONYMOUS)
   Walk the long-form text once more and remove or generalise:
     - Any product name unique to the client
     - Any technology choice that's unusual enough to identify
     - Any timeline tied to a public event (funding round, IPO, M&A)
     - Headcount specificity ("a 47-person team" → "a mid-size team")
     - Geographic specificity beyond region
     - Customer-of-customer references
   After cleanup, state explicitly: "Anonymisation check complete: no
   identifying combination retained."

HARD RULES
- §3 RESULTS contains only numbers from the RESULTS input. Adjectives
  ("significantly", "dramatically") without numerical backing are
  banned.
- §4 QUOTES are verbatim from QUOTE input. Never fabricated.
- §9 ANONYMISATION CHECK runs when APPROVAL = ANONYMOUS. State the
  completion explicitly so reviewers know it ran.
- Respond in the language of the SITUATION input.

CLIENT_ANON:
SECTOR:
SCOPE:
SITUATION:
APPROACH:
RESULTS:
QUOTE:
APPROVAL:
```

---

## What you get

Three drop-in marketing assets per engagement:
- **Long-form** for your website case-studies page
- **Short-form** for proposal appendices ("Recent work")
- **Social** for LinkedIn / X to drive inbound interest

Run after every closed engagement. One case study per quarter compounds
into a portfolio that closes new business while you sleep.
