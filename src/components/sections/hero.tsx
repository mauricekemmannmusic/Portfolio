import { Headphones } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 py-24 sm:py-32">
      <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
        Musikportfolio
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Momo</h1>
      <p className="max-w-xl text-lg text-muted-foreground">
        Platzhaltertext: Eine kurze Beschreibung von dir und deiner Musik.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <a href="#musik">
            <Headphones />
            Reinhören
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#kontakt">Kontakt</a>
        </Button>
      </div>
    </section>
  )
}
