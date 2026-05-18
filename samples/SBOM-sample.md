# Sample: SBOM for fictional edge-compute platform

**Source prompt:** `SBOM.md`
**Engagement:** SBOM generation + companion report for "TidalEdge IoT"
(fictional edge-compute platform: Linux container image deployed to
~12 000 industrial sites worldwide; Go backend + system packages).

All entities, CVEs, and findings are **fictional**. Demonstrates
CycloneDX 1.5 JSON shape, vulnerability triage, license analysis,
and supply-chain signal surfacing.

---

# Software Bill of Materials — TidalEdge Gateway Image v3.7.2

**Client:** TidalEdge IoT GmbH
**Artefact:** OCI image `tidaledge/gateway:3.7.2` (digest
`sha256:b8d4f2a9...`)
**Build:** GitHub Actions run `8429321` on 2026-05-12 09:42 UTC
**Date:** 2026-05-12   **SBOM format:** CycloneDX 1.5

---

## Executive Summary

**Posture: ACCEPTABLE — three Highs require remediation within
14 days; license posture clean for proprietary distribution.**

- **287 components** total (84 direct Go dependencies + 203
  transitive + Alpine base image system packages)
- **18 vulnerabilities** total (1 Critical, 3 High, 9 Medium, 5 Low)
- **License distribution:** clean. No GPL/AGPL/SSPL in the
  binary. Apache-2.0 (62%), MIT (28%), BSD-3 (7%), other
  permissive (3%).
- **Supply chain signals:** one component flagged for maintainer
  change in last 90 days (low risk, monitor); one for >24 months
  no release (medium risk).

**Top 3 recommended actions**
1. Upgrade `github.com/golang/protobuf` from v1.5.3 to v1.5.4
   (closes CVE-2026-13374 Critical — RCE via malformed message)
2. Upgrade Alpine base image from 3.18 to 3.21 (closes two High
   CVEs in `musl` and `busybox`)
3. Replace abandoned `github.com/some-author/iot-utils` (no release
   since 2023-Q4) with maintained alternative or fork

---

## Scope

- Artefact type: OCI container image, deployed to ARM64 + AMD64
  edge devices
- Subject: `tidaledge/gateway:3.7.2`
- Commit: `tidaledge/gateway @ 4f8a3e1c` (2026-05-12)
- Build target: production release
- Build metadata:
  - Builder: GitHub Actions, `ubuntu-22.04` runner
  - Build timestamp: 2026-05-12T09:42:18Z
  - Go version: 1.23.2
  - Alpine base: `alpine:3.18.6`

---

## Extraction

| Source | Components | Resolution method |
|---|---|---|
| `go.sum` | 287 (84 direct, 203 transitive) | `go list -m all` against pinned versions |
| Alpine base image | 47 system packages | `apk info -vv` against `apk` database |
| Container layers | 0 additional (no overlay packages) | `docker history` review |

Tool versions used:
- `syft 1.18.1` (SBOM extraction)
- `grype 0.85.0` (vulnerability matching)
- `osv-scanner 1.9.2` (cross-reference)
- `govulncheck 1.1.3` (Go-specific call-graph)

---

## SBOM JSON  (excerpt)

```jsonl
--- SBOM JSON START ---
{
  "bomFormat": "CycloneDX",
  "specVersion": "1.5",
  "serialNumber": "urn:uuid:b3f8a4d2-9c1e-4f7a-...",
  "version": 1,
  "metadata": {
    "timestamp": "2026-05-12T09:42:18Z",
    "tools": [{"vendor": "your-firm", "name": "sbom-pipeline", "version": "1.4.0"}],
    "component": {
      "type": "container",
      "name": "tidaledge/gateway",
      "version": "3.7.2",
      "purl": "pkg:oci/tidaledge/gateway@sha256:b8d4f2a9..."
    }
  },
  "components": [
    {
      "type": "library",
      "bom-ref": "pkg:golang/github.com/golang/[email protected]",
      "name": "github.com/golang/protobuf",
      "version": "1.5.3",
      "purl": "pkg:golang/github.com/golang/[email protected]",
      "licenses": [{"license": {"id": "BSD-3-Clause"}}],
      "supplier": {"name": "Google LLC"}
    },
    {
      "type": "library",
      "bom-ref": "pkg:golang/github.com/some-author/[email protected]",
      "name": "github.com/some-author/iot-utils",
      "version": "0.4.1",
      "purl": "pkg:golang/github.com/some-author/[email protected]",
      "licenses": [{"license": {"id": "MIT"}}]
    }
    /* ... 285 more components ... */
  ],
  "vulnerabilities": [
    {
      "bom-ref": "vuln-cve-2026-13374",
      "id": "CVE-2026-13374",
      "source": {"name": "NVD"},
      "ratings": [{"severity": "critical", "score": 9.8, "method": "CVSSv31"}],
      "affects": [{"ref": "pkg:golang/github.com/golang/[email protected]"}],
      "recommendation": "Update to >=1.5.4"
    }
    /* ... 17 more vulnerabilities ... */
  ]
}
--- SBOM JSON END ---
```

