# RAG-AUDIT — Retrieval-Augmented-Generation System Audit (verkaufbares Deliverable)

Audits an RAG system end-to-end: corpus quality, chunking, embedding
model, vector DB configuration, retrieval metrics (recall@k, MRR),
reranking, prompt template, citation handling, hallucination rate,
and cost per query. Brand-new market — most teams shipped RAG without
ever measuring it.

**Realistic engagement price: €3 000 – 15 000.**

---

## How to use

Paste the block below, then on the next line:

    SYSTEM: <RAG application name, what it answers, who uses it>
    CORPUS: <size, format, source — docs / code / chat history / mixed>
    STACK: <vector DB, embedding model, LLM provider, framework>
    GOLDEN_SET: <existing eval set if any, else: none>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a RAG-system audit. The §10 REPORT is the
deliverable. Three rules:

(1) Measure retrieval BEFORE you blame the LLM. 70% of RAG failures
    are retrieval failures the LLM is being asked to compensate for.
(2) Every metric on a real test query, with real corpus, against a
    golden set. Vibes-based claims about quality are worthless.
(3) Cost per query is a first-class output. RAG quality at €0.50
    per query is meaningless if the business model needs €0.005.

1. SCOPE & SYSTEM INVENTORY
   - System purpose and user persona
   - Corpus characteristics: doc count, average doc length, format
     distribution (PDF / HTML / Markdown / code / chat), language(s),
     update frequency
   - Stack: vector DB (Pinecone / Qdrant / Weaviate / pgvector /
     Chroma), embedding model (provider + version + dimensions),
     LLM (provider + model + version), framework (LangChain /
     LlamaIndex / custom)
   - Current cost per query if known

2. CORPUS QUALITY
   - Duplicate detection (near-duplicate docs inflating retrieval
     noise)
   - Stale content (last-updated timestamps; cite sample)
   - Format conversion losses (PDF tables → garbled text;
     code-fenced markdown blocks misparsed)
   - Language consistency vs query language
   - PII leakage risk (personal data in corpus going to LLM context)

3. CHUNKING STRATEGY
   - Current strategy (fixed-size / semantic / recursive / sentence /
     custom)
   - Chunk size + overlap
   - Boundary problems: chunks that split mid-table, mid-code-block,
     mid-section-heading
   - Metadata attached per chunk (source, page, section, timestamp)
   - Test: random chunk sample — do they make sense as standalone
     context?

4. EMBEDDING MODEL
   - Model choice rationale (general-purpose vs domain-specific)
   - Dimensions (latency + cost trade-off)
   - Multilingual coverage if corpus is multilingual
   - Whether embeddings are versioned (re-embedding cost when model
     changes)
   - Test: same query embedded with current vs alternative model —
     do top-k results materially differ?

5. RETRIEVAL METRICS  (the hard data)
   Build or use GOLDEN_SET (or derive one if absent) — minimum
   30 query/expected-answer pairs.
   For each query, measure:
     - Recall@k (does the expected doc appear in top-k)
     - MRR (Mean Reciprocal Rank — how high does it rank)
     - nDCG@10 (graded relevance)
     - Latency per query (p50 / p95)
   Baseline at k = 3, 5, 10. Most RAG bugs are visible here.

6. RERANKING
   - Is a reranker present? (Cohere Rerank, BGE Reranker, custom
     cross-encoder)
   - If yes: measure the lift over no-reranker baseline
   - If no: estimate expected lift to recommend ROI
   - Latency cost of reranking
   - Top-N reranked vs top-K retrieved tuning

7. QUERY-SIDE
   - Query expansion / rewriting (HyDE, multi-query, decomposition)
   - User-input preprocessing (typo correction, language detection)
   - Filter / metadata-based pre-narrowing
   - Hybrid search (dense + BM25) — present? measured lift?

