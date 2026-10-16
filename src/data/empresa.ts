/**
 * Dados da empresa — fonte única de verdade do site.
 * Para mudar telefone, horário ou endereço, altere só aqui.
 */

const WHATSAPP_NUMERO = '5585991295950';
const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site e gostaria de um orçamento.';

export const empresa = {
  nome: 'Marcelino Peças e Acessórios',
  tagline: 'Sua oficina de confiança e especialista em autopeças em Fortaleza.',
  fundador: 'Marcelino Jovino de Souza',
  anosDeMercado: 30,
  site: 'https://marcelinopecas.com.br',

  endereco: {
    rua: 'Av. Coronel Carvalho, 1943',
    bairro: 'Jardim Iracema',
    cidade: 'Fortaleza',
    uf: 'CE',
    cep: '60341-641',
    pais: 'BR',
    lat: -3.719707,
    lng: -38.5871658,
  },

  whatsapp: {
    exibicao: '(85) 99129-5950',
    numero: WHATSAPP_NUMERO,
    link: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
    linkEntrega: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(
      'Olá! Vim pelo site e queria saber se vocês entregam peças no meu endereço.',
    )}`,
  },

  telefones: [
    { exibicao: '(85) 3228-6703', tel: '+558532286703' },
    { exibicao: '(85) 3282-6363', tel: '+558532826363' },
    { exibicao: '(85) 3045-3988', tel: '+558530453988' },
  ],

  links: {
    instagram: 'https://www.instagram.com/marcelinopecasce/',
    instagramUsuario: '@marcelinopecasce',
    googleMaps: 'https://maps.app.goo.gl/pqL8nmixs1XU8GKE7',
    googlePerfil: 'https://www.google.com/maps?cid=13285156563445660176',
    rota: 'https://www.google.com/maps/dir/?api=1&destination=-3.719707,-38.5871658',
    mapaEmbed:
      'https://www.google.com/maps?q=Marcelino+Pe%C3%A7as+e+Acess%C3%B3rios,+Av.+Cel.+Carvalho,+1943+-+Jardim+Iracema,+Fortaleza+-+CE&z=16&output=embed',
  },
} as const;

/**
 * Horário de funcionamento. dia: 0 = domingo … 6 = sábado.
 * Horas em formato 24h, fuso America/Fortaleza.
 */
export type Turno = { abre: string; fecha: string };
export const horario: Record<number, Turno | null> = {
  0: null,
  1: { abre: '08:00', fecha: '17:00' },
  2: { abre: '08:00', fecha: '17:00' },
  3: { abre: '08:00', fecha: '17:00' },
  4: { abre: '08:00', fecha: '17:00' },
  5: { abre: '08:00', fecha: '17:00' },
  6: { abre: '08:00', fecha: '12:00' },
};

export const horarioResumo = [
  { dias: 'Segunda a sexta', horas: '8h às 17h' },
  { dias: 'Sábado', horas: '8h às 12h' },
  { dias: 'Domingo', horas: 'Fechado' },
];
