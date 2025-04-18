import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}></div>
        
        {/* Mobil hamburger menü */}
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
          {['Ana Sayfa', 'Hakkımda', 'Projeler', 'İletişim'].map((item) => (
            <li key={item} style={styles.menuItem}>
              <a 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                style={styles.menuLink}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
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
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    padding: '10px 30px',
    maxWidth: '800px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    color: 'var(--primary-color)',
    transition: 'var(--transition)',
    cursor: 'pointer',
  },
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
      right: 0,
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
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '24px',
    height: '20px',
    cursor: 'pointer',
    zIndex: 1001,
    
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
      transform: 'translateY(-20px)',
    }
  },
  
  menuOpen: {
    '@media (max-width: 768px)': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    }
  },
  menuLink: {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'var(--transition)',
    padding: '5px 0',
    ':hover': {
      color: 'var(--primary-color)',
    },
  },
};

export default Navbar;