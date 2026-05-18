# EVAL-DESIGN — LLM Evaluation Framework (verkaufbares Deliverable)

Designs an evaluation framework for an LLM application from scratch:
golden set construction, eval categories (accuracy / safety /
helpfulness / format / cost), automated vs human eval, regression
suite, A/B testing protocol for prompt and model changes. Without an
eval framework, every prompt change is guesswork.

**Realistic engagement price: €3 000 – 12 000.** Often paired with a quarterly retainer to maintain the suite.

---

## How to use

Paste the block below, then on the next line:

    APP: <LLM application, primary use case>
    QUALITY_GOALS: <what "good" means — accuracy / completeness / tone / cost>
    SAFETY_CONCERNS: <what must NEVER happen — refusal cases>
    SCALE: <queries per day, user count, criticality>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are designing an evaluation framework for an LLM application.
The §9 REPORT is the deliverable, plus §7 GOLDEN SET file and §8
EVAL RUNNER spec. Three rules:

(1) The golden set IS the product. Without it, every "improvement"
    claim is unmeasurable.
(2) Eval categories are independent. Don't average them — a system
    that's 95% accurate but 30% unsafe is broken.
(3) Automate ruthlessly, human-eval sparingly. Humans only judge
    what automation cannot.

1. SCOPE & QUALITY DIMENSIONS
   What does "good" mean for this app? Decompose:
     - ACCURACY: factual correctness (where ground truth exists)
     - COMPLETENESS: covered all aspects of the request
     - HELPFULNESS: actually solved the user's problem
     - FORMAT: structured output matches spec (JSON valid, fields
       present, types correct)
     - SAFETY: never produces prohibited outputs
     - TONE / VOICE: matches brand voice
     - COST: latency + token cost within budget
     - GROUNDING (for RAG): claims supported by retrieved context
   For each, define what failure looks like. Be specific.

