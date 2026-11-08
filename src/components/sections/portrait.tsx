import { useState } from "react"
import { ImageOff } from "lucide-react"

import { portrait } from "@/data/content"

export function Portrait() {
  const [failed, setFailed] = useState(false)

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="overflow-hidden rounded-xl bg-muted">
        {failed ? (
          <div className="flex aspect-[4/3] items-center justify-center text-muted-foreground sm:aspect-[16/9]">
            <ImageOff className="size-8" />
          </div>
        ) : (
          <img
            src={portrait.src}
            alt={portrait.alt}
            onError={() => setFailed(true)}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
          />
        )}
      </div>
    </section>
  )
}
