import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="kontakt" className="mx-auto max-w-5xl scroll-mt-14 px-4 py-16">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Kontakt</h2>
      <p className="mb-6 max-w-2xl text-muted-foreground">
        Für Booking, Kollaborationen oder einfach Hallo sagen.
      </p>
      <Button asChild>
        <a href="mailto:hallo@example.com">
          <Mail />
          E-Mail schreiben
        </a>
      </Button>
    </section>
  )
}
