# ROADMAP V2 — Von 20% zu Apple/Blizzard/Activision-Niveau

**Honest baseline (deine Bewertung):**
- Site insgesamt: 10 % von dem, was sie sein soll
- Animationen: 15 % Premium-Feeling
- Premium-Look insgesamt: 20 %

**Ziel:** 100 % — Apple-Hero-Niveau, Blizzard-Cinematic-Scroll,
Samsung-3D-Tilt, Activision-Loading-Screens. Kein Standard-Astro-Template
mehr — eigenständige Marken-Erfahrung.

Diese Roadmap ergänzt die 7-Phasen-Initial-Build. Phasen 8–18 hier sind
das, was zwischen "very good static site" und "Awwwards-Site-of-the-Day"
liegt.

---

## Tier 1 — Foundation Primitives (Phase 8) ← NEXT

Diese Primitives sind die Grundlage aller folgenden Premium-Effekte.
Ohne sie bleibt der Rest Lippenstift auf einem Schwein.

### 8.1 Lenis Smooth Scroll
- Buttery-smooth scroll mit physik-basierter Velocity
- Pflicht für: scroll-driven Animationen ohne Stutter, Apple-Feel
- Lib: `lenis` (~6 KB), wraps native scroll
- Respektiert `prefers-reduced-motion` automatisch

### 8.2 Custom Cursor mit State Machine
- 5 States: `default · pointer · text · drag · disabled`
- Morpht zwischen Zuständen mit GSAP
- Folgt mit physik-basiertem Lag (nicht 1:1)
- Auf Touch-Devices: deaktiviert
- Hover über Buttons → schwillt an + magnetisch zum Element

### 8.3 Magnetic Buttons
- CTAs ziehen den Cursor sanft an wenn er in Nähe kommt
- Button selbst bewegt sich subtle in Cursor-Richtung
- Standard auf Award-Sites; macht jeden Click zur Erfahrung
- Vanilla JS, keine Lib nötig

### 8.4 SplitText Character-Reveal
- Headlines reveal Character-für-Character mit Mask-Effekt
- Apple-Style: jeder Buchstabe slidet aus dem unteren Cliprect
- Lib: `split-type` (~3 KB) statt paid GSAP SplitText
- Mit Stagger, Blur-to-Clear, Color-Shift kombinierbar

### 8.5 Cinematic Loading Screen
- Erstes Aufrufen: Brand-Reveal als kontrolliertes Erlebnis
- BA-Monogram zeichnet sich, expandiert zu Hero
- Dauer: ≤1.5 s, dann auto-fade
- Skip-bar via Click
- LocalStorage flag: zeigt sich nur beim FIRST visit per Session

### 8.6 Bug-Fixes
- **Approach-Karten klickbar machen** (aktuell pointer-events oder fehlende Anchors)
- Magnetic-Hover für jede Karte
- 3D-Tilt das auf Cursor-Position reagiert (Pseudo-Parallax)

---

## Tier 1.5 — CARDS & 3D, drastisch aufgebohrt (Phase 9 erweitert)

> User-Feedback: "die Karten und 3D-Animationen müssen vieeel vieeel besser werden"
> Diese Tier ist die Antwort. Jede Karte auf der Seite bekommt cinematic feel.

### 9-CARD.1 True 3D-Tilt (perspective + rotateX/Y auf Cursor)
- Jede Card mit `[data-tilt]` reagiert auf Cursor-Position
- `perspective: 1000px` + `rotateX/Y` proportional zu Cursor-Offset
- Max-Tilt configurable (default 12°, subtle 6°, dramatic 18°)
- Inner-Layer mit `[data-tilt-inner]` macht die echte Transformation
- GSAP power2.out 0.4s on move, 0.6s smooth recover on leave
- Spotlight-Gradient INNERHALB der Card folgt Cursor (--tilt-x/y vars)

### 9-CARD.2 Card-Layer Parallax (Inhalt schwebt anders als Background)
- Card-Background-Image parallaxiert stärker als Card-Text
- `translateZ` Werte per Layer:
  - Background: 0 px (referenz)
  - Decorative elements: +20 px (subtle pop)
  - Icon/Title: +40 px (mid-pop)
  - Hover-revealed Pfeil: +60 px (strong pop)
- Echtes 3D, nicht fake

### 9-CARD.3 Glass-Edge Light Pickup
- Card-Border ist gradient die auf Tilt-Winkel reagiert
- Light-Source virtuell oben-links — wenn Card kippt, glüht entsprechende Edge
- Pure CSS via conic-gradient + tilt-x/y vars

