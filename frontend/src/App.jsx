import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import './index.css'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app">
      <ParticlesBackground isDarkMode={isDarkMode} />
      <Navbar scrollY={scrollY} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer className="footer">
        <p>Designed & Built by <span className="accent">Piyush Mittal</span> © 2024</p>
      </footer>
    </div>
  )
}

export default App
