import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// User site (wahajt.github.io) → served from the domain root, so no `base`.
// If a custom domain is added later, update `site` and add public/CNAME.
export default defineConfig({
  site: 'https://wahajt.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets to trim render-blocking requests.
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
