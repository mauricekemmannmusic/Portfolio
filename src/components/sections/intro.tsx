import { ArrowDown } from "lucide-react"

import { site } from "@/data/content"

export function Intro() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-5xl flex-col justify-center gap-8 px-4 py-24">
      <h1 className="text-6xl font-semibold tracking-tighter sm:text-8xl lg:text-9xl">
        {site.name.split(" ").map((part) => (
          <span key={part} className="block">
            {part}
          </span>
        ))}
      </h1>
      <p className="max-w-2xl text-xl text-muted-foreground sm:text-2xl">{site.tagline}</p>
      <a
        href="#about"
        aria-label="Nach unten scrollen"
        className="mt-8 inline-flex size-10 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-4" />
      </a>
    </section>
  )
}
