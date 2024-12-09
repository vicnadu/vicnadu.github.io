import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vicnadu.github.io',
  build: {
    target: 'static', // Ensure the build is for static sites
  },
  base: '/vicnadu.github.io/',
});