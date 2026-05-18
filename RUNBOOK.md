# RUNBOOK — Production Operations Runbook Bundle (verkaufbares Deliverable)

Generates the operations runbook bundle a team needs to run a system in
production without depending on the original authors: startup,
shutdown, deploy, rollback, monitoring, common incident responses,
escalation matrix. Common gap during team transitions, M&A integration,
and outsourcing.

**Realistic engagement price: €3 000 – 12 000.**

---

## How to use

Paste the block below, then on the next line:

    SYSTEM: <system name, environments (dev/staging/prod)>
    REPO: <code + IaC + CI repo paths>
    AUDIENCE: <internal SRE / outsourced ops / new hire / acquirer>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a production operations runbook bundle. The §11
REPORT is the deliverable. Three rules:

(1) Runbooks are written for the on-call engineer at 3 AM with a
    pager and a stale memory. Step-by-step, copy-pasteable,
    unambiguous.
(2) Every command, alert threshold, dashboard URL, and contact must
    be real and verified. Inventing an alert query or a dashboard
    name is the worst possible runbook failure mode.
(3) The bundle is a living artefact — include version footer and
    re-review cadence.

1. SCOPE & ARCHITECTURE OVERVIEW
   System name, environments, brief architecture (one paragraph +
   Mermaid diagram if appropriate). Reference ARCH report if one
   exists for fuller detail.

2. STARTUP / SHUTDOWN
   Cold-start procedure from a zero state (rare but needed for DR):
     - Order of service start-up
     - Pre-flight checks
     - Smoke tests
   Graceful shutdown procedure (e.g. for planned migration):
     - Drain order
     - Connection close timing
     - Data consistency checks

3. DEPLOYMENT
   - Standard deploy path (CI/CD pipeline reference)
   - Manual deploy steps (if/when needed)
   - Pre-deploy checks
   - Post-deploy verification (health endpoints, smoke tests)
   - Deploy windows and freeze policy
   - Who can approve / who can execute

4. ROLLBACK
   - Detection: how do we know we need to roll back?
   - Decision authority: who calls it?
   - Rollback procedure: exact commands
   - Data implications: forward-only migrations + rollback strategy
   - Communication: who notifies whom

5. MONITORING & ALERTS
   - Key dashboards (URL + what to look at)
   - Critical alerts (alert name, threshold, runbook link, severity)
   - Health endpoints and what their responses mean
   - Log query starting points for common questions

6. COMMON INCIDENTS  ← the high-value section
   For each known incident class, a mini-runbook:
     - Symptom (what the on-call sees)
     - Detection signal (alert / customer report)
     - Initial diagnosis steps (3–5 commands / dashboard checks)
     - Common causes ranked by frequency
     - Resolution steps per cause
     - Escalation trigger (when to wake someone up)
   Typical classes: high latency, elevated error rate, queue backup,
   storage near capacity, certificate expiring, secret rotation,
   downstream dependency down, cache stampede, hot partition,
   database failover.

7. ESCALATION MATRIX
   - On-call rotation (link to schedule)
   - L1 → L2 → L3 trigger conditions
   - Subject-matter experts per subsystem (role, not name)
   - External contacts (cloud provider TAM, third-party vendor support,
     legal for breach notification)
   - Communication channels (incident channel name, status page, customer
     comms template)

8. BACKUP & RECOVERY
   - What's backed up, where, retention, encryption
   - RPO and RTO targets
   - Restore procedure (DB, file storage, config)
   - DR test cadence and last test result

9. SECRETS & ACCESS
   - Secrets management system in use
   - Rotation cadence per secret class
   - Emergency rotation procedure (compromised secret)
   - Access request / revocation procedure

10. KNOWN GOTCHAS
    The 5–15 things only the original team knows:
      - "The X service must be restarted before Y after a Z change"
      - "Queue Q backs up if Z exceeds N — pre-emptive scaling rule"
      - "Customer X is special-cased in Y because of historical
        contract"
    These are the value an outsourced team would otherwise discover
    by causing incidents.

11. REPORT  ← the deliverable
    --- REPORT START ---
    # Operations Runbook — <System>
    **Client:** <…>   **Version:** 1.0   **Date:** <…>
    **Re-review by:** <date + 6 months>

    ## How to use this runbook
    ## Architecture Overview        (§1)
    ## Startup & Shutdown           (§2)
    ## Deployment                   (§3)
    ## Rollback                     (§4)
    ## Monitoring & Alerts          (§5)
    ## Incident Runbooks            (§6 — one subsection per class)
    ## Escalation                   (§7)
    ## Backup & Recovery            (§8)
    ## Secrets & Access             (§9)
    ## Known Gotchas                (§10)
    ## Appendix A: Command cheat-sheet
    ## Appendix B: Dashboard URLs
    ## Appendix C: Change log of this runbook
    ## Limitations                  (§12, verbatim)
    --- REPORT END ---

12. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This runbook was produced by an AI agent from analysis of the
     system code, infrastructure-as-code, monitoring configuration,
     and where available, historical incident data on <date>.
     Commands and dashboard references reflect the system state at
     production-version <X>; verify before relying on them in an
     incident. Items marked [unknown — confirm with the original
     team] in §10 are gaps the agent could not bridge from code
     alone; treat them as interview targets, not authoritative.
     This runbook becomes stale on the first material change to the
     system — schedule a 6-month re-review and update after every
     post-incident review touching the runbook sections."

HARD RULES
- Every command in §3, §4, §6 is real and verified (it exists, the
  flags are valid, it has been used in the system or an analogous one).
- Every dashboard URL, alert name, and metric is verified to exist
  in the client's monitoring stack. Otherwise it's [TBD — link
  during onboarding].
- §6 incident runbooks include initial diagnosis BEFORE any
  destructive action. Restarting first and asking why later is how
  outages last twice as long.
- §10 GOTCHAS is included even if [no documented gotchas found —
  schedule interviews].
- Respond in the language of the AUDIENCE input.

SYSTEM:
REPO:
AUDIENCE:
CLIENT:
```

---

## What the buyer gets

A 30–60 page operations handbook the client's ops team (or an
outsourced ops vendor) can use to run the system without bothering the
original developers. Particularly valuable during M&A integration,
team-transition periods, and 24/7 outsourcing engagements where the
original team isn't on call.
