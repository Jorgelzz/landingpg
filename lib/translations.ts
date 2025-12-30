export type Language = "pt" | "en"

export const translations = {
  pt: {
    nav: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      resume: "Currículo",
    },
    hero: {
      title: "Jorge Luiz",
      subtitle: "Desenvolvedor Fullstack",
      tech: "Python, Django & TypeScript",
      description:
        "Desenvolvedor com base principal em <strong>Python</strong>, <strong>Django</strong> e <strong>TypeScript</strong>. Meu foco é o <strong>Fullstack</strong>.",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
    },
    about: {
      title: "Sobre Mim",
      description1:
        "Olá, eu sou o Jorge Luiz. Desenvolvedor com base principal em <strong>Python</strong>, <strong>Django</strong> e <strong>TypeScript</strong>. Meu foco é o <strong>Fullstack</strong>.",
      description2:
        "Trabalho criando soluções web completas, desde o backend robusto até interfaces modernas e responsivas. Tenho experiência em desenvolvimento de sistemas web, APIs RESTful, e aplicações fullstack.",
      techStack: "Tech Stack",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos projetos em destaque que desenvolvi",
      viewCode: "Ver Código",
      projects: [
        {
          title: "OrganizaAí (5S)",
          description:
            "Sistema web para auditoria 5S em empresas. Desenvolvido com Django no backend e React no frontend, oferecendo uma solução completa para gestão e auditoria de processos 5S.",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle:
        "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!",
      email: "Email",
      phone: "Telefone",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Enviar Email",
      callNow: "Ligar Agora",
      viewProfile: "Ver Perfil",
    },
    footer: {
      copyright: "© {year} Jorge Luiz. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      title: "Jorge Luiz",
      subtitle: "Fullstack Developer",
      tech: "Python, Django & TypeScript",
      description:
        "Developer with a main focus on <strong>Python</strong>, <strong>Django</strong>, and <strong>TypeScript</strong>. My focus is <strong>Fullstack</strong>.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },
    about: {
      title: "About Me",
      description1:
        "Hello, I'm Jorge Luiz. Developer with a main focus on <strong>Python</strong>, <strong>Django</strong>, and <strong>TypeScript</strong>. My focus is <strong>Fullstack</strong>.",
      description2:
        "I work creating complete web solutions, from robust backends to modern and responsive interfaces. I have experience in web system development, RESTful APIs, and fullstack applications.",
      techStack: "Tech Stack",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of the featured projects I've developed",
      viewCode: "View Code",
      projects: [
        {
          title: "OrganizaAí (5S)",
          description:
            "Web system for 5S auditing in companies. Developed with Django on the backend and React on the frontend, offering a complete solution for 5S process management and auditing.",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Send Email",
      callNow: "Call Now",
      viewProfile: "View Profile",
    },
    footer: {
      copyright: "© {year} Jorge Luiz. All rights reserved.",
    },
  },
} as const

export type Translations = typeof translations.pt

