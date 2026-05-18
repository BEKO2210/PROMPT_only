# RELEASE-NOTES — Kundenfertige Release-Notes aus Git-History

Generates customer-facing release notes (changelog, what's-new article,
in-app update banner, email announcement) from raw git history.
Translates "fix(api): handle null in foo" into "Improved reliability
when processing orders without a discount code." Every product team
needs this; almost none have a good template.

**Leverage value: replaces 1–3 hours of manual changelog writing per release.**

---

## How to use

Paste the block below, then on the next line:

    PRODUCT: <product name as customers know it>
    VERSION: <release version or label>
    FROM_REF: <git tag or commit of previous release>
    TO_REF: <git tag or commit of this release — default HEAD>
    AUDIENCE: <CUSTOMERS | DEVELOPERS | INTERNAL | ALL_THREE>
    TONE: <PROFESSIONAL | FRIENDLY | TECHNICAL>
    CHANNELS: <CHANGELOG | IN_APP | EMAIL | BLOG | ALL>

---

## The prompt (copy from here)

```
You are producing customer-facing release notes from git history. The
§7–§10 RELEASE NOTES are the deliverables. Three rules:

(1) Translate commit messages to user value. "Refactored payment
    service" is not a customer-facing note. "Faster checkout —
    payment now processes in under 1 second" is.
(2) Group by user impact, not by code module. Customers don't care
    that auth and payments both changed; they care what's better
    today than yesterday.
(3) Honest about removed and breaking changes. Hiding deprecations
    in fine print is how trust is broken.

1. RAW COMMIT INVENTORY
   `git log <FROM_REF>..<TO_REF> --pretty=format:"%h %an %s" --no-merges`
   Capture every commit, with author and message. Note PR numbers if
   present.

2. COMMIT CLASSIFICATION
   For each commit, classify:
     - FEATURE: new capability customers can use
     - IMPROVEMENT: existing capability is better (faster, clearer,
       more reliable)
     - FIX: bug fix customer would notice
     - SECURITY: security fix (often disclosed separately, often
       muted in customer notes)
     - PERFORMANCE: measurable speed/cost/efficiency improvement
     - BREAKING: requires customer action (API change, deprecation,
       removal)
     - INTERNAL: refactor / chore / test / doc / CI / vendor bump —
       NOT in customer notes
     - DEPENDENCY: third-party update — usually internal unless it
       enables a customer-visible feature

3. USER-IMPACT GROUPING
   Re-group classified items by who benefits:
     - End users (the people clicking buttons)
     - Admin users (those configuring the product)
     - Developers (API users, integrators)
     - Operators (deployers, ops teams)
   Drop commits that affect nobody externally (INTERNAL class).

4. PLAIN-LANGUAGE TRANSLATION
   For each customer-impacting item, write the user-value version:
     - Start with what changed FOR THE USER, not in the code
     - Quantify where data exists (perf numbers, count of supported
       things, time saved)
     - Avoid module names, file paths, class names unless audience
       is developers
     - Avoid "we" if the channel is in-app; use "you can now…"
   For BREAKING: state action required, deadline if any, migration
   guide link.

5. BREAKING CHANGES & DEPRECATIONS  (mandatory section if any exist)
   For each:
     - What is breaking
     - When (this release / next release / 90 days)
     - Why (one sentence)
     - Migration steps (or link to detailed guide)
     - Workaround if migration is non-trivial
   Surface this section PROMINENTLY. Hiding breaking changes in fine
   print is the cardinal sin of release notes.

6. SECURITY DISCLOSURE
   If security fixes exist:
     - For internal/customer notes: acknowledge a security fix shipped
     - For separate security disclosure: link to security advisory /
       CVE
     - Never disclose exploit detail in customer notes before patches
       have been adopted at typical-deployment scale

7. CHANGELOG  ← deliverable (CHANGELOG channel)
   Keep-a-Changelog format, machine-friendly, version-anchored.
   --- CHANGELOG START ---
   ## [VERSION] – YYYY-MM-DD

   ### Added
   - <feature, one line>
   ### Changed
   - <improvement, one line>
   ### Deprecated
   - <deprecation with sunset date>
   ### Removed
   - <removal>
   ### Fixed
   - <fix>
   ### Security
   - <security fix acknowledgment>
   --- CHANGELOG END ---

8. IN-APP UPDATE BANNER  ← deliverable (IN_APP channel)
   --- IN-APP START ---
   **What's new in <PRODUCT> <VERSION>**

   - <top 3–5 user-visible items, ≤12 words each>

   [See full changelog →]
   --- IN-APP END ---

9. EMAIL ANNOUNCEMENT  ← deliverable (EMAIL channel)
   --- EMAIL START ---
   Subject: <PRODUCT> <VERSION>: <headline benefit>

   Hi <name>,

   <One sentence: the single best thing in this release.>

   **What's new**
   - <top 3 features in user-value language>

   **Improvements**
   - <top 3 improvements>

   **What you should know**
   - <breaking changes if any — never bury>
   - <action items if any>

   <CTA: try it, read the docs, schedule a demo>

   – The <PRODUCT> team
   --- EMAIL END ---

10. BLOG POST  ← deliverable (BLOG channel)
    --- BLOG START ---
    # <Title that leads with the most exciting capability>
    *<Subtitle: who benefits and why>*

    ## TL;DR
    - <3 bullets, the most important changes>

    ## <Top feature, named as the customer would>
    <2–3 paragraphs with context, example, screenshot placeholder>

    ## <Second feature>
    <ditto>

    ## Improvements
    <bulleted, user-value language>

    ## Breaking changes & migration  (if any)
    <prominent, with linked guides>

    ## What's next
    <one paragraph teasing the next release theme>
    --- BLOG END ---

HARD RULES
- INTERNAL-classified commits never appear in customer notes.
- Every quantified claim ("3× faster", "supports 50+ integrations")
  has supporting evidence in the commit history or input data. No
  invented numbers.
- BREAKING changes (§5) are surfaced PROMINENTLY in every channel
  output, not hidden at the bottom.
- Security disclosure (§6) follows responsible-disclosure norms —
  acknowledge without revealing exploit detail before patch adoption.
- Respond in the language of the PRODUCT input.

PRODUCT:
VERSION:
FROM_REF:
TO_REF:
AUDIENCE:
TONE:
CHANNELS:
```

---

## What you get

Per release, four ready-to-ship artefacts. Drop the changelog into
`/CHANGELOG.md`, ship the in-app banner, send the email, publish the
blog. Replaces hours of cross-team coordination ("what should we say
about the X release?") with a 5-minute review cycle.
