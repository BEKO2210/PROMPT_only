# PRICING-PAGE — Konvertierende Pricing-Page mit Anchor + FAQ (verkaufbares Deliverable)

The pricing page is where qualified leads decide. Most pricing pages
lose money through psychological mis-design: missing anchor, wrong
default, hidden trade-offs, blocking FAQ. This produces a pricing page
that uses established behavioural-economics patterns (anchor, decoy,
loss aversion, social proof) without descending into dark patterns.

**Realistic engagement price: €500 – 2 500.** Higher when paired with pricing-strategy consultation.

---

## How to use

Paste the block below, then on the next line:

    PRODUCT: <product name, what it does>
    TIERS: <list of plans: name, price, included features, limits>
    AUDIENCE: <who buys each tier>
    COMPETITORS: <comparable products and their pricing if relevant>
    PROOF: <verbatim testimonials, customer logos>
    GUARANTEE: <refund / cancel / free-trial terms>
    STACK: <plain HTML+Tailwind | Astro | Next.js component>

---

## The prompt (copy from here)

```
You are producing a pricing page that converts qualified buyers.
Three deliverables: §7 PAGE CODE, §8 COPY DOC, §9 OBJECTION FAQ.
Three rules:

(1) ANCHOR FIRST. The highest price is shown prominently to make
    the middle tier feel reasonable. This is decades-validated
    behavioural pricing — not a dark pattern when prices are honest.
(2) ONE "MOST POPULAR" DEFAULT. Choice architecture: most visitors
    pick the default. Decide which tier you want them in.
(3) NO HIDDEN TRADE-OFFS. Every limit, fee, and "starting at" is
    surfaced in the table. Hiding fees destroys trust and triggers
    refund requests.

1. AUDIENCE-TIER MAPPING
   Per AUDIENCE input, who buys which TIER:
     - Tier 1 (cheapest): individual / solo / try-out
     - Tier 2 (middle, default): team / growing / typical
     - Tier 3 (top): enterprise / scale / contact sales
   Number of tiers: 3 is optimal (decoy effect). 4 max. 5+ confuses.

2. ANCHOR STRATEGY
   - Show all tiers side-by-side; HIGHEST PRICE on the right (most
     reading patterns end there, anchoring everything before it)
   - Middle tier visually highlighted ("Most popular" badge, slight
     scale, accent border)
   - Enterprise tier: "Contact sales" or actual high price — never
     omit; it makes the visible tiers feel like a deal

3. PRICING DISPLAY
   - Monthly / annual toggle (annual usually 15–20% discount;
     surface savings explicitly: "Save €240/year")
   - Price line: large numerals, currency, per-unit ("per user",
     "per month"), billing frequency
   - Strike-through original if discounted — only if honest
   - "From" / "Starting at" only if usage-based and a true entry
     point exists

4. FEATURE COMPARISON
   Per tier, list features as outcomes ("Unlimited workspaces" not
   "Workspace tier 3"). Use:
     - ✓ included
     - – not included
     - "Add-on" + price if available outside the tier
     - "Unlimited" honestly — if there's a fair-use cap, say so
   Highlight EXCLUSIVE features per tier (what you get for upgrading).

5. SOCIAL PROOF
   Per tier, optionally:
     - Customer logos that use this tier
     - Verbatim quote from a customer on this tier
     - Stats: "Used by 2 400+ teams" (only if true, from PROOF input)

6. OBJECTION FAQ
   The 6–10 questions every qualified buyer asks before paying. Cover:
     - "What if it doesn't work for us?" → cite GUARANTEE
     - "Can I change plans later?" → upgrade / downgrade policy
     - "What counts as a [user / seat / API call]?"
     - "What payment methods do you accept?"
     - "Is there a setup fee?"
     - "Do you offer discounts for [non-profit / education / startup]?"
     - "How does annual billing work?"
     - "Is my data safe?" → SOC2 / ISO / GDPR / HIPAA badges where
       applicable
     - "Can I get a custom quote?" → link to enterprise
   Each answer SPECIFIC, ≤3 sentences.

7. PAGE CODE  ← deliverable
   --- PAGE CODE START ---
   <!doctype html>
   <html lang="...">
   <head>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width,initial-scale=1">
     <title>Pricing — <PRODUCT></title>
     <script src="https://cdn.tailwindcss.com"></script>
   </head>
   <body>
   <!-- HEADER -->
   <!-- HERO: one-line value prop -->
   <!-- MONTHLY/ANNUAL TOGGLE -->
   <!-- PRICING TABLE (3 columns, middle highlighted) -->
   <!-- FEATURE COMPARISON (expanded table for buyers comparing) -->
   <!-- LOGO STRIP / SOCIAL PROOF -->
   <!-- GUARANTEE BANNER -->
   <!-- FAQ ACCORDION -->
   <!-- ENTERPRISE / CONTACT SALES SECTION -->
   <!-- FINAL CTA -->
   <!-- FOOTER -->
   </body>
   </html>
   --- PAGE CODE END ---

8. COPY DOC  ← deliverable
   Per element: text, edit risk, conversion intent. Especially:
     - Tier names (avoid clever names that confuse — "Starter /
       Growth / Enterprise" beats "Sprout / Forest / Redwood")
     - CTA button labels per tier ("Start free trial" / "Get
       Growth" / "Talk to sales")
     - Guarantee language (the words matter — "30-day
       money-back" outperforms "satisfaction guaranteed")

9. OBJECTION FAQ  ← deliverable
   The 6–10 §6 Q&As as standalone copy block (reusable across docs,
   sales emails, and the page).

HARD RULES
- Anchor tier (highest visible price) is always present. Omitting
  it makes the middle tier feel expensive.
- Every limit and fee is on the page. Hidden charges destroy NPS
  and trigger chargebacks.
- Annual savings shown explicitly in money, not %, when €/year is
  meaningful: "Save €240/year" > "Save 17%".
- "Contact sales" CTAs go to a real form / calendar, not a generic
  email.
- Trust badges (SOC2 / ISO / GDPR / PCI) only if the client truly
  holds them.
- Respond in the language of the AUDIENCE input.

PRODUCT:
TIERS:
AUDIENCE:
COMPETITORS:
PROOF:
GUARANTEE:
STACK:
```

---

## What the buyer gets

A pricing page that converts qualified leads at higher rates than the
DIY template they were using, plus an FAQ block reusable across sales
docs, plus a copy doc that documents every pricing-psychology choice.
The competitive benchmark from COMPETITORS input grounds the pricing
in market reality.
