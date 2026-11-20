// Indirizzo e pagine del sito (SITE-SPEC.md, sezioni 3, 5.1 e 7.5).

export const SITE_URL = 'https://claudiogiasi.vercel.app'

export const EMAIL = 'c.giasi97@gmail.com'

export const LANGS = ['it', 'en'] as const
export type Lang = (typeof LANGS)[number]

export const PAGES = ['home', 'privacy'] as const
export type Page = (typeof PAGES)[number]

// Indirizzi canonici, senza barra finale.
export function pagePath(lang: Lang, page: Page): string {
  const prefix = lang === 'en' ? '/en' : ''
  if (page === 'home') return prefix || '/'
  return `${prefix}/${page}`
}

// File HTML generato dopo la build per ogni pagina (vedi scripts/pagine.ts).
export function pageFile(lang: Lang, page: Page): string {
  const path = pagePath(lang, page)
  return path === '/' ? 'index.html' : `${path.slice(1)}.html`
}
