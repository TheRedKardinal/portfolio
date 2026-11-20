import { useEffect } from 'react'
import { Outlet } from 'react-router'
import type { Lang } from '../../content/site.ts'
import { LangContext } from '../../i18n/useLang.ts'

export function LangLayout({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext value={lang}>
      <Outlet />
    </LangContext>
  )
}
