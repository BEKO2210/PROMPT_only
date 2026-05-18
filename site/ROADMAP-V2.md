# ROADMAP V2 — Von 20% zu Awwwards-Site-of-the-Day

**Honest baseline (deine Bewertung):**
- Site insgesamt: 10 % von dem, was sie sein soll
- Animationen: 15 % Premium-Feeling
- Premium-Look insgesamt: 20 %

**Ziel:** Awwwards-SOTD-Niveau. Bruno-Simon-Hover-Tricks,
Refokus-Type-Choreography, Active-Theory-Page-Transitions,
Codrops-Image-Distortions. **NICHT** "good static site" — *Identitäts-Erlebnis*.

> **User-Direktive:** "viel krasser as du geplant hast die Roadmap erweitern es geht nur um das visuelle"
> Diese Roadmap fokussiert sich auf reine Visual-Ambition. Performance-Budgets
> bleiben Pflicht (Tier 6), aber jeder Effekt darf so weit gehen wie es
> performance-mäßig irgendwie verantwortbar ist — Mobile bekommt Fallbacks.

Diese Roadmap ergänzt die 7-Phasen-Initial-Build. Phasen 8–22 hier sind
das, was zwischen "very good static site" und "die Seite die in der
Awwwards-Jury-Diskussion landet" liegt.

---

## Tier 0 — CINEMATIC LAYER (Awwwards-SOTD-Tier, neu hinzugefügt)

> Diese Tier existiert weil "Apple-tier" nicht mehr reicht. Apple ist
> 2018-Awwwards. SOTD 2025/2026 ist Bruno Simon, Active Theory, Resn,
> Locomotive, Codrops, Refokus. **Diese Effekte sind alle hier kalkuliert.**

### 0.1 Hero-Planet als echte 3D-WebGL-Mesh
- Logo wird **nicht** als PNG geladen — als procedural geriggte WebGL-Mesh
- Three.js `IcosahedronGeometry(2, 5)` als Basis-Planet
- Custom Vertex-Shader: Simplex-3D-Noise für lebendige Oberfläche
- Fragment-Shader: Fresnel + atmosphärischer Rim-Glow + zwei Color-Stops aus Brand-Palette
- Punkt-Light orbitiert in 4s-Loop (Refraktion-Highlight wandert)
- Cursor-Position dreht den Planet sanft (`lookAt(cursorVec)` mit Lerp)
- Scroll-Position skaliert + tiltet (kleiner & nach links wenn man scrollt — wird zum Nav-Logo)
- `prefers-reduced-motion`: fallback zu statischem PNG (kein WebGL-Init)
- Mobile: niedrigere Mesh-Subdivision (Level 3 statt 5), 30fps Cap

### 0.2 Liquid-Background-Shader hinter dem ganzen Hero
- Full-Screen-Quad mit Custom-Fragment-Shader (350 Zeilen GLSL)
- 4-Layer-Domain-Warped-Noise (Inigo-Quilez-Pattern)
- Brand-Color-Mapping per `mix()` zwischen 3 Palette-Stops
- Cursor-Position als `uniform vec2 uMouse` warpiert das Noise lokal
- Scroll-Velocity als `uniform float uScrollVel` beschleunigt die Flow-Geschwindigkeit
- Lib: `ogl` (8 KB, fast 75× kleiner als three.js für rein-2D-Shader)
- Fallback: animierter CSS conic-gradient

### 0.3 Image-Hover-Distortion (Sample-Cards + About-Foto)
- Codrops-Pattern: Hover auf Bild = WebGL-Plane mit Displacement-Shader
- Bild + Displacement-Map werden als Textures uploaded
- Hover-Progress (0→1) treibt Displacement-Stärke
- Cursor-Position innerhalb des Bildes = lokales Distortions-Zentrum
- Off-Hover: smooth Lerp zurück zu Original
- Touch: kompletter Effekt deaktiviert, normales `<img>` Fallback

### 0.4 Curtain-Transition zwischen Seiten
- Bei jedem Page-Wechsel: schwarzer Curtain wischt diagonal über Viewport
- Brand-Color-Akzent-Streifen läuft mit (Cyan, 4px breit)
- Curtain hält 280 ms (Out) + 100 ms (Hold) + 280 ms (In)
- Während Hold-Frame: neue Page lädt + reveals re-init unsichtbar
- View-Transitions-API steuert nichts mehr — eigenes Choreographie-Layer übernimmt
- `prefers-reduced-motion`: instant page-swap

### 0.5 Cursor-Liquid-Trail (WebGL Particle-Stream)
- Cursor zieht WebGL-Partikel-Trail hinter sich (50 instanced sprites)
- Partikel fadet aus mit eigener Lifetime (600 ms)
- Color: Brand-Cyan, additiv geblendet (echtes Bloom-Feeling)
- Während Click: Burst von 30 zusätzlichen Partikeln
- Custom-Cursor (8.2) bleibt — Trail ist Layer DAHINTER
- Touch + reduced-motion + low-DPR: deaktiviert

### 0.6 Scroll-driven 3D-Kamera-Fahrt durch Library-Categories
- Approach-Section wird eine 3D-Scene mit acht "Library-Schubladen"
- Vertical-Scroll = Kamera fliegt horizontal vor den Schubladen vorbei
- Jede Schublade öffnet sich beim Vorbeifliegen (Drawer-Anim)
- Cards der Kategorie "fly out" der Schublade in 3D-Space
- ScrollTrigger-pin der Section + horizontal-3D-Translation
- Mobile: degradiert zu vertikalem Card-Stack mit Reveal (kein 3D)

### 0.7 Post-Processing-Pass (Bloom + Chromatic-Aberration + Film-Grain)
- Auf ALLE WebGL-Canvases: postprocessing-pipeline
- Bloom-Pass: highlight-glow für Akzent-Cyan-Stellen (planet rim, particles)
- Chromatic-Aberration: 0.3 px subtle (nur bemerkbar im A/B)
- Film-Grain: 0.04 opacity noise overlay (kinematisch warm)
- Vignette: 30% radial darken am Rand
- Lib: `postprocessing` (~80 KB, lazy-loaded)
- Mobile: nur Vignette aktiv, andere Pässe übersprungen