### 9-CARD.4 Click-Ripple + Press-Feedback
- Click auf Card erzeugt SVG-Ripple aus Click-Position
- 250 ms Animation, fadet zur Edge
- Card scaled 0.97 für 100 ms (press feedback)
- Funktioniert auf Touch + Mouse

### 9-CARD.5 Stagger-Entrance bei Section-Enter
- Cards in einer Section reveal mit choreographiertem Stagger
- Erste Card: 0 ms, dann +80 ms je Card
- Während Reveal: subtle Tilt-Sweep (entrance flourish)
- Settle zu neutral nach 500 ms

### 9-CARD.6 Magnetic + Tilt + Spotlight kombiniert
- Alle drei Effekte gleichzeitig
- Reihenfolge der Update-Loops sorgfältig (Magnetic zuerst, dann Tilt)
- Kein Layout-Thrash — alles auf GPU (transform + opacity only)

### 9-CARD.7 Sample-Cards: Click → Modal-Expand
- Sample-Card-Click expandiert zu Vollscreen-Modal mit FLIP-Animation
- Card-Position → Modal-Position smooth via GSAP FLIP plugin
- Background-Blur 24px
- Esc + Click-Outside + X-Button schließt
- Modal zeigt komplettes Sample (markdown rendered)

### 9-CARD.8 Approach-Cards: Fan + Tilt + Magnetic GEMEINSAM
- Bestehende Fan-Animation bleibt (Scroll-driven)
- DAZU: bei Hover über einzelne Card aus dem Fan, leichter Tilt
- DAZU: Magnetic falls Cursor nah
- Stack-Layer rotieren leicht entgegen — schafft Tiefe
- Click: scroll-snap zur Services-Section + brief Pulse

### 9-CARD.9 Services-Cards: Tilt + Icon-Pop
- Icon-Square innerhalb der Card "pops" weiter aus dem Tilt
- Hover: Icon kippt zusätzlich um -8° (eigenständiges Element)
- Glow um Icon intensiviert
- Tagline-Text bleibt fast statisch (Anker)

### 9-CARD.10 Pricing-Tier-Cards: Spotlight + Sister-Dim
- Hover über eine Pricing-Card dimmt die anderen 2 subtle (opacity 0.7)
- Hover-Card hellt auf (opacity 1.0 + scale 1.02)
- Spotlight innerhalb Hover-Card folgt Cursor
- Most-Popular-Badge schimmert via shimmer-gradient permanent

---

## Tier 2 — Hero Upgrade (Phase 9–10)

### 9.1 WebGL Particle Hero
- Three.js Scene mit 2000+ Partikeln
- Partikel verbinden sich zu Linien wenn nah
- Reagieren auf Cursor (gravity / repulsion)
- Color-Shift mit Brand-Palette
- Performance: GPU-instanced, läuft auf Smartphone

### 9.2 Headline Cinematic Reveal
- "Senior Consulting" — character-Reveal mit Mask
- Linien-Animation darunter (drawing path)
- Subhead: typewriter-Effekt mit Cursor-Blink
- CTA-Button: fades in mit subtle scale + bounce
- Stagger so getimed dass es "atmet"

### 9.3 Background Mesh Gradient
- WebGL Shader-basiert (nicht CSS radial-gradient)
- Drift langsam, reagiert auf Cursor + Scroll
- Color-Stops in Brand-Palette
- Subtle noise overlay (broken from gradient banding)

### 9.4 Logo Reveal Animation
- BA-Monogram: zeichnet sich beim First-Load
- Linien-für-Linien stroke-dashoffset Animation
- Dann fill-in, dann settle in nav
- Erst danach: Rest der Page fadet ein

---

## Tier 3 — Section Choreography (Phase 11–13)

### 11.1 Pinned Horizontal Scroll für Services
- User scrollt vertikal, die 9 Service-Cards scrollen horizontal
- Auf Mobile: native vertical (für Touch besser)
- GSAP ScrollTrigger horizontal mit snap
- Karten-Hintergrund-Color shiftet pro Card (subtle)

### 11.2 Image Sequence Scrubbing für Approach
- Apple-Pattern: Scroll-Position triggert Bild-Sequenz-Frame
- 50–100 Frames eines 3D-Library-Stacks (gerendert oder generiert)
- Canvas-basiert, kein Video (besseres Scrub-Verhalten)
- Reduziert auf Mobile (Bandwidth)

