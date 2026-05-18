# HIPAA — US Healthcare Compliance Audit (verkaufbares Deliverable)

Maps a US healthcare application to HIPAA Security Rule (45 CFR §164.308-
316) and Privacy Rule controls. Required for any system that creates,
receives, maintains, or transmits Protected Health Information (PHI) for
a US Covered Entity or Business Associate.

**Realistic engagement price: €3 000 – 15 000.** US market — price in USD if billing US clients.

---

## How to use

Paste the block below, then on the next line:

    APP: <application name, version, deployment context>
    ROLE: <COVERED_ENTITY | BUSINESS_ASSOCIATE | SUBCONTRACTOR>
    PHI_TYPES: <what categories of PHI — clinical, demographic, payment, etc.>
    CLIENT: <legal entity name>

---

## The prompt (copy from here)

```
You are producing a HIPAA technical safeguards assessment from
application code. The §9 REPORT is the deliverable. Three rules:

(1) PHI presence is the gate. Without PHI, HIPAA doesn't apply — but
    PHI hides easily (a username plus a doctor's name is PHI).
(2) HIPAA Security Rule is structured by addressable vs required.
    Addressable still requires either implementation or documented
    rationale for why not.
(3) Business Associate Agreements (BAAs) are mandatory whenever PHI
    leaves the system. Cite every outbound integration.

1. SCOPE & ROLE
   Application, version, commit SHA, deployment context. Client's
   HIPAA role (covered entity / business associate / subcontractor)
   and what categories of PHI are processed. Note: AI/ML providers
   are typically business associates if PHI is in training or
   inference data.

2. PHI INVENTORY
   Every data field that constitutes PHI under §160.103. The 18
   identifiers test:
     - Names (including provider names linked to a patient)
     - Geographic subdivisions smaller than state
     - Dates (except year) directly related to an individual
     - Telephone, fax, email, SSN, MRN, health plan number,
       account number, certificate / license number, vehicle ID,
       device identifier, URL, IP address, biometric identifier,
       full-face photo, any other unique identifying number
   Plus the data itself (diagnoses, medications, procedures, lab
   results, mental health notes). Cite file:line for each PHI field.
   Special category: 42 CFR Part 2 (substance use disorder records)
   has stricter protections — flag if present.

3. ADMINISTRATIVE SAFEGUARDS  (§164.308)
   For each standard, evidence visible in code/config or documented gap:
     - Security Management Process (risk analysis, risk management,
       sanction policy, info system activity review)
     - Assigned Security Responsibility (named in docs?)
     - Workforce Security (authorisation, clearance, termination
       procedures)
     - Information Access Management (RBAC implementation)
     - Security Awareness and Training
     - Security Incident Procedures
     - Contingency Plan (backup, disaster recovery, emergency mode)
     - Evaluation (periodic technical/non-technical)
     - Business Associate Contracts (existence of BAA for each §7
       outbound integration)

4. PHYSICAL SAFEGUARDS  (§164.310)
   Mostly out of code-audit scope but note what code reveals:
     - Workstation use restrictions
     - Device and media controls (encryption of disposed/reused media)

5. TECHNICAL SAFEGUARDS  (§164.312)  ← core code-audit section
   Per safeguard, IMPLEMENTED / PARTIAL / MISSING with file:line:
     - Access Control (§164.312(a)): unique user ID, emergency access,
       automatic logoff, encryption/decryption
     - Audit Controls (§164.312(b)): hardware/software/procedural
       mechanisms recording activity on systems containing PHI
     - Integrity (§164.312(c)): mechanisms to ensure PHI is not
       improperly altered or destroyed
     - Person or Entity Authentication (§164.312(d)): verification
       before granting access
     - Transmission Security (§164.312(e)): encryption in transit,
       integrity controls

6. PRIVACY RULE TOUCHPOINTS  (§164.502 et seq.)
   - Minimum necessary standard (RBAC granularity)
   - Patient right of access (§164.524) — implementation
   - Right to amend (§164.526)
   - Accounting of disclosures (§164.528)
   - Restrictions on use/disclosure for marketing, fundraising

7. THIRD-PARTY TRANSFERS & BAA REQUIREMENTS
   Every outbound API / SDK / integration that may receive PHI:
     - Service (EHR vendors, cloud, AI providers, analytics, CDN,
       error tracking, SMS, email)
     - PHI categories transmitted (from §2)
     - BAA status: VERIFIED (client confirms BAA exists) /
       NEEDS_VERIFICATION (cannot determine from code) /
       NO_BAA_AVAILABLE (vendor does not offer BAA — RED FLAG)
   AI providers: OpenAI offers BAA on enterprise tier; Anthropic
   offers BAA on commercial agreements; Google offers via Vertex AI
   with BAA addendum — flag the tier the client is using.

8. BREACH NOTIFICATION READINESS  (§164.404)
   - Logging sufficient to detect breach? (audit trail coverage of
     PHI access)
   - Detection capability (alerting on anomalous access)
   - Incident response procedures visible in code (runbooks, on-call)
   - 60-day notification timeline understood (notice to individuals,
     HHS, and media if >500 affected)

9. REPORT  ← the deliverable
   --- REPORT START ---
   # HIPAA Technical Safeguards Assessment — <Application>
   **Client:** <legal entity>   **HIPAA Role:** <covered entity / BA / subcontractor>
   **Assessment date:** <…>   **System SHA:** <…>

   ## Executive Summary             (≤300 words: posture, top 3 gaps,
                                     BAA-status summary, breach
                                     readiness)
   ## Scope & Role                  (§1)
   ## PHI Inventory                 (§2, table)
   ## Administrative Safeguards     (§3)
   ## Physical Safeguards           (§4)
   ## Technical Safeguards          (§5 — main body)
   ## Privacy Rule Touchpoints      (§6)
   ## Third-Party / BAA Status      (§7, table — surface NO_BAA red flags)
   ## Breach Notification Readiness (§8)
   ## Remediation Roadmap           (gaps prioritised: required first,
                                     addressable second)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This assessment was produced by an AI agent from static analysis
     of the application at commit <SHA> on <date>. It is NOT legal
     advice and does NOT constitute a HIPAA risk analysis under
     §164.308(a)(1)(ii)(A), which requires organisational scope and
     stakeholder interviews. Administrative safeguards visible only in
     code (§3) reflect technical implementation; full assessment
     requires policy and procedure review. Items marked IMPLEMENTED
     reflect what is visible in code and configuration; operational
     compliance (workforce training, BAA execution, sanction policy
     application) requires independent verification. Reliance on this
     report for a HIPAA risk-analysis obligation must be supplemented
     by organisational review by qualified HIPAA counsel or
     consultants. State law (e.g. CCPA, CMIA) may impose stricter
     requirements than HIPAA — separately assess where applicable."

HARD RULES
- Every PHI claim in §2 cites file:line. Inferred PHI is marked
  [inferred — confirm with client].
- Every IMPLEMENTED claim in §5 cites code evidence. Otherwise
  PARTIAL or MISSING.
- §7 BAA status NO_BAA_AVAILABLE for any service receiving PHI is a
  RED flag — surface prominently in Executive Summary.
- §10 disclaimer is verbatim. HIPAA enforcement is OCR; they read
  reports with adverse inference toward gaps.
- Respond in English (HIPAA is US-specific; reports go to US auditors).

APP:
ROLE:
PHI_TYPES:
CLIENT:
```

