// Testi inglesi: SITE-SPEC.md, sezione 5. Nessun testo inglese che non stia lì.

import type { Messages } from './it.ts'

export const en: Messages = {
  meta: {
    home: {
      title: 'Claudio Giasi · AI Full-Stack Developer in Naples',
      description:
        'Junior developer in Naples, Italy: React and TypeScript on the frontend, Java and Spring Boot on the backend. Projects, skills and contacts.',
    },
    privacy: {
      title: 'Privacy · Claudio Giasi',
    },
  },
  nav: {
    story: 'Story',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  skipLink: 'Skip to content',
  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  cta: {
    write: 'Get in touch',
    projects: 'See my projects',
  },
  hero: {
    caption: 'AI FULL-STACK DEVELOPER · NAPLES',
    sub: 'From personal trainer to developer',
    bubble:
      'I build clean, functional interfaces in React and TypeScript, connect them to Java and Spring Boot APIs, and add AI when an app needs it.',
    seeking:
      "I'm looking for a junior developer role, preferably frontend, but also full-stack or backend. On-site in Naples, hybrid or remote.",
    issue: 'ISSUE #1 · 2026',
    portraitAlt: 'Portrait of Claudio Giasi in comic style',
  },
  chapter: {
    one: 'CHAPTER 1',
    two: 'CHAPTER 2',
    three: 'CHAPTER 3',
    last: 'LAST CHAPTER',
  },
  story: {
    title: 'From reps to repos',
    intro:
      'I bring to software what training taught me: progress one step at a time, consistency and the habit of listening to people before building something for them.',
    panels: [
      {
        caption: 'BEFORE',
        title: 'Personal trainer and calisthenics coach',
        text: 'Personal trainer and calisthenics coach, with a degree in Sports Science.',
      },
      {
        caption: 'THE SWITCH',
        title: 'EPICODE',
        text: 'In 2026 I graduated as an AI Full-Stack Developer at EPICODE Institute of Technology.',
      },
      {
        caption: 'TODAY',
        title: 'Junior developer',
        text: "I'm looking for my first junior developer role, working on production code and keeping on learning.",
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro: 'Six projects, all with public code on GitHub.',
    code: 'Code',
    demo: 'Live demo',
    newTab: '(opens in a new tab)',
    hostingNote: 'Free hosting: the first load may take up to a minute.',
    items: {
      quackfit: {
        caption: 'EPICODE FINAL PROJECT',
        description:
          'Mobile-first app to learn fitness theory, Duolingo-style: short lessons, streaks, a summary of every attempt and an admin panel. Where my two careers meet.',
        alts: [
          'Learning path with the first lesson completed',
          'Matching question in progress',
          'Summary of a completed lesson with Coach Quack',
        ],
      },
      linkedinClone: {
        caption: 'TEAM PROJECT',
        description:
          'Team project with 5 developers: a social network with real-time notifications, AI chat and themes. I led the migration to Firebase.',
        alts: ['LinkedIn Clone feed with posts and notifications'],
      },
      baldChat: {
        caption: 'REAL TIME + AI',
        description:
          'Real-time one-to-one chat over WebSocket, with read receipts and AI-suggested replies.',
        alts: ['AI-suggested reply in the message box'],
      },
      libraryManager: {
        caption: 'FULL-STACK',
        description:
          'Library catalog powered by Open Library, with live availability of copies and a REST API for books, genres and loans.',
        alts: ['Catalog with copy availability badges'],
      },
      luxuryCarShowroom: {
        caption: 'FULL-STACK',
        description:
          'Car catalog with email verification, favourites with price-drop alerts and an admin panel with VIN decoding.',
        alts: ['Car catalog with filters'],
      },
      socialNetworkApi: {
        caption: 'BACKEND ONLY',
        description:
          'REST API with stateless JWT authentication and permissions based on roles and resource ownership.',
        alts: ['Cover of the Social Network API project'],
      },
    },
  },
  skills: {
    title: 'Skills',
    intro: 'The tools I use in the projects above.',
    favourite: 'FAVOURITE',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'TypeScript', 'Redux Toolkit', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Bootstrap'],
      },
      {
        title: 'Backend',
        items: [
          'Java',
          'Spring Boot',
          'Spring Security (JWT)',
          'JPA/Hibernate',
          'REST APIs',
          'WebSocket/STOMP',
        ],
      },
      {
        title: 'Data and AI',
        items: [
          'PostgreSQL',
          'Firebase (Auth, Firestore)',
          'LLM integration (OpenRouter, Groq)',
          'OCR',
          'third-party REST APIs',
        ],
      },
      {
        title: 'Testing and tools',
        items: [
          'Playwright',
          'Vitest',
          'JUnit',
          'Git and GitHub',
          'Maven',
          'Vite',
          'Postman',
          'Docker',
          'Render',
        ],
      },
    ],
  },
  contact: {
    title: "Let's talk?",
    bubble:
      "Email me or message me on LinkedIn. For an interview I'm available in Naples or by video call.",
  },
  form: {
    title: 'Write to me here',
    labels: {
      name: 'Full name',
      email: 'Your email',
      company: 'Company (optional)',
      message: 'Message',
    },
    placeholder: "Tell me about the role. If you need my CV, ask here and I'll send it.",
    submit: 'Send message',
    sending: 'Sending…',
    privacy: "I only use the data you enter to reply to you. I don't store or share it.",
    success: "Got it! I'll get back to you soon.",
    error:
      "I couldn't send your message. Please try again, or email me directly at c.giasi97@gmail.com.",
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address, e.g. name@company.com.',
      message: 'Your message needs at least 20 characters.',
    },
    subject: 'Portfolio: message from {name}',
  },
  footer: {
    tagline: 'Claudio Giasi · AI Full-Stack Developer in Naples',
  },
  notFound: {
    text: "This page doesn't exist.",
    back: 'Back to home',
  },
  noscript: 'This site works best with JavaScript enabled. You can email me at c.giasi97@gmail.com.',
}
