# THREATMODEL — STRIDE Threat Model (verkaufbares Deliverable)

Design-level security analysis using STRIDE: identifies threats from
architecture before they become bugs in code. Complements AUDIT (which
is code-level) and is required for ISO 27001 §A.8.27, SOC2 CC7.1, and
serious B2B procurement reviews.

**Realistic engagement price: €3 000 – 12 000.**

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <system to model — name, repos, environments>
    DEPTH: <component-level | container-level | system-level>
    CLIENT: <client name — optional>

---

## The prompt (copy from here)

```
You are producing a STRIDE-based Threat Model from system architecture.
The §10 REPORT is the deliverable. Three rules:

(1) Threats are derived from architecture and trust boundaries — not
    from "what if attackers". Anchor every threat to a data flow that
    crosses a trust boundary.
(2) Cite code or config evidence for every claim about current controls.
    Inventing controls turns the threat model into fiction.
(3) Mark threats as MITIGATED, PARTIAL, or UNMITIGATED with evidence
    for each rating.

1. SCOPE
   System name, version/SHA, in-scope components, out-of-scope
   components, environments (dev/staging/prod), assumed threat actors
   (script kiddie / opportunistic / targeted / nation-state). Cap
   discovery at 30 tool calls.

2. ASSETS
   What is worth protecting? Categories:
     - DATA: PII, payment data, IP, secrets, credentials
     - FUNCTIONALITY: critical user flows, admin functions, payment
       processing, content publishing
     - REPUTATION: defacement risk, abuse-by-attacker risk, regulatory
       penalty exposure
     - AVAILABILITY: revenue-generating uptime
   Per asset: business impact tier (Critical / High / Medium / Low).

3. ACTORS
   Who interacts with the system? Map all of:
     - End-users (authenticated, unauthenticated)
     - Admin / privileged users
     - Integrators (API consumers, webhook receivers)
     - Internal services (background workers, schedulers)
     - External services (payment, email, AI providers, analytics)
     - Threat actors (per §1 assumed actors)

4. TRUST BOUNDARIES
   Where does authority change? Each boundary is a high-value threat
   surface. Examples:
     - Internet ↔ web tier
     - Web tier ↔ application tier
     - Application ↔ database
     - Application ↔ third-party API
     - User session ↔ admin session
     - Tenant A ↔ Tenant B (multi-tenancy)
   Cite the code/config that enforces each boundary (or note that
   nothing does — that's a finding).

5. DATA FLOW DIAGRAM
   Mermaid diagram showing actors, processes, data stores, data flows,
   and trust boundaries. Use the standard DFD notation:
     - Rectangles: external entities
     - Circles: processes
     - Parallel lines: data stores
     - Arrows: data flows
     - Dashed lines: trust boundaries

6. THREATS  (STRIDE per element)
   For each process and data flow, walk STRIDE:
     - S — Spoofing: identity forgery
     - T — Tampering: data integrity attack
     - R — Repudiation: actor denies action
     - I — Information disclosure: confidentiality breach
     - D — Denial of service: availability attack
     - E — Elevation of privilege: authorisation bypass
   For each identified threat:
     - ID: THR-001 …
     - Element threatened
     - STRIDE category
     - Threat description (one sentence)
     - Affected asset(s) from §2
     - Likelihood: LOW / MED / HIGH (with rationale)
     - Impact: LOW / MED / HIGH (from §2 asset tier)
     - Risk = Likelihood × Impact, presented as cell colour
   Cap at ~30 threats — rank if more.

7. CURRENT CONTROLS
   For each §6 threat, what controls exist today (cite code/config)?
     - Authentication mechanism
     - Authorisation checks
     - Input validation
     - Rate limiting
     - Encryption in transit / at rest
     - Audit logging
     - Monitoring / alerting
   Status per threat: MITIGATED / PARTIAL / UNMITIGATED with evidence.

8. RECOMMENDATIONS
   For each PARTIAL or UNMITIGATED threat:
     - Recommended control
     - Effort estimate (S/M/L)
     - Residual risk after implementation

9. EXECUTIVE SUMMARY  (≤300 words, place atop §10)
   - Top 5 threats ranked by risk
   - Posture summary by STRIDE category
   - Quick wins (high risk + low effort to mitigate)
   - Architectural changes recommended (high risk + design-level fix)

10. REPORT  ← the deliverable
    --- REPORT START ---
    # Threat Model — <System>
    **Client:** <…>   **Commit:** <SHA>   **Date:** <…>

    ## Executive Summary       (§9)
    ## Scope & Methodology     (§1, STRIDE framework reference)
    ## Assets                  (§2, table)
    ## Actors                  (§3)
    ## Trust Boundaries        (§4)
    ## Data Flow Diagram       (§5, Mermaid)
    ## Threat Register         (§6, table — full)
    ## Current Controls        (§7)
    ## Recommendations         (§8, ordered by risk)
    ## Residual Risk Summary   (after recommendations applied)
    ## Limitations             (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This threat model was produced by an AI agent from static analysis
     of the codebase at commit <SHA> on <date>. It is a design-level
     security analysis — it is NOT a penetration test, NOT a code-level
     vulnerability assessment (see AUDIT for that), and NOT a substitute
     for adversarial testing. Likelihood and impact ratings apply
     standard heuristics without the client's specific threat
     intelligence context. Controls marked MITIGATED reflect what is
     visible in code and configuration; operational controls
     (procedures, training, monitoring response) require interviews
     to verify. This document supports ISO 27001 §A.8.27 / SOC2 CC7.1
     evidence but should be reviewed and adopted by the system owner
     before being treated as the authoritative threat model."

HARD RULES
- Every threat has likelihood AND impact rationale, not just a number.
- Every "MITIGATED" claim cites code or config evidence. Otherwise
  PARTIAL or UNMITIGATED.
- DFD in §5 is Mermaid (versionable, renders in GitHub and pandoc).
- Cap threats at 30 in the executive view; full register stays in the
  table. Investment committees skim — give them the top by risk.
- Respond in the language of the SCOPE input.

SCOPE:
```

---

## What the buyer gets

A 15–30 page PDF with a Mermaid DFD, threat register, and a residual-risk
view that maps cleanly to ISO 27001 / SOC2 audit evidence requirements.
Architects use it as a design-review artefact; security teams use it as
the input to penetration-test scoping.
