# AI-ACT — EU AI Act Conformity Assessment (verkaufbares Deliverable)

EU AI Act (Regulation 2024/1689) phased enforcement: prohibited practices
since Feb 2025, GPAI obligations since Aug 2025, high-risk obligations
from Aug 2026. Every EU-deploying AI system needs this assessment, and
almost nobody has one yet — brand-new market with huge supply gap.

**Realistic engagement price: €3 000 – 15 000.**

---

## How to use

Paste the block below, then on the next line:

    SYSTEM: <AI system name, purpose, deployment context>
    ROLE: <PROVIDER | DEPLOYER | IMPORTER | DISTRIBUTOR>
    MARKET: <EU member states the system serves>
    CLIENT: <legal entity name and EU establishment>

---

## The prompt (copy from here)

```
You are producing an EU AI Act conformity assessment. The §10 REPORT
is the deliverable. Three rules:

(1) CLASSIFICATION DRIVES OBLIGATIONS. Misclassifying a high-risk
    system as limited-risk is the single most expensive mistake
    possible — fines reach €35M or 7% global turnover.
(2) Cite Articles. Every claim about an obligation cites the AI Act
    article and (where applicable) annex. Regulators read this and
    expect grounding.
(3) You are not a lawyer. The §11 disclaimer must say so.

1. SCOPE & ROLE
   System name, version, intended purpose, deployment context (online
   service / embedded / on-device / SaaS). Client's role under Art. 3:
   provider (placed on market) / deployer (puts into use) / importer /
   distributor. Multiple roles possible — flag.

2. CLASSIFICATION  ← the most important section
   Walk the AI Act risk pyramid:

   PROHIBITED (Art. 5) — does the system do any of these?
     - Subliminal manipulation distorting behaviour
     - Exploiting vulnerabilities (age, disability, social/economic)
     - Social scoring by public authorities
     - Predictive policing based on profiling alone
     - Untargeted scraping for facial recognition databases
     - Emotion recognition in workplace / education
     - Biometric categorisation by sensitive attributes
     - Real-time remote biometric ID in public spaces (with narrow
       law-enforcement exceptions)
   If ANY: STOP. Document, escalate to legal. Cannot be placed on
   market.

   HIGH-RISK (Art. 6 + Annex III) — does the system fall in any of:
     - Safety component of regulated product (Annex I)
     - Biometric identification / categorisation
     - Critical infrastructure management
     - Education / vocational training (access, assessment, conduct)
     - Employment / worker management (recruitment, evaluation, task
       allocation, monitoring)
     - Essential private / public services (credit scoring, insurance
       pricing, emergency dispatch, public benefits eligibility)
     - Law enforcement
     - Migration, asylum, border control
     - Administration of justice and democratic processes
   If ANY: full Chapter III obligations apply.

   LIMITED-RISK (Art. 50) — transparency obligations only:
     - Chatbots: disclose AI nature
     - Emotion recognition / biometric categorisation (non-prohibited
       contexts): inform exposed persons
     - Deep fakes: label
     - AI-generated text on public-interest topics: label

   MINIMAL-RISK — voluntary code of conduct only.

   Document the classification with article-level reasoning.

3. SYSTEM INVENTORY
   - Model types in use (own / third-party / open-source / foundation)
   - For each foundation/GPAI model: provider, model name, version
   - Training data provenance (own / licensed / scraped / public)
   - Languages supported
   - Deployment endpoints (API, app, embedded)
   - Integration with other automated decision-making

4. HIGH-RISK OBLIGATIONS  (only if §2 = HIGH-RISK)
   For each obligation, current state and gap:
     - Risk management system (Art. 9) — documented, iterative
     - Data governance (Art. 10) — quality, bias, representativeness
       of training/validation/test data
     - Technical documentation (Art. 11 + Annex IV) — kept current,
       complete
     - Record-keeping (Art. 12) — automatic logs, retention duration
     - Transparency to deployers (Art. 13) — instructions for use
     - Human oversight (Art. 14) — designed-in oversight measures
     - Accuracy, robustness, cybersecurity (Art. 15) — measured,
       documented
     - Quality management system (Art. 17) — providers only
     - Post-market monitoring (Art. 72)
     - Reporting serious incidents (Art. 73)
     - Conformity assessment + CE marking (Art. 43, 49)
   Per item: IMPLEMENTED / PARTIAL / MISSING with code/doc evidence.

5. TRANSPARENCY OBLIGATIONS  (Art. 50, applies broadly)
   - Chatbot disclosure ("you are interacting with an AI") — where
     and how implemented in UI; cite file:line
   - Synthetic content labelling (deep fakes, AI text) — machine-
     readable provenance (C2PA / IPTC) + visible disclosure
   - Emotion / biometric categorisation notice
   - Each: IMPLEMENTED / PARTIAL / MISSING

6. GPAI OBLIGATIONS  (Art. 53–55, only if provider of a GPAI model)
   - Technical documentation (Annex XI)
   - Information for downstream providers (Annex XII)
   - Copyright policy + training-data summary
   - For GPAI with systemic risk: model evaluation, adversarial
     testing, incident tracking, cybersecurity protection

7. PROHIBITED-PRACTICE GATE
   Even if §2 cleared, double-check the entire feature surface for
   §2 PROHIBITED triggers. New features creep in.

8. CONFORMITY GAPS
   Consolidated list of MISSING and PARTIAL items from §4–§7, ranked
   by enforcement timeline:
     - In force NOW (Feb 2025: prohibited; Aug 2025: GPAI;
       Aug 2026: high-risk)
     - Risk class
     - Remediation effort

9. EXECUTIVE SUMMARY  (≤300 words, place atop §10)
   - Classification verdict (PROHIBITED / HIGH-RISK / LIMITED-RISK /
     MINIMAL-RISK)
   - Enforcement timeline relevant to client
   - Top 3 compliance gaps
   - Estimated path-to-compliance effort and cost
   - Penalty exposure if non-compliant when deadline hits

10. REPORT  ← the deliverable
    --- REPORT START ---
    # EU AI Act Conformity Assessment — <System>
    **Client:** <legal entity, EU establishment>
    **Role:** <provider / deployer / importer / distributor>
    **Assessment date:** <…>   **System version:** <…>

    ## Executive Summary             (§9)
    ## Scope & Role                  (§1)
    ## Risk Classification           (§2, with article reasoning)
    ## System Inventory              (§3)
    ## High-Risk Obligations         (§4 — only if applicable)
    ## Transparency Obligations      (§5)
    ## GPAI Obligations              (§6 — only if applicable)
    ## Prohibited-Practice Gate      (§7)
    ## Conformity Gaps & Roadmap     (§8, ordered by enforcement date)
    ## Limitations                   (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim — non-negotiable)
    "This assessment was produced by an AI agent from system
     documentation and code as of <date>. It is NOT legal advice and
     does NOT constitute a Conformity Assessment under Art. 43 of the
     EU AI Act. Risk classification under Art. 6 + Annex III requires
     legal counsel review, particularly for borderline use-cases
     (employment, education, essential services). Items marked
     IMPLEMENTED reflect what is visible in code, configuration, and
     documentation; operational controls (training, governance,
     post-market monitoring procedures) require interviews to verify.
     Reliance on this document for placing a high-risk AI system on
     the EU market must be supplemented by a notified-body assessment
     where required (Art. 43). For GPAI providers with systemic risk
     designation, additional obligations under Art. 55 apply and are
     outside this report's scope."

HARD RULES
- §2 CLASSIFICATION cites the article number for the conclusion. No
  hand-waved categorisation.
- §7 PROHIBITED-PRACTICE GATE is run even when §2 looked clear —
  feature creep is the most common compliance failure mode.
- "IMPLEMENTED" claims require code or documentation evidence. No
  evidence = PARTIAL or MISSING.
- Penalty exposure in §9 is realistic (Art. 99: up to €35M / 7% for
  prohibited; up to €15M / 3% for high-risk non-compliance; up to
  €7.5M / 1% for incorrect information).
- Respond in the language of the SYSTEM input.

SYSTEM:
ROLE:
MARKET:
CLIENT:
```