### 0.8 Section-Reveal mit echtem Iris-Wipe-Mask
- Beim Scroll in eine neue Section: SVG-Clip-Path öffnet sich
- Circle expandiert von Section-Center bis Viewport-Diagonale
- Während Reveal: bg-Color shiftet leicht
- 700 ms cubic-bezier(0.85, 0, 0.15, 1)
- Stagger zwischen Section-Header → Content → Footer

### 0.9 Sticky-Display-Word-Morph (Section-übergreifend)
- EINE Display-Headline pro Seite bleibt während Scroll permanent sticky
- Text morpht zwischen Section-übergangen mit variable-font-weight-Tween
- Wenn man von Hero scrollt: "Senior Consulting" morpht zu "Neun Engagements"
- variable-font axis "wght" tweent zusammen mit Text-Swap (Inter-Tight 600→800)
- Akzent-Color shiftet pro Section

### 0.10 Live-Data-Ticker in Nav
- Nav rechts: micro-ticker mit live-data (UTC-Zeit, last-build-Timestamp, current-section)
- JetBrains-Mono, 10px, ink-500
- Updates per requestAnimationFrame (Frame-Counter sichtbar)
- Brand-Signal: "diese Site lebt, ist kein Cache-Artefakt"

### 0.11 Magnetic-Snap-Grid (versteckte Magnet-Punkte auf der ganzen Seite)
- Unsichtbares 6×N-Grid über jede Section
- Cursor snappt sanft zu Grid-Punkten wenn nah (8px radius)
- Pulse-Animation auf snap (subtle)
- Schafft Gefühl von Präzision — alles ist *aligned*
- Off bei prefers-reduced-motion + touch

### 0.12 Audio-Reactive Hero-Pulse (optional, off-by-default)
- Falls User Sound aktiviert (8.7): Hero-Planet pulst auf Beat von ambient-Pad
- Web-Audio-API analysiert Frequenz-Bins
- Bass-Range → Planet-Skalierung
- High-Range → Bloom-Intensity-Modulation
- Royalty-free ambient-Track (~120 KB MP3 lazy)
- Default off — kein Auto-Play je

### 0.13 404-Page als WebGL-Playground
- Bruno-Simon-tier: 404 wird interaktiver WebGL-Spielplatz
- Floating-Buchstaben "404" als physik-basierte Rigid-Bodies
- Cursor schubst sie weg
- Click: explosion + neue Anordnung
- Lib: `cannon-es` (40 KB) für physics
- "Zurück zur Startseite"-Button bleibt magnetisch fix

---

## Tier 1 — Foundation Primitives (Phase 8) — ✅ DONE

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
- ✅ **Approach-Karten klickbar machen** — Karten zu `<a>`-Elementen mit pointer-events + magnetic + hover-chevron umgebaut
- ✅ Magnetic-Hover für jede Karte
- ✅ 3D-Tilt das auf Cursor-Position reagiert (Pseudo-Parallax)
- ✅ **Loading-Screen bleibt bei Seitenwechsel hängen** — inline `<script>` wird vom ClientRouter nicht re-executed; Fix via `astro:before-swap` Handler der das LoadingScreen-Markup aus jedem gewappten Dokument entfernt und `document.documentElement.style.overflow` zurücksetzt. Verifiziert mit Playwright: erste Landung zeigt Screen + Auto-Dismiss, jede ClientRouter-Navigation = Screen absent, Cold-Land auf Sub-Page = Screen zeigt sich + dismisst.

---

## Multi-Page Restructure (Phase 9.5) — ✅ DONE
- ✅ Single-page Site in 6 Pages aufgeteilt (`/`, `/leistungen`, `/methodik`, `/samples`, `/ueber`, `/kontakt`)
- ✅ `PageHeader.astro` Komponente für konsistente Sub-Page Hero-Strips
- ✅ Home als Hub: Hero + TrustStrip + Problem + drei Teaser-Karten mit Watermark-Numbers (78/9/10) + Final-CTA
- ✅ Anker-Links innerhalb der Sektionen auf base-aware absolute URLs umgeschrieben
- ✅ Footer Link-Gruppen neu sortiert nach Seiten-Struktur
- ✅ Build green (9 Routes inkl. Legal), Playwright verifies 6/6 Pages = 200 OK, korrekte H1s, 100% Reveals nach 3s Safety-Fallback

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

### 9-CARD.11 Card-Flip mit Back-Face (Services)
- Service-Cards haben echtes 3D-Back (Card-Body mit Sample-Snippet)
- Klick auf Card-Footer-Chevron: Card flippt 180° um Y-Achse
- Back-Face: monospace Sample-Output-Excerpt (3 Zeilen) + "Full Sample"-CTA
- Back-Face hat eigenes Tilt-Behavior
- Flip-Animation: 800 ms power3.out
- Backface-Visibility: hidden auf beiden Seiten korrekt
- Mobile: stattdessen Bottom-Sheet-Slideup

### 9-CARD.12 Marquee-Card-Row mit Velocity-Skew (TrustStrip)
- TrustStrip (Compliance-Badges) skewt auf Scroll-Velocity
- Schneller Scroll = stärker geneigt + schneller bewegt
- ScrollObserver liefert Velocity, GSAP Lerp glättet
- Bonus: einzelne Badges "wackeln" minimal bei sehr schnellem Scroll
- Refokus-Style — wirkt physikalisch echt

### 9-CARD.13 Pricing-Card: 3D-Medal/Coin-Rotation für "Beste Wahl"
- "Most-Popular"-Badge wird nicht statisch — 3D-Medaille die langsam rotiert
- 12-Frame CSS-Keyframe mit transform-style: preserve-3d
- Rückseite zeigt Brand-Logo
- Glanz-Reflexion wandert mit Rotation
- Auto-rotation 6s loop, beschleunigt auf Hover

### 9-CARD.14 Sample-Card-Hover: WebGL-Image-Distortion
- Tier-0.3 Pattern angewandt auf Sample-Card-Thumbs
- Bild auf Card ist WebGL-Plane mit Displacement-Map
- Hover: Distortion-Wave läuft durchs Bild (350 ms)
- Hover-Off: Glättet sich zurück
- Bewirkt "ich kann das Bild fast anfassen"-Gefühl

