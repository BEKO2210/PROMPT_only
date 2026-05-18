# PROPOSAL — Verkaufsfertiges Angebot aus Discovery-Notizen

Produces a polished, send-ready consulting proposal from discovery notes
plus a service definition. Uses the situation–complication–resolution
structure that high-end consulting firms use, with anchored pricing,
line-item deliverables, and the contract terms that protect you.

**Leverage value: 3–5 hours saved per deal × higher win rate from
professional polish.**

---

## How to use

Paste the block below, then on the next line:

    CLIENT: <legal entity name, primary contact, contact role>
    SERVICE: <which Tier-2 prompt drives the deliverable — AUDIT, GDPR, etc.>
    DISCOVERY: <notes from the discovery call — pain, scope, timing, budget signals>
    PRICING_MODEL: <FIXED-FEE | T&M | RETAINER>
    YOUR_RATE: <your day-rate or fee anchor for this engagement>
    SIGNATURE: <your name, firm, contact, jurisdiction>

---

## The prompt (copy from here)

```
You are producing a sales-ready consulting proposal. The §9 PROPOSAL
block is what the client receives as a PDF. Three rules:

(1) NEVER INVENT credentials, case studies, past clients, certifications,
    or team members. If the §SIGNATURE input doesn't list it, it doesn't
    appear in the proposal. Inventing a "previous ISO 27001 audit at a
    similar firm" is fraud.
(2) ANCHOR THE PRICE. Open with the value, then the price, in that
    order — never the reverse. Price without anchoring loses every
    negotiation.
(3) THE PROPOSAL IS A CONTRACT DRAFT. Every line will be quoted back to
    you in the eventual scope dispute. Specificity protects everyone.

1. SITUATION
   In 2–3 sentences, the client's current state as you heard it from
   §DISCOVERY. Use their language, not yours. This proves you listened
   — generic platitudes prove the opposite.

2. COMPLICATION
   What happens if they don't act? Quantify if §DISCOVERY gave you
   numbers: hours wasted, compliance deadline, incident risk, churn
   from poor accessibility, missed funding gate. If §DISCOVERY didn't
   yield numbers, use a defensible industry benchmark and cite it.

3. RESOLUTION
   The proposed engagement in one paragraph. Reference the §SERVICE
   deliverable explicitly: "We will produce a [SBOM / GDPR Article 30
   record / DD report / etc.] as defined by [deliverable spec]."

4. SCOPE OF WORK
   Itemised, phase by phase. For each phase:
     - phase name (e.g. "Phase 1: Discovery & Inventory")
     - duration in calendar days
     - activities (bulleted, observable verbs: "review", "interview",
       "draft", "deliver")
     - acceptance criterion (how you both know the phase is done)
   This is what protects you from scope creep.

5. DELIVERABLES
   Concrete artefacts the client receives:
     - Document name (e.g. "Security & Code-Quality Audit Report v1.0")
     - Format (PDF, JSON, Markdown)
     - Page count or line-item range
     - Revision rounds included (typically 1)
   Anything verbal, ad-hoc, or in Slack is NOT a deliverable. Be
   explicit about what is and isn't included.

6. INVESTMENT
   Anchored, never naked.
   - For FIXED-FEE: state the total with line-item breakdown. Show
     2–3 line items that add up to the total — clients accept totals
     better when they can see what they're paying for.
   - For T&M: day-rate × estimated days as a RANGE (best / likely /
     worst), with a not-to-exceed cap.
   - For RETAINER: monthly fee × initial commitment (e.g. 6 months),
     scope per month, what triggers re-scoping.
   Payment schedule: standard is 50% on signature / 50% on delivery,
   or for retainers: monthly in advance, net-7. State terms explicitly.
   Currency, VAT treatment, expense policy (typically: travel >100km
   pre-approved and billed at cost).

7. TIMELINE
   Kick-off date placeholder: "T+0 = signature + 50% deposit received".
   Phase end-dates relative to T+0. Critical-path note: what the
   client must provide (access, interviews, sign-off windows) and how
   late provision affects the timeline. Holiday / freeze caveats if
   relevant.

8. ABOUT
   Three paragraphs maximum:
     - Who you / your firm are (from §SIGNATURE — verbatim, no
       embellishment)
     - Why this engagement fits you (cite ONLY past work / credentials
       you were given in §SIGNATURE)
     - One paragraph on methodology (reference the §SERVICE prompt
       deliverable structure as your methodology — it IS a methodology)

9. PROPOSAL  ← the deliverable
   --- PROPOSAL START ---
   # Engagement Proposal: <Service Name> for <Client>
   **Prepared for:** <client contact, role, legal entity>
   **Prepared by:** <your name, firm>   **Date:** <…>
   **Valid until:** <30 days from issuance>
   **Reference:** <PROP-YYYY-NNN>

   ## Executive Summary           (§1 + §2 + §3 condensed, ≤250 words)
   ## Your Situation              (§1)
   ## Why Now                     (§2)
   ## Proposed Engagement         (§3)
   ## Scope & Phases              (§4)
   ## Deliverables                (§5)
   ## Investment                  (§6)
   ## Timeline                    (§7)
   ## About                       (§8)
   ## Next Steps                  (§10 — exactly 3 numbered actions)
   ## Terms & Conditions          (§11, verbatim)
   ## Signature Block             (client signature, date / your signature, date)
   --- PROPOSAL END ---

10. NEXT STEPS  (place inside §9)
    Exactly three numbered actions, each ≤15 words:
      1. Reply with intent to proceed
      2. Sign the proposal (DocuSign / e-signature link / wet ink)
      3. Initiate 50% deposit to <bank details placeholder>
    Plus: "Engagement begins within 5 business days of signature."

11. TERMS & CONDITIONS  (verbatim with substitutions)
    "1. SCOPE. The work described in this proposal is the entire
        engagement. Out-of-scope requests require a written change order
        priced separately.
     2. PAYMENT. Invoices are payable within 14 days. Late payments
        accrue statutory default interest per <jurisdiction>.
     3. OWNERSHIP. Deliverables transfer to the Client upon final
        payment. The Consultant retains the right to use anonymised
        methodology and aggregated insights for future engagements.
        Tools, templates, and prompts used to produce the deliverables
        remain the Consultant's property.
     4. CONFIDENTIALITY. Both parties protect material non-public
        information disclosed during the engagement for 3 years. NDA
        supplements this clause if executed.
     5. LIABILITY. Consultant's liability is limited to the fees paid
        under this engagement. Consequential, indirect, or punitive
        damages are excluded.
     6. AI-ASSISTED METHODOLOGY. Deliverables are produced with the
        assistance of AI tooling under Consultant supervision; this is
        consistent with current professional practice and does not
        reduce Consultant accountability for the work product.
     7. JURISDICTION. <jurisdiction> law governs; <city> courts have
        exclusive jurisdiction.
     8. CANCELLATION. Either party may terminate with 7 days written
        notice. Work performed up to termination is invoiced pro-rata."

HARD RULES
- Zero invented credentials, certifications, prior clients, team members.
  If §SIGNATURE doesn't say it, the proposal doesn't say it.
- Pricing always anchored: value paragraph before price line. Never
  open §6 with a number.
- Every deliverable in §5 has a concrete name and format. "Report on
  findings" is not a deliverable; "32-page PDF Security Audit Report
  with CycloneDX SBOM JSON appendix" is.
- §11 T&Cs are verbatim with substitutions. Soften them only after
  legal review in your jurisdiction.
- Respond in the same language as the DISCOVERY input.

CLIENT:
SERVICE:
DISCOVERY:
PRICING_MODEL:
YOUR_RATE:
SIGNATURE:
```

