import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useLanguage } from '../Context/LanguageContext';

const Navbar = () => {
  const { language, toggleLanguage, translations } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  
  // Ekran boyutu kontrolü için react-responsive kullanımı
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  
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
        ...(isMobileMenuOpen ? { 
          backgroundColor: 'transparent', 
          backdropFilter: 'none',
          boxShadow: 'none' 
        } : {}),
        // Mobil için özel stiller
        ...(isMobile ? {
          padding: '0',
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
          borderRadius: '0',
          maxWidth: '100%',
          width: '100%'
        } : {})
      }}>
        <div style={{
          ...styles.navbarContent,
          // Mobilde sadece hamburger menü için minimal padding ve sola hizalama
          ...(isMobile ? {
            padding: '16px 20px',
            justifyContent: 'flex-start',
            width: '100%'
          } : {})
        }}>
          {/* Logo - sadece desktop'ta görünür */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            style={{
              ...styles.logo,
              display: isMobile ? 'none' : 'flex'
            }}
          >
            <span style={styles.logoText}></span>
          </a>
          
          {/* Hamburger menüsü - sadece mobilde görünür */}
          <button 
            className="mobile-menu-button"
            style={{
              ...styles.mobileMenuButton,
              display: isMobile ? 'block' : 'none'
            }} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div 
              style={{
                width: '24px',
                height: '3px',
                backgroundColor: isMobileMenuOpen ? 'transparent' : '#ffffff', // Beyaz renk
                borderRadius: '1px', // Daha az yuvarlatılmış kenarlar
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
                backgroundColor: '#ffffff', // Beyaz renk
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                top: isMobileMenuOpen ? '0px' : '-8px',
                transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
              }}></div>
              
              <div style={{
                content: '',
                position: 'absolute',
                width: '24px',
                height: '3px',
                backgroundColor: '#ffffff', // Beyaz renk
                borderRadius: '1px',
                transition: 'all 0.3s ease',
                top: isMobileMenuOpen ? '0px' : '8px',
                transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'none',
              }}></div>
            </div>
          </button>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`} style={{
            ...styles.navLinks,
            ...(isMobileMenuOpen ? styles.navLinksMobile : {}),
            display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex'
          }}>
            {(!isMobile || isMobileMenuOpen) ? (
              <>
                <li style={{
                  ...styles.navItem,
                  ...(isMobileMenuOpen ? { margin: '10px 0' } : {})
                }}>
                  <a
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                    }}
                    style={{
                      ...styles.navLink,
                      ...(activeItem === 'home' ? styles.navLinkActive : {}),
                      ...(isMobileMenuOpen ? { 
                        fontSize: '1.1rem', 
                        padding: '12px 25px',
                        minWidth: '200px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '25px'
                      } : {})
                    }}
                  >
                    {getTranslation('navbar.home', language === 'tr' ? 'Ana Sayfa' : 'Home')}
                  </a>
                </li>
                <li style={{
                  ...styles.navItem,
                  ...(isMobileMenuOpen ? { margin: '10px 0' } : {})
                }}>
                  <a
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                    }}
                    style={{
                      ...styles.navLink,
                      ...(activeItem === 'about' ? styles.navLinkActive : {}),
                      ...(isMobileMenuOpen ? { 
                        fontSize: '1.3rem', 
                        padding: '15px 25px',
                        minWidth: '200px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '25px'
                      } : {})
                    }}
                  >
                    {getTranslation('navbar.about', language === 'tr' ? 'Hakkımda' : 'About')}
                  </a>
                </li>
                <li style={{
                  ...styles.navItem,
                  ...(isMobileMenuOpen ? { margin: '10px 0' } : {})
                }}>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('projects');
                      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                    }}
                    style={{
                      ...styles.navLink,
                      ...(activeItem === 'projects' ? styles.navLinkActive : {}),
                      ...(isMobileMenuOpen ? { 
                        fontSize: '1.3rem', 
                        padding: '15px 25px',
                        minWidth: '200px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '25px'
                      } : {})
                    }}
                  >
                    {getTranslation('navbar.projects', language === 'tr' ? 'Projelerim' : 'Projects')}
                  </a>
                </li>
                <li style={{
                  ...styles.navItem,
                  ...(isMobileMenuOpen ? { margin: '10px 0' } : {})
                }}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                    }}
                    style={{
                      ...styles.navLink,
                      ...(activeItem === 'contact' ? styles.navLinkActive : {}),
                      ...(isMobileMenuOpen ? { 
                        fontSize: '1.3rem', 
                        padding: '15px 25px',
                        minWidth: '200px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '25px'
                      } : {})
                    }}
                  >
                    {getTranslation('navbar.contact', language === 'tr' ? 'İletişim' : 'Contact')}
                  </a>
                </li>
                <li style={{
                  ...styles.navItem,
                  ...(isMobileMenuOpen ? { margin: '10px 0' } : {})
                }}>
                  <button 
                    onClick={() => {
                      toggleLanguage();
                      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
                    }} 
                    style={{
                      ...styles.languageButton,
                      ...(isMobileMenuOpen ? { 
                        fontSize: '1.1rem', 
                        padding: '12px 20px',
                        minWidth: '120px'
                      } : {})
                    }}
                  >
                    {language === 'tr' ? '🇬🇧 EN' : '🇹🇷 TR'}
                  </button>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  navbarContainer: {
    position: 'fixed',
    top: '0',
    left: 0,
    right: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    margin: '0 auto',
  },
  navbar: {
    textAlign: 'center',
    padding: '6px 16px',
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
    padding: '4px 16px',
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
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary-color)',
    letterSpacing: '1px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
    padding: '6px 0',
    transition: 'all 0.3s ease',
    gap: '5px',
  },
  navLinkActive: {
    color: 'var(--primary-color)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  navLinksMobile: {
    position: 'fixed',
    top: '0',
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: '#000000', // Tamamen siyah arkaplan
    backdropFilter: 'none', // Blur efektini kaldırdık
    flexDirection: 'column',
    justifyContent: 'center', // İçeriği dikey olarak ortala
    alignItems: 'center',
    zIndex: 1050,
    padding: '0', // Padding'i sıfırla, içerik merkezde görünsün
    display: 'flex',
    borderRadius: 0,
    gap: '20px', // Menü öğeleri arasındaki boşluğu artır
    margin: 0,
  },
  navItem: {
    margin: '0 3px',
    position: 'relative',
  },
  navLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: 500,
    padding: '6px 14px',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    backgroundColor: 'transparent',
    lineHeight: 1,
  },
  languageButton: {
    backgroundColor: 'transparent',
    border: '1px solid var(--primary-color)',
    color: 'var(--primary-color)',
    padding: '4px 12px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '0.8rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    marginLeft: '5px',
    lineHeight: 1,
  },
  mobileMenuButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1051,
    position: 'relative',
    width: '40px',
    height: '40px',
    borderRadius: '0',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
  },
};

export default Navbar;