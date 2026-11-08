# PortfolioMomo

Musikportfolio-Website – aktuell ein Barebone-Grundgerüst.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:5173
npm run build    # Produktions-Build nach dist/
npm run lint     # oxlint
```

## Struktur

```
src/
  components/
    ui/          # shadcn-Komponenten (Button, Card)
    sections/    # Seitenabschnitte (Hero, Musik, Über mich, Kontakt)
    site-header.tsx
  lib/utils.ts   # cn()-Helper
  index.css      # Tailwind + shadcn Theme-Variablen
```

Weitere shadcn-Komponenten hinzufügen:

```bash
npx shadcn@latest add dialog
```
