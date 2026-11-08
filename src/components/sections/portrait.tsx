import { useState } from "react"
import { ImageOff } from "lucide-react"

import { portrait, site } from "@/data/content"

export function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <section className="mx-auto grid max-w-5xl items-end gap-8 px-4 py-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-12">
      <div className="overflow-hidden rounded-xl bg-muted">
        {failed ? (
          <div className="flex aspect-[4/5] items-center justify-center text-muted-foreground">
            <ImageOff className="size-8" />
          </div>
        ) : (
          <img
            src={portrait.src}
            alt={portrait.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="aspect-[4/5] w-full object-cover object-top"
          />
        )}
      </div>
      <div className="space-y-2 pb-2">
        <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{site.name}</p>
        <p className="text-muted-foreground">{site.role}</p>
      </div>
    </section>
  )
}
