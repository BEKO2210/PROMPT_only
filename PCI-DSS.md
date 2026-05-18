# PCI-DSS — Payment Card Industry Compliance Audit (verkaufbares Deliverable)

PCI-DSS v4.0.1 audit (mandatory since 31 March 2025). Maps a payment
application to the 12 PCI-DSS requirement categories and identifies
scope-reduction opportunities. Any client that stores, processes, or
transmits cardholder data (CHD) is subject to PCI-DSS.

**Realistic engagement price: €3 000 – 15 000.** Recurring annually.

---

## How to use

Paste the block below, then on the next line:

    APP: <application name, version, deployment context>
    SAQ_LEVEL: <SAQ-A | SAQ-A-EP | SAQ-B-IP | SAQ-C | SAQ-C-VT | SAQ-D-MER | SAQ-D-SP | full ROC>
    INTEGRATIONS: <payment processors / gateways used — Stripe, Adyen, Braintree, …>
    CLIENT: <legal entity, merchant or service-provider name>

---

## The prompt (copy from here)

```
You are producing a PCI-DSS v4.0.1 technical assessment. The §9 REPORT
is the deliverable. Three rules:

(1) SCOPE IS EVERYTHING. The cardholder data environment (CDE) defines
    what requirements apply. Most clients overstate scope and overpay
    in controls — §3 SCOPE REDUCTION often justifies the engagement
    alone.
(2) "Compensating controls" are last resort, not first. Document the
    compensating control worksheet only if a stated requirement cannot
    be met.
(3) PCI-DSS v4.0.1 introduced "customised approach" — flag any use of
    it; it requires a Targeted Risk Analysis per requirement.

1. SCOPE
   Application, version, commit SHA, deployment context. Merchant
   level (1–4 by annual Visa/MC transaction volume) or service-provider
   level (1–2). SAQ applicable (or full ROC). Payment flows in use:
   ecommerce-redirect, hosted iframe, direct-post, server-to-server,
   mobile SDK, terminal-only.

2. CARDHOLDER DATA INVENTORY
   - PAN (Primary Account Number): is it stored? where? cite file:line
   - Sensitive Authentication Data (SAD: CVV2, full track, PIN): NEVER
     stored post-authorisation; flag any storage as critical violation
   - Cardholder Name, Expiry, Service Code: storage triggers
     protection requirements
   - Where CHD ENTERS the system (forms, APIs, file uploads)
   - Where CHD FLOWS (in memory, in transit, to logs, to backups)
   - Where CHD LEAVES (to processor, to bank, to reports)

3. SCOPE REDUCTION OPPORTUNITIES  ← high-value section
   - Is the merchant using a redirect/iframe (SAQ-A scope)?
   - Could tokenisation remove PAN from the merchant environment?
   - Are dev/test/QA environments touching real PAN (they shouldn't)?
   - Is there segmentation between CDE and corporate network? cite
     network configuration / IaC evidence
   - Are there services in scope that don't need to be (logging,
     monitoring, analytics inadvertently receiving CHD)?

4. PCI-DSS REQUIREMENTS  (12 categories)
   For each requirement category, map to code/config evidence with
   IMPLEMENTED / PARTIAL / MISSING:

   1. Install and maintain network security controls
      - Firewall / security-group rules
      - Documented network diagram

   2. Apply secure configurations to all system components
      - Hardening baselines, default credentials removed
      - Inventory of system components

   3. Protect stored account data
      - PAN encryption / tokenisation / truncation
      - Key management (rotation, separation of duties)
      - SAD never stored post-authorisation

   4. Protect cardholder data with strong cryptography during
      transmission over open, public networks
      - TLS 1.2+ enforced
      - Strong ciphers only

   5. Protect all systems and networks from malicious software

   6. Develop and maintain secure systems and software
      - Patching, secure SDLC, code review evidence
      - Vulnerability management
      - Public web app protection (WAF or secure-code review per 6.4)

   7. Restrict access to system components and cardholder data by
      business need to know
      - RBAC, default-deny

   8. Identify users and authenticate access
      - MFA for all non-console admin and remote access into CDE
      - Strong authentication policies

   9. Restrict physical access (mostly out of code scope; note
      cloud-provider compliance)

  10. Log and monitor all access to system components and
      cardholder data
      - Audit log content per 10.2
      - Log integrity / time sync
      - Daily review (automated)
      - 1-year retention, 3 months online

  11. Test security of systems and networks regularly
      - Quarterly vulnerability scans (internal and external)
      - Annual penetration tests
      - Change-detection mechanisms

  12. Support information security with organisational policies and
      programs (mostly out of code scope; note what code reveals)

5. v4.0.1 FUTURE-DATED REQUIREMENTS
   Several v4 requirements became mandatory 31 March 2025. Verify:
     - Targeted risk analyses for customised-approach controls
     - Authenticated internal vulnerability scans
     - Phishing-resistant authentication (8.4.2)
     - Automated detection of payment-page tampering (11.6.1)
     - Detection of unauthorised PAN copy/relocation (3.4.2)
     - DMARC for outbound mail (5.4.1)

6. THIRD-PARTY SERVICE PROVIDERS  (Req 12.8, 12.9)
   - Each TPSP touching CHD: PCI-DSS validation status?
   - Acquirer / processor / gateway: AOC on file?
   - Cloud provider: shared-responsibility matrix documented?

7. COMPENSATING CONTROLS
   For any requirement that cannot be met as stated, document a
   compensating control with:
     - The requirement not met
     - Business / technical constraint preventing compliance
     - Compensating control description
     - Risk it addresses equivalently
     - Validation method

8. GAPS & REMEDIATION ROADMAP
   Consolidated gap list ordered by:
     - Compliance risk (assessment failure likelihood)
     - Implementation effort
     - Whether the gap could be eliminated by §3 scope reduction
       (preferred over adding controls)

9. REPORT  ← the deliverable
   --- REPORT START ---
   # PCI-DSS v4.0.1 Technical Assessment — <Application>
   **Client:** <merchant / service-provider legal name>
   **Merchant Level:** <1–4>   **SAQ / ROC:** <…>
   **Assessment date:** <…>   **System SHA:** <…>

   ## Executive Summary             (≤300 words: posture, top 3 gaps,
                                     scope-reduction recommendation,
                                     v4.0.1 readiness)
   ## Scope                         (§1)
   ## Cardholder Data Inventory     (§2)
   ## Scope-Reduction Analysis      (§3 — surface this prominently)
   ## Requirement Mapping           (§4, table by category)
   ## v4.0.1 Future-Dated Items     (§5)
   ## Third-Party Service Providers (§6)
   ## Compensating Controls         (§7 — if any)
   ## Remediation Roadmap           (§8)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This assessment was produced by an AI agent from static analysis
     of the application at commit <SHA> on <date>. It is NOT a Report
     on Compliance (ROC) or Self-Assessment Questionnaire (SAQ)
     attestation. PCI-DSS validation requires either: (a) attestation
     by a Qualified Security Assessor (QSA) for Level 1 merchants /
     service providers, or (b) self-assessment using the appropriate
     SAQ supported by an Attestation of Compliance (AOC) signed by an
     executive officer. This report identifies technical gaps and
     scope-reduction opportunities to inform that process. Operational
     controls (training, sanction policy, incident response execution)
     require interviews and evidence beyond code review. PCI-DSS does
     not replace card-brand-specific programs (Visa CISP, MC SDP,
     etc.) — those may impose additional requirements."

HARD RULES
- §2 inventory CITES file:line for every PAN or SAD touchpoint. SAD
  storage = critical finding, surface in Executive Summary.
- §3 SCOPE REDUCTION runs even when scope looks fixed — the highest
  ROI in PCI work is removing systems from CDE, not adding controls.
- Compensating controls (§7) are documented only when stated
  requirement is truly infeasible — never as preference.
- §10 disclaimer is verbatim. PCI assessments are reviewed by acquirers
  and card brands with little patience for ambiguity.
- Respond in the language of the CLIENT input.

APP:
SAQ_LEVEL:
INTEGRATIONS:
CLIENT:
```

