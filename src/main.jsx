import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/footer.jsx'
import Counter from './components/counter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Home/>
    <App />
    <Footer/>

    <Counter/>
  </StrictMode>,
)
