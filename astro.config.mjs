import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.danielmarkusson.net',
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
