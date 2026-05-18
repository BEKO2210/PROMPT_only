# SBOM — Software Bill of Materials (verkaufbares Deliverable)

Produces a CycloneDX 1.5 SBOM (machine-readable JSON) plus a human-readable
companion report with CVE exposure, license analysis, and supply-chain risk
signals. Required by EU Cyber Resilience Act (enforceable Dec 2027) and US
Executive Order 14028 (already mandatory for federal contractors).

**Realistic engagement price: €2 000 – 8 000 per release. Recurring.**

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <which artifact — repo, container image, deployable, SaaS service>
    FORMAT: <CycloneDX | SPDX>     (default: CycloneDX 1.5)
    CLIENT: <client name — optional>

---

## The prompt (copy from here)

```
You are producing a Software Bill of Materials and risk companion report.
Two artefacts are deliverables: (a) the machine-readable SBOM JSON in §8,
and (b) the human-readable Markdown report in §9. Both must reconcile.

1. SCOPE
   Restate scope: artefact type (source repo, container image, deployable
   bundle), commit SHA or image digest, build target, languages and
   package ecosystems present. Capture build metadata: `git rev-parse HEAD`,
   build timestamp, builder identity (CI runner / your name).

2. EXTRACTION
   List every package source you parsed. Common ecosystems:
     - npm:       `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
     - python:    `requirements.txt`, `Pipfile.lock`, `poetry.lock`, `uv.lock`
     - rust:      `Cargo.lock`
     - go:        `go.sum`, `go.mod`
     - java:      `pom.xml`, `build.gradle.kts`, `gradle.lockfile`
     - ruby:      `Gemfile.lock`
     - php:       `composer.lock`
     - container: `docker history`, base image lockfiles
     - system:    apt/apk/rpm package lists in container layers
   For each source: number of direct deps, number of transitive deps,
   resolution method used. Cite the file path.

3. COMPONENTS
   Every component, direct and transitive. Per component:
     - name
     - version (exact, from lockfile — not range from manifest)
     - PURL (Package URL, e.g. `pkg:npm/lodash@4.17.21`)
     - SPDX license identifier (or `NOASSERTION` if absent)
     - supplier (publisher / organisation, when resolvable)
     - relationship: DIRECT or TRANSITIVE
   This list becomes both the §8 JSON `components[]` and the §9 inventory.

4. VULNERABILITIES
   Cross-reference §3 against public CVE databases:
     - `npm audit --json`, `pip-audit -f json`, `cargo audit --json`,
       `govulncheck -json`, `osv-scanner --format json`
   For each CVE: ID, affected component@version, CVSS v3.1 score and
   severity, fixed-in version (if any), exploitability notes from advisory.
   Group by severity (Critical → Info). Cap presentation at top 50 by
   severity; full list goes in §8 JSON `vulnerabilities[]`.

5. LICENSES
   - Distribution: count per SPDX identifier
   - Copyleft exposure: any GPL-2.0, GPL-3.0, AGPL-3.0, SSPL, EUPL,
     CC-BY-SA appearing in a proprietary product — flag explicitly
   - Permissive / weak-copyleft / strong-copyleft buckets
   - License-license incompatibilities (e.g. Apache-2.0 → GPL-2.0 only)
   - Components with NO declared license — these are legally radioactive
     until clarified

6. SUPPLY-CHAIN SIGNALS
   Per component, flag if any apply:
     - Maintainer changed in last 90 days (typosquat / takeover risk)
     - No release in >24 months (abandoned)
     - Single maintainer (bus risk)
     - Unsigned release (no GPG / provenance / Sigstore attestation)
     - Source repository unreachable or archived
     - Known typosquat patterns (`reqeusts` for `requests`, etc.)

7. EXECUTIVE SUMMARY  (place at top of §9)
   ≤300 words, non-technical. Cover:
     - Component count (direct / transitive / total)
     - Vulnerability posture: count by severity, top 3 named CVEs
     - License posture: any copyleft contamination? any NOASSERTION?
     - Supply-chain posture: any abandoned / takeover-risk components?
     - Recommended actions, ordered by urgency

8. SBOM JSON  ← deliverable (a)
   Emit a single CycloneDX 1.5 JSON document between markers. Required
   top-level fields: bomFormat, specVersion, serialNumber (UUID),
   version, metadata (timestamp, tools, component for the subject),
   components[], dependencies[] (graph), vulnerabilities[].
   --- SBOM JSON START ---
   { ... CycloneDX document ... }
   --- SBOM JSON END ---

9. REPORT  ← deliverable (b)
   --- REPORT START ---
   # Software Bill of Materials — <Product>
   **Client:** <…>   **Artefact:** <…>   **Commit/Digest:** <…>   **Date:** <…>

   ## Executive Summary             (§7)
   ## Scope & Methodology           (§1, §2)
   ## Component Inventory Summary   (counts; full list in §8 JSON)
   ## Vulnerabilities               (§4)
   ## License Analysis              (§5)
   ## Supply-Chain Risk Signals     (§6)
   ## Recommended Remediation       (concrete: upgrade lodash to 4.17.22, etc.)
   ## Limitations                   (§10, verbatim)
   ## Appendix: Tool versions & commands run
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This SBOM and accompanying analysis were generated by an AI agent on
     <date> from the artefact at <commit-or-digest>. Vulnerability data
     reflects the public CVE / OSV / GHSA databases as of <date>; new
     vulnerabilities may have been disclosed since. License identifiers
     follow SPDX; components labelled NOASSERTION require manual review
     by legal counsel before distribution. This document does not
     constitute a legal opinion on license compliance or regulatory
     conformance (EU CRA, US EO 14028, NIS2). For artefacts subject to
     the EU Cyber Resilience Act, this SBOM must be regenerated for
     each release and supplied alongside the product."

HARD RULES
- Every version is the EXACT resolved version from a lockfile. Range
  specifiers from package.json / requirements.txt are not acceptable.
- Every CVE references a real advisory ID (CVE-YYYY-NNNNN, GHSA-…, etc.).
  Never invent CVE IDs.
- The §8 JSON must validate as CycloneDX 1.5 — if you cannot guarantee
  that, emit SPDX 2.3 instead and update §1.
- The component count in §9 must equal the JSON array length in §8.
- Respond in the same language as the SCOPE input.

SCOPE:
```

---

## What the buyer gets

Two files: a CycloneDX JSON they can submit to regulators / customers /
procurement, and a 10–20 page PDF that translates it into a posture
assessment a CISO can read. Regenerate on every release — that's what
the regulator expects, and what justifies the recurring fee.
