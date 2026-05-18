/**
 * premium.ts — central client-side initialization for premium primitives.
 *
 * Five concerns:
 *   1. Robust reveal-on-scroll (with hard fallback that ALWAYS shows content
 *      after 3 s — never trap users behind a stuck observer)
 *   2. Lenis smooth scroll (only if motion allowed + non-touch)
 *   3. Custom cursor with state machine (default / pointer / text / disabled)
 *   4. Magnetic buttons that subtly attract the cursor
 *   5. SplitType character-level headline reveals
 *
 * Strict honesty rules:
 *   - prefers-reduced-motion disables ALL of the above
 *   - Touch devices skip cursor + magnetic (they have no hover capability)
 *   - Three.js / heavy WebGL ONLY loads on hero viewport, desktop only
 *   - Every primitive is independently fault-tolerant: if Lenis fails,
 *     cursor still works; if cursor fails, magnetic still works; etc.
 */

import { gsap } from 'gsap';

// Detection helpers --------------------------------------------------------

const reduceMotion = (): boolean => {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const isTouch = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
};

// 1. ROBUST REVEALS --------------------------------------------------------
// Replaces the broken IntersectionObserver setup. Three layers of safety:
//  a) Observer triggers reveals as elements enter viewport
//  b) Initial-state pass shows already-in-viewport reveals immediately
//  c) Hard fallback at 3 s reveals everything still hidden, regardless

export function initReveals(): void {
  if (typeof window === 'undefined') return;

  const reveal = (el: Element) => el.classList.add('is-visible');

  if (reduceMotion()) {
    document.querySelectorAll('.reveal').forEach(reveal);
    return;
  }

  // Pass A: anything already in viewport at script-init reveals immediately
  const inViewport = (el: Element): boolean => {
    const r = el.getBoundingClientRect();
    const h = window.innerHeight || document.documentElement.clientHeight;
    return r.top < h && r.bottom > 0;
  };

  const all = () => Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));

  all().filter(inViewport).forEach(reveal);

  // Pass B: IntersectionObserver for everything else
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
  );
  all().forEach((el) => io.observe(el));

  // Pass C: HARD FALLBACK — reveal everything after 3 s no matter what.
  // This is the difference between 'site appears blank' (a fatal flaw)
  // and 'site appears static' (acceptable degradation).
  setTimeout(() => {
    const stragglers = all();
    if (stragglers.length) {
      console.info(`[reveals] fallback fired — ${stragglers.length} elements unobserved, force-revealing`);
      stragglers.forEach(reveal);
    }
  }, 3000);
}

// 2. LENIS SMOOTH SCROLL ---------------------------------------------------
// Buttery-smooth scroll that drives all GSAP ScrollTrigger animations.

let lenisInstance: any = null;

export async function initLenis(): Promise<void> {
  if (typeof window === 'undefined') return;
  if (reduceMotion()) return;
  // Skip Lenis on touch devices — native momentum-scroll is better,
  // Lenis lerping intercepts touch and feels like the page 'hangs'
  // when scrolling on a phone/tablet.
  if (isTouch()) return;

  try {
    const { default: Lenis } = await import('lenis');
    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync with GSAP ScrollTrigger if present
    try {
      const ScrollTriggerMod = await import('gsap/ScrollTrigger');
      const ScrollTrigger = ScrollTriggerMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time: number) => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } catch {}

    // Stop Lenis when CSS smooth-scroll anchors are used
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (!id || id === '#') return;
        const el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenisInstance.scrollTo(el as HTMLElement, { offset: -80, duration: 1.5 });
      });
    });
  } catch (e) {
    console.warn('[lenis] failed to init, falling back to native scroll', e);
  }
}

// 3. CUSTOM CURSOR --------------------------------------------------------
// State machine: default · pointer · text · expanded · hidden
// Only renders on devices with hover capability.

type CursorState = 'default' | 'pointer' | 'text' | 'expanded' | 'hidden';

