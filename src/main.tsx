import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NavigationProvider } from './provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavigationProvider/>
  </StrictMode>,
)
