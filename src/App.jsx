import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail';
import StarBackground from './components/StarBackground'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StarBackground />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        } />
        <Route path="project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App