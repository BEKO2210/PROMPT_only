# Estimates Are Forecasts, Not Guarantees

Used wherever a deliverable contains numerical estimates of impact:
PERF (speedup ranges), COST (savings), MIGRATE (effort ranges),
DEPENDENCY-UPGRADE (effort), CONVERSION-AUDIT (lift estimates),
CHECKOUT-AUDIT (revenue lift), ONBOARDING-AUDIT (activation lift),
FINE-TUNE-PLAN (quality lift).

---

## Canonical text

> All estimates of impact in this report — including [speedup
> ranges / cost savings / effort estimates / conversion lifts /
> revenue improvements / activation rate changes] — are **forecasts**
> based on:
> - analogous-case pattern matching from similar systems / workloads
> - industry benchmarks cited where applicable
> - the AI agent's analysis of the specific factors visible at
>   audit time
>
> Actual outcomes require **post-implementation measurement on the
> client's real traffic / workload / users**, run against an
> appropriate control (A/B test, before / after with cohort
> normalisation, holdout group).
>
> Estimates are presented as **ranges (best / likely / worst)**
> rather than point values to reflect this honest uncertainty.
> Single-point estimates ("a 23.7% lift") are not provided because
> the underlying analysis does not support that precision.
>
> Factors that may cause actual results to differ materially from
> estimates include: traffic-source mix, seasonal effects, audience
> changes, infrastructure changes, foundation-model updates (for
> AI systems), provider pricing changes (for cost estimates), and
> implementation quality.

## Why this language

The single highest-frequency complaint against consultants is
"you promised X% improvement and we only got Y%." This text:

- Frames every number as a forecast, never a promise
- Names the verification mechanism (real measurement, not
  consultant-claim)
- Anchors honesty in the range format
- Lists named factors that can invalidate forecasts

## Engagement-side requirements

When citing estimates in a sales conversation BEFORE the engagement:
1. Use the same range language ("we typically see 20–40% lift in
   similar engagements" — not "we'll get you 35%")
2. Tie any success-fee component to **measured** outcomes against
   a defined control, not claimed outcomes
3. Reserve the right in the engagement agreement to require the
   client provide measurement access for fee triggers