---

## What the buyer gets

A 25–50 page gap analysis ready for the QSA / SAQ process. The
scope-reduction section frequently shows a path from SAQ-D (300+
controls) to SAQ-A (22 controls) by moving the merchant to a hosted
payment page — that single recommendation can save the client more
than the engagement fee.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For systems not touching cardholder data — confirm with §2 inventory before scoping the engagement
- For full ROC attestation — that requires a QSA (Qualified Security Assessor), not this prompt
- When client uncertain of their SAQ level — clarify first; SAQ scope drives requirement set
- For PCI 3DS, PCI 3DS SDK, or PCI PIN scope — different standards, separate engagements

---

## Quality gate — verify before treating as done

- [ ] §2 inventory cites `file:line` for every PAN or SAD touchpoint
- [ ] SAD storage post-authorisation surfaced in Executive Summary as CRITICAL (it's a PCI-DSS show-stopper)
- [ ] §3 SCOPE REDUCTION analysis run — even when scope looks fixed (highest-ROI section)
- [ ] §5 v4.0.1 future-dated items checked (mandatory 31 March 2025)
- [ ] §7 compensating controls only documented when stated requirement is genuinely infeasible
- [ ] §10 LIMITATIONS verbatim per [`_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`](./_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md)
- [ ] SAQ-D → SAQ-A reduction path explicitly considered (if applicable, it's transformative)
