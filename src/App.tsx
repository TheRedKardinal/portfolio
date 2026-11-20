import styles from './App.module.css'

// Campionario temporaneo del task 2: sparisce nel task 3, quando App diventa il router.

const colors = [
  ['--paper', '#F4EDE0'],
  ['--paper-deep', '#EAE0CE'],
  ['--ink', '#111111'],
  ['--red', '#E63B2E'],
  ['--red-text', '#B8261C'],
  ['--cyan', '#1E88C8'],
  ['--white', '#FFFDF8'],
] as const

const spaces = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const

function App() {
  return (
    <main className={styles.page}>
      <p className={styles.label}>AI FULL-STACK DEVELOPER · NAPOLI</p>
      <h1>Claudio Giasi</h1>
      <p className={styles.sub}>Da personal trainer a sviluppatore</p>

      <section className={styles.block} aria-labelledby="palette">
        <h2 id="palette">Palette</h2>
        <ul className={styles.swatches}>
          {colors.map(([name, hex]) => (
            <li key={name}>
              <span className={styles.swatch} style={{ background: `var(${name})` }} />
              <code>{name}</code> {hex}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-labelledby="tipografia">
        <h2 id="tipografia">From reps to repos</h2>
        <h3>Personal trainer e coach di calisthenics</h3>
        <p className={styles.label}>PRIMA · IL PASSAGGIO · OGGI · PREFERITO</p>
        <p className={styles.accents}>È À Ù Ò Ì · PERCHÉ · CITTÀ · PIÙ · PERÒ · COSÌ</p>
        <p className={styles.body}>
          Nello sviluppo porto quello che mi ha insegnato l'allenamento: progredire un passo alla
          volta, costanza e l'abitudine di ascoltare le persone prima di costruire qualcosa per loro.
        </p>
        <p className={styles.balloon}>
          Costruisco interfacce pulite e funzionali in React e TypeScript, le collego ad API in Java
          e Spring Boot, e ci aggiungo l'AI quando serve.
        </p>
        <p className={styles.redText}>
          Il messaggio deve avere almeno 20 caratteri.
        </p>
        <ul className={styles.chips}>
          <li>React</li>
          <li>TypeScript</li>
          <li>Spring Boot</li>
          <li>PostgreSQL</li>
        </ul>
      </section>

      <section className={styles.block} aria-labelledby="spaziature">
        <h2 id="spaziature">Spaziature</h2>
        <ul className={styles.spaces}>
          {spaces.map((n) => (
            <li key={n}>
              <code>--space-{n}</code>
              <span className={styles.bar} style={{ width: `var(--space-${n})` }} />
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.block} aria-labelledby="pannelli">
        <h2 id="pannelli">Vignette</h2>
        <div className={styles.panels}>
          <div className={styles.panel}>Ombra piena</div>
          <div className={`${styles.panel} ${styles.offset}`}>Ombra fuori registro</div>
          <a className={styles.panel} href="#pannelli">
            Link con focus
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
