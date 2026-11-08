import { Section } from "@/components/section"
import { video } from "@/data/content"

export function Video() {
  return (
    <Section id="video" index="05" title="Video">
      <video
        src={video.src}
        controls
        preload="metadata"
        playsInline
        className="aspect-video w-full rounded-xl bg-muted"
      />
      <p className="mt-4 text-sm text-muted-foreground">{video.title}</p>
    </Section>
  )
}
