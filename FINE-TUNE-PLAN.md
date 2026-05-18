# FINE-TUNE-PLAN — Fine-Tuning Engagement Plan (verkaufbares Deliverable)

Plans a fine-tuning project end-to-end: whether fine-tuning is justified
(vs few-shot / vs RAG / vs better prompt), base model selection,
dataset requirements, training/eval split, hyperparameter approach,
deployment strategy, and cost estimate. Most "we should fine-tune"
conversations end with a different answer once you actually plan it.

**Realistic engagement price: €5 000 – 25 000.** Engagement frequently transforms into "don't fine-tune yet" + revised approach.

---

## How to use

Paste the block below, then on the next line:

    GOAL: <what you want the fine-tuned model to do that base + prompt can't>
    CURRENT: <current approach — base model + prompt / few-shot / RAG>
    DATA: <training data available or producible — quantity, quality, source>
    BUDGET: <project budget + monthly inference cost target>
    DEPLOYMENT: <where it runs — hosted / on-premise / edge>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a fine-tuning engagement plan. The §10 REPORT is
the deliverable. Three rules:

(1) JUSTIFY before planning. Fine-tuning is the right answer ~20%
    of the time someone proposes it. The other 80% want better
    prompts, RAG, few-shot, or a different base model. The §3
    decision tree is your most important section.
(2) Data quality dominates everything. 100 perfect examples beat
    10 000 mediocre ones. A bad dataset produces a worse model than
    the base.
(3) Evaluation BEFORE training. Without an eval set (see
    EVAL-DESIGN.md), you cannot tell if fine-tuning helped.

1. GOAL DECOMPOSITION
   From GOAL input, what specifically does the model need to do
   better?
     - Domain knowledge (knows specific jargon, facts, products)
     - Style / tone (consistent voice, formatting)
     - Format compliance (always returns valid JSON / structured
       output)
     - Behaviour (always refuses category X, always responds in
       language Y)
     - Latency / cost (smaller model matching larger model's
       quality)
   Each of these has a different cheapest answer — fine-tuning
   isn't always it.

2. CURRENT-STATE BASELINE
   On the CURRENT approach, measure quality on the same eval set
   you'll use to judge the fine-tune. If no eval set exists, BUILD
   ONE FIRST (see EVAL-DESIGN.md). Fine-tuning without before/after
   metrics is faith-based engineering.

3. SHOULD-WE-FINE-TUNE DECISION TREE
   Walk these in order:
     a. Can a better prompt achieve the goal? Try ablations:
        better instructions, examples (few-shot), Chain-of-Thought,
        output format constraints, role / persona. Fine-tuning is
        not justified if a prompt change gets you 80% of the way.
     b. Is the gap one of KNOWLEDGE? Then RAG, not fine-tuning.
        Fine-tuning is bad at adding facts; it's good at adding
        styles / behaviours.
     c. Is the gap one of LATENCY / COST? Could a smaller base
        model (Haiku / Mini) with current prompt suffice? Sometimes.
     d. Is the gap one of STYLE / FORMAT / DOMAIN-SPECIFIC
        BEHAVIOUR consistent across many examples? Now we're in
        fine-tuning territory.
     e. Is there enough data of sufficient quality to fine-tune
        (see §5)? If no, stop — generate or skip.
     f. Will the fine-tuned model be re-trained as the world
        changes? If yes, factor recurring cost.

4. APPROACH SELECTION  (only if §3 passes)
   - Full fine-tuning vs LoRA / QLoRA / PEFT
   - Base model: closed (OpenAI / Anthropic fine-tune APIs) vs
     open-weights (Llama / Mistral / Gemma on your infra)
   - Quantisation if open-weights (4-bit / 8-bit / 16-bit trade-offs)
   - Hosting: provider-managed (cheaper to start, scales with
     usage) vs self-hosted (cheaper at scale, ops cost)

5. DATA REQUIREMENTS
   - Minimum dataset size: depends on technique
     * LoRA on stylistic tasks: 500–5 000 examples often enough
     * Full fine-tuning: thousands to tens of thousands
     * Behavioural / safety fine-tunes: 1 000+ high-quality
   - Quality criteria: each example should be representative of
     what production looks like
   - Format: prompt + completion pairs (or messages array for
     chat models)
   - Coverage: edge cases included, not just happy paths
   - Validation split: 10–20% held out for eval
   - Test split: separate from validation, never seen by training
   - Bias / safety review of the dataset itself

