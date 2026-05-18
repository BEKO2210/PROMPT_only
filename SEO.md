# SEO — Technical SEO Audit (verkaufbares Deliverable)

Technical-only SEO audit: crawlability, indexability, Core Web Vitals,
structured data, internal linking. Explicitly NOT keyword research or
content strategy — those are separate engagements.

**Realistic engagement price: €1 000 – 5 000.** Recurring annually or per major release.

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <site URL, key page templates, market(s), languages>
    ACCESS: <crawl-only | with Search Console export | with analytics access>
    CLIENT: <client name — optional>

---

## The prompt (copy from here)

```
You are producing a Technical SEO Audit. The §10 REPORT is the
deliverable. Three rules: cite real URLs, measure don't guess, and
explicitly mark NOT TESTED for anything that requires runtime
verification the agent cannot perform.

1. SCOPE
   Site, page templates audited (home, category, product, article,
   etc.), target markets and languages, audit date. Capture the
   commit SHA if a site repository is available; otherwise the
   crawl date is the reference.

2. CRAWLABILITY
   - robots.txt: presence, contents, disallow patterns vs intent
   - sitemap.xml: presence, listed URLs, freshness, < 50 000 URLs/file
   - HTTP status codes on sample crawl: 200 / 301 / 302 / 404 / 5xx
     distribution
   - Redirect chains and loops
   - Crawl budget signals: parameterised URLs, faceted navigation,
     duplicate paths

3. INDEXABILITY
   - Meta robots / X-Robots-Tag per template
   - Canonical tags: self-referencing, cross-template, conflicts
   - hreflang: present, valid, reciprocal, x-default
   - noindex creep: pages that should be indexed but aren't

4. CORE WEB VITALS  (measure, do not guess)
   For each key template, measure on Lighthouse or WebPageTest:
     - LCP (target ≤ 2.5 s)
     - INP (target ≤ 200 ms)
     - CLS (target ≤ 0.1)
   Paste the actual scores. NOT TESTED if you cannot run the measurement.

5. STRUCTURED DATA
   - Schema.org markup per template type
   - Validation via schema.org validator / Rich Results test
   - Coverage of high-value types (Article, Product, BreadcrumbList,
     FAQPage, Organisation)

6. INTERNAL LINKING
   - Orphan pages (indexable but unlinked)
   - Click depth from home (target ≤ 4 for important pages)
   - Anchor text diversity vs over-optimisation
   - Pagination patterns (rel=prev/next deprecated; check current impl)

7. ON-PAGE BASICS
   - Title tag: presence, length, uniqueness, keyword discipline
   - Meta description: presence, length, truncation risk
   - Heading structure: single H1, logical hierarchy
   - Image alt attributes: presence, descriptiveness
   - Semantic HTML (article, nav, main, footer)

8. MOBILE & INTERNATIONAL
   - Viewport meta tag
   - Tap targets ≥ 48 × 48 px
   - Mobile-only issues (interstitials, font size)
   - International: hreflang strategy, ccTLD vs subfolder, language
     detection logic

9. EXECUTIVE SUMMARY  (≤250 words, place atop §10)
   - Overall posture: STRONG / ACCEPTABLE / CONCERNING / CRITICAL
   - Top 3 indexation-blocking issues
   - Top 3 ROI fixes (high impact, low effort)
   - What this audit did NOT cover

10. REPORT  ← the deliverable
    --- REPORT START ---
    # Technical SEO Audit
    **Client:** <…>   **Site:** <…>   **Date:** <…>

    ## Executive Summary       (§9)
    ## Scope                   (§1)
    ## Crawlability            (§2)
    ## Indexability            (§3)
    ## Core Web Vitals         (§4, tables)
    ## Structured Data         (§5)
    ## Internal Linking        (§6)
    ## On-Page                 (§7)
    ## Mobile & International  (§8)
    ## Prioritised Remediation (findings ordered by impact × ease)
    ## Limitations             (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date>. Measurements
     were taken from <Lighthouse / PageSpeed / synthetic source>;
     real-user (CrUX / field) data may differ. Items marked NOT TESTED
     require crawler tooling, Search Console access, or analytics
     access that was not in scope. This audit covers technical SEO
     only; it does NOT include keyword research, content strategy,
     backlink analysis, or competitor positioning. Recommendations
     should be re-validated against Search Console after implementation."

HARD RULES
- Every URL cited is reachable and was actually checked.
- NOT TESTED is an honest answer for criteria requiring tools you do
  not have. Do not falsely mark them PASS.
- Core Web Vitals scores are real numbers from real tools — no
  estimates.
- Cap crawl at 200 URLs unless the client provides crawler access.
- Respond in the language of the SCOPE input.

SCOPE:
```

---

## What the buyer gets

A 10–20 page PDF with prioritised technical fixes. Pair with a content/
backlink agency for the full picture. The NOT TESTED column is what
makes the report honest enough to defend if Search Console data later
contradicts a finding.
