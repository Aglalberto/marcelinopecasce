/**
 * Ícones do site (24×24, traço). Desenhados para o site; alguns seguem o traçado do Lucide (licença ISC).
 * Cada entrada é o conteúdo interno de um <svg viewBox="0 0 24 24">.
 */
export const icons = {
  suspensao:
    '<path d="M12 2v3M12 19v3M8 5h8M8 19h8"/><path d="M8.5 7.5 15.5 9l-7 1.5 7 1.5-7 1.5 7 1.5-7 1.5"/>',
  bateria:
    '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M7 7.5V5h3v2.5M14 7.5V5h3v2.5M6.5 13.5h4M8.5 11.5v4M13.5 13.5h4"/>',
  freio:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.5"/><path d="M12 5.5v1M18.5 12h-1M12 18.5v-1M5.5 12h1"/><path d="M15.5 3.8a8.5 8.5 0 0 1 4.7 4.7" stroke-width="3.2"/>',
  farol:
    '<path d="M3.5 6.5c5.5 0 9 2.3 9 5.5s-3.5 5.5-9 5.5z"/><path d="M15.5 8h5M15.5 12h5M15.5 16h5"/>',
  arrefecimento:
    '<path d="M10 4.5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/><path d="M12 9.5v6"/><path d="M17.5 6h3M17.5 9.5h3"/>',
  pecas:
    '<circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
  estacionamento:
    '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5"/>',
  wifi: '<path d="M2.5 8.8a14 14 0 0 1 19 0M5.5 12.3a9.5 9.5 0 0 1 13 0M8.6 15.8a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19.2" r="1" fill="currentColor" stroke="none"/>',
  sofa: '<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 12.5a1.8 1.8 0 0 1 3.5 0V15h11v-2.5a1.8 1.8 0 0 1 3.5 0V18H3z"/><path d="M5 18v2M19 18v2"/>',
  entrega:
    '<path d="M2.5 5.5h10.5v10.5H2.5zM13 9.5h4l4 4v2.5h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  orcamento:
    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2.8h6V4"/><path d="m9 12.5 2 2 4-4"/>',
  chave:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
  brilho:
    '<path d="m11 3.5 1.8 5.2L18 10.5l-5.2 1.8L11 17.5l-1.8-5.2L4 10.5l5.2-1.8z"/><path d="m18.5 15.5.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  frota:
    '<path d="M5 17H3v-4l2.2-5h9.6l3.2 5H21v4h-2M9 17h6M3.5 13h17"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
  licenca:
    '<path d="M12 3 19 6v5c0 4.8-3.3 8.4-7 10-3.7-1.6-7-5.2-7-10V6z"/><path d="m9 12 2 2 4-4"/>',
  reciclagem:
    '<path d="M7 19H4.8a1.8 1.8 0 0 1-1.6-2.7l3.4-5.8M11 19h8.2a1.8 1.8 0 0 0 1.6-2.7l-1.5-2.5M14 16l-3 3 3 3M8.3 13.6 6.6 10.5 3.5 12.2M9.3 5.6l1.1-1.9a1.8 1.8 0 0 1 3.2 0l3.4 5.8M13.4 8.6l3.6.9.9-3.5"/>',
  folha:
    '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
  telefone:
    '<path d="M21.5 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.6 3.7a2 2 0 0 1 2-2.2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L7.6 9.4a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  whatsapp:
    '<path d="M3.5 20.5 4.9 16.4A8.5 8.5 0 1 1 8.1 19.5z"/><path d="M9 8.6c.1 3.6 2.8 6.3 6.4 6.4l1.1-1.5-2-1.1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1.1-2z"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/>',
  pin: '<path d="M12 21.5s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9.5" r="2.5"/>',
  relogio: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  rota: '<path d="M3 11 21.5 2.5 13 21l-2-8z"/>',
  mapa: '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
  estrela:
    '<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5-4.8-4.6 6.6-.9z" fill="currentColor" stroke="none"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
} as const;

export type IconName = keyof typeof icons;
