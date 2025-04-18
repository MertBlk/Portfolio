import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>
          Merhaba, ben <span style={styles.name}>[Mert]</span>
        </h1>
        <p style={styles.subtitle}>Full Stack Geliştirici | React & JavaScript | Mobil Geliştirme</p>
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
    minHeight: '80vh', // 100vh'den 80vh'ye düşürdük
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 'var(--section-padding)',
    background: 'transparent', // Arka planı şeffaf yapıyoruz
    position: 'relative',
    zIndex: 1,
  },
  content: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '6rem', // 3.5rem'den 3rem'e düşürdük
    marginBottom: '35px', // 20px'den 15px'e düşürdük
    lineHeight: 1.2,
  },
  name: {
    color: 'var(--primary-color)',
    borderBottom: '3px solid var(--primary-color)',
    paddingBottom: '5px',
  },
  subtitle: {
    fontSize: '1.5rem', // 1.5rem'den 1.3rem'e düşürdük
    color: 'var(--text-secondary)',
    marginBottom: '40px', // 40px'den 30px'e düşürdük
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