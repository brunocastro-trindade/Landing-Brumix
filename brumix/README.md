# brumix

Landing page da Brumix — concreto usinado com frota própria e parcelamento
facilitado no litoral norte catarinense.

Stack: **React 19 + Vite + Tailwind CSS v4 + TypeScript**.

## Requisitos

- Node 20+ (recomendado 22 — veja `.nvmrc`)
- npm

## Rodando

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Script              | O que faz                          |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento (HMR)  |
| `npm run build`     | Build de produção em `dist/`       |
| `npm run preview`   | Serve o build de produção          |
| `npm run typecheck` | Checagem de tipos (`tsc --noEmit`) |
| `npm run format`    | Formata o código com oxfmt         |

## Deploy

Build estático — qualquer host serve o conteúdo de `dist/`
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3...).

## Estrutura

```
src/
  main.tsx                     entrypoint (fontes + CSS + mount)
  App.tsx                      shell da aplicação
  index.css                    Tailwind v4 + base
  components/
    BrumixLanding/
      BrumixLanding.tsx        a página inteira
      svg-paths.ts             dados de path dos ícones
      *.png                    imagens das seções
```
