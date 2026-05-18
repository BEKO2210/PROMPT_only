# AD-COPY — Multi-Platform Anzeigen-Varianten (verkaufbares Deliverable)

Produces ad copy across Google Ads (Search + PMax), Meta (Facebook +
Instagram), LinkedIn, and TikTok formats from a single brief.
Includes headlines, descriptions, sitelinks, callouts, audience-
targeting suggestions, and creative concept briefs for the design
team. Per-platform character limits enforced.

**Realistic engagement price: €500 – 2 000 per campaign.** Often
recurring as new campaigns launch.

---

## How to use

Paste the block below, then on the next line:

    PLATFORMS: <GOOGLE_SEARCH | GOOGLE_PMAX | META | LINKEDIN | TIKTOK | ALL>
    OFFER: <what you're advertising, primary KPI>
    AUDIENCE: <ICP for this campaign>
    UNIQUE_VALUE: <the differentiator you want hammered home>
    PROOF: <verbatim testimonials, metrics, customer logos>
    LANDING_URL: <where the ad clicks to — match copy to LP>
    BUDGET_TIER: <smb | mid-market | enterprise — affects targeting suggestions>

---

## The prompt (copy from here)

```
You are producing multi-platform ad copy from a single brief.
Per-platform deliverables: §4 GOOGLE SEARCH, §5 META, §6 LINKEDIN,
§7 TIKTOK, plus §8 CREATIVE BRIEF for design assets.

Three rules:

(1) Each platform has its OWN limits, conventions, and audience
    psychology. Cross-posting the same copy is amateur and gets
    suppressed by every platform's quality score.
(2) NEVER invent metrics or testimonials. PROOF input is the only
    source. False ad claims trigger account-level suspensions —
    one bad creative kills a whole account.
(3) Match landing-page copy. The ad's headline, value prop, and
    visual should match what the visitor sees post-click. Mismatch
    drops Quality Score (Google) and Relevance Score (Meta) and
    raises CPC.

1. POSITIONING DISTILLATION
   In one sentence, the ad's promise: "<Product> helps <audience>
   <achieve outcome> by <method>." This sentence is the source of
   truth every variant translates from.

2. ANGLES  (5–8 to test)
   Different angles tend to find different audience segments. Build
   variants around:
     - Pain → relief ("Stop X, start Y")
     - Specific outcome ("Cut Z by 40%")
     - Audience direct address ("For X who Y")
     - Comparison / vs (use carefully — competitor name in ad copy
       has policy implications)
     - Social proof / case study ("Y customers cut Z by 40%")
     - Urgency / scarcity (only if real)
     - Curiosity / surprising claim
     - Question hook

3. COMPLIANCE CHECK
   Per platform, the policy traps:
     - Google: no claims like "guaranteed" / "100%" without legal
       basis; restricted verticals (gambling, alcohol, healthcare,
       financial); destination URL must match displayed domain
     - Meta: prohibited content (drugs, weapons, etc.); special-ad
       categories (housing, employment, credit — restricted
       targeting); 20% text rule (relaxed but still scored); no
       personal attributes ("you" + sensitive attribute = restricted)
     - LinkedIn: no personal-attribute targeting in copy
     - TikTok: community-guideline content, music licensing for
       creative, no shock-and-awe claims

4. GOOGLE ADS — SEARCH  ← deliverable
   Responsive Search Ad (RSA) format:
     - Headlines (15 distinct, each ≤30 chars). 3 will display per
       impression.
       Mix:
         * 3 with primary keyword
         * 3 with outcome / benefit
         * 3 with social proof / specifics
         * 3 with CTA
         * 3 with brand name / category-leader
     - Descriptions (4 distinct, each ≤90 chars)
     - Display path (2 fields, each ≤15 chars)
     - Sitelinks (4–8): each headline ≤25 chars, description (×2)
       ≤35 chars
     - Callouts (4–10, each ≤25 chars)
     - Structured snippets (header + 4 values)
     - Final URL: LANDING_URL

5. META ADS — FACEBOOK + INSTAGRAM  ← deliverable
   Per ad set (3–5 variants):
     - Primary text (≤125 chars before "See more"; up to 2 200 total)
     - Headline (≤40 chars)
     - Description (≤30 chars — appears below headline on some
       placements)
     - CTA button (from Meta's preset list: "Learn More" / "Sign
       Up" / "Shop Now" / "Get Quote" / etc.)
   Creative brief per variant (for the design team — see §8).
   Audience targeting suggestion (no health/finance/etc. personal
   attributes in copy).

6. LINKEDIN ADS  ← deliverable
   Per ad format:
     - Sponsored Content (single-image, video, carousel):
       * Introductory text (≤150 chars before truncation; up to
         600)
       * Headline (≤200 chars; ≤70 ideal)
       * Description (≤300 chars)
     - Message Ads / Conversation Ads:
       * Subject line (≤60 chars)
       * Message body (≤1 500 chars; first 250 most important)
       * CTA buttons (up to 5; ≤25 chars each)
     - Text Ads:
       * Headline (≤25 chars)
       * Description (≤75 chars)
   Audience targeting suggestion (job title, company size, function,
   seniority — LinkedIn's superpower).

7. TIKTOK ADS  ← deliverable
   - In-Feed: caption text up to 2 200 chars (first 100 visible
     before truncation); display name; CTA
   - Spark Ads / TopView: caption + creative brief
   - Brand Takeover / Branded Hashtag: concept brief + hashtag
   Hook in first 3 seconds is everything. Creative brief covers
   the hook, pacing, on-screen text, music style.

8. CREATIVE BRIEF (for design team)  ← deliverable
   Per platform, what assets to produce:
     - Aspect ratios required (1:1, 9:16, 4:5, 16:9)
     - Concept (the visual idea, not a Photoshop spec)
     - Required text overlays (with platform's text-percentage
       considerations)
     - Brand-element placement (logo, color)
     - Variants to produce (typically 3–5 per format)
     - Performance hypothesis (which concept tests which §2 angle)

9. UTM PARAMETERS
   For every ad's destination URL, the suggested UTM tags so the
   client can attribute back to the variant:
     - utm_source: google / facebook / linkedin / tiktok
     - utm_medium: cpc / paid_social
     - utm_campaign: <campaign name>
     - utm_content: <ad-variant ID>
     - utm_term: <keyword / audience segment>

HARD RULES
- Character limits per platform are HARD. Generating "30 chars" of
  31 characters fails ad submission. Count before delivering.
- Claims with numbers cite PROOF input. Invented "5× ROI" is
  policy-violation territory.
- Different angles per platform — never paste Google Search copy
  into Meta verbatim.
- Restricted-category copy (financial, health, housing, employment,
  credit) flags the §3 compliance note prominently.
- Respond in the language of the AUDIENCE input.

PLATFORMS:
OFFER:
AUDIENCE:
UNIQUE_VALUE:
PROOF:
LANDING_URL:
BUDGET_TIER:
```

---

## What the buyer gets

Per platform, a CSV-ready variant bank the media buyer loads directly
into Google Ads Editor / Meta Ads Manager / LinkedIn Campaign Manager,
plus a creative brief the design team executes. Variants are
deliberately diverse so the platform's auto-optimisation finds the
winning combinations within 1–2 weeks.
