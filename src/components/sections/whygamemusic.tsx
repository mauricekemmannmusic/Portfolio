import { Section } from "@/components/section"
import { why } from "@/data/content"


export function Why() {
  return (
    <Section id="about" index="01.2" title="Why game music?">
      <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        {why.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>  
    </Section>
  )
}
