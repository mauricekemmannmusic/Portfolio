// Zentrale Inhalte der Seite – Texte, Dateien und Links hier anpassen.
// Mediendateien liegen in public/assets/ und werden über asset("<datei>") referenziert.

// Berücksichtigt den Unterpfad auf GitHub Pages (/PortfolioMomo/)
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${encodeURIComponent(file)}`

export const site = {
  name: "Maurice Kemmann",
  role: "Composer · Game & Film Music",
  affiliation: "Student at Music Cube Academy",
  tagline: "I compose music for games, films and worlds you can hear.",
}

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
  alt: "Portrait of Maurice Kemmann",
}

export const contact = {
  email: "kontakt@example.com",
  location: "Germany",
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
  credit: "Sanctuary · Music by me",
}

// Impressum (Angaben gemäß § 5 DDG). Platzhalter in {{…}} durch echte Daten ersetzen.
export const imprint = {
  name: "Maurice Kemmann",
  street: "{{Street and house number}}",
  city: "{{Postal code and city}}",
  country: "Germany",
  email: contact.email,
}
