import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/data/content"

export function Portfolio() {
  return (
    <Section id="portfolio" index="03" title="Portfolio">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="gap-3">
            <CardHeader>
              <CardDescription className="flex justify-between font-mono text-xs">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </CardDescription>
              <CardTitle className="text-lg">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{project.description}</CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
