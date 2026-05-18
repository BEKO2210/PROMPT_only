# OBSERVABILITY — Telemetry Audit & Roadmap (verkaufbares Deliverable)

Audits a system's observability stack (logs, metrics, traces, events)
and recommends improvements ranked by debugging-time saved. Most
production systems have either too little signal (can't debug
incidents) or too much (alert fatigue + huge cost). This finds the
gap.

**Realistic engagement price: €3 000 – 12 000.**

---

## How to use

Paste the block below, then on the next line:

    SYSTEM: <system name, environments, traffic order of magnitude>
    STACK: <observability tools — Datadog/New Relic/Grafana/CloudWatch/etc.>
    PAIN: <symptom driving this audit: alert fatigue, slow incident response, cost, blind spots>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing an Observability Audit. The §9 REPORT is the
deliverable. Three rules:

(1) Observability is for the SREs' future selves debugging an
    incident at 3 AM. Evaluate every signal by that test.
(2) MELT (Metrics, Events, Logs, Traces) coverage is the framework.
    Identify what's covered AND what's missing across all four.
(3) Cost and signal are inseparable. Every "more telemetry"
    recommendation states an estimated ingest-cost delta.

1. SCOPE & CURRENT STACK
   - System(s) audited, environments, request volume order of
     magnitude
   - Observability stack: what's used for metrics, traces, logs,
     events, RUM, profiling
   - Estimated monthly observability spend (if known)

2. INSTRUMENTATION INVENTORY
   - Logging: framework(s), log levels in use, structured-log
     coverage, correlation-ID presence
   - Metrics: client library, named metrics catalogue (top 20 by
     volume), high-cardinality offenders
   - Tracing: instrumentation library (OpenTelemetry / vendor-
     specific), traced endpoints percent, sampling rate
   - Events / audit log: business events vs system events
   - Frontend / RUM: Core Web Vitals collection, error tracking
   - Profiling: continuous profiling enabled? where?
   Cite files / dashboards / configs as evidence.

3. CRITICAL PATH COVERAGE
   For the 3–5 most critical user journeys / business operations,
   does the telemetry let you answer:
     - Is it working RIGHT NOW? (live signal)
     - When did it stop working? (historical signal)
     - What broke first? (causal chain via traces)
     - How many users affected? (segmentable)
     - Was it caused by a recent change? (deploy / config correlation)
   Per journey: COVERED / PARTIAL / BLIND.

4. SIGNAL QUALITY
   - Cardinality offenders: metrics with too many label
     combinations (cost amplifier)
   - Log noise: top log message templates by volume — are they
     useful?
   - Trace coverage: % of requests sampled at each tier
   - Alert quality: false-positive rate (if visible), MTTR by
     alert (if visible)

5. SLO READINESS
   Can you compute SLIs (Service Level Indicators) from existing
   signals?
     - Availability: success-rate metric exists for each critical path?
     - Latency: percentile metrics (not just averages)?
     - Quality: per-feature health beyond up/down?
   If SLOs aren't defined, propose 3–5 starter SLOs grounded in §3
   critical paths.

6. GAPS  (ordered by debug-time impact)
   For each gap:
     - Description (what we can't see today)
     - Incident class it would unblock
     - Recommended instrumentation
     - Estimated debug-time saved per incident
     - Estimated ingest-cost delta (€/month range)

7. COST OPTIMISATION
   Often a second-order finding:
     - Log lines never queried
     - Metrics with retained granularity beyond use case
     - Trace sampling too high for value
     - Retention windows beyond regulatory / debugging need
   Per item: estimated €/month savings.

8. ALERTING REVIEW
   - Currently active alerts and recent fire frequency
   - Alerts that fire and are routinely ignored (noise)
   - Alerts that should exist but don't (gap)
   - Runbook coverage for each alert (link to RUNBOOK section if
     produced alongside)

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Observability Audit — <System>
   **Client:** <…>   **Stack:** <…>   **Date:** <…>

   ## Executive Summary             (≤300 words: top 3 blind spots,
                                     top 3 cost wastes, SLO readiness,
                                     estimated MTTR improvement)
   ## Scope & Stack                 (§1)
   ## Instrumentation Inventory     (§2)
   ## Critical Path Coverage        (§3, table)
   ## Signal Quality                (§4)
   ## SLO Readiness                 (§5)
   ## Gaps                          (§6, ranked by debug impact)
   ## Cost Optimisation             (§7, ranked by savings)
   ## Alerting Review               (§8)
   ## Recommendations               (consolidated: ROI = debug-time-
                                     saved + cost-saved ÷ effort)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of the codebase, observability configuration, and where
     available, dashboards / alert configurations and a sample of
     historical incident data. Signal quality assessments reflect
     the state at audit time; load patterns and seasonal effects
     may produce different conclusions at other times of year. Cost
     estimates use the client's stated provider pricing as of
     <date>; provider pricing changes may shift recommendations.
     This audit does not assess: data privacy of logs (see GDPR /
     HIPAA), SIEM-grade security analytics, or compliance-driven
     retention requirements that may force longer retention than
     debugging value alone justifies."

HARD RULES
- Every gap in §6 has a debug-time-saved-per-incident estimate. Vague
  "would be nice to have" is not a gap.
- Every cost-optimisation in §7 has a €/month RANGE.
- §5 SLO recommendations are grounded in §3 critical paths; do not
  invent SLOs for paths the business doesn't care about.
- Respond in the language of the SYSTEM input.

SYSTEM:
STACK:
PAIN:
CLIENT:
```

---

## What the buyer gets

A 15–30 page report ranked by debug-time saved per incident. The cost
optimisation section frequently identifies €5–20k/month in waste at
mid-size SaaS clients — often paying for the engagement multiple times
over in the first quarter alone.
