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

The landing page was built in 7 phases. Each phase is a clean commit:

- [x] **Phase 1** — Foundation (Astro setup, design tokens, layout, deploy)
- [x] **Phase 2** — Hero, Navigation, Trust-Strip
- [x] **Phase 3** — Problem + Approach (scroll-driven library visualization)
- [x] **Phase 4** — Services Grid (9) + Sample Showcase (10 + filter)
- [x] **Phase 5** — Process Timeline + Pricing Tiers (anchor design)
- [x] **Phase 6** — About + FAQ + Final CTA + Footer + Impressum + Datenschutz
- [x] **Phase 7** — JSON-LD ProfessionalService schema + OG image + 404 + manifest + print stylesheet

## Production launch checklist

Before pointing real customers at the site:

- [ ] **Repo Settings → Pages → Source: GitHub Actions** (one-time setup)
- [ ] Run `cd site && npm install` locally once to generate
  `package-lock.json` and commit it (speeds CI from ~30s to ~10s
  per build via `npm ci` + cache)
- [ ] Verify deployed URL works at
  `https://beko2210.github.io/PROMPT_only/`
- [ ] Test OG preview rendering via
  [opengraph.dev](https://www.opengraph.dev/) or post to Slack/LinkedIn
- [ ] Optional: convert `public/og-default.svg` → `og-default.png`
  via [cloudconvert.com](https://cloudconvert.com/svg-to-png) or
  `npx svg-to-img` if you want maximum cross-platform OG-rendering
  compatibility (Twitter, older clients sometimes prefer raster)
- [ ] Test Lighthouse scores at deployed URL via
  [pagespeed.web.dev](https://pagespeed.web.dev/) — target ≥95 on all
- [ ] Test mobile rendering on real device (your phone)
- [ ] Test `prefers-reduced-motion` by enabling in OS settings
- [ ] Test keyboard navigation (Tab through every interactive element)
- [ ] Test screen-reader pass on `index` + one legal page
- [ ] Validate JSON-LD structured data at
  [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console:
  `https://beko2210.github.io/PROMPT_only/sitemap-index.xml`
- [ ] (Optional) Submit to Bing Webmaster Tools too

## Phase 7 — what shipped

- **JSON-LD @graph** with ProfessionalService + Person + WebSite
  schemas (Google rich-results target; Schema.org compliant)
- **OG image** (`public/og-default.svg`) — 1200×630 brand artwork
  with BA monogram, gradient wordmark, headline, framework strip
- **PWA manifest** (`public/manifest.webmanifest`) — installable as
  standalone app, theme-coloured
- **404 page** (`pages/404.astro`) — branded, helpful, links to
  primary destinations + offers redirect setup via email
- **Print stylesheet** for legal pages — clean black-on-white
  layout when users print or save Impressum / Datenschutz as PDF
  with link URLs surfaced inline
- **Enhanced OG metadata** — site_name, image:alt, twitter:image:alt
  for richer link previews

## Custom domain (optional, post-launch)

1. Add a `site/public/CNAME` file containing your domain (e.g.
   `consulting.aslani.audit` or `belkis-aslani.de`)
2. In GitHub repo Settings → Pages, set the custom domain
3. Update `astro.config.mjs`:
   ```js
   site: 'https://your.domain.com',
   base: '/',
   ```
4. Configure your DNS provider (A records → 185.199.108–111.153,
   or CNAME → `beko2210.github.io`)
5. Update `manifest.webmanifest` `start_url` and `scope` to `/`
6. Update `robots.txt` sitemap URL

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
