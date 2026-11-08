// Zentrale Inhalte der Seite – Texte, Dateien und Links hier anpassen.
// Mediendateien liegen in public/assets/ und werden über asset("<datei>") referenziert.

// Berücksichtigt den Unterpfad auf GitHub Pages (/PortfolioMomo/)
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${encodeURIComponent(file)}`

export const site = {
  name: "Maurice Kemmann",
  role: "Komponist · Game & Film Music",
  affiliation: "Student an der Music Cube Academy",
  tagline: "Ich komponiere Musik für Games, Filme und Welten, die man hören kann.",
}

// Großer Satz, dessen Wörter sich beim Scrollen nacheinander aufhellen (Beispieltext).
// Jeder Eintrag ist eine eigene Zeile.
export const statement = ["Jede Welt hat", "ihren eigenen Klang.", "Ich suche so lange,", "bis er stimmt."]

export const about = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
]

export type Track = { title: string; src: string }

export const tracks: Track[] = [
  { title: "Colorful Life", src: asset("Colorful Life Maurice Kemmann.mp3") },
  { title: "Exploring Worlds", src: asset("Exploring Worlds.mp3") },
  { title: "Joining Battle", src: asset("Joining Battle.mp3") },
  { title: "Space Invaders", src: asset("space invaders Moritz ganzes ding.mp3") },
  { title: "Stowaway – Solar Flare (Rescore)", src: asset("Stowaway solar flare rescore.mp3") },
  { title: "Time for Inventions", src: asset("Time for inventions.mp3") },
]

export const portrait = {
  src: asset("maurice.jpg"),
  alt: "Portrait von Maurice Kemmann",
}

export type Project = { title: string; category: string; year: string; description: string }

export const projects: Project[] = [
  {
    title: "Projekt 1",
    category: "Game Soundtrack",
    year: "2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Projekt 2",
    category: "Rescore",
    year: "2025",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Projekt 3",
    category: "Kurzfilm",
    year: "2024",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
]

export const contact = {
  email: "kontakt@example.com",
  location: "Deutschland",
  links: [
    { label: "YouTube", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "SoundCloud", href: "#" },
  ],
}

// Landevideo im Hintergrund des Startbereichs (YouTube)
export const heroVideo = {
  title: "Sanctuary",
  youtubeId: "wBpkdkJhLEQ",
}
