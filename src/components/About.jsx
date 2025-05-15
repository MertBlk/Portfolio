import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const About = () => {
  const { language, translations } = useLanguage();
  const skills = [
    "JavaScript", "React", "React Native", "NodeJs", "C#", "HTML5", "CSS", "Python", "Git", "Responsive Design", "UI/UX", "Figma", "Firebase", "MySQL", "Bootstrap5"
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <>
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
    </>
  );
};

const styles = {
  container: {
    padding: 'var(--section-padding)',
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 1,
    textAlign: 'left', // Sola hizala
  },
  content: {
    width: '100%', // Tam genişlik
    // maxWidth ve margin kaldırıldı
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      position: 'relative',
      padding: '20px',
      WebkitBackdropFilter: 'blur(10px)',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(15, 23, 42, 0.7)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      WebkitTransform: 'translate3d(0, 0, 0)',
      transform: 'translate3d(0, 0, 0)',
      WebkitPerspective: '1000',
      perspective: '1000',
      WebkitBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden'
    },
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    }
  },
  textContent: {
    flex: 1,
    textAlign: 'left', // Sola hizala
    '@media (max-width: 768px)': {
      padding: '10px',
    }
  },
  descriptionContainer: {
    width: '100%', // Tam genişlik
    // maxWidth ve margin kaldırıldı
    textAlign: 'left',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
    msHyphens: 'auto',
    '@media (max-width: 768px)': {
      padding: '15px',
      borderRadius: '15px',
    }
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: 'var(--text-color)',
    marginBottom: '20px',
    textAlign: 'left',
    padding: '0 0 0 0', // padding kaldırıldı
    '@media (max-width: 768px)': {
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
  },
  skills: {
    marginTop: '30px',
    textAlign: 'left', // Sola hizala
  },
  skillsTitle: {
    color: 'var(--primary-color)',
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'left', // Sola hizala
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'flex-start', // Sola hizala
    alignItems: 'center',
  },
  skillTag: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-color)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1rem',
    boxShadow: 'var(--card-shadow)',
    transition: 'var(--transition)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    display: 'inline-flex', // Eklendi
    alignItems: 'center', // Eklendi
    justifyContent: 'center', // Eklendi
  },
  skillTagHovered: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)', // Sarı rengin hafif arkaplanı
    color: 'var(--primary-color)', // Sarı renk
    borderColor: 'var(--primary-color)', // Sarı kenarlık
    transform: 'translateY(-3px)', // Hafif yukarı kalkma efekti
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)', // Daha belirgin gölge
  },
  imageContainer: {
    position: 'relative',
    width: '300px',
    height: '300px',
    flexShrink: 0,
  },
  imageFrame: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: 'var(--card-shadow)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-secondary)',
  },
  imagePlaceholderText: {
    color: 'var(--text-color)',
    fontSize: '1.2rem',
  },
  experienceBox: {
    position: 'absolute',
    bottom: '-20px',
    right: '-20px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    boxShadow: 'var(--card-shadow)',
    textAlign: 'center',
  },
  experienceNumber: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  experienceText: {
    fontSize: '1rem',
  },
};

export default About;