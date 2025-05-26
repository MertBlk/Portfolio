import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './Context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import StarBackground from './components/StarBackground';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <LanguageProvider>
      <StarBackground />
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <div>
                <section id="hero" className="section">
                  <div className="section-content">
                    <Hero />
                  </div>
                </section>
                <section id="about" className="section">
                  <div className="section-content">
                    <About />
                  </div>
                </section>
                <section id="projects" className="section">
                  <div className="section-content">
                    <Projects />
                  </div>
                </section>
                <section id="contact" className="section">
                  <div className="section-content">
                    <Contact />
                  </div>
                </section>
              </div>
            </>
          } />
          <Route path="project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;