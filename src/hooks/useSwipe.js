// useSwipe.js
// Mobil cihazlar için dokunmatik kaydırma hook'u
import { useState, useEffect } from 'react';

const useSwipe = (options = {}) => {
  const {
    threshold = 50,           // Kaydırma olarak algılanacak minimum mesafe
    timeout = 300,            // Kaydırma sonrası bekleme süresi (ms)
    preventDefaultEvents = true, // Varsayılan davranışları engelleme
  } = options;
  
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);
  const [swiping, setSwiping] = useState(false);
  const [direction, setDirection] = useState(null);
  
  // Dokunma başlangıç olayı
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchEndY(null);
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
    setSwiping(true);
    setDirection(null);
  };
  
  // Dokunma hareket olayı
  const onTouchMove = (e) => {
    if (!touchStartX || !touchStartY) return;
    
    setTouchEndX(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
    
    // Dikey mesafe yatay mesafeden büyükse ve eşiği geçtiyse
    const deltaY = touchStartY - e.targetTouches[0].clientY;
    const deltaX = touchStartX - e.targetTouches[0].clientX;
    
    // Dikey kaydırma kontrolü
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > threshold / 2) {
      if (preventDefaultEvents) {
        e.preventDefault();
      }
      
      // Yön belirleme
      setDirection(deltaY > 0 ? 'up' : 'down');
    }
  };
  
  // Dokunma bitirme olayı
  const onTouchEnd = (e) => {
    if (!touchStartX || !touchStartY || !touchEndX || !touchEndY) {
      setSwiping(false);
      return;
    }
    
    // Mesafeleri hesapla
    const deltaY = touchStartY - touchEndY;
    const deltaX = touchStartX - touchEndX;
    
    // Yeterli mesafede kaydırma oldu mu?
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > threshold) {
      // Yön belirleme
      const dir = deltaY > 0 ? 'up' : 'down';
      setDirection(dir);
      
      // Kaydırma tamamlandıktan sonra sıfırlama
      setTimeout(() => {
        setSwiping(false);
        setTouchStartX(null);
        setTouchStartY(null);
        setTouchEndX(null);
        setTouchEndY(null);
      }, timeout);
    } else {
      setSwiping(false);
      setDirection(null);
    }
  };
  
  return {
    touchStartX,
    touchStartY,
    touchEndX,
    touchEndY,
    swiping,
    direction,
    handlers: {
      onTouchStart,
      onTouchMove,
      onTouchEnd,
    },
  };
};

export default useSwipe;
