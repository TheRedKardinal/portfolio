import { Link } from 'react-router'
import { Seo } from '../components/layout/Seo.tsx'
import { pagePath } from '../content/site.ts'
import { useLang } from '../i18n/useLang.ts'
import styles from './Placeholder.module.css'

// Route di riserva per i link interni sbagliati; la 404 vera è public/404.html (task 10).
export function NotFound() {
  const { lang, t } = useLang()

  return (
    <main id="main" className={styles.page}>
      <Seo page="home" title={t.notFound.text} />
      <h1>{t.notFound.text}</h1>
      <Link to={pagePath(lang, 'home')}>{t.notFound.back}</Link>
    </main>
  )
}