8. PROMPT & CITATION HANDLING
   - System prompt design: clear instruction to ground in retrieved
     context only
   - Citation requirement: agent cites source per claim?
   - Refusal behaviour when context is insufficient ("I don't have
     that information" vs hallucinating)
   - Adversarial test: ask a question NOT in corpus — does it
     refuse or fabricate?

9. END-TO-END QUALITY
   On the GOLDEN_SET, score full response quality:
     - Faithfulness (claim grounded in retrieved context — RAGAS
       / Phoenix / human eval)
     - Answer relevance
     - Citation accuracy (cited sources actually support the claim)
     - Hallucination rate (% of responses with unsupported claims)
   Hallucination > 5% is typically a retrieval problem (not enough
   relevant context) or prompt problem (LLM too lax).

10. REPORT  ← the deliverable
    --- REPORT START ---
    # RAG System Audit — <System>
    **Client:** <…>   **Stack:** <…>   **Date:** <…>

    ## Executive Summary             (≤300 words: posture, top 3
                                      issues, expected quality lift
                                      from top 3 fixes, cost-per-
                                      query trajectory)
    ## Scope & Stack                 (§1)
    ## Corpus Quality                (§2)
    ## Chunking                      (§3)
    ## Embedding                     (§4)
    ## Retrieval Metrics             (§5 — main payoff)
    ## Reranking                     (§6)
    ## Query-Side                    (§7)
    ## Prompt & Citation             (§8)
    ## End-to-End Quality            (§9)
    ## Cost Per Query                (current vs projected after fixes)
    ## Recommended Roadmap           (ranked by quality-lift × ease)
    ## Limitations                   (§11, verbatim)
    --- REPORT END ---

11. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> against the
     RAG system in <environment>. Retrieval metrics are computed on
     a <N>-item golden set; production behaviour at scale and with
     real-user query distributions may differ. LLM behaviour is
     stochastic; faithfulness and hallucination metrics are run
     point-in-time and may shift when foundation models update
     without notice. Cost-per-query estimates use current provider
     pricing; provider pricing changes alter the economic baseline.
     This audit does not include: adversarial security testing
     (see PROMPT-SECURITY.md), data-leakage audit of training-time
     embeddings (typically a separate engagement), or human-eval
     studies beyond the agent's own evaluation."

HARD RULES
- Every quality claim is backed by a measured metric on a real
  query set. "Improved relevance" without a measured delta is
  banned.
- Cost per query is a first-class output, not buried in an
  appendix.
- The §5 retrieval-metric section is the audit's centre of mass —
  spend disproportionate effort here.
- Respond in the language of the SYSTEM input.

SYSTEM:
CORPUS:
STACK:
GOLDEN_SET:
CLIENT:
```

---

## What the buyer gets

A 25–40 page audit with measured retrieval and end-to-end metrics
plus a ranked fix roadmap. The retrieval-metrics section alone
typically reveals 2–5 fixable issues (better chunking, reranker,
hybrid search) that lift answer quality 20–50% with no LLM swap
required.

---

## Version

`v1.0` — initial release.

---

## When NOT to use this prompt

- For pure-prompt LLM applications without retrieval — use [`EVAL-DESIGN.md`](./EVAL-DESIGN.md) instead
- For RAG systems still in prototype with no golden set — build the 30+ item golden set first (use EVAL-DESIGN)
- For pure research / experimental RAG without production users — methodology calibrated for production systems
- For embedding-model selection alone — narrower than full audit; specialised benchmark suffices

---

## Quality gate — verify before treating as done

- [ ] §5 retrieval metrics computed on a real ≥ 30-item golden set with human-validated expected documents
- [ ] Every retrieval metric (recall@k, MRR, nDCG) backed by actual measurement, not estimate
- [ ] Cost-per-query computed transparently with provider-pricing line items
- [ ] §9 end-to-end quality includes a measured hallucination rate
- [ ] §10 recommendations ranked by quality-lift × ease (not by personal interest)
- [ ] §11 LIMITATIONS per [`_LEGAL/AUDIT-DISCLAIMER.md`](./_LEGAL/AUDIT-DISCLAIMER.md) + [`_LEGAL/ESTIMATES-NOT-GUARANTEES.md`](./_LEGAL/ESTIMATES-NOT-GUARANTEES.md)
- [ ] If §5 shows retrieval as root cause, LLM is not blamed (and vice versa)
