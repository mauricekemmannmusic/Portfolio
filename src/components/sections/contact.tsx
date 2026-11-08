import { ArrowUpRightIcon as ArrowUpRight, EnvelopeSimpleIcon as Mail, MapPinIcon as MapPin } from "@phosphor-icons/react"

import { Section } from "@/components/section"
import { contact } from "@/data/content"

export function Contact() {
  return (
    <Section id="kontakt" index="04" title="Kontakt">
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="space-y-4">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-xl font-medium underline-offset-4 hover:underline sm:text-2xl"
          >
            <Mail className="size-5 shrink-0" />
            {contact.email}
          </a>
          <p className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="size-5 shrink-0" />
            {contact.location}
          </p>
        </div>
        <ul className="divide-y border-y">
          {contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between py-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
