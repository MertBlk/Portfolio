import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const About = () => {
  const { language, translations } = useLanguage();
  const skills = [
    "JavaScript", "React", "React Native", "NodeJs", "C#", "HTML5", "CSS", "Python", "Git", "Responsive Design", "UI/UX", "Figma", "Firebase", "MySQL", "Bootstrap5"
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="about" className="section">
      <div className="section-content" style={styles.customSectionContent}> {/* .section-content ve özel stiller */}
        <div style={styles.mainLayout}> 
          <div style={styles.leftPanel}> 
            <h2 style={styles.verticalTitle}>
              {translations[language].about.title.split('').map((char, index) => (
                <span key={index} style={styles.verticalChar}>{char}</span>
              ))}
            </h2>
          </div>

          <div style={styles.rightPanel}> 
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
                        style={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  customSectionContent: { // .section-content için özel stil
    display: 'flex', // mainLayout'un düzgün çalışması için
    alignItems: 'stretch', // mainLayout'un tüm yüksekliği kullanması için
    padding: '0', // global.css'teki padding'i sıfırla, mainLayout yönetecek
    margin: '0 auto', // Ortalamayı koru
    maxWidth: '1200px' // About için özel maksimum genişlik
  },
  mainLayout: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start', 
    gap: '40px', 
    padding: '20px', // İçerik için padding
  },
  leftPanel: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px', // Başlığın biraz aşağıdan başlaması için
  },
  verticalTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'var(--primary-color)',
    fontSize: '4.5rem', // Daha büyük başlık
    fontWeight: "bold", // Daha kalın yazı
    letterSpacing: '0.1em',
    margin: 0,
    padding: 0,
    lineHeight: 1,
    textAlign: 'center',
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    textShadow: '0 0 15px rgba(156, 39, 176, 0.3)', // Işıltılı efekt
  },
  verticalChar: {
    display: 'block',
    padding: 0,
    margin: 0,
    lineHeight: 1,
  },
  rightPanel: {
    flex: 1, // Kalan alanı kaplasın
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px', // İçeriğin başlıkla hizalanması için
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0px', // Padding rightPanel'den geliyor
  },
  textContent: {
    flex: 1,
    textAlign: 'left',
    width: '100%',
  },
  descriptionContainer: {
    width: '100%',
    textAlign: 'left',
    hyphens: 'auto',
    WebkitHyphens: 'auto',
    msHyphens: 'auto',
    marginBottom: '30px',
  },
  description: {
    fontSize: '1.4rem',
    lineHeight: '1.7',
    color: 'var(--text-color)',
    marginBottom: '15px',
    textAlign: 'left',
  },
  skills: {
    marginTop: '0',
    textAlign: 'left',
    width: '100%',
  },
  skillsTitle: {
    color: 'var(--primary-color)',
    fontSize: '1.3rem',
    marginBottom: '15px',
    textAlign: 'left',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowX: 'hidden',
    maxWidth: '100%',
    minWidth: 0,
    boxSizing: 'border-box',
  },
  skillTag: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-color)',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    boxShadow: 'var(--card-shadow)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    cursor: 'default', // El işareti olmasın
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
    maxWidth: '100%',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    transition: 'none', // Geçiş efekti olmasın
  },
  '@media (max-width: 768px)': {
    aboutContainer: {
      flexDirection: 'column',
    },
    
    aboutImage: {
      width: '200px',
      height: '200px',
      marginRight: 0,
      marginBottom: '20px',
    },
    
    aboutContent: {
      width: '100%',
    },
    
    skillsContainer: {
      marginTop: '30px',
    },
    
    skillCategory: {
      marginBottom: '20px',
    },
    
    skillBar: {
      height: '10px', // Daha küçük skill barları
    }
  },
  
  '@media (max-width: 480px)': {
    aboutImage: {
      width: '150px',
      height: '150px',
    },
    
    sectionTitle: {
      fontSize: '1.5rem',
      marginBottom: '15px',
    },
    
    skillCategory: {
      fontSize: '1rem',
    }
  }
};

export default About;