# WEBSITE-FULL — Komplette Marketing-Website (verkaufbares Deliverable)

Produces a complete multi-page marketing website from a brand brief:
sitemap, page-by-page architecture, copy for every page, navigation,
footer, SEO meta, and the actual code. Output is a deployable static
site or a framework project (Astro / Next.js / Eleventy).

**Realistic engagement price: €2 000 – 15 000.** Mid-range for SMB,
upper for B2B SaaS with conversion targets.

---

## How to use

Paste the block below, then on the next line:

    COMPANY: <name, industry, stage>
    OFFER: <product/service, who it's for, key differentiator>
    PROOF: <verbatim testimonials, logos, metrics — never invented>
    PAGES: <which pages — default: Home, Pricing, About, Blog, Contact>
    BRAND: <colors, typography, voice>
    STACK: <plain HTML+Tailwind | Astro | Next.js | 11ty>
    SEO_TARGETS: <primary keywords / topics to rank for>

---

## The prompt (copy from here)

```
You are producing a complete marketing website. Multiple deliverables:
sitemap (§3), per-page architecture (§4), copy doc (§5), navigation
& footer (§6), SEO meta (§7), site code (§8), launch checklist (§9).

Three rules:

(1) Each page has ONE job. Home converts the curious; Pricing
    converts the qualified; About builds trust; Blog drives traffic.
    Don't make pages do each other's jobs.
(2) Navigation is the site's UX skeleton. Too many items dilute
    focus; too few hide value. 5–7 nav items max.
(3) NEVER fabricate social proof. Use PROOF input verbatim or omit.

1. AUDIENCE & POSITIONING
   From OFFER + COMPANY input:
     - ICP (one paragraph): role, company size, primary pain
     - Single sentence positioning: "<COMPANY> is the <category>
       for <ICP> who want <outcome>."
     - Differentiator: what you do that alternatives don't

2. INFORMATION ARCHITECTURE
   Site map showing every page, hierarchy, and primary purpose:
     - HOME — convert curious visitors to qualified leads
     - PRICING — convert qualified leads to trials/calls
     - PRODUCT / FEATURES — comparative buyers
     - SOLUTIONS — vertical-specific landing pages (if applicable)
     - ABOUT — trust + team + story
     - CUSTOMERS — proof (logos, case studies)
     - BLOG / RESOURCES — SEO + thought leadership
     - CONTACT / DEMO — direct conversion path
     - DOCS — if product complexity warrants
     - LEGAL — privacy, terms, cookies, imprint (jurisdictionally
       required)

3. SITEMAP  ← deliverable
   Tree representation + a one-line purpose per page. This becomes
   `/sitemap.xml` programmatically.

4. PER-PAGE ARCHITECTURE
   For each page in PAGES input, plan section by section:
     - Section name
     - Purpose (what visitor learns or does)
     - Content elements (heading, body, image, CTA, etc.)
     - Conversion intent (what action does this section drive)
   This is the wireframe-equivalent — drives §5 and §8.

5. COPY DOC  ← deliverable
   Per page, per section, every text element:
     - Element + text
     - Edit risk: HIGH / MEDIUM / LOW
     - Awareness stage it serves
   Client uses this to localise / update without breaking conversion.

6. NAVIGATION & FOOTER
   Header nav (5–7 items max; primary CTA in nav):
     - Logo
     - 4–6 primary nav items
     - 1 primary CTA button
   Footer (the trust-signals layer):
     - Logo + tagline
     - Sitemap columns: Product / Company / Resources / Legal
     - Newsletter signup (if applicable)
     - Social links
     - Copyright + legal address (jurisdiction-required)
     - Trust badges (only if real: SOC2 logo, ISO cert, payment-card
       logos)

7. SEO META
   Per page:
     - <title> ≤ 60 chars
     - <meta name="description"> ≤ 155 chars
     - canonical URL
     - Open Graph (og:title, og:description, og:image — 1200×630)
     - Twitter card
     - JSON-LD structured data (Organisation on home; Article on
       blog; Product/SoftwareApplication on product; FAQPage where
       FAQ exists)
   robots.txt + sitemap.xml + 404 page + 500 page.

8. SITE CODE  ← deliverable
   Per STACK input, produce the actual project structure:
     - Astro: pages/, components/, layouts/, public/
     - Next.js: app/ (or pages/), components/, public/, layout.tsx
     - Plain HTML: index.html, pricing.html, …, css/, js/, images/
     - 11ty: src/pages/, _includes/, _data/
   Inline Tailwind for styling unless STACK specifies otherwise.
   Each page = one file with semantic HTML5, accessible markup
   (alt text, ARIA where needed, contrast ≥ 4.5:1), Mobile-first
   responsive (sm/md/lg breakpoints), LCP < 2.5s target (no blocking
   resources, optimized images).
   --- SITE CODE START ---
   [file tree, then file contents]
   --- SITE CODE END ---

9. LAUNCH CHECKLIST  ← deliverable
   --- CHECKLIST START ---
   ## Pre-launch
   - [ ] All copy proofread (cite COPY DOC)
   - [ ] All images optimised (WebP/AVIF, lazy-loaded)
   - [ ] All links work (run linkchecker)
   - [ ] Forms submit to real endpoint
   - [ ] Analytics installed (GA4 / Plausible / Fathom)
   - [ ] Cookie consent (if EU traffic) — see GDPR.md
   - [ ] Privacy + Terms + Imprint published
   - [ ] robots.txt + sitemap.xml live
   - [ ] 404 + 500 pages styled
   - [ ] Open Graph previews verified (debugger.facebook.com,
         cards-dev.twitter.com)
   - [ ] Lighthouse scores: Perf ≥ 90, A11y ≥ 95, SEO 100
   - [ ] Mobile usability tested on real device
   - [ ] Accessibility tested with screen reader
   - [ ] Forms have spam protection
   - [ ] SSL certificate valid
   - [ ] Redirects from old site (if migration)

   ## Post-launch (first week)
   - [ ] Submit sitemap to Google Search Console
   - [ ] Verify Search Console + Bing Webmaster
   - [ ] Set up uptime monitoring
   - [ ] First analytics review
   - [ ] First conversion data review
   --- CHECKLIST END ---

HARD RULES
- Every page has ONE primary purpose (§4). Avoid jack-of-all-trades
  pages.
- All proof elements (testimonials, logos, metrics) trace to PROOF
  input. No fabrication.
- Code is mobile-first responsive — design for thumb, scale up.
- Accessibility is built in, not retrofitted: semantic HTML, alt text,
  contrast, keyboard navigation.
- Legal pages are placeholders that explicitly tell the client to
  customise per jurisdiction — never auto-generate legal text.
- Respond in the language of the COMPANY input.

COMPANY:
OFFER:
PROOF:
PAGES:
BRAND:
STACK:
SEO_TARGETS:
```

---

## What the buyer gets

A complete website project ready to deploy (push to Netlify / Vercel /
Cloudflare Pages and it's live), plus a copy doc the marketing team can
maintain, plus a launch checklist that prevents the typical "site
launched without analytics / privacy / 404 page" embarrassments.