### 9-CARD.15 Card-Edge-Border-Sweep (Glanzlauf wie Premium-Produkt-Cards)
- Hover: ein dünner Cyan-Glanzstreifen läuft EINMAL um den Card-Border
- Conic-Gradient als border-image animiert
- 1.2s Duration, dann fade-out
- Wie Mercedes-EQ-Konfigurator oder MacBook-Pro-Product-Page

### 9-CARD.16 Pricing-Hover-Particle-Burst
- Hover auf Pricing-Card: kleine Partikel steigen vom Card-Bottom hoch
- 8-12 winzige Lichtpunkte, fadet nach 800 ms
- Akzent-Color
- Per Card-Hover triggered, nicht permanent

---

## Tier 2 — Hero Upgrade (Phase 9–10, drastisch erweitert)

### 9.1 WebGL Particle Hero (upgraded: 6 000 instanced, GPU-curl-noise)
- 6 000 Partikel via Three.js `InstancedBufferGeometry` (GPU-side, kein CPU-Update)
- Position-Update über Curl-Noise im Vertex-Shader (Inigo-Quilez-Algorithmus)
- Verbindungslinien zu Nachbar-Partikeln im Radius (Lines2 Material, additive blending)
- Cursor erzeugt Repulsion-Field (`uMouse` als 3D-Pos via raycast auf Hero-Plane)
- Color: Cyan-Akzent + amber, oszillierender mix() per Partikel-ID
- Bloom-Post auf den Partikeln (Tier-0.7) — sieht aus wie heiße Plasma-Fäden
- Mobile: 800 Partikel, kein Verbindungs-Linien-Raster, kein Bloom
- Lazy via dynamic import + IntersectionObserver — lädt erst wenn Hero im Viewport

### 9.2 Headline Cinematic Reveal (upgraded: 3-Layer Mask)
- Layer 1: Character-Mask-Reveal (SplitText, 25 ms stagger, cubic-bezier(0.65, 0, 0.35, 1))
- Layer 2: Pro-Wort Slight-Blur (16 px → 0) parallel zum Reveal
- Layer 3: Variable-Font-Weight tween (wght: 400 → 700) während Reveal
- Sub-Headline: Typewriter mit echtem Caret-Blink
- CTA-Buttons: scale 0.92 → 1 mit overshoot-spring (gsap.elastic.out)
- Decorative-Underline: SVG-Path draw 1s nach Headline-Settle
- Komplette Choreographie: 1.6 s Total, atmet wirklich

### 9.3 Background Mesh Gradient (upgraded: 4-Stop Domain-Warped Shader)
- Siehe Tier 0.2 — voller Custom-Shader
- Plus: Section-Color-Theme aus 11.3 driftet die Color-Stops weich
- Plus: Scroll-Position verschiebt die Noise-Offset (Parallax-Tiefe)
- Plus: Cursor-Position warpiert das Noise lokal (Domain-Warp-Center)

### 9.4 Logo Reveal Animation (upgraded: Stroke + 3D-Mesh-Born)
- 0–600 ms: SVG-Stroke zeichnet Logo-Outline (stroke-dashoffset)
- 600–1200 ms: Outline fade out, gleichzeitig 3D-Mesh (Tier 0.1) fade in
- 1200–2000 ms: Planet pulsiert einmal in voller Size (Settle)
- 2000–2400 ms: Planet schrumpft + flieg in Nav-Position
- Rest der Page erscheint mit Stagger-Reveal danach
- "Born from Sketch" — das Gefühl

### 9.5 Hero-Lichteffekt-Sweep (Apple-Keynote-Style)
- Bei Hero-Reveal-Settle: dünner heller Lichtstreifen läuft EINMAL von links nach rechts
- Lichtstreifen erleuchtet Headlines + Planet + CTAs sequenziell
- 1.4 s Duration
- White-Hot 80% Opacity, mix-blend-mode: overlay
- One-shot, kein Loop

### 9.6 Scroll-Indicator als animierter Pfeil + Pulse
- Bottom-Center: "scroll" + Pfeil + animierter Pulse-Ring
- Pulse-Ring: 3 SVG-Circles staggered 800 ms expand+fade
- Pfeil: gentle bounce-y 2.4 s loop
- Verschwindet ab Scroll-Y > 200

### 9.7 Hero-Numeric-Counter ("78 Workflows" / "9 Engagements" / "10 Samples")
- Drei mini-Stats unter CTA-Strip
- Bei First-View: Count-up 0 → Target in 1.2 s mit cubic-out
- Während Count: Motion-Blur (tier 14.2)
- Tabular-nums, JetBrains-Mono
- Bei jedem hit eines Tens (10, 20, 30): subtle pulse + Akzent-Color-Flash

### 9.8 Hero-Background-Stars (Schicht hinter Planet)
- 200 statische Punkt-Sterne in Tiefen-Layern (3 Layer mit unterschiedlicher Parallax-Stärke)
- Twinkle-Animation mit Stagger (jedes 4. Stern, je 6 s)
- Mouse-Parallax: Sterne im Front-Layer driften 4× stärker als Back-Layer
- Pure SVG mit CSS — kein WebGL nötig
- Ergänzt die Planet-Stimmung (Hero ist *Weltraum*, nicht *Schreibtisch*)

---

## Tier 2.25 — LIQUID WEBGL LAYER (Codrops-Tier, neu hinzugefügt)

> Diese Tier macht die Site *plasmatisch*. Hintergründe, Borders,
> Image-Hovers, Cursor — alles bekommt einen WebGL-Layer der reagiert.
> Das ist der Unterschied zwischen "CSS-Site" und "lebendiger Organismus".

### 10A.1 Globaler Noise-Underlay (Film-Grain auf gesamter Page)
- Full-Page WebGL-Canvas mit additivem Noise-Shader
- Animated `time` uniform (60 fps grain neu generiert)
- Opacity 0.03 — fast unsichtbar einzeln, summiert zu kinematischer Wärme
- Eliminiert Gradient-Banding komplett

