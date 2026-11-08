import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "music", label: "Music" },
  { id: "contact", label: "Contact" },
]

// Markiert den Abschnitt, der gerade die Mitte des Bildschirms kreuzt (B9: aktueller Punkt sichtbar)
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    for (const id of ["top", ...navItems.map((i) => i.id)]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}

export function SiteHeader() {
  const active = useActiveSection()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className="pointer-events-auto flex animate-rise-in items-center gap-1 rounded-full border border-white/10 bg-black/50 p-1 backdrop-blur-xl"
      >
        <a
          href="#top"
          aria-label="Back to top"
          className="caption-3 rounded-full px-3 py-2 font-mono tracking-widest text-white transition-colors duration-300 ease-base outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/40"
        >
          MK
        </a>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
            className={cn(
              "title-5 rounded-full px-2 py-2 text-white/70 transition-colors duration-300 ease-base outline-none hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 sm:title-4 sm:px-3",
              active === item.id && "bg-white/15 text-white"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
