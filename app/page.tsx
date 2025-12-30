"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { Navigation } from "@/components/navigation"


export default function Home() {
  return (
    <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <div className="fixed bottom-4 right-4 grid grid-cols-2 gap-2">
          <div className="flex justify-end">
            <LanguageToggle />
          </div>
          <div className="flex justify-start">
            <ThemeToggle />
          </div>
        </div>
    </main>
  )
}
