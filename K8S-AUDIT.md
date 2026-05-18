# K8S-AUDIT — Kubernetes Security & Cost Audit (verkaufbares Deliverable)

Specialised audit of a Kubernetes cluster: security posture (RBAC,
network policies, pod-security), workload health (resource requests,
PDBs, probes), and cost efficiency (right-sizing, idle workloads).
Niche but lucrative — most platform teams know they have problems but
lack time to find them.

**Realistic engagement price: €3 000 – 15 000.** Recurring annually or per major cluster change.

---

## How to use

Paste the block below, then on the next line:

    CLUSTER: <cluster name, environment, k8s version, distribution (EKS/GKE/AKS/self-managed)>
    SCOPE: <namespaces in scope, workloads in scope>
    ACCESS: <read-only kubectl access | manifest repo only | both>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a Kubernetes cluster audit. The §9 REPORT is the
deliverable. Three rules:

(1) Cite resources (kind/namespace/name) for every finding. Cluster-
    wide claims without examples are theatre.
(2) Security and cost are presented separately — different teams act
    on them, often different budgets.
(3) Pod Security Standards (PSS) replaced PSP in v1.25 — anchor
    findings against PSS levels (privileged / baseline / restricted).

1. SCOPE & CLUSTER INVENTORY
   - Kubernetes version, cloud distribution, node count, node types
   - Namespaces in scope, count of workloads (deployments, statefulsets,
     daemonsets, jobs, cronjobs) per namespace
   - Add-ons present: ingress controller, service mesh, observability,
     policy engines (OPA/Kyverno), backup
   - Cap exploration at 25 kubectl calls or 30 file reads

2. RBAC & IDENTITY
   - ClusterRoles and ClusterRoleBindings: who has cluster-admin
     equivalent? (cluster-admin, edit, system:masters)
   - Wildcard verbs/resources/apiGroups in any Role/ClusterRole
   - ServiceAccounts: which workloads run with which SA; default SA
     usage with mounted tokens (avoid)
   - Workload-identity / IRSA / WIF binding to cloud IAM — least
     privilege?
   - User authentication mechanism (OIDC, IAM auth, certificates)
   For each finding: ClusterRole name, who has it, what it grants.

3. NETWORK POLICIES
   - NetworkPolicy presence per namespace
   - Default-deny baseline implemented? (a namespace without
     NetworkPolicy is fully open laterally)
   - Egress controls
   - CNI in use and its NetworkPolicy support level
   For each finding: namespace + missing policy intent.

4. POD SECURITY
   - Pod Security Standards enforcement mode per namespace
     (privileged / baseline / restricted)
   - Privileged containers, host-namespace usage (hostNetwork,
     hostPID, hostIPC), hostPath mounts
   - allowPrivilegeEscalation: true
   - runAsNonRoot: false / unset
   - capabilities added (especially NET_ADMIN, SYS_ADMIN)
   - readOnlyRootFilesystem: false
   - Seccomp / AppArmor profiles configured?
   For each finding: kind/namespace/name + specific violation.

5. SECRETS & CONFIG
   - Native Secrets vs external secret manager (External Secrets,
     SOPS, Sealed Secrets, vault-injector)
   - Secrets mounted as env vars (visible in process list — risky)
   - Encryption at rest configuration (KMS provider in apiserver)
   - Unencrypted ConfigMaps containing what should be secrets
     (`grep -ri 'password\|token\|key' configmap.yaml`-style check)

6. WORKLOAD HEALTH
   - Resource requests and limits set? (no requests = scheduling
     chaos; no limits = noisy-neighbour risk; CPU limits often
     anti-pattern — flag if used aggressively)
   - LivenessProbe and ReadinessProbe defined? (no probes = silent
     failures and bad rollouts)
   - PodDisruptionBudget defined for HA workloads
   - HPA configured for autoscaling workloads
   - Anti-affinity for replicated workloads (so they don't share a node)

7. STORAGE & DATA
   - PVC inventory by StorageClass; orphaned PVCs (PV released but
     not deleted)
   - Backup configuration (Velero, cloud-native snapshots)
   - StatefulSet reclaim policy

8. COST EFFICIENCY  ← high-value section
   - Right-sizing: requests vs actual usage (from metrics-server /
     VPA recommender / GKE recommender)
   - Over-provisioned: workloads with requests >2× actual P95 use
   - Under-provisioned: workloads consistently hitting limits
   - Idle workloads: zero ingress traffic for >30 days, never
     auto-scaled, or scheduled at 0 replicas
   - Node utilisation: nodes with <30% CPU/memory allocated
   - Spot / preemptible adoption opportunities for tolerant workloads
   - Cluster autoscaler tuning (scale-down delays)
   Provide a monthly-savings range per recommendation.

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Kubernetes Cluster Audit — <Cluster>
   **Client:** <…>   **Cluster:** <name @ env>   **K8s version:** <…>
   **Audit date:** <…>

   ## Executive Summary             (≤300 words: security posture, top
                                     3 risks, identified monthly savings
                                     range)
   ## Scope & Inventory             (§1)
   ## Security Posture
       ### RBAC & Identity          (§2)
       ### Network Policies         (§3)
       ### Pod Security             (§4)
       ### Secrets & Config         (§5)
   ## Workload Health               (§6)
   ## Storage & Data Protection     (§7)
   ## Cost Efficiency               (§8, with savings table)
   ## Prioritised Recommendations   (combined: security + cost, ranked
                                     by severity × ease)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> against cluster
     <name> at Kubernetes version <X.Y>. Findings reflect the cluster
     state at audit time; dynamic conditions (workload scaling, pod
     rotation, secret rotation) may produce different results at other
     points in time. Cost recommendations require workload-specific
     load testing before production rollout — particularly limit
     reductions and spot migration. Security recommendations should be
     applied in a non-production cluster first and validated against
     workload behaviour. This audit does not cover: application-layer
     security inside containers (see AUDIT), runtime threat detection,
     CIS Kubernetes Benchmark coverage outside the items above, or
     cluster-add-on internals (service mesh, observability stack)."

HARD RULES
- Every finding cites kind/namespace/name. "Some workloads lack probes"
  is not a finding; "deployment/payments-api in ns/prod has no probes"
  is.
- Security and cost are separately ranked. Don't bury a critical RBAC
  hole under a cost recommendation.
- Cost savings are RANGES with the rightsizing assumption stated.
- Respond in the language of the SCOPE input.

CLUSTER:
SCOPE:
ACCESS:
CLIENT:
```

---

## What the buyer gets

A 15–30 page report with two distinct audiences: security team gets a
prioritised RBAC / NetPol / PSS hardening backlog; platform team gets
right-sizing and idle-workload cleanup with monthly savings. Cost
recommendations alone often justify the engagement.
