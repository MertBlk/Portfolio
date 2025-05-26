import React, { useState, useEffect } from 'react';
import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  
  // Çeviriler için güvenlik kontrolü
  const getTranslation = (path, defaultText) => {
    try {
      // path örneği: "navbar.home"
      const keys = path.split('.');
      let value = translations[language];
      
      for (const key of keys) {
        if (value && value[key] !== undefined) {
          value = value[key];
        } else {
          console.warn(`Translation key not found: ${path}`);
          return defaultText;
        }
      }
      
      return value;
    } catch (error) {
      console.error('Error getting translation:', error);
      return defaultText;
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      // Scroll pozisyonuna göre navbar'ı güncelle
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Aktif bölümü belirle
      const scrollPosition = window.scrollY + 100; // Offset ekleyebilirsiniz
      
      // Bölümleri ID'lerine göre alıp kontrol et
      const sections = ['home', 'about', 'projects', 'contact'].map(id => 
        document.getElementById(id)
      ).filter(el => el != null);
      
      // Home için özel kontrol (en üstte)
      if (scrollPosition < 200) {
        setActiveItem('home');
        return;
      }
      
      // Diğer bölümler için kontrol
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    setActiveItem(sectionId);
    
    // Ana sayfa için özel işlem
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // Diğer bölümler için
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <div className="nav-container" style={styles.navbarContainer}>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} style={{
        ...styles.navbar,
        ...(isScrolled ? styles.navbarScrolled : {}),
      }}>
        <div style={styles.navbarContent}>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            style={styles.logo}
          >
            <span style={styles.logoText}></span>
          </a>
          
          <button 
            className="mobile-menu-button"
            style={styles.mobileMenuButton} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div 
              style={{
                width: '24px',
                height: '3px',
                backgroundColor: isMobileMenuOpen ? 'transparent' : 'var(--text-color)',
                borderRadius: '2px',
                position: 'relative',
                transition: 'all 0.3s ease',
                marginTop: '12px'
              }}
            >
              <div style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                backgroundColor: 'var(--text-color)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                top: isMobileMenuOpen ? '0px' : '-8px',
                transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
              }}></div>
              
              <div style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                backgroundColor: 'var(--text-color)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                top: isMobileMenuOpen ? '0px' : '8px',
                transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'none',
              }}></div>
            </div>
          </button>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`} style={{
            ...styles.navLinks,
            ...(isMobileMenuOpen ? styles.navLinksMobile : {})
          }}>
            {/* Ana Sayfa */}
            <li className={isMobileMenuOpen ? 'mobile-nav-item' : ''} style={styles.navItem}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={`nav-link ${activeItem === 'home' ? 'nav-link-active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(activeItem === 'home' ? styles.navLinkActive : {})
                }}
              >
                {getTranslation('navbar.home', language === 'tr' ? 'Ana Sayfa' : 'Home')}
              </a>
            </li>
            
            {/* Hakkımda */}
            <li className={isMobileMenuOpen ? 'mobile-nav-item' : ''} style={styles.navItem}>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
                className={`nav-link ${activeItem === 'about' ? 'nav-link-active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(activeItem === 'about' ? styles.navLinkActive : {})
                }}
              >
                {getTranslation('navbar.about', language === 'tr' ? 'Hakkımda' : 'About')}
              </a>
            </li>
            
            {/* Projeler */}
            <li className={isMobileMenuOpen ? 'mobile-nav-item' : ''} style={styles.navItem}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
                className={`nav-link ${activeItem === 'projects' ? 'nav-link-active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(activeItem === 'projects' ? styles.navLinkActive : {})
                }}
              >
                {getTranslation('navbar.projects', language === 'tr' ? 'Projelerim' : 'Projects')}
              </a>
            </li>
            
            {/* İletişim */}
            <li className={isMobileMenuOpen ? 'mobile-nav-item' : ''} style={styles.navItem}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className={`nav-link ${activeItem === 'contact' ? 'nav-link-active' : ''}`}
                style={{
                  ...styles.navLink,
                  ...(activeItem === 'contact' ? styles.navLinkActive : {})
                }}
              >
                {getTranslation('navbar.contact', language === 'tr' ? 'İletişim' : 'Contact')}
              </a>
            </li>
            
            {/* Dil değiştirme */}
            <li style={styles.navItem}>
              <button 
                onClick={toggleLanguage} 
                style={styles.languageButton}
              >
                {language === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR'}
              </button>
            </li>
            
            {/* Mobil menü kapat butonu */}
            {isMobileMenuOpen && (
              <button 
                style={styles.closeButton}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbarContainer: {
    position: 'fixed',
    top: '20px',
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 1000,
  },
  navbar: {
    padding: '8px 16px',
    backgroundColor: 'rgba(25, 25, 25, 0.8)',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '50px',
    maxWidth: 'fit-content',
    transition: 'all 0.3s ease',
  },
  navbarScrolled: {
    backgroundColor: 'rgba(17, 17, 17, 0.9)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
    padding: '6px 16px',
  },
  navbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    position: 'relative',
  },
  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    zIndex: 1001,
    marginRight: '10px', // Logo ile menü arasında biraz boşluk
  },
  logoText: {
    fontSize: '1.5rem', // Biraz daha küçük logo
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    transition: 'all 0.3s ease',
    gap: '5px', // Öğeler arasında az boşluk
  },
  navLinksMobile: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'var(--bg-color)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    padding: '50px 20px',
    display: 'flex',
    borderRadius: 0, // Mobil menüde kenar yuvarlaklığı yok
  },
  navItem: {
    margin: '0 3px', // Daha az margin
    position: 'relative',
  },
  navLink: {
    display: 'inline-block',
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.9rem', // Daha küçük font
    fontWeight: 500,
    padding: '6px 14px', // Daha kompakt padding
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
  },
  navLinkActive: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--primary-color)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  languageButton: {
    backgroundColor: 'transparent',
    border: '1px solid var(--primary-color)',
    color: 'var(--primary-color)',
    padding: '5px 12px', // Daha kompakt padding
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '0.8rem', // Daha küçük font
    fontWeight: 500,
    transition: 'all 0.3s ease',
    marginLeft: '5px', // Soldaki öğeden biraz ayır
  },
  mobileMenuButton: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1001,
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
  closeButton: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: 'var(--text-color)',
    cursor: 'pointer',
  }
};

export default Navbar;