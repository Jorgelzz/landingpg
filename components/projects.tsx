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

const projects = [
  {
    title: "OrganizaAí (5S)",
    description:
      "Sistema web para auditoria 5S em empresas. Desenvolvido com Django no backend e React no frontend, oferecendo uma solução completa para gestão e auditoria de processos 5S.",
    tech: ["Django", "React", "Python", "PostgreSQL"],
    githubUrl: "https://github.com/Jorgelzz/Kaizen-backend/tree/main/app5sHome",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <Separator className="mx-auto w-24" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Alguns dos projetos em destaque que desenvolvi
            </p>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col w-full max-w-md">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 justify-center">
                  <Button variant="outline" asChild className="flex-1">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
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

