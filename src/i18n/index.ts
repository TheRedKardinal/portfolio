import type { Lang } from '../content/site.ts'
import { en } from './en.ts'
import { it, type Messages } from './it.ts'

export type { Messages }

export const messages: Record<Lang, Messages> = { it, en }

// Sostituisce i segnaposto {chiave} con i valori dati.
export function format(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}
