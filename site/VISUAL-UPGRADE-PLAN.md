# VISUAL UPGRADE PLAN — `visual-cinematic-v2`

**Mission:** transformiere die bestehende Site in cinematic, scroll-gesteuerte
Premium-Erfahrung auf Awwwards-SOTD-Niveau. Mission-Control-Aesthetik:
deep-black + chrome + electric-cyan + soft-amber + floating audit panels +
orbital core + Holographic-Glass.

**Branch:** `visual-cinematic-v2` (off `claude/create-claude-prompt-KGaAX`)

---

## Scope dieser Iteration (was wirklich geliefert wird)

Das Brief beschreibt 9 Phasen. Ehrlich liefert eine Sitzung davon
4–5 in Awwwards-Qualität. Die restlichen 4 werden im QA-Report als
Restarbeiten dokumentiert mit konkretem Next-Run-Plan.

### IN SCOPE (dieser Commit)

| Phase | Was wird gebaut |
|---|---|
| **0** Repo-Recon | ✅ Done — Astro 5, Tailwind 3, GSAP 3.12, Three.js 0.170, Lenis 1.1, SplitType 0.3, Motion 11 |
| **1** Visual Direction | Mission-Control-Tokens: tieferes Schwarz, electric-cyan-Akzent, chrome-Highlights, holographic-Glass-Card-Stack |
| **2** Hero Rebuild | Komplett neuer Hero: **Three.js Audit-Core-Orb** (custom Vertex+Fragment-Shader, Fresnel-Rim-Glow, Cursor-Reaction, slow auto-rotate) + neue Cinematic-Headline + Framework-Strip + Magnetic-CTAs + Mission-Control-Status-Tag |
| **5** Design-System | Neue Komponenten: `SectionShell`, `CinematicHeading`, `ReportPreview`, `FrameworkStrip`, `SceneProgress`, `ThreeHeroCore`. Plus erweiterte CSS-Tokens (chrome, holographic, beam-light) |
| **8** Implementation | Alles in `visual-cinematic-v2` mit kleinen wartbaren Komponenten. TypeScript strikt für Three.js. Tree-shakeable Three.js Imports |
| **9** Tests & Verification | `npm run check`, `npm run build`, Playwright-Smoke über alle 9 Pages, Screenshots Desktop+Mobile, Bundle-Size-Analyse, `VISUAL-QA-REPORT.md` mit echten Kommando-Ausgaben |

### TEILWEISE in Scope (was geht — was deferred)

| Phase | Drin | Deferred |
|---|---|---|
| **3** Scrollytelling | Scene-Progress-Indicator (vertikal links), Lenis ist schon da, bestehende Reveals bleiben | Pinned-Sections, Image-Sequence-Scrubbing, voller 3D-Library-Shelf — Tier 0.6 aus ROADMAP-V2 |
| **4** Signature-Interactions | Magnetic-Buttons ✅ (schon da), Spotlight-Cursor ✅ (schon da), Report-Card-Tilt ✅ (schon da), neue Scene-Progress, Framework-Marquee mit Velocity-Skew | Voller Cursor-Liquid-Trail (Tier 0.5), Konfetti-CTA (Tier 10B.10) |
| **6** Content & Conversion | Hero-Copy auf User-Vorschlag-Direction: "Senior Software Audits. Geliefert wie ein Produktfilm. Verifiziert wie ein Board-Report." | Vollständige Buyer-Journey-Copy-Iteration auf allen Sub-Pages |
| **7** Performance & A11y | reduced-motion in allen neuen Components, Three.js-Fallback auf Mobile + reduced-motion, Lighthouse-Audit nach Deploy | Lighthouse-Score-Run lokal (in Sandbox kein Headless-Chrome-Audit) |

### OUT OF SCOPE (deferred, dokumentiert in ROADMAP-V2.md)

- Tier 0.4 voller Curtain-Page-Transition (eigener Turn)
- Tier 0.6 3D-Library-Shelf-Kamera-Fahrt (eigener Turn)
- Tier 0.7 Post-Processing-Pipeline (Bloom + Aberration + Grain)
- Tier 0.13 404 als Bruno-Simon-WebGL-Playground
- Tier 11.8 Pricing-3D-Engagement-Boxen
- Tier 12A.3 Kontakt-3D-Calendar-Orbit

---

## Architektur-Plan: neue Komponenten-Struktur

