"use client"

import * as React from "react"
import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="h-9 w-9 relative"
      aria-label="Toggle language"
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Languages className="h-5 w-5" />
      <span className="absolute -top-0.5 -right-0.5 text-[10px] font-bold bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center">
        {language === "pt" ? "EN" : "PT"}
      </span>
    </Button>
  )
}

