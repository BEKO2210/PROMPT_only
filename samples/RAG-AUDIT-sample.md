# Sample: RAG-Audit for fictional internal-docs chatbot

**Source prompt:** `RAG-AUDIT.md`
**Engagement:** Audit of "AskMaple", an internal-documentation
chatbot at "Maple Industries" (fictional 4 000-employee
manufacturer) used by ~600 engineers daily.

All entities, metrics, and findings are **fictional**. This shows
the deliverable shape including the §5 retrieval-metrics section
that drives most of the engagement value.

---

# RAG System Audit — AskMaple v2.1

**Client:** Maple Industries Engineering Productivity Team
**Stack:** Pinecone (us-east-1) · OpenAI `text-embedding-3-large`
· GPT-4o · LangChain orchestration
**Date:** 2026-05-15
**Auditor:** [Your firm]

---

## Executive Summary

**Overall posture: CONCERNING — retrieval is the dominant
problem; LLM is being asked to compensate for what retrieval
should be doing.**

- Faithfulness on golden set: 71% (target 90%)
- Hallucination rate: 14% (target <5%)
- Recall@5: 64% (target >85%) — **root cause of most quality
  issues**
- Cost per query: $0.024 average (high for internal-docs use case)

**Top 3 issues**
1. Chunking strategy fixed-size 512 tokens splits across section
   boundaries — explains ~40% of retrieval misses
2. No reranker — adding one (Cohere Rerank 3 or BGE) projected
   to lift Recall@5 from 64% to 82%
3. Cost per query inflated by 4-pass query expansion that does
   not measurably improve quality

**Projected after top 3 fixes**
- Faithfulness: 87%
- Hallucination: 6%
- Recall@5: 84%
- Cost per query: $0.008 (66% reduction)

---

## 1. Scope & Stack Inventory

- Purpose: answer engineers' questions about Maple's internal
  systems, processes, and historical decisions
- Corpus: 12 400 documents (Confluence + Notion + 4 internal
  wikis + 1 800 PDFs), updated weekly
- Languages: English (98%), German (2%)
- Stack: per header
- Current cost: ~$14 400/month at ~20 000 queries/day

## 5. Retrieval Metrics — Golden Set Results

We constructed a 47-query golden set from sampled real production
queries (sanitised), with human-validated expected documents.

| Metric | @ k=3 | @ k=5 | @ k=10 |
|---|---|---|---|
| Recall (target doc in top-k) | 49% | 64% | 78% |
| MRR | 0.41 | 0.46 | 0.47 |
| nDCG | 0.39 | 0.48 | 0.55 |
| Latency p50 | 240ms | 240ms | 260ms |
| Latency p95 | 480ms | 480ms | 510ms |

At k=5 (the production setting), **36% of queries miss the
expected document entirely** — the LLM either fabricates an
answer or refuses. This is the dominant quality driver.

### Per-failure-mode breakdown

| Failure mode | % of misses |
|---|---|
| Chunk split across section boundary | 41% |
| Embedding semantic miss (right doc, wrong distance) | 28% |
| Document not in corpus (gap, not RAG bug) | 14% |
| Query too vague to retrieve specifically | 11% |
| Other | 6% |

The first three are addressable in the RAG layer. The fourth is
a UX problem (query clarification before retrieval).

## 3. Chunking Strategy

Current: fixed-size 512 tokens, 50-token overlap, recursive
text splitter from LangChain default config.

Problems observed:
- Headings get separated from their content (heading in chunk N,
  body in chunk N+1)
- Code blocks split mid-function in ~12% of technical docs
- Markdown tables fragment in ~30% of cases (each row separately)

Recommended: semantic chunking with markdown-aware splitter,
target 600–900 tokens per chunk respecting heading boundaries,
preserve code blocks intact, keep table rows together.

Projected impact: Recall@5 from 64% to ~74% (chunking alone).

## 6. Reranking

Current: none. Top-k from vector search goes directly to LLM
context.

Test: same 47-query golden set, top-20 from Pinecone fed through
Cohere Rerank 3, take top-5 reranked.

| Metric | No rerank | With Cohere Rerank 3 |
|---|---|---|
| Recall@5 | 64% | 82% |
| MRR | 0.46 | 0.71 |
| Added latency p50 | — | +180ms |
| Added cost per query | — | +$0.0006 |

ROI: +18 pp Recall for +180ms latency + $0.0006. Strongly
recommended.

## 9. End-to-End Quality (current state)

On the golden set:
- Faithful (claim grounded in retrieved context): 71% of
  responses
- Hallucinated (claim NOT grounded): 14%
- Refusal ("I don't have that information"): 15% — appropriate
  when retrieval missed
- Citation accuracy (cited source actually supports cited claim):
  78%

The 14% hallucination rate correlates strongly with §5 retrieval
misses — when retrieval returns nothing relevant, the LLM
fabricates rather than refusing.

## Cost per Query

| Component | Current cost | Projected after fixes |
|---|---|---|
| Query embedding | $0.00002 | $0.00002 |
| Pinecone query | $0.0001 | $0.0001 |
| Query expansion (4 LLM calls) | $0.012 | $0 (REMOVE) |
| Reranking | $0 | $0.0006 |
| Main LLM (GPT-4o) | $0.011 | $0.007 (smaller context) |
| **Total** | **$0.024** | **$0.008** |

At 20 000 queries/day: current $14 400/month → projected
$4 800/month. **Savings of ~$115 000/year alone justify the
engagement.**

## 10. Recommended Roadmap

Ranked by quality-lift × ease:

1. **Add Cohere Rerank 3** — Recall@5 64% → 82%; 1-day
   implementation; LOW risk
2. **Remove query expansion** — quality flat, cost down 50%;
   2-hour change; LOW risk
3. **Switch to semantic markdown-aware chunking** — Recall@5
   another +10pp; 1-week implementation; MEDIUM risk (re-embed
   corpus)
4. **Tighten LLM prompt to refuse-or-cite-only** — drops
   hallucination 14% → ~6%; 1-day change; LOW risk
5. **Add corpus-quality job**: detect duplicate / stale /
   conflicting docs and flag for SME review; ongoing

Total: ~3 weeks of work; projected lift Recall@5 +20pp,
hallucination -8pp, cost -66%.

## 11. Limitations

This audit was produced by an AI agent on 2026-05-15 against
AskMaple in staging environment. Retrieval metrics are computed
on a 47-item golden set; production behaviour at scale and with
real user query distributions may differ.

[Full disclaimer continues per `_LEGAL/AUDIT-DISCLAIMER.md`]

---

*Report length in actual delivery: 32 pages. Sample shows ~15%.
Engagement fee: €9 200.*