export function initCursor(): void {
  if (typeof window === 'undefined') return;
  if (reduceMotion() || isTouch()) return;

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  const dot = cursor.querySelector('.cursor-dot') as HTMLElement;
  const ring = cursor.querySelector('.cursor-ring') as HTMLElement;
  if (!dot || !ring) return;

  // Show the cursor element (was display:none server-side)
  cursor.style.display = 'block';
  // Hide native cursor
  document.documentElement.classList.add('cursor-custom');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let dotX = mouseX, dotY = mouseY;
  let ringX = mouseX, ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  // Animate position with quickTo for low-latency dot, lag for ring
  const dotXTo = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3' });
  const dotYTo = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3' });
  const ringXTo = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3' });
  const ringYTo = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3' });

  function tick() {
    dotXTo(mouseX);
    dotYTo(mouseY);
    ringXTo(mouseX);
    ringYTo(mouseY);
    requestAnimationFrame(tick);
  }
  tick();

  const setState = (state: CursorState) => {
    cursor.dataset.state = state;
  };

  // State observation: links/buttons → pointer; text inputs → text;
  // [data-cursor="expanded"] → expanded (for big interactive areas);
  // [data-cursor="hide"] → hidden
  const isInteractive = (el: Element | null): boolean => {
    if (!el || el === document.body) return false;
    if (el.matches('a, button, [role="button"], input[type="submit"], summary, label[for]')) return true;
    return isInteractive((el as HTMLElement).parentElement);
  };

  window.addEventListener('mouseover', (e) => {
    const t = e.target as Element | null;
    if (!t) return;
    const cursorAttr = t.closest('[data-cursor]')?.getAttribute('data-cursor');
    if (cursorAttr === 'hide') return setState('hidden');
    if (cursorAttr === 'expanded') return setState('expanded');
    if (cursorAttr === 'text') return setState('text');
    if (t instanceof HTMLInputElement && (t.type === 'text' || t.type === 'email')) return setState('text');
    if (t instanceof HTMLTextAreaElement) return setState('text');
    if (isInteractive(t)) return setState('pointer');
    setState('default');
  }, { passive: true });

  // Window leave: hide cursor (no flicker at edge)
  document.addEventListener('mouseleave', () => setState('hidden'), { passive: true });
  document.addEventListener('mouseenter', () => setState('default'), { passive: true });
}

// 4. MAGNETIC BUTTONS ------------------------------------------------------
// Buttons / nav-items / cards with [data-magnetic] attract the cursor.
// strength via data-magnetic-strength (default 0.3). radius via
// data-magnetic-radius (default 120 px).

export function initMagnetic(): void {
  if (typeof window === 'undefined') return;
  if (reduceMotion() || isTouch()) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = parseFloat(el.dataset.magneticStrength || '0.3');
    const radius = parseFloat(el.dataset.magneticRadius || '120');

    const xTo = gsap.quickTo(el, 'x', { duration: 0.45, ease: 'expo.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.45, ease: 'expo.out' });

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) {
        xTo(0); yTo(0);
        return;
      }
      const fall = 1 - dist / radius;
      xTo(dx * strength * fall);
      yTo(dy * strength * fall);
    };
    const onLeave = () => { xTo(0); yTo(0); };

    // Listen at document level for proximity, leave on element
    document.addEventListener('pointermove', onMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
  });
}

// 5. SPLIT-TEXT REVEALS ----------------------------------------------------

export async function initSplitTextReveals(): Promise<void> {
  if (typeof window === 'undefined') return;
  if (reduceMotion()) return;

  const targets = document.querySelectorAll<HTMLElement>('[data-split-reveal]');
  if (!targets.length) return;

  try {
    const { default: SplitType } = await import('split-type');

    targets.forEach((el) => {
      // Split into chars; preserve word wrapping
      const split = new SplitType(el, { types: 'chars,words', tagName: 'span' });
      const chars = split.chars || [];

      // Set initial state
      gsap.set(chars, { yPercent: 100, opacity: 0, filter: 'blur(8px)' });

      // Reveal when the element scrolls into view
      gsap.to(chars, {
        yPercent: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: 'expo.out',
        stagger: 0.018,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });
  } catch (e) {
    console.warn('[split-text] init failed, leaving headlines as-is', e);
  }
}

// 6. 3D TILT --------------------------------------------------------------
// Cards with [data-tilt] respond to cursor with perspective rotation.
// Inner [data-tilt-inner] (optional) does the rotation; otherwise the
// element itself is rotated. Spotlight gradient inside the card follows
// cursor via --tilt-x / --tilt-y CSS vars.

export function initTilt(): void {
  if (typeof window === 'undefined') return;
  if (reduceMotion() || isTouch()) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    if ((card as any)._tiltWired) return;
    (card as any)._tiltWired = true;

    const inner =
      (card.querySelector('[data-tilt-inner]') as HTMLElement | null) || card;
    const maxTilt = parseFloat(card.dataset.tiltMax || '12');
    const perspective = parseFloat(card.dataset.tiltPerspective || '1200');
    const scale = parseFloat(card.dataset.tiltScale || '1.02');

    // Ensure transform-style is preserved
    card.style.transformStyle = 'preserve-3d';
    inner.style.transformStyle = 'preserve-3d';
    inner.style.willChange = 'transform';

    // Use gsap.quickTo for sub-frame precision
    const rotXTo = gsap.quickTo(inner, 'rotationX', {
      duration: 0.45,
      ease: 'power2.out',
    });
    const rotYTo = gsap.quickTo(inner, 'rotationY', {
      duration: 0.45,
      ease: 'power2.out',
    });
    const scaleTo = gsap.quickTo(inner, 'scale', {
      duration: 0.45,
      ease: 'power2.out',
    });

    // One-time perspective set on parent for proper 3D space
    gsap.set(card, { transformPerspective: perspective });

    const onMove = (e: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * 2 * maxTilt;
      const rotX = -(y - 0.5) * 2 * maxTilt;
      rotXTo(rotX);
      rotYTo(rotY);
      scaleTo(scale);

      // Update spotlight position (consumed by .tilt-spotlight::before)
      card.style.setProperty('--tilt-x', `${x * 100}%`);
      card.style.setProperty('--tilt-y', `${y * 100}%`);
    };
    const onLeave = () => {
      rotXTo(0);
      rotYTo(0);
      scaleTo(1);
    };
    card.addEventListener('pointermove', onMove, { passive: true });
    card.addEventListener('pointerleave', onLeave, { passive: true });
  });
}

