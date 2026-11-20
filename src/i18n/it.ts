// Testi italiani: SITE-SPEC.md, sezioni 4 e 5. È la forma di riferimento per en.ts.

export const it = {
  meta: {
    home: {
      title: 'Claudio Giasi · AI Full-Stack Developer a Napoli',
      description:
        'Sviluppatore junior a Napoli: React e TypeScript nel frontend, Java e Spring Boot nel backend. Progetti, competenze e contatti.',
    },
    privacy: {
      title: 'Privacy · Claudio Giasi',
    },
  },
  nav: {
    story: 'Storia',
    projects: 'Progetti',
    skills: 'Competenze',
    contact: 'Contatti',
  },
  skipLink: 'Salta al contenuto',
  menu: {
    open: 'Apri il menu',
    close: 'Chiudi il menu',
  },
  cta: {
    write: 'Scrivimi',
    projects: 'Guarda i progetti',
  },
  hero: {
    caption: 'AI FULL-STACK DEVELOPER · NAPOLI',
    sub: 'Da personal trainer a sviluppatore',
    bubble:
      "Costruisco interfacce pulite e funzionali in React e TypeScript, le collego ad API in Java e Spring Boot, e ci aggiungo l'AI quando serve.",
    seeking:
      'Cerco un ruolo da sviluppatore junior, preferibilmente frontend, anche full-stack o backend. In sede a Napoli, ibrido o da remoto.',
    issue: 'NUMERO 1 · 2026',
    portraitAlt: 'Ritratto di Claudio Giasi in stile fumetto',
  },
  chapter: {
    one: 'CAPITOLO 1',
    two: 'CAPITOLO 2',
    three: 'CAPITOLO 3',
    last: 'ULTIMO CAPITOLO',
  },
  story: {
    title: 'From reps to repos',
    intro:
      "Nello sviluppo porto quello che mi ha insegnato l'allenamento: progredire un passo alla volta, costanza e l'abitudine di ascoltare le persone prima di costruire qualcosa per loro.",
    panels: [
      {
        caption: 'PRIMA',
        title: 'Personal trainer e coach di calisthenics',
        text: 'Personal trainer e coach di calisthenics, con una laurea in Scienze Motorie.',
      },
      {
        caption: 'IL PASSAGGIO',
        title: 'EPICODE',
        text: "Nel 2026 mi sono diplomato come AI Full-Stack Developer all'EPICODE Institute of Technology.",
      },
      {
        caption: 'OGGI',
        title: 'Sviluppatore junior',
        text: 'Cerco il primo ruolo da sviluppatore junior, dove lavorare su codice in produzione e continuare a imparare.',
      },
    ],
  },
  projects: {
    title: 'Progetti',
    intro: 'Sei progetti, tutti con il codice pubblico su GitHub.',
    code: 'Codice',
    demo: 'Demo online',
    newTab: '(si apre in una nuova scheda)',
    hostingNote: 'Hosting gratuito: il primo caricamento può richiedere fino a un minuto.',
    items: {
      quackfit: {
        caption: 'PROGETTO FINALE EPICODE',
        description:
          "App mobile first per imparare la teoria del fitness in stile Duolingo: lezioni brevi, streak, resoconto di ogni tentativo e pannello admin. Il punto d'incontro tra le mie due carriere.",
        alts: [
          'Percorso con la prima lezione completata',
          'Domanda di abbinamento in corso',
          'Resoconto di una lezione completata con Coach Quack',
        ],
      },
      linkedinClone: {
        caption: 'PROGETTO DI GRUPPO',
        description:
          'Progetto di gruppo con 5 sviluppatori: social network con notifiche in tempo reale, chat con IA e temi. Ho curato la migrazione su Firebase.',
        alts: ['Feed del LinkedIn Clone con post e notifiche'],
      },
      baldChat: {
        caption: 'TEMPO REALE + IA',
        description:
          "Chat uno a uno in tempo reale via WebSocket, con conferme di lettura e risposte suggerite dall'IA.",
        alts: ["Risposta suggerita dall'IA nel campo del messaggio"],
      },
      libraryManager: {
        caption: 'FULL-STACK',
        description:
          "Catalogo di una biblioteca basato su Open Library, con la disponibilità delle copie in tempo reale e un'API REST per libri, generi e prestiti.",
        alts: ['Catalogo con i badge di disponibilità delle copie'],
      },
      luxuryCarShowroom: {
        caption: 'FULL-STACK',
        description:
          'Catalogo auto con verifica email, preferiti con avvisi di calo prezzo e pannello admin con decodifica del VIN.',
        alts: ['Catalogo delle auto con filtri'],
      },
      socialNetworkApi: {
        caption: 'SOLO BACKEND',
        description:
          'API REST con autenticazione JWT stateless e permessi basati su ruoli e proprietà della risorsa.',
        alts: ['Copertina del progetto Social Network API'],
      },
    },
  },
  skills: {
    title: 'Competenze',
    intro: 'Gli strumenti che uso nei progetti qui sopra.',
    favourite: 'PREFERITO',
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
          'REST API',
          'WebSocket/STOMP',
        ],
      },
      {
        title: 'Dati e AI',
        items: [
          'PostgreSQL',
          'Firebase (Auth, Firestore)',
          'integrazione LLM (OpenRouter, Groq)',
          'OCR',
          'API REST di terze parti',
        ],
      },
      {
        title: 'Test e strumenti',
        items: [
          'Playwright',
          'Vitest',
          'JUnit',
          'Git e GitHub',
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
    title: 'Facciamo due chiacchiere?',
    bubble:
      'Scrivimi per email o su LinkedIn. Per un colloquio sono disponibile a Napoli o in videochiamata.',
  },
  form: {
    title: 'Scrivimi da qui',
    labels: {
      name: 'Nome e cognome',
      email: 'La tua email',
      company: 'Azienda (facoltativo)',
      message: 'Messaggio',
    },
    placeholder: 'Raccontami della posizione. Se ti serve il CV, chiedimelo qui e te lo mando.',
    submit: 'Invia messaggio',
    sending: 'Invio in corso…',
    privacy: 'Uso i dati che inserisci solo per risponderti. Non li salvo e non li condivido.',
    success: 'Messaggio arrivato! Ti rispondo appena posso.',
    error:
      'Non sono riuscito a inviare il messaggio. Riprova, oppure scrivimi direttamente a c.giasi97@gmail.com.',
    errors: {
      name: 'Scrivi il tuo nome.',
      email: 'Scrivi un indirizzo email valido, ad esempio nome@azienda.it.',
      message: 'Il messaggio deve avere almeno 20 caratteri.',
    },
    subject: 'Portfolio: messaggio da {name}',
  },
  footer: {
    tagline: 'Claudio Giasi · AI Full-Stack Developer a Napoli',
  },
  notFound: {
    text: 'Questa pagina non esiste.',
    back: 'Torna alla home',
  },
  noscript:
    'Questo sito funziona meglio con JavaScript attivo. Puoi scrivermi a c.giasi97@gmail.com.',
}

export type Messages = typeof it
