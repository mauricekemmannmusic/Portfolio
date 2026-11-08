import { Section } from "@/components/section"
import { about } from "@/data/content"
import { why } from "@/data/content"


export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {why.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  )
}
