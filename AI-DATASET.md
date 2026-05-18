# AI-DATASET — Quality Dataset Construction (verkaufbares Deliverable)

Constructs a quality training, evaluation, or fine-tuning dataset
from raw sources. Covers scoping, sampling, annotation guidelines,
inter-annotator agreement, quality gates, format (JSONL / Parquet),
licensing, PII handling, and dataset documentation (datasheet).
Dataset quality is the dominant factor in any ML / LLM project.

**Realistic engagement price: €3 000 – 15 000.** Recurring as the dataset is maintained and expanded.

---

## How to use

Paste the block below, then on the next line:

    PURPOSE: <training / fine-tuning / evaluation / RAG corpus>
    SOURCES: <where the raw data comes from>
    SIZE_TARGET: <number of examples needed>
    DOMAIN: <subject matter — be specific>
    LANGUAGES: <which language(s)>
    SENSITIVITY: <PII / confidential / public / mixed>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are designing and producing a high-quality dataset. The §10
REPORT is the deliverable, plus §8 DATASET FILE and §9 DATASHEET.
Three rules:

(1) GARBAGE IN = GARBAGE OUT. Most "AI failures" are dataset
    failures. Spend disproportionate effort on quality gates.
(2) DOCUMENT EVERYTHING. The datasheet (§9) outlasts the dataset
    — it tells future maintainers what's in it and why.
(3) PII AND LICENSING ARE BINARY. One contaminated record can
    void the dataset or trigger legal exposure. Audit ruthlessly.

1. SCOPE & PURPOSE
   - What will the dataset be used for? (Training / fine-tuning /
     eval / RAG corpus)
   - What does success look like? (Specific quality metric on
     downstream task)
   - Size target with justification (not just "more is better")
   - Domain boundaries (in-scope / out-of-scope topics)
   - Languages and regional varieties

2. SOURCE INVENTORY
   For each source in SOURCES input:
     - Type (public web / internal docs / customer data / synthetic /
       expert-written)
     - Volume available
     - Quality signal (curated / spam-prone / structured / free-text)
     - Licensing terms (CC-BY / CC0 / proprietary / unknown)
     - PII risk (none / low / medium / high)
     - Refresh cadence (static / rolling / one-shot)

3. SAMPLING STRATEGY
   - Coverage: stratified sample across domains, topics, formats,
     languages — not just "first N"
   - Difficulty: include easy + medium + hard examples (not just
     easy ones the model already handles)
   - Edge cases: rare but important inputs
   - Adversarial: examples designed to expose weaknesses (esp.
     for safety / eval datasets)
   - Balance: target distribution (50/50 if binary; calibrated for
     class imbalance otherwise)
   Cite the actual sampling method (stratified random, importance
   sampling, etc.).

4. ANNOTATION GUIDELINES
   For supervised data:
     - What each label means (precise definition, examples of
       borderline cases)
     - How to handle ambiguity (label set includes "unclear" /
       "no consensus")
     - Format requirements (length bounds, escape characters,
       allowed unicode)
     - Forbidden content (PII, copyrighted, harmful, hate)
   Guidelines must be specific enough that two annotators produce
   the same label.

5. ANNOTATION PROCESS
   - Who annotates (employees / contractors / domain experts /
     LLM-assist + human review)
   - Inter-annotator agreement target (Cohen's kappa > 0.7 for
     reliable; > 0.8 for high-stakes)
   - Pilot round: annotate 50–100 items by 2+ annotators, measure
     agreement, refine guidelines, re-pilot
   - Production round: single-annotator with N% double-coverage
     for quality audit
   - LLM-assist responsibly: model generates draft, human reviews
     and corrects — NEVER LLM-only labels at scale (model bias
     reinforces itself)

6. QUALITY GATES
   Per example, before inclusion:
     - PII detector check (regex for emails, phones, addresses;
       NER for names; cross-reference with PII inventories)
     - Duplicate detection (exact, near-duplicate, semantic)
     - Profanity / harmful content filter
     - Length bounds (too short = noise; too long = wasted tokens)
     - Format validation (JSON valid, fields present, types
       correct)
     - Toxicity / bias signal check (Perspective API or similar)
   Per dataset, before release:
     - Random sample audit by senior reviewer (50–100 items)
     - Distribution check (sampling strategy held)
     - Annotation consistency check
     - Licensing audit

