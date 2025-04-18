import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}> Tech</div>
      <ul style={styles.menu}>
        {['Ana Sayfa', 'Hakkımda', 'Projeler', 'İletişim'].map((item) => (
          <li key={item} style={styles.menuItem}>
            <a href={`#${item.toLowerCase().replace(' ', '')}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 5%',
    backgroundColor: 'transparent',
    backdropFilter: 'blur(10px)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: 'var(--primary-color)',
    transition: 'var(--transition)',
    cursor: 'pointer',
    ':hover': {
      color: 'var(--primary-hover)',
    },
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    position: 'relative',
    transition: 'var(--transition)',
  },
};

export default Navbar;