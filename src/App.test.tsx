import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { afterEach, describe, expect, it } from 'vitest'
import { AppRoutes } from './App.tsx'

afterEach(cleanup)

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe('percorsi', () => {
  it.each([
    ['/', 'it', 'Da personal trainer a sviluppatore'],
    ['/en', 'en', 'From personal trainer to developer'],
    ['/privacy', 'it', 'Privacy · Claudio Giasi'],
    ['/en/privacy', 'en', 'Privacy · Claudio Giasi'],
  ])('%s risponde in %s', (path, lang, text) => {
    renderAt(path)
    expect(document.documentElement.lang).toBe(lang)
    expect(screen.getByText(text)).toBeTruthy()
  })

  it.each([
    ['/pagina-inesistente', 'it', 'Questa pagina non esiste.'],
    ['/en/missing', 'en', "This page doesn't exist."],
  ])('%s mostra la 404 in %s', (path, lang, text) => {
    renderAt(path)
    expect(document.documentElement.lang).toBe(lang)
    expect(screen.getByRole('heading', { name: text })).toBeTruthy()
  })

  it('il selettore provvisorio porta alla stessa pagina nell\'altra lingua', () => {
    renderAt('/en')
    expect(screen.getByRole('link', { name: 'IT' }).getAttribute('href')).toBe('/')
    expect(screen.getByRole('link', { name: 'EN' }).getAttribute('aria-current')).toBe('page')
  })
})