### 10A.2 Section-Hintergrund-Shader: jede Section eigener Look
- Jede Section bekommt eigenen WebGL-bg-Shader-Variant
- Hero: Domain-Warp-Noise (Tier 0.2)
- Problem: Glitching/Static-Noise-Shader (echtes Glitch-Feeling für "kaputte" Workflows)
- Approach: Vertical-Flow-Lines-Shader (wie Datenstrom)
- Services: Hexagonal-Grid-Shader, Hex pulsieren auf Cursor
- Pricing: Subtle-Caustic-Shader (Wasser-Licht-Brechung — "Wert fließt zu dir")
- About: Aurora-Shader (Nordlichter, sanft driftend)
- FAQ: Subtle-Wave-Shader
- Kontakt: Particle-Field, dichter als Hero

### 10A.3 Glass-Border-Shimmer auf allen Glass-Cards
- Card-Borders bekommen permanenten subtle Shimmer-Sweep
- Conic-Gradient rotiert sehr langsam (12s loop)
- Auf Hover beschleunigt auf 3s
- Subtile Cyan-Tönung — Card "lebt"

### 10A.4 Image-Plane-Reveal mit RGB-Split-Glitch
- Sample-Card-Thumbs erscheinen mit RGB-Split-Glitch beim Reveal
- Red+Green+Blue Channels staggered 80 ms eingeblendet
- Zusammen mit Mask-Reveal (clip-path Stripes)
- 700 ms Total bis Image stabil
- Codrops-Klassiker

### 10A.5 Section-Divider als animierte SVG-Path-Draws
- Zwischen Sections: dünne SVG-Path-Linie zeichnet sich beim Erreichen
- Path ist nicht gerade — leichte Kurve / Welle / Spike
- 1.2 s Draw-Time, dann pulse-Glow
- Conditional pro Section-Übergang (visuelle Markierung)

### 10A.6 CSS-Houdini Paint-Worklet für custom Backgrounds
- Backgrounds die mit normalem CSS nicht möglich sind:
  - Procedural Topographic-Map-Lines hinter Approach-Section
  - Animated Voronoi-Cells hinter Services
- Houdini-fallback: statisches generiertes SVG
- Browser-Support-Check, fallback automatisch

### 10A.7 Backdrop-Filter-Chain (echtes Glas, nicht Fake)
- Glass-Cards: backdrop-filter: blur(20px) saturate(160%) brightness(110%)
- Plus border mit gradient-mask
- Plus innerer Shadow für Tiefe
- Plus hauchdünne weiße Linie am Top (Light-Pickup)
- Layer-Komposition wie Vision-Pro-Glass

### 10A.8 Hover-Magnify auf Pricing-Tier-Logos
- Compliance-Logos auf Pricing-Cards: Hover = WebGL-Magnify-Lens unter Cursor
- Lens-Position folgt Cursor
- 1.6× Magnification mit Distortion-Edge
- Pure WebGL, kein DOM-Element

---

## Tier 2.5 — PAGE CHOREOGRAPHY (Active-Theory-Tier, neu hinzugefügt)

> Jede Page-Navigation ist ein *Moment*. Nicht ein simpler Swap. 
> Die User-Aufmerksamkeit ist Premium-Asset — wir nutzen sie.

### 10B.1 Choreographierte Page-Transition (Curtain + Logo-Hand-off)
- Tier 0.4 baseline, plus:
- Während Curtain-Hold: Logo aus alter Page schwebt über Curtain, landet in neuer Position auf neuer Page
- "FLIP"-Animation zwischen Logo-Positions
- Cursor bleibt sichtbar während Transition (Continuity)

### 10B.2 Section-zu-Section-Snap mit "Settle"-Indikator
- Beim Scroll-Stop: dünner Akzent-Strich erscheint am Section-Top für 600 ms
- "You arrived here"-Indikator
- Mit ScrollObserver-velocity-detection: nur bei echter Pause
- Subtle aber wertvoll für Orientierung

### 10B.3 Scroll-Direction-Aware Animations
- Animationen kennen die Scroll-Richtung
- Scroll-down: Items kommen von unten + fadet
- Scroll-up: Items kommen von oben + fadet
- Reveal feels "richtig" in beide Richtungen
- Vermeidet das hässliche "rückwärts läuft Animation umgekehrt"-Bug

### 10B.4 Sticky-Section-Header mit Morph-Headline
- Tier 0.9 erweitert
- H1 auf jeder Page bleibt sticky bis nächste H1-Section
- Während Sticky: shrinkt von 64px auf 28px
- Weight tweent 700 → 500
- Color shiftet zu ink-300
- Wird Anker im Page-Flow

### 10B.5 Scroll-Progress-Bar mit Section-Breadcrumb
- Oberer Page-Edge: dünne Progress-Bar (1 px Cyan)
- Plus Mini-Section-Tick-Marks (6-8 Ticks)
- Aktive Section: Tick wird hellem Cyan-Dot
- Hover über Tick: Tooltip mit Section-Name
- Click: smooth-scroll zu Section
- Lenis-Integration

### 10B.6 Fab-Magnet (Floating-Action-Button mit Magnetic-Behavior)
- Kontakt-CTA als Floating-Pill unten-rechts ab Scroll-Y > 800
- Magnetic-Anziehung (Tier 8.3)
- Hover: expandiert + zeigt Text "Gespräch"
- Click: smooth nav zu /kontakt mit Curtain-Transition
- Auf Mobile: Bottom-Sticky-Pill

### 10B.7 Section-Enter-Camera-Tilt
- Beim Section-Eintritt: ganze Section "tiltet" minimal in 3D (1°)
- Wie wenn Kamera die Section anschaut
- Settled in 600 ms zu 0°
- Sehr subtle, summiert zu "alive" Gefühl
- Reduced-motion: deaktiviert

### 10B.8 Reading-Time-Indicator pro Sub-Page
- Sub-Pages haben mini "5 min Lesezeit"-Anzeige neben PageHeader
- Animated Ring fills based on Scroll-Progress
- Wenn ganz unten: kleines Häkchen ✓
- Subtle gamification-element

