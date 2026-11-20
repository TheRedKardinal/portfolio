import { BrowserRouter, Route, Routes } from 'react-router'
import { LangLayout } from './components/layout/LangLayout.tsx'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { Privacy } from './pages/Privacy.tsx'

// Percorsi della sezione 3 della spec: italiano senza prefisso, inglese sotto /en.
export function AppRoutes() {
  const pages = (
    <>
      <Route index element={<Home />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </>
  )

  return (
    <Routes>
      <Route element={<LangLayout lang="it" />}>{pages}</Route>
      <Route path="en" element={<LangLayout lang="en" />}>
        {pages}
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
