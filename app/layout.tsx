import type { Metadata } from "next";
import { Inter, Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Luiz - Desenvolvedor Backend & Full-Stack | Python, Django, TypeScript",
  description: "Desenvolvedor Backend e Full-Stack especializado em Python, Django, SQL, Remix e Next.js. DBA com experiência em PostgreSQL e MySQL. Portfólio profissional para recrutadores e empresas.",
  keywords: [
    "Jorge Luiz",
    "Desenvolvedor Backend",
    "Full-Stack Developer",
    "Python Developer",
    "Django Developer",
    "TypeScript Developer",
    "SQL Developer",
    "DBA",
    "PostgreSQL",
    "MySQL",
    "Remix",
    "Next.js",
    "React",
    "Backend Engineer",
    "Fullstack Engineer",
    "Web Development",
    "API Development",
    "Database Administration",
    "Portfolio",
    "Desenvolvedor Python",
    "Desenvolvedor Django",
  ],
  authors: [{ name: "Jorge Luiz" }],
  creator: "Jorge Luiz",
  openGraph: {
    title: "Jorge Luiz - Desenvolvedor Backend & Full-Stack | Python, Django, TypeScript",
    description: "Desenvolvedor Backend e Full-Stack especializado em Python, Django, SQL, Remix e Next.js. DBA com experiência em PostgreSQL e MySQL. Portfólio profissional para recrutadores.",
    type: "website",
    locale: "pt_BR",
    siteName: "Jorge Luiz - Portfolio",
    url: "https://jorgeluiz.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jorge Luiz - Desenvolvedor Backend & Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Luiz - Desenvolvedor Backend & Full-Stack",
    description: "Especializado em Python, Django, SQL, Remix e Next.js. DBA com experiência em PostgreSQL e MySQL.",
    creator: "@jorgeluiz",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://jorgeluiz.dev",
  },
};


  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
