/**
 * Monta links internos respeitando o `base` do Astro.
 * Com domínio próprio o base é "/", e no endereço temporário do GitHub Pages é "/marcelinopecasce/".
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (caminho: string): string => `${base}${caminho.startsWith('/') ? caminho : `/${caminho}`}`;
