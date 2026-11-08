import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#about", label: "Über mich" },
  { href: "#musik", label: "Musik" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#kontakt", label: "Kontakt" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <a href="#" className="font-mono text-sm font-semibold tracking-widest">
          MK
        </a>
        <nav className="-mr-3 flex items-center overflow-x-auto">
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" className="px-2 text-xs sm:px-3 sm:text-sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