```
src/
├── components/
│   ├── ThreeHeroCore.astro       # NEU — WebGL Audit-Core-Orb (Three.js)
│   ├── SceneProgress.astro       # NEU — vertikale Mission-Timeline rechts
│   ├── FrameworkStrip.astro      # NEU — horizontale Standards-Marquee mit Velocity-Skew
│   ├── ReportPreview.astro       # NEU — Holographic-Audit-PDF-Card (für Hero + Samples)
│   ├── CinematicHeading.astro    # NEU — H1/H2-Wrapper mit SplitType-Choreographie + variable Akzent
│   ├── MagneticButton.astro      # NEU — Wrapper für CTAs mit Magnetic + Beam-Light + State
│   ├── SectionShell.astro        # NEU — Section-Wrapper mit Mission-Control-Frame, Eyebrow, Number
│   ├── Cursor.astro              # bestehend, leichte Refinements
│   ├── Footer.astro              # unverändert
│   ├── LoadingScreen.astro       # unverändert
│   ├── Logo.astro                # unverändert
│   ├── Nav.astro                 # minor: live-mission-status-tag rechts
│   └── PageHeader.astro          # unverändert
│
├── sections/
│   ├── Hero.astro                # KOMPLETT NEU — siehe Hero Rebuild
│   ├── TrustStrip.astro          # nutzt jetzt neue FrameworkStrip
│   └── (alle anderen bleiben — wir polieren Tokens, nicht Sektionen)
│
├── lib/
│   ├── premium.ts                # bestehend, neue Init-Hooks für Hero-Core + Scene-Progress
│   └── three-hero.ts             # NEU — gekapselte Three.js Audit-Core-Logik
│
├── styles/
│   └── global.css                # erweitert mit Mission-Control-Tokens (chrome, holographic, beam, mission-grid)
│
└── pages/
    └── index.astro               # neue Hero-Section + SceneProgress eingebunden
```

---

## Mission-Control-Design-Tokens (PHASE 1 detailliert)

**Farb-System erweitert:**

```css
:root {
  /* Existing */
  --ink-950: #070710;        /* deep space */
  --accent-500: #00b3f0;     /* electric cyan */

  /* NEU — Mission Control */
  --ink-vacuum: #02020a;     /* tiefer als ink-950, für hero-bg */
  --chrome-100: #f0f4f8;     /* helles chrome-Highlight */
  --chrome-300: #b8c2cc;     /* chrome-Reflexion-Mid */
  --chrome-500: #4a5160;     /* chrome-Shadow */
  --hologram: rgba(88, 223, 255, 0.85);   /* holographic-blue */
  --beam: rgba(0, 179, 240, 0.6);          /* light-beam-color */
  --mission-grid: rgba(255, 255, 255, 0.035); /* fine-grid-overlay */

  /* Glow-Stacks */
  --glow-core: 0 0 60px rgba(0, 179, 240, 0.45),
               0 0 120px rgba(0, 179, 240, 0.25),
               inset 0 0 40px rgba(88, 223, 255, 0.15);
  --glow-chrome: 0 0 0 1px rgba(255, 255, 255, 0.1),
                 0 8px 32px rgba(0, 0, 0, 0.6),
                 inset 0 1px 0 rgba(255, 255, 255, 0.08);
  --glow-holographic: 0 0 0 1px rgba(88, 223, 255, 0.3),
                      0 0 30px rgba(88, 223, 255, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);

  /* Easing — kinematisch */
  --ease-cinematic: cubic-bezier(0.83, 0, 0.17, 1);
  --ease-bounce-soft: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Background-System:**
- `bg-vacuum`: pure deep-black background mit subtilem Vignette
- `bg-mission-grid`: feines Grid-Pattern für Section-Background (4 % opacity)
- `bg-beam`: horizontaler/vertikaler Light-Beam für Section-Header

---

## Hero-Rebuild Detail-Plan (PHASE 2)

### Layout
- Full viewport (`min-h-[100svh]`)
- Single column auf Mobile (Orb über Text), 2-column auf Desktop (Text 60% / Orb 40%)
- Schwarzer Background mit subtilem Mission-Grid-Overlay
- Light-Beam horizontal animiert (links → rechts, 8s loop, subtle)

### Three.js Audit-Core-Orb (`ThreeHeroCore.astro` + `three-hero.ts`)

```
IcosahedronGeometry(1.4, 4) als Basis-Sphere
+ Custom-Vertex-Shader:
   - Time-driven Simplex-3D-Noise displaciert Vertices
   - Frequency 1.2, Amplitude 0.08
   - Cursor-Position warpiert lokal (Domain-Warp)
