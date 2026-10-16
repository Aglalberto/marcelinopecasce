/**
 * Gera favicons, imagem de compartilhamento (OG) e os placeholders das fotos.
 * Rode com: npm run assets
 *
 * Os placeholders só são criados se a foto ainda não existir,
 * então nunca sobrescrevem uma foto real.
 */
import sharp from 'sharp';
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const brand = join(raiz, 'src/assets/brand');
const pub = join(raiz, 'public');
const fotos = join(raiz, 'src/assets/fotos');
mkdirSync(fotos, { recursive: true });

const AZUL = '#312782';
const AZUL_950 = '#110d36';
const AMARELO = '#f2c503';

const simbolo = readFileSync(join(brand, 'marcelino-simbolo-colorido-rgb.svg'), 'utf8');
const horizontal = readFileSync(join(brand, 'marcelino-horizontal-colorido-rgb.svg'), 'utf8');

// ---------- Favicons ----------
copyFileSync(join(brand, 'marcelino-simbolo-colorido-rgb.svg'), join(pub, 'favicon.svg'));

async function iconeQuadrado(tamanho, arquivo, margem = 0.14) {
  const interno = Math.round(tamanho * (1 - margem * 2));
  const sim = await sharp(Buffer.from(simbolo))
    .resize(interno, interno, { fit: 'contain', background: '#ffffff00' })
    .png()
    .toBuffer();
  await sharp({ create: { width: tamanho, height: tamanho, channels: 4, background: '#ffffff' } })
    .composite([{ input: sim, gravity: 'center' }])
    .png()
    .toFile(join(pub, arquivo));
}
await iconeQuadrado(32, 'favicon-32.png', 0.04);
await iconeQuadrado(180, 'apple-touch-icon.png');
await iconeQuadrado(192, 'icon-192.png');
await iconeQuadrado(512, 'icon-512.png');

writeFileSync(
  join(pub, 'site.webmanifest'),
  JSON.stringify(
    {
      name: 'Marcelino Peças e Acessórios',
      short_name: 'Marcelino',
      icons: [
        { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: AZUL,
      background_color: '#ffffff',
      display: 'standalone',
      start_url: './',
    },
    null,
    2,
  ),
);

// Logo em PNG para o JSON-LD
await sharp(Buffer.from(horizontal))
  .resize({ width: 800 })
  .png()
  .toFile(join(pub, 'logo-marcelino.png'));

// ---------- Imagem de compartilhamento (1200×630) ----------
{
  const W = 1200;
  const H = 630;
  const logo = await sharp(Buffer.from(horizontal)).resize({ width: 760 }).png().toBuffer();
  const fundo = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="#ffffff"/>
    <rect y="${H - 150}" width="${W}" height="150" fill="${AZUL_950}"/>
    <g transform="skewX(-11.5)">
      <rect x="-200" y="${H - 190}" width="1100" height="56" fill="${AMARELO}"/>
      <rect x="935" y="${H - 190}" width="24" height="56" fill="${AMARELO}"/>
      <rect x="985" y="${H - 190}" width="24" height="56" fill="${AMARELO}"/>
      <rect x="1035" y="${H - 190}" width="24" height="56" fill="${AMARELO}"/>
    </g>
    <text x="80" y="${H - 58}" font-family="Jost, Futura, Arial, sans-serif" font-size="38" font-weight="700" fill="#ffffff">Autopeças e oficina no Jardim Iracema, Fortaleza</text>
  </svg>`;
  await sharp(Buffer.from(fundo))
    .composite([{ input: logo, top: 90, left: 220 }])
    .png({ compressionLevel: 9 })
    .toFile(join(pub, 'og.png'));
}

// ---------- Placeholders das fotos ----------
const placeholders = [
  { arquivo: 'fachada.jpg', w: 1200, h: 1500 },
  { arquivo: 'sala-de-espera.jpg', w: 1600, h: 1000 },
  { arquivo: 'oficina.jpg', w: 1200, h: 900 },
  { arquivo: 'balcao.jpg', w: 1200, h: 900 },
];

for (const [i, p] of placeholders.entries()) {
  const destino = join(fotos, p.arquivo);
  if (existsSync(destino)) continue;
  const tons = [AZUL, '#251d66', '#3c31a0', '#1b1550'];
  const s = Math.min(p.w, p.h) * 0.42;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${p.w}" height="${p.h}">
    <rect width="${p.w}" height="${p.h}" fill="${tons[i % tons.length]}"/>
    <g opacity="0.035" fill="#ffffff">
      ${Array.from({ length: 14 }, (_, k) => `<rect x="${k * 140 - 300}" y="0" width="60" height="${p.h * 1.5}" transform="skewX(-11.5)"/>`).join('')}
    </g>
    <g transform="translate(${(p.w - s) / 2} ${(p.h - s * 1.16) / 2}) scale(${s / 402.4})" opacity="0.9">
      <path fill="#ffffff" fill-opacity="0.14" d="M32 326.86 L91.29 32 L96.21 32 L203.96 217.94 L305.59 32 L310.71 32 L370.39 326.86 L305.59 326.86 L281.36 196.47 L204.74 326.86 L200.21 326.86 L117.88 194.5 L92.86 326.86 Z"/>
      <path fill="${AMARELO}" d="M211.57 372.55 L45.17 372.55 L32 436.09 L198.4 436.09 Z"/>
      <path fill="${AMARELO}" d="M370.39 372.55 L343.89 372.55 L330.72 436.09 L357.23 436.09 Z"/>
      <path fill="${AMARELO}" d="M317.34 372.55 L290.83 372.55 L277.66 436.09 L304.17 436.09 Z"/>
      <path fill="${AMARELO}" d="M264.69 372.55 L238.19 372.55 L225.02 436.09 L251.52 436.09 Z"/>
    </g>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(destino);
  console.log('placeholder criado:', p.arquivo);
}

console.log('Assets gerados.');
