import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      menu: {
        file: "File",
        edit: "Edit",
        view: "View",
        window: "Window",
        help: "Help",
        language: "Language",
      },

      terminal: {
        welcome:
          "Welcome to MatheusOS v1.0.0 (Software Engineering Environment).",
        lastLogin: "Last login:",
        typeHelp:
          "Type 'help' to see available commands or click files in the sidebar.",
        commandNotFound: "Command not found:",
        typeHelpHint: "Type 'help' for available commands.",
      },

      commands: {
        help: `Available commands:
  help          Show help
  about         About this portfolio
  projects      List projects
  skills        Show skills
  contact       Contact info
  clear         Clear terminal
  whoami        Display current user`,
        about:
          "Software Engineering student at PUC Minas and Software Development Intern at PRODEMGE.\nFocused on building web applications using Java, Spring Boot and Angular.",
        projects:
          "→ Portfolio Terminal — This portfolio interface\n→ RequestMe — Request management system\n→ ThivorAutomoveis — Vehicle management system\n→ Sobrecho — Full stack web application\n→ Spring Boot API — REST API built with Spring Boot\n→ Hotel Management System — System developed in C using file manipulation\n→ among others",
        skills:
          "Languages: Java, C, JavaScript, TypeScript\nFrameworks: Spring Boot, Angular\nTools: Git, Maven, Docker, SQL, VS Code",
        contact:
          "Email: matheusrgx@gmail.com\nGitHub: github.com/MatheusXavier7\nLinkedIn: linkedin.com/in/matheus-xavier-a428b3281",
        whoami:
          "matheus xavier — Software Engineering Student | PRODEMGE Intern",
      },

      profile: {
        title: "Software Engineering Student | Software Development Intern",
      },

      contact: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",

        emailValue: "matheusrgx@gmail.com",
        githubValue: "@MatheusXavier7",
        linkedinValue: "Connect professionally",
      },

      sidebar: {
        favorites: "FAVORITES",
        projectFiles: "PROJECT FILES",
      },
    },
  },

  pt: {
    translation: {
      menu: {
        file: "Arquivo",
        edit: "Editar",
        view: "Visualizar",
        window: "Janela",
        help: "Ajuda",
        language: "Idioma",
      },

      terminal: {
        welcome:
          "Bem-vindo ao MatheusOS v1.0.0 (Ambiente de Engenharia de Software).",
        lastLogin: "Último login:",
        typeHelp:
          "Digite 'help' para ver os comandos disponíveis ou clique nos arquivos na barra lateral.",
        commandNotFound: "Comando não reconhecido:",
        typeHelpHint: "Digite 'help' para ver os comandos.",
      },

      commands: {
        help: `Comandos disponíveis:
  help          Mostrar ajuda
  about         Sobre o portfólio
  projects      Listar projetos
  skills        Mostrar habilidades
  contact       Contato
  clear         Limpar terminal
  whoami        Mostrar usuário`,
        about:
          "Estudante de Engenharia de Software na PUC Minas e Estagiário de Desenvolvimento de Software na PRODEMGE.\nFocado no desenvolvimento de aplicações web utilizando Java, Spring Boot e Angular.",
        projects:
          "→ Portfolio Terminal — Esta interface de portfólio\n→ RequestMe — Sistema de gerenciamento de solicitações\n→ ThivorAutomoveis — Sistema de gestão de veículos\n→ Sobrecho — Aplicação web full stack\n→ API Spring Boot — API REST desenvolvida com Spring Boot\n→ Sistema de Gerenciamento de Hotel — Sistema em C utilizando manipulação de arquivos\n→ entre outros",
        skills:
          "Linguagens: Java, C, JavaScript, TypeScript\nFrameworks: Spring Boot, Angular\nFerramentas: Git, Maven, Docker, SQL, VS Code",
        contact:
          "Email: matheusrgx@gmail.com\nGitHub: github.com/MatheusXavier7\nLinkedIn: linkedin.com/in/matheus-xavier-a428b3281",
        whoami:
          "matheus xavier — Estudante de Engenharia de Software | Estagiário PRODEMGE",
      },

      profile: {
        title: "Estudante de Engenharia de Software | Estagiário de Desenvolvimento",
      },

      contact: {
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn",

        emailValue: "matheusrgx@gmail.com",
        githubValue: "@MatheusXavier7",
        linkedinValue: "Conectar profissionalmente",
      },

      sidebar: {
        favorites: "FAVORITOS",
        projectFiles: "ARQUIVOS DO PROJETO",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;