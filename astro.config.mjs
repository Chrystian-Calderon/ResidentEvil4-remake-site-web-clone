// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    }
  },
  i18n: {
    locales: ['en-us', 'es', 'fr'],
    defaultLocale: 'en-us',
    routing: 'manual',
  }
});