7. PII & LICENSING HANDLING
   - PII removal: redaction / synthesis / aggregation
   - Anonymisation: enough to prevent re-identification (single
     anonymisation step often insufficient — k-anonymity / l-
     diversity considerations)
   - Consent documentation: where consent for data use exists,
     reference it
   - Licensing: every source's terms documented; if unclear, exclude
   - Forbidden categories: PHI under HIPAA, financial data under
     PCI, special-category PII under GDPR Art. 9 — handle per
     applicable regulation
   - Export controls (some sensitive technical data)

8. DATASET FILE  ← deliverable (a)
   --- DATASET START ---
   JSONL format (one record per line) by default:
   ```jsonl
   {"id": "DS-00001", "input": "...", "label": "...",
    "metadata": {"source": "...", "lang": "en", "difficulty": "med",
    "annotator": "anon-A1", "annotated_at": "2026-..."}}
   {"id": "DS-00002", ...}
   ```
   Plus train / validation / test split files where applicable
   (typically 70 / 15 / 15 or 80 / 10 / 10).
   --- DATASET END ---

9. DATASHEET  ← deliverable (b) — the long-term value
   Following the "Datasheets for Datasets" template (Gebru et al.):
     ## Motivation
       - Why was this dataset created? Who funded it?
     ## Composition
       - What does each instance represent?
       - How many instances? Sampled vs complete?
       - Each instance: input, label, metadata
       - Are there labels / targets per instance?
       - Missing information?
       - Sensitive / PII content?
     ## Collection process
       - How was data acquired?
       - Annotators, compensation, training
       - Time frame
       - Consent / ethical review
     ## Preprocessing / cleaning / labelling
       - What was done?
       - Was raw data saved alongside cleaned?
     ## Uses
       - What has the dataset been used for?
       - What should it NOT be used for?
       - Known biases / limitations
     ## Distribution
       - Will it be distributed? Under what licence?
       - Subject to copyright / IP / export control?
     ## Maintenance
       - Who maintains? How can errors be reported?
       - Will it be updated? On what cadence?

10. REPORT  ← deliverable (c)
    --- REPORT START ---
    # Dataset Construction Report — <Purpose>
    **Client:** <…>   **Date:** <…>   **Records delivered:** <N>

    ## Executive Summary             (≤300 words: dataset overview,
                                      quality signals, recommended
                                      use, known limitations)
    ## Scope & Purpose               (§1)
    ## Sources                       (§2)
    ## Sampling Strategy             (§3)
    ## Annotation Guidelines         (§4)
    ## Annotation Process & IAA      (§5, with κ scores)
    ## Quality Gates Applied         (§6, with rejection counts)
    ## PII & Licensing Audit         (§7, with findings)
    ## Datasheet                     (§9 — full)
    ## Limitations                   (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This dataset was constructed by an AI agent on <date> from
     SOURCES specified by the client. PII detection and removal
     followed automated heuristics; residual PII risk is non-zero
     and additional human review is recommended before public
     release. Licensing review reflects the agent's understanding
     of source terms at construction time; licensing terms change
     and downstream use must verify current applicability.
     Annotation quality, inter-annotator agreement, and downstream
     task performance reflect the §5 process; real-world model
     performance depends on multiple factors beyond dataset
     quality. For datasets used in regulated industries (medical,
     legal, financial, hiring), independent ethical and legal
     review is required before model training or deployment."

HARD RULES
- §6 quality gates are applied and the rejection counts reported.
  Skipping gates is not an option.
- PII handling is binary — every record passes or is excluded.
- §9 DATASHEET is non-negotiable. The dataset without its datasheet
  is half the deliverable.
- Annotation guidelines (§4) include borderline-case examples.
- Respond in the language of the DOMAIN input.

PURPOSE:
SOURCES:
SIZE_TARGET:
DOMAIN:
LANGUAGES:
SENSITIVITY:
CLIENT:
```

---

## What the buyer gets

A dataset file (JSONL or Parquet), train/val/test splits, and a
formal datasheet. The datasheet alone is what enterprise procurement
and AI Act conformity require — many off-the-shelf datasets cannot
be used in regulated contexts because they have no datasheet at all.
