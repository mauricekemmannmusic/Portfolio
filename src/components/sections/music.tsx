import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Platzhalter – später durch echte Tracks/Releases ersetzen
const tracks = [
  { title: "Track 1", description: "Single · 2026" },
  { title: "Track 2", description: "EP · 2025" },
  { title: "Track 3", description: "Album · 2024" },
]

export function Music() {
  return (
    <section id="musik" className="mx-auto max-w-5xl scroll-mt-14 px-4 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Musik</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tracks.map((track) => (
          <Card key={track.title}>
            <CardContent>
              <div className="aspect-square rounded-lg bg-muted" />
            </CardContent>
            <CardHeader className="grid-cols-[1fr_auto] items-center">
              <div className="grid gap-1.5">
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </div>
              <Button size="icon" variant="secondary" aria-label={`${track.title} abspielen`}>
                <Play />
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
