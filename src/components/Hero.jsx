import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Merhaba, ben <span style={styles.name}>[Adınız]</span>
        </h1>
        <p style={styles.subtitle}>Frontend Geliştirici | React & JavaScript</p>
        <div style={styles.cta}>
          <a href="#projects" style={styles.button}>Projelerime Göz At</a>
          <a href="#contact" style={styles.outlineButton}>İletişime Geç</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '120px 20px',
    background: 'linear-gradient(160deg, var(--bg-color) 60%, var(--bg-secondary) 100%)',
  },
  content: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '3.5rem',
    marginBottom: '20px',
    lineHeight: 1.2,
  },
  name: {
    color: 'var(--primary-color)',
    borderBottom: '3px solid var(--primary-color)',
    paddingBottom: '5px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
  },
  cta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
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