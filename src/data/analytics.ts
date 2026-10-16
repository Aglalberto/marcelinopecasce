/**
 * Configuração de analytics.
 *
 * - Umami: não usa cookies, carrega sempre (dados agregados e anônimos).
 * - Contentsquare: grava sessões e mapas de calor, só carrega após o aceite no banner LGPD.
 *
 * Deixe o valor vazio ('') para desativar a ferramenta sem mexer em mais nada.
 */
export const analytics = {
  umami: {
    /** URL do script, exatamente como o painel do Umami fornece. */
    scriptSrc: '',
    /** data-website-id do website no Umami. */
    websiteId: '',
    domains: 'marcelinopecas.com.br',
  },
  contentsquare: {
    /** ID da tag (ex.: 'abc123def456'). O script é https://t.contentsquare.net/uxa/<id>.js */
    tagId: '',
  },
} as const;

export const CONSENT_KEY = 'mpa-consentimento';
