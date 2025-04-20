import React, { useEffect } from 'react';
import '../styles/StarBackground.css';

const StarBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.star-container');
    if (!container) return;

    const starCount = 200;
    const colors = [
      '#FFD700', // Altın sarısı
      '#FF69B4', // Pembe
      '#00FFFF', // Cyan
      '#7FFFD4', // Aquamarine
      '#98FB98', // Pale green
      '#87CEEB', // Sky blue
      '#F0E68C', // Khaki
      '#DDA0DD'  // Plum
    ];

    const createStars = () => {
      container.innerHTML = '';
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Yıldız boyutunu 1-3px arasında rastgele ayarla
        const size = 1 + Math.random() * 2;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Rastgele renk seç
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = color;
        star.style.boxShadow = `0 0 ${size + 2}px ${color}`;
        
        // Pozisyon ayarları
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Animasyon zamanlaması
        star.style.animationDelay = `${Math.random() * 3}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        
        container.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);
    
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return <div className="star-container" />;
};

export default StarBackground;
