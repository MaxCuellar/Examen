import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter.tsx'
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <AppRouter />
      <Toaster />
    </StrictMode>
  </BrowserRouter>
)
