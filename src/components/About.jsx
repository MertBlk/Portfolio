import React from 'react';

const About = () => {
  const skills = [
    "JavaScript", "React", "React Native", "HTML5", "CSS", "Python", "Git", "Responsive Design"
  ];

  return (
    <section id="about" style={styles.container}>
      <h2 style={styles.title}>Hakkımda</h2>
      <div style={styles.content}>
        <div style={styles.textContent}>
          <p style={styles.description}>
            Merhaba! Ben modern web uygulamaları geliştiren bir yazılımcıyım. 
            React, JavaScript ve UI/UX konularında deneyimliyim. 
            Performans odaklı, mobil uyumlu ve kullanıcı dostu arayüzler geliştiriyorum.
          </p>
          <div style={styles.skills}>
            <h3 style={styles.skillsTitle}>Yeteneklerim</h3>
            <div style={styles.skillTags}>
              {skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>{skill}</span>
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
    backgroundColor: 'var(--bg-color)',
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    gap: '50px',
    alignItems: 'center',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: '2.5rem',
  },
  textContent: {
    flex: 1,
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: 'var(--text-color)',
    marginBottom: '40px',
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
  },
};

export default About;