### 10B.9 Section-übergreifende Color-Wave (Brand-Akzent reist mit)
- Beim Scroll: ein Cyan-Glow-Punkt "reist" mit dem Viewport-Center
- Beleuchtet die aktuelle Section subtle stärker
- Schafft Fokus, vergisst nicht den Hintergrund

### 10B.10 Konfetti bei "30-Minuten-Gespräch buchen" Click (One-Off-Joy)
- Wenn User auf Final-CTA-Button (alle Seiten) klickt:
- 80 Konfetti-Partikel sprühen aus dem Button
- Brand-Colors (Cyan + Amber + White)
- 1.6 s Animation, fadet in physik-basiertem Fall
- Bevor /kontakt-Curtain startet
- Macht den Convert-Moment *feiern*

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

### 11.6 Approach-Section als echtes 3D-Library-Shelf (Tier 0.6 vollständig)
- Section wird gepinnt + horizontal-3D-Scrolled
- 8 Library-Kategorien = 8 schwebende "Regal-Slots" in 3D-Space
- Cards der Kategorie schweben in 3D vor jedem Slot
- Kamera fliegt vor den Slots vorbei
- Per Slot-Stop: Cards "fan out" + jeweils klickbar
- Mobile: vertical-Card-Stack mit normaler Section-Höhe

### 11.7 Service-Section: Cards als 3D-Karten-Stapel (Apple-Wallet-Style)
- Beim Erst-Eintritt: 9 Cards als Stapel von oben sichtbar (nur Top-Edges)
- Auf Scroll: Stapel "fan out" in 3D-Raum zur Grid-Position
- Bei Hover auf Card: Card "lifts" 24 px aus Stack, andere dimmen
- Click: Card-Flip (9-CARD.11) reveals Sample-Snippet

### 11.8 Pricing-Section: 3D-Bundle-Boxes
- 3 Pricing-Tiers werden zu 3D-rendered Verpackungen ("Engagement-Boxen")
- Each Box rotiert leicht (auto + cursor-driven)
- Hover: Box öffnet sich (deckel lüpft), zeigt Inhalt
- Tier-Logos auf Box-Seiten als Texture-Maps
- Wenn man eine wählt: Box "fliegt" als FLIP-Animation zu Kontakt-Page

### 11.9 Sample-Section: Magazine-Carousel mit Page-Flip
- Sample-Cards als Magazine-Spreads
- Scroll horizontally durch sie wie durch ein Magazin
- Page-Flip-Animation mit echter Perspective-Distortion
- Cover-Reveal mit subtle Spine-Shadow

### 11.10 FAQ-Section: Sticky Question-Card mit Morph-Animation zwischen Items
- Aktive FAQ-Frage als sticky Card oben
- Scroll wechselt aktive Frage mit echter Morph-Animation (height + cross-fade)
- Anders als normales Accordion — *fließt*
- Wie Apple's Compare-Page

---

## Tier 3.5 — 3D-SCENE-MOMENTS (Bruno-Simon-Tier, neu hinzugefügt)

> Drei dedizierte 3D-Szenen als Brand-Statements. Nicht überall —
> aber an drei key-Stellen wird's WebGL-cinematic.

### 12A.1 Hero-3D-Scene (full Tier 0.1 + 9.1 + 9.8 zusammen)
- Plant-Mesh + Particles + Bloom + Stars in einem Three.js Scene
- 60 fps on M-series Macs, 30 fps Lock auf Mobile
- Lazy-loaded nur wenn Hero im Viewport
- Total payload: ≤ 180 KB gzipped (Three.js core only, kein Loader)

### 12A.2 Approach-3D-Library (full Tier 0.6 + 11.6)
- Library-Shelf-Scene als zweite große WebGL-Investment
- Separate Three.js-Scene (own canvas, own renderer)
- Activated auf Section-Visible, paused auf Off-Screen
- Books/Cards mit Normal-Maps für realistische Tiefe

### 12A.3 Kontakt-3D-Calendar-Orbit
- Kontakt-Page: 3D-Animation von Kalender-Tagen die um Brand-Logo orbiten
- Klick auf einen Tag = pre-selected Date für Form
- Subtle, aber zeigt "ich verstehe Time"
- Three.js mit GLTF-Loader für 3D-Calendar-Tag-Modelle (geriggt low-poly)

### 12A.4 About-3D-Avatar (optional, falls Foto verfügbar)
- About-Section: Foto wird zu 3D-Plane mit Depth-Map
- Cursor-Position verschiebt subtle die Perspektive
- "iPhone Portrait"-Style Tiefen-Effekt
- Lib: depth-map kann manuell oder via Browser-AI generated werden

### 12A.5 Loading-Screen-Wormhole (alternative zu jetzigem Logo-Reveal)
- First-Visit-Loading: 3D-Wormhole/Tunnel-Flight für 1.4 s
- Brand-Color-Tube mit Particles, Kamera fliegt durch
- Am Ende: Logo materialisiert
- Optional, A/B mit current Loading-Screen

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

### 14.7 Mouse-Trail-Painting auf Hero (Codrops-Klassiker)
- Cursor zieht permanent dünne Cyan-Linie hinter sich (auf Hero only)
- Linie fadet nach 1.2 s
- Bei Stillstand: kein Trail
- Bei Schnellem Bewegen: längerer Trail
- Pure Canvas2D, kein WebGL nötig
- Touch + reduced-motion: off

### 14.8 Liquid-Form-Input-Border (Refokus-Style)
- Kontakt-Form-Inputs: Border ist SVG-Pfad der bei Focus liquid-morpht
- Path-Animation springt zur Focus-Position, Spring-Easing
- Bei Type: Border pulsiert subtle mit Tastendruck
- Bei Validation-Fail: rotes wave-Pattern entlang Border
- Bei Success: Cyan-Glow + Häkchen-Path-Draw

### 14.9 Logo-Hover-Distortion (Magnetic + Inflate)
- Hover auf Nav-Logo: Logo "inflates" 1.08× mit subtle Wobble
- Plus Magnetic-Pull
- Plus subtle Background-Halo intensiviert
- Click: Logo "pulst" einmal + curtain-Transition zu Home

