// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // No endereço temporário do GitHub Pages o workflow define SITE_URL e SITE_BASE.
  // Com o domínio próprio, basta remover essas variáveis do workflow.
  site: process.env.SITE_URL || 'https://marcelinopecasce.com.br',
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
