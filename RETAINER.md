# RETAINER — Monatlicher Status-Report (Anti-Churn-Deliverable)

Monthly recurring report for retainer clients. Two jobs: (1) make
invisible work visible so the client doesn't quietly wonder what they're
paying for, (2) seed the next upsell. Churn on retainers comes almost
entirely from "I'm not sure what we're getting" — this fixes that.

**Leverage value: protects €1 000 – 5 000/month recurring revenue per
client. Run on the same day each month.**

---

## How to use

Paste the block below, then on the next line:

    CLIENT: <client name + your primary contact>
    PERIOD: <YYYY-MM, e.g. 2026-05>
    SCOPE: <what the retainer covers — paste retainer agreement scope clause>
    FEE: <monthly retainer fee, currency>
    ACTIVITY_LOG: <where to find the month's work — git history, task tracker
                   export, time-tracking CSV, Slack channel summary>
    METRICS_SOURCE: <where to find numerical evidence — monitoring dashboards,
                     CI logs, audit tool output, analytics export>

---

## The prompt (copy from here)

```
You are producing a monthly retainer status report. The §8 REPORT is
the deliverable, sent to the client on the same day each month. Three
principles:

(1) MAKE INVISIBLE WORK VISIBLE. Most retainer work is preventive — the
    incident that didn't happen, the vulnerability fixed before
    disclosure. Quantify these or they don't exist to the client.
(2) NEVER INVENT ACTIVITY. The activity log is the source of truth. If
    a quiet month happened, say so honestly — and surface the §6
    recommendations that explain why next month should not be quiet.
(3) PLANT THE NEXT UPSELL. §6 Recommendations is where retainer
    expansion happens. One concrete recommendation per report, scoped
    so the client can say yes without escalating.

1. PERIOD AT A GLANCE
   The single paragraph the client's CFO reads:
     - Activities completed this period (count, headline category)
     - Material issues prevented or resolved (1–3 specifics)
     - Key metric movement (vs. previous period if available)
     - Hours / effort used vs. retainer-included
   ≤120 words. Plain language.

2. ACTIVITY DETAIL
   From the ACTIVITY_LOG input, group the month's work:
     - PREVENTIVE: ongoing monitoring, scheduled checks, patches
     - REACTIVE: issues investigated, incidents handled
     - PROJECT: planned scope items shipped this period
     - ADVISORY: questions answered, decisions supported
   For each activity: one line — what was done, on what date, why it
   mattered. If activity was light because nothing broke, frame as
   "monitoring confirmed clean state" rather than "nothing happened".

3. METRICS  (only if METRICS_SOURCE provides them)
   Numerical evidence of the retainer's value:
     - Security: open vulnerabilities (Critical/High/Medium/Low), MTTR
     - Performance: p50/p95/p99 latency trend, error rate, uptime
     - Compliance: SBOM coverage %, audit findings closed, controls
       passing
     - Operations: deployments completed, incidents (SEV1/2/3 counts),
       on-call response times
   Table format. Always include "this period vs. previous period"
   delta. NEVER invent metrics — if METRICS_SOURCE didn't provide a
   number, omit it.

4. INCIDENTS & ISSUES
   Anything that triggered investigation this period:
     - Issue summary
     - Severity / impact
     - Resolution (one sentence)
     - Time-to-resolution
     - Whether it falls inside the SCOPE or warrants a separate
       conversation
   If zero incidents, say "Zero incidents this period — see §6 for
   recommended hardening to keep it that way."

5. UPCOMING WORK  (next 30 / 60 / 90 days)
   What's already scheduled inside the retainer SCOPE:
     - Next 30 days: committed work, dates
     - Next 60 days: planned work, contingent on inputs (note what
       the client needs to provide)
     - Next 90 days: anticipated workload (patches, audits, reviews)
   This is also a soft commitment — the client sees value coming.

6. RECOMMENDATIONS  ← the upsell vector
   Two or three items the client should consider doing, OUTSIDE the
   current retainer scope:
     - The recommendation in plain language
     - Why now (specific business reason from §2 / §3 / §4)
     - Effort / cost order-of-magnitude (S / M / L from the Tier-2
       prompt library, with euro range)
     - What happens if they don't (a real consequence, not FUD)
   Phrase as "We recommend…" not "You should…". The client decides;
   you advise.

7. ROI SNAPSHOT
   For the CFO who skims:
     - Retainer fee this period: <€X>
     - Value delivered (estimate, with reasoning):
       * Time saved on in-house equivalent: <Y> hours × loaded rate
       * Risk mitigated: <named, with industry-standard severity €>
       * Compliance kept current: <which obligation>
     - Net value: <€Y - €X>
   Be conservative — overstating ROI destroys credibility on the one
   month where the numbers don't favour you.

8. REPORT  ← the deliverable
   --- REPORT START ---
   # <Client> Retainer — <Period> Status Report
   **Period:** <YYYY-MM>   **Account:** <…>   **Prepared:** <date>
   **Next report:** <date>

   ## Period at a glance        (§1 — the CFO reads only this)
   ## Activities                (§2)
   ## Metrics                   (§3, table)
   ## Incidents & Issues        (§4)
   ## Upcoming                  (§5)
   ## Recommendations           (§6)
   ## ROI Snapshot              (§7)
   ## Appendix: Activity log    (raw entries from ACTIVITY_LOG, lightly
                                 formatted)
   --- REPORT END ---

HARD RULES
- Every claim about activity ties to a row in ACTIVITY_LOG. Never
  invent work that wasn't done.
- Every metric ties to a number in METRICS_SOURCE. Never invent numbers.
- Quiet months are presented honestly. "Zero incidents" is a strong
  outcome, not a weak one — frame it as such.
- §6 Recommendations are out-of-scope items, never inside the retainer
  (that would be billing twice).
- §7 ROI uses conservative estimates with stated reasoning. No
  "infinite ROI from avoided breach" theatre.
- Tone matches the client relationship: written for the primary
  contact's reading level and the CFO's skimming pattern.
- Respond in the same language as the CLIENT input.

CLIENT:
PERIOD:
SCOPE:
FEE:
ACTIVITY_LOG:
METRICS_SOURCE:
```

---

## Why it pays for itself

Retainers fail when the client renews three months in a row without
knowing what they bought. One report per month — delivered on the same
date — solves that. The €100 of agent time it takes to produce protects
a €1 000–5 000 monthly fee, and the §6 Recommendations field is the
single most effective upsell channel in a retainer relationship.
