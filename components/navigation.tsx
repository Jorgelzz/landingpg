"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { Separator } from "@/components/ui/separator"

export function Navigation() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)

  const resumeHref = language === "pt" ? "/cvs/curriculo.pdf" : "/cvs/resume.pdf"

  const navItems = [
    { label: t.nav.home, href: "#home", isAnchor: true },
    { label: t.nav.about, href: "#about", isAnchor: true },
    { label: t.nav.projects, href: "#projects", isAnchor: true },
    { label: t.nav.contact, href: "#contact", isAnchor: true },
    { label: t.nav.resume, href: resumeHref, isAnchor: false },
  ]

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsOpen(false)
    if (isAnchor) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    // Se não for anchor, o link normal do <a> vai funcionar
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 flex-col border-r border-border bg-background/80 backdrop-blur-md z-50">
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-col gap-6 flex-1 mt-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.isAnchor) {
                    e.preventDefault()
                    handleNavClick(item.href, item.isAnchor)
                  }
                }}
                target={!item.isAnchor ? "_blank" : undefined}
                rel={!item.isAnchor ? "noopener noreferrer" : undefined}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          <Separator className="my-4" />

          <div className="flex items-center gap-2 justify-center">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="flex h-16 items-center justify-between px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <aside className="fixed left-0 top-0 h-full w-64 flex-col border-r border-border bg-background z-50 transition-transform duration-300">
              <div className="flex flex-col h-full p-6">
                <div className="flex flex-col gap-4 flex-1 mt-16">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        if (item.isAnchor) {
                          e.preventDefault()
                          handleNavClick(item.href, item.isAnchor)
                        }
                      }}
                      target={!item.isAnchor ? "_blank" : undefined}
                      rel={!item.isAnchor ? "noopener noreferrer" : undefined}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </>
        )}
      </nav>
    </>
  )
}

