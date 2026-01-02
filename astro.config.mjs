// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});



// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Netlify prefers 'always' for static sites to avoid redirects
  trailingSlash: 'always', 
  // Ensures Astro builds pages as folders (e.g., /about/index.html)
  build: {
    format: 'directory'
  }
});

