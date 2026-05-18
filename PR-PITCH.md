# PR-PITCH — Press Pitch + Follow-up Sequence (verkaufbares Deliverable)

Produces a press pitch around a news angle: hook, story, who-cares,
exclusive offering, journalist research, follow-up cadence. Built for
the realities of 2026 journalism (overloaded inboxes, low response
rates, AI-spam-suspicious) — quality over volume.

**Realistic engagement price: €500 – 2 500 per pitch.** Or as part of a PR retainer.

---

## How to use

Paste the block below, then on the next line:

    NEWS_ANGLE: <what's actually newsworthy — be honest>
    COMPANY: <name, what you do>
    SPOKESPERSON: <who's available for interview + their credentials>
    TARGET_OUTLETS: <publications / podcasts / shows to pitch>
    PROOF: <data, customers, third-party validation that supports angle>
    EMBARGO_DATE: <optional — when story can run>
    EXCLUSIVE: <YES (one outlet) | NO (broad)>

---

## The prompt (copy from here)

```
You are producing a press pitch. Three deliverables: §6 PRESS
RELEASE, §7 PITCH EMAILS (per outlet), §8 FOLLOW-UP SEQUENCE.

Three rules:

(1) THE ANGLE IS THE PRODUCT. "Company X exists" is not news.
    "First/largest/surprising/data/timely/conflict" is news.
    No angle = no pitch.
(2) RESEARCH THE JOURNALIST. Pitching anyone on anything is spam.
    Pitching a journalist who covers this beat with reference to
    their last article = real outreach.
(3) NO AI-WRITTEN GIVEAWAYS. Em-dashes, "delve", "unleash",
    "leverage", "in the rapidly evolving landscape" — journalists
    inbox-filter these now. Write like a human.

1. ANGLE TEST  (be honest)
   Does NEWS_ANGLE pass at least one of:
     - FIRST: first to do X, first in market Y
     - DATA: novel insight from proprietary data
     - LARGEST: biggest deal / partnership / customer / round
     - TIMELY: tied to a current news cycle / regulation / event
     - SURPRISING: counterintuitive finding or pivot
     - CONFLICT: takes a clear position against incumbent
     - HUMAN INTEREST: founder story, customer transformation
   If NO: stop. Pitch will fail. Recommend the client wait for
   actual news or generate one (data report, customer milestone,
   commissioned research).
   If YES: proceed.

2. TARGET MATCHING
   Per TARGET_OUTLETS:
     - Specific journalist who covers this beat (find recent
       articles, name + beat + handle)
     - Why your angle fits their coverage history
     - Recent articles they wrote (reference one specifically in
       the pitch)
     - Preferred contact method (email vs Twitter DM vs Muck Rack
       — many journalists list this on their profile)

3. NEWSWORTHINESS PACKAGING
   The 30-second mental pitch:
     - Headline they could write
     - Lede paragraph (60–80 words)
     - One specific number or fact they'll quote
     - One quotable line from SPOKESPERSON
     - Why now (timeliness)
     - What they get exclusively or differently (vs broad release)

4. ASSETS READY
   What you ship alongside the pitch:
     - Press release (formal artefact, but secondary — the email
       earns the click)
     - Spokesperson bio + high-res photo
     - Company logo (vector)
     - Hi-res product / context images
     - Data / report PDF if applicable
     - Customer quotes with permission
     - Suggested interview times (3 slots over next 5 business
       days)

5. EXCLUSIVE STRATEGY
   - EXCLUSIVE: offered to ONE outlet only; embargo until run
     date; higher response rate; outlet gets first-mover; back-up
     plan if they pass
   - BROAD: same release / pitch to multiple outlets; lower per-
     outlet response rate; faster distribution
   Recommend per outlet tier:
     - Tier 1 outlets (TechCrunch, Wired, FT, BBC): EXCLUSIVE
       often required for serious coverage
     - Tier 2: usually accept broad pitch
     - Trade press: usually accept broad pitch

6. PRESS RELEASE  ← deliverable (a)
   --- PRESS RELEASE START ---
   FOR IMMEDIATE RELEASE  [or EMBARGOED until <DATE TIME ZONE>]

   # <Headline — what happened, ≤80 chars>
   ## <Subhead — why it matters, ≤120 chars>

   <Dateline: CITY, Date> — <Lede paragraph: who, what, when,
   where, why, how. 60–80 words.>

   <2nd paragraph: detail and significance. ~80 words.>

   <3rd paragraph: quote from SPOKESPERSON. ~60 words.>

   <4th paragraph: context / market / customer impact. ~80 words.>

   <5th paragraph: optional second quote (customer / partner /
   analyst). ~60 words.>

   ## About <COMPANY>
   <Boilerplate, 50–80 words>

   ## Media contact
   <Name, role, email, phone>

   ###
   --- PRESS RELEASE END ---

7. PITCH EMAILS  ← deliverable (b) — one per outlet/journalist
   --- EMAIL START ---
   **Subject:** <Specific, lower-case, no hype — e.g. "story idea:
   <one-line angle>" or "<journalist's beat> + <our news>">

   Hi <first name>,

   I really liked your piece on <SPECIFIC RECENT ARTICLE> — the
   point about <SPECIFIC POINT FROM ARTICLE> was sharp.

   Quick story idea I think fits your beat:

   <2 sentences: the angle. Concrete. No marketing language.>

   What's interesting: <one specific number / fact / detail>.

   I can offer:
   - <SPOKESPERSON, title> for 20 minutes on or after <date>
   - <Data / customer / artefact relevant to the story>
   - <EXCLUSIVE on this if you want it — first-look until <date>>

   Press release attached; happy to send any other angles or
   pass the lead to a colleague at <outlet> if it's not your beat.

   Worth a 20-minute call?

   <signature>
   --- EMAIL END ---

8. FOLLOW-UP SEQUENCE  ← deliverable (c)
   - DAY 0: initial pitch
   - DAY 3: short follow-up — "in case it got buried. Genuinely
     happy if it's not a fit; would appreciate a one-line yes/no
     so I can offer it elsewhere."
   - DAY 7: final — "Closing the loop. Offering this elsewhere on
     <date>. Best regards."
   No more than 3 touches. Beyond 3 = harassment.

HARD RULES
- §1 angle test runs HONESTLY. No angle = no pitch sent. The
  alternative (sending without angle) damages future relationships
  with the journalist permanently.
- Every pitch references SPECIFIC RECENT ARTICLE by the journalist.
  Generic openings are inbox-filter triggers.
- AI-writing tells (em-dashes, "delve", "unleash", "leverage",
  "ever-evolving", "in the rapidly changing landscape") are absent.
- Embargo dates respected without exception. Breaking embargo is
  reputation destruction.
- Respond in the language of the TARGET_OUTLETS.

NEWS_ANGLE:
COMPANY:
SPOKESPERSON:
TARGET_OUTLETS:
PROOF:
EMBARGO_DATE:
EXCLUSIVE:
```

---

## What the buyer gets

A press release + per-journalist pitch emails + follow-up sequence
ready to send. The honest angle-test alone saves clients from
sending dead-on-arrival pitches that burn future journalist
relationships.
