import { useEffect } from 'react'
import type { Page } from '../../content/site.ts'
import { pageHead } from '../../i18n/meta.ts'
import { useLang } from '../../i18n/useLang.ts'

// Aggiorna i tag già presenti nell'HTML statico generato dopo la build.
// Non ne aggiunge: i social leggono quelli statici, questi servono a chi naviga.
export function Seo({ page, title }: { page: Page; title?: string }) {
  const { lang } = useLang()

  useEffect(() => {
    const head = pageHead(lang, page)
    const set = (selector: string, attr: string, value: string) =>
      document.head.querySelector(selector)?.setAttribute(attr, value)

    document.title = title ?? head.title
    set('meta[name="description"]', 'content', head.description)
    set('link[rel="canonical"]', 'href', head.url)
    set('meta[property="og:title"]', 'content', title ?? head.title)
    set('meta[property="og:description"]', 'content', head.description)
    set('meta[property="og:url"]', 'content', head.url)
    set('meta[property="og:locale"]', 'content', head.locale)
    for (const alt of head.alternates) {
      set(`link[rel="alternate"][hreflang="${alt.hreflang}"]`, 'href', alt.href)
    }
  }, [lang, page, title])

  return null
}
