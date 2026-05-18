# DORA — EU Digital Operational Resilience Act (verkaufbares Deliverable)

DORA (Regulation 2022/2554) applies to EU financial entities and their
critical ICT third-party providers since 17 January 2025. Banks,
fintechs, insurers, investment firms, payment institutions, and crypto-
asset service providers must comply. Most firms are still scrambling;
this assessment is a high-value deliverable in a narrow market.

**Realistic engagement price: €5 000 – 30 000.** Often recurring with quarterly checkpoints.

---

## How to use

Paste the block below, then on the next line:

    ENTITY: <legal entity, EU member state, regulator>
    CATEGORY: <CREDIT_INSTITUTION | PAYMENT_INSTITUTION | E_MONEY | INVESTMENT_FIRM
               | INSURANCE | REINSURANCE | CRYPTO_ASSET | TRADING_VENUE | CRA
               | CCP | CSD | CRITICAL_ICT_PROVIDER>
    SCOPE: <which ICT systems are in scope>
    CLIENT: <client legal entity>

---

## The prompt (copy from here)

```
You are producing a DORA compliance assessment. The §9 REPORT is the
deliverable. Three rules:

(1) DORA's five pillars are not optional. Every entity covers all
    five: ICT risk management, incident reporting, resilience testing,
    third-party risk, information sharing.
(2) Proportionality applies — smaller entities have lighter testing
    requirements. State the entity's classification clearly.
(3) The single most common gap is the Register of ICT Third-Party
    Service Providers (Art. 28). Surface it prominently.

1. SCOPE & CLASSIFICATION
   Legal entity, member state, primary supervisor (national competent
   authority, ECB, EBA, ESMA, EIOPA as applicable), entity category
   under Art. 2. Note if entity is classified as a "microenterprise"
   under DORA — proportionality applies to testing requirements.

2. ICT RISK MANAGEMENT  (Chapter II, Art. 5–16)  ← Pillar 1
   For each requirement, evidence visible (in code/config/repo docs)
   or gap:
     - Art. 5: ICT risk management framework — governance body
       approval, annual review
     - Art. 6: Internal governance and control framework
     - Art. 7: ICT risk management framework (identification,
       protection, detection, response, recovery)
     - Art. 8: Identification of ICT-supported business functions,
       information assets, ICT assets and their inter-dependencies
     - Art. 9: Protection and prevention (security policies, network
       segmentation, encryption, access management)
     - Art. 10: Detection (anomaly detection, continuous monitoring)
     - Art. 11: Response and recovery (BCP, DR, RTO/RPO defined)
     - Art. 12: Backup policies and procedures
     - Art. 13: Learning and evolving (post-incident reviews,
       lessons-learned)
     - Art. 14: Communication (crisis communication plan)
     - Art. 16: Simplified ICT risk management framework (for
       microenterprises only)

3. ICT-RELATED INCIDENTS  (Chapter III, Art. 17–23)  ← Pillar 2
   - Art. 17: Process to classify ICT-related incidents (major /
     non-major) and significant cyber threats
   - Art. 18: Classification criteria implemented (clients affected,
     duration, geographic spread, data losses, economic impact,
     criticality)
   - Art. 19: Reporting major ICT incidents to competent authority
     (initial notification within 4 hours, intermediate within 72 hours,
     final within 1 month)
   - Art. 20: Harmonisation of content and templates (use ESA's
     forthcoming RTS)
   - Art. 22: Notification of significant cyber threats (voluntary
     but expected)
   - Art. 23: Operational or security payment-related incidents
     (additional rules for payment service providers)
   Evidence: incident classification policy, notification workflow,
   contact details with NCA, retention of incident logs.

4. DIGITAL OPERATIONAL RESILIENCE TESTING  (Chapter IV, Art. 24–27)  ← Pillar 3
   - Art. 24: Comprehensive testing programme — proportionate to size
   - Art. 25: Testing of ICT tools and systems (vulnerability
     assessments, network security assessments, source-code reviews,
     scenario-based tests, compatibility testing, performance testing,
     end-to-end testing, penetration testing)
   - Art. 26: Advanced testing of ICT tools, systems and processes
     based on TLPT (Threat-Led Penetration Testing) — only for
     significant entities, every 3 years
   - Art. 27: Requirements for testers (TIBER-EU framework for TLPT)
   Evidence: testing schedule, results, remediation tracking, TLPT
   procurement if applicable.

5. ICT THIRD-PARTY RISK  (Chapter V, Art. 28–44)  ← Pillar 4 — common gap
   - Art. 28: Register of Information for all contractual arrangements
     with ICT third-party service providers (this register is THE
     deliverable supervisors ask for first)
   - Art. 29: Preliminary assessment of ICT concentration risk
   - Art. 30: Contractual provisions for all CTPPs
   - Art. 31: Designation of critical ICT third-party service
     providers (CTPPs) — ESAs do this; client checks if their CTPPs
     are designated
   - Art. 32–35: Oversight framework for CTPPs (ESA's responsibility,
     but client must cooperate)
   - Art. 38: Exit strategies for ICT services supporting critical
     or important functions
   Common gap: no consolidated register; contracts lack DORA-mandated
   clauses; no documented exit strategy for cloud providers.

6. INFORMATION-SHARING ARRANGEMENTS  (Chapter VI, Art. 45)  ← Pillar 5
   - Voluntary participation in information-sharing arrangements
     (cyber threat intel) — encouraged but not mandatory
   - If participating: governance, anonymisation, confidentiality

7. SPECIFIC RTS / ITS  (Regulatory and Implementing Technical Standards)
   ESAs have published / are publishing detailed technical standards
   for DORA implementation. Map gaps against published RTS:
     - RTS on ICT risk management framework
     - RTS on simplified ICT risk management
     - RTS on incident classification
     - ITS on incident reporting templates
     - RTS on TLPT
     - RTS on third-party register
     - ITS on third-party register
     - RTS on subcontracting

8. PROPORTIONALITY ASSESSMENT
   For each obligation, document how the entity's proportionality
   profile (size, risk profile, complexity) shapes the implementation
   level expected. Microenterprises have meaningfully lighter
   obligations under Art. 16; document this clearly if applicable.

9. REPORT  ← the deliverable
   --- REPORT START ---
   # DORA Compliance Assessment — <Entity>
   **Client:** <legal entity>   **NCA:** <competent authority>
   **Entity Category:** <Art. 2 classification>
   **Assessment date:** <…>   **In-scope ICT systems:** <…>

   ## Executive Summary             (≤300 words: posture, top 3 gaps,
                                     supervisor-exposure risk, timeline
                                     to closure)
   ## Scope & Classification        (§1)
   ## Pillar 1 — ICT Risk Mgmt      (§2)
   ## Pillar 2 — Incident Reporting (§3)
   ## Pillar 3 — Resilience Testing (§4)
   ## Pillar 4 — Third-Party Risk   (§5, including draft Register)
   ## Pillar 5 — Information Share  (§6)
   ## RTS / ITS Compliance Status   (§7)
   ## Proportionality Map           (§8)
   ## Gap Roadmap                   (gaps ranked by supervisor priority)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This assessment was produced by an AI agent from analysis of
     systems, infrastructure-as-code, contracts (where provided), and
     ISMS documentation at <date>. It is NOT legal advice and does NOT
     constitute a regulatory attestation. DORA compliance requires
     governance-body approval of the ICT risk management framework,
     contractual updates with ICT third-party providers, ongoing
     incident-reporting capability to the competent authority, and —
     for significant entities — Threat-Led Penetration Testing by
     accredited providers. Items marked IMPLEMENTED reflect what is
     visible in code, configuration, and provided documentation;
     operational compliance requires interview with the ICT risk
     function, incident-response procedures execution, and review of
     third-party contractual arrangements not visible to the agent.
     The ESAs continue to publish RTS / ITS — this assessment reflects
     the regulatory state as of <date>; subsequent technical standards
     may add obligations."

HARD RULES
- §5 third-party register draft is a deliverable in its own right —
  produce a tabular Register of Information matching the RTS template
  format even if columns must be marked [client-to-fill].
- Every IMPLEMENTED claim cites evidence (code path, config file,
  policy reference). No evidence = PARTIAL or MISSING.
- Supervisor reporting timelines in §3 are non-negotiable (4h / 72h /
  1 month) — flag if the entity cannot demonstrate these.
- §8 PROPORTIONALITY is honest, not aspirational. Microenterprise
  status under Art. 16 has specific quantitative thresholds — do not
  claim simplification without meeting them.
- Respond in the language of the ENTITY input.

ENTITY:
CATEGORY:
SCOPE:
CLIENT:
```

---

## What the buyer gets

A 30–60 page DORA readiness report with a draft Register of Information
table the entity can publish to their supervisor. Most banks and
fintechs are still partially compliant; the Article 28 register is the
hardest artefact to produce and the one supervisors ask for first.
