// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcelinopecasce.com.br',
  trailingSlash: 'ignore',
  // React fica disponível para islands futuras (ex.: e-commerce); hoje nenhuma página envia React ao navegador.
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/404') })],
  build: {
    inlineStylesheets: 'always',
  },
  image: {
    responsiveStyles: true,
  },
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
