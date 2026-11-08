// Zentrale Inhalte der Seite – Texte, Dateien und Links hier anpassen.
// Mediendateien liegen in public/assets/ und werden über asset("<datei>") referenziert.

// Relativ zur Seite, damit es unter jedem GitHub-Pages-Unterpfad funktioniert
const asset = (file: string) => `${import.meta.env.BASE_URL}assets/${encodeURIComponent(file)}`

export const site = {
  name: "Maurice Kemmann",
  role: "Composer · Film & Games",
  affiliation: "Student at musicube academy",
  tagline: "Composer for Film & Games",
}

export const about = [
  "My name is Maurice Kemmann, I'm a composer from a small town in western Germany, born in 2005."
  "I started my journey into music towards the end of 2023, at a time when I wasn't quite sure what direction I wanted to take in life. What began with experimenting and creating EDM beats soon evolved into something much bigger. Having always been fascinated by the music of How to Train Your Dragon, I gradually found myself drawn towards cinematic music and orchestral compositions.",
  ]

export const why = [ "Video games have been a part of my life for as long as I can remember. Growing up with Nintendo and the Wii, I eventually moved on to PC gaming, where my love for games only continued to grow. Some of my favourite games include Elden Ring and Sea of Thieves, as well as tactical shooters like Valorant. What fascinates me most about video games is the endless possibilities for storytelling and the unique ways in which music can bring these worlds and stories to life. Combining my passion for gaming with my love for composing music is what drives me to pursue a career in game audio."
                   ]

export type Track = { title: string; src: string }

export const tracks: Track[] = [
  { title: "Colorful Life", src: asset("Colorful Life Maurice Kemmann.mp3") },
  { title: "Exploring Worlds", src: asset("Exploring Worlds.mp3") },
  { title: "Stowaway – Solar Flare (Rescore)", src: asset("Stowaway solar flare rescore.mp3") },
  { title: "Joining Battle", src: asset("Joining Battle.mp3") },
  { title: "Space Invaders - game soundtrack", src: asset("space invaders Moritz ganzes ding.mp3") },
  { title: "Time for Inventions", src: asset("Time for inventions.mp3") },
]

export const portrait = {
  src: asset("maurice.jpg"),
  alt: "Portrait of Maurice Kemmann",
}

export const contact = {
  email: "kemmannmaurice@gmail.com",
  location: "Germany",
  links: [
    { label: "YouTube", href: "https://www.youtube.com/@maurice_kemmann_music" },
    { label: "Instagram", href: "https://www.instagram.com/maurice_kemmann_music/" },
    { label: "SoundCloud", href: "https://soundcloud.com/maurice_kemmann" },
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
  street: "zum Marschfeld 17",
  city: "46459 Rees",
  country: "Germany",
  email: contact.email,
}
