// Zentrale Inhalte der Seite – Texte, Dateien und Links hier anpassen.
// Mediendateien liegen in public/assets/ und werden als /assets/<datei> referenziert.

export const site = {
  name: "Maurice Kemmann",
  tagline: "Ich komponiere Musik für Games, Filme und Welten, die man hören kann.",
}

export const about = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
]

export type Track = { title: string; src: string }

export const tracks: Track[] = [
  { title: "Colorful Life", src: "/assets/colorful-life.mp3" },
  { title: "Exploring Worlds", src: "/assets/exploring-worlds.mp3" },
  { title: "Joining Battle", src: "/assets/joining-battle.mp3" },
  { title: "Space Invaders", src: "/assets/space-invaders.mp3" },
  { title: "Stowaway – Solar Flare (Rescore)", src: "/assets/stowaway-solar-flare-rescore.mp3" },
  { title: "Time for Inventions", src: "/assets/time-for-inventions.mp3" },
]

export const portrait = {
  src: "/assets/maurice.jpg",
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

export const video = {
  title: "Sanctuary",
  src: "/assets/sanctuary.mp4",
}
