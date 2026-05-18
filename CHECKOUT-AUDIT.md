# CHECKOUT-AUDIT — E-Commerce Checkout-Flow-Audit (verkaufbares Deliverable)

The single most leveraged audit on an e-commerce site: typical cart
abandonment is 60–75% and most of it is recoverable through checkout
optimization. Maps the full path from product → cart → checkout →
payment → confirmation, identifies every friction, and produces a
ranked fix list with expected revenue lift.

**Realistic engagement price: €1 500 – 7 500.** ROI often visible in
the first week post-implementation.

---

## How to use

Paste the block below, then on the next line:

    STORE: <URL>
    PLATFORM: <Shopify | WooCommerce | Magento | BigCommerce | custom>
    GMV: <approximate monthly revenue — sets the dollar value of every % lift>
    CART_AB: <current cart abandonment % if known, or: unknown>
    PAYMENT_METHODS: <accepted methods today>
    SHIPPING: <regions served, free-shipping threshold, returns policy>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a Checkout Audit. The §9 REPORT is the
deliverable. Three rules:

(1) Every percentage point of cart-recovery is real money. State
    findings with the corresponding revenue impact at the client's
    GMV — that's what gets engagement budget approved.
(2) Walk the funnel as a buyer, twice: once as a guest, once
    creating an account. Different paths reveal different friction.
(3) Mobile and desktop are separate funnels. Audit both — mobile
    typically has higher abandonment and more recoverable revenue.

1. SCOPE & FUNNEL MAP
   Map the full path:
     - Product page (entry) → Add-to-cart
     - Cart / mini-cart
     - Checkout — step 1 (typically: email/contact)
     - Checkout — step 2 (shipping)
     - Checkout — step 3 (payment)
     - Order confirmation
     - Post-purchase (email, account, tracking)
   Walk DESKTOP and MOBILE. Walk as GUEST and as ACCOUNT-HOLDER.

2. BASELINE METRICS  (where ACCESS allows)
   - Cart abandonment % (industry avg 60–75%)
   - Checkout abandonment % (per-step funnel)
   - Average order value (AOV)
   - Conversion rate (sessions → orders)
   - Payment method distribution
   - Mobile vs desktop conversion gap (mobile typically 30–50%
     lower)
   Convert each % point of improvement to € at current GMV — this
   anchors the report's value.

3. PRODUCT-TO-CART  (the moment of commitment)
   - Add-to-cart placement (above fold, sticky on scroll)
   - Quantity selector default (1 vs higher)
   - Variant selection forced before add-to-cart? (good — prevents
     errors)
   - Cart confirmation (modal / drawer / page redirect — drawer
     usually wins)
   - "Continue shopping" vs "Checkout now" balance
   - Mini-cart visibility after add

4. CART PAGE
   - Cart items: image, name, variant, price, quantity, remove
   - Subtotal, shipping estimate, taxes, total visible BEFORE
     proceeding
   - Promo / discount code field (collapsed by default — open codes
     trigger code-search → abandonment)
   - Trust signals (return policy, security)
   - Continue shopping link
   - Express checkout (Apple Pay / Google Pay / Shop Pay / PayPal —
     above the manual checkout)
   - Empty-cart state designed?

