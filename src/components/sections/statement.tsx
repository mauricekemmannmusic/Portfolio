import { useEffect, useRef, useState } from "react"

import { statement } from "@/data/content"
import { cn } from "@/lib/utils"

const lines = statement.map((line) => line.split(" "))
const words = lines.flat()

// Wörter hellen sich nacheinander auf, während der Block von 85 % auf 35 % der Bildschirmhöhe wandert.
// Scroll-Listener ist per requestAnimationFrame gedrosselt (landing-page-design, B11).
export function Statement() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const [reducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const [activeCount, setActiveCount] = useState(reducedMotion ? words.length : 0)

  useEffect(() => {
    if (reducedMotion) return

    let frame = 0
    const update = () => {
      frame = 0
      const el = textRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const start = window.innerHeight * 0.85 // Block-Oberkante erreicht diese Linie: erstes Wort
      const end = window.innerHeight * 0.35 // Block-Unterkante erreicht diese Linie: letztes Wort
      const progress = (start - top) / (start - end + height)
      setActiveCount(Math.round(Math.min(Math.max(progress, 0), 1) * words.length))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [reducedMotion])

  return (
    <section aria-label="Leitsatz" className="mx-auto max-w-5xl px-4 py-24">
      <p ref={textRef} className="heading-3 max-w-[680px] tracking-tight sm:heading-2">
        {lines.map((line, l) => {
          const offset = lines.slice(0, l).reduce((n, w) => n + w.length, 0)
          return (
            <span key={l} className="block">
              {line.map((word, w) => {
                const i = offset + w
                return (
                  <span
                    key={i}
                    className={cn(
                      "transition-opacity duration-500 ease-base",
                      i < activeCount ? "opacity-100" : "opacity-30"
                    )}
                  >
                    {word}{" "}
                  </span>
                )
              })}
            </span>
          )
        })}
      </p>
    </section>
  )
}
