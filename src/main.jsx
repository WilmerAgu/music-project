import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './assets/componentes/Header'
import Content from './assets/componentes/Content'
import Footer from './assets/componentes/Footer'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Content />
    <Footer />
  </StrictMode>,
)
