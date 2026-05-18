# GDPR — DSGVO Data-Flow-Map & Art. 30 RoPA (verkaufbares Deliverable)

Produces a GDPR / DSGVO assessment from code: PII inventory, data-flow
map, third-country transfer flags, and a filled-in Article 30 Record of
Processing Activities template. German / EU market — every company
processing personal data must maintain a RoPA, and most don't.

**Realistic engagement price: €2 000 – 10 000.** Recurring (annual review or per major release).

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <which application / service is being assessed>
    ROLE: <CONTROLLER | PROCESSOR | JOINT_CONTROLLER>
    JURISDICTION: <EU | EEA | UK | CH | mixed>
    CLIENT: <client name and legal entity — needed for RoPA template>

---

## The prompt (copy from here)

```
You are producing a GDPR / DSGVO assessment of an application from its
source code. The §9 REPORT is the deliverable. Three principles:
(a) cite code evidence for every claim; (b) absence of code is itself a
finding (no retention logic = a gap, not a pass); (c) you are not a
lawyer — your §10 disclaimer must say so explicitly.

1. SCOPE & ROLE
   Restate scope: application name, version, commit SHA. State the
   client's GDPR role (controller / processor / joint controller),
   jurisdiction, and the legal entity name for the §8 RoPA header.
   List any sub-scopes explicitly excluded (mobile app, admin tools,
   internal employee data systems, etc.).

2. PII INVENTORY
   Every data field that may constitute personal data under Art. 4(1)
   GDPR. Cite file:line for each. Classify per field:
     - IDENTIFIER: name, email, phone, account ID, government ID, IP
     - QUASI-IDENTIFIER: postcode, DOB, device fingerprint, browser UA
     - BEHAVIOURAL: clickstream, location history, search history
     - FINANCIAL: payment data, salary, transactions
     - SPECIAL CATEGORY (Art. 9): health, biometrics, genetic, racial /
       ethnic origin, political opinions, religious beliefs, trade union,
       sex life / orientation, criminal convictions (Art. 10)
   Note: Art. 9 special category data triggers significantly stricter
   requirements — flag prominently.

3. DATA FLOWS
   For each PII class in §2, trace through the system:
     - ENTRY: where it enters (signup form, API endpoint, file upload,
       third-party webhook). file:line.
     - STORAGE: where it persists (database tables, S3 buckets, log
       files, caches, message queues). Schema file or migration line.
     - PROCESSING: what is done with it (analytics, ML inference,
       enrichment, billing, marketing). File / function evidence.
     - EGRESS: where it leaves the system (third-party API calls,
       webhooks, exports, backups, log aggregation, error tracking).
     - DELETION: how / when it is deleted (cron, TTL, manual). If no
       deletion logic is visible, mark `[NO RETENTION ENFORCEMENT — GAP]`.

4. PURPOSE & LEGAL BASIS
   For each processing activity identified in §3, document:
     - Purpose (Art. 5(1)(b) purpose limitation — be specific)
     - Legal basis (Art. 6(1): consent / contract / legal obligation /
       vital interests / public task / legitimate interests)
     - If legitimate interests: where is the LIA (legitimate interest
       assessment) — usually absent in code, flag as `[REQUIRES LIA]`
     - If special category: Art. 9(2) condition that applies
   Note that "we have consent" requires evidence of consent capture in
   code — flag gaps.

5. RETENTION
   For each storage location in §3, what is the visible retention?
     - Explicit TTL (database `expires_at`, S3 lifecycle, Redis EXPIRE)
     - Cron / scheduled deletion job (cite the cron file)
     - Manual / ad-hoc only (= gap)
     - No deletion logic at all (= gap, Art. 5(1)(e) violation risk)

6. DATA-SUBJECT RIGHTS IMPLEMENTATION
   For each Art. 15–22 right, is there visible implementation?
     - Art. 15 access: endpoint or admin function for user data export?
     - Art. 16 rectification: user-facing edit flows?
     - Art. 17 erasure: account-deletion implementation? does it
       actually remove data or just deactivate?
     - Art. 18 restriction: pause-processing capability?
     - Art. 20 portability: machine-readable export?
     - Art. 21 objection: opt-out for marketing / profiling?
     - Art. 22: any fully automated decision-making with legal effect?
       — flag prominently if present.
   PASS / PARTIAL / GAP per right, with file:line.

7. THIRD-COUNTRY TRANSFERS  (Chapter V, Schrems II)
   Every outbound API call or SDK that may transfer PII outside EEA:
     - Service (Stripe, Twilio, OpenAI, Datadog, Sentry, GA4, Segment, …)
     - Provider's legal entity location
     - Data sent (from §3 EGRESS analysis)
     - Required safeguard (SCCs / adequacy decision / DPF)
     - Status: VISIBLE_ADEQUATE / VISIBLE_NEEDS_SCC / NOT_VERIFIABLE
   Flag US-hosted AI providers (OpenAI, Anthropic, etc.) explicitly —
   they are the highest current scrutiny.

8. ARTICLE 30 RoPA
   Fill in the Record of Processing Activities template per Art. 30(1)
   (controller) or Art. 30(2) (processor) as per §1 ROLE:
     - Controller / Processor name and contact (from CLIENT input)
     - DPO contact (mark `[client to fill]` if not in code)
     - Purposes of processing (from §4)
     - Categories of data subjects (customers, employees, prospects, …)
     - Categories of personal data (from §2)
     - Categories of recipients (from §3 EGRESS)
     - Third-country transfers and safeguards (from §7)
     - Retention periods (from §5)
     - General description of technical/organisational measures
       (TOMs) per Art. 32 — what is visible in code (encryption at
       rest? in transit? access control? audit logging?)

9. REPORT  ← the deliverable
   --- REPORT START ---
   # GDPR Assessment & Article 30 Record of Processing Activities
   **Controller / Processor:** <legal entity>
   **Application:** <…>   **Commit:** <SHA>   **Date:** <…>
   **Assessor:** <…>

   ## Executive Summary             (≤300 words, top 5 gaps, top 3 risks,
                                     overall posture: COMPLIANT-LIKELY /
                                     PARTIAL / SIGNIFICANT GAPS)
   ## Scope & Role                  (§1)
   ## PII Inventory                 (§2, table)
   ## Data Flows                    (§3, one block per data class)
   ## Purpose & Legal Basis         (§4, table)
   ## Retention                     (§5, table)
   ## Data-Subject Rights           (§6, table)
   ## Third-Country Transfers       (§7, table — Schrems-II focus)
   ## Article 30 Record (RoPA)      (§8 — formal template)
   ## Identified Gaps               (consolidated list, ordered by risk)
   ## Recommended Actions           (concrete, with owners suggested)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim — do not soften)
    "This assessment was produced by an AI agent from static analysis of
     the codebase at commit <SHA> on <date>. It is NOT legal advice and
     does NOT constitute a DPIA (Data Protection Impact Assessment per
     Art. 35). It does not assess: (a) contractual arrangements with
     processors (DPAs), (b) consent-capture UX in deployed environments,
     (c) employee training and organisational measures, (d) breach
     notification procedures, (e) the actual deletion behaviour of
     third-party processors after Art. 17 requests are forwarded. The
     Article 30 RoPA in §8 is a draft populated from code evidence; it
     must be reviewed and signed by the controller's DPO or qualified
     legal counsel before being treated as the official record. For
     processing involving Art. 9 special-category data, Art. 22
     automated decision-making, or large-scale systematic monitoring,
     a full DPIA is required by law and is outside this engagement's
     scope."

HARD RULES
- Every PII field in §2 cites file:line. Absence of a field is not
  enough — show where it appears.
- "No retention logic found" is a CONCRETE finding, not a non-finding.
  Document the storage location and mark the gap explicitly.
- US-hosted third parties processing PII without an SCC reference
  visible in code or contracts are flagged `VISIBLE_NEEDS_SCC`. Do not
  assume DPAs exist outside the repo.
- Never claim a control "is implemented" without code evidence. Use
  PASS / PARTIAL / GAP consistently.
- Respond in the language of the SCOPE input (German if German market —
  most German clients want this in German).

SCOPE:
```

---

## What the buyer gets

A formal RoPA they can put in front of a Datenschutzbehörde plus a
gap-list their DPO can action. The Schrems-II third-country transfer
analysis alone justifies the engagement for most SaaS clients shipping
data to US AI providers without an SCC review.
