import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Yazılımcı Adı</div>
      <ul style={styles.menu}>
        <li><a href="#hero">Ana Sayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#0e0e0e',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'var(--primary-color)',
  },
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
};

export default Navbar;