2. GOLDEN SET CONSTRUCTION
   Build a representative test set:
     - Source: production query logs (sanitised), customer support
       tickets, edge cases reported, adversarial prompts
     - Size: 100–500 items for an MVP, growing with deployment
     - Coverage:
       * HAPPY PATH (60–70%): common user queries
       * EDGE CASES (15–25%): unusual but valid inputs
       * ADVERSARIAL (10–15%): jailbreak / injection / out-of-scope
       * SAFETY (5–10%): items that MUST be refused or escalated
     - Per item: ID, category, input, expected behaviour (not
       always expected output — sometimes "refuses politely")
   Distinguish:
     - Reference answers (when there's one right answer)
     - Rubric-based (when judgement is needed; provide rubric)
     - Behaviour assertions (when format / refusal matters more
       than content)

3. AUTOMATED EVAL METHODS
   For each §1 dimension, which method fits:
     - String match / regex / JSON-schema validation (cheapest,
       use first)
     - Embedding similarity (semantic match against reference)
     - LLM-as-judge with structured rubric (cost: a fraction of
       human eval, results comparable for non-subjective categories)
     - Tool-output validation (does the function call match
       expected?)
     - Custom heuristics (named-entity match, citation presence,
       length bounds)
   Cite specific tools where applicable: pytest, DeepEval, Promptfoo,
   Phoenix, RAGAS, LangSmith, custom.

4. HUMAN EVAL  (sparingly)
   Reserve for:
     - Tone / voice (LLM-as-judge unreliable)
     - Helpfulness when subjective
     - Calibrating automated eval against ground truth
   Specify:
     - Reviewers (1–3 per item, inter-rater agreement target)
     - Scoring scale (Likert 1–5 with anchors; binary
       pass/fail where possible)
     - Sample size needed for statistical confidence
     - Cost per reviewed item

5. SAFETY EVAL  (hard pass/fail, never averaged in)
   Adversarial test set covering:
     - Prompt injection (direct and indirect)
     - PII exfiltration attempts
     - Out-of-scope topics (legal / medical / financial advice if
       not licensed)
     - Jailbreak patterns (persona switching, encoding bypass)
     - Bias triggers (sensitive demographics in input)
   Pass criterion: 100% safe-behaviour required. Anything less is
   a release blocker.

6. REGRESSION SUITE
   - Which subset runs on every prompt / model / system-prompt
     change (fast: 50–200 items)
   - Which subset runs nightly / weekly (full golden set)
   - Failure thresholds (overall pass rate, per-category pass rate
     — any drop > X% blocks deploy)
   - Diff reporting (show what changed vs prior version)

7. GOLDEN SET FILE  ← deliverable (a)
   --- GOLDEN SET START ---
   ```jsonl
   {"id": "EVAL-001", "category": "happy", "dimension": "accuracy",
    "input": "...", "expected": "...", "rubric": "...", "weight": 1}
   {"id": "EVAL-002", "category": "safety", "dimension": "safety",
    "input": "...", "expected_behavior": "refuse and escalate",
    "blocker": true}
   ...
   ```
   --- GOLDEN SET END ---

8. EVAL RUNNER SPEC  ← deliverable (b)
   The pseudo-code / pipeline the client implements:
     - Load golden set
     - For each item: run app, collect output, run dimension-
       specific evaluator
     - Aggregate per dimension (pass rate, percentile, cost)
     - Compare to baseline
     - Output: dashboard, regression report, alerting on threshold
       breaches
   Spec the CI integration (run on PR; block merge if regression).

9. REPORT  ← deliverable (c)
   --- REPORT START ---
   # Evaluation Framework — <Application>
   **Client:** <…>   **Date:** <…>

   ## Executive Summary             (≤300 words: framework summary,
                                     immediate value, ongoing cost)
   ## Quality Dimensions            (§1)
   ## Golden Set Strategy           (§2)
   ## Evaluation Methods            (§3, §4)
   ## Safety Eval                   (§5)
   ## Regression & CI               (§6)
   ## Tooling Recommendations       (specific stack with cost)
   ## Operating Model               (who owns the golden set, who
                                     reviews failures, cadence)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This framework was designed by an AI agent on <date> from
     analysis of the application's documented use cases. The golden
     set provided is an initial seed and must be expanded with
     real production query logs over the first 30–90 days to
     reflect actual user behaviour. Evaluation criteria reflect the
     stated QUALITY_GOALS at design time; if business requirements
     shift, the rubric requires update. LLM-as-judge evaluations
     correlate with but do not perfectly substitute for expert
     human judgement; calibration against human eval is recommended
     quarterly. This framework does not include: adversarial
     security testing beyond the §5 scope (see PROMPT-SECURITY.md),
     business-outcome measurement (conversion / activation lifts
     from LLM improvements require separate measurement)."

HARD RULES
- Safety eval is binary pass/fail. Any item failing it blocks
  deploy.
- Per-dimension reporting only. Averaging across accuracy + safety
  + cost is meaningless.
- Initial golden set is provided as a real JSONL file the client
  loads into their pipeline.
- Evaluation methods are picked by COST and RELIABILITY trade-off
  per dimension. LLM-as-judge isn't always best.
- Respond in the language of the APP input.

APP:
QUALITY_GOALS:
SAFETY_CONCERNS:
SCALE:
CLIENT:
```

---

## What the buyer gets

A complete evaluation framework: golden set file, eval runner spec,
CI integration plan, operating model. As a retainer (€500-2 000/month),
maintain the golden set with production data and run quarterly
calibration against human eval.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For ad-hoc model comparison — design eval requires commitment to ongoing framework
- Before exhausting prompt-engineering improvements — see [`FINE-TUNE-PLAN.md`](./FINE-TUNE-PLAN.md) §3 decision tree
- When client lacks stakeholder buy-in to maintain golden set — eval rots without an owner
- For business-outcome measurement (conversion, retention lift) — different methodology entirely

---

## Quality gate — verify before treating as done

- [ ] Initial golden set is a real JSONL file the client loads into pipeline (not a template)
- [ ] Safety eval is binary pass / fail with `blocker: true` flag — never averaged into composite scores
- [ ] Each quality dimension reports its own pass-rate (no rolled-up "85% good" scores)
- [ ] LLM-as-judge usage is justified per dimension, not blanket-applied
- [ ] §10 LIMITATIONS present
- [ ] Operating model names who owns the golden set (without an owner, the eval fails)
- [ ] Regression suite distinguishes fast (PR-blocking, 50–200 items) from full (nightly / weekly)
