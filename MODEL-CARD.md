# MODEL-CARD — Model / System Card (verkaufbares Deliverable)

Generates a formal model card or system card following the standard
template (Mitchell et al., adopted by Hugging Face, Google, and
mapped to EU AI Act technical documentation requirements). Required
artefact for any ML / LLM system shipped to enterprise, regulated,
or AI-Act-scoped deployment.

**Realistic engagement price: €2 000 – 8 000.**

---

## How to use

Paste the block below, then on the next line:

    MODEL: <model name, version, owner>
    TYPE: <classification / regression / generation / embedding / RL / multimodal>
    BASE: <if fine-tuned from a base model, name and version>
    INTENDED_USE: <primary, secondary, out-of-scope uses>
    TRAINING_DATA: <description of training data sources>
    EVAL_RESULTS: <existing eval metrics — paste verbatim>
    DEPLOYMENT: <where it runs, who uses it, what consequences attach>

---

## The prompt (copy from here)

```
You are producing a formal model card. The §10 CARD is the
deliverable. Three rules:

(1) DOCUMENT LIMITS HONESTLY. The value of a model card is what it
    SAYS NOT TO DO. A card that under-states limits is useless to
    reviewers and dangerous to deployers.
(2) NUMBERS REQUIRE EVIDENCE. Every quoted metric comes from a
    real evaluation. If EVAL_RESULTS is incomplete, mark sections
    "[evaluation pending]".
(3) AI ACT MAPPING. For EU deployment, model card must support
    Annex IV technical documentation requirements (Art. 11 AI Act).
    Cite article alignment where applicable.

1. SCOPE
   What model, version, owner / steward. Date of card. Link to
   model artefact (if internal: model-registry URI; if external:
   Hugging Face URL).

2. MODEL DETAILS
   - Type and architecture (e.g. "Transformer-based encoder, 1.5B
     parameters, fine-tuned from base X")
   - Modalities (text / image / audio / video / multimodal)
   - Languages supported
   - Input format
   - Output format
   - Licence
   - Citation (suggested citation format if research output)

3. INTENDED USE
   - PRIMARY USE: the specific tasks it was built for. Be precise
     (not "general NLP" — "classifying customer support tickets
     into routing categories from English-language ServiceNow
     dataset").
   - SECONDARY USE: tasks plausibly aligned but not validated.
     Use with caution flag.
   - OUT-OF-SCOPE: tasks it was NOT designed for. List explicitly
     — this is the most-read section in deployment review.
   - INTENDED USERS: who should use this (engineers / end-users /
     data scientists / regulated-industry-only)
   - PROHIBITED USE: any uses prohibited by Art. 5 EU AI Act or
     by explicit policy

4. TRAINING DATA
   - Data sources (with licensing where applicable)
   - Volume and time range
   - Languages, regions, demographic coverage where relevant
   - Preprocessing applied
   - Known biases in the training data
   - Reference to dataset(s) and their datasheets (link to
     AI-DATASET.md output if produced)

5. EVALUATION
   - Evaluation datasets used (with their characteristics)
   - Metrics computed (per-task, per-segment)
   - Performance disaggregated by subgroup where applicable
     (demographic, language, region) — required for AI Act
     high-risk systems
   - Comparison to baseline / prior version / similar models
   - Robustness tests (adversarial, OOD, perturbation)
   - All numbers cited from EVAL_RESULTS input — none invented

6. ETHICAL CONSIDERATIONS
   - Risks: privacy, fairness, safety, dual-use
   - Mitigations applied (data filtering, RLHF, content policies,
     output filters)
   - Known failure modes
   - Vulnerable populations potentially affected
   - Bias considerations and how measured

7. CAVEATS & RECOMMENDATIONS
   - When NOT to use this model
   - When to seek human oversight
   - When to retrain / re-evaluate
   - Monitoring recommendations in production

8. ENVIRONMENTAL IMPACT  (often required by procurement / ESG)
   - Compute used for training (GPU-hours, hardware type)
   - Estimated CO₂eq (if computable from compute × grid intensity)
   - Inference cost per query (compute, energy)

9. CHANGE LOG
   - Version history of the model and the card
   - What changed between versions
   - Deprecation notices

10. CARD  ← the deliverable
    --- MODEL CARD START ---
    # Model Card: <Model Name v X.Y>
    **Owner:** <…>   **Date:** <…>   **Licence:** <…>

    ## Model Details                 (§2)
    ## Intended Use                  (§3)
    ## Training Data                 (§4)
    ## Evaluation                    (§5)
    ## Ethical Considerations        (§6)
    ## Caveats & Recommendations     (§7)
    ## Environmental Impact          (§8)
    ## Change Log                    (§9)
    ## EU AI Act Article 11 Mapping  (table: each Annex IV item
                                      vs which §section satisfies it)
    ## Limitations of this card      (§11, verbatim)
    --- MODEL CARD END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This model card was produced by an AI agent on <date> from
     documentation, code, and evaluation outputs provided by the
     model owner. Evaluation metrics reflect the EVAL_RESULTS
     supplied at card-creation time; metrics may drift as data
     distributions shift or as upstream dependencies (base models,
     embeddings) update. Subgroup performance disaggregation
     (§5) is only as complete as the source evaluation; absent
     subgroup metrics should not be interpreted as parity.
     Environmental impact (§8) is an estimate based on disclosed
     compute; provider-side optimisations may reduce actual
     impact. For models intended for EU AI Act high-risk
     deployment, this card supplements but does not substitute
     for the full Annex IV technical documentation required by
     Art. 11; legal / regulatory review before deployment is
     mandatory."

HARD RULES
- §3 OUT-OF-SCOPE is mandatory and non-trivial. A model card
  without explicit out-of-scope is suspect.
- §5 evaluation numbers come from real EVAL_RESULTS — never
  invented. "[evaluation pending]" is preferable to fabrication.
- §6 ethical considerations include negative findings honestly.
  The model card is the place truth lives — if it's not here,
  no one finds it.
- AI Act mapping table is included for any EU-deployed system,
  even if just to mark "not high-risk under §6 — limited-risk
  obligations only".
- Respond in the language of the MODEL input documentation.

MODEL:
TYPE:
BASE:
INTENDED_USE:
TRAINING_DATA:
EVAL_RESULTS:
DEPLOYMENT:
```

---

## What the buyer gets

A 5–15 page formal model card ready to publish alongside the model
artefact (in the model registry, on Hugging Face, in vendor
documentation). For AI Act conformity and enterprise procurement,
the card is the artefact reviewers and auditors actually read.
