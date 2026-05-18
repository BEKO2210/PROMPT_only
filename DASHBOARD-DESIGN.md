# DASHBOARD-DESIGN — Executive Dashboard from Raw Data (verkaufbares Deliverable)

Designs an executive or operational dashboard from raw data sources:
KPI selection, visualization choices, layout, alerting thresholds,
refresh cadence. Output is a complete spec the client's analytics
team builds, or a working dashboard (Metabase / Looker / Mode /
Superset query templates).

**Realistic engagement price: €2 000 – 10 000.**

---

## How to use

Paste the block below, then on the next line:

    AUDIENCE: <CEO | revenue ops | product team | engineering | board>
    GOAL: <decisions this dashboard must support>
    DATA_SOURCES: <where the data lives: warehouse, GA4, Stripe, etc.>
    PLATFORM: <Metabase | Looker | Mode | Superset | Tableau | Power BI>
    REFRESH: <real-time | daily | weekly>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are designing a dashboard. The §9 REPORT is the deliverable.
Three rules:

(1) DECISIONS DRIVE DESIGN. Every chart on the dashboard answers
    a decision someone has to make. Charts without a decision-link
    are noise.
(2) ABOVE-FOLD IS SCARCE. The 3–5 numbers the AUDIENCE looks at
    every morning belong at the top. Detail follows.
(3) SLOWER IS BETTER FOR EXECS. Daily-refresh exec dashboards
    encourage strategic thinking; real-time encourages reactivity.

1. DECISIONS TO SUPPORT
   What decisions does the AUDIENCE make using this dashboard?
   Examples:
     - CEO: how is the business doing this week; where to push?
     - Revenue ops: which deals are at risk; where's pipeline
       breaking?
     - Product: which features matter; what's churning users?
   List 3–7 specific decisions. Every chart maps to at least one.

2. KPI SELECTION
   - NORTH STAR: the single metric this dashboard's audience
     optimises (revenue, activation, retention, NPS — pick ONE)
   - INPUT METRICS: 3–5 that drive the North Star (the levers)
   - HEALTH METRICS: 3–5 leading-indicator early warnings
     (churn signal, latency, satisfaction)
   - CONTEXT METRICS: 2–4 for sense-making (period comparisons,
     ratios)
   Total 8–14 metrics on an exec dashboard. More = noise.

3. VISUALIZATION CHOICES
   Per metric, the right chart:
     - Single big number for KPIs (current value)
     - Sparkline + delta for trends (vs last period)
     - Bar chart for categorical comparison
     - Line chart for time series (no second y-axis ever)
     - Stacked bar for composition over time
     - Funnel for sequential conversion
     - Heatmap for cohort retention
     - Geo map only when geography is decision-relevant
   Avoid pie charts (>3 slices) and gauges (anti-pattern).

4. LAYOUT
   - Row 1 (above fold): NORTH STAR + 2–4 INPUT METRICS as big
     numbers
   - Row 2: trend charts for North Star + key inputs (last 30/90
     days)
   - Row 3: HEALTH METRICS (early warning panel)
   - Row 4+: detail / breakdowns (segments, regions, cohorts)
   - Footer: data freshness, refresh cadence, query owner
   No carousels. No tabs unless absolutely necessary.

5. THRESHOLDS & ALERTING
   Per metric, when does it warrant action?
     - Current value vs target
     - Current vs prior period (% change)
     - Anomaly threshold (e.g. ±2σ from rolling average)
     - Alerts (email / Slack) wired to threshold breaches

6. DATA SOURCES & QUERIES
   Per metric:
     - Source system (warehouse table, API, file)
     - Query / transformation (SQL / DAX / LookML / etc.)
     - Refresh cadence (real-time / hourly / daily / weekly)
     - Data quality caveats (known gaps, lag, sampling)

7. INTERACTIVITY
   Most exec dashboards over-invest in interactivity. Pick:
     - Static (best for exec — read in 3 minutes)
     - Filterable (best for ops — by team / region / product)
     - Drill-down (best for analyst — click to detail)
   Default for AUDIENCE = CEO/board: STATIC.

8. ANTI-PATTERNS TO AVOID
   Explicitly call out and remove:
     - Vanity metrics (followers, page views without conversion)
     - Real-time updates for slow-moving phenomena (annual revenue
       in real time)
     - 3D charts, gradient fills, decorative elements
     - Dashboards that require 5+ clicks to use
     - Stale dashboards still in use after the original question
       went away

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Dashboard Design — <Audience>
   **Client:** <…>   **Platform:** <…>   **Date:** <…>

   ## Executive Summary             (the dashboard's purpose in one
                                     paragraph)
   ## Decisions Supported           (§1 — first, anchors the
                                     design)
   ## Metric Catalogue              (§2, table: metric, definition,
                                     source, owner)
   ## Visualization Choices         (§3, per metric)
   ## Layout Specification          (§4, with wireframe / Mermaid
                                     diagram)
   ## Thresholds & Alerts           (§5)
   ## Queries / Sources             (§6 — for build team)
   ## Interactivity Model           (§7)
   ## Anti-Patterns Removed         (§8)
   ## Implementation Spec           (per PLATFORM, the queries /
                                     LookML / SQL / cards the build
                                     team implements)
   ## Maintenance                   (who owns it, what triggers
                                     review, when to deprecate)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This dashboard design was produced by an AI agent on <date>
     from the client's stated decision needs and data-source
     inventory. Metric definitions, query templates, and source
     mappings reflect the agent's analysis; the build team must
     validate against actual schema and metric definitions at
     implementation. Thresholds (§5) are starting points based
     on industry norms; they should be calibrated against the
     client's historical baseline once data is flowing. This
     report does not include: implementation labour, data-pipeline
     build (separate engagement — see DATA-PIPELINE-AUDIT.md),
     or training the AUDIENCE on dashboard use."

HARD RULES
- Every chart cites which §1 decision it supports. Charts without
  decision-link are deleted in §8 anti-pattern review.
- Above-fold metrics are capped at 5. More = nothing important.
- §6 queries are starting templates, not final code — the build
  team adapts to real schema.
- §7 interactivity model defaults to STATIC for CEO/board audience.
- Respond in the language of the AUDIENCE input.

AUDIENCE:
GOAL:
DATA_SOURCES:
PLATFORM:
REFRESH:
CLIENT:
```

---

## What the buyer gets

A complete dashboard spec the client's BI / analytics team
implements: KPI catalogue, layout wireframe, per-metric queries,
threshold/alert config. For audiences who currently get screenshots
of spreadsheets emailed weekly, this transforms decision-making.
