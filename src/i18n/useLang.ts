import { createContext, useContext } from 'react'
import { useLocation } from 'react-router'
import type { Lang } from '../content/site.ts'
import { messages } from './index.ts'

// La lingua viene dal ramo di route (/ oppure /en) e passa ai componenti con questo context.
export const LangContext = createContext<Lang>('it')

// Indirizzo della stessa pagina nell'altra lingua, senza barra finale: /privacy ↔ /en/privacy.
export function switchPath(pathname: string, target: Lang): string {
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const rest = trimmed === '/en' ? '' : trimmed.startsWith('/en/') ? trimmed.slice(3) : trimmed
  const page = rest === '/' ? '' : rest
  if (target === 'en') return `/en${page}`
  return page || '/'
}

export function useLang() {
  const lang = useContext(LangContext)
  const { pathname, hash } = useLocation()
  return {
    lang,
    t: messages[lang],
    // Mantiene la sezione corrente (#progetti resta #progetti).
    pathFor: (target: Lang) => switchPath(pathname, target) + hash,
  }
}
