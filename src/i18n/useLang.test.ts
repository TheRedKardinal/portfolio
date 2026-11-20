import { describe, expect, it } from 'vitest'
import { switchPath } from './useLang.ts'

describe('switchPath', () => {
  it.each([
    ['/', 'en', '/en'],
    ['/', 'it', '/'],
    ['/en', 'it', '/'],
    ['/en', 'en', '/en'],
    ['/privacy', 'en', '/en/privacy'],
    ['/privacy', 'it', '/privacy'],
    ['/en/privacy', 'it', '/privacy'],
    ['/en/privacy', 'en', '/en/privacy'],
    // Varianti con la barra finale: tornano alla forma canonica.
    ['/en/', 'it', '/'],
    ['/privacy/', 'en', '/en/privacy'],
  ] as const)('%s → %s = %s', (path, target, expected) => {
    expect(switchPath(path, target)).toBe(expected)
  })
})
