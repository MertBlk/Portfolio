// ScrollManager.jsx
import { useEffect, useState } from 'react';

const ScrollManager = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = document.querySelector('.section-container');
    if (!container) return;

    // Kaydırma işlemini izleme
    const handleScroll = () => {
      const currentPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Hangi bölümün görünür olduğunu hesaplama
      const index = Math.floor((currentPosition + (windowHeight / 2)) / windowHeight);
      
      if (index !== activeSection) {
        setActiveSection(index);
      }
    };

    // Wheel event işlemesi
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Kaydırma yönü (yukarı veya aşağı)
      const direction = e.deltaY > 0 ? 1 : -1;
      
      // Yeni indeks hesaplama
      let newIndex = activeSection + direction;
      
      // Sınırları kontrol etme
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= sections.length) newIndex = sections.length - 1;
      
      // İlgili bölüme kaydırma
      scrollToSection(newIndex);
    };
    
    // Belirli bir bölüme kaydırma
    const scrollToSection = (index) => {
      if (index >= 0 && index < sections.length) {
        container.scrollTo({
          top: index * window.innerHeight,
          behavior: 'smooth'
        });
        setActiveSection(index);
      }
    };

    // Nokta gezinmesi için tıklama
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => scrollToSection(index));
    });

    // Ok tıklaması
    const arrows = document.querySelectorAll('.scroll-arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        scrollToSection(activeSection + 1);
      });
    });

    // Eventleri kaydetme
    container.addEventListener('scroll', handleScroll);
    
    // Temizleme
    return () => {
      container.removeEventListener('scroll', handleScroll);
      dots.forEach((dot, index) => {
        dot.removeEventListener('click', () => scrollToSection(index));
      });
      arrows.forEach(arrow => {
        arrow.removeEventListener('click', () => scrollToSection(activeSection + 1));
      });
    };
  }, [activeSection, sections]);

  return (
    <div className="navigation-dots">
      {sections.map((_, index) => (
        <div 
          key={index} 
          className={`dot ${index === activeSection ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ScrollManager;
