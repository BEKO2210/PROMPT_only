# DD — Technical Due Diligence (verkaufbares Deliverable)

The highest-margin engagement in this repo. Produces a Technical Due
Diligence report for M&A, investment, or partnership decisions. Buyers
are PE firms, VCs, strategic acquirers, and CTOs evaluating
acquisition targets. Reports use Red/Amber/Green ratings so a
non-technical investment committee can act on them.

**Realistic engagement price: €10 000 – 100 000+.** This is consulting
gold and your disclaimers must hold.

---

## How to use

Paste the block below, then on the next line:

    TARGET: <company / product being assessed>
    REPO: <repo URL or local path, commit SHA>
    BUYER_CONTEXT: <strategic acquisition / financial investment / partnership>
    DEAL_SIZE: <approximate order of magnitude — informs risk weighting>
    CLIENT: <commissioning party, e.g. acquiring firm>

---

## The prompt (copy from here)

```
You are producing a Technical Due Diligence report. The buyer's
investment committee will read the Executive Summary and act on the
R/A/G verdicts. Every rating must be defensible from code evidence.
The §11 REPORT is the deliverable.

This is NOT a code review. It is an assessment of whether the asset is
worth what the buyer is paying — focused on health, scalability,
defensibility, key-person risk, and hidden liabilities.

RATING SCHEMA (use consistently):
  🟢 GREEN  — Strong. No material concerns.
  🟡 AMBER  — Acceptable with caveats. Manageable post-close.
  🔴 RED    — Material concern. Requires price adjustment, escrow, or
              walk-away discussion.

1. EXECUTIVE SUMMARY  (write LAST, place FIRST)
   - Overall verdict: STRONG ASSET / ACCEPTABLE WITH CAVEATS / CONCERNING / DO NOT PROCEED
   - 3 top strengths (one sentence each)
   - 3 top risks with R/A/G rating
   - Recommended deal conditions (escrow, reps & warranties, retention
     for key engineers, post-close investments needed)
   ≤400 words. Investment-committee language: no jargon.

2. CODEBASE HEALTH
   - Size: LOC by language (`cloc` or `tokei`)
   - Age: oldest and newest file, age distribution
   - Activity: commits over last 12 months, by month
   - Test coverage: if a coverage tool runs, report %; else heuristic
     (test file ratio, presence of CI green builds)
   - Build & CI: does it build green on a clean checkout? cite CI logs
     if visible
   Rating: 🟢 / 🟡 / 🔴 with one-sentence justification.

3. ARCHITECTURE
   - Style: monolith / modular monolith / services / serverless / mixed
   - Scalability ceiling visible in design (DB choices, stateful
     coupling, sync vs async patterns)
   - Modularity: can pieces be sold / extracted? (relevant for carve-outs)
   - Tech debt indicators: file size distribution, cyclomatic complexity
     hotspots if measurable, TODO/FIXME density
   Rating + justification.

4. SECURITY POSTURE
   - Authentication / authorization design (citing code)
   - Secrets handling (any committed secrets? `git log -p | grep -E
     'AKIA|sk_live|password'`)
   - Dependency vulnerabilities (npm audit / pip-audit output)
   - OWASP-class issues visible on inspection
   - Compliance signals: GDPR/HIPAA/PCI awareness in code (PII tagging,
     audit logging, retention policies)
   Rating + justification. RED if any committed secret or auth bypass.

5. DEPENDENCIES & LICENSING
   - Count of direct deps and transitive deps
   - Aged / unmaintained deps (no release in >2 years)
   - License spread; flag any GPL/AGPL/SSPL in a proprietary codebase
     ('GPL contamination' is a deal-killer for some buyers)
   - Single-source / single-maintainer critical deps (bus risk)
   - Commercial deps that the buyer will inherit (Oracle, ESRI,
     proprietary SDKs)
   Rating + justification.

6. OPERATIONS & RELIABILITY
   Evidence from repo of: CI/CD, IaC, observability (metrics, logs,
   traces), deployment automation, runbooks, disaster recovery,
   on-call configuration, SLO definitions. Note what is present and
   what is conspicuously absent.
   Rating + justification.

7. TEAM & KEY-PERSON RISK
   From `git log`:
     - Top 5 committers by lines / commits over last 12 months
     - Concentration: % of code authored by top 1 / top 3
     - Bus factor: how many people have touched each critical area
       (auth, billing, core domain)?
     - Reviewer concentration (if PR history visible)
   Concentration above ~60% in one author is a 🟡 minimum, 🔴 if that
   author is not in the retention plan.

8. INTELLECTUAL PROPERTY HYGIENE
   - Copyright headers consistent? attributed to the company?
   - Any third-party code copied in without attribution?
   - Patents referenced? open-source contributions made under
     individual vs. corporate identity?
   - Trademark / brand assets in repo?
   Rating + justification. This section catches deal-breakers that
   pure code review misses.

9. ROADMAP & DEFENSIBILITY (signals from code, not pitch deck)
   - What recent work suggests about strategic direction
   - Build vs. buy decisions visible in code (lots of glue code → high
     switching cost; lots of in-house equivalents to commodity SaaS →
     wasted effort)
   - Moat indicators: proprietary data pipelines, custom algorithms,
     network effects in design
   Rating + justification.

10. INVESTMENT THESIS CHECK
    Given <BUYER_CONTEXT> and <DEAL_SIZE>, does the code support the
    buyer's thesis?
    - Strategic acquisition for product: is the product extractable?
    - Strategic acquisition for team: where is the talent visible?
    - Financial investment for growth: does the architecture scale?
    - Roll-up: how integratable is this with adjacent assets?
    One paragraph answering this directly.

11. REPORT  ← the deliverable
   --- REPORT START ---
   # Technical Due Diligence — <TARGET>
   **Prepared for:** <CLIENT>
   **Commit assessed:** <SHA>   **Date:** <YYYY-MM-DD>
   **Confidentiality:** [Highly Confidential — Investment Decision Material]

   ## Executive Summary             (§1)
   ## Scope & Methodology           (one paragraph + tool list)
   ## R/A/G Dashboard               (one-line table of all section ratings)
   ## 1. Codebase Health            (§2)
   ## 2. Architecture               (§3)
   ## 3. Security Posture           (§4)
   ## 4. Dependencies & Licensing   (§5)
   ## 5. Operations & Reliability   (§6)
   ## 6. Team & Key-Person Risk     (§7)
   ## 7. IP Hygiene                 (§8)
   ## 8. Roadmap & Defensibility    (§9)
   ## 9. Investment Thesis Check    (§10)
   ## 10. Recommended Deal Terms    (escrow %, R&W focus, retention)
   ## 11. Open Questions for Mgmt   (5–15 items needing interview)
   ## 12. Limitations               (§12, verbatim — DO NOT EDIT)
   ## Appendix A: File inventory
   ## Appendix B: Commands run with versions
   --- REPORT END ---

12. LIMITATIONS & DISCLAIMER  (mandatory, verbatim — non-negotiable)
   "This Technical Due Diligence report was produced by an AI agent
    from static analysis of the repository at commit <SHA> on <date>.
    It is NOT a substitute for: legal due diligence (contracts,
    IP ownership, employment agreements, open-source compliance
    review by counsel), commercial due diligence (customer interviews,
    market sizing, revenue quality), financial due diligence
    (accounting standards, ARR quality, churn cohorts), or operational
    interviews with the engineering team. Findings are based on what
    is visible in the repository and may not reflect undocumented
    practices, runtime behaviour, third-party integrations not
    represented in code, or systems hosted elsewhere. R/A/G ratings
    apply standard industry heuristics without environmental context.
    This report is advisory; the commissioning party should
    corroborate material findings (especially §4 Security, §5
    Licensing, §7 Team) through independent verification before
    making binding investment decisions. The producing firm accepts
    no liability for decisions made solely on the basis of this
    document."

HARD RULES
- Every R/A/G rating cites at least one piece of code, commit log
  output, or dependency-manifest evidence.
- 🔴 RED ratings require an "Evidence" paragraph with file:line or
  command output — investment committees will ask.
- §12 LIMITATIONS is verbatim. Do not soften it. It is what protects
  you when the deal sours.
- Items not visible in the repo are flagged "[not visible in repo —
  requires management interview]" and listed in §11. Never speculate.
- Use the R/A/G emoji consistently — investment committees skim.
- Respond in the same language as the BUYER_CONTEXT input.

TARGET:
REPO:
BUYER_CONTEXT:
DEAL_SIZE:
CLIENT:
```

