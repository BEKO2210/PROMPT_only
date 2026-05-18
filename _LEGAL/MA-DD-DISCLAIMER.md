# M&A Technical Due Diligence — Strongest Disclaimer

Used in `DD.md`. Non-negotiable. Investment committees make decisions
worth millions on these reports; the disclaimer is what makes the
engagement defensible when the deal sours.

---

## Canonical text (substitute bracketed values per engagement)

> This Technical Due Diligence report was produced by an AI agent on
> [DATE] from static analysis of the repository at [COMMIT SHA]. It
> is **NOT** a substitute for: (a) legal due diligence (contracts,
> IP ownership, employment agreements, open-source compliance review
> by counsel), (b) commercial due diligence (customer interviews,
> market sizing, revenue quality), (c) financial due diligence
> (accounting standards, ARR quality, churn cohorts), or (d)
> operational interviews with the engineering team.
>
> Findings are based on what is visible in the repository and may
> not reflect undocumented practices, runtime behaviour, third-party
> integrations not represented in code, or systems hosted elsewhere.
> R/A/G ratings apply standard industry heuristics without
> environmental context.
>
> This report is **advisory**; the commissioning party should
> corroborate material findings (especially Security, Licensing,
> Team-concentration) through independent verification before making
> binding investment decisions.
>
> The producing firm accepts no liability for decisions made solely
> on the basis of this document. By accepting this report, the
> commissioning party acknowledges that:
> - The report is one input among many in the investment decision
> - Material findings will be verified through independent channels
> - The producing firm's liability is capped at the engagement fee
>   per the underlying engagement agreement

## Why this language

This is the most exposed deliverable in the library. PE firms,
strategic acquirers, and VCs make 7-, 8-, and 9-figure decisions
partly on TDDs. When deals sour, lawyers look for who can be sued.

- "NOT a substitute for [legal / commercial / financial DD]"
  prevents over-reliance claims
- "Advisory" framing maintains the consultant as adviser, not
  decision-maker
- "Liability capped at engagement fee" tracks the proposal T&Cs
- The "by accepting this report" acknowledgement creates a
  written assent record

## Do not soften

If a buyer pushes back on this language, the engagement is too
risky to take. Walk away.

## Engagement-side requirements

Before delivering any DD report:
1. Confirm the engagement agreement includes the same liability
   cap as this disclaimer
2. Confirm professional indemnity insurance covers AI-assisted
   advisory work in the buyer's jurisdiction
3. Have counsel in the buyer's jurisdiction review the disclaimer
   before first use
4. Keep a signed copy of the engagement agreement on file for
   the regulatory minimum + 6 years (longer in some jurisdictions)
