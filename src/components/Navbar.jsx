import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItem = ({ item, path, setMenuOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.hash === path || (location.pathname === '/' && path === '#anasayfa');
  
  const handleClick = (e) => {
    setMenuOpen(false);
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <li style={styles.menuItem}>
      <a 
        href={path}
        style={{
          ...styles.menuLink,
          color: isActive || isHovered ? 'var(--primary-color)' : 'var(--text-color)',
          borderBottom: isActive ? '2px solid var(--primary-color)' : 'none'
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

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Ana Sayfa', path: '#anasayfa' },
    { name: 'Hakkımda', path: '#hakkimda' },
    { name: 'Projeler', path: '#projeler' },
    { name: 'İletişim', path: '#iletisim' }
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
    backdropFilter: 'blur(10px)',
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
      backdropFilter: 'blur(10px)',
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
};

export default Navbar;