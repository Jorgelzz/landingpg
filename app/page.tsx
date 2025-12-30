"use client"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"


export default function Home() {
  return (
    <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </main>
  )
}