5. CHECKOUT STEP-BY-STEP
   Per step, audit:
     - Field count (every additional field drops completion by
       ~3–7%)
     - Required vs optional clearly marked
     - Auto-complete attributes set (`autocomplete="email"`,
       `"shipping street-address"`, etc.)
     - Address auto-complete (Google Places / Loqate)
     - Phone-number format permissive (don't reject "+49 30 …")
     - Postal-code → city auto-fill for supported regions
     - Inline validation (not just on submit)
     - "Save my info" option (opt-in, not opt-out)
     - Order summary visible / sticky throughout
     - Progress indicator (especially for 3+ step flows)
     - Edit ability from any step (link back to earlier steps)

6. PAYMENT STEP  (highest abandonment cluster)
   - Payment method count and visibility (BNPL, wallet, card,
     bank transfer per region)
   - For EU: SEPA direct debit, iDEAL (NL), Bancontact (BE), Sofort
     (DE/AT), Giropay (DE) — region-appropriate
   - Card form: clean, single-line where possible, real-time card-
     network detection, format-as-you-type
   - 3DS challenge handled smoothly (mobile-friendly modal)
   - Saved cards for returning customers
   - Fraud-prevention friction (CAPTCHA, AVS) calibrated to risk
     not blanket-applied
   - Error messages helpful ("Your bank declined this card — try
     another, or contact them")

7. POST-PURCHASE
   - Confirmation page (order #, summary, what happens next)
   - Confirmation email (sent within seconds, includes tracking
     placeholder)
   - Account creation offered post-purchase (lower friction than
     pre-purchase forced creation)
   - Order tracking link
   - Cross-sell / next-step on confirmation page

8. EDGE CASES
   - Out-of-stock during checkout (graceful handling)
   - Currency / locale switching mid-checkout
   - Discount-code stacking rules visible
   - Tax inclusive vs exclusive (region-appropriate, no surprise
     at total)
   - Shipping price surprise (estimate early, ideally on product/cart)
   - International shipping (duties / VAT calculated and displayed)

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Checkout Audit — <Store>
   **Client:** <…>   **Platform:** <…>   **Monthly GMV:** <…>
   **Date:** <…>

   ## Executive Summary             (≤300 words: current abandonment
                                     vs benchmark, top 5 fixes, total
                                     expected revenue lift in € at
                                     current GMV)
   ## Funnel Map & Baseline         (§1, §2)
   ## Product-to-Cart               (§3)
   ## Cart Page                     (§4)
   ## Checkout Flow                 (§5)
   ## Payment                       (§6)
   ## Post-Purchase                 (§7)
   ## Edge Cases                    (§8)
   ## Prioritised Fix List          (each with expected lift % +
                                     monthly € value + effort)
   ## Implementation Roadmap        (quick wins first, structural
                                     changes phased)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of <STORE> as a visitor at audit time. Expected revenue lifts
     are estimates based on industry benchmarks and analogous-case
     pattern matching; actual lifts require post-implementation
     measurement against control periods. Cart-abandonment rates
     fluctuate with traffic source, season, and product category —
     baseline figures should be cohort-normalised before comparing.
     Findings reflect the checkout state at audit time; A/B tests
     or experiments may produce different behaviour. This audit
     does not include: post-purchase email-flow optimisation
     (separate engagement), pricing strategy, product-page
     conversion (see CONVERSION-AUDIT.md), or fraud / chargeback
     workflows."

HARD RULES
- Every fix shows expected % lift AND monthly € value at the
  client's GMV. "Could improve checkout" without a number is not
  a finding.
- Audit walks DESKTOP + MOBILE and GUEST + ACCOUNT-HOLDER paths
  separately.
- Field-count claims are verified — count the real form fields,
  don't estimate.
- Payment-method findings are region-specific (German shoppers
  expect SEPA/Klarna; Dutch shoppers iDEAL; etc.).
- Respond in the language of the STORE input.

STORE:
PLATFORM:
GMV:
CART_AB:
PAYMENT_METHODS:
SHIPPING:
CLIENT:
```

---

## What the buyer gets

A 15–25 page audit with revenue-quantified fixes. At a €100k/month
GMV store, recovering 5% of abandoned carts is €5k/month — multiple
fixes typically stack to 8–15% combined lift. Engagement ROI in the
first 1–2 months post-implementation is the standard pitch.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For products not yet selling — premature; use [`CONVERSION-AUDIT.md`](./CONVERSION-AUDIT.md) for broader funnel
- For mobile-app in-app-purchase checkouts — different platform constraints (App Store / Play Store IAP)
- For pure subscription billing without cart — different friction surface
- When you lack analytics access — limits baseline accuracy materially; document constraint

---

## Quality gate — verify before treating as done

- [ ] Every fix has expected % lift AND monthly € value at client's GMV (not just %)
- [ ] Walked DESKTOP + MOBILE and GUEST + ACCOUNT-HOLDER paths separately (4 walks minimum)
- [ ] Field-count claims verified by actual counting (not estimated)
- [ ] Payment-method findings region-specific (DE: SEPA/Klarna; NL: iDEAL; BE: Bancontact; etc.)
- [ ] Above-fold mobile audit included (LCP target, tap targets ≥ 48px, viewport overflow)
- [ ] §10 LIMITATIONS per [`_LEGAL/AUDIT-DISCLAIMER.md`](./_LEGAL/AUDIT-DISCLAIMER.md) + [`_LEGAL/ESTIMATES-NOT-GUARANTEES.md`](./_LEGAL/ESTIMATES-NOT-GUARANTEES.md)
- [ ] Revenue lifts as ranges (best/likely/worst), never point values
