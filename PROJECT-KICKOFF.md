# PROJECT-KICKOFF — Engagement Kickoff Document (interner Hebel)

Generates a kickoff document from a signed proposal: agenda, stakeholder
map, communication plan, success criteria, risks, dependencies, first
30/60/90-day plan, and a pre-kickoff checklist. Sent before the
kickoff call, anchored during it, referenced for the entire engagement.

**Leverage value: 2–4 hours saved per project, plus dramatically
fewer mid-engagement scope disputes.**

---

## How to use

Paste the block below, then on the next line:

    CLIENT: <legal entity + primary contact>
    SERVICE: <which Tier-2 prompt / engagement type>
    PROPOSAL: <paste the signed proposal scope + deliverables + dates>
    YOUR_TEAM: <who from your side is involved + role>
    CLIENT_TEAM: <who from client side + role>
    KICKOFF_DATE: <when the kickoff meeting happens>

---

## The prompt (copy from here)

```
You are producing an engagement kickoff document. The §8 DOCUMENT
is the deliverable, sent to all stakeholders 24–48 hours before
the kickoff meeting. Three rules:

(1) THE DOC IS THE CONTRACT'S OPERATIONAL FORM. Every scope item
    in the proposal must appear here as an operational commitment
    with owner + date.
(2) Stakeholders need to see THEMSELVES on the map. People who
    don't see their role disengage. Map every role explicitly.
(3) RISKS BEFORE THE FIRST EMAIL. Naming risks upfront prevents
    surprised escalations later.

1. ENGAGEMENT SUMMARY
   - Engagement name (descriptive, not "Project Alpha")
   - Service / deliverable being produced (cite §SERVICE)
   - Goal (the business outcome, in one sentence)
   - Engagement type (fixed-fee / T&M / retainer)
   - Start date, target completion date, key milestones

2. STAKEHOLDER MAP
   For each person:
     - Name, role, organisation
     - Responsibility on this engagement
     - Decision rights (who signs off on what)
     - Communication preference (Slack / email / weekly call)
     - Time zone
   Use RACI explicitly if needed: Responsible / Accountable /
   Consulted / Informed per work stream.

3. SUCCESS CRITERIA
   What does "engagement complete" mean? Per deliverable:
     - Deliverable name (from PROPOSAL)
     - Acceptance criterion (specific, testable, signed off by
       whom)
     - Definition of done
   Vague "to client's satisfaction" creates disputes — make it
   measurable.

4. COMMUNICATION PLAN
   - Status report cadence (typically weekly during active phases —
     see STATUS-REPORT.md)
   - Standing meetings (kickoff, weekly, mid-engagement check-in,
     wrap-up)
   - Async channels (Slack channel? email thread? project tool?)
   - Response-time SLAs (your side and theirs)
   - Escalation path (when something is at risk, who's notified
     in what timeframe)

5. RISKS REGISTER
   Top 5–10 risks visible from PROPOSAL + early scoping:
     - Risk description
     - Likelihood: LOW / MED / HIGH
     - Impact: LOW / MED / HIGH (on scope / cost / timeline)
     - Mitigation owner + plan
   Common risks: client-side input delays, scope ambiguity,
   third-party dependency, regulatory change, holiday windows.

6. DEPENDENCIES & PREREQUISITES
   What's needed BEFORE the engagement can start:
     - Access (system credentials, repo access, document access)
     - Information (data exports, contact lists, prior reports)
     - Decisions (sign-offs, vendor choices, scope confirmations)
     - People (interviewees, reviewers, decision-makers)
   For each: who provides, by when, what happens if late.

7. 30 / 60 / 90 PLAN
   - Days 1–30: scope confirmation, baseline assessment, first
     deliverable
   - Days 31–60: core work, mid-engagement checkpoint
   - Days 61–90: refinement, final review, sign-off
   For shorter engagements, compress accordingly. The structure
   makes the engagement legible to executives who don't read
   detailed plans.

8. DOCUMENT  ← the deliverable
   --- DOCUMENT START ---
   # Engagement Kickoff: <Engagement Name>
   **Client:** <…>   **Engagement Type:** <…>
   **Start:** <date>   **Target Completion:** <date>
   **Kickoff Meeting:** <date / time / venue>

   ## 1. Engagement at a Glance     (§1)
   ## 2. Who's Involved             (§2)
   ## 3. What "Done" Means          (§3)
   ## 4. How We'll Work Together    (§4)
   ## 5. Risks We're Watching       (§5)
   ## 6. What We Need From You      (§6 — surface prominently)
   ## 7. The Plan                   (§7)
   ## 8. Kickoff Meeting Agenda     (§9)
   ## Appendix: Signed proposal summary
   --- DOCUMENT END ---

9. KICKOFF AGENDA  (place inside §8)
   60–90 minutes, structured:
     - 5 min: introductions + confirm attendees
     - 10 min: walk the engagement summary (§1)
     - 15 min: confirm success criteria (§3) — get explicit
       agreement
     - 10 min: walk stakeholder map (§2) and confirm
     - 10 min: review communication plan (§4) — agree on cadence
     - 10 min: review dependencies (§6) — set delivery dates
     - 10 min: review risks (§5) — name escalation triggers
     - 5 min: confirm next 30 days (§7)
     - 5 min: questions
   Send agenda 24h ahead. Send recap within 24h after.

HARD RULES
- Every deliverable from PROPOSAL appears in §3 with a measurable
  acceptance criterion.
- Every person in YOUR_TEAM and CLIENT_TEAM appears in §2 with a
  named role. People who don't appear think they're not involved.
- §6 dependencies are time-bound. "We'll need access soon" is not
  a commitment.
- §5 risks are honest. The risks not on the list are the ones that
  hit hardest.
- Respond in the language of the CLIENT input.

CLIENT:
SERVICE:
PROPOSAL:
YOUR_TEAM:
CLIENT_TEAM:
KICKOFF_DATE:
```

---

## What you get

A pre-kickoff document sent to all stakeholders. The kickoff meeting
runs to the document's agenda; the document becomes the operational
reference for the entire engagement. Scope disputes drop ~50%
because every commitment was named upfront.