---

## What the buyer gets

A 25–60 page report investment committees actually read. R/A/G dashboard
on page 2, evidenced findings throughout, explicit deal-term
recommendations, and an interview list for management. The Limitations
page is what makes the engagement defensible — never ship without it.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For pre-seed companies with < 6 months of code history — too thin to assess credibly
- For non-acquisition contexts where the deliverable doesn't need R/A/G ratings — use AUDIT + ARCH instead
- When you don't have committed-code repo access — DD is code-grounded; without it the report is speculation
- For contested deals where legal counsel is already heavily engaged — coordinate with them first; don't issue parallel analysis

---

## Quality gate — verify before treating as done

- [ ] Every R/A/G rating cites code, commit log output, or dependency-manifest evidence
- [ ] Every 🔴 RED rating includes an Evidence paragraph with `file:line` or command output
- [ ] §12 LIMITATIONS verbatim per [`_LEGAL/MA-DD-DISCLAIMER.md`](./_LEGAL/MA-DD-DISCLAIMER.md), unmodified
- [ ] Items not visible in repo flagged `[not visible in repo — requires management interview]` (never invented)
- [ ] Executive Summary ≤ 400 words, plain language (no jargon)
- [ ] Liability cap consistent with the underlying engagement agreement
- [ ] R/A/G dashboard is on page 2 (skimmable for investment committee)
