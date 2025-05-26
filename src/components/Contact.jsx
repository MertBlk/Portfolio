import React from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Contact = () => {
  const { language, translations } = useLanguage();
  
  return (
    <section id="contact" className="section">
      <div className="section-content" style={styles.customSectionContent}>
        <h2 style={styles.title}>{translations[language].contact.title}</h2>
        <div style={styles.content}>
          <p style={styles.description}>
            {translations[language].contact.description}
          </p>
          
          <div style={styles.contactInfo}>
            {/* E-posta */}
            <a href="mailto:mert54bolukbasi@gmail.com" style={styles.contactItem}>
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>📧</span>
              </div>
              <div style={styles.contactText}>
                <h3 style={styles.contactTitle}>{translations[language].contact.email}</h3>
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
                <p style={styles.contactValue}></p>
              </div>
            </a>
            
            {/* GitHub */}
            <a href="https://github.com/MertBlk" target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>💻</span>
              </div>
              <div style={styles.contactText}>
                <h3 style={styles.contactTitle}>GitHub</h3>
                <p style={styles.contactValue}>github.com/MertBlk</p>
              </div>
            </a>
          </div>
        </div>
        
        <footer style={styles.footer}>
          <p style={styles.copyright}>
            © {new Date().getFullYear()} {translations[language].contact.copyright}
          </p>
        </footer>
      </div>
    </section>
  );
};

const styles = {
  customSectionContent: { // .section-content için özel stil
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  content: {
    width: '100%',
    maxWidth: '800px', // Eklendi - İçeriğin maksimum genişliği
    textAlign: 'center', // Değiştirildi
    display: 'flex', // Eklendi
    flexDirection: 'column', // Eklendi
    alignItems: 'center', // Eklendi
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center', // Değiştirildi
    marginBottom: '30px', // Değiştirildi
    fontSize: 'var(--heading-medium, 2.5rem)',
  },
  description: {
    fontSize: '1.1rem', // Değiştirildi
    lineHeight: '1.7', // Değiştirildi
    color: 'var(--text-color)',
    marginBottom: '40px',
    textAlign: 'center', // Değiştirildi
    maxWidth: '700px', // Eklendi
  },
  contactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Değiştirildi - Kartları ortalamak için
    gap: '20px', // Değiştirildi
    marginBottom: '50px', // Değiştirildi
    width: '100%', // Eklendi
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'var(--bg-secondary)',
    padding: '20px',
    borderRadius: '15px',
    minWidth: '280px', // Değiştirildi - Daha tutarlı genişlik
    flex: '1 1 280px', // Eklendi - Esnek büyüme ve küçülme
    maxWidth: '350px', // Eklendi - Maksimum genişlik
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
    width: '45px', // Değiştirildi
    height: '45px', // Değiştirildi
    borderRadius: '50%',
    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)', // Değiştirildi
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.4rem', // Değiştirildi
  },
  icon: {
    color: 'var(--primary-color)',
  },
  contactText: {
    flex: 1,
    textAlign: 'left',
  },
  contactTitle: {
    margin: '0 0 5px 0',
    color: 'var(--text-color)',
    fontSize: '1rem', // Değiştirildi
    textAlign: 'left',
  },
  contactValue: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '0.85rem', // Değiştirildi
    textAlign: 'left',
    wordBreak: 'break-all', // Eklendi - Uzun e-postaların taşmasını engelle
  },
  formContainer: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '30px',
    borderRadius: '15px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: 'var(--card-shadow)',
    width: '100%', // Eklendi
    maxWidth: '600px', // Eklendi
    marginBottom: '40px', // Eklendi
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
    width: '100%',
    padding: '20px 0',
    textAlign: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)', // Eklendi - Ayırıcı çizgi
    marginTop: 'auto', // Eklendi - İçerik azsa bile en altta kalması için
  },
  copyright: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
  },
  // Mobil için ek stiller
  '@media (max-width: 768px)': {
    title: {
      fontSize: 'var(--heading-small, 2rem)', // Mobil için başlık boyutu
      marginBottom: '20px',
    },
    description: {
      fontSize: '1rem',
      marginBottom: '30px',
    },
    contactInfo: {
      gap: '15px',
      marginBottom: '40px',
    },
    contactItem: {
      minWidth: '100%', // Mobilde tam genişlik
      flexBasis: '100%',
    },
    formContainer: {
      padding: '20px',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '1.8rem',
    },
    description: {
      fontSize: '0.95rem',
    },
    iconWrapper: {
      width: '40px',
      height: '40px',
      fontSize: '1.3rem',
    },
    contactTitle: {
      fontSize: '0.95rem',
    },
    contactValue: {
      fontSize: '0.8rem',
    },
    input: {
      padding: '12px',
      fontSize: '0.95rem',
    },
    textarea: {
      padding: '12px',
      fontSize: '0.95rem',
    },
    submitButton: {
      padding: '12px',
      fontSize: '0.95rem',
    },
    footer: {
      padding: '15px 0',
    },
    copyright: {
      fontSize: '0.8rem',
    }
  }
};

export default Contact;