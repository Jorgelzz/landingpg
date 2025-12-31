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

const techStack = {
  "Kaizen (5S)": ["Django", "React", "Python", "PostgreSQL"],
}

export function Projects() {
  const { t } = useLanguage()
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.projects.title}
            </h2>
            <Separator className="mx-auto w-24" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {t.projects.projects.map((project, index) => (
              <Card key={index} className="flex flex-col w-full max-w-md">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {(techStack[project.title as keyof typeof techStack] || []).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

