import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Hero = () => {
  const { language, translations } = useLanguage();

  return (
    <div style={styles.content}>
      <h1 style={styles.title}>
        {translations[language].greeting} <span style={styles.name}>Mert Bölükbaşı</span>
      </h1>
      <p style={styles.subtitle}>{translations[language].description}</p>
      <p style={styles.subtitle2}>{translations[language].role}</p>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left', // Sola hizala
    padding: 'var(--section-padding)',
    background: 'transparent',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    padding: '0 20px',
    textAlign: 'left', // Sola hizala
  },
  title: {
    fontSize: 'clamp(2.5rem, 10vw, 6rem)',
    marginBottom: '35px',
    lineHeight: 1.2,
    textAlign: 'left', // Sola hizala
  },
  name: {
    color: 'var(--primary-color)',
    paddingBottom: '5px',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
    textAlign: 'left', // Sola hizala
  },
  subtitle2: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: 'var(--primary-color)',
    marginBottom: '40px',
    textAlign: 'left', // Sola hizala
  },
  cta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'flex-start', // Sola hizala
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 30px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    borderRadius: '25px',
    fontSize: '1.1rem',
    transition: 'var(--transition)',
    border: '2px solid var(--primary-color)',
    cursor: 'pointer',
  },
  outlineButton: {
    padding: '12px 30px',
    backgroundColor: 'transparent',
    color: 'var(--primary-color)',
    borderRadius: '25px',
    fontSize: '1.1rem',
    transition: 'var(--transition)',
    border: '2px solid var(--primary-color)',
    cursor: 'pointer',
  },
};

export default Hero;