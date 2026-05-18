# Technical Audit — Standard Disclaimer

Used in AUDIT, PERF, ARCH, COST, K8S-AUDIT, OBSERVABILITY,
ANALYTICS-AUDIT, SEO, RAG-AUDIT, DATA-PIPELINE-AUDIT,
DEPENDENCY-UPGRADE, CONVERSION-AUDIT.

---

## Canonical text (substitute bracketed values per engagement)

> This audit was produced by an AI agent on [DATE] from analysis of
> the [system / codebase / pipeline / website] at [commit SHA /
> version / point in time]. Findings reflect the state at that point;
> dynamic conditions (runtime behaviour, load patterns, third-party
> service changes, configuration drift) may produce different
> results at other times or under different conditions.
>
> Metrics, ratings, and recommendations are based on [the
> measurements / heuristics / industry benchmarks] cited in the
> report. Estimates of impact (latency improvement, conversion lift,
> cost saving) are forecasts based on analogous cases and pattern
> recognition; actual results require post-implementation
> measurement.
>
> This audit does not include: [list explicit out-of-scope items —
> e.g. penetration testing, formal compliance certification,
> production load testing, user-experience research]. For [scope
> items outside this audit], engage [appropriate specialist /
> certified provider].

## Why this language

- "AI agent" disclosure (per `AI-ASSISTED-METHODOLOGY.md`) is
  mandatory
- Time-stamping protects against subsequent changes invalidating
  findings
- "Estimates are forecasts" prevents over-reliance on impact
  numbers
- Explicit out-of-scope list prevents scope-creep claims later

## Variants

### For audits that involve real measurement (PERF, RAG-AUDIT)
Add: "Measurements were taken in [environment] using [tools and
versions]. Production behaviour may differ if hardware, network,
dataset shape, or concurrency profile differs from the audit
workload."

### For audits with cost analysis (COST, OBSERVABILITY)
Add: "Cost estimates use the client's stated provider pricing as
of [DATE]; provider pricing changes alter the economic baseline."

### For audits involving regulatory standards (SBOM, SEO)
Add: "Standards referenced reflect their state as of [DATE];
regulatory or industry standards may update without notice."
