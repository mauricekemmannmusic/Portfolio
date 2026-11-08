import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  index: string
  title: string
  className?: string
  children: ReactNode
}

export function Section({ id, index, title, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl scroll-mt-14 px-4 py-20 sm:py-28", className)}>
      <div className="mb-10 flex items-baseline gap-4 border-b pb-4">
        <span className="font-mono text-sm text-muted-foreground">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
