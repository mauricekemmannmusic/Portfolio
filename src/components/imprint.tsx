import { useEffect } from "react"
import { ArrowLeftIcon } from "@phosphor-icons/react"

import { imprint } from "@/data/content"

export function Imprint() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-24">
      <a
        href="#top"
        className="title-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-muted-foreground transition-[color,background-color,transform] duration-300 ease-base outline-none hover:bg-accent hover:text-foreground focus-visible:ring-4 focus-visible:ring-ring/50 active:scale-[0.98]"
      >
        <ArrowLeftIcon className="size-4" />
        Back to home
      </a>

      <h1 className="heading-3 mt-12 tracking-tight">Imprint</h1>
      <p className="caption-2 mt-2 text-muted-foreground">Impressum · Information according to § 5 DDG</p>

      <div className="body-3 mt-12 grid max-w-[680px] gap-8 text-muted-foreground">
        <address className="not-italic">
          <span className="title-3 block text-foreground">{imprint.name}</span>
          {imprint.street}
          <br />
          {imprint.city}
          <br />
          {imprint.country}
        </address>
        <div>
          <span className="title-3 block text-foreground">Contact</span>
          Email:{" "}
          <a href={`mailto:${imprint.email}`} className="underline underline-offset-4 hover:text-foreground">
            {imprint.email}
          </a>
        </div>
      </div>
    </main>
  )
}
