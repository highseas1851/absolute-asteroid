// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Set this to 'ignore' so both /about and /about/ work locally
  trailingSlash: 'ignore' 
});