### 11.3 Color-Theme Shifting Between Sections
- Body-Background-Color shiftet zwischen Sektionen
- ScrollTrigger triggert CSS-Variable change
- Subtle (ink-950 → ink-900 → ink-950 mit Accent-Tint)
- Schafft Tiefe ohne Visual-Noise

### 11.4 Sticky Headlines die Morphen
- Section-Headlines bleiben sticky während die Section scrollt
- Verkleinern sich gradually
- Color shiftet
- Anchor für Reader, kein Verlieren

### 11.5 Trust-Strip Marquee mit Scroll-Velocity-Skew
- Standard-Marquee aktuell konstant Speed
- Upgrade: Speed reagiert auf Scroll-Velocity
- Schnell scrollen → Marquee beschleunigt + skewt
- Subtle, aber zeigt Liebe zum Detail

---

## Tier 4 — Interactive Components (Phase 14–16)

### 14.1 Cards mit echtem 3D-Tilt
- Vanilla Tilt.js-Pattern: cursor-relative perspective-shift
- Glow folgt Cursor innerhalb der Card
- Backface-Hint (subtle inner shadow)
- onClick: ripple + transition zu Detail-View

### 14.2 Number Counters mit Motion-Blur
- About-Section-Stats animieren von 0 zu Target
- Während Animation: filter blur(2px), nach Animation: blur(0)
- Color-Pulse am Ende
- Tabular-nums damit kein Layout-Shift

### 14.3 FAQ-Accordion mit Morph-Animation
- Aktuell: native `<details>` (funktional, nicht premium)
- Upgrade: GSAP-Timeline mit height + opacity + Spring-Easing
- Plus-Icon morpht zu Minus-Icon mit Path-Animation
- Background-Color shiftet beim Open

### 14.4 Pricing-Card Hover-Spotlight
- Cursor-Position erzeugt Spotlight-Gradient innerhalb der Card
- Andere Cards dimmen subtle wenn eine Card hover
- Card-Border glows in Brand-Color

### 14.5 Form-Inputs mit Floating Labels
- Wenn CTA-Form gebaut wird (Phase 18): Apple-Style
- Label floatet von Placeholder-Position zu Above-Position
- Border-Animation on focus (drawing-line effect)
- Validation mit Spring-Animation

### 14.6 Sample-Card Detail-View
- Click auf Sample-Card → animated modal mit voller Sample-Preview
- Background-Blur, Card morpht zu Vollscreen
- Esc + Click-Outside schließt
- Smooth zurück zum Grid-State

---

## Tier 5 — Polish & Differentiators (Phase 17–18)

### 17.1 Page Transitions (Lenis + View Transitions API)
- Zwischen Index ↔ Impressum ↔ Datenschutz
- Custom: Color-Wipe + Logo-Morph
- Browser-native View Transitions als Fallback

### 17.2 Loading States Everywhere
- Image lazy-load: blurred placeholder → sharp
- Button click feedback: subtle scale + ripple
- Section enter: skeleton während Anim setup

### 17.3 Dark/Light Mode Toggle (mit Theme-Animation)
- Aktuell: dark-only
- Add: light mode mit smooth color transitions
- Toggle: Sun/Moon morph mit GSAP
- Persistiert in LocalStorage + respektiert OS-preference

### 17.4 Easter Eggs
- Konami-Code → CSS-Filter "matrix mode" für 5s
- Hover-Spam auf Logo → Subtle dance
- Click-Spam auf Hero-Headline → Particle-Burst
- 404-Page: subtle game (z.B. Snake) eingebaut

### 17.5 Sound Design (Off by Default)
- Sound-Toggle in Nav (off by default)
- Subtle UI-Sounds: hover/click/section-snap
- Sample-Reveal mit "page turn" Sound
- Royalty-free Library, alles <100 KB

### 17.6 Cursor-Following Background Orbs
- 2-3 Gradient-Orbs die dem Cursor folgen mit Lag
- Pflicht für "Apple-Hero" Look
- Performance: nur ein paar div+blur, GPU-beschleunigt

---

## Tier 6 — Performance & A11y (laufend, durch alle Phasen)

### Critical Performance Budgets (post-Upgrade)
| Metric | Aktuell | Ziel |
|---|---|---|
| LCP | unbekannt | ≤ 1.5 s |
| INP | unbekannt | ≤ 100 ms |
| CLS | unbekannt | ≤ 0.05 |
| Total JS | ~50 KB | ≤ 300 KB (with Three.js lazy) |
| Lighthouse Perf | unbekannt | ≥ 90 (mit allen Effekten) |