---

## What you get

A 4–8 page proposal a CFO can sign without lawyer involvement for
sub-€25k engagements. Pandoc renders to a branded PDF. The T&C clauses
specifically address AI-assisted methodology, which the typical 2025
boilerplate proposal does not — and which is the question every modern
buyer asks before signing.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For contracts sent TO you (MSA / SOW / NDA / DPA) — use [`CONTRACT-REVIEW.md`](./CONTRACT-REVIEW.md)
- For pure time-and-materials engagements with no deliverable — different format
- Before completing [`DISCOVERY.md`](./DISCOVERY.md) — proposal anchored on guess weakens close rate
- For pricing well above your delivery experience — credibility risk; bring in a partner first

---

## Quality gate — verify before treating as done

- [ ] Zero invented credentials, certifications, prior clients, team members (verify against SIGNATURE input)
- [ ] Pricing anchored: value paragraph BEFORE the price line (never opens §6 with a number)
- [ ] Every §5 deliverable has concrete name + format (not vague "report on findings")
- [ ] §11 T&Cs verbatim with substitutions only — soften only after legal review in your jurisdiction
- [ ] §10 NEXT STEPS = exactly 3 numbered actions, each ≤ 15 words
- [ ] §11.6 AI-assisted-methodology clause present (modern buyers ask about this)
- [ ] Response in language of DISCOVERY input
