# PERF — Performance-Audit mit echten Messungen (verkaufbares Deliverable)

Produces a Performance Audit Report grounded in numbers, not vibes:
baseline measurements, ranked hotspots with `file:line` evidence, root
causes, and prioritised fixes with estimated speedup vs. effort.

**Realistic engagement price: €2 000 – 10 000.**

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <application area to audit, workload to test, success criterion>
    ACCESS: <what you can run — local? staging? prod read-only? load test ok?>
    CLIENT: <client name for report header — optional>

---

## The prompt (copy from here)

```
You are producing a formal Performance Audit. The §7 REPORT is the
deliverable. Findings without measurement are not findings — they are
opinions, and the client is not paying for opinions.

1. SCOPE & WORKLOAD
   Restate the scope and the workload under which you will measure.
   Examples: "checkout API at 100 RPS, mixed cart sizes", "ETL of one
   day of production data on staging cluster", "cold-start of the React
   SPA on a throttled 3G profile in Chrome DevTools". The workload must
   be reproducible — anyone re-running it must get comparable numbers.

2. BASELINE
   Measure CURRENT performance against the §1 workload. Required
   metrics where applicable:
     - Latency: p50, p95, p99 (ms)
     - Throughput: requests/sec or items/sec sustained
     - Resource use: CPU%, RSS memory, network I/O
     - Top DB queries by total time (if backend)
     - Lighthouse / Core Web Vitals (if frontend)
   Tools: `wrk`, `k6`, `ab`, `pytest-benchmark`, `cargo bench`,
   `pprof`, `py-spy`, `EXPLAIN ANALYZE`, Chrome DevTools, Lighthouse.
   PASTE THE REAL OUTPUT. No invented numbers — ever.

3. HOTSPOTS
   The 5–10 code paths that dominate the §2 measurements. For each:
     - file:line (the actual hot function/query)
     - % contribution to total time (from profiler)
     - call frequency × per-call cost (if relevant)

4. ROOT CAUSE
   For each §3 hotspot, ONE sentence: why is it expensive?
   Standard categories (use these where they fit):
     - N+1 query / chatty I/O
     - Missing index / wrong index used
     - Lock contention / serialized work
     - Synchronous wait on slow dependency
     - Algorithmic complexity (O(n²) where O(n) suffices)
     - Allocation / GC pressure
     - Network round-trip count
     - Render-blocking resource / unoptimised asset
     - Cold cache / no caching layer
   If you cannot name the cause, profile deeper — do not guess.

5. OPTIMIZATIONS
   For each §3 hotspot, the recommended fix:
     - Change in one sentence
     - Estimated speedup (with reasoning — analogous case, theoretical
       lower bound, or measured prototype). Use a RANGE.
     - Effort: S (≤1d), M (≤1w), L (>1w)
     - Risk: LOW / MED / HIGH (correctness or regression risk)
     - ROI score = midpoint(speedup) ÷ effort_days

6. EXECUTIVE SUMMARY
   ≤250 words, non-technical. Structure:
     - Headline: e.g. "p95 checkout latency 1 850 ms; achievable 350 ms"
     - Top 3 wins ranked by ROI (in plain language)
     - Estimated total improvement if top 3 are shipped
     - What was NOT measured (see §8)

7. REPORT  ← the deliverable
   --- REPORT START ---
   # Performance Audit
   **Client:** <…>   **Scope:** <…>   **Date:** <YYYY-MM-DD>

   ## Executive Summary       (§6)
   ## Workload & Methodology  (§1, plus tool versions)
   ## Baseline Measurements   (§2, real numbers in tables)
   ## Hotspots                (§3)
   ## Root Cause Analysis     (§4)
   ## Recommended Optimizations (§5, ordered by ROI desc)
   ## Limitations             (§8, verbatim)
   ## Appendix: Raw profiler output (the actual paste from §2)
   --- REPORT END ---

8. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
   "Measurements were taken on <environment> using <tools/versions> on
   <date>. Production behaviour may differ if hardware, network,
   dataset shape, or concurrency profile differs from the §1 workload.
   Estimated speedups are forecasts based on analogous fixes and
   profiler attribution; actual results require post-deployment
   measurement. This audit did not include <load testing / DB tuning /
   CDN config / [as applicable]>. ROI estimates assume the fix is
   implemented competently and does not introduce regressions."

HARD RULES
- No optimization listed in §5 without a §3 hotspot backing it. "Should
  be faster" without a measurement does not appear in the report.
- Estimated speedups are RANGES, never point values. "10–40x" is honest;
  "23.7x" is fake precision.
- Every file:line is verified before it appears in the report.
- The §8 disclaimer is mandatory and verbatim.
- Respond in the same language as the SCOPE input.

SCOPE:
```

---

## What the buyer gets

A measurement-grounded PDF: real numbers from real tools, top wins with
honest speedup ranges, and a remediation backlog the client's team can
execute in order. Pandoc-renders to a 8–15 page report.
