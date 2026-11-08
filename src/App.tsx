import { useEffect } from "react"

import { Imprint } from "@/components/imprint"
import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Intro } from "@/components/sections/intro"
import { Playlist } from "@/components/sections/playlist"
import { Portrait } from "@/components/sections/portrait"
import { site } from "@/data/content"
import { useHash } from "@/lib/use-hash"

const year = new Date().getFullYear()

function Home() {
  // Kommt man vom Impressum über einen Abschnittslink zurück, existiert das Ziel erst nach dem Rendern
  useEffect(() => {
    const target = window.location.hash.slice(1)
    if (target) document.getElementById(target)?.scrollIntoView()
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only z-[60] rounded-full bg-white px-3 py-2 text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <Intro />
        <About />
        <Playlist />
        <Portrait />
        <Contact />
      </main>
    </>
  )
}

function App() {
  const hash = useHash()

  return (
    <div className="min-h-svh">
      {hash === "#imprint" ? <Imprint /> : <Home />}
      <footer className="border-t">
        <div className="caption-2 mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-6 text-muted-foreground">
          <span>
            © {year} {site.name}
          </span>
          <a
            href="#imprint"
            className="underline-offset-4 transition-colors duration-300 ease-base hover:text-foreground hover:underline"
          >
            Imprint
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
