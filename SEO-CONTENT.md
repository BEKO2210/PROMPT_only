# SEO-CONTENT — SEO-Artikel aus Ziel-Keyword (verkaufbares Deliverable)

Produces a single SEO-optimized article from a target keyword cluster:
search-intent analysis, SERP review, outline, full draft, meta, schema,
internal-linking suggestions, and the actual Markdown. Built for 2026
ranking — semantic / topical authority, not keyword stuffing.

**Realistic engagement price: €200 – 800 per article, often bulk
(€1 500 – 5 000 for 10–25 articles per month retainer).**

---

## How to use

Paste the block below, then on the next line:

    KEYWORD: <primary target query>
    DOMAIN: <client domain — for internal-linking suggestions>
    AUDIENCE: <reader persona, awareness stage>
    GOAL: <what the article drives — newsletter signup, demo book, product page click>
    EXISTING_CONTENT: <list URLs of related existing articles for internal linking>
    WORD_COUNT: <target 800–3 500; default 1 500–2 000 for B2B SaaS>
    BRAND_VOICE: <formal / friendly / authoritative / playful>

---

## The prompt (copy from here)

```
You are producing a single SEO article that ranks AND converts.
Three deliverables: §7 OUTLINE (for client approval before draft),
§8 ARTICLE DRAFT, §9 META + SCHEMA + INTERNAL LINKING.

Three rules:

(1) Search intent governs everything. Match what someone searching
    this query actually needs — informational / navigational /
    commercial / transactional. Mismatched intent doesn't rank.
(2) Write for humans first, structure for crawlers second. Google
    has been demoting AI-spun keyword soup since 2024.
(3) Cite sources. Every statistic, claim, and quote needs a source
    URL. Original research / data / quotes from named people drive
    EEAT signals.

1. SEARCH-INTENT DIAGNOSIS
   For the KEYWORD, what is the searcher actually trying to do?
     - INFORMATIONAL: learn something (how, what, why)
     - NAVIGATIONAL: find a specific site / brand
     - COMMERCIAL: research before buying (best, vs, review,
       compare)
     - TRANSACTIONAL: buy / sign up / download now
   Match the article TYPE to intent:
     - Informational → how-to guide, explainer, ultimate guide
     - Commercial → comparison, listicle of options, buyer's guide
     - Transactional → service / product landing (not an article)
   Mismatched intent does not rank.

2. SERP REVIEW
   Look at the top 10 ranking pages for KEYWORD:
     - Format dominant in top 10 (long-form guide / listicle /
       tool / video / forum thread?)
     - Average word count of top 5
     - Recurring sections all top pages have (these are
       table-stakes — must include)
     - Gaps no top page covers well (your differentiation
       opportunity)
     - Top pages' domain authority signal (am I outranked by sheer
       authority? then differentiate on freshness, depth, or
       format)

3. KEYWORD CLUSTER
   - Primary keyword (KEYWORD input)
   - 5–15 secondary keywords (LSI, related queries from "People
     also ask", autocomplete suggestions)
   - Long-tail variants to weave naturally
   These inform headings and natural phrasing — never used as a
   "must contain N times" rule.

4. OUTLINE
   - H1 (only one) — the article title
   - 4–8 H2 sections that satisfy the §1 intent
   - H3 sub-sections where depth warrants
   - Where each §3 keyword should land naturally
   - Where each §2 "table-stakes" section maps in
   - Where the §1 conversion goal CTA naturally appears (not
     stuffed)

5. SOURCES & DATA
   For an article that ranks in 2026, EEAT matters:
     - Experience: first-person where possible, examples from real
       work
     - Expertise: depth that signals subject knowledge
     - Authoritativeness: cite recognised sources (research, vendor
       docs, industry studies)
     - Trustworthiness: accurate, current, balanced
   For each claim with a number / statistic / external assertion,
   plan the source citation. Cap at 3–8 high-quality cited sources
   per article — more dilutes; fewer is fine.

6. DRAFT GUIDELINES
   - Lede that hooks: open with the reader's pain or the surprising
     answer (not "In today's fast-paced world…")
   - One idea per paragraph, 3–5 sentences each
   - Sentence variety (mix short and long; long-only is fatiguing)
   - Active voice mostly
   - Concrete examples illustrating every abstract claim
   - Sub-section conclusions that bridge to the next
   - Final section that answers the implicit "so what do I do
     next?" — that's where the GOAL CTA lives

7. OUTLINE  ← deliverable (a) — client approves before §8
   --- OUTLINE START ---
   # <Article H1>

   **Target keyword:** <…>   **Intent:** <…>   **Word target:** <…>

   ## §1 [Section title]
   - Key points
   - Keyword landing: <…>
   - Source / citation: <…>

   ## §2 …
   [continue]

   ## CTA section: <where the §GOAL CTA appears>
   --- OUTLINE END ---

8. ARTICLE DRAFT  ← deliverable (b)
   --- ARTICLE START ---
   # <Title>
   *<Optional dek / subtitle>*

   [Lede paragraph — hook]

   [Section per §7 outline]

   [Conclusion with GOAL CTA]
   --- ARTICLE END ---

9. META + SCHEMA + INTERNAL LINKING  ← deliverable (c)
   - <title> tag ≤ 60 chars (different from H1 if needed for click
     appeal in SERP)
   - <meta name="description"> 140–155 chars, includes primary
     keyword once, written for click-through (it's ad copy, not a
     summary)
   - Open Graph + Twitter card metadata
   - JSON-LD Article schema (author, publisher, datePublished,
     dateModified, headline, image, mainEntityOfPage)
   - If FAQ section exists in §8: FAQPage schema with each Q&A
   - Internal links: 3–7 links to EXISTING_CONTENT, each with
     descriptive anchor text matching the destination's topic
   - 2–4 external links to authoritative sources cited in §5

HARD RULES
- Every claim with a number, statistic, or external assertion has
  a source URL. Inventing statistics is the modern AI-content
  failure mode that Google specifically demotes.
- Word count is a result of saying what needs saying, not a target
  to hit. Stop when complete, even if under WORD_COUNT input.
- No keyword stuffing. The keyword appears naturally where it
  belongs; if a sentence sounds forced, rewrite.
- Internal links use descriptive anchor text, not "click here" or
  generic page titles.
- Respond in the language of the AUDIENCE input.

KEYWORD:
DOMAIN:
AUDIENCE:
GOAL:
EXISTING_CONTENT:
WORD_COUNT:
BRAND_VOICE:
```

---

## What the buyer gets

A single publish-ready article (outline first for approval, then full
draft) with meta, schema, and internal-linking plan. As a retainer
(10–25 articles/month), this is the topical-authority play — building
a body of work that compounds organic traffic over 6–18 months.
