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
      titleWithRole: "Jorge Luiz - Desenvolvedor Backend & Full-Stack",
      subtitle: "Desenvolvedor Fullstack",
      dba: "DBA",
      tech: "Python, Django, TypeScript & DBA",
      description:
        "Desenvolvedor com base principal em <strong>Python</strong>, <strong>Django</strong> e <strong>TypeScript</strong>. Meus focos são <strong>Fullstack</strong> e <strong>DBA</strong> (Administração de Banco de Dados).",
      viewProjects: "Ver Projetos",
      getInTouch: "Entre em Contato",
      connectCTA: "Conecte-se comigo para oportunidades profissionais:",
    },
    about: {
      title: "Sobre Mim",
      description1:
        "Olá, eu sou o Jorge Luiz. Desenvolvedor Backend e Full-Stack especializado em Python, Django, TypeScript, SQL e administração de bancos de dados. Com experiência prática em desenvolvimento de sistemas web escaláveis, APIs RESTful e aplicações fullstack modernas.",
      description2:
        "Minha expertise principal está no desenvolvimento backend com Python e Django, criando APIs robustas, sistemas de autenticação, integrações com bancos de dados relacionais (PostgreSQL, MySQL) e otimização de performance. Trabalho também com tecnologias modernas como Remix e Next.js para desenvolvimento fullstack, combinando eficiência no backend com interfaces responsivas e performáticas.",
      description3:
        "Como DBA, tenho experiência em modelagem de dados, otimização de queries SQL, gestão de índices, backup e recuperação de dados. Desenvolvo soluções completas desde a arquitetura do banco de dados até a implementação de APIs e interfaces de usuário, sempre priorizando código limpo, testes e boas práticas de desenvolvimento.",
      techStack: "Tech Stack",
      interests: "Interesses",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Alguns dos projetos em destaque que desenvolvi",
      viewCode: "Ver Código",
      technologiesLabel: "Tecnologias Utilizadas",
      projects: [
        {
          title: "OrganizaAí (5S)",
          description:
            "Sistema web para auditoria 5S em empresas. Desenvolvido com Django no backend e React no frontend, oferecendo uma solução completa para gestão e auditoria de processos 5S.",
          detailedDescription:
            "Sistema completo de gestão e auditoria 5S desenvolvido com Django REST Framework no backend e React no frontend. O projeto implementa autenticação JWT, gerenciamento de usuários e permissões, CRUD completo para auditorias, relatórios em PDF, e dashboard com métricas em tempo real. Utiliza PostgreSQL como banco de dados principal, com otimizações de queries e índices para performance. A API RESTful segue padrões REST e inclui validação de dados, tratamento de erros e documentação. O frontend React utiliza hooks customizados, gerenciamento de estado e componentes reutilizáveis para uma experiência de usuário fluida e responsiva.",
          technologies: "Django, React, Python, PostgreSQL, REST API, JWT Authentication",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      subtitle:
        "Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato!",
      cta: "Disponível para oportunidades em Backend, Full-Stack e DBA. Vamos conversar sobre como posso contribuir para seu time.",
      email: "Email",
      phone: "Telefone",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Enviar Email",
      callNow: "Ligar Agora",
      viewProfile: "Ver Perfil",
      connectLinkedIn: "Conectar no LinkedIn",
      viewGitHub: "Ver Repositórios",
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
      titleWithRole: "Jorge Luiz - Backend & Full-Stack Developer",
      subtitle: "Fullstack Developer",
      dba: "DBA",
      tech: "Python, Django, TypeScript & DBA",
      description:
        "Developer with a main focus on Python, Django and TypeScript. My focuses are Fullstack and DBA (Database Administration).",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
      connectCTA: "Connect with me for professional opportunities:",
    },
    about: {
      title: "About Me",
      description1:
        "Hello, I'm Jorge Luiz. Backend and Full-Stack Developer specialized in Python, Django, TypeScript, SQL, and database administration. With practical experience in developing scalable web systems, RESTful APIs, and modern fullstack applications.",
      description2:
        "My main expertise is in backend development with Python and Django, creating robust APIs, authentication systems, integrations with relational databases (PostgreSQL, MySQL), and performance optimization. I also work with modern technologies like Remix and Next.js for fullstack development, combining backend efficiency with responsive and performant interfaces.",
      description3:
        "As a DBA, I have experience in data modeling, SQL query optimization, index management, backup and data recovery. I develop complete solutions from database architecture to API implementation and user interfaces, always prioritizing clean code, testing, and development best practices.",
      techStack: "Tech Stack",
      interests: "Interests",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Some of the featured projects I've developed",
      viewCode: "View Code",
      technologiesLabel: "Technologies Used",
      projects: [
        {
          title: "OrganizaAí (5S)",
          description:
            "Web system for 5S auditing in companies. Developed with Django on the backend and React on the frontend, offering a complete solution for 5S process management and auditing.",
          detailedDescription:
            "Complete 5S management and auditing system developed with Django REST Framework on the backend and React on the frontend. The project implements JWT authentication, user and permission management, complete CRUD for audits, PDF reports, and a real-time metrics dashboard. Uses PostgreSQL as the main database, with query optimizations and indexes for performance. The RESTful API follows REST standards and includes data validation, error handling, and documentation. The React frontend uses custom hooks, state management, and reusable components for a fluid and responsive user experience.",
          technologies: "Django, React, Python, PostgreSQL, REST API, JWT Authentication",
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I'm always open to new opportunities and interesting projects. Get in touch!",
      cta: "Available for Backend, Full-Stack, and DBA opportunities. Let's talk about how I can contribute to your team.",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      sendEmail: "Send Email",
      callNow: "Call Now",
      viewProfile: "View Profile",
      connectLinkedIn: "Connect on LinkedIn",
      viewGitHub: "View Repositories",
    },
    footer: {
      copyright: "© {year} Jorge Luiz. All rights reserved.",
    },
  },
} as const

export type Translations = typeof translations.pt

