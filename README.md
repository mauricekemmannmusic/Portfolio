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

## Inhalte & Medien

Alle Texte, Tracks, Links und das YouTube-Landevideo stehen in `src/data/content.ts`.
Audio (MP3) und Bilder kommen nach `public/assets/` – Originale (WAV, große Videos) nicht ins Repo legen
(GitHub-Limit: 100 MB pro Datei).

## Deployment

Jeder Push auf `main` baut die Seite und veröffentlicht sie über GitHub Actions auf GitHub Pages:
https://mauricekemmannmusic.github.io/Portfolio/

Einmalig nötig: Repo → Settings → Pages → Source: **GitHub Actions**.

Weitere shadcn-Komponenten hinzufügen:

```bash
npx shadcn@latest add dialog
```
