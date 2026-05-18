# DISCOVERY — Prospect-Briefing vor dem Erstgespräch

Before a sales call, produce a complete intelligence brief on the prospect
from publicly available sources (website, LinkedIn, GitHub, job postings,
funding databases, recent news). Saves 1–2 hours per qualified lead and
dramatically raises close rate because you walk in already knowing their
stack, their pain, and their hierarchy.

**Leverage value: ~1.5h saved per lead × higher close rate.** This is
not sold — this is what makes you more sellable.

---

## How to use

Paste the block below, then on the next line:

    PROSPECT: <company name>
    WEBSITE: <URL>
    LINKEDIN: <company URL — optional>
    REPO: <public repo URL — optional, transforms the brief>
    SERVICE: <which of your services you're pitching — name a Tier-2 prompt>
    CALL_GOAL: <discovery / qualification / proposal pitch / close>

The agent needs `WebFetch` (Claude Code, Cursor, SDK with web tool).

---

## The prompt (copy from here)

```
You are preparing me for a sales call with a prospect. The §9 BRIEF is
the deliverable — a 1–2 page document I read in the 10 minutes before
the call. Every claim must cite the public source it came from; an
invented credential or hallucinated funding round is a credibility
suicide on the call.

1. PROSPECT PROFILE
   From their website + LinkedIn + public press:
     - Legal name, primary product / service, market positioning
     - Stage (bootstrapped / pre-seed / Series A–D / scaleup / public)
     - Estimated headcount (LinkedIn employee count, ±30%)
     - Funding history if visible (Crunchbase-class data)
     - HQ location and key offices
     - Recent material news (last 12 months): launches, layoffs,
       leadership changes, funding, M&A, incidents
   Cite source URL for every claim.

2. DECISION-MAKERS
   Map the buying committee for the §SERVICE you're pitching:
     - Economic buyer (who signs): typical title for this service & company size
     - Technical buyer: CTO / Head of Eng / Platform Lead / VP Security
     - Champion: who will internally advocate (often a senior IC who
       feels the pain)
     - Blocker risk: Legal / Procurement / Finance gates
   For each: real name + LinkedIn URL if you found it; otherwise the
   role title and how to discover them on the call.

3. TECH STACK
   Infer from public signals (DO NOT GUESS):
     - Job postings → languages, frameworks, tools they hire for
     - Public repos → actual stack
     - Engineering blog / talks → architecture choices
     - HTTP response headers, generator meta tags → frontend stack
     - DNS / SaaS subdomains → CDN, auth, analytics, monitoring vendors
   For each item: source URL. Mark unverified inferences `[inferred]`.

4. PAIN SIGNALS  ← the core of the brief
   Concrete public evidence that they need the §SERVICE you're pitching.
   Examples by service:
     - AUDIT pitch: public CVEs in their open-source repos, breach
       disclosures, security-job-posting volume, missing security.txt
     - PERF pitch: customer complaints on Twitter/Reddit, slow Lighthouse
       scores on their public site, hiring for "performance engineer"
     - A11Y pitch: WCAG violations on key pages, accessibility-lawsuit
       database hits, no published VPAT
     - GDPR pitch: no DPO listed in legal pages, recent privacy-policy
       drift, US-hosted infrastructure with EU customers
     - MIGRATE pitch: hiring for legacy stack + modern stack
       simultaneously, public engineering posts about technical debt
   Each signal: one sentence + source URL + relevance to the pitch.

5. COMPETITIVE LANDSCAPE
   Who else serves this prospect today (competitors to you, or
   complementary vendors)? Visible on their site footer, case studies,
   or job descriptions ("experience with X tool"). One line each.

6. TALK TRACK — first 10 minutes
   Three specific things to say that prove you did homework:
     - One observation about their product / market
     - One specific reference to their recent activity (blog, release,
       hire, funding)
     - One pain-signal mention framed as a question, not an accusation
   Phrase verbatim. Generic flattery ("I love your product") is banned.

7. DISCOVERY QUESTIONS  (5–8)
   Open-ended questions that surface the four things you need to qualify:
     - BUDGET: "How is this typically funded — security budget, eng
       budget, or a one-off compliance line item?"
     - AUTHORITY: "Beyond yourself, who else will need to weigh in on
       this decision?"
     - NEED: pain-validation specific to their §4 signals
     - TIMING: "What's driving the timing on this — audit deadline,
       upcoming release, board ask?"
   Each question one line, conversational tone.

8. EXPECTED OBJECTIONS  (2–3)
   Likely objections given §1 stage / §3 stack / §SERVICE. For each:
   the objection in their voice, then your prepared response in ≤3
   sentences. Common ones:
     - "We have someone in-house" → reframe as augmentation not replacement
     - "We did this last year" → ask what changed since
     - "Too expensive" → unbundle, anchor against incident cost

9. BRIEF  ← the deliverable
   --- BRIEF START ---
   # Pre-Call Brief: <Prospect>
   **Service pitched:** <…>   **Call goal:** <…>   **Date:** <…>

   ## Snapshot (3 bullets — read this if nothing else)
   ## Company at a glance       (§1, condensed)
   ## Who's in the room          (§2)
   ## Their stack & posture      (§3, §4 highlights)
   ## Three things to say first  (§6, verbatim)
   ## Questions to ask           (§7)
   ## Objections & responses     (§8)
   ## Recommended ask            (the specific next-step request:
                                  paid pilot, scoped audit, intro to
                                  champion, follow-up call)
   ## Sources                    (every URL cited above, one list)
   --- BRIEF END ---

HARD RULES
- Every factual claim cites a source URL. No "I think they raised
  Series B" — either you found it or you don't claim it.
- People's names appear ONLY if found in a public source you can cite
  (LinkedIn URL, company press release, conference talk).
- If a section has no public evidence available, write `[no public
  signal found — ask on the call]` rather than padding with
  speculation.
- Cap web fetches at 15. The brief ships incomplete-with-gaps rather
  than complete-with-invention.
- Respond in the same language as the SERVICE input.

PROSPECT:
WEBSITE:
LINKEDIN:
REPO:
SERVICE:
CALL_GOAL:
```

---

## Why it earns

Sales coaches sell exactly this skill for €200–500/h. Done before every
qualified call, it raises connect-to-meeting conversion measurably
(most B2B sales benchmarks: 15–25% lift from "did homework" signals).
Pair with the PROPOSAL prompt for the full pre-sale workflow.
