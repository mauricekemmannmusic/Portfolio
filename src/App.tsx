import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Music } from "@/components/sections/music"

const year = new Date().getFullYear()

function App() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Hero />
        <Music />
        <About />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
          © {year} Momo
        </div>
      </footer>
    </div>
  )
}

export default App
