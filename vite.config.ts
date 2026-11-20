import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { pagine } from './scripts/pagine.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pagine()],
  test: {
    environment: 'jsdom',
  },
})
