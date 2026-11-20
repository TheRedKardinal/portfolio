import { Link } from 'react-router'
import { Seo } from '../components/layout/Seo.tsx'
import { LANGS } from '../content/site.ts'
import { useLang } from '../i18n/useLang.ts'
import styles from './Placeholder.module.css'

export function Home() {
  const { lang, t, pathFor } = useLang()

  return (
    <main id="main" className={styles.page}>
      <Seo page="home" />
      <h1>Claudio Giasi</h1>
      <p className={styles.sub}>{t.hero.sub}</p>
      {/* Selettore provvisorio: quello vero arriva nell'header del task 5. */}
      <nav className={styles.langs}>
        {LANGS.map((l) => (
          <Link
            key={l}
            to={pathFor(l)}
            hrefLang={l}
            aria-current={l === lang ? 'page' : undefined}
          >
            {l.toUpperCase()}
          </Link>
        ))}
      </nav>
    </main>
  )
}