### A11y bleibt Pflicht (kein Trade-off!)
- `prefers-reduced-motion` deaktiviert ALLE Effekte (Lenis, Cursor, Particles, etc.)
- Keyboard-Nav funktioniert ohne Custom-Cursor
- Screen-Reader: Custom-Cursor + Particles haben `aria-hidden`
- Touch-Devices: Custom-Cursor + Magnetic-Buttons disabled (kein hover)
- Loading-Screen: skip-bar mit Esc-Key
- Focus-States: bleiben sichtbar UNTER Custom-Cursor

### Dependencies-Strategie
| Lib | Größe | Wofür | Lazy? |
|---|---|---|---|
| `lenis` | 6 KB | Smooth scroll | nein, kritisch |
| `gsap` | 65 KB | Animationen | nein, kritisch |
| `split-type` | 3 KB | SplitText reveals | nein |
| `three` | ~600 KB | WebGL hero particles | JA, dynamic import only on hero |
| `lottie-web` | ~250 KB | Optional, falls Lottie-Animation | JA |

Three.js wird **erst geladen wenn Hero im Viewport** + nur auf Desktop.
Mobile bekommt ein static gradient fallback. So bleibt Mobile-Lighthouse oben.

---

## Execution Plan (5 Turns)

| Turn | Phase | Was wird gebaut |
|---|---|---|
| **8** (jetzt) | Foundation | Lenis · Custom Cursor · Magnetic Buttons · SplitText · Loading Screen · Approach-Card-Fix |
| **9** | Hero Upgrade Part 1 | Headline Cinematic Reveal · Logo Stroke Animation · Background Mesh Shader |
| **10** | Hero Upgrade Part 2 | Three.js Particle Field · Cursor Gravity · Hero-Card-Stack 3D-Tilt |
| **11–12** | Sections | Pinned Horizontal Services · Image Sequence Approach · Color-Theme Shifting |
| **13–14** | Interactive | 3D Tilt Cards · Motion-Blur Counters · Morph FAQ · Spotlight Pricing · Sample Detail Modal |
| **15** | Polish | Page Transitions · Loading States · Easter Eggs · Performance Pass · A11y Audit |

Total: 5–6 zusätzliche Turns. Jeder Turn = 1 sichtbarer Major-Upgrade.

---

## What "Apple/Blizzard-Niveau" konkret bedeutet (Operational)

| Bereich | 0815 (aktuell) | Apple-Tier (Ziel) |
|---|---|---|
| Scroll | Native browser | Lenis smooth + physik-basiert |
| Cursor | Native arrow | Custom mit 5 States + Lag |
| Buttons | Hover scale + color | Magnetic + ripple + state machine |
| Headlines | Fade in | Character-Mask-Reveal mit Stagger |
| Hero | Static gradient + 3D cards | WebGL Particles + Shader Mesh |
| Cards | Hover translate-y | 3D Tilt + Cursor Spotlight + Click-Reveal |
| Sections | Fade-up reveal | Cinematic scroll-driven choreography |
| Loading | Instant flash | Brand Reveal (1.5s controlled) |
| Page-Wechsel | Instant | View Transition + Color Wipe |
| Numbers | Static or simple count | Motion-blur during animation |
| FAQ | Native `<details>` | Spring-morphed accordion |
| Soundscape | Silent | Optional UI-sounds (off-default) |
| Background | Fixed gradient | Cursor-following orbs + scroll-shift |
| Easter Eggs | Keine | Mindestens 3 versteckte |

---

## Honesty-Section

**Was ich nicht hier liefern kann:**
- Echtes Visual-Testing in Browser (kein Playwright in dieser Sandbox)
- Lighthouse-Scores direkt messen (du musst nach Deploy testen)
- Custom-Illustrationen / Lottie-Files erstellen (ich kann nur Code + SVG)
- Royalty-free Sound-Files generieren (ich kann nur referenzieren)

**Was ich liefern kann:**
- Production-grade Code für jeden der oben gelisteten Effekte
- Code der CI grün durchläuft
- Code der `prefers-reduced-motion` respektiert
- Code der mobile + desktop performant ist
- Code mit echten Hooks (kein Mock)
- Iterationen wenn etwas nicht passt — du sagst was, ich fixe

**Wo du selbst Hand anlegen musst:**
- Eigene Hero-Bilder / Illustrationen (sonst nutze ich Generierte)
- Custom Sound-Design (kann ich verlinken zu Royalty-free Quellen)
- Echte Customer-Logos für Trust-Strip
- Eigenes Foto für About-Sektion

---

Phase 8 startet jetzt im selben Commit.
