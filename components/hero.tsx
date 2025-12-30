"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 md:pt-0"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {t.hero.subtitle}
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.hero.tech}
            </p>
          </div>

          <p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.hero.description }}
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto"
            >
              {t.hero.viewProjects}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto"
            >
              {t.hero.getInTouch}
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Link
              href="https://github.com/Jorgelzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jorge-luiz-lima-de-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:Jorgeluiz2027@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="tel:+5541998028345"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </div>

          <div className="pt-8">
            <button
              onClick={() => scrollToSection("#about")}
              className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

