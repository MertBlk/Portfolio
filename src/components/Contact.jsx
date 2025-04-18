import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 style={{ color: 'var(--primary-color)', textAlign: 'center' }}>İletişim</h2>
      <form style={styles.form}>
        <input type="text" placeholder="Adınız" required />
        <input type="email" placeholder="Email adresiniz" required />
        <textarea placeholder="Mesajınız" required></textarea>
        <button type="submit">Gönder</button>
      </form>
    </section>
  );
};

const styles = {
  form: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
  }
};

export default Contact;