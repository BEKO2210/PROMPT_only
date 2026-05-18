# POSTMORTEM — Blameless Incident-RCA (verkaufbares Deliverable)

The only Tier-2 prompt that does not audit a codebase — it audits an
incident. Inputs are logs + metrics + git history + chat transcripts +
deployment events. Produces a blameless postmortem in the Google SRE
format with timeline, root cause, contributing factors, and SMART action
items. Sold per incident, often required by enterprise SLAs.

**Realistic engagement price: €1 000 – 5 000 per incident.** Recurring.

---

## How to use

Paste the block below, then on the next line:

    INCIDENT: <short description — what visibly broke, when>
    TIMEFRAME: <UTC window, e.g. "2026-05-17 14:00–17:30 UTC">
    DATA: <where logs / metrics / chat history / git log are accessible>
    SEVERITY: <SEV1 | SEV2 | SEV3>
    CLIENT: <client name — optional>

---

## The prompt (copy from here)

```
You are producing a blameless post-incident review. The §8 REPORT is the
deliverable. Three rules govern this entire document:

(1) BLAMELESS — never name individuals. Use roles ("on-call engineer",
    "release manager", "security team") or pronouns. Humans operating
    within their context never cause incidents alone; systems do.
(2) FACTUAL — every timeline entry cites a log line, metric, commit,
    PR, alert, or chat message timestamp. Speculation is labelled as
    such.
(3) FORWARD-LOOKING — the value of a postmortem is action items, not
    catharsis. Every action item is SMART (Specific, Measurable,
    Assigned-role, Realistic, Time-bound).

1. INCIDENT SUMMARY
   - One-paragraph plain-language description of what happened
   - Customer impact in business terms (users affected, revenue lost,
     SLA credits owed, data integrity status)
   - Severity classification and rationale
   - Detection source (alert / customer report / chance discovery)
   - Total duration: detection → mitigation → full resolution

2. TIMELINE
   Minute-by-minute reconstruction in UTC. Each entry:
     - timestamp (UTC; add local time in parens if helpful)
     - source (log file, metric dashboard, alert ID, PR, chat msg)
     - event in past tense, one line
   Mark phases:
     [PRE]       changes / conditions before the incident
     [TRIGGER]   the event that started the incident
     [DETECT]    when someone or something noticed
     [RESPOND]   actions taken during the incident
     [MITIGATE]  point at which customer impact stopped
     [RESOLVE]   point at which the system was fully restored
   If a gap exists in evidence ("between 14:23 and 14:41 no logs"),
   say so — never invent timeline entries.

3. ROOT CAUSE
   One paragraph. The ACTUAL mechanism, not the surface description.
   Apply Five Whys or a Causal Tree — show the chain.
   FORBIDDEN root causes (these are symptoms or blame):
     - "human error"
     - "the engineer should have known"
     - "the test missed it"   (why did the test miss it?)
     - "the deploy failed"    (why did the deploy fail?)
   A root cause is something an action item can plausibly prevent.

4. CONTRIBUTING FACTORS
   The conditions that allowed the root cause to produce an incident.
   Categorise:
     - DESIGN: missing redundancy, tight coupling, no circuit breaker
     - PROCESS: no canary, no rollback, alert ignored, runbook absent
     - TOOLING: monitoring blindspot, log retention gap, deploy tool
       quirk
     - ORGANISATIONAL: knowledge silo (do not name individuals — say
       "single team familiar with subsystem X"), on-call coverage gap,
       conflicting priorities
   3–7 factors. Each cites timeline evidence.

5. WHAT WENT WELL
   2–5 things. Reinforces good practices and signals psychological
   safety. Examples: "Alert fired within 90 seconds of error rate
   crossing threshold." "Customer comms went out within 12 minutes."
   "Rollback procedure worked first try."

6. WHAT WENT POORLY
   2–5 things, observable and specific. NOT "team was stressed" — but
   "ETA estimates communicated to customers changed four times, all
   later than reality, eroding trust."

7. ACTION ITEMS
   The deliverable's payoff. Each item:
     - ID: AI-001, AI-002 …
     - Category: PREVENT / DETECT / MITIGATE / DOCUMENT
       (prefer PREVENT > DETECT > MITIGATE; only one DOCUMENT max)
     - Description: specific change (config, code, runbook, monitor,
       process). Cite file path or system where it lives.
     - Owner role: "Platform team", "SRE on-call rotation", "Release
       captain" — never a person
     - Target date: realistic, e.g. "within 2 weeks", "by end of quarter"
     - Done means: measurable acceptance ("alert fires when X crosses
       Y within Z seconds, verified in staging")
   5–12 items. More than 12 means none will be done.

8. REPORT  ← the deliverable
   --- REPORT START ---
   # Post-Incident Review: <Incident Title>
   **Severity:** SEV<n>   **Duration:** <total>   **Date of incident:** <date>
   **Date of review:** <date>   **Author:** <role / firm>
   **Status:** DRAFT / REVIEWED / PUBLISHED

   ## Executive Summary             (§1 — for execs and customers)
   ## Customer Impact               (numbers; for accountability)
   ## Detection & Response Summary  (1 short paragraph)
   ## Timeline                      (§2)
   ## Root Cause                    (§3)
   ## Contributing Factors          (§4)
   ## What Went Well                (§5)
   ## What Went Poorly              (§6)
   ## Action Items                  (§7, table)
   ## Lessons Learned               (≤200 words — generalisable insights)
   ## Limitations                   (§9, verbatim)
   ## Appendix A: Evidence sources  (log paths, dashboard URLs, PR IDs,
                                     alert IDs referenced in §2)
   --- REPORT END ---

9. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This post-incident review was prepared on <date> from the evidence
    sources listed in Appendix A. Where timeline reconstruction relied
    on retained logs and metrics, retention windows and sampling rates
    may have introduced gaps; these are noted inline. Root-cause
    analysis follows the blameless principle: it identifies system
    conditions, not individuals. Customer-impact numbers are estimates
    based on the data available at review time and may be refined as
    further evidence emerges (chargebacks, support ticket clustering,
    delayed customer reports). Action items are recommendations; their
    prioritisation and execution depend on the client's broader
    engineering capacity and risk tolerance."

HARD RULES
- No individual names anywhere in the report. Roles only.
- Every timeline entry cites a real source (log file:line, metric ID,
  alert ID, PR number, chat message timestamp).
- "Human error" / "engineer mistake" appearing as a root cause is a
  failed review — return to §3 and ask why the system allowed it.
- Action items have an owner ROLE, a date, and a measurable
  done-criterion. Items without all three are deleted.
- If evidence for a critical phase is missing, say so explicitly. Never
  invent timeline entries to fill gaps.
- Respond in the same language as the INCIDENT description.

INCIDENT:
TIMEFRAME:
DATA:
SEVERITY:
```

