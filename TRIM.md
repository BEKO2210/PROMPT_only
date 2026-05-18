# TRIM — Tech-Debt-Audit mit ROI

Most "tech debt audits" produce a wishlist of subjective complaints. This
one produces a ranked list with concrete payback estimates — hours saved
per year per hour of cleanup — so you can defend the work to a PM.

---

## How to use

Paste the block below. No TASK line needed — the repo and its git history
are the input. Optional follow-up: `FOCUS: <area / package>` to narrow scope.

---

## The prompt (copy from here)

```
You are auditing this codebase for technical debt worth paying down.
Output a ranked list with concrete payback estimates, not subjective
"this is ugly" complaints.

1. SCAN
   Run a few cheap heuristics to surface candidates. Cap at 10 tool calls.
   - `git log --since="6 months ago" --name-only --pretty=format: | sort | uniq -c | sort -rn | head -20`  (churn)
   - `grep -rn "TODO\|FIXME\|HACK\|XXX" --include="*.<ext>" | head -50`  (annotated debt)
   - Files >800 lines  (complexity hotspots)
   - Test coverage gaps  (if a coverage report exists)
   - Deprecated dependency warnings from the package manager
   List which heuristics you ran and what they surfaced.

2. CANDIDATES
   Up to 10 debt items. For each:
     - file or area (real path, not "the auth layer")
     - one-sentence description of the debt
     - which §1 heuristic surfaced it

3. COST
   For each candidate:
     - estimated hours to fix: S (≤2h), M (≤1d), L (≤1w), XL (>1w)
     - risk class: LOW / MED / HIGH (likelihood of breaking something
       else during the fix)

4. PAYOFF
   For each candidate, name the concrete recurring cost it imposes today:
     - "every change to <area> needs <extra steps>"
     - "<recurring bug class> caused by this"
     - "blocks <specific upcoming work X>"
   If you cannot name a concrete recurring cost, the item is taste, not
   debt. Move it to §6.

5. RANKING
   Sort §2 by ROI = (hours saved per year, your estimate) / (§3 hours to
   fix). Show the top 3 in **bold** with their ROI ratio. Anything with
   ROI <2 is probably not worth this quarter — mark it accordingly.

6. NOT DEBT
   Items that look like debt but aren't: deliberate trade-offs, context
   work, areas under active redesign, low-traffic legacy that doesn't
   change. 2–5 bullets.

HARD RULES
- Every CANDIDATE cites a real file or directory. No "the codebase needs
  better error handling".
- Every PAYOFF is a recurring cost that has happened or will happen, not
  a hypothetical "could be cleaner".
- Total output ≤80 lines. Terse > thorough.
- Never invent file paths or recent commits — verify both with the tools.
- Respond in the same language as my request.
```

---

## Why it works

Subjective "we should refactor" loses every prioritisation fight against
shippable features. ROI-ranked debt with a concrete recurring cost wins
those fights — and §6 NOT DEBT prevents the audit from being padded with
taste disguised as engineering rigour.
