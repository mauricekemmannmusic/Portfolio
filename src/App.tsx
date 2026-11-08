import { SiteHeader } from "@/components/site-header"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Intro } from "@/components/sections/intro"
import { Playlist } from "@/components/sections/playlist"
import { Portfolio } from "@/components/sections/portfolio"
import { Portrait } from "@/components/sections/portrait"
import { Video } from "@/components/sections/video"
import { site } from "@/data/content"

const year = new Date().getFullYear()

function App() {
  return (
    <div className="min-h-svh">
      <SiteHeader />
      <main>
        <Intro />
        <About />
        <Playlist />
        <Portrait />
        <Portfolio />
        <Contact />
        <Video />
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
