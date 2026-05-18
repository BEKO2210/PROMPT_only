# CONTRACT-REVIEW — Red-Flag Analyse von MSA / SOW / NDA (Self-Defense)

When a client or partner sends you their contract template (MSA, SOW,
NDA, DPA), you have hours not days to mark it up. This prompt produces
a red-flag analysis in plain language, ranks negotiation targets by
risk, and identifies walk-away triggers. Internal self-defence tool —
NOT legal advice and the prompt enforces that.

**Leverage value: prevents bad terms that cost €10k–€100k+ over the engagement.**

---

## How to use

Paste the block below, then on the next line:

    TYPE: <MSA | SOW | NDA | DPA | LICENSE | EMPLOYMENT | OTHER>
    COUNTERPARTY: <legal entity, country>
    DEAL_VALUE: <approximate engagement value or licensing scope>
    YOUR_ROLE: <CONSULTANT | VENDOR | LICENSEE | LICENSOR | EMPLOYEE>
    JURISDICTION: <preferred / acceptable jurisdictions>
    CONTRACT_TEXT: <paste the full contract text below>

---

## The prompt (copy from here)

```
You are flagging risks in a contract that has been sent to ME. The
§9 ANALYSIS is the deliverable. Three rules:

(1) YOU ARE NOT A LAWYER. Every finding is a flag for legal review,
    not a legal opinion. The §10 disclaimer is mandatory.
(2) Identify what the contract SAYS and what it DOESN'T SAY. Missing
    clauses are often worse than bad ones.
(3) Quote the clause. Every red flag cites the exact text being
    flagged so I can find it in the document.

1. SUMMARY  (plain language)
   Five bullets answering:
     - What is the basic deal?
     - Who has what obligation?
     - What is the price / consideration?
     - What is the term and termination model?
     - What jurisdiction / law / dispute resolution?
   No legalese. Read like a memo.

2. RED FLAGS  (clauses that disadvantage me)
   Walk the contract clause by clause. Common red flags by §TYPE:

   MSA / SOW (consulting):
     - Unlimited / unbounded liability (look for liability caps)
     - IP assignment that captures my pre-existing tools / templates
     - Non-compete or non-solicit that extends beyond the engagement
     - Termination-for-convenience by client without fee for work done
     - Payment terms >45 days (cash-flow killer)
     - "Sole and exclusive" dedication clauses
     - Audit rights without notice / cost limit
     - Insurance requirements that exceed standard professional cover
     - One-sided indemnification (I indemnify them, but not vice versa)

   NDA (one-way receiving):
     - Indefinite term (>5 years for non-trade-secret confidential)
     - Residual-knowledge clause stripped (you SHOULD keep one)
     - Scope of "confidential information" too broad
     - Return-or-destroy with no proof-of-destruction limit
     - Jurisdiction in counterparty's home court at counterparty's
       convenience

   DPA (data processing):
     - Sub-processor consent terms (advance notice missing)
     - Audit rights (cost, frequency, scope)
     - Liability allocation for data-protection fines
     - International transfer mechanisms (SCC reference)

   LICENSE:
     - Field-of-use restrictions
     - Audit / true-up clauses
     - Term auto-renewal with price increase rights
     - Most-favoured-customer constraints binding YOU

   EMPLOYMENT:
     - IP assignment scope ("anything related to company business" is
       overreach)
     - Non-compete duration vs jurisdiction enforceability
     - Severance / notice periods

   For each red flag:
     - Quote the clause
     - Plain-language explanation of WHY it's a problem
     - Risk tier: CRITICAL (walk away if not changed) / HIGH /
       MEDIUM / LOW
     - Recommended redline or counter-language

3. MISSING TERMS  (what SHOULD be there and isn't)
   Per §TYPE, the typical protections that are conspicuously absent:
     - Liability cap (1× fees is typical for consulting; pursue this)
     - Mutual indemnification
     - Reciprocal IP carve-out for your tools / templates / pre-
       existing IP
     - Force majeure
     - Payment-default cure period
     - Limitation period for claims
     - AI / automated-processing clauses (modern engagements need
       these)

4. AMBIGUITIES  (phrases that could be read against me later)
   Words and phrases that look benign but have history of bad
   interpretation:
     - "Reasonable" without standard reference
     - "Including but not limited to"
     - "From time to time"
     - "Promptly" / "as soon as possible"
     - "All necessary" / "all reasonable"
     - "Affiliates" without definition (binds whole corporate family)
     - "Improvements" or "derivatives" without definition
   For each: quote, ambiguity risk, suggested clarification.

5. NEGOTIATION TARGETS  (priority order)
   Top 3–5 things to push back on, with:
     - Issue (one sentence)
     - Why it matters (financial / risk impact)
     - Suggested redline
     - Likely counterparty response
     - Your fallback if they refuse

6. WALK-AWAY TRIGGERS
   2–4 terms that, if not changed, mean the deal isn't worth taking.
   Examples: unlimited liability + low cap on fees, IP assignment
   that captures your template library, jurisdiction in a non-
   English-speaking court your insurer won't cover.

7. STRENGTH SIGNALS  (good clauses to acknowledge)
   Note 2–4 things the contract gets RIGHT. Useful for negotiation
   tone: "I appreciate sections X and Y; my concerns are Z."

8. RECOMMENDED RESPONSE
   Suggested approach to mark up:
     - Send a redline document with the §5 priority changes
     - Schedule a 30-minute call to walk through §6 walk-away items
     - Ask for the latest counterparty's standard fallback positions
       on §5 issues

9. ANALYSIS  ← the deliverable
   --- ANALYSIS START ---
   # Contract Review — <TYPE> from <COUNTERPARTY>
   **Reviewed:** <date>   **Reviewer:** <you>
   **Deal value:** <€>   **Your role:** <…>

   ## Plain-Language Summary       (§1)
   ## Critical Risks                (§2 CRITICAL only, surface first)
   ## All Red Flags                 (§2 full, by severity)
   ## Missing Terms                 (§3)
   ## Ambiguities                   (§4)
   ## Negotiation Priorities        (§5)
   ## Walk-Away Triggers            (§6)
   ## Strengths to Acknowledge      (§7)
   ## Recommended Response          (§8)
   ## Disclaimer                    (§10, verbatim — read this first)
   --- ANALYSIS END ---

10. DISCLAIMER  (mandatory, verbatim — read first, link prominently)
    "THIS IS NOT LEGAL ADVICE. This analysis was produced by an AI
     agent and is intended solely as a NEGOTIATION-PREPARATION TOOL
     to surface clauses worth discussing with qualified legal
     counsel in the relevant jurisdiction. The agent may misinterpret
     contract language, miss material clauses, or apply mainstream
     jurisdictional assumptions that do not match your situation.
     Risk-tier labels reflect generic commercial-contract experience,
     not your specific business, insurance, or regulatory context.
     Do NOT sign or counter-sign any contract based solely on this
     review. For deals of material value or unfamiliar structures
     (M&A, equity, regulated industries, cross-border), engage
     qualified legal counsel before negotiation, not after. The
     producing party accepts no liability for decisions made on the
     basis of this document."

HARD RULES
- Every red flag in §2 includes a QUOTE of the clause text being
  flagged. No paraphrased flags.
- "CRITICAL" risk tier is reserved for terms that make the deal
  unacceptable, not merely suboptimal.
- The §10 disclaimer appears AT THE TOP of the §9 ANALYSIS in
  output, not buried at the bottom — readers need to see it before
  reading the flags.
- Respond in the language of the CONTRACT_TEXT.

TYPE:
COUNTERPARTY:
DEAL_VALUE:
YOUR_ROLE:
JURISDICTION:
CONTRACT_TEXT:
```

---

## Why it pays off

Most consultants sign bad contracts because they read them at 11 PM
the day before signing. This prompt produces a 15-minute pre-read that
identifies what to push back on so you go into the negotiation with a
list, not a hunch. The disclaimer keeps you out of unauthorised-
practice-of-law territory.
