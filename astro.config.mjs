import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://cluttercowboys.com'
});
