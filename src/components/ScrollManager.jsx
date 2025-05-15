// ScrollManager.jsx
import { useEffect, useState, useCallback, useRef } from 'react';
import useSwipe from '../hooks/useSwipe';

const ScrollManager = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Mobil cihaz kontrolü için
  
  // Zamanlayıcı referansları
  const scrollTimeoutRef = useRef(null);
  const wheelTimeoutRef = useRef(null);
  
  // Tüm animasyon sürelerini tek bir yerden yönetmek için sabit değerler
  const ANIMATION_DURATION = 800; // millisaniye cinsinden - responsive ve hızlı
  const DEBOUNCE_DELAY = 50; // millisaniye cinsinden
  
  // Ekran boyutunu kontrol et ve mobil durumunu ayarla
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // İlk yükleme
    checkMobile();
    
    // Pencere boyutu değiştiğinde de kontrol et
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // Swipe hook'unu kullan - mobil deneyim iyileştirmesi
  const { direction, swiping, handlers } = useSwipe({
    threshold: 80, // Kaydırma için gerekli minimum mesafe (pixel)
    timeout: ANIMATION_DURATION, // Kaydırma tamamlandıktan sonra bekleme
    preventDefaultEvents: true // Tarayıcı davranışını engelle
  });

  // Aktif bölümü işaretleme fonksiyonu
  const markActiveSection = useCallback((index) => {
    const sectionElements = document.querySelectorAll('.section');
    sectionElements.forEach((section, i) => {
      if (i === index) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }, []);
  
  // Belirli bir bölüme kaydırma
  const scrollToSection = useCallback((index) => {
    const container = document.querySelector('.section-container');
    if (!container || index < 0 || index >= sections.length) return;
    
    // Önce smooth davranışını kapat (daha güvenilir kaydırma için)
    container.style.scrollBehavior = 'auto';
    
    // Kısa bir gecikme ile tekrar smooth'a çevir
    setTimeout(() => {
      container.style.scrollBehavior = 'smooth';
      
      // Şimdi kaydır
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
      
      // Aktif bölümü güncelle
      setActiveSection(index);
      markActiveSection(index);
    }, 10);
  }, [sections.length, markActiveSection]);

  // Swipe yönüne göre kaydırma yapma
  useEffect(() => {
    if (swiping && direction && !isScrolling) {
      // Kaydırma yönüne göre yeni indeks hesapla
      const newDirection = direction === 'up' ? 1 : -1;
      const newIndex = activeSection + newDirection;
      
      // Sınırları kontrol et
      if (newIndex >= 0 && newIndex < sections.length) {
        // Zamanlayıcıları temizle
        clearTimeout(scrollTimeoutRef.current);
        
        // Kaydırma başladı
        setIsScrolling(true);
        
        // Yeni bölüme git
        scrollToSection(newIndex);
        
        // Kaydırma tamamlandıktan sonra işlemi bitir
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, ANIMATION_DURATION);
      }
    }
  }, [direction, swiping, activeSection, sections.length, isScrolling, scrollToSection]);
  
  useEffect(() => {
    const container = document.querySelector('.section-container');
    if (!container) return;

    // İlk yüklemede aktif bölümü işaretle
    markActiveSection(activeSection);

    // Kaydırma işlemini izleme
    const handleScroll = () => {
      // Performans için debounce ekle
      clearTimeout(container.scrollTimeout);
      container.scrollTimeout = setTimeout(() => {
        const currentPosition = container.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Hangi bölümün görünür olduğunu hesaplama
        let index = Math.round(currentPosition / windowHeight);
        
        // Sınırları kontrol et
        if (index < 0) index = 0;
        if (index >= sections.length) index = sections.length - 1;
        
        // Bölümün ne kadarının görünür olduğunu hesapla
        const visibilityThreshold = 0.50; // Bölümün en az %50'si görünür olmalı
        const sectionVisibility = 1 - Math.abs((currentPosition - (index * windowHeight)) / windowHeight);
        
        if (sectionVisibility < visibilityThreshold) {
          // Eğer bölüm yeterince görünmüyorsa, hangi bölüme daha yakınsa onu seç
          index = currentPosition > index * windowHeight ? index + 1 : index - 1;
          
          // Sınırları tekrar kontrol et
          if (index < 0) index = 0;
          if (index >= sections.length) index = sections.length - 1;
        }
        
        if (index !== activeSection) {
          setActiveSection(index);
          markActiveSection(index);
        }
      }, DEBOUNCE_DELAY);
    };

    // Wheel event işlemesi
    let wheelAccumulator = 0;
    const wheelThreshold = 10; // Hassasiyet değeri
    
    const handleWheel = (e) => {
      if (isScrolling) return; // Zaten kaydırma varsa işlemi atla
      e.preventDefault();
      
      // Tekerlek hareketini biriktirelim (smooth scroll için)
      wheelAccumulator += e.deltaY;
      
      // Kısa bir süre bekleyerek hızlı wheel hareketlerini birleştirelim
      clearTimeout(wheelTimeoutRef.current);
      wheelTimeoutRef.current = setTimeout(() => {
        // Eşik değerinden düşükse görmezden gel (titreme önleme)
        if (Math.abs(wheelAccumulator) < wheelThreshold) {
          wheelAccumulator = 0;
          return;
        }
        
        // Kaydırma yönü (yukarı veya aşağı)
        const direction = wheelAccumulator > 0 ? 1 : -1;
        wheelAccumulator = 0; // Sıfırla
        
        // Yeni indeks hesaplama
        let newIndex = activeSection + direction;
        
        // Sınırları kontrol etme
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= sections.length) newIndex = sections.length - 1;
        
        if (newIndex !== activeSection) {
          // İşlem devam ederken zamanlayıcıları temizle
          clearTimeout(scrollTimeoutRef.current);
          
          // Kaydırma başladığında bayrağı ayarla
          setIsScrolling(true);
          
          // İlgili bölüme kaydırma
          scrollToSection(newIndex);
          
          // Kaydırma tamamlandıktan sonra bayrağı sıfırla
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
      }, 30); // 30ms bekle (daha hızlı yanıt)
    };

    // Ok tıklaması
    const arrows = document.querySelectorAll('.scroll-arrow');
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (!isScrolling && activeSection < sections.length - 1) {
          setIsScrolling(true);
          scrollToSection(activeSection + 1);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
      });
    });

    // Klavye navigasyonu
    const handleKeyDown = (e) => {
      // Enter, Space veya Home/End tuşları için özel işlem
      if (e.key === 'Home') {
        e.preventDefault();
        // İlk bölüme git
        if (activeSection !== 0) {
          clearTimeout(scrollTimeoutRef.current);
          setIsScrolling(true);
          scrollToSection(0);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
        return;
      }
      
      if (e.key === 'End') {
        e.preventDefault();
        // Son bölüme git
        const lastIndex = sections.length - 1;
        if (activeSection !== lastIndex) {
          clearTimeout(scrollTimeoutRef.current);
          setIsScrolling(true);
          scrollToSection(lastIndex);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
        return;
      }
      
      // İşlem devam ediyorsa çık (HOME ve END için geçerli değil)
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'Space') {
        e.preventDefault(); // Sayfanın kendi kaydırmasını engelle
        if (activeSection < sections.length - 1) {
          clearTimeout(scrollTimeoutRef.current);
          setIsScrolling(true);
          scrollToSection(activeSection + 1);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (activeSection > 0) {
          clearTimeout(scrollTimeoutRef.current);
          setIsScrolling(true);
          scrollToSection(activeSection - 1);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
      } 
      // 1-9 tuşları ile direkt bölüm geçişi
      else if (!isNaN(parseInt(e.key)) && parseInt(e.key) > 0 && parseInt(e.key) <= sections.length) {
        const sectionIndex = parseInt(e.key) - 1; // 0-bazlı indeks
        if (sectionIndex !== activeSection) {
          clearTimeout(scrollTimeoutRef.current);
          setIsScrolling(true);
          scrollToSection(sectionIndex);
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, ANIMATION_DURATION);
        }
      }
    };
    
    // Eventleri kaydetme
    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    // Dokunma olayları (useSwipe hook'u için)
    container.addEventListener('touchstart', handlers.onTouchStart);
    container.addEventListener('touchmove', handlers.onTouchMove, { passive: false });
    container.addEventListener('touchend', handlers.onTouchEnd);
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Temizleme
    return () => {
      // Event dinleyicileri temizle
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handlers.onTouchStart);
      container.removeEventListener('touchmove', handlers.onTouchMove);
      container.removeEventListener('touchend', handlers.onTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      
      // Ok butonlarını temizle (event dinleyici sızıntısını önlemek için)
      arrows.forEach(arrow => {
        arrow.replaceWith(arrow.cloneNode(true));
      });
      
      // Tüm zamanlayıcıları temizle
      clearTimeout(container.scrollTimeout);
      clearTimeout(scrollTimeoutRef.current);
      clearTimeout(wheelTimeoutRef.current);
      
      // Tarayıcının varsayılan davranışını geri yükle
      container.style.scrollBehavior = '';
    };
  }, [activeSection, sections, isScrolling, markActiveSection, scrollToSection, handlers]);

  // Doğrudan React olayları kullanarak noktaları işleyelim
  const handleDotClick = (index) => {
    if (isScrolling) {
      // Bile bile isScrolling durumundayken bile mevcut kaydırmayı iptal edip
      // kullanıcının istediği bölüme gitmeyi zorlayalım (daha iyi kullanıcı deneyimi)
      // İlk önce mevcut tüm zamanlayıcıları temizle
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Kaydırma işlemini başlat (her durumda)
    setIsScrolling(true);
    
    // İlgili bölüme kaydır
    scrollToSection(index);
    
    // Kaydırma tamamlandıktan sonra bayrağı sıfırla
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, ANIMATION_DURATION);
  };
  
  // Mobil cihazlarda daha iyi görünüm için className belirle
  const dotsClassName = isMobile ? "navigation-dots mobile" : "navigation-dots";

  return (
    <div className={dotsClassName} style={{
      // Mobilde aktif bölüme göre pozisyon değişsin
      // Bu mobilin her section tipinde dots'u düzgün konumlandırmayı sağlar
      ...(isMobile && {
        zIndex: 1000, // Her zaman önde görünsün
      })
    }}>
      {sections.map((section, index) => (
        <div 
          key={index} 
          className={`dot ${index === activeSection ? 'active' : ''}`}
          aria-label={`Bölüm ${index + 1}'e git: ${section}`}
          onClick={() => handleDotClick(index)}
          // Erişilebilirlik ve kullanıcı dostu olması için:
          role="button"
          tabIndex={0} // Klavye ile odaklanabilir
          onKeyDown={(e) => {
            // Enter veya Space basıldığında tıklama işlemini tetikle
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleDotClick(index);
            }
          }}
          title={`Bölüm ${index + 1}: ${section}`} // Tooltip metni
          data-section={index}
        />
      ))}
    </div>
  );
};

export default ScrollManager;
