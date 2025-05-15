import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './Context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import StarBackground from './components/StarBackground';
import ScrollManager from './components/ScrollManager';
import './App.css';

function App() {
  const location = useLocation();
  const [sections] = useState(['hero', 'about', 'projects', 'contact']);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        const sectionContainer = document.querySelector('.section-container');
        if (sectionContainer) {
          // Hedef bölümün indeksini bulma
          const index = sections.findIndex(section => section === location.state.scrollTo);
          if (index !== -1) {
            sectionContainer.scrollTo({
              top: index * window.innerHeight,
              behavior: 'smooth'
            });
          }
        }
      }
    }
  }, [location, sections]);

  return (
    <LanguageProvider>
      <StarBackground />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div className="section-container">
                <section id="hero" className="section">
                  <div className="section-content">
                    <Hero />
                  </div>
                  <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </section>
                <section id="about" className="section">
                  <div className="section-content">
                    <About />
                  </div>
                  <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </section>
                <section id="projects" className="section">
                  <div className="section-content">
                    <Projects />
                  </div>
                  <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </section>
                <section id="contact" className="section">
                  <div className="section-content">
                    <Contact />
                  </div>
                </section>
              </div>
              <ScrollManager sections={sections} />
            </>
          } />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;