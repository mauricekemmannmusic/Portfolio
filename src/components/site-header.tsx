import { Music } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#musik", label: "Musik" },
  { href: "#about", label: "Über mich" },
  { href: "#kontakt", label: "Kontakt" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Music className="size-5" />
          Momo
        </a>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
