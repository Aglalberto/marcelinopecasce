# Marcelino Peças e Acessórios — site

Landing page da **Marcelino Peças e Acessórios**, autopeças e oficina mecânica no Jardim Iracema, em Fortaleza (CE).

Publicado em **https://marcelinopecasce.com.br** via GitHub Pages.

## Stack

- [Astro](https://astro.build) com saída estática (HTML pronto, quase sem JavaScript)
- [Tailwind CSS 4](https://tailwindcss.com) com os tokens da marca em `src/styles/global.css`
- [Motion](https://motion.dev) para as animações (entrada do símbolo no hero, contador e serviços)
- Integração React instalada para islands futuras (ex.: e-commerce). Hoje nenhuma página envia React ao navegador.
- Fontes self-hosted: Jost (títulos) e Barlow (texto), via Fontsource

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # verifica tipos e gera o site em dist/
npm run preview   # serve o dist/ localmente
npm run lint
```

## Onde mudar cada coisa

| O quê | Arquivo |
|---|---|
| Telefones, WhatsApp, endereço, horário, links | `src/data/empresa.ts` |
| Serviços | `src/data/servicos.ts` |
| Diferenciais, estrutura, meio ambiente | `src/data/diferenciais.ts` |
| Avaliações do Google | `src/data/avaliacoes.json` |
| Umami e Contentsquare (IDs) | `src/data/analytics.ts` |
| Cores, fontes e estilos base | `src/styles/global.css` |
| Fotos | `src/assets/fotos/` (veja `FOTOS.md`) |
| Logos | `src/assets/brand/` (do kit de marca oficial) |

Para regenerar favicons, imagem de compartilhamento e placeholders: `npm run assets`.

## Analytics e LGPD

- **Umami**: sem cookies, carrega sempre. Eventos de clique via `data-umami-event` (WhatsApp, telefone, rota, mapa, Instagram, avaliações, cookies).
- **Contentsquare**: só carrega depois que a pessoa clica em "Aceitar" no banner. A escolha fica em `localStorage` (`mpa-consentimento`) e pode ser alterada em "Preferências de cookies", no rodapé.
- Deixar um ID vazio em `src/data/analytics.ts` desativa a ferramenta (e o banner some se não houver Contentsquare).

## Deploy

Todo push na `main` dispara o workflow `.github/workflows/deploy.yml`, que compila e publica no GitHub Pages. O domínio customizado está em `public/CNAME`.

DNS na Hostinger: 4 registros A (`185.199.108–111.153`), 4 AAAA (`2606:50c0:8000–8003::153`) e `CNAME www → <usuario>.github.io`. **Ao configurar e-mail no domínio, adicione os registros MX sem remover esses.**
