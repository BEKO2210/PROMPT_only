# DOCS-SITE — Komplette Dokumentations-Website (verkaufbares Deliverable)

Produces a developer-documentation site from existing code and product
context: information architecture, page templates, content per page,
plus the actual project (Docusaurus / Astro Starlight / VitePress /
mdBook / Nextra). Good docs lower support load AND raise activation —
this is a measurable conversion lever for any technical product.

**Realistic engagement price: €2 000 – 15 000.** Higher for API-heavy / SDK products.

---

## How to use

Paste the block below, then on the next line:

    PRODUCT: <name, what it does, target developer persona>
    REPO: <source repo path>
    EXISTING_DOCS: <none | scattered README files | partial site>
    SDKs: <languages with SDKs — Python, JS, Go, Rust, etc.>
    STACK: <Docusaurus | Astro Starlight | VitePress | mdBook | Nextra | custom>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a complete developer-documentation site. Multiple
deliverables: §3 IA, §4–§7 content per section, §8 SITE PROJECT,
§9 STYLE GUIDE. Three rules:

(1) DIÁTAXIS structure: Tutorials (learning), How-tos (problems),
    Explanation (understanding), Reference (information). These
    serve different user needs — mixing them produces docs nobody
    can use.
(2) EVERY CODE EXAMPLE RUNS. Copy-paste from the docs into a
    terminal / notebook / file = it works. Broken examples kill
    trust in the entire product.
(3) Search beats navigation. Tag and index aggressively; the most
    common docs interaction is "ctrl-K, type, jump".

1. AUDIT EXISTING
   From EXISTING_DOCS and REPO:
     - What docs exist today (README, /docs/, wiki, in-code)
     - What's accurate, what's outdated
     - What's missing (gaps to fill)
     - Which paths developers take today (entry points from search,
       linked-from-product, README discovery)

2. INFORMATION ARCHITECTURE  (Diátaxis)
   Four top-level sections:
     - TUTORIALS — for learners: "Get started in 5 minutes",
       "Build your first X"
     - HOW-TO GUIDES — for problem-solvers: "Authenticate with X",
       "Handle webhooks", "Migrate from Y"
     - REFERENCE — for lookers: API endpoints, SDK methods, CLI
       commands, config options, error codes
     - EXPLANATION — for understanders: architecture, concepts,
       design decisions, comparisons

3. SITEMAP  ← deliverable
   Tree with one-line purpose per page. Naming convention: nouns
   for reference, verbs for how-tos, "How X works" for explanation.
   Cap each top-level section at 30 pages — beyond that, split.

4. TUTORIAL CONTENT
   For each tutorial (typically 3–5):
     - Single goal stated upfront
     - Total time-to-completion estimate
     - Prerequisites checklist (explicit)
     - Numbered steps; each step ends in something observable
       working
     - Every code block: complete, runnable, copy-pasteable
     - Next-steps section at end (links to relevant how-tos)
   Tutorials build CONFIDENCE — they don't have to teach everything.

5. HOW-TO CONTENT
   For each how-to (target: 1 per top user task):
     - Title: "How to <task>" or "<task> with <product>"
     - Context: when you'd do this
     - Prerequisites
     - Steps with code
     - Verification step (how to know it worked)
     - Troubleshooting subsection
     - Related: links to related how-tos
   How-tos solve PROBLEMS — they're not learning paths.

6. REFERENCE CONTENT
   Generated where possible from code annotations / OpenAPI spec /
   docstrings (link to API-DOC.md prompt for the spec). For each
   reference page:
     - Signature / endpoint definition
     - Parameters table with types + descriptions
     - Return value / response schema
     - Errors that can occur
     - Minimal example (the smallest working call)
     - Notes (gotchas, limits, deprecation)
   Reference is COMPLETE and PRECISE — opinions belong in
   Explanation.

7. EXPLANATION CONTENT
   For each concept that needs explanation (architecture, key
   abstractions, trade-offs):
     - What it is
     - Why it exists
     - How it relates to other concepts
     - When to use it vs alternatives
     - Background / further reading
   Explanation builds MENTAL MODELS — it's not a how-to.

8. SITE PROJECT  ← deliverable
   Per STACK input, the actual project structure:
     - Docusaurus: docs/, sidebars.js, docusaurus.config.js, theme
       overrides
     - Starlight: src/content/docs/, astro.config.mjs, starlight
       config
     - VitePress: docs/, .vitepress/config.ts, sidebar config
     - mdBook: book.toml, SUMMARY.md, src/
     - Nextra: pages/, theme.config.tsx
   Plus:
     - Search (Algolia DocSearch / built-in)
     - Versioning if API versions exist
     - Code-block copy-button
     - Theme switcher (light/dark)
     - Edit-on-GitHub links
     - Sitemap + robots.txt + meta for SEO
   --- SITE PROJECT START ---
   [file tree, then file contents per file]
   --- SITE PROJECT END ---

9. STYLE GUIDE  ← deliverable
   The rules contributors follow when adding docs:
     - Voice (second person "you", active voice, present tense)
     - Headings (sentence case, no trailing punctuation)
     - Code blocks (language fences, runnable, minimal)
     - Links (descriptive text, not "click here")
     - Lists (parallel structure)
     - Naming conventions for new files
     - When to use callouts (note / warning / info)
     - PR review checklist for doc contributions

10. ANALYTICS PLAN
    Track:
      - Top-viewed pages (where time is spent)
      - Top search queries with no results (gaps to fill)
      - 404s on internal links (broken navigation)
      - Time-on-page for tutorials (drop-off = unclear step)
      - Code-block copy events (engagement proxy)

HARD RULES
- Every code example is runnable. Verify before committing.
- Diátaxis quadrant for every page is explicit. A page that doesn't
  fit one quadrant is the wrong shape — split or rewrite.
- API reference content comes from code-as-source-of-truth wherever
  possible (cite API-DOC.md output if available). Hand-written
  reference rots fast.
- Search is configured before launch. Docs without search are
  unusable.
- Respond in the language of the PRODUCT input. Code examples remain
  in their canonical language.

PRODUCT:
REPO:
EXISTING_DOCS:
SDKs:
STACK:
CLIENT:
```

---

## What the buyer gets

A deployable documentation site (push to Netlify / Vercel / Cloudflare
Pages and it's live), with content following Diátaxis structure that
developers actually find useful, plus a contributor style guide so
the docs don't degrade after launch. Pair with API-DOC.md for the
reference content generation.
