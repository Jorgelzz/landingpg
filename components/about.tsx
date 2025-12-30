import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skills = [
  "Python",
  "Django",
  "TypeScript",
  "React",
  "Remix",
  "PostgreSQL",
  "MySQL",
  "Docker",
]

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <Separator className="mx-auto w-24" />
          </div>

          <div className="space-y-6 text-center sm:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Olá, eu sou o Jorge Luiz. Desenvolvedor com base principal em{" "}
              <strong>Python</strong>, <strong>Django</strong> e{" "}
              <strong>TypeScript</strong>. Meu foco é o <strong>Fullstack</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalho criando soluções web completas, desde o backend robusto
              até interfaces modernas e responsivas. Tenho experiência em
              desenvolvimento de sistemas web, APIs RESTful, e aplicações
              fullstack.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
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

