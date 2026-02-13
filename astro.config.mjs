// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: ['en-us', 'es', 'fr'],
    defaultLocale: 'en-us',
    routing: 'manual',
  }
});
