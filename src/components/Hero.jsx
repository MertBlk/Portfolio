import React from 'react';

const Hero = () => {
  return (
    <section id="anasayfa" style={styles.container}>
      <div style={styles.content}>
      <h1 style={styles.title}>
  Selam! Ben <span style={styles.name}>Mert Bölükbaşı</span>
</h1>
<p style={styles.subtitle}>Hayallerini koda döken bir geliştirici.</p>
<p style={styles.subtitle2}>Full Stack | Mobil Geliştirme</p>

      </div>
    </section>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 'var(--section-padding)',
    background: 'transparent',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    maxWidth: '800px',
    width: '100%',
    padding: '0 20px',
  },
  title: {
    fontSize: 'clamp(2.5rem, 10vw, 6rem)',
    marginBottom: '35px',
    lineHeight: 1.2,
  },
  name: {
    color: 'var(--primary-color)',
    paddingBottom: '5px',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: 'var(--text-secondary)',
    marginBottom: '40px',
  },
  subtitle2: {
    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
    color: 'var(--primary-color)', // Sarı renk
    marginBottom: '40px',
  },
  cta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
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