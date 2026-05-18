# METRICS-FRAMEWORK — North-Star + Metric Tree (verkaufbares Deliverable)

Builds a coherent metrics framework: north-star metric, supporting
metric tree, leading vs lagging indicators, per-team OKR mapping. Most
teams have 50 metrics they look at and zero they optimise. This fixes
that.

**Realistic engagement price: €2 000 – 8 000.**

---

## How to use

Paste the block below, then on the next line:

    COMPANY: <name, stage, business model>
    STRATEGY: <current 12-month strategic priorities>
    EXISTING_METRICS: <metrics in use today — paste a list>
    TEAMS: <teams that need metric ownership>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are building a metrics framework. The §8 REPORT is the
deliverable. Three rules:

(1) ONE NORTH STAR. Not two. Not "two if you count revenue and
    NPS". Optimising for two metrics means optimising for neither.
(2) A METRIC TREE BREAKS THE NORTH STAR INTO LEVERS. If a team
    can't see how their work moves the north star, they can't be
    accountable for it.
(3) LEADING > LAGGING for accountability. Revenue is lagging;
    pipeline coverage is leading. Teams optimise leading metrics
    because they can affect them.

1. NORTH-STAR SELECTION
   The single metric that, if maximised, captures the value the
   company creates for customers AND the value the company captures
   for itself.
   Candidates by business model:
     - Marketplace: GMV transacted, or matches completed
     - SaaS: monthly active organisations using core feature, or
       net revenue retention (depending on growth stage)
     - Consumer transactional: monthly purchasing customers
     - Media / content: weekly engaged hours, or paid subscribers
     - Enterprise: ARR retained, or wall-to-wall account expansion
     - Marketplace: net revenue (GMV × take rate − discounts)
   Reject pure vanity metrics (signups, page views, downloads).
   Reject pure lagging metrics (annual revenue, NPS without trend).
   Document the rejection criteria — clients will challenge.

2. METRIC TREE
   Decompose the north star into 2–4 layers:

   LAYER 1 (north star)
     ↓
   LAYER 2 (3–5 INPUT metrics — direct drivers)
     ↓
   LAYER 3 (10–20 HEALTH / LEADING metrics — team-owned levers)
     ↓
   LAYER 4 (operational metrics — what teams measure daily)

   Example for SaaS:
     - L1: Net new ARR
     - L2: New ARR (acquisition), Expansion ARR, Churn ARR
     - L3 (Acquisition): MQLs, MQL→SQL conversion, SQL→close,
       average deal size
     - L4 (Acquisition team): website visits, demo bookings, demo
       show rate, demo-to-trial conversion, trial-to-paid
   Every L3/L4 metric maps to an L2 driver. Orphan metrics get
   deleted.

3. METRIC DEFINITIONS
   Per metric:
     - Name (concise, unambiguous)
     - Definition (one sentence — what is included / excluded)
     - Calculation formula
     - Data source
     - Refresh cadence (real-time / daily / weekly / monthly)
     - Owning team
     - Type (north star / driver / leading / lagging / health)
     - Trend direction (higher = better, or lower = better)
     - Current baseline + target (with target date)

4. LEADING VS LAGGING CLASSIFICATION
   Per metric, label clearly:
     - LAGGING: outcomes (revenue, retention, NPS, customer count)
     - LEADING: predictive activity (pipeline, engagement,
       activation moments)
   Accountability lives on leading metrics. Leadership reviews
   lagging. Don't conflate.

5. TEAM OWNERSHIP & OKRs
   Per team in TEAMS input:
     - Which L3 metric is the team's primary OKR?
     - Which L4 supporting metrics does the team monitor?
     - How does the team's metric ladder up to L2 and ultimately
       L1?
     - What conflicts exist (one team's metric harming another's)?

6. ANTI-METRICS  (what NOT to measure)
   Metrics that look useful but distort:
     - Vanity metrics (followers, downloads, page views without
       conversion)
     - Sub-metrics that game easily (close rate without deal size
       → small-deal bias)
     - Composite scores (mixing unrelated dimensions into one
       number — loses signal)
     - Metrics with no clear owner
     - Metrics nobody can move

7. REVIEW CADENCE
   - Daily: operational dashboards (per team)
   - Weekly: L3 metrics + driver trend review (team standups)
   - Monthly: L2 metric review with leadership
   - Quarterly: north-star plus strategy alignment
   - Annual: full framework re-review (does the north star still
     fit?)

8. REPORT  ← the deliverable
   --- REPORT START ---
   # Metrics Framework — <Company>
   **Client:** <…>   **Date:** <…>

   ## Executive Summary             (≤300 words: the north star and
                                     why, the 3 most important
                                     drivers, who owns what)
   ## North-Star Metric             (§1, with rationale + rejections)
   ## Metric Tree                   (§2, with Mermaid diagram)
   ## Metric Definitions            (§3, full catalogue)
   ## Leading vs Lagging Map        (§4)
   ## Team Ownership                (§5, RACI-style)
   ## Anti-Metrics (Deprecate)      (§6, explicit list)
   ## Review Cadence                (§7)
   ## Migration Plan                (how to move from EXISTING_METRICS
                                     to this framework over 1
                                     quarter)
   ## Limitations                   (§9, verbatim)
   --- REPORT END ---

9. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "This framework was produced by an AI agent on <date> from the
    company's stated strategy and EXISTING_METRICS inventory. The
    framework reflects the strategic priorities at design time;
    material strategic shifts (pivots, M&A, market changes) require
    re-review. North-star selection is opinionated and assumes the
    business model as described; alternative business-model
    interpretations may yield a different north star. Targets in
    §3 are placeholders requiring leadership calibration against
    actual historical baselines. Metric definitions should be
    formally adopted by data leadership and embedded in the data
    warehouse / BI tools before being treated as canonical."

HARD RULES
- ONE north star. Refuse the "well actually we have two" argument
  in §1.
- Every L3/L4 metric maps to an L2 driver. Orphans deleted.
- Leading vs lagging labels are honest — most teams over-claim
  leading status to feel accountable.
- §6 anti-metrics is mandatory — explicit deprecation prevents
  zombie metrics surviving forever.
- Respond in the language of the COMPANY input.

COMPANY:
STRATEGY:
EXISTING_METRICS:
TEAMS:
CLIENT:
```

---

## What the buyer gets

A 15–25 page framework that becomes the company's measurement
constitution. The north-star selection alone often resolves months of
internal "what should we measure?" debate.
