import React from 'react';

const Contact = () => {
  return (
    <section id="iletisim" style={styles.container}>
      <h2 style={styles.title}>İletişim</h2>
      <div style={styles.content}>
        <p style={styles.description}>
          Projeleriniz için benimle iletişime geçebilir veya sorularınızı sorabilirsiniz. 
          Aşağıdaki kanallardan bana ulaşabilirsiniz.
        </p>
        
        <div style={styles.contactInfo}>
          {/* E-posta */}
          <a href="mailto:mert54bolukbasi@gmail.com" style={styles.contactItem}>
            <div style={styles.iconWrapper}>
              <span style={styles.icon}>📧</span>
            </div>
            <div style={styles.contactText}>
              <h3 style={styles.contactTitle}>E-posta</h3>
              <p style={styles.contactValue}>mert54bolukbasi@gmail.com</p>
            </div>
          </a>
          
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mert-bölükbaşı-1b34592a7/" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <div style={styles.iconWrapper}>
              <span style={styles.icon}>🔗</span>
            </div>
            <div style={styles.contactText}>
              <h3 style={styles.contactTitle}>LinkedIn</h3>
              <p style={styles.contactValue}>https://www.linkedin.com/MertBölükbaşı</p>
            </div>
          </a>
          
          {/* GitHub */}
          <a href="https://github.com/MertBlk" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
            <div style={styles.iconWrapper}>
              <span style={styles.icon}>💻</span>
            </div>
            <div style={styles.contactText}>
              <h3 style={styles.contactTitle}>GitHub</h3>
              <p style={styles.contactValue}>https://github.com/MertBlk</p>
            </div>
          </a>
        </div>
        
        
      </div>
      
      <footer style={styles.footer}>
        <p style={styles.copyright}>© {new Date().getFullYear()} Tüm Hakları Saklıdır.</p>
      </footer>
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
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: 'var(--heading-medium, 2.5rem)',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: 'var(--text-color)',
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 50px',
  },
  contactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '60px',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'var(--bg-secondary)',
    padding: '20px',
    borderRadius: '15px',
    minWidth: '250px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'var(--transition)',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
      borderColor: 'var(--primary-color)',
    }
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
  },
  icon: {
    color: 'var(--primary-color)',
  },
  contactText: {
    flex: 1,
  },
  contactTitle: {
    margin: '0 0 5px 0',
    color: 'var(--text-color)',
    fontSize: '1.1rem',
  },
  contactValue: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  },
  formContainer: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '30px',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: 'var(--card-shadow)',
  },
  formTitle: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-color)',
    fontSize: '1rem',
    transition: 'var(--transition)',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--primary-color)',
      boxShadow: '0 0 0 2px rgba(241, 196, 15, 0.2)',
    }
  },
  textarea: {
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'var(--text-color)',
    fontSize: '1rem',
    transition: 'var(--transition)',
    resize: 'vertical',
    minHeight: '120px',
    ':focus': {
      outline: 'none',
      borderColor: 'var(--primary-color)',
      boxShadow: '0 0 0 2px rgba(241, 196, 15, 0.2)',
    }
  },
  submitButton: {
    padding: '15px',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'var(--transition)',
    fontSize: '1rem',
    ':hover': {
      backgroundColor: 'var(--primary-hover)',
      transform: 'translateY(-2px)',
    }
  },
  footer: {
    marginTop: '80px',
    textAlign: 'center',
    padding: '20px 0',
    
  },
  copyright: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  }
};

export default Contact;