---

## What the buyer gets

A 20–40 page assessment that maps cleanly to OCR audit protocol
expectations. The BAA-status table alone often justifies the engagement
— most clients have AI/SaaS integrations without verified BAAs and
don't know it.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For non-US healthcare contexts — GDPR / NHS Digital / Canada PIPEDA differ materially; use the right tool
- For full HIPAA risk analysis per §164.308(a)(1)(ii)(A) — that requires organisational scope and interviews; this is the technical-safeguards subset
- When client uncertain whether they're a Covered Entity or Business Associate — clarify role before scoping
- For 42 CFR Part 2 substance-use-disorder records — stricter regime, separate engagement

---

## Quality gate — verify before treating as done

- [ ] Every PHI claim in §2 cites `file:line`
- [ ] SAD-equivalent (PHI stored in violation of minimum-necessary) surfaced in Executive Summary as CRITICAL
- [ ] §7 BAA status `NO_BAA_AVAILABLE` for any PHI-receiving service flagged RED
- [ ] §10 LIMITATIONS verbatim per [`_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`](./_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md)
- [ ] Response in English (HIPAA is US-specific; reports submitted to US OCR / counsel)
- [ ] Special-category PHI (mental health, genetic, substance use) flagged separately if present
- [ ] Breach notification (60-day) timeline understood and addressed in §8
