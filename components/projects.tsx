"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ScrollAnimate } from "@/components/scroll-animate"

const techStack = {
  "OrganizaAí (5S)": ["Django", "React", "Python", "PostgreSQL"],
}

export function Projects() {
  const { t } = useLanguage()
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/98 via-muted/30 to-muted/50 dark:from-background dark:via-muted/20 dark:to-muted/35"
    >
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <ScrollAnimate animation="slide-up">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {t.projects.title}
                </h2>
                <Separator className="mx-auto w-24" />
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t.projects.subtitle}
                </p>
              </div>
            </ScrollAnimate>

            <div className="space-y-8">
              {t.projects.projects.map((project, index) => (
                <ScrollAnimate
                  key={index}
                  animation="scale-in"
                  delay={(index % 4) as 0 | 1 | 2 | 3 | 4}
                >
                  <div className="space-y-4">
                    <Card className="flex flex-col w-full hover:shadow-xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <CardDescription className="text-base">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-4">
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {project.detailedDescription}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-lg font-semibold">
                            {t.projects.technologiesLabel}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {(techStack[project.title as keyof typeof techStack] || []).map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="gap-2 justify-center">
                        <Button variant="outline" asChild className="flex-1">
                          <Link
                            href="https://github.com/Jorgelzz/Kaizen-backend/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            {t.projects.viewCode}
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

