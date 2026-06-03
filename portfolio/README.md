# Portfolio

Portifolio pessoal em React, TypeScript e Vite, estruturado para evolucao de layout, secoes e dados sem concentrar tudo em um unico arquivo.

## Demo

- Site publicado: https://portifoklio-tau.vercel.app/

## Stack

- React 19
- TypeScript
- Vite
- Lucide React

## Estrutura

```text
portfolio/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ data/
│  ├─ hooks/
│  ├─ sections/
│  ├─ styles/
│  ├─ utils/
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run typecheck
```

## Observacoes

- Os assets locais ficam em `src/assets/images/`.
- Os dados de projetos, skills e experiencia ficam em `src/data/`.
- A navegacao com destaque de secao usa o hook `src/hooks/useScrollSpy.ts`.
