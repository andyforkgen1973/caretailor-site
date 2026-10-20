// @ts-check
import { defineConfig } from 'astro/config';

// Static site: every page is built to plain HTML at deploy time.
export default defineConfig({
  site: 'https://www.caretailor.co.uk',
  trailingSlash: 'never',
  build: { format: 'file' },
});
