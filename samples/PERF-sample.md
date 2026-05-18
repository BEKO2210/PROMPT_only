# Sample: PERF audit for fictional DTC e-commerce site

**Source prompt:** `PERF.md`
**Engagement:** Performance audit for "Vellum Commerce" (fictional
direct-to-consumer clothing brand, headless-Shopify + Next.js
frontend + Node.js backend; ~€18M GMV/year; checkout latency
complaint from CS).

All entities, numbers, and findings are **fictional**.
Demonstrates measurement-grounded methodology — no recommendations
without measured evidence.

---

# Performance Audit

**Client:** Vellum Commerce GmbH
**Scope:** vellum.shop public site + checkout API
**Date:** 2026-05-09
**Auditor:** [Your firm]

---

## Executive Summary

**Headline: p95 checkout-API latency 1 850ms; achievable 420ms
with 3 prioritised fixes.**

Vellum's checkout has 3 dominant performance issues, all in the
backend API. Frontend (Next.js SSR) is healthy. Database
infrastructure is healthy. The issues are application-layer.

**Top 3 wins ranked by ROI**
1. Eliminate N+1 in cart-summary endpoint (3.4× speedup,
   1 dev-day effort)
2. Add Redis cache for product-detail enrichment (2.1× speedup
   on cold paths, 2 dev-days)
3. Move synchronous shipping-rate calls to async with cached
   defaults (1.8× speedup on EU customers, 3 dev-days)

If all three ship: p95 checkout 1 850ms → 420ms (~77% reduction).
Estimated revenue impact: 1% conversion lift per 100ms checkout
latency reduction (industry benchmark) = ~1.4% lift × €18M GMV =
**~€250k/year**, payback within 60 days at current engagement
pricing.

**Did NOT measure:** mobile-app performance, third-party
checkout-extension scripts, EU vs US edge latency variation
beyond mid-day sample.

---

## Workload & Methodology

Workload tested:
- Production-like staging environment, EU west region
- Synthetic load: 50 concurrent virtual users, 5 min sustained,
  representative basket sizes (1–6 items, 73% / 19% / 8% mix)
- Real user monitoring from CrUX field data, 30-day window

Tools and versions:
- k6 0.50.1 (load generation)
- Lighthouse 12.0 (synthetic frontend)
- Chrome DevTools, simulated 4G + 100ms RTT
- Postgres `pg_stat_statements` extension
- Node.js built-in performance hooks + clinic.js 13.0
- `pprof` for Node CPU profiling

---

## Baseline Measurements

### Checkout API (the focus)

| Metric | Current | Target |
|---|---|---|
| Latency p50 | 720 ms | <300 ms |
| Latency p95 | 1 850 ms | <500 ms |
| Latency p99 | 3 200 ms | <800 ms |
| Throughput sustained | 86 req/s | 200+ |
| Error rate (5xx) | 0.34% | <0.10% |

### Cart-summary endpoint (sub-call within checkout)

| Endpoint | Current p95 | Calls per checkout |
|---|---|---|
| `GET /api/cart/summary` | 940ms | 1 |
| `GET /api/products/{id}` | 180ms each | 1–6 |
| `POST /api/shipping/rates` | 620ms | 1 |
| `GET /api/tax/calculate` | 110ms | 1 |

### Frontend (Core Web Vitals from CrUX)

| Metric | Mobile | Desktop |
|---|---|---|
| LCP p75 | 2.1s ✅ | 1.4s ✅ |
| INP p75 | 180ms ✅ | 90ms ✅ |
| CLS p75 | 0.04 ✅ | 0.02 ✅ |

Frontend is healthy. Backend dominates.

---

## Hotspots

Profiler (`pprof` + `pg_stat_statements`) attributes total
checkout-flow time:

| Path | % time | Files |
|---|---|---|
| Cart-summary DB calls | 41% | `services/cart/summary.ts:78-142` |
| Product-detail enrichment | 23% | `services/products/detail.ts:55-89` |
| Shipping-rate API call | 19% | `services/shipping/rates.ts:34-67` |
| Tax calculation | 6% | `services/tax/calculate.ts:22-48` |
| Other backend | 8% | various |
| Network / serialization | 3% | — |

The top 3 paths account for 83% of latency. Optimization should
focus there.

---

## Root Cause Analysis

### Hotspot 1 — Cart-summary N+1
- `services/cart/summary.ts:78-142`: for each cart item, separate
  query to `products` table + separate query to `inventory` table
- 6-item cart = 13 queries instead of 1 with `JOIN` or 2 with
  batched `WHERE id IN (...)`

### Hotspot 2 — Product-detail enrichment
- `services/products/detail.ts:55-89`: every product-detail call
  fetches the same brand / category / variant data from upstream
  Shopify GraphQL
- Cache TTL effectively 0; no Redis layer; Shopify API has 200ms
  P50 round-trip

### Hotspot 3 — Shipping-rate synchronous wait
- `services/shipping/rates.ts:34-67`: synchronous call to
  third-party rate aggregator; blocks checkout response
- 92% of requests can use cached rates (region + weight bands
  rarely change); current implementation calls fresh every time

---

## Recommended Optimizations

| ID | Recommendation | Speedup (range) | Effort | Risk | ROI |
|---|---|---|---|---|---|
| OPT-1 | Replace N+1 with batched query + JOIN | **3.0–3.8×** on §3.1 | 1 day | LOW | 38 |
| OPT-2 | Add Redis cache (TTL 5 min) for product enrichment | **1.8–2.4×** on §3.2 | 2 days | LOW | 12 |
| OPT-3 | Move shipping-rate to async with cached defaults; refresh in background | **1.6–2.0×** on §3.3 | 3 days | MEDIUM | 6 |
| OPT-4 | Postgres index on `cart_items(cart_id, product_id)` | 1.3× on §3.1 | 0.5d | LOW | 3 |
| OPT-5 | Tax-calc memoisation per (postcode, basket-hash) | 1.4× on §3.4 | 1d | LOW | 1.8 |

Top 3 stack: cumulative checkout p95 1 850ms → ~420ms.

---

## Limitations

This audit was produced by an AI agent on 2026-05-09 from
analysis of staging environment using k6 / Lighthouse / pprof.
Production behaviour may differ if hardware, network, dataset
shape, or concurrency profile differs from the audited workload.
Estimated speedups are forecasts based on analogous fixes and
profiler attribution; actual results require post-deployment
measurement. This audit did not include: database tuning,
CDN configuration review, third-party-script analysis, or mobile
app performance.

[Full disclaimer per `_LEGAL/AUDIT-DISCLAIMER.md` +
`_LEGAL/ESTIMATES-NOT-GUARANTEES.md`]

---

*Report length in actual delivery: 22 pages. Sample shows ~30%.
Engagement fee: €7 200. After OPT-1+2+3 shipped (3 weeks), p95
measured at 480ms — within projected range. Q3 conversion lifted
1.6% vs Q2 cohort, broadly matching the estimate at ~€290k
annualised.*
