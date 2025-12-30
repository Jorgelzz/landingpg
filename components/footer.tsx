import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-4">
            <Link
              href="https://github.com/Jorgelzz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jorge-luiz-lima-de-oliveira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:Jorgeluiz2027@hotmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
            <Link
              href="tel:+5541998028345"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </Link>
          </div>

          <Separator className="w-24" />

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Jorge Luiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

