import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jorge Luiz - Fullstack Developer",
  description: "Fullstack Developer specializing in Python, Django, and TypeScript. Building modern web applications and solutions.",
  keywords: ["Jorge Luiz", "Fullstack Developer", "Python", "Django", "TypeScript", "React", "Web Development"],
  authors: [{ name: "Jorge Luiz" }],
  openGraph: {
    title: "Jorge Luiz - Fullstack Developer",
    description: "Fullstack Developer specializing in Python, Django, and TypeScript",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <ThemeProvider
            attribute="class" 
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
