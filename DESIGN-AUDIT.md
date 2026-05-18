# DESIGN-AUDIT — Visual + UX Design Audit (verkaufbares Deliverable)

Visual and UX design audit of a website / app: typography hierarchy,
spacing system consistency, color usage, contrast, information density,
visual hierarchy on every page, component reuse. Outputs a prioritised
fix list with severity, plus optional design-system extraction.

**Realistic engagement price: €1 000 – 5 000.**

---

## How to use

Paste the block below, then on the next line:

    URL: <site / app screens to audit>
    DEVICE: <DESKTOP | MOBILE | BOTH>
    SCOPE: <which pages — default: home, key landing, key product>
    BRAND: <brand colors hex, font family, voice>
    CLIENT: <client name>

---

## The prompt (copy from here)

```
You are producing a design audit. The §9 REPORT is the deliverable.
Three rules:

(1) Subjectivity is the enemy. Anchor every finding in a recognised
    principle (visual hierarchy, contrast, type scale, spacing
    system, Fitts' law) or measured user impact — not personal
    taste.
(2) Show the issue. Reference the exact page + element. Where
    possible, include a measurement (font size in px, contrast
    ratio, viewport-percent occupied).
(3) Component reuse is invisible quality. Inconsistent buttons,
    cards, and forms signal an organisation without a design
    system.

1. SCOPE & VISUAL INVENTORY
   Pages audited. Quickly inventory the visual system:
     - Font families in use (count distinct)
     - Font sizes (count distinct — should be 6–10 in a scale)
     - Colors (extract from rendered pages — should be ~10–20 in
       a system)
     - Spacing values (margins, gaps — should be a scale, e.g.
       4 / 8 / 16 / 24 / 32 / 48)
     - Border radii (typically 2–4 values)
     - Shadows (typically 3–5 values)

2. TYPOGRAPHY AUDIT
   Per page:
     - Type scale (h1–h6 + body sizes — log them)
     - Line height (body should be 1.5–1.7× font size; headings
       1.1–1.3×)
     - Line length (body should be 50–80 characters per line)
     - Font weight contrast (display vs body — at least 2 weights
       apart)
     - Italic / underline usage (only for genuine emphasis or
       links)
     - Readability at standard zoom and 200% (a11y requirement)

3. COLOR & CONTRAST AUDIT
   - Color palette inventory + usage rationale (primary, accent,
     neutrals, semantic)
   - Contrast ratios for body text on background (must be ≥ 4.5:1,
     a11y AA)
   - Contrast for large text and UI components (must be ≥ 3:1)
   - Brand color discipline (used for hierarchy, not decoration)
   - Color used as sole information carrier (a11y fail)

4. SPACING & RHYTHM AUDIT
   - Margin / padding consistency vs the inferred scale
   - White space (cramped sections vs over-spaced)
   - Vertical rhythm (consistent gaps between similar blocks)
   - Section separation (clear visual breaks vs blur)

5. VISUAL HIERARCHY  (per page)
   Sequence the visual weight ranking of the page's main elements
   (CTA, hero, headline, image, etc.).
   The element with the most visual weight should be the most
   important conversion element. Mismatches = friction.

6. COMPONENT CONSISTENCY  (across pages)
   Sample the same component across pages:
     - Buttons (primary, secondary, disabled — same shape, size,
       padding, hover treatment everywhere?)
     - Cards (same elevation, padding, image ratio?)
     - Form inputs (same height, focus state, error state?)
     - Navigation (same on every page?)
     - Tables (same row height, alignment, borders?)
   Inconsistencies = no design system or unenforced design system.

7. INFORMATION DENSITY
   Per page, is the density appropriate to the audience and intent?
     - Marketing landing: low density (one idea per scroll)
     - Pricing page: medium density (comparison requires nearby
       data)
     - Dashboard / table: high density (information-seeking)
   Mismatches: marketing pages too dense (scared to commit to one
   message); product UIs too sparse (wasting screen real estate).

8. MOBILE-SPECIFIC AUDIT  (if DEVICE includes MOBILE)
   - Tap-target sizes (≥ 48 × 48 px for primary actions)
   - Thumb-zone placement (primary CTA bottom-third of screen)
   - Viewport overflow (horizontal scroll on any page?)
   - Hover-only interactions (a11y fail on touch)
   - Text size (body ≥ 16px to avoid zoom)
   - Form input types optimised for mobile keyboards

9. REPORT  ← the deliverable
   --- REPORT START ---
   # Design Audit — <Client>
   **Date:** <…>   **Scope:** <URLs>   **Device:** <…>

   ## Executive Summary             (≤300 words: design-system
                                     maturity score 1–5, top 3 fixes
                                     by impact, design-system extraction
                                     opportunity)
   ## Visual Inventory              (§1)
   ## Typography                    (§2)
   ## Color & Contrast              (§3)
   ## Spacing & Rhythm              (§4)
   ## Visual Hierarchy (per page)   (§5)
   ## Component Consistency         (§6 — surface inconsistencies)
   ## Information Density           (§7)
   ## Mobile                        (§8)
   ## Prioritised Fix List          (severity × ease)
   ## Optional: Design-System Stub  (extracted tokens: typography
                                     scale, color palette, spacing
                                     scale, component anatomy —
                                     drop-in for a Figma file or
                                     CSS-variables sheet)
   ## Limitations                   (§10, verbatim)
   --- REPORT END ---

10. LIMITATIONS & DISCLAIMER  (mandatory, verbatim with substitutions)
    "This audit was produced by an AI agent on <date> from analysis
     of <URLs> as rendered at audit time. Findings reflect static
     rendering; dynamic states (loading, error, empty, success)
     and interactive behaviours (hover, focus, animation) may
     present additional issues not captured here. Brand alignment
     assessment is based on the provided BRAND input; the
     organisation's full brand guidelines may differ. This audit
     does not include: usability testing with real users, conversion
     impact measurement (see CONVERSION-AUDIT.md), or accessibility
     compliance assessment (see A11Y.md), though it touches related
     items."

HARD RULES
- Every finding cites the principle violated (visual hierarchy,
  Fitts, contrast, type-scale, spacing system) or a measurement.
- "Looks dated" / "feels off" without justification is banned. If
  you can't anchor it, drop it.
- Component-consistency findings show the same component on 2+
  pages to prove inconsistency.
- Fix-list severity is honest: HIGH only for issues genuinely
  blocking task completion or hurting trust at first impression.
- Respond in the language of the BRAND input.

URL:
DEVICE:
SCOPE:
BRAND:
CLIENT:
```

---

## What the buyer gets

A 15–25 page audit with a prioritised fix list and (optionally) a
design-system stub the client's design team can adopt. The
design-system extraction often justifies the engagement on its own —
many small companies are paying maintenance cost on visual chaos they
could resolve with a 1-day token-system rollout.