### 14.10 Number-Counter mit Odometer-Flip-Style (Stats)
- Stats animieren als odometer-flip (jede Ziffer einzeln rolls)
- Plus subtle Motion-Blur während Roll
- Plus Akzent-Color-Pulse am End-Frame
- Vs. simple Count-Up viel cinematischer

### 14.11 Mega-Menu für Mobile-Nav (Stagger-Reveal mit Magnetic-Closing)
- Mobile-Nav öffnet als Full-Screen-Overlay
- Links staggered reveal mit char-mask (SplitText)
- Hover/Touch auf Link = Magnetic-Pull + subtle scale
- Background: Tier 0.2 Liquid-Shader animiert
- Schließen: Reverse-Stagger + Curtain-Sweep

### 14.12 Tooltip-System mit Magnetic-Snap + Arrow-Morph
- Alle Tooltips snappen magnetisch zur Hover-Position
- Tooltip-Arrow morpht je nach Side (top/bottom/left/right) mit Path-Animation
- Reveal mit Scale + Blur-Out
- Used für Pricing-Footnotes, Service-Persona-Tags

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

### 17.7 Print-Stylesheet Premium-Edition (für PDF-Export der Samples)
- Wenn User Sample-Page druckt: Premium-PDF-Layout
- Brand-Header mit Logo, Seitenzahlen, Datum
- Color-Akzente bleiben (CMYK-safe)
- Schriftarten embedded
- Mat-Hintergrund + Edge-Markings

### 17.8 OG-Image dynamisch pro Page generiert
- Vercel/Cloudflare-Worker generiert OG-Image on-the-fly
- Pro Page: Title + Section + Branding-Layer
- Cached für Schnelligkeit
- LinkedIn/Twitter-Shares sehen prof aus
- Alternative: pre-generated per Page via build-script

### 17.9 SVG-Icon-Set selbst gezeichnet, animated on hover
- Statt Lucide / heroicons: Custom-Icon-Set passend zur Brand
- Jedes Icon hat hover-Animation (Linien-Draw, Morph, Bounce)
- 24 px Default, mit variants 16/32/48
- ≤ 800 byte je Icon, inline SVG

### 17.10 Custom-Scrollbar (Apple-Style mit Brand-Akzent)
- Statt OS-default: dünner Cyan-Scrollbar
- Auf Hover: 4 px → 8 px expand
- Auto-fade nach 1.2 s Stillstand
- Webkit + Firefox Support
- Mobile: nicht sichtbar (touch-scroll)

### 17.11 Easter-Egg #4: Hidden Konsole-Branding
- DevTools-Console: ASCII-Logo + "you found me. talk to me." + Email-Link
- Plus eine versteckte JS-API: `window.belkis` (z.B. `belkis.about()`, `belkis.contact()`)
- Bonus: console.log color-styled (white + cyan)

### 17.12 Particle-Logo-Reveal beim Über-Page-Eintritt
- Über-Page-Eintritt: Logo-Foto/Avatar baut sich aus 800 Partikeln auf
- Partikel fliegen von Edges zu Position
- 1.4 s Total, dann settle
- Subtle, aber memorable

### 17.13 Konami-Code → "Werkstatt-Modus"
- Konami-Code aktiviert "Werkstatt-Modus": dünner Cyan-Outline um alle Elements
- DevTools-tier Inspector sichtbar
- Shows all `data-*` Attributes overlay
- Stays bis Esc oder Re-Konami

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

### Dependencies-Strategie (erweitert für Cinematic-Tier)
| Lib | Größe (gz) | Wofür | Lazy? |
|---|---|---|---|
| `lenis` | 6 KB | Smooth scroll | nein, kritisch |
| `gsap` | 25 KB | Animationen | nein, kritisch |
| `gsap/ScrollTrigger` | 8 KB | Scroll-driven | nein |
| `gsap/Flip` | 4 KB | FLIP-Animationen (Card→Modal) | JA, on-demand |
| `gsap/Observer` | 2 KB | Scroll-direction-detection | nein |
| `split-type` | 3 KB | SplitText reveals | nein |
| `ogl` | 8 KB | Lightweight WebGL für 2D-Shader (Tier 0.2, 10A) | nein (kritisch für Hero-bg) |
| `three` | 180 KB | 3D-Scenes (Tier 0.1, 11.6, 12A) | **JA**, dynamic import per Scene |
| `postprocessing` | 80 KB | Bloom/Aberration/Grain (Tier 0.7) | JA, nur Desktop |
| `cannon-es` | 40 KB | 404-Physics (Tier 0.13) | JA, nur 404-Page |
| `lottie-web` | 80 KB | Optional Lottie | JA, only if used |

**Strategie:**
- **Kritisch-Pfad:** lenis + gsap-core + split-type + ogl = ~50 KB (akzeptabel)
- **3D-Scenes** lazy via `IntersectionObserver` + `import()` — Hero wartet bis im Viewport
- **Mobile:** kein postprocessing, reduzierte particle-counts, kein 404-Physics (fallback auf static)
- **Reduced-Motion:** ALLE WebGL-Layer deaktiviert, statische Gradient-Fallbacks
- **Low-DPR (< 1.5):** vereinfachte Shader, kein Bloom

### Mobile-Performance-Plan
| Feature | Desktop | Mobile |
|---|---|---|
| Hero-Particles | 6 000 + Lines + Bloom | 800, kein Lines, kein Bloom |
| Liquid-Background | full Shader | static animated SVG |
| Cursor-Trail | WebGL particles | off |
| Tilt-Cards | full 3D | scale-only hover |
| Approach-3D-Library | full WebGL-shelf | vertical stack |
| Post-Processing | Bloom+Aberration+Grain+Vignette | nur Vignette CSS |
| 404-Physics | full | static image |

---

## Execution Plan (überarbeitet — 12 Turns für Cinematic-Niveau)

