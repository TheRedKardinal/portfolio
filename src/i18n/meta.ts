// Metadati di ogni pagina, usati sia per generare gli HTML statici dopo la build
// sia dal componente Seo durante la navigazione (SITE-SPEC.md, sezioni 5.1, 5.6 e 7.1).

import { EMAIL, LANGS, SITE_URL, pagePath, type Lang, type Page } from '../content/site.ts'
import { messages } from './index.ts'

export type PageHead = {
  lang: Lang
  title: string
  description: string
  url: string
  locale: string
  alternates: { hreflang: string; href: string }[]
  noscript: string
}

const LOCALES: Record<Lang, string> = { it: 'it_IT', en: 'en_US' }

export function pageHead(lang: Lang, page: Page): PageHead {
  const t = messages[lang]
  return {
    lang,
    title: page === 'home' ? t.meta.home.title : t.meta.privacy.title,
    // La spec non prevede una descrizione per la privacy: si usa quella del sito.
    description: t.meta.home.description,
    url: SITE_URL + pagePath(lang, page),
    locale: LOCALES[lang],
    alternates: [
      ...LANGS.map((l) => ({ hreflang: l, href: SITE_URL + pagePath(l, page) })),
      { hreflang: 'x-default', href: SITE_URL + pagePath('it', page) },
    ],
    noscript: t.noscript,
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function headTags(head: PageHead): string {
  const e = escapeHtml
  return [
    `<title>${e(head.title)}</title>`,
    `<meta name="description" content="${e(head.description)}" />`,
    `<link rel="canonical" href="${e(head.url)}" />`,
    ...head.alternates.map(
      (a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${e(a.href)}" />`,
    ),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${e(head.title)}" />`,
    `<meta property="og:description" content="${e(head.description)}" />`,
    `<meta property="og:url" content="${e(head.url)}" />`,
    `<meta property="og:locale" content="${head.locale}" />`,
  ].join('\n    ')
}

export function noscriptTag(head: PageHead): string {
  const link = `<a href="mailto:${EMAIL}">${EMAIL}</a>`
  return `<noscript><p>${escapeHtml(head.noscript).replace(EMAIL, link)}</p></noscript>`
}
