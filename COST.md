# COST — Cloud Cost Optimization (verkaufbares Deliverable)

FinOps audit driven by IaC (Terraform / CloudFormation / Pulumi / Helm)
and billing data. Identifies waste, right-sizing opportunities, and
architectural changes with monthly savings estimates and implementation
effort. Cloud bills are biting in 2026 — this engagement often pays for
itself in the first month after implementation.

**Realistic engagement price: €3 000 – 15 000.** Often structured as a percentage of first-year savings (typically 15–25%).

---

## How to use

Paste the block below, then on the next line:

    SCOPE: <accounts/projects, regions, IaC repo path>
    BILLING_ACCESS: <CSV export | Cost-Explorer API | none — IaC only>
    PROVIDERS: <AWS | GCP | Azure | multi>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a Cloud Cost Optimization assessment. The §9 REPORT
is the deliverable. Three rules:

(1) Savings estimates are RANGES with stated assumptions. "Save 27.3%"
    without assumptions is fake precision; "Save €4 000 – 8 000/month
    by rightsizing the dev environment to schedule-stop" is honest.
(2) Recommendations are ranked by ROI: monthly savings ÷ implementation
    effort. The client implements top-3 by ROI; everything else stays
    in the report as backlog.
(3) Architectural changes (serverless, spot, storage tier) are bigger
    wins than tactical changes (rightsize), but carry implementation
    risk. Surface both, separately.

1. SCOPE & INVENTORY
   Accounts, regions, IaC source files (Terraform state, CFN stacks,
   Helm releases). Run cheap inventory:
     - `aws ec2 describe-instances --query 'Reservations[].Instances[].[InstanceId,InstanceType,State.Name,LaunchTime]'`
     - `aws s3api list-buckets`
     - `gcloud compute instances list --format=json`
     - `kubectl get deployments,statefulsets,daemonsets -A`
     - Terraform: parse `.tf` for resource types and counts
   Inventory total resource count by type, region, account.

2. CURRENT SPEND BASELINE  (if BILLING_ACCESS available)
   Last 3 months by service, with month-over-month delta. Identify the
   top 10 services by spend (typically: compute, storage, transfer,
   managed DB, observability). If no billing access, mark NOT
   MEASURED and proceed on IaC-only analysis.

3. WASTE  (highest-confidence savings)
   - Orphaned resources: unattached EBS / persistent disks, unused
     ELBs, idle NAT gateways, unattached EIPs
   - 24/7 non-production: dev/staging running on weekends/nights
   - Unused snapshots and AMIs older than 90 days
   - Empty S3 buckets / over-retained logs
   - Forgotten test infrastructure (look for resources with no recent
     activity in tags or CloudWatch metrics)
   - Always-on services in regions with no production traffic
   Per item: monthly cost, implementation step, risk.

4. RIGHTSIZING
   - EC2 / GCE / Azure VM: CPU/memory utilisation distribution per
     instance class (CloudWatch / Stackdriver / Azure Monitor data)
   - RDS / Cloud SQL: instance class vs IOPS used vs storage allocated
   - EBS: gp3 vs gp2, provisioned IOPS that aren't used
   - Container resource requests vs actual usage (kubectl top, GKE
     recommender output)
   - Lambda memory vs duration (overspending memory = direct cost)

5. COMMITMENT DISCOUNTS  (Savings Plans / RIs / CUDs)
   - Compute steady-state baseline that warrants 1- or 3-year
     commitment
   - Coverage gap: % of compute on-demand that could be reserved
   - Estimated discount per provider's published rates (typically
     30–55%)
   - Risk: lock-in vs flexibility trade-off

6. ARCHITECTURAL OPPORTUNITIES  (bigger wins, more risk)
   - Spot / preemptible for fault-tolerant workloads (60–90% savings)
   - Serverless replacement for sporadically used services
   - S3 tiering: Standard → IA → Glacier policies based on access
     patterns
   - Move from managed service to self-managed (or vice versa) where
     usage warrants
   - Multi-region: is it actually justified or can primary-only do?
   - Data transfer: inter-AZ traffic patterns, NAT gateway alternatives

7. OBSERVABILITY COSTS
   Often a top-5 line item, often unscoped:
     - Datadog / New Relic / Splunk ingestion volume
     - CloudWatch log retention and metric cardinality
     - Trace sampling rates
   Recommendations: retention reduction, sampling, log-level tuning.

8. RECOMMENDATIONS  (the deliverable's payoff)
   Consolidated table:
     | ID | Recommendation | Category | Monthly savings (€, range) | Effort (S/M/L/XL) | Risk (L/M/H) | ROI score |
   ROI = midpoint savings × 12 ÷ effort-days. Sort descending. Mark
   top 3 in bold. Anything ROI <3 is backlog, not action.

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Cloud Cost Optimization Assessment — <Scope>
   **Client:** <…>   **Providers:** <…>   **Assessment date:** <…>

   ## Executive Summary             (≤300 words: current spend, total
                                     identified savings range, top 3
                                     ROI recommendations, payback
                                     period)
   ## Scope & Inventory             (§1)
   ## Spend Baseline                (§2)
   ## Waste — Quick Wins            (§3)
   ## Rightsizing                   (§4)
   ## Commitment Discounts          (§5)
   ## Architectural Opportunities   (§6)
   ## Observability Costs           (§7)
   ## Prioritised Recommendations   (§8, full table)
   ## Implementation Roadmap        (suggested order: quick wins first,
                                     architectural changes phased)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This assessment was produced by an AI agent from analysis of
     infrastructure-as-code at <commit/version> and, where available,
     <N> months of billing data ending <date>. Savings estimates are
     forecasts based on observed utilisation patterns and current
     provider pricing; actual savings depend on workload-pattern
     stability, on-time implementation, and provider list-price
     changes. Recommendations marked HIGH risk (typically spot
     migration, instance-class changes, retention reductions) require
     workload-specific testing before production rollout. Commitment
     discount calculations assume the client's procurement process
     can execute commitments before pricing changes. This report
     does not assess reserved capacity already purchased or
     enterprise-discount-program terms which may alter effective
     pricing materially."

HARD RULES
- Every recommendation has a monthly savings RANGE with the assumption
  that drives it. Point estimates ("save 23%") are banned.
- Every recommendation cites the resource (instance ID, bucket name,
  resource ARN) or the IaC line that controls it.
- Quick wins (§3) and architectural changes (§6) are presented
  separately — they require different decision-makers.
- §8 ROI ranking is the action list. Anything ROI <3 stays in
  backlog; do not pad the action list.
- Respond in the language of the SCOPE input.

SCOPE:
BILLING_ACCESS:
PROVIDERS:
CLIENT:
```

---

## What the buyer gets

A 15–30 page report with a prioritised action list and a roadmap. The
common engagement pricing structure: fixed assessment fee plus 15–25%
of realised first-year savings (success fee). This aligns incentives
and gets the engagement closed faster.
