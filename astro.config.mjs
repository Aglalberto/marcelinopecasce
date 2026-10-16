// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Para publicar num endereço temporário (ex.: aglalberto.github.io/marcelinopecasce),
  // defina SITE_URL, SITE_BASE e PUBLIC_SITE_PREVIEW=1 no step de build do workflow.
  site: process.env.SITE_URL || 'https://marcelinopecas.com.br',
  base: process.env.SITE_BASE || '/',
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
