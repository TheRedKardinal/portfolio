import { Seo } from '../components/layout/Seo.tsx'
import { useLang } from '../i18n/useLang.ts'
import styles from './Placeholder.module.css'

// Il testo completo dell'informativa arriva nel task 10.
export function Privacy() {
  const { t } = useLang()

  return (
    <main id="main" className={styles.page}>
      <Seo page="privacy" />
      <h1>{t.meta.privacy.title}</h1>
    </main>
  )
}
