"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"

const skills = [
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Remix",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "DBA",
]

export function About() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.title}
            </h2>
            <Separator className="mx-auto w-24" />
          </div>

          <div className="space-y-6 text-center sm:text-left">
            <p
              className="text-lg text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.about.description1 }}
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-4">{t.about.techStack}</h3>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

