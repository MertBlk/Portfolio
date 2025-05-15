import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../Context/LanguageContext';

const MenuItem = ({ item, path, setMenuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  
  const handleClick = (e) => {
    setMenuOpen(false);
    if (path.startsWith('#')) {
      e.preventDefault();
      const sectionId = path.substring(1);
      const sectionContainer = document.querySelector('.section-container');
      if (sectionContainer) {
        // Bölüm indeksini belirle
        let sectionIndex = 0;
        if (sectionId === 'hero') sectionIndex = 0;
        else if (sectionId === 'about') sectionIndex = 1;
        else if (sectionId === 'projects') sectionIndex = 2;
        else if (sectionId === 'contact') sectionIndex = 3;

        // Önce mevcut kaydırma durumunu temizle
        const dots = document.querySelectorAll('.navigation-dots .dot');
        if (dots && dots[sectionIndex]) {
          // Dot'a otomatik olarak tıkla (önceden oluşturduğumuz mantığı kullan)
          const clickEvent = new Event('click', { bubbles: true });
          dots[sectionIndex].dispatchEvent(clickEvent);
        } else {
          // Yedek yöntem: doğrudan kaydırma
          // Önce smooth olmadan hızlı konumla
          sectionContainer.style.scrollBehavior = 'auto';
          
          // Kısa bir gecikmeyle smooth davranışına geç
          setTimeout(() => {
            sectionContainer.style.scrollBehavior = 'smooth';
            
            // İlgili bölüme kaydır
            sectionContainer.scrollTo({
              top: sectionIndex * window.innerHeight,
              behavior: 'smooth'
            });
          }, 10);
        }
      }
    }
  };
  
  return (
    <li style={styles.menuItem}>
      <a 
        href={path}
        style={{
          ...styles.menuLink,
          color: isHovered ? 'var(--primary-color)' : 'var(--text-color)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {item}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, translations, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: translations[language].nav.home, path: '#hero' },
    { name: translations[language].nav.about, path: '#about' },
    { name: translations[language].nav.projects, path: '#projects' },
    { name: translations[language].nav.contact, path: '#contact' }
  ];

  return (
    <nav style={{
      ...styles.nav,
      ...(scrolled ? styles.navScrolled : {})
    }}>
      <div style={{
        ...styles.navContainer,
        ...(scrolled ? styles.navContainerScrolled : {})
      }}>
        <div 
          style={styles.hamburger} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={{...styles.bar, ...(menuOpen && styles.bar1)}}></div>
          <div style={{...styles.bar, ...(menuOpen && styles.bar2)}}></div>
          <div style={{...styles.bar, ...(menuOpen && styles.bar3)}}></div>
        </div>
        
        <ul style={{
          ...styles.menu,
          ...(menuOpen ? styles.menuOpen : styles.menuClosed)
        }}>
          {menuItems.map((item) => (
            <MenuItem 
              key={item.name} 
              item={item.name} 
              path={item.path}
              setMenuOpen={setMenuOpen} 
            />
          ))}
          <li style={styles.menuItem}>
            <button
              onClick={toggleLanguage}
              style={{
                ...styles.langButton,
                color: 'var(--text-color)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '500',
                padding: '5px 10px',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0',
    position: 'fixed',
    top: '20px',
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
  },
  navScrolled: {
    top: '10px',
    padding: '10px 0',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'center', // Değişiklik: space-between yerine center
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(7px)',
    borderRadius: '50px',
    padding: '10px 30px',
    maxWidth: '800px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  navContainerScrolled: {
    backgroundColor: 'rgba(26, 26, 26, 0.95)',
    padding: '8px 25px',
  },
  // Logo stili kaldırıldı veya gizlendi
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '25px',
    margin: 0,
    padding: 0,
    
    '@media (max-width: 768px)': {
      position: 'absolute',
      flexDirection: 'column',
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(7px)',
      top: 'calc(100% + 10px)',
      right: 'auto', // Değişiklik: right: 0 yerine auto
      left: '50%', // Ekleme: mobilde ortada olması için
      transform: 'translateX(-50%)', // Ekleme: mobilde tam ortada olması için
      borderRadius: '15px',
      padding: '20px',
      boxShadow: 'var(--card-shadow)',
      transition: 'var(--transition)',
    }
  },
  menuItem: {
    position: 'relative',
    transition: 'var(--transition)',
  },
  menuLink: {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    padding: '5px 0',
    position: 'relative',
    // Hover stilini burada ekliyoruz
    ':after': {
      content: '""',
      position: 'absolute',
      bottom: '-2px',
      left: '0',
      width: '0%',
      height: '2px',
      backgroundColor: 'var(--primary-color)',
      transition: 'all 0.3s ease',
    },
    ':hover:after': {
      width: '100%',
    },
  },
  
  
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '20px',
    cursor: 'pointer',
    zIndex: 1001,
    position: 'absolute', // Ekleme: Hamburger menüsü konumu için
    right: '20px', // Ekleme: Sağ kenardan 20px içeride
    
    '@media (max-width: 768px)': {
      display: 'flex',
    }
  },
  
  bar: {
    height: '2px',
    width: '100%',
    backgroundColor: 'var(--text-color)',
    transition: 'var(--transition)',
  },
  
  bar1: {
    transform: 'rotate(-45deg) translate(-5px, 6px)',
  },
  
  bar2: {
    opacity: 0,
  },
  
  bar3: {
    transform: 'rotate(45deg) translate(-5px, -6px)',
  },
  
  menuClosed: {
    '@media (max-width: 768px)': {
      opacity: 0,
      visibility: 'hidden',
      transform: 'translateX(-50%) translateY(-20px)', // Değişiklik: translateX(-50%) ekledik
    }
  },
  
  menuOpen: {
    '@media (max-width: 768px)': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateX(-50%) translateY(0)', // Değişiklik: translateX(-50%) ekledik
    }
  },
  langButton: {
    ':hover': {
      color: 'var(--primary-color)',
    }
  }
};

export default Navbar;