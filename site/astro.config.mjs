import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

// https://astro.build/config
//
// IMPORTANT: GitHub Pages URLs are case-sensitive — the repo name is
// PROMPT_only (capital P, capital O), so base must match exactly.
//
// If you later move to a custom domain or user/org page, set:
//   site: 'https://yourdomain.com',
//   base: '/',

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

export default defineConfig({
  site: 'https://beko2210.github.io',
  base: '/PROMPT_only/',
  trailingSlash: 'ignore',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    // applyBaseStyles: false — global.css owns the @tailwind injection
    // point (so our @layer base/components/utilities extensions resolve
    // correctly). The previous import failure was caused by the path
    // alias (@styles/) which Vite didn't resolve — now fixed by using
    // a relative path in Base.astro AND mirroring tsconfig paths in
    // the Vite resolve.alias config below.
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
    // Mirror tsconfig paths so CSS / non-.astro imports also resolve.
    resolve: {
      alias: {
        '@':           resolve(r('./src')),
        '@components': resolve(r('./src/components')),
        '@sections':   resolve(r('./src/sections')),
        '@layouts':    resolve(r('./src/layouts')),
        '@styles':     resolve(r('./src/styles')),
        '@lib':        resolve(r('./src/lib')),
      },
    },
    ssr: {
      noExternal: ['gsap', 'motion'],
    },
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_assets',
  },
  compressHTML: true,
  experimental: {
    clientPrerender: true,
  },
});
