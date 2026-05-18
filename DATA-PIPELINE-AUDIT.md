# DATA-PIPELINE-AUDIT — Data-Pipeline Reliability + Cost Audit (verkaufbares Deliverable)

Audits a data pipeline (ETL / ELT / streaming) for reliability,
freshness, data quality, cost, monitoring, and ownership. Most
data teams have pipelines they wouldn't bet a quarter on but use
to make quarterly decisions.

**Realistic engagement price: €3 000 – 12 000.**

---

## How to use

Paste the block below, then on the next line:

    PIPELINE: <name, what it produces, downstream consumers>
    STACK: <ingestion + transformation + warehouse + orchestration tools>
    SLA: <freshness target, uptime target, data-quality target>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a data-pipeline audit. The §10 REPORT is the
deliverable. Three rules:

(1) Bad data > no data > silent bad data. Pipelines that silently
    deliver wrong numbers are worse than pipelines that fail loudly.
(2) Every claim cites a real pipeline component / DAG / model /
    job. "The transformations are inefficient" is not a finding.
(3) Cost-per-pipeline-run is a first-class output. Many pipelines
    have grown costs no one tracks.

1. SCOPE & ARCHITECTURE
   - Pipeline name, business purpose, downstream consumers
     (dashboards, ML models, applications)
   - Stack: ingestion (Fivetran / Airbyte / custom), transformation
     (dbt / Spark / custom SQL), warehouse (Snowflake / BigQuery /
     Redshift / Databricks / DuckDB / Postgres), orchestration
     (Airflow / Dagster / Prefect / cron / managed)
   - Sources: count, types, owners
   - Destinations: count, types, consumers
   - Cadence (real-time / micro-batch / hourly / daily / weekly)

2. RELIABILITY
   - Failure rate: % of runs failing over last 30/90 days
   - MTTR (mean time to recovery): how long between failure and
     restoration
   - Alert noise: false-positive alert rate
   - Backfill capability: can you recover from a 7-day outage
     cleanly?
   - Idempotency: are retries safe?
   - Dependency awareness: when source A goes stale, does pipeline
     B know?

3. FRESHNESS / SLA ADHERENCE
   Per critical table:
     - SLA (e.g. updated daily by 06:00 local)
     - Actual freshness over last 30 days (p50, p95, p99)
     - SLA breach count
     - Downstream impact when stale

4. DATA QUALITY
   - Test coverage (dbt tests / Great Expectations / custom)
     on critical models
   - Null-rate spikes (do you catch them?)
   - Schema drift detection
   - Row-count anomalies (sudden 50% drop = ingestion broken)
   - Uniqueness / referential integrity
   - Manual data-quality issues recently reported by users
     (these are the real signal — they tell you where tests are
     missing)

5. LINEAGE & DOCUMENTATION
   - Can you trace a metric from dashboard to source?
   - Is column-level lineage available?
   - Are critical models documented (what they mean, who owns)?
   - Tribal knowledge tax: how long for a new engineer to
     navigate?

6. COST
   - Warehouse compute spend by query/model
   - Ingestion vendor cost
   - Storage cost
   - Cost per pipeline run
   - Top 10 most-expensive queries / models
   - Idle compute (clusters running with no jobs)
   - Optimisation opportunities:
     - Materialisation strategy (view vs table vs incremental)
     - Partitioning / clustering
     - Result cache hit rate
     - Concurrency tuning

7. MONITORING & ALERTING
   - What's monitored? (job success/fail, freshness, row counts,
     query latency, cost)
   - Where alerts go (Slack / PagerDuty / email)
   - On-call rotation defined?
   - Runbook per critical pipeline failure?

8. ACCESS & GOVERNANCE
   - Who can read what (RBAC visible in warehouse)
   - PII fields in pipeline — protected appropriately?
   - Data retention vs compliance requirements (GDPR Art. 5(1)(e))
   - Audit logs of data access for sensitive tables

9. PEOPLE & OWNERSHIP
   - Owner per pipeline (named or "shared" = nobody)
   - Bus factor (how many people understand each pipeline)
   - Recent failures: did the owner know first or did a user
     report it?

10. REPORT  ← the deliverable
    --- REPORT START ---
    # Data Pipeline Audit — <Pipeline>
    **Client:** <…>   **Stack:** <…>   **Date:** <…>

    ## Executive Summary             (≤300 words: reliability
                                      posture, top 3 risks, monthly
                                      savings opportunity, top 3
                                      reliability fixes)
    ## Scope & Architecture          (§1)
    ## Reliability                   (§2)
    ## Freshness / SLA               (§3)
    ## Data Quality                  (§4)
    ## Lineage / Documentation       (§5)
    ## Cost Analysis                 (§6 — with top-cost-driver table)
    ## Monitoring / Alerting         (§7)
    ## Access / Governance           (§8)
    ## People / Ownership            (§9)
    ## Prioritised Recommendations   (reliability fixes + cost
                                      reductions, separately ranked)
    ## Limitations                   (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of the pipeline at <commit/version> with <access level>.
     Cost analysis uses billing data through <date>; provider
     pricing changes may shift recommendations. Data-quality
     findings reflect the test coverage at audit time; behaviour
     of new sources or evolving schemas may produce additional
     issues. This audit does not include: ML-feature-pipeline
     specific validation (model drift detection, training-serving
     skew), real-time / streaming pipeline tuning beyond visible
     configuration, or vendor-contract negotiation for warehouse
     spend reduction."

HARD RULES
- Every finding cites the actual DAG / model / job name.
- Reliability and cost findings are SEPARATELY ranked — different
  teams prioritise them.
- Top-cost queries are listed by name with monthly cost contribution.
- "Pipeline ownership: shared" is a finding, not an answer — flag it.
- Respond in the language of the CLIENT input.

PIPELINE:
STACK:
SLA:
CLIENT:
```

---

## What the buyer gets

A 20–30 page audit with parallel reliability and cost backlogs. Cost
findings often pay for the engagement within the first quarter;
reliability findings prevent the multi-day outage that would cost
10× the engagement fee.
