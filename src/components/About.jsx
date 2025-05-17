import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const About = () => {
  const { language, translations } = useLanguage();
  const skills = [
    "JavaScript", "React", "React Native", "NodeJs", "C#", "HTML5", "CSS", "Python", "Git", "Responsive Design", "UI/UX", "Figma", "Firebase", "MySQL", "Bootstrap5"
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Ekran genişliğini izlemek için useEffect
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ekran genişliğine göre paddingTop değerini belirleme
  const getPaddingTop = () => {
    if (windowWidth <= 480) return '450px'; // Daha fazla padding
    if (windowWidth <= 768) return '500px'; // Daha fazla padding
    return '60rem !important'; // Daha fazla padding - Büyük ekranlar için
  };

  // Container için dinamik stil
  const containerStyle = {
    ...styles.container,
    paddingTop: getPaddingTop(),
    justifyContent: 'center', // İçeriği dikey olarak ortalamak için değiştirildi
  };

  return (
    <div style={containerStyle}>
      <h2 style={styles.title}>{translations[language].about.title}</h2>
      <div className="blur-bg" style={styles.content}>
        <div style={styles.textContent}>
          <div style={styles.descriptionContainer}>
            <p style={styles.description}>
              {translations[language].about.description}
            </p>
            <p style={{...styles.description, marginTop: '20px'}}>
              {translations[language].about.description2}
            </p>
          </div>
          
          <div style={styles.skills}>
            <h3 style={styles.skillsTitle}>{translations[language].about.skills}</h3>
            <div style={styles.skillTags}>
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  style={{
                    ...styles.skillTag,
                    ...(hoveredSkill === index ? styles.skillTagHovered : {})
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    // paddingTop artık dinamik olarak atanacak
    paddingBottom: 'var(--section-padding, 20px)',
    paddingLeft: 'var(--section-padding, 20px)',
    paddingRight: 'var(--section-padding, 20px)',
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 1,
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
  title: { 
    color: 'var(--primary-color)',
    fontSize: 'var(--heading-medium, 2.5rem)',
    textAlign: 'left', // "center"den "left"e değiştirildi
    marginBottom: '30px',
    width: '100%', 
    position: 'relative',
    zIndex: 2,
    marginTop: '0px',
  },
  content: {
    width: '100%',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // "center"den "flex-start"a değiştirildi
    textAlign: 'left', // "center"den "left"e değiştirildi
    padding: '20px',
  },
  textContent: {
    flex: 1,
    textAlign: 'left', // "center"den "left"e değiştirildi
    width: '100%',
  },
  descriptionContainer: {
    width: '100%',
    textAlign: 'left', // "center"den "left"e değiştirildi
    hyphens: 'auto',
    WebkitHyphens: 'auto',
    msHyphens: 'auto',
    marginBottom: '30px',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: 'var(--text-color)',
    marginBottom: '15px',
    textAlign: 'left', // "center"den "left"e değiştirildi
  },
  skills: {
    marginTop: '0',
    textAlign: 'left', // "center"den "left"e değiştirildi
    width: '100%',
  },
  skillsTitle: {
    color: 'var(--primary-color)',
    fontSize: '1.3rem',
    marginBottom: '15px',
    textAlign: 'left', // "center"den "left"e değiştirildi
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'flex-start', // "center"den "flex-start"a değiştirildi
    alignItems: 'center',
  },
  skillTag: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-color)',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    boxShadow: 'var(--card-shadow)',
    transition: 'var(--transition)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillTagHovered: {
    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)',
    color: 'var(--primary-color)',
    borderColor: 'var(--primary-color)',
    transform: 'translateY(-3px)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
};

export default About;