| Turn | Phase | Was wird gebaut | Sichtbare Wirkung |
|---|---|---|---|
| **8** ✅ | Foundation | Lenis · Custom Cursor · Magnetic · SplitText · Loading Screen | Done |
| **9** ✅ | Cards Pass 1 | 9-CARD.1–10 (Tilt + Magnetic + Spotlight + Stagger) | Done |
| **9.5** ✅ | Multi-Page | Split in 6 Pages mit PageHeader | Done |
| **10** ← NEXT | **Cards Pass 2 + Click-FX** | 9-CARD.4 Ripple, 9-CARD.7 Sample-Modal-Expand, 9-CARD.11 Card-Flip, 9-CARD.15 Border-Sweep, 9-CARD.16 Particle-Burst, Tier-2.5-10B.10 Konfetti-CTA | Cards fühlen sich physisch an, Click = Joy |
| **11** | **Liquid-WebGL-Layer-1** | Tier 0.2 Domain-Warp-Bg-Shader auf Hero, 10A.1 globaler Grain-Underlay, 10A.3 Glass-Border-Shimmer | Hero wird plasmatisch, Site bekommt Wärme |
| **12** | **Hero-3D-Planet** | Tier 0.1 Planet-Mesh + 9.5 Light-Sweep + 9.8 Background-Stars | Hero wird *Welt*, nicht Webseite |
| **13** | **Particle-System** | Tier 0.5 Cursor-Liquid-Trail + 9.1 6000-Particle-Hero + 0.7 Post-Processing (Bloom only) | Cursor wird Werkzeug, Hero wird heiß |
| **14** | **Page-Choreography** | Tier 0.4 Curtain-Transitions + 10B.1 Logo-Hand-off + 10B.5 Section-Progress-Bar + 0.8 Iris-Wipe | Page-Wechsel werden cinematic |
| **15** | **Section-Shaders** | 10A.2 jede Section eigener Background-Shader + 11.6 Approach-3D-Library + 11.7 Service-Card-Stack | Jede Section bekommt eigenen Charakter |
| **16** | **Choreography-Polish** | 9.2 Headline-3-Layer-Mask + 10B.4 Sticky-Morph-Headline + 0.9 Word-Morph + 14.10 Odometer-Counter + 11.5 Velocity-Skew-Marquee | Type lebt überall |
| **17** | **Image-Distortion + 3D-Moments** | Tier 0.3 Image-Hover-Displacement + 12A.3 Kontakt-Calendar-Orbit + 11.8 Pricing-3D-Boxes + 9-CARD.14 Sample-WebGL-Hover | 3 dedizierte 3D-Statements |
| **18** | **Forms + Components-Polish** | 14.8 Liquid-Form-Borders + 14.11 Mega-Mobile-Nav + 14.12 Tooltip-System + 14.3 Morph-FAQ + 14.6 Sample-Detail-View | Kontakt + Mobile auf SOTD-Niveau |
| **19** | **404 + Easter Eggs** | Tier 0.13 404-Physics-Playground + 17.11 Console-Branding + 17.13 Konami-Werkstatt-Modus + 17.6 Konfetti-Polish | Hidden Premium-Moments |
| **20** | **Performance + A11y-Pass** | LCP-Optimierung, JS-Bundle-Split, Mobile-Test, Lighthouse-Pass, reduced-motion-Audit, Touch-Test, Keyboard-Nav-Audit | Performance-Budget eingehalten trotz Cinematic |
| **21** | **Logo-Animation-Polish** (deferred) | Final Logo-Animation-Pass (User-Wunsch: "erst wenn polished") | Brand-Reveal sitzt |
| **22** | **Audit + Deploy + Launch-Check** | Cross-Browser-Test, OG-Image-Check, Sitemap, Robots, Real-Lighthouse-Run | Ready für Awwwards-Submission |

**Total:** 12 Turns ab jetzt. Jeder Turn = 1 sichtbarer Cinematic-Upgrade-Block.

---

## Was "Awwwards-SOTD-Tier" konkret bedeutet (Operational)

| Bereich | 0815 (aktuell) | Apple-Tier (Apr 2025) | **SOTD-Tier (Ziel hier)** |
|---|---|---|---|
| Scroll | Native | Lenis smooth | Lenis + Scroll-Direction-Aware + Velocity-Skew |
| Cursor | Native arrow | Custom 5-State + Lag | Custom 5-State + WebGL-Liquid-Trail + Magnetic-Snap-Grid |
| Buttons | Hover scale | Magnetic + Ripple | Magnetic + Ripple + Konfetti-Burst auf Convert |
| Headlines | Fade in | Char-Mask-Reveal | 3-Layer-Mask + Variable-Font-Weight-Tween + Sticky-Word-Morph |
| Hero | Static gradient | WebGL Particles | 3D-Planet-Mesh + 6000 Particles + Bloom + Stars + Light-Sweep |
| Backgrounds | Fixed | Cursor-following Orbs | Domain-Warp-Shader pro Section + Film-Grain + Color-Theme-Shift |
| Cards | Hover translate-y | 3D Tilt + Spotlight | Tilt + Spotlight + Card-Flip + Border-Sweep + WebGL-Image-Distortion |
| Sections | Fade-up | Scroll-driven choreography | Eigener Shader-Background + Iris-Wipe-Reveal + 3D-Scene-Moments |
| Approach | Static category-tabs | Card-Stack | **Echtes 3D-Library-Shelf mit Kamera-Fahrt** |
| Pricing | Static cards | Hover-Spotlight | **3D-Engagement-Boxen die sich öffnen** |
| Samples | Card-Grid | Modal-Expand | Magazine-Carousel + Page-Flip + WebGL-Hover-Distortion |
| Loading | Instant | Brand Reveal | Logo-Stroke + 3D-Mesh-Born + Wormhole-Alternative |
| Page-Wechsel | Instant | View-Transitions-API | **Curtain + Logo-Hand-off + Iris-Mask + Konfetti-CTA** |
| Numbers | Static | Count-up | Odometer-Flip + Motion-Blur + Akzent-Pulse pro Tens |
| FAQ | `<details>` | Spring-morphed | Sticky-Question-Card + Morph-zwischen-Items |
| Forms | Standard inputs | Floating labels | Liquid-Border-Path + Type-Pulse + Validation-Wave |
| Soundscape | Silent | Optional UI-Sounds | UI-Sounds + Audio-Reactive-Hero-Pulse (opt-in) |
| Easter Eggs | Keine | Mindestens 3 | 4+ Hidden Moments inkl. 404-WebGL-Playground + Console-Branding + Werkstatt-Modus |
| 404 | Standard | Custom illustration | **Bruno-Simon-tier WebGL-Physics-Playground** |
| Nav | Static | Glass + Scroll-Progress | + Live-Data-Ticker + Magnetic-Logo-Distortion + Section-Breadcrumb |
| Mobile | Same as desktop | Touch-optimized | Touch-optimized + Mega-Menu mit Char-Stagger + Sticky-FAB-Magnet |

