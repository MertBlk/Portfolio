import React, { useState } from 'react';
import { useLanguage } from '../Context/LanguageContext';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
  const { language, translations } = useLanguage();
  const [activeTab, setActiveTab] = useState('contact'); // 'contact' veya 'hire'
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
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
              <div style={isMobile ? styles.hireOptionMobile : styles.hireOption}>
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
              
              <div style={isMobile ? styles.hireOptionMobile : styles.hireOption}>
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
              
              <div style={isMobile ? styles.hireOptionMobile : styles.hireOption}>
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
  customSectionContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '1200px', // Masaüstü için daha geniş
    margin: '0 auto',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  content: {
    width: '100%',
    maxWidth: '800px', // İçerik genişliği
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    margin: '0 auto',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '25px', // Küçültüldü
    fontSize: '2rem', // Küçültüldü
  },
  description: {
    fontSize: '1rem', // Küçültüldü
    lineHeight: '1.6',
    color: 'var(--text-color)',
    marginBottom: '30px', // Küçültüldü
    textAlign: 'center',
    maxWidth: '600px', // Küçültüldü
  },
  contactInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '25px',
    marginBottom: '40px',
    width: '100%',
    padding: '0',
    margin: '0 auto',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'var(--bg-secondary)',
    padding: '20px',
    borderRadius: '15px',
    minWidth: '280px',
    flex: '1 1 300px', // Her kart eşit büyüyecek
    maxWidth: '380px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'var(--transition)',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    margin: '0',
    boxSizing: 'border-box',
  },
  iconWrapper: {
    width: '40px', // Küçültüldü
    height: '40px', // Küçültüldü
    borderRadius: '50%',
    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem', // Küçültüldü
  },
  icon: {
    color: 'var(--primary-color)',
  },
  contactText: {
    flex: 1,
    textAlign: 'left',
  },
  contactTitle: {
    margin: '0 0 4px 0', // Küçültüldü
    color: 'var(--text-color)',
    fontSize: '0.9rem', // Küçültüldü
    textAlign: 'left',
  },
  contactValue: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '0.8rem', // Küçültüldü
    textAlign: 'left',
    wordBreak: 'break-all',
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
  
  // Tab Navigation Styles
  tabNavigation: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px', // Küçültüldü
    gap: '15px', // Küçültüldü
    width: '100%',
    maxWidth: '400px', // Küçültüldü
  },
  tabButton: {
    padding: '10px 20px', // Küçültüldü
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '25px', // Küçültüldü
    color: 'var(--text-color)',
    fontSize: '0.9rem', // Küçültüldü
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  activeTabButton: {
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    border: '1px solid var(--primary-color)',
  },
  
  // Hire Me Section Styles
  hireOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '25px',
    marginBottom: '40px',
    width: '100%',
    padding: '0',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  hireOption: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '30px',
    borderRadius: '15px',
    minWidth: '280px',
    flex: '1 1 300px', // Her kart eşit büyüyecek
    maxWidth: '380px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    margin: '0',
    boxSizing: 'border-box',
  },
  hireOptionMobile: {
    backgroundColor: 'var(--bg-secondary)',
    padding: '10px', // Biraz daha fazla padding
    borderRadius: '15px',
    minWidth: '90%', // %95 yerine %90
    width: '90%',
    maxWidth: '90%',
    marginBottom: '8px',
    boxSizing: 'border-box',
    margin: '0 auto 18px auto', // Ortala
  },
  hireIconWrapper: {
    width: '50px', // Küçültüldü
    height: '50px', // Küçültüldü
    borderRadius: '50%',
    backgroundColor: 'rgba(var(--primary-color-rgb), 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem', // Küçültüldü
    marginBottom: '12px', // Küçültüldü
  },
  hireIcon: {
    color: 'var(--primary-color)',
  },
  hireTitle: {
    margin: '0 0 12px 0', // Küçültüldü
    color: 'var(--text-color)',
    fontSize: '1.1rem', // Küçültüldü
  },
  hireDescription: {
    margin: 0,
    color: 'var(--text-secondary)',
    fontSize: '0.85rem', // Küçültüldü
    lineHeight: '1.5', // Küçültüldü
  },
  
  // CV Section Styles
  cvSection: {
    backgroundColor: 'var(--bg-secondary)',
    marginTop: '30px', // Küçültüldü
    padding: '55px', // Küçültüldü
    borderRadius: '12px', // Küçültüldü
    width: '100%',
    maxWidth: '500px', // Küçültüldü
    marginBottom: '50px', // Küçültüldü
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)', // Küçültüldü
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  cvTitle: {
    margin: '0 0 12px 0', // Küçültüldü
    color: 'var(--text-color)',
    fontSize: '1.1rem', // Küçültüldü
  },
  cvDescription: {
    margin: '0 0 15px 0', // Küçültüldü
    color: 'var(--text-secondary)',
    fontSize: '0.9rem', // Küçültüldü
  },
  cvButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px', // Küçültüldü
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    padding: '10px 20px', // Küçültüldü
    borderRadius: '25px', // Küçültüldü
    fontSize: '0.9rem', // Küçültüldü
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  },
  cvButtonIcon: {
    fontSize: '1rem', // Küçültüldü
  },
  
  // CTA Button
  hireCTA: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    padding: '12px 25px',
    borderRadius: '25px',
    fontSize: '0.9rem',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 8px 15px rgba(0,0,0,0.1)',
    width: 'auto',
    minWidth: '200px',
    maxWidth: '250px',
    margin: '10px auto 20px auto',
    textAlign: 'center',
    height: '45px',
  },
  
  // Mobil için ek stiller
  '@media (max-width: 768px)': {
    customSectionContent: {
      padding: '0 15px',
      width: '100%',
      maxWidth: '100%',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    
    content: {
      padding: '0 5px', // Yanlardan biraz boşluk
      maxWidth: '100%',
      width: '100%',
      alignItems: 'center', // İçeriği ortala
      boxSizing: 'border-box',
    },
    
    title: {
      fontSize: '1.8rem', // Daha okunaklı başlık
      marginBottom: '15px',
      textAlign: 'center',
      alignSelf: 'center', // Ortala
      width: 'auto', // Otomatik genişlik
    },
    
    description: {
      fontSize: '0.9rem', // Daha okunaklı
      marginBottom: '20px',
      textAlign: 'center',
      alignSelf: 'center', // Ortala
      width: '90%', // Genişliği sınırla
      maxWidth: '90%',
      padding: '0',
      lineHeight: '1.5',
    },
    
    contactInfo: {
      justifyContent: 'center', // Öğeleri ortala
      alignItems: 'center', // Öğeleri ortala
      gap: '15px',
      marginBottom: '25px',
      padding: '0',
      width: '100%',
      flexDirection: 'column', // Dikey sırala
    },
    
    contactItem: {
      minWidth: '90%',
      width: '90%', // Genişlik ayarı
      maxWidth: '90%',
      padding: '15px',
      gap: '10px',
      margin: '0 auto 10px auto', // Ortala ve alttan boşluk
      boxSizing: 'border-box',
      borderRadius: '10px',
    },
    
    iconWrapper: {
      width: '35px',
      height: '35px',
      fontSize: '1.2rem',
    },
    
    contactTitle: {
      fontSize: '0.9rem',
      marginBottom: '3px',
      textAlign: 'center', // Ortala
    },
    
    contactValue: {
      fontSize: '0.8rem',
      textAlign: 'center', // Ortala
    },
    
    tabNavigation: {
      width: '90%',
      maxWidth: '90%',
      gap: '10px',
      marginBottom: '20px',
      justifyContent: 'center', // Ortala
      margin: '0 auto 20px auto', // Ortala
    },
    
    tabButton: {
      padding: '10px 15px',
      fontSize: '0.9rem',
      borderRadius: '20px',
    },
    
    hireOptions: {
      width: '100%',
      gap: '15px',
      padding: '0',
      justifyContent: 'center', // Ortala
      alignItems: 'center', // Ortala
      flexDirection: 'column', // Dikey sırala
    },
    
    hireOptionMobile: { // Bu stil hireOption ile birleşecek veya onu ezecek
      backgroundColor: 'var(--bg-secondary)',
      padding: '20px',
      borderRadius: '10px',
      minWidth: '90%',
      width: '90%', // Genişlik ayarı
      maxWidth: '90%',
      marginBottom: '15px',
      boxSizing: 'border-box',
      margin: '0 auto 15px auto', // Ortala ve alttan boşluk
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.05)',
    },
    
    hireIconWrapper: {
      width: '45px',
      height: '45px',
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    
    hireTitle: {
      fontSize: '1.1rem',
      marginBottom: '8px',
      textAlign: 'center',
    },
    
    hireDescription: {
      fontSize: '0.85rem',
      lineHeight: '1.4',
      padding: '0 5px',
      textAlign: 'center',
    },
    
    cvSection: {
      padding: '20px',
      width: '90%', // Genişlik ayarı
      maxWidth: '90%',
      marginBottom: '25px',
      margin: '0 auto 25px auto', // Ortala
      borderRadius: '10px',
      alignItems: 'center', // İçeriği ortala
    },
    
    cvTitle: {
      fontSize: '1.1rem',
      marginBottom: '8px',
      textAlign: 'center',
    },
    
    cvDescription: {
      fontSize: '0.85rem',
      marginBottom: '15px',
      textAlign: 'center',
    },
    
    cvButton: {
      padding: '10px 20px',
      fontSize: '0.9rem',
      gap: '8px',
      borderRadius: '25px',
    },
    
    cvButtonIcon: {
      fontSize: '1rem',
    },
    
    hireCTA: {
      width: '90%', // Genişlik ayarı
      maxWidth: '90%',
      padding: '10px',
      fontSize: '0.9rem',
      marginBottom: '20px',
      margin: '0 auto 20px auto', // Ortala
      borderRadius: '25px',
    }
  },

  // 480px için daha da kompakt boyutlar
  '@media (max-width: 480px)': {
    customSectionContent: {
      
      alignItems: 'center',
    },
    
    content: {
      padding: '0 2px', // En az yan boşluk
      alignItems: 'center',
    },
    
    title: {
      fontSize: '1.rem', // Biraz daha küçük
      marginBottom: '10px',
      textAlign: 'center',
    },
    
    description: {
      fontSize: '0.8rem', // Biraz daha küçük
      marginBottom: '15px',
      width: '95%', // Genişliği biraz artır
      maxWidth: '95%',
      textAlign: 'center',
    },

    contactInfo: {
      gap: '10px',
      marginBottom: '20px',
    },
    
    contactItem: {
      minWidth: '95%',
      width: '95%',
      maxWidth: '95%',
      padding: '10px',
      margin: '0 auto 8px auto', // Ortala
      borderRadius: '8px',
    },
    
    iconWrapper: {
      width: '30px',
      height: '30px',
      fontSize: '1rem',
    },
    
    contactTitle: {
      fontSize: '0.8rem',
      textAlign: 'center',
    },
    
    contactValue: {
      fontSize: '0.7rem',
      textAlign: 'center',
    },

    tabNavigation: {
      width: '95%',
      maxWidth: '95%',
      gap: '8px',
      marginBottom: '15px',
      margin: '0 auto 15px auto',
    },
    
    tabButton: {
      padding: '8px 12px',
      fontSize: '0.8rem',
      borderRadius: '18px',
    },

    hireOptions: {
      gap: '10px',
    },
    
    hireOptionMobile: { // Bu stil hireOption ile birleşecek veya onu ezecek
      minWidth: '95%',
      width: '95%',
      maxWidth: '95%',
      padding: '15px',
      margin: '0 auto 10px auto', // Ortala
      borderRadius: '8px',
    },
    
    hireIconWrapper: {
      width: '40px',
      height: '40px',
      fontSize: '1.3rem',
      marginBottom: '8px',
    },
    
    hireTitle: {
      fontSize: '1rem',
      textAlign: 'center',
    },
    
    hireDescription: {
      fontSize: '0.75rem',
      lineHeight: '1.3',
      textAlign: 'center',
    },
    
    cvSection: {
      width: '95%',
      maxWidth: '95%',
      padding: '15px',
      margin: '0 auto 20px auto', // Ortala
      borderRadius: '8px',
    },
    
    cvTitle: {
      fontSize: '1rem',
      marginBottom: '6px',
      textAlign: 'center',
    },
    
    cvDescription: {
      fontSize: '0.75rem',
      marginBottom: '10px',
      textAlign: 'center',
    },
    
    cvButton: {
      padding: '8px 15px',
      fontSize: '0.8rem',
      borderRadius: '20px',
    },
    
    hireCTA: {
      width: '95%',
      maxWidth: '95%',
      padding: '8px',
      fontSize: '0.8rem',
      margin: '0 auto 15px auto', // Ortala
      borderRadius: '20px',
    }
  }
};

export default Contact;