+ Custom-Fragment-Shader:
   - Base: deep electric-cyan
   - Fresnel-Rim: heller-cyan an der Edge (1 - dot(viewDir, normal))^2
   - Inner-Glow: warmer amber an Tiefen-Stellen
   - 0.6 dynamic, 0.4 chrome-Highlight reflektiv
+ Point-Light orbitiert in 4s-Loop
+ Auto-rotation 0.0008 rad/frame
+ Mouse-Influence: lookAt-Lerp zu Mouse-Position (subtle)
+ Bloom-ähnlicher Outer-Glow via zweite expandierte Sphere mit additive-blending
```

**Fallback:**
- Mobile (< 768px): static animated SVG-Orb mit CSS conic-gradient + blur
- `prefers-reduced-motion`: static SVG (kein WebGL-Init, kein Mouse-Listener)
- `prefers-reduced-data` Hint: static fallback

**Performance:**
- Lazy via dynamic import — Three.js wird erst geladen wenn Hero im Viewport
- IntersectionObserver pausiert Rendering wenn Hero off-screen
- Renderer max-DPR 2 (kein Overkill auf Retina)
- `antialias: true` nur auf Desktop, `false` auf Mobile

### Headline-Choreographie

```
Line 1: "Senior Software Audits."        (weight 700, white)
Line 2: "Geliefert wie ein Produktfilm." (weight 600, ink-200)
Line 3: "Verifiziert wie ein Board-Report." (weight 700, gradient cyan→amber)
```

- SplitType char-mask reveal, stagger 25 ms
- Per-line entrance: 0 ms / 280 ms / 560 ms
- Variable-Font-Weight tween während Reveal (400→target)
- Optional A/B-able zur Alternative:
  > "From codebase to board-ready audit — in days, not weeks."
  (im Code als config-Konstante, einfacher Swap)

### Subhead
> Eine kuratierte Bibliothek aus **78 production-grade Workflows** produziert Audit-, Compliance-, Architecture- und Due-Diligence-Reports auf Beratungsklasse-Niveau. Lieferzeit **60–80 % kürzer**, ohne Qualitätsverlust.

### CTA-Paar (Magnetic + Beam-Light)
1. **Erstgespräch buchen** → `/kontakt` (primary, Cyan-Fill)
2. **Sample-Reports ansehen** → `/samples` (secondary, ghost mit Border-Shimmer)

Beide:
- Magnetic-Pull bei Hover (radius 80 px, strength 0.4)
- Beam-Light unter Button beim Hover (4 px Cyan-Glow-Bar slidet rein von links)
- Keyboard-accessible mit Focus-Ring (Mission-Control-Style: doppelter Cyan-Ring)

### Trust-Strip / Framework-Strip
Horizontale Marquee mit Compliance-Standards:
```
EU AI Act · DORA · GDPR · ISO 27001 · OWASP · PCI-DSS · HIPAA · SOC 2 · NIS2
```
- 32 s linear loop
- Pause on hover
- Scroll-Velocity-Skew: schnellerer Scroll = leichter Skew + Speed-Up
- Reduced-motion: static row, no animation

### Mission-Control-Status-Tag (links oben in Hero)
- Mono-Font, klein
- `LIVE · BERLIN · 2026-05-18` mit pulsierendem Dot
- Updates via JS (current UTC)
- Schafft Mission-Control-Feeling

### Floating-Audit-Panels (rechts neben Orb, schweben)
Drei kleine schwebende Glass-Pills mit Audit-Mini-Findings:
- "AUD-001 · CRITICAL · IDOR detected"
- "DSGVO Art. 30 · 47 PII fields mapped"
- "78 Workflows · 9 categories · 100 % verbatim"

Sehr subtle, animate-float mit verschiedenen delays.

### Scroll-Hinweis
- Bottom-center
- "weiter" + animated arrow + pulse-ring
- Magnetic auf Hover

---

## Scene-Progress-Indicator (PHASE 3 leicht)

Rechte Bildschirmrand, vertikal:
```
●─── Mission Control     (Hero)
○─── Problem
○─── System
○─── Output
○─── Trust
○─── Services
○─── Process
○─── Contact
```
- ScrollObserver erkennt sichtbare Section
- Aktiver Punkt wird größer + Cyan-Glow
- Click auf Punkt → smooth-scroll dorthin
- Hover zeigt Section-Name-Tooltip
- Auf < lg viewport: ausgeblendet
- Reduced-motion: keine Animationen, nur active-state

---

## Tests-Plan (PHASE 9)

```bash
cd site
npm install                  # nur falls neue deps (planmäßig keine)
npm run check                # astro check (TypeScript)
npm run build                # full production build
# Lighthouse-Run: deferred, da Sandbox kein Chrome-Headless für lhci hat
```

**Playwright-Tests (Sandbox-Setup vorhanden):**
1. Alle 9 Pages laden mit 200, korrekte H1, 100 % Reveals visible nach 3.5 s
2. Hero auf Home: Three.js Canvas vorhanden + rendert (WebGL-Kontext aktiv)
3. Reduced-motion: Three.js NICHT initialisiert, Static-Fallback sichtbar
4. Mobile-Viewport (390 × 844): kein Three.js, alles passt
5. Loading-Screen-Swap-Bug ist noch fixed (Regression-Check)
6. Screenshots Desktop (1440 × 900) und Mobile (390 × 844)

**Akzeptanz-Kriterien-Mapping:**
| Akzeptanzkriterium | Check |
|---|---|
| 1. cinematic | Mission-Control-Tokens + 3D-Orb + Beam-Light + Holographic-Cards |
| 2. Hero nicht wie normale Landingpage | Three.js-Orb + Mission-Status-Tag + Floating-Audit-Panels |
| 3. echte Three.js/WebGL-Hero-Animation | `ThreeHeroCore` mit Vertex+Fragment-Shader, Cursor-Reaction |
| 4. Scrollen wie Story | Scene-Progress-Indicator + bestehende Section-Reveals + FrameworkStrip |
| 5. Mobile sauber + schnell | Three.js disabled < 768 px, Static-SVG-Fallback, kein performance-hit |
| 6. Build erfolgreich | `npm run build` muss 9/9 Pages exit-0 |
| 7. Legal pages erreichbar | `/impressum`, `/datenschutz`, `/404` unangetastet |
| 8. Keine Compliance-Versprechen | Bestehende Disclaimer-Sprache in About + Hero bleibt |
| 9. Code wartbar | Komponenten ≤ 250 Zeilen, gekapselte Three.js-Logik in `lib/three-hero.ts` |
| 10. 10× besser, nicht 10 % hübscher | Subjective — QA-Report mit Vorher/Nachher-Screenshots |

---

## Risiken & Decision-Points (transparent)

1. **Three.js-Bundle-Size:** core + WebGLRenderer + Shader-Material kommt auf ~180 KB gzipped. Wird dynamic imported nur wenn Hero im Viewport. Mobile lädt nichts davon.

2. **TypeScript-Strenge:** `@types/three` ist nicht in der finalen `devDependencies` (siehe `package.json`-Bug). `astro check` könnte über three.js-Imports stolpern. Fix: package.json deduplicate devDependencies, sicherstellen `@types/three` mitinstalliert ist.

3. **Branch-Strategie:** ich arbeite auf `visual-cinematic-v2` wie im Brief gefordert. PR wird als Draft erstellt. Bestehende PR auf `claude/create-claude-prompt-KGaAX` bleibt unberührt.

4. **Hero Visual Right-Side:** alter Hero hat Report-Card-Stack rechts. Neuer Hero hat Three.js-Orb-Core zentriert. Report-Card-Stack wird in eine eigene `ReportPreview`-Komponente extrahiert und in `/samples` + Sample-Section wiederverwendet — nichts verloren.

5. **Headline-Wechsel:** alte Headline ("Senior Consulting, in Tagen geliefert.") war A/B-tested gut. Neue Headline ("Senior Software Audits…") ist User-Direktive. Beide bleiben im Code als Konstanten — Re-Swap ist 1-Line-Edit.

---

## Definition of Done (für diese Iteration)

- [ ] PHASE 0: Repo-Audit done
- [ ] PHASE 1: Visual-Tokens in global.css erweitert
- [ ] PHASE 2: Hero komplett neu mit ThreeHeroCore
- [ ] PHASE 3 (light): SceneProgress-Indicator vertikal rechts
- [ ] PHASE 5: Components SectionShell, CinematicHeading, MagneticButton, ReportPreview, FrameworkStrip, SceneProgress, ThreeHeroCore
- [ ] PHASE 8: Alle Components klein + wartbar + TS-strikt
- [ ] PHASE 9: `npm run check`, `npm run build` exit-0, Playwright-Smoke 9/9 OK, Screenshots delivered
- [ ] `VISUAL-QA-REPORT.md` erstellt mit echten Kommando-Outputs
- [ ] Commit + Push auf `visual-cinematic-v2` + Draft-PR
