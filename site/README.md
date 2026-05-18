# site/ — Landing page for the PROMPT_only library

Astro 5 + Tailwind 3 + GSAP + Motion landing page that doubles as the
consultant's portfolio. Deployed via GitHub Actions to GitHub Pages.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Astro 5** | Ships 0 JS by default; Lighthouse 95-100 baseline; native View Transitions |
| Styling | **Tailwind 3** | Speed + small bundle; design tokens centralised |
| Animation | **GSAP 3 + ScrollTrigger** | Awwwards-standard scroll-driven motion |
| Micro-interactions | **Motion 11** | Declarative gesture/spring animations |
| Fonts | **Inter Variable + Inter Tight + JetBrains Mono** | Privacy-friendly Bunny Fonts CDN, no Google tracking |
| Deploy | **GitHub Actions → GitHub Pages** | Free, version-controlled, automatic on push |

## Local dev

```bash
cd site
npm install          # generates package-lock.json on first run — commit it!
npm run dev          # local dev server at http://localhost:4321
npm run build        # production build → dist/
npm run preview      # preview production build locally
npm run check        # Astro type-check
```

Requirements: Node 22+.

**First-run note:** the CI workflow auto-detects whether
`package-lock.json` exists. Until you run `npm install` locally and
commit the resulting lockfile, the workflow runs `npm install` (no
cache, ~30 s slower per build). After the first lockfile commit, it
uses `npm ci` with cache (~10 s rebuilds).

## Structure

```
site/
├── src/
│   ├── layouts/        Base layout (HTML head, ClientRouter, observers)
│   ├── pages/          Routes (index.astro is /)
│   ├── sections/       Full-width page sections (Hero, Services, etc.)
│   ├── components/     Reusable UI primitives (Button, Card, Nav)
│   ├── lib/            Pure JS / TS utilities
│   └── styles/         global.css with design tokens + utilities
├── public/             Static assets shipped as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── .nojekyll       (required for GH Pages with _underscore dirs)
├── astro.config.mjs    site + base URL config (set per your domain)
├── tailwind.config.mjs Design tokens (colours, type scale, animations)
└── package.json
```

## Deployment

GitHub Actions workflow at [`/.github/workflows/deploy-site.yml`](../.github/workflows/deploy-site.yml).

On push to `main` (or the active branch), it:
1. Installs deps with caching
2. Type-checks (warns, doesn't block)
3. Builds Astro → `site/dist`
4. Uploads as Pages artifact
5. Deploys to GitHub Pages
6. (Optional) Lighthouse CI run

### Configure GitHub Pages once

GitHub repo → Settings → Pages → Build and deployment → Source: **GitHub Actions**.

### Custom domain (optional)

1. Add a `site/public/CNAME` file containing your domain (e.g. `consulting.beko.dev`)
2. In Settings → Pages, set the custom domain
3. Update `astro.config.mjs`:
   ```js
   site: 'https://your.domain.com',
   base: '/',
   ```

## Build phases (incremental shipping)

The landing page is built in 7 phases. Each phase is a clean commit:

- [x] **Phase 1** — Foundation (Astro setup, design tokens, layout, deploy)
- [ ] **Phase 2** — Hero, Navigation, Trust-Strip
- [ ] **Phase 3** — Problem + Approach (with animated library visualization)
- [ ] **Phase 4** — Services Grid + Sample Showcase
- [ ] **Phase 5** — Process Timeline + Pricing Tiers
- [ ] **Phase 6** — About + FAQ + Final CTA + Footer
- [ ] **Phase 7** — Animation polish + Performance + A11y + SEO

## Design system

Defined in [`tailwind.config.mjs`](./tailwind.config.mjs) + [`src/styles/global.css`](./src/styles/global.css):

- **Palette:** Ink (near-black scale) + Accent (saturated cyan) + Amber (sparingly)
- **Type scale:** Fluid `clamp()` for display sizes
- **Fonts:** Inter Variable (body) + Inter Tight (display) + JetBrains Mono (code)
- **Animations:** `prefers-reduced-motion` respected throughout
- **Accessibility:** Focus rings, skip-to-content, semantic HTML, ARIA where needed

## Performance targets

| Metric | Target | Current |
|---|---|---|
| Lighthouse Performance | ≥ 95 | TBD (Phase 7) |
| Lighthouse Accessibility | ≥ 95 | TBD |
| Lighthouse SEO | 100 | TBD |
| LCP | ≤ 1.5 s | TBD |
| INP | ≤ 100 ms | TBD |
| CLS | ≤ 0.05 | TBD |
| Total page size (gzipped) | ≤ 150 KB | TBD |

## Alternative workflow

For a Claude-Code-native build using 21st.dev MCP + Framer Motion, see
[`BUILD-WORKFLOWS.md`](../BUILD-WORKFLOWS.md) at repo root.
