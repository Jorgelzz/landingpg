"use client"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimate } from "@/components/scroll-animate"

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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/60 via-muted/70 to-muted/50 dark:from-muted/45 dark:via-muted/55 dark:to-muted/40"
    >
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <ScrollAnimate animation="slide-up">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.about.title}
                </h2>
                <Separator className="mx-auto w-24" />
              </div>
            </ScrollAnimate>

            <div className="space-y-6 text-center sm:text-left">
              <ScrollAnimate animation="fade-in" delay={1}>
                <p
                  className="text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t.about.description1 }}
                />
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in" delay={2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.description2}
                </p>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in" delay={3}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t.about.description3}
                </p>
              </ScrollAnimate>
            </div>

            <ScrollAnimate animation="scale-in" delay={2}>
              <div className="space-y-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-semibold mb-4">{t.about.techStack}</h3>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {skills.map((skill, index) => (
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
            </ScrollAnimate>
          </div>
        </div>
      </section>
  )
}

