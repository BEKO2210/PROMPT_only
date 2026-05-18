# PRODUCT-PAGE — Konvertierende E-Commerce-Produktseite (verkaufbares Deliverable)

The single highest-leverage page on an e-commerce site. Most product
pages lose money by treating product pages like catalogue entries
instead of conversion surfaces. This produces a page using
e-commerce-specific patterns (above-fold buy box, social proof, FAQ,
related products) with structured data for SEO and Merchant Center.

**Realistic engagement price: €300 – 1 500 per page, often bulk-priced (€2 000 – 10 000 for 10–50 pages).**

---

## How to use

Paste the block below, then on the next line:

    PRODUCT_DATA: <name, price, variants, images, description, specs>
    REVIEWS: <verbatim reviews — never invented; cite source>
    SHIPPING: <free above X? delivery time? returns policy?>
    STACK: <Shopify (Liquid) | WooCommerce (PHP) | plain HTML | Next.js>
    BRAND: <colors, typography, voice>

---

## The prompt (copy from here)

```
You are producing a high-converting e-commerce product page. Three
deliverables: §7 PAGE CODE, §8 STRUCTURED DATA (JSON-LD for Google
Merchant + rich results), §9 COPY DOC.

Three rules:

(1) ABOVE-FOLD CONVERSION SURFACE. On mobile this is one screen:
    image, title, price, primary buy CTA. Anything else is below.
(2) NEVER invent reviews, ratings, or stock counts. False scarcity
    ("Only 2 left!" when it's untrue) is illegal in EU/UK under
    consumer protection law.
(3) STRUCTURED DATA matters. Rich results increase CTR from organic
    search by 20–40%; Google Merchant Center requires it for ads.

1. ABOVE-FOLD ANATOMY
   On mobile (375px) and desktop (1280px):
     - Product image (main + thumbnail strip, zoomable)
     - Title (full product name, ≤60 chars where possible)
     - Star rating + review count (link to reviews)
     - Price (current + original if on sale)
     - Variant selectors (size, color, etc.)
     - Quantity selector
     - Primary CTA: "Add to cart" (sticky on mobile scroll)
     - Secondary indicators: stock status, shipping ETA, returns
       policy (one-liner each)

2. BELOW-FOLD SECTIONS
   In order:
     - Short description (2–3 sentences, benefit-focused)
     - Key features (3–6 bullets, scannable)
     - Detailed description (long-form, SEO-relevant keywords)
     - Specifications table (everything technical)
     - In-the-box / What's included (if applicable)
     - Customer reviews (verbatim, with reviewer name + verified
       badge if applicable)
     - FAQ (5–8 buying-decision questions)
     - Shipping & returns (link or summary)
     - Related products (cross-sell)
     - Recently viewed (if cookies allow)

3. COPY DISCIPLINE
   Product titles: <Brand> + <Product> + <Key Differentiator> + <Variant>
   Example: "Acme Aurora Wireless Headphones — Active Noise Cancelling,
   Black"

   Description: lead with the customer benefit, not the feature.
   - Feature: "30mm Beryllium drivers"
   - Benefit-led: "Studio-grade clarity from 30mm Beryllium drivers"

   Bullets: scannable, parallel structure, benefit then spec.

4. SOCIAL PROOF
   - Star rating (aggregate)
   - Review count
   - Top 3 reviews (with verified-buyer flag, reviewer name or
     anonymisation per platform convention)
   - "X people bought this in the last 30 days" — ONLY if true
     (consumer law in EU/UK: false scarcity / urgency claims =
     fines)
   - Photo reviews if available

5. URGENCY & SCARCITY  (honest only)
   - Real stock count if low ("3 left in stock")
   - Real delivery cutoff ("Order in 4h 23m for delivery Friday")
   - Real time-limited offer ("Sale ends Sunday 23:59 CET")
   NEVER fabricate. EU Consumer Rights Directive + UK CMA Digital
   Markets Act 2024 explicitly target this.

6. TRUST ELEMENTS
   - Free shipping threshold (if any)
   - Return window + free returns (if any)
   - Security / payment-method icons (Visa, MC, Amex, PayPal,
     Klarna, etc. — only real ones)
   - Guarantee / warranty
   - Sustainability / ethical certifications (only real ones)

7. PAGE CODE  ← deliverable
   Per STACK, the actual file/template:
     - Shopify: product.liquid section
     - WooCommerce: single-product.php template + product-summary
       fragment
     - Next.js: app/products/[slug]/page.tsx
     - Plain HTML: product-template.html
   Mobile-first responsive, accessible (alt text on images, ARIA on
   variant selectors), LCP < 2.5s (preload hero image, lazy-load
   gallery below fold).
   --- PAGE CODE START ---
   [template code]
   --- PAGE CODE END ---

8. STRUCTURED DATA  ← deliverable
   JSON-LD blob embedded in the page <head>. Schema.org Product +
   Offer + AggregateRating + Review + BreadcrumbList.
   --- STRUCTURED DATA START ---
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Product",
     "name": "...",
     "description": "...",
     "sku": "...",
     "mpn": "...",
     "gtin13": "...",
     "brand": { "@type": "Brand", "name": "..." },
     "image": ["..."],
     "offers": {
       "@type": "Offer",
       "url": "...",
       "priceCurrency": "EUR",
       "price": "...",
       "priceValidUntil": "...",
       "availability": "https://schema.org/InStock",
       "itemCondition": "https://schema.org/NewCondition"
     },
     "aggregateRating": {
       "@type": "AggregateRating",
       "ratingValue": "...",
       "reviewCount": "..."
     },
     "review": [...]
   }
   </script>
   --- STRUCTURED DATA END ---
   Validate via Google Rich Results Test before committing.

9. COPY DOC  ← deliverable
   Every text element with edit risk and conversion intent. Critical
   elements (HIGH edit risk):
     - Product title
     - Primary CTA label
     - Above-fold shipping promise
     - Star rating display
     - Stock-status copy
   These move conversion meaningfully — document so the merchant
   doesn't accidentally edit them flat.

10. PERFORMANCE BUDGET
    - Hero image: ≤200KB (WebP/AVIF), correct dimensions per srcset
    - Above-fold LCP: ≤2.5s on 4G
    - INP: ≤200ms
    - Cumulative Layout Shift: ≤0.1
    - JS above fold: minimum (defer/async everything non-critical)
    - Defer gallery / reviews loading until interaction or
      intersection-observer

HARD RULES
- All reviews and ratings come from REVIEWS input, verbatim. No
  fabricated social proof.
- Urgency / scarcity claims are TRUE or absent. Consumer law
  explicitly targets fake urgency.
- Structured data validates in Google Rich Results Test before
  shipping.
- Above-fold image optimised + preloaded. Below-fold lazy-loaded.
- Respond in the language of the PRODUCT_DATA input.

PRODUCT_DATA:
REVIEWS:
SHIPPING:
STACK:
BRAND:
```

---

## What the buyer gets

Per product: a template that drops into their stack, rich-results
structured data, and a copy doc protecting conversion-critical
elements. For a 50-product catalogue, the template generalises with
data binding — making this a €5–15k bulk engagement.
