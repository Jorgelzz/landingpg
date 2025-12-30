"use client";

import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { PDFModal } from "@/components/pdf-modal";

export function Navigation() {
  const { t, language } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

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
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container w-full mx-auto px-4 py-4">
        <div className="flex justify-end gap-8">
          {navItems.map((item, index) => {
            const commonClassName = cn(
              "text-xl font-bold transition-colors duration-300 text-blue-900",
              isActive ? "hover:text-primary cursor-pointer" : "hover:text-secondary-foreground"
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

            // Resume link - open modal instead of navigating
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setIsPdfModalOpen(true);
                }}
                className={commonClassName}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      <PDFModal
        open={isPdfModalOpen}
        onOpenChange={setIsPdfModalOpen}
        pdfUrl={language === "pt" ? "/cvs/curriculo.pdf" : "/cvs/resume.pdf"}
        title={t.nav.resume}
      />
    </div>
  );
}