---

## What the buyer gets

A publishable postmortem the client can send to enterprise customers as
an RCA document (enterprise contracts often require one within 5
business days of any SEV1). Internally, it becomes the team's prevention
backlog. The blameless framing is non-negotiable: it is what makes
honest postmortems possible, which is what makes them valuable.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For incidents where root cause is genuinely external (e.g. cloud-provider regional outage with no in-house fault) — file a vendor postmortem reference instead
- For near-misses without customer impact — those deserve a different, lighter ceremony
- During an ongoing incident — POSTMORTEM is post-resolution; firefight first, write after
- When evidence is destroyed or missing — flag the gap; do not fabricate timeline entries to fill it

---

## Quality gate — verify before treating as done

- [ ] No individual names anywhere in the report — roles only ("on-call engineer", "release captain")
- [ ] Every timeline entry cites a real source (log file:line, alert ID, PR number, chat message timestamp)
- [ ] §3 ROOT CAUSE doesn't contain "human error" or "engineer mistake" — those are symptoms; system conditions are the cause
- [ ] §7 action items each have OWNER ROLE + DATE + MEASURABLE done-criterion (no "do better next time")
- [ ] Evidence gaps explicitly noted (`between 14:23 and 14:41 no logs available`) — not silently bridged
- [ ] Customer-impact numbers grounded in measurable data (revenue, ticket count, affected users)
- [ ] §9 disclaimer present
