# MOBILE-PRIVACY — App Store Privacy Labels (verkaufbares Deliverable)

Generates accurate privacy nutrition labels for iOS App Store and
Google Play Data Safety section by inventorying every SDK, API, and
data collection in an app codebase. App Store and Play Store enforce
these labels; misdeclaration triggers removal — almost every app has
some error here.

**Realistic engagement price: €1 000 – 5 000.** Recurring per major release.

---

## How to use

Paste the block below, then on the next line:

    APP: <app name, bundle ID, platform (iOS / Android / both), version>
    REPO: <repo path>
    REGION: <primary markets — affects label requirements>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing privacy-label artefacts for App Store Connect (iOS)
and Google Play Console (Android). The §8 LABELS block contains the
deliverables. Three rules:

(1) Every data type collected is cited to the SDK / API call /
    framework that collects it. "We collect location" without "via
    CoreLocation in HomeViewController:42 and AdMob SDK" is not
    auditable.
(2) iOS App Tracking Transparency (ATT) and "Linked to User" vs
    "Not Linked" distinctions are subtle — get them right.
(3) Third-party SDKs collect data without app code change. Audit
    EVERY SDK independently.

1. SCOPE
   App name, bundle ID, platform, latest version, repository commit.
   Operating systems supported (iOS minimum, Android API level).
   Primary markets (affects which sub-questions apply, e.g. South
   Korea has additional requirements).

2. SDK INVENTORY
   Every third-party SDK / framework / library bundled:
     - iOS: Podfile, Cartfile, Package.swift, frameworks in
       project.pbxproj
     - Android: build.gradle, build.gradle.kts dependencies
   For each: name, version, vendor, primary purpose (analytics, ads,
   crash reporting, payment, social, push, MAU/attribution).

3. DATA COLLECTION INVENTORY
   For each data type, identify all collectors (app code + SDKs):
     - Contact info (name, email, phone, physical address, other
       contact)
     - Health & fitness
     - Financial info (payment, credit, other financial)
     - Location (precise, coarse)
     - Sensitive info (race, religion, sexual orientation, gender
       identity, political opinion, disability, biometric, trade
       union — Art. 9 GDPR + App Store sensitive category)
     - Contacts (address book)
     - User content (emails, messages, photos, videos, audio, gameplay,
       customer-support, other user content)
     - Browsing history
     - Search history
     - Identifiers (User ID, Device ID)
     - Purchases
     - Usage data (product interaction, advertising data, other usage)
     - Diagnostics (crash, performance, other)
   Per data type: source (code path or SDK), purpose, linked-to-user
   status, used-for-tracking status.

4. PURPOSE MAPPING  (App Store categories)
   Each data type × purpose matrix:
     - Third-Party Advertising
     - Developer's Advertising or Marketing
     - Analytics
     - Product Personalization
     - App Functionality
     - Other Purposes
   Multiple purposes possible per data type. Cite where each purpose
   is supported by code/SDK behaviour.

5. LINKED vs NOT LINKED  (iOS-specific)
   For each data type, is it LINKED to the user's identity?
     - LINKED = associated with persistent user identifier (account,
       device ID, persisted UUID, email, phone)
     - NOT LINKED = collected anonymously, no persistent identifier
       attached
   Common mistake: aggregated analytics that send a per-install UUID
   is LINKED, not NOT LINKED.

6. TRACKING DEFINITION  (iOS ATT — App Tracking Transparency)
   Per Apple: TRACKING = linking user/device data to third-party data
   for advertising/measurement, OR sharing user/device data with data
   brokers.
   Identify every SDK / API call that meets this definition:
     - Ad networks (AdMob, Meta Audience, Unity Ads, AppLovin, …)
     - Attribution SDKs (Adjust, AppsFlyer, Branch, Singular)
     - Sharing data with data brokers
     - Cross-app linkage via shared identifier
   If TRACKING occurs, ATT prompt is REQUIRED. Cite if implemented.

7. ANDROID DATA SAFETY  (Google Play)
   - Data types collected vs shared (different fields)
   - Optional vs required collection
   - Data encrypted in transit (always: TLS check)
   - Users can request deletion (account-deletion flow check)
   - Family policy compliance if app is in kids' category

8. LABELS  ← the deliverable
   Produce two labels:

   --- iOS PRIVACY LABELS ---
   App Store Connect "App Privacy" section answers:
   - Data not collected? (Y/N)
   - For each data type collected:
       Category: <…>
       Type: <…>
       Used for tracking? (Y/N)
       Linked to user? (Y/N)
       Purposes: [list from §4]
   --- iOS LABELS END ---

   --- ANDROID DATA SAFETY ---
   Google Play Console "Data safety" section answers:
   - Data collected? (Y/N) — and if Y, for each:
       Type, purpose, optional/required, processed-ephemerally,
       linkable-to-user, deletion-request-supported
   - Data shared with third parties? (Y/N) — and if Y, same fields
   - Security practices: encryption in transit, account-deletion
   --- ANDROID LABELS END ---

9. REPORT  ← companion to §8
   --- REPORT START ---
   # Privacy Label Assessment — <App>
   **Client:** <…>   **App version:** <…>   **Date:** <…>

   ## Executive Summary             (≤250 words: surprises, ATT
                                     compliance, top risks of mis-
                                     declaration)
   ## Scope                         (§1)
   ## SDK Inventory                 (§2, table)
   ## Data Collection Inventory     (§3 — with code/SDK citations)
   ## Purpose Mapping               (§4, matrix)
   ## Linked / Tracking Analysis    (§5, §6)
   ## iOS Privacy Labels            (§8 iOS block, formatted for paste
                                     into App Store Connect)
   ## Android Data Safety           (§8 Android block, formatted for
                                     paste into Play Console)
   ## Recommended Code Changes      (anything that would let you
                                     declare less, e.g. switch SDK,
                                     disable analytics for EU, add
                                     opt-out)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This assessment was produced by an AI agent from static analysis
     of the application source at commit <SHA> on <date>. SDK
     behaviour is inferred from documented SDK practice; some SDKs
     collect data dynamically based on configuration not visible in
     code (server-side feature flags, A/B tests, region settings) —
     verify with the SDK vendor for final accuracy. App Store and
     Play Store policies and label categories change; this report
     reflects the policy as of <date>. Mis-declaration may result in
     app removal; the developer is responsible for final label
     accuracy and any user-facing disclosures (privacy policy, in-app
     notices) supporting them."

HARD RULES
- Every data type in §3 cites a code path OR a named SDK known to
  collect it. No data type appears without an attribution source.
- §6 TRACKING determination follows Apple's definition strictly — an
  SDK that links data to a third-party data set for advertising is
  TRACKING even if you call it "analytics".
- The §8 LABELS blocks are formatted so the client copy-pastes them
  into App Store Connect / Play Console directly.
- Respond in the language of the CLIENT input.

APP:
REPO:
REGION:
CLIENT:
```

---

## What the buyer gets

Two paste-ready label blocks plus a companion audit explaining each
answer with code citations. Most apps shipping today have at least one
mis-declared label — the ATT/tracking determination is the most
commonly wrong, and the most likely to trigger Apple enforcement.
