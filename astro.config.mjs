import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'development' ? 'http://localhost:4321' : 'https://cluttercowboys.onrender.com',
  integrations: [sitemap()]
});