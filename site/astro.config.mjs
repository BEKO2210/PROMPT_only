import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// IMPORTANT: when deploying to GitHub Pages under a project page
// (i.e. github.com/<user>/<repo>), set `site` to your full GH Pages URL
// and `base` to `/<repo>/`. For a custom domain or user/org page, leave
// `base` empty.

export default defineConfig({
  site: 'https://beko2210.github.io',
  base: '/prompt_only/',
  trailingSlash: 'ignore',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
  vite: {
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