// 7. CURSOR-FOLLOWING ORBS --------------------------------------------------
// Three gradient orbs in the background that follow the cursor with
// staggered lag. Apple-tier ambient effect.

export function initOrbs(): void {
  if (typeof window === 'undefined') return;
  if (reduceMotion() || isTouch()) return;

  const orbs = document.querySelectorAll<HTMLElement>('.cursor-orb');
  if (!orbs.length) return;

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  }, { passive: true });

  // Different lag per orb for a layered parallax feel
  const lags = [0.8, 1.4, 2.2]; // seconds
  const offsets = [
    { x: 0, y: 0 },
    { x: 80, y: -60 },
    { x: -100, y: 80 },
  ];
  orbs.forEach((orb, i) => {
    orb.style.willChange = 'transform';
    const xTo = gsap.quickTo(orb, 'x', { duration: lags[i] || 1.5, ease: 'power3' });
    const yTo = gsap.quickTo(orb, 'y', { duration: lags[i] || 1.5, ease: 'power3' });
    const o = offsets[i] || { x: 0, y: 0 };
    function tick() {
      xTo(mx + o.x - window.innerWidth / 2);
      yTo(my + o.y - window.innerHeight / 2);
      requestAnimationFrame(tick);
    }
    tick();
  });
}

// 8. RIPPLE + BORDER-SWEEP -------------------------------------------------
// Click-Ripple: appends a temporary .ripple-dot at the click position.
// Auto-applies to anything with [data-ripple] OR .ripple-host.
// Also auto-promotes [data-tilt] cards to .border-sweep on hover (because
// every tilt card looks better with a glanz-sweep on hover).

export function initRipple(): void {
  if (typeof window === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const handler = (e: PointerEvent) => {
    const t = (e.target as HTMLElement | null)?.closest<HTMLElement>(
      '[data-ripple], .ripple-host'
    );
    if (!t) return;
    const r = t.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    // Diameter scales with card diagonal so the ripple fully covers
    const diag = Math.hypot(r.width, r.height);
    const dot = document.createElement('span');
    dot.className = 'ripple-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.width = `${diag}px`;
    dot.style.height = `${diag}px`;
    t.appendChild(dot);
    dot.addEventListener('animationend', () => dot.remove(), { once: true });
    // Safety remove after 1.2s in case animationend doesn't fire
    setTimeout(() => dot.remove(), 1200);
  };

  document.addEventListener('pointerdown', handler, { passive: true });
}

/**
 * Auto-promote: every [data-tilt] becomes ripple-host + border-sweep
 * (visual polish applied universally — nothing to manually add per card).
 */
export function initCardPolish(): void {
  if (typeof window === 'undefined') return;
  const wire = () => {
    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
      card.classList.add('border-sweep', 'ripple-host');
    });
  };
  wire();
  document.addEventListener('astro:after-swap', wire);
}

// 9. INIT ALL --------------------------------------------------------------
// Single entry point. Order matters slightly (reveals first so user sees
// content immediately, then progressive enhancement layers on top).

export async function initPremium(): Promise<void> {
  // Always-on
  initReveals();
  initCardPolish();
  initRipple();

  // Best-effort enhancements (each fails gracefully)
  await Promise.allSettled([
    initLenis(),
    initCursor(),
    initMagnetic(),
    initSplitTextReveals(),
    Promise.resolve(initTilt()),
    Promise.resolve(initOrbs()),
  ].map((p) => Promise.resolve(p)));
}
