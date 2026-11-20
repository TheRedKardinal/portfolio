// @vitest-environment node
import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { fillPage } from './pagine.ts'

const template = readFileSync(new URL('../index.html', import.meta.url), 'utf8')

describe('fillPage', () => {
  it('home inglese: lang, title, canonical, hreflang, Open Graph e noscript', () => {
    const html = fillPage(template, 'en', 'home')
    expect(html).toContain('<html lang="en">')
    expect(html).toContain('<title>Claudio Giasi · AI Full-Stack Developer in Naples</title>')
    expect(html).toContain('<link rel="canonical" href="https://claudiogiasi.vercel.app/en" />')
    expect(html).toContain('hreflang="it" href="https://claudiogiasi.vercel.app/"')
    expect(html).toContain('hreflang="en" href="https://claudiogiasi.vercel.app/en"')
    expect(html).toContain('hreflang="x-default" href="https://claudiogiasi.vercel.app/"')
    expect(html).toContain('<meta property="og:locale" content="en_US" />')
    expect(html).toContain('This site works best with JavaScript enabled.')
    expect(html).toContain('<a href="mailto:c.giasi97@gmail.com">c.giasi97@gmail.com</a>')
  })

  it('privacy italiana: indirizzi senza barra finale', () => {
    const html = fillPage(template, 'it', 'privacy')
    expect(html).toContain('<html lang="it">')
    expect(html).toContain('<title>Privacy · Claudio Giasi</title>')
    expect(html).toContain('<link rel="canonical" href="https://claudiogiasi.vercel.app/privacy" />')
    expect(html).toContain('hreflang="en" href="https://claudiogiasi.vercel.app/en/privacy"')
    expect(html).not.toMatch(/vercel\.app\/[^"]*\/"/)
  })

  it('si può riempire di nuovo una pagina già riempita', () => {
    const twice = fillPage(fillPage(template, 'it', 'home'), 'en', 'privacy')
    expect(twice).toBe(fillPage(template, 'en', 'privacy'))
    expect(twice.match(/<title>/g)).toHaveLength(1)
  })

  it('segnala un segnaposto mancante', () => {
    expect(() => fillPage('<html lang="it"></html>', 'it', 'home')).toThrow('segnaposto mancante')
  })
})
