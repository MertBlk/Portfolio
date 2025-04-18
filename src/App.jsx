import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StarBackground from './components/StarBackground' // StarBackground'u tekrar import et

function App() {
  return (
    <>
      <StarBackground /> {/* StarBackground'u tekrar buraya ekle */}
      <div style={{ 
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh'
      }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App