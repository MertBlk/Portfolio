import React, { useState } from 'react';

const About = () => {
  const skills = [
    "JavaScript", "React", "React Native", "HTML5", "CSS", "Python", "Git", "Responsive Design"
  ];

  // Hover durumunu takip etmek için bir state oluşturalım
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="hakkimda" style={styles.container}>
      <h2 style={styles.title}>Hakkımda</h2>
      <div style={styles.content}>
        <div style={styles.textContent}>
          <p style={styles.description}>
            Merhaba! Ben modern web uygulamaları ve Mobil Uygulamaları geliştiren bir yazılımcıyım. 
            React, React Native, JavaScript ve UI/UX konularında deneyimliyim.
            Aynı zamanda Python ve temel seviye C# 
          </p>
          <p style={styles.description}>
            Performans odaklı, mobil uyumlu ve kullanıcı dostu arayüzler geliştiriyorum.
            Her projede yeni teknolojiler öğrenmeye ve kendimi geliştirmeye devam ediyorum.
          </p>
          
          <div style={styles.skills}>
            <h3 style={styles.skillsTitle}>Yeteneklerim</h3>
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
    </section>
  );
};

const styles = {
  container: {
    padding: 'var(--section-padding)',
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    }
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: 'var(--heading-medium, 2.5rem)',
  },
  textContent: {
    flex: 1,
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: 'var(--text-color)',
    marginBottom: '20px',
  },
  skills: {
    marginTop: '30px',
  },
  skillsTitle: {
    color: 'var(--primary-color)',
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
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
    cursor: 'pointer', // Tıklanabilir görünüm için imleç ekledik
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