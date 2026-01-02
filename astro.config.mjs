// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // This makes "/" and "/index" work everywhere
  trailingSlash: 'ignore', 
  // If you aren't using an adapter, Astro builds static files
  output: 'static' 
});
