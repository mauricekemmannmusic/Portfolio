import { useEffect, useRef, useState } from "react"
import { ArrowDown, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { heroVideo, site } from "@/data/content"
import { announceAudioStart, onOtherAudioStart } from "@/lib/audio-bus"

const embedParams = new URLSearchParams({
  autoplay: "1",
  mute: "1",
  loop: "1",
  playlist: heroVideo.youtubeId, // nötig, damit loop bei einem einzelnen Video funktioniert
  controls: "0",
  disablekb: "1",
  playsinline: "1",
  rel: "0",
  iv_load_policy: "3",
  enablejsapi: "1",
})

const YT_ORIGIN = "https://www.youtube-nocookie.com"

// Steuert den YouTube-Player über die IFrame-API (postMessage), ohne Zusatzskript
function ytCommand(iframe: HTMLIFrameElement | null, func: string, args: unknown[] = []) {
  iframe?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args }), YT_ORIGIN)
}

export function Intro() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)

  function toggleSound() {
    if (muted) {
      ytCommand(iframeRef.current, "unMute")
      ytCommand(iframeRef.current, "setVolume", [100])
      ytCommand(iframeRef.current, "playVideo")
      announceAudioStart("hero-video")
    } else {
      ytCommand(iframeRef.current, "mute")
    }
    setMuted(!muted)
  }

  useEffect(
    () =>
      onOtherAudioStart("hero-video", () => {
        ytCommand(iframeRef.current, "mute")
        setMuted(true)
      }),
    []
  )

  return (
    <section className="relative -mt-14 flex min-h-svh items-end overflow-hidden bg-black">
      {/* Video auf "cover" skaliert: füllt immer den ganzen Bereich im 16:9-Verhältnis */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <iframe
          ref={iframeRef}
          src={`${YT_ORIGIN}/embed/${heroVideo.youtubeId}?${embedParams}`}
          title={heroVideo.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          tabIndex={-1}
          className="absolute top-1/2 left-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78svh)] -translate-x-1/2 -translate-y-1/2 scale-110 border-0"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/30" />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pt-32 pb-16 sm:pb-24">
        <h1 className="text-6xl font-semibold tracking-tighter text-white sm:text-8xl lg:text-9xl">
          {site.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h1>
        <p className="max-w-2xl text-xl text-white/80 sm:text-2xl">{site.tagline}</p>
        <div className="mt-6 flex items-center gap-3">
          <Button
            size="lg"
            variant="secondary"
            onClick={toggleSound}
            className="rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
          >
            {muted ? <VolumeX /> : <Volume2 />}
            {muted ? "Ton an" : "Ton aus"}
          </Button>
          <a
            href="#about"
            aria-label="Nach unten scrollen"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:text-white"
          >
            <ArrowDown className="size-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
