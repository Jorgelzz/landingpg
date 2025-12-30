import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Jorgeluiz2027@hotmail.com",
    href: "mailto:Jorgeluiz2027@hotmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+55 41 99802-8345",
    href: "tel:+5541998028345",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jorge-luiz-lima-de-oliveira",
    href: "https://www.linkedin.com/in/jorge-luiz-lima-de-oliveira/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Jorgelzz",
    href: "https://github.com/Jorgelzz",
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Get In Touch
            </h2>
            <Separator className="mx-auto w-24" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e projetos interessantes.
              Entre em contato!
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{contact.label}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {contact.value}
                    </CardDescription>
                    <Button variant="outline" asChild className="w-full">
                      <Link
                        href={contact.href}
                        target={contact.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          contact.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {contact.label === "Email" && "Send Email"}
                        {contact.label === "Phone" && "Call Now"}
                        {contact.label === "LinkedIn" && "View Profile"}
                        {contact.label === "GitHub" && "View Profile"}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

