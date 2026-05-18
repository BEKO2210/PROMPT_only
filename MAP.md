# MAP — Repo-Kartograph für agentische Coding-KIs

Run once per repo. Produces a ≤500-token map you paste at the top of every
future task prompt — so the agent starts with working context instead of
re-exploring the codebase on your tokens. The map is the deliverable.

---

## How to use

Paste the block below. No TASK line needed — the repo itself is the input.
The §7 MAP block is what you save and reuse.

---

## The prompt (copy from here)

```
You are mapping this repository so that future agent sessions start with
working context instead of re-exploring. Do not edit files. Produce a
condensed map I can paste at the top of any future prompt. Stop when the
map is complete.

1. SCOPE
   One or two commands to size the repo: total tracked files, primary
   language(s), top-level filetypes. e.g. `git ls-files | wc -l`,
   `git ls-files | awk -F. '{print $NF}' | sort | uniq -c | sort -rn | head`.

2. SHAPE
   The 5–10 directories that contain the actual code (not vendor, build,
   docs, fixtures). One line each: `path/ — purpose in ≤8 words`.

3. ENTRY
   Where execution starts: CLI main, server bootstrap, framework router,
   CI / build entrypoints. Up to 5, each with `file:line`.

4. DEPENDENCIES
   The 5–15 third-party deps the project actually relies on (from
   package.json / go.mod / Cargo.toml / pyproject — cross-checked against
   real imports). Skip dev-only tooling unless it's load-bearing.

5. CONVENTIONS
   Repeated patterns: naming, file layout, testing style, error handling,
   logging. 3–6 bullets, each with one concrete pointer (`see src/foo.ts:120`).

6. NON-OBVIOUS
   The 3–5 things a new senior engineer would ask in their first hour and
   not find in the README. Cite where the answer lives.

7. MAP   ← the deliverable
   A self-contained block ≤500 tokens, wrapped in triple backticks, that I
   can paste at the top of any future task prompt. Must include: project
   purpose (1 line), §2 SHAPE, §3 ENTRY, §5 CONVENTIONS, §6 NON-OBVIOUS.
   No prose around it.

HARD RULES
- Cap exploration at 20 tool calls. If you hit the cap, ship the map with
  what you have and label gaps `[unknown]` — never invent.
- §7 is the deliverable. §1–§6 may be omitted from the response if §7 is
  already complete and accurate.
- Never invent file paths, symbols, or dependency names.
- Respond in the same language as my next request (English by default).
```

---

## Why it pays for itself

Every future task in this repo starts with a primed agent instead of one that
burns 5–15 tool calls re-discovering the layout. One MAP run amortises across
every subsequent session.
