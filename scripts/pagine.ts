// Un file HTML per pagina, con lang, metadati e <noscript> nella lingua giusta
// (SITE-SPEC.md, sezioni 7.1 e 7.5). I social non eseguono JavaScript:
// i tag devono essere già nell'HTML.

import type { Plugin } from 'vite'
import { LANGS, PAGES, pageFile, type Lang, type Page } from '../src/content/site.ts'
import { headTags, noscriptTag, pageHead } from '../src/i18n/meta.ts'

const HEAD = /<!--head-->[\s\S]*?<!--\/head-->/
const NOSCRIPT = /<!--noscript-->[\s\S]*?<!--\/noscript-->/
const HTML_LANG = /<html lang="[^"]*">/

// Riempie i segnaposti di index.html. I segnaposti restano, così la stessa
// pagina già compilata può essere riempita di nuovo per un'altra lingua.
export function fillPage(html: string, lang: Lang, page: Page): string {
  for (const marker of [HEAD, NOSCRIPT, HTML_LANG]) {
    if (!marker.test(html)) throw new Error(`index.html: segnaposto mancante ${marker}`)
  }
  const head = pageHead(lang, page)
  return html
    .replace(HTML_LANG, `<html lang="${lang}">`)
    .replace(HEAD, `<!--head-->\n    ${headTags(head)}\n    <!--/head-->`)
    .replace(NOSCRIPT, `<!--noscript-->${noscriptTag(head)}<!--/noscript-->`)
}

export function pagine(): Plugin {
  return {
    name: 'portfolio-pagine',
    // Vale per lo sviluppo e per index.html in produzione: home in italiano.
    transformIndexHtml: (html) => fillPage(html, 'it', 'home'),
    generateBundle: {
      // Dopo il plugin HTML di Vite, che aggiunge index.html al bundle.
      order: 'post',
      handler(_options, bundle) {
        const index = bundle['index.html']
        if (!index || index.type !== 'asset') throw new Error('index.html non trovato nella build')
        const html = String(index.source)
        for (const lang of LANGS) {
          for (const page of PAGES) {
            const fileName = pageFile(lang, page)
            if (fileName === 'index.html') continue
            this.emitFile({ type: 'asset', fileName, source: fillPage(html, lang, page) })
          }
        }
      },
    },
  }
}
