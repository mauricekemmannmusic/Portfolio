import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Intro } from "@/components/sections/intro"
import { Playlist } from "@/components/sections/playlist"
import { Portfolio } from "@/components/sections/portfolio"
import { Portrait } from "@/components/sections/portrait"
import { Statement } from "@/components/sections/statement"
import { site } from "@/data/content"

const year = new Date().getFullYear()

function App() {
  return (
    <div className="min-h-svh">
      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-white px-3 py-2 text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main>
        <Intro />
        <About />
        <Playlist />
        <Statement />
        <Portrait />
        <Portfolio />
        <Contact />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
          © {year} {site.name}
        </div>
      </footer>
    </div>
  )
}

export default App