---

## What the buyer gets

A 20–40 page PDF mapped to AI Act articles, with a classification
verdict that anchors every other section. Regulators and notified
bodies expect article-level grounding — this format gives it to them.
First mover advantage is significant: most consultancies are still
ramping up on this regulation.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For non-EU-deployed AI systems — different regulatory regimes apply (US: NIST AI RMF; UK: emerging; China: separate)
- For systems classified PROHIBITED under §2 — stop assessment, escalate to legal; cannot be placed on EU market
- When client hasn't engaged legal counsel for High-Risk classification — Art. 6 + Annex III interpretation requires it
- For pure research / lab prototype systems not approaching deployment — premature

---

## Quality gate — verify before treating as done

- [ ] §2 CLASSIFICATION cites the relevant AI Act article (e.g. "Art. 6 + Annex III §4 Employment")
- [ ] §7 PROHIBITED-PRACTICE GATE run even when §2 looked clear (feature creep is common failure mode)
- [ ] Every IMPLEMENTED claim in §4–§5 cites code or documentation evidence
- [ ] §11 LIMITATIONS verbatim per [`_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`](./_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md)
- [ ] Penalty exposure in Executive Summary cites Art. 99 amounts correctly (€35M/7% for prohibited; €15M/3% for high-risk)
- [ ] Foundation model / GPAI obligations addressed in §6 if applicable
- [ ] Classification verdict (PROHIBITED / HIGH-RISK / LIMITED / MINIMAL) prominent in Executive Summary