6. TRAINING PLAN
   - Hyperparameters: learning rate, epochs, batch size, warmup
   - Early stopping criteria
   - Eval cadence during training (perplexity on val set; sample
     generation review)
   - Compute estimate (GPU hours, cost)
   - Reproducibility: seed, logged dataset version, logged
     hyperparameters, model registry

7. EVALUATION POST-TRAINING
   - Same eval set as §2 baseline (apples-to-apples)
   - Per-dimension comparison (accuracy, format, style, safety)
   - Regression check: did fine-tuning HURT anything the base did
     well? (catastrophic forgetting is real)
   - Cost-per-query: training cost amortised over deployment
     volume; inference cost per query
   - Decision: ship / iterate / abandon

8. DEPLOYMENT STRATEGY
   - Shadow deploy: route 5% of traffic, compare to baseline
   - Canary rollout: ramp by 10% per week with monitoring
   - Rollback plan: keep base model as fallback
   - Monitoring: per-dimension quality, latency, cost, error rate
   - Retraining cadence: when does this model go stale?

9. COST ESTIMATE
   Itemised:
     - Data preparation cost (human time × hours OR labelling-
       service fee)
     - Compute for training (GPU-hours × rate)
     - Eval set construction (if not done)
     - Hosted-fine-tune API cost (if applicable)
     - Self-hosting infra cost (if applicable, monthly)
     - Ongoing eval / monitoring cost
     - Retraining budget per cycle
   Total: best / likely / worst case.

10. REPORT  ← the deliverable
    --- REPORT START ---
    # Fine-Tuning Engagement Plan — <Goal>
    **Client:** <…>   **Date:** <…>

    ## Executive Summary             (≤300 words: should-we-fine-
                                      tune verdict, recommended
                                      alternative if no, planned
                                      approach + cost if yes, expected
                                      quality lift)
    ## Goal Decomposition            (§1)
    ## Current Baseline              (§2)
    ## Decision Tree Walkthrough     (§3 — surface the verdict)
    ## Approach Selection            (§4 — only if fine-tuning
                                      justified)
    ## Data Plan                     (§5)
    ## Training Plan                 (§6)
    ## Evaluation Plan               (§7)
    ## Deployment Plan               (§8)
    ## Cost Estimate                 (§9)
    ## Limitations                   (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This plan was produced by an AI agent on <date> from analysis
     of the application's current state and stated goals. Quality
     lift estimates are forecasts based on analogous fine-tuning
     outcomes; actual results require execution and measurement.
     Cost estimates use current provider pricing; provider pricing
     and base-model availability change frequently and may alter
     economics. This plan does not include: legal review of training
     data licensing (training on third-party content has IP
     implications), bias / fairness assessment beyond §5 dataset
     review (regulated industries require additional auditing), or
     foundation-model providers' specific terms of service (some
     restrict competitive-model training)."

HARD RULES
- §3 decision tree concludes BEFORE any plan is written. If the
  recommendation is "don't fine-tune", report stops at §3 with the
  alternative recommendation.
- Data quantity numbers are honest — never claim "you have enough
  data" if §5 says otherwise.
- Cost estimates are RANGES with the assumption stated.
- Eval set construction is a hard prerequisite — if none exists,
  it's a precursor engagement (see EVAL-DESIGN.md).
- Respond in the language of the GOAL input.

GOAL:
CURRENT:
DATA:
BUDGET:
DEPLOYMENT:
CLIENT:
```

---

## What the buyer gets

A 20–40 page plan whose first deliverable is often "you don't need
fine-tuning yet — try X first." That honesty is the engagement value:
clients who get told the cheap answer first become repeat customers.
For the cases where fine-tuning IS justified, a complete project plan
with cost, timeline, and decision gates.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- Before exhausting cheaper alternatives — §3 decision tree lists them; fine-tuning is the right answer ~20% of the time
- For fact-injection use cases — RAG is correct, not fine-tuning (fine-tuning is bad at adding facts)
- When client lacks an eval set — that's the prerequisite, see [`EVAL-DESIGN.md`](./EVAL-DESIGN.md)
- For one-off use cases without planned retraining cadence — too expensive for single-use

---

## Quality gate — verify before treating as done

- [ ] §3 decision tree concluded honestly — if "don't fine-tune", report stops at §3 with the alternative recommendation
- [ ] Data quantity claims (§5) honest; never inflate "you have enough data"
- [ ] Cost estimates are RANGES with stated assumptions (not point values)
- [ ] Catastrophic-forgetting check planned in §7 evaluation
- [ ] §8 deployment plan includes shadow / canary / rollback strategy
- [ ] §11 LIMITATIONS present
- [ ] If recommendation is "fine-tune", report defends WHY (vs all §3 alternatives) — never default to fine-tune
