"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const { t, language } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.home, href: "#home", isAnchor: true },
    { label: t.nav.about, href: "#about", isAnchor: true },
    { label: t.nav.projects, href: "#projects", isAnchor: true },
    { label: t.nav.contact, href: "#contact", isAnchor: true },
    {
      label: t.nav.resume,
      href: language === "pt" ? "/cvs/curriculo.pdf" : "/cvs/resume.pdf",
      isAnchor: false,
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1); // Remove o #
      const element = document.getElementById(id);
      
      if (element) {
        // Calcula a altura da navbar dinamicamente
        const navbar = document.querySelector('[class*="fixed"][class*="top-0"]');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = Math.max(0, elementPosition - navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Atualiza a URL sem recarregar a página
        window.history.pushState(null, "", href);
        
        // Fecha o menu mobile após clicar
        setIsMobileMenuOpen(false);
      }
    }
  };

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    // Trigger download instead of opening modal
    const pdfUrl = language === "pt" ? "/cvs/curriculo.pdf" : "/cvs/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = language === "pt" ? "curriculo.pdf" : "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container w-full mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Nome com efeito tech */}
            <div className="flex items-center">
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(e as any, "#home");
                }}
                className="group flex items-center font-mono text-lg font-semibold hover:text-primary transition-colors duration-300"
              >
                <span className="text-primary/80 group-hover:text-primary transition-colors">&lt;</span>
                <span className="mx-1.5 text-foreground group-hover:text-primary transition-colors">Jorge</span>
                <span className="text-primary/80 group-hover:text-primary transition-colors">/&gt;</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex justify-end gap-4 lg:gap-8 w-full">
              {navItems.map((item, index) => {
                const commonClassName = cn(
                  "text-base lg:text-xl font-semibold transition-all duration-300",
                  "text-foreground/80 hover:text-primary hover:scale-105",
                  "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5",
                  "after:bg-primary after:transition-all after:duration-300",
                  "hover:after:w-full"
                );
                
                if (item.isAnchor) {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={commonClassName}
                      onMouseEnter={() => setIsActive(true)}
                      onMouseLeave={() => setIsActive(false)}
                    >
                      {item.label}
                    </a>
                  );
                }

                // Resume link - download instead of opening modal
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={handleResumeClick}
                    className={commonClassName}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => setIsActive(false)}
                    download
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={cn(
            "md:hidden border-t border-border bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item, index) => {
              const mobileClassName = cn(
                "block text-lg font-semibold transition-all duration-300",
                "text-foreground/80 hover:text-primary py-2",
                "relative after:absolute after:bottom-2 after:left-0 after:w-0 after:h-0.5",
                "after:bg-primary after:transition-all after:duration-300",
                "hover:after:w-full"
              );
              
              if (item.isAnchor) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={mobileClassName}
                  >
                    {item.label}
                  </a>
                );
              }

              // Resume link - download instead of opening modal
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleResumeClick}
                  className={cn(mobileClassName, "w-full text-left")}
                  download
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
