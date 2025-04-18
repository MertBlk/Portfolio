import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={styles.container}>
      <h1 style={styles.title}>Merhaba, ben <span style={styles.name}>[Adınız]</span></h1>
      <p style={styles.subtitle}>Frontend Geliştirici | React & JavaScript</p>
      <a href="#projects" style={styles.button}>Projelerime Göz At</a>
    </section>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '60px',
  },
  title: {
    fontSize: '2.5rem',
  },
  name: {
    color: 'var(--primary-color)',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#ccc',
    marginTop: '10px',
  },
  button: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: 'var(--primary-color)',
    color: '#fff',
    borderRadius: '5px',
  }
};

export default Hero;