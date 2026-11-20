import { describe, expect, it as test } from 'vitest'
import { en } from './en.ts'
import { format } from './index.ts'
import { it } from './it.ts'

// Confronta due alberi di testi: stesse chiavi, stesse lunghezze degli array, nessun testo vuoto.
function differences(a: unknown, b: unknown, path = ''): string[] {
  if (typeof a === 'string' || typeof b === 'string') {
    if (typeof a !== 'string' || typeof b !== 'string') return [`${path}: tipi diversi`]
    return a.trim() && b.trim() ? [] : [`${path}: testo vuoto`]
  }
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return [`${path}: tipi diversi`]
    if (a.length !== b.length) return [`${path}: ${a.length} elementi in it, ${b.length} in en`]
    return a.flatMap((item, i) => differences(item, b[i], `${path}[${i}]`))
  }
  const objA = a as Record<string, unknown>
  const objB = b as Record<string, unknown>
  const keys = new Set([...Object.keys(objA), ...Object.keys(objB)])
  return [...keys].flatMap((key) => {
    const child = path ? `${path}.${key}` : key
    if (!(key in objA)) return [`${child}: manca in it`]
    if (!(key in objB)) return [`${child}: manca in en`]
    return differences(objA[key], objB[key], child)
  })
}

describe('testi', () => {
  test('it ed en hanno le stesse chiavi e nessun testo vuoto', () => {
    expect(differences(it, en)).toEqual([])
  })

  test('il confronto trova le differenze', () => {
    expect(differences({ a: 'x', b: ['y'] }, { a: '', c: 'z', b: [] })).toEqual([
      'a: testo vuoto',
      'b: 1 elementi in it, 0 in en',
      'c: manca in it',
    ])
  })

  test('format sostituisce i segnaposto e lascia quelli sconosciuti', () => {
    expect(format(it.form.subject, { name: 'Anna' })).toBe('Portfolio: messaggio da Anna')
    expect(format('{a} e {b}', { a: '1' })).toBe('1 e {b}')
  })
})
