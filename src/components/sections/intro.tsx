import { useEffect, useRef, useState } from "react"
import { ArrowDownIcon, SpeakerHighIcon, SpeakerLowIcon, SpeakerSlashIcon } from "@phosphor-icons/react"

import { Slider } from "@/components/ui/slider"
import { heroVideo, site } from "@/data/content"
import { announceAudioStart, onOtherAudioStart } from "@/lib/audio-bus"
import { cn } from "@/lib/utils"

const YT_ORIGIN = "https://www.youtube-nocookie.com"
const YT_PLAYING = 1

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

// Steuert den YouTube-Player über die IFrame-API (postMessage), ohne Zusatzskript
function ytPost(iframe: HTMLIFrameElement | null, message: object) {
  iframe?.contentWindow?.postMessage(JSON.stringify(message), YT_ORIGIN)
}
const ytCommand = (iframe: HTMLIFrameElement | null, func: string, args: unknown[] = []) =>
  ytPost(iframe, { event: "command", func, args })

const reveal = (step: number) => ({ animationDelay: `${150 + step * 100}ms` })

export function Intro() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(70)
  // Das Vorschaubild bleibt sichtbar, bis YouTube meldet, dass das Video wirklich läuft.
  // Ist Einbetten blockiert, sieht man so das Standbild statt einer schwarzen Fläche.
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [poster, setPoster] = useState(`https://i.ytimg.com/vi/${heroVideo.youtubeId}/maxresdefault.jpg`)

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== YT_ORIGIN || typeof e.data !== "string") return
      try {
        const data = JSON.parse(e.data)
        const state = data.event === "onStateChange" ? data.info : data.info?.playerState
        if (state === YT_PLAYING) setVideoPlaying(true)
      } catch {
        // keine YouTube-Nachricht
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  useEffect(
    () =>
      onOtherAudioStart("hero-video", () => {
        ytCommand(iframeRef.current, "mute")
        setMuted(true)
      }),
    [],
  )

  function toggleSound() {
    if (muted) {
      ytCommand(iframeRef.current, "unMute")
      ytCommand(iframeRef.current, "setVolume", [volume])
      ytCommand(iframeRef.current, "playVideo")
      announceAudioStart("hero-video")
    } else {
      ytCommand(iframeRef.current, "mute")
    }
    setMuted(!muted)
  }

  function changeVolume(value: number) {
    setVolume(value)
    ytCommand(iframeRef.current, "setVolume", [value])
  }

  return (
    <section
      id="top"
      aria-label="Intro"
      className="relative flex min-h-svh items-end overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <img
          src={poster}
          alt=""
          onError={() => setPoster(`https://i.ytimg.com/vi/${heroVideo.youtubeId}/hqdefault.jpg`)}
          className="absolute inset-0 size-full scale-110 object-cover"
        />
        {/* Video auf "cover" skaliert: füllt immer den ganzen Bereich im 16:9-Verhältnis */}
        <iframe
          ref={iframeRef}
          src={`${YT_ORIGIN}/embed/${heroVideo.youtubeId}?${embedParams}`}
          title={heroVideo.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          tabIndex={-1}
          onLoad={() => ytPost(iframeRef.current, { event: "listening", id: 1, channel: "widget" })}
          className={cn(
            "absolute top-1/2 left-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78svh)] -translate-x-1/2 -translate-y-1/2 scale-110 border-0 opacity-0 transition-opacity duration-700 ease-base",
            videoPlaying && "opacity-100",
          )}
        />
      </div>
      {/* Flache Abdunklung für Lesbarkeit (keine Verläufe im Hintergrund, B4) */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-4 pt-24 pb-16 sm:pb-24">
        <p className="caption-1 mb-4 animate-rise-in text-white/70" style={reveal(0)}>
          {site.affiliation}
        </p>
        <h1
          className="heading-1 max-w-[680px] animate-rise-in bg-linear-to-r from-white to-[#9B9B9B] bg-clip-text tracking-tight text-transparent"
          style={reveal(1)}
        >
          {site.name.split(" ").map((part) => (
            <span key={part} className="block">
              {part}
            </span>
          ))}
        </h1>
        <p className="title-1 mt-4 max-w-[680px] animate-rise-in text-white/80" style={reveal(2)}>
          {site.tagline}
        </p>
        <div className="mt-8 flex animate-rise-in flex-wrap items-center gap-3" style={reveal(3)}>
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="button-md inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-black transition-[background-color,transform] duration-300 ease-base outline-none hover:bg-white/85 focus-visible:ring-4 focus-visible:ring-white/40 active:scale-[0.98]"
          >
            {muted ? <SpeakerSlashIcon className="size-5" /> : <SpeakerHighIcon className="size-5" />}
            {muted ? "Musik einschalten" : "Musik ausschalten"}
          </button>
          <a
            href="#about"
            aria-label="Zum Inhalt scrollen"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-[color,background-color,transform] duration-300 ease-base outline-none hover:bg-white/10 hover:text-white focus-visible:ring-4 focus-visible:ring-white/40 active:scale-[0.98]"
          >
            <ArrowDownIcon className="size-4" />
          </a>
          {!muted && (
            <div className="flex h-10 animate-in items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 backdrop-blur duration-500 ease-base fade-in slide-in-from-left-2">
              <SpeakerLowIcon className="size-4 shrink-0 text-white/70" />
              <Slider
                value={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={([v]) => changeVolume(v)}
                aria-label="Lautstärke"
                className="w-24 sm:w-32 [&_[data-slot=slider-range]]:bg-white [&_[data-slot=slider-thumb]]:border-white [&_[data-slot=slider-track]]:bg-white/20"
              />
              <span className="caption-5 w-7 text-right font-mono text-white/70 tabular-nums">{volume}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
