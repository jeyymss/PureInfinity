import { useState } from 'react'
import { Navbar } from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import './App.css'
import "./index.css"
import Home from './components/sections/Home'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='min-h-screen transition-opacity duration-700 bg-black text-gray-100'>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
