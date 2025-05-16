import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const About = () => {
  const { language, translations } = useLanguage();
  const skills = [
    "JavaScript", "React", "React Native", "NodeJs", "C#", "HTML5", "CSS", "Python", "Git", "Responsive Design", "UI/UX", "Figma", "Firebase", "MySQL", "Bootstrap5"
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div style={styles.container}> {/* Ana sarmalayıcı eklendi ve stil uygulandı */}
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
    justifyContent: 'flex-start',
    minHeight: '100vh',
    paddingTop: '120px', // Navbar için daha fazla boşluk bırakıldı (önceki 80px yerine)
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
    textAlign: 'center',
    marginBottom: '30px',
    width: '100%', 
    position: 'relative',
    zIndex: 2,
    marginTop: '0px', // Başlığın üstten boşluğu sıfırlandı
    '@media (max-width: 768px)': {
      fontSize: 'var(--heading-small, 2rem)',
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.8rem',
    }
  },
  content: {
    width: '100%',
    maxWidth: '900px', // Eklendi - İçerik genişliği
    display: 'flex',
    flexDirection: 'column', // Değiştirildi - Mobil öncelikli
    alignItems: 'center', // Eklendi
    textAlign: 'center', // Değiştirildi
    padding: '20px', // Eklendi - Mobil için genel padding
    '@media (min-width: 768px)': { // Masaüstü için düzenlemeler
      flexDirection: 'row',
      textAlign: 'left',
      gap: '50px',
      alignItems: 'flex-start', // Hizalamayı başa al
    }
  },
  textContent: {
    flex: 1,
    textAlign: 'center', // Mobil için merkezde
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      textAlign: 'left',
    }
  },
  descriptionContainer: {
    width: '100%',
    textAlign: 'center', // Mobil için merkezde
    hyphens: 'auto',
    WebkitHyphens: 'auto',
    msHyphens: 'auto',
    marginBottom: '30px', // Eklendi - Yetenekler bölümüyle araya boşluk
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      textAlign: 'left',
    }
  },
  description: {
    fontSize: '1.1rem', // Değiştirildi - Mobil için daha uygun
    lineHeight: '1.7', // Değiştirildi
    color: 'var(--text-color)',
    marginBottom: '15px', // Değiştirildi
    textAlign: 'center', // Mobil için merkezde
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      fontSize: '1.2rem',
      lineHeight: '1.8',
      textAlign: 'left',
    },
  },
  skills: {
    marginTop: '0', // Değiştirildi
    textAlign: 'center', // Mobil için merkezde
    width: '100%', // Eklendi - Tam genişlik kaplaması için
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      textAlign: 'left',
      marginTop: '30px',
    }
  },
  skillsTitle: {
    color: 'var(--primary-color)',
    fontSize: '1.3rem', // Değiştirildi - Mobil için
    marginBottom: '15px', // Değiştirildi
    textAlign: 'center', // Mobil için merkezde
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      fontSize: '1.5rem',
      textAlign: 'left',
      marginBottom: '20px',
    }
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px', // Değiştirildi - Mobil için daha az boşluk
    justifyContent: 'center', // Mobil için merkezde
    alignItems: 'center',
    '@media (min-width: 768px)': { // Masaüstü için sola hizalı
      justifyContent: 'flex-start',
      gap: '12px',
    }
  },
  skillTag: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-color)',
    padding: '8px 12px', // Değiştirildi - Mobil için daha kompakt
    borderRadius: '20px',
    fontSize: '0.9rem', // Değiştirildi - Mobil için
    boxShadow: 'var(--card-shadow)',
    transition: 'var(--transition)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 768px)': { // Masaüstü için orijinal boyutlar
      padding: '8px 16px',
      fontSize: '1rem',
    }
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