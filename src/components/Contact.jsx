import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={styles.container}>
      <h2 style={styles.title}>İletişim</h2>
      <div style={styles.content}>
        <div style={styles.info}>
          <h3 style={styles.subtitle}>Hadi Konuşalım!</h3>
          <p style={styles.description}>
            Proje fikirleriniz veya işbirlikleri için benimle iletişime geçebilirsiniz.
          </p>
        </div>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Adınız" 
              required 
              style={styles.input}
            />
            <input 
              type="email" 
              placeholder="Email adresiniz" 
              required 
              style={styles.input}
            />
          </div>
          <textarea 
            placeholder="Mesajınız" 
            required 
            style={{...styles.input, ...styles.textarea}}
          ></textarea>
          <button type="submit" style={styles.button}>
            Mesaj Gönder
          </button>
        </form>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: 'var(--section-padding)',
    backgroundColor: 'transparent', // Değişiklik burada - arka planı şeffaf yapıyoruz
  },
  content: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '50px',
    alignItems: 'center',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: '2.5rem',
  },
  info: {
    marginBottom: '30px',
  },
  subtitle: {
    fontSize: '2rem',
    color: 'var(--text-color)',
    marginBottom: '20px',
  },
  description: {
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  input: {
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: 'var(--bg-color)',
    border: '1px solid var(--text-secondary)',
    color: 'var(--text-color)',
    fontSize: '1rem',
    transition: 'var(--transition)',
  },
  textarea: {
    resize: 'vertical',
    minHeight: '150px',
  },
  button: {
    padding: '15px 30px',
    backgroundColor: 'var(--primary-color)',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    transition: 'var(--transition)',
    alignSelf: 'flex-start',
  },
};

export default Contact;