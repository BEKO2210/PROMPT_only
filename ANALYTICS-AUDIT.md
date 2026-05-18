# ANALYTICS-AUDIT — Event-Tracking & Analytics Audit (verkaufbares Deliverable)

Audits a website / app's analytics setup (GA4 / Plausible / Mixpanel /
Amplitude / custom): event taxonomy, missing events, broken events,
duplicate tracking, attribution model, consent handling, dashboard
gaps. Most clients are measuring 60% of what matters and 40% wrong.

**Realistic engagement price: €1 500 – 5 000.**

---

## How to use

Paste the block below, then on the next line:

    SITE: <URL / app name>
    STACK: <GA4 | Plausible | Mixpanel | Amplitude | Segment | custom>
    ACCESS: <admin view | read-only | none>
    KEY_CONVERSIONS: <what conversions matter — signup, demo, purchase>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing an analytics audit. The §9 REPORT is the
deliverable. Three rules:

(1) Bad data > no data > fake confidence in bad data. Find what's
    broken first; fix taxonomy second; add new tracking last.
(2) Every claim cites the actual event / property / report. Vague
    "analytics need improvement" is not a finding.
(3) Consent and privacy first. EU sites without proper consent
    management are tracking illegally.

1. SCOPE & STACK INVENTORY
   - Analytics tools in use (primary + secondary)
   - Implementation method (gtag / GTM / segment / native SDK)
   - Domains / subdomains / apps covered
   - Last meaningful change to tracking (date)
   - Consent management platform (CMP) in use

2. EVENT TAXONOMY AUDIT
   - List of all tracked events
   - Naming consistency (snake_case vs camelCase vs mixed)
   - Event count: too many (noise) or too few (gaps)?
   - Property consistency (same event, different properties
     across pages)
   - Reserved-name conflicts (GA4 reserved event names)

3. CONVERSION TRACKING  (the highest-stakes section)
   For each KEY_CONVERSIONS event:
     - Is it tracked? Where (page / event / both)?
     - Deduplication: are signup + purchase counted once each, or
       double-counted via multiple firings?
     - Value parameter set where applicable (purchase value,
       lead value)
     - Currency consistent
     - Attribution windows (default vs configured)
     - Server-side vs client-side firing (ad-blocker resilience)

4. BROKEN EVENTS / DATA QUALITY
   Real audit — sample real-time data:
     - Events firing more or less than expected
     - 404 events from broken URLs
     - Bot traffic mixed in (filter view configured?)
     - Internal traffic mixed in (employee IPs filtered?)
     - Self-referrals
     - UTMs being clobbered by redirects
     - Cross-domain tracking broken
     - PII leaking into URLs / event parameters (GA4 violation)

5. ATTRIBUTION MODEL
   - Current attribution model (last-click / first-click /
     data-driven / position-based)
   - Cross-channel attribution: paid + organic + direct + email
     all connected?
   - View-through vs click-through counting
   - Lookback window appropriate to sales cycle

6. AUDIENCES / SEGMENTS
   - Are useful audiences defined for ad platforms?
     (signup-but-no-purchase, paid-user, churned)
   - Are they fresh (regenerated weekly)?
   - GDPR: audience-building consent captured?

7. CONSENT & PRIVACY  (DSGVO / ePrivacy / CCPA)
   - Consent banner present and configured properly
   - Tracking blocked until consent given
   - Consent mode v2 implemented for GA4 (post-March 2024
     requirement for EU)
   - IP anonymisation enabled
   - Data retention policy set (GA4 default 14 months — usually
     too long for some regulatory contexts)
   - Cross-border transfer mechanism documented (US-hosted
     analytics + EU users = SCC needed; see GDPR.md)
   - Data Processing Agreement on file

8. DASHBOARDS / REPORTING
   - Are dashboards in use, or do people open raw reports each
     time?
   - One-page exec dashboard exists? (KPI snapshot)
   - Funnel reports configured for KEY_CONVERSIONS?
   - Cohort retention reports?
   - Alerting on KPI anomalies?

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Analytics Audit — <Client>
   **Stack:** <…>   **Date:** <…>

   ## Executive Summary             (≤300 words: data-quality
                                     posture, top 5 fixes,
                                     compliance risks if any)
   ## Scope & Stack                 (§1)
   ## Event Taxonomy                (§2)
   ## Conversion Tracking           (§3 — most important section)
   ## Broken / Bad Data             (§4 — surface every item)
   ## Attribution                   (§5)
   ## Audiences / Segments          (§6)
   ## Consent & Privacy             (§7 — flag legal exposure)
   ## Dashboards / Reporting        (§8)
   ## Prioritised Fix List          (each: severity × ease)
   ## Recommended Taxonomy          (the event spec the client
                                     should adopt: event names,
                                     properties, types, expected
                                     values — a SSOT for future
                                     implementation)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of <STACK> with <ACCESS> level access. Findings reflect tracking
     behaviour at audit time; dynamic content, A/B-tested versions,
     and behaviour-based events may produce different results when
     re-audited. Compliance findings (consent, cross-border transfer)
     are advisory; specific compliance with EU/CA/US privacy law
     requires legal review (see GDPR.md). This audit does not include:
     marketing-attribution model validation (requires longitudinal
     traffic analysis), data-warehouse / BigQuery export setup, or
     custom-dashboard implementation."

HARD RULES
- Every finding cites the actual event, property, or report.
- §3 conversion tracking is the centre of mass — most clients
  have conversion-counting bugs they don't know about.
- §7 privacy findings flag legal exposure prominently — non-
  compliance is escalating priority post-2024.
- "Recommended taxonomy" in §9 is a usable spec, not a vague
  list — clients adopt it as their SSOT going forward.
- Respond in the language of the CLIENT input.

SITE:
STACK:
ACCESS:
KEY_CONVERSIONS:
CLIENT:
```

---

## What the buyer gets

A 15–25 page audit plus a recommended event taxonomy the client's
team adopts. Conversion-counting fixes alone often shift reported
ROI by 20–50% (in either direction) — what matters is finally having
trustworthy numbers.