---

## Inspirationen & References (für visuelle Kalibrierung)

| Site | Was übernehmen |
|---|---|
| **brunosimon.me** | 3D-Hero, 404-Playground, Cursor-Physics |
| **active-theory.com** | Page-Transitions, Sound-Design, Section-Moments |
| **resn.co.nz** | Type-Choreography, hidden Interactions |
| **codrops.com** | Image-Distortion-Patterns, Reveal-Effects |
| **refokus.com** | Marquee-Skew, Velocity-Animations |
| **locomotive.ca** | Smooth-Scroll-Pattern, Section-Pin |
| **apple.com/airpods** | Scroll-Choreography, Image-Sequence |
| **monogram.io** | Glass-Material-Stack, Typography |
| **awwwards.com SOTDs** | Letzte 6 Monate scannen für aktuellen Stand der Kunst |

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

---

## Visuell-Bibliothek — Welche Effekte WO eingesetzt werden (Quick-Reference)

| Page | Hero-Effekt | Section-Effekte | Mikro-Interaktionen |
|---|---|---|---|
| **/** (Home) | 3D-Planet + Particles + Background-Stars | Liquid-Bg-Shader, Iris-Wipe-Reveals, Teaser-Cards mit Card-Flip | Cursor-Trail, Magnetic-CTAs, Section-Snap-Indikator |
| **/leistungen** | PageHeader + dezente Particles | Service-Card-Stack (Apple-Wallet), Pricing-3D-Boxen, Border-Sweep | Card-Flip mit Sample-Snippet, Sister-Dim, Konfetti-CTA |
| **/methodik** | PageHeader + Library-Shelf-Teaser | **3D-Library-Shelf horizontal scroll-driven**, Process-Stage-Cards mit Liquid-Bg | Magnetic-Stage-Pull, Sticky-Word-Morph |
| **/samples** | PageHeader + Magazine-Carousel-Vorschau | **Magazine-Page-Flip-Carousel**, WebGL-Image-Distortion auf Hover, Sample-Modal-Expand | Cursor-Trail intensiver, Card-Border-Sweep |
| **/ueber** | PageHeader + (optional) 3D-Avatar | About-Section mit Aurora-Shader-bg, FAQ Sticky-Question-Morph | Number-Odometer, Magnetic-Stats |
| **/kontakt** | PageHeader + 3D-Calendar-Orbit | Form mit Liquid-Border-Inputs, Konfetti-Burst auf Submit | Magnetic-Submit-Button, Live-Validation-Wave |
| **/404** | Bruno-Simon-Physics-Playground | Floating "404"-Buchstaben mit Cannon-Physics | Cursor schubst Buchstaben weg, Click = Explosion |

---

## Risk-Liste & Decision-Points

**Risiken die ich vorab flagge — User-Entscheidung nötig:**

1. **WebGL-Fallback-Aufwand:** Tier 0 + Tier 2.25 sind ~40 % zusätzliche Codebase wegen Mobile + reduced-motion Fallbacks. Wenn Awwwards-SOTD Ziel ist, lohnt das. Wenn Mobile-First Default, vielleicht Tier 0 reduzieren auf nur 0.1+0.2+0.3.

2. **Three.js Bundle-Size:** 180 KB gzipped ist viel. Wir können auf `ogl` (8 KB) komplett switchen wenn wir keine GLTF-Loader oder Animation-System brauchen — aber 11.6 Library-Shelf braucht eher Three.js.

3. **Audio (Tier 0.12, 17.5):** Erfordert royalty-free MP3 Asset (~120 KB). User muss Asset bereitstellen oder mich beauftragen, ein Generated-Asset zu sourcen. Default off — kein Auto-Play.

4. **404-Physics (Tier 0.13):** Cannon-es ist 40 KB nur für 404. Alternative: WebGL ohne Physics, statt physik-basiertem Schubsen einfach Particle-Repulsion-Field. Spart 30 KB.

5. **Page-Curtain-Transitions (Tier 0.4):** Konflikt mit Astro-View-Transitions (current). Müssen wir entweder ersetzen oder darüber-legen. Reine View-Transitions-API ist 0 KB. Custom-Curtain ist ~3 KB + besseres Feel.

6. **Multi-Scene-WebGL:** 3 separate Three.js-Renderer (Hero, Approach, Kontakt) vs. 1 globaler Renderer mit Scene-Swap. Letzteres = besseres Memory, ersteres = einfacher zu bauen.

**Default ohne User-Entscheidung:** alle Tiers wie geplant, alle Fallbacks gebaut, Asset für Audio deferred bis User es will.

---

## Total Roadmap-Item-Count

| Tier | Items |
|---|---|
| 0 — Cinematic Layer | 13 |
| 1 — Foundation | 6 (alle done) |
| 1.5 — Cards & 3D | 16 |
| 2 — Hero Upgrade | 8 |
| 2.25 — Liquid WebGL Layer | 8 |
| 2.5 — Page Choreography | 10 |
| 3 — Section Choreography | 10 |
| 3.5 — 3D-Scene-Moments | 5 |
| 4 — Interactive Components | 12 |
| 5 — Polish & Differentiators | 13 |
| 6 — Performance & A11y | laufend |
| **Total visuelle Items** | **101** |

Davon erledigt: 14 (Tier 1 + 9-CARD.1–3 + 9-CARD.5–6 + Multi-Page).
Verbleibend: **87 visuelle Premium-Items** über 12 geplante Turns.