---

## Vulnerabilities

| ID | Component | Severity | CVSS | Fixed in | Notes |
|---|---|---|---|---|---|
| CVE-2026-13374 | `github.com/golang/protobuf@1.5.3` | 🔴 CRITICAL | 9.8 | 1.5.4 | RCE via malformed message; reachable via `pkg/proto/decode.go:142` per govulncheck |
| CVE-2025-47882 | Alpine `musl@1.2.4-r2` | 🟠 HIGH | 8.1 | 1.2.5 | Heap buffer overflow; base-image update closes |
| CVE-2025-31729 | Alpine `busybox@1.36.1-r29` | 🟠 HIGH | 7.5 | 1.37.0-r0 | Use-after-free in `udhcpc`; only exploitable on devices using DHCP (subset of fleet) |
| CVE-2026-09812 | `golang.org/x/net@0.21.0` | 🟠 HIGH | 7.2 | 0.32.0 | HTTP/2 rapid-reset DoS variant |
| ... 9 Medium + 5 Low elided ... | | | | | |

Govulncheck call-graph analysis: 3 of the High/Critical CVEs are
"reachable" in the binary (code path actually executes the
vulnerable function); the others are present-but-unused. Reachable
ones marked above.

---

## License Analysis

| License | Count | % | Notes |
|---|---|---|---|
| Apache-2.0 | 178 | 62% | Permissive, OK |
| MIT | 80 | 28% | Permissive, OK |
| BSD-3-Clause | 20 | 7% | Permissive, OK |
| BSD-2-Clause | 4 | 1.4% | Permissive, OK |
| ISC | 3 | 1% | Permissive, OK |
| MPL-2.0 | 2 | 0.7% | Weak copyleft — file-level; OK for proprietary use |
| NOASSERTION | 0 | 0% | None — clean |

**Copyleft contamination check: PASSED.** No GPL / AGPL / SSPL
present in any component. The MPL-2.0 components are file-level
copyleft (modifications must be open-sourced; aggregating with
proprietary code is permitted).

**Components with NO declared license: 0** (clean — every
component has a verifiable license).

---

## Supply-Chain Signals

| Component | Signal | Severity |
|---|---|---|
| `github.com/some-author/iot-utils@0.4.1` | No release since 2023-Q4 (abandoned) | 🟡 Medium — single maintainer, not responsive; recommend fork or replace |
| `github.com/another/lib@2.1.0` | Maintainer changed (2026-03-15, "ownership transfer") | 🟡 Low — monitor; verify next release |
| `golang.org/x/*` (12 components) | Signed releases by Google | 🟢 Good — supply chain hygiene baseline |

No typosquat patterns detected.

---

## Recommended Remediation

In priority order:

1. **Update `golang/protobuf` to 1.5.4** — closes CRITICAL
   CVE-2026-13374. Single-line `go.mod` change + rebuild.
2. **Rebuild on Alpine 3.21 base** — closes both High CVEs in
   system packages. Dockerfile change.
3. **Replace `iot-utils@0.4.1`** — schedule for Q3:
   - Fork-and-maintain in-house, OR
   - Migrate to `github.com/maintained-alternative/iot-tools`
     (active, weekly releases)
4. Update `golang.org/x/net` to 0.32.0 in same release as #1.

After remediation: regenerate SBOM and re-attach to the next
release (per EU CRA cadence guidance).

---

## Limitations

This SBOM and accompanying analysis were generated by an AI agent
on 2026-05-12 from the artefact at commit `4f8a3e1c`. Vulnerability
data reflects the public CVE / OSV / GHSA databases as of
2026-05-12; new vulnerabilities may have been disclosed since.
License identifiers follow SPDX. This document does not constitute
a legal opinion on license compliance or regulatory conformance
(EU CRA, US EO 14028, NIS2). For artefacts subject to the EU Cyber
Resilience Act, this SBOM must be regenerated for each release and
supplied alongside the product.

[Full disclaimer per `_LEGAL/COMPLIANCE-NOT-LEGAL-ADVICE.md`]

---

*Report length in actual delivery: 16 pages + the JSON SBOM (287
components, ~840 lines). Sample shows ~25% of report and abbreviated
JSON. Engagement fee: €3 400 per release, €18 000 annual contract
for monthly regeneration aligned with TidalEdge's release train.*
