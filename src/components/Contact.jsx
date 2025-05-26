import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Contact = () => {
  const { language, translations } = useLanguage();
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' veya 'hire'
  
  return (
    <section id="contact" className="section">
      <div className="section-content" style={styles.customSectionContent}>
        <h2 style={styles.title}>{translations[language].contact.title}</h2>
        
        {/* Tab Navigation */}
        <div style={styles.tabNavigation}>
          <button 
            style={{
              ...styles.tabButton,
              ...(activeTab === 'contact' ? styles.activeTabButton : {})
            }}
            onClick={() => setActiveTab('contact')}
          >
            {language === 'tr' ? 'İletişim' : 'Contact'}
          </button>
          <button 
            style={{
              ...styles.tabButton,
              ...(activeTab === 'hire' ? styles.activeTabButton : {})
            }}
            onClick={() => setActiveTab('hire')}
          >
            {language === 'tr' ? 'Beni İşe Al' : 'Hire Me'}
          </button>
        </div>

        {/* Contact Tab Content */}
        {activeTab === 'contact' && (
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
        )}

        {/* Hire Me Tab Content */}
        {activeTab === 'hire' && (
          <div style={styles.content}>
            <p style={styles.description}>
              {language === 'tr' 
                ? 'Projeniz için profesyonel bir geliştirici mi arıyorsunuz? Hemen iletişime geçin ve nasıl yardımcı olabileceğim hakkında konuşalım.'
                : 'Looking for a professional developer for your project? Get in touch and let\'s discuss how I can help.'}
            </p>
            
            <div style={styles.hireOptions}>
              <div style={styles.hireOption}>
                <div style={styles.hireIconWrapper}>
                  <span style={styles.hireIcon}>💼</span>
                </div>
                <h3 style={styles.hireTitle}>
                  {language === 'tr' ? 'Tam Zamanlı' : 'Full-time'}
                </h3>
                <p style={styles.hireDescription}>
                  {language === 'tr' 
                    ? 'Uzun vadeli bir işbirliği için ekibinize katılabilirim. Frontend veya full-stack pozisyonları için uygundur.'
                    : 'I can join your team for long-term collaboration. Suitable for frontend or full-stack positions.'}
                </p>
              </div>
              
              <div style={styles.hireOption}>
                <div style={styles.hireIconWrapper}>
                  <span style={styles.hireIcon}>🌐</span>
                </div>
                <h3 style={styles.hireTitle}>
                  {language === 'tr' ? 'Freelance' : 'Freelance'}
                </h3>
                <p style={styles.hireDescription}>
                  {language === 'tr' 
                    ? 'Belirli bir proje için teknik çözümler sunabilirim. Web siteleri, uygulamalar veya özel yazılımlar geliştirebilirim.'
                    : 'I can provide technical solutions for specific projects. Development of websites, applications, or custom software.'}
                </p>
              </div>
              
              <div style={styles.hireOption}>
                <div style={styles.hireIconWrapper}>
                  <span style={styles.hireIcon}>💡</span>
                </div>
                <h3 style={styles.hireTitle}>
                  {language === 'tr' ? 'Danışmanlık' : 'Consulting'}
                </h3>
                <p style={styles.hireDescription}>
                  {language === 'tr' 
                    ? 'Mevcut projeleriniz için teknik rehberlik sağlayabilirim. Kod incelemeleri, mimari kararlar ve performans optimizasyonu konularında yardımcı olabilirim.'
                    : 'I can provide technical guidance for your existing projects. Help with code reviews, architectural decisions, and performance optimization.'}
                </p>
              </div>
            </div>
            
            <div style={styles.cvSection}>
              <h3 style={styles.cvTitle}>
                {language === 'tr' ? 'CV\'mi İndirin' : 'Download My CV'}
              </h3>
              <p style={styles.cvDescription}>
                {language === 'tr' 
                  ? 'Detaylı özgeçmişimi incelemek ister misiniz?'
                  : 'Would you like to review my detailed CV?'}
              </p>
              <a 
                href="/Cv.pdf" 
                download 
                style={styles.cvButton}
              >
                <span style={styles.cvButtonIcon}>📄</span>
                {language === 'tr' ? 'PDF İndir' : 'Download PDF'}
              </a>
            </div>
            
            <a 
              href="mailto:mert54bolukbasi@gmail.com?subject=Business Inquiry" 
              style={styles.hireCTA}
            >
              {language === 'tr' ? 'İş Teklifi Gönder' : 'Send Business Inquiry'}
            </a>
          </div>
        )}
        
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
  
  // Tab Navigation Styles - YENİ
  tabNavigation: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    gap: '20px',
    width: '100%',
    maxWidth: '500px',
  },
  tabButton: {
    padding: '12px 24px',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '30px',
    color: 'var(--text-color)',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeTabButton: {
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    border: '1px solid var(--primary-color)',
  },
  
  // Hire Me Section Styles - YENİ
  hireOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '40px',
    width: '100%',
  },
  hireOption: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '30px',
    borderRadius: '15px',
    minWidth: '280px',
    flex: '1 1 280px',
    maxWidth: '350px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  hireIconWrapper: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  hireIcon: {
    color: 'var(--primary-color)',
  },
  hireTitle: {
    margin: '0 0 15px 0',
    color: 'var(--text-color)',
    fontSize: '1.3rem',
  },
  hireDescription: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  
  // CV Section Styles - YENİ
  cvSection: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '30px',
    borderRadius: '15px',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '40px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cvTitle: {
    margin: '0 0 15px 0',
    color: 'var(--text-color)',
    fontSize: '1.3rem',
  },
  cvDescription: {
    margin: '0 0 20px 0',
    color: 'var(--text-secondary)',
    fontSize: '1rem',
  },
  cvButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    padding: '12px 25px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  cvButtonIcon: {
    fontSize: '1.2rem',
  },
  
  // CTA Button - YENİ
  hireCTA: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    padding: '15px 30px',
    borderRadius: '30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    marginBottom: '40px',
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
    tabButton: {
      padding: '10px 20px',
      fontSize: '0.95rem',
    },
    hireOption: {
      padding: '25px',
      minWidth: '100%', // Mobilde tam genişlik
      flexBasis: '100%',
    },
    hireOptions: {
      flexDirection: 'column', // Kartları alt alta diz
    },
    hireOption: {
      width: '100%',
      maxWidth: 'none',
      marginBottom: '15px',
    },
    cvSection: {
      padding: '20px',
    },
    hireCTA: {
      width: '100%',
      textAlign: 'center',
      padding: '12px',
    },
    
    tabNavigation: {
      width: '100%',
      maxWidth: '100%',
    }
  },
  '@media (max-width: 480px)': {
    tabNavigation: {
      flexDirection: 'column',
      gap: '10px',
    },
    tabButton: {
      width: '100%',
    },
    hireDescription: {
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    cvTitle: {
      fontSize: '1.2rem',
    },
    cvDescription: {
      fontSize: '0.9rem',
    },
    cvButton: {
      width: '100%',
      justifyContent: 'center',
    }
  }
};

export default Contact;