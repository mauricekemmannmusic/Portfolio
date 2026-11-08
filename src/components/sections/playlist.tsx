import { useEffect, useRef, useState } from "react"
import { Pause, Play, SkipBack, SkipForward } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { tracks } from "@/data/content"
import { cn } from "@/lib/utils"

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function Playlist() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const shouldAutoplay = useRef(false)
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [failed, setFailed] = useState(false)

  const track = tracks[index]

  useEffect(() => {
    if (!shouldAutoplay.current) return
    audioRef.current?.play().catch(() => setFailed(true))
  }, [index])

  function selectTrack(i: number) {
    const audio = audioRef.current
    if (!audio) return
    if (i === index) {
      if (audio.paused) audio.play().catch(() => setFailed(true))
      else audio.pause()
      return
    }
    shouldAutoplay.current = true
    setTime(0)
    setDuration(0)
    setFailed(false)
    setIndex(i)
  }

  const step = (dir: 1 | -1) => selectTrack((index + dir + tracks.length) % tracks.length)

  return (
    <Section id="musik" index="02" title="Musik">
      <audio
        ref={audioRef}
        src={track.src}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={() => step(1)}
        onError={() => setFailed(true)}
      />

      <div className="rounded-xl border bg-card p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm text-muted-foreground">
              {failed ? "Datei nicht gefunden" : isPlaying ? "Läuft gerade" : "Ausgewählt"}
            </p>
            <p className="truncate text-xl font-semibold">{track.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => step(-1)} aria-label="Vorheriger Track">
              <SkipBack />
            </Button>
            <Button
              size="icon"
              className="size-12 rounded-full"
              onClick={() => selectTrack(index)}
              aria-label={isPlaying ? "Pause" : "Abspielen"}
            >
              {isPlaying ? <Pause className="size-5" /> : <Play className="size-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => step(1)} aria-label="Nächster Track">
              <SkipForward />
            </Button>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="w-10">{formatTime(time)}</span>
          <Slider
            value={[time]}
            max={duration || 1}
            step={0.1}
            disabled={!duration}
            onValueChange={([v]) => {
              if (audioRef.current) audioRef.current.currentTime = v
              setTime(v)
            }}
            aria-label="Position im Track"
          />
          <span className="w-10 text-right">{formatTime(duration)}</span>
        </div>
      </div>

      <ol className="mt-4 divide-y">
        {tracks.map((t, i) => {
          const active = i === index
          return (
            <li key={t.src}>
              <button
                type="button"
                onClick={() => selectTrack(i)}
                className={cn(
                  "flex w-full items-center gap-4 px-2 py-4 text-left transition-colors hover:bg-accent/50",
                  active && "text-foreground",
                  !active && "text-muted-foreground"
                )}
              >
                <span className="w-6 font-mono text-sm">
                  {active && isPlaying ? <Pause className="size-4" /> : String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("flex-1", active && "font-medium")}>{t.title}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
