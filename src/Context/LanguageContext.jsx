import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr');

  const translations = {
    tr: {
      // Hero bölümü
      greeting: "Selam! Ben",
      description: "Hayallerini koda döken bir geliştirici.",
      role: "Full Stack | Mobil Geliştirme",
      
      // Navbar
      nav: {
        home: "Ana Sayfa",
        about: "Hakkımda",
        projects: "Projeler",
        contact: "İletişim"
      },
      
      // About bölümü
      about: {
        title: "Hakkımda",
        description: "Merhaba! Ben modern web uygulamaları ve mobil uygulamalar geliştiren bir yazılımcıyım. React, React Native, JavaScript ve UI/UX konularında deneyimliyim. Aynı zamanda Python ve temel seviye C# bilgisine sahibim.",
        description2: "Performans odaklı, mobil uyumlu ve kullanıcı dostu sürümler geliştiriyorum. Her projede yeni teknolojileri ve öğrendiklerimi uygulamaya devam ediyorum. Sürekli öğrenme ve gelişime odaklanarak çalışıyorum.",
        skills: "Yeteneklerim"
      },
      
      // Projects bölümü
      projects: {
        title: "Projeler",
        viewProject: "Projeyi İncele"
      },
      
      // Contact bölümü
      contact: {
        title: "İletişim",
        description: "Projeleriniz için benimle iletişime geçebilir veya sorularınızı sorabilirsiniz. Aşağıdaki kanallardan bana ulaşabilirsiniz.",
        email: "E-posta",
        copyright: "Tüm Hakları Saklıdır"
      },
      
      // Project Detail bölümü
      projectDetail: {
        notFound: "Proje bulunamadı",
        technologiesTitle: "Teknolojiler",
        featuresTitle: "Özellikler",
        viewOnGithub: "GitHub'da İncele",
        projects: {
          "esya-hatirlatici": {
            title: "Eşya Hatırlatıcı App",
            description: "React Native ile yapılmış eşya hatırlatıcı uygulaması.",
            fullDescription: "Bu uygulama, kullanıcıların eşyalarını ve konumlarını kaydetmelerini ve hatırlamalarını sağlar. Kullanıcılar eşyalarının fotoğraflarını çekebilir, konum bilgilerini kaydedebilir ve bildirimler alabilirler.",
            features: [
              "Eşya fotoğrafı ve konum kaydetme",
              "Bildirim sistemi",
              "Konum bazlı hatırlatmalar",
              "Kategori yönetimi"
            ]
          },
          "arac-satis": {
            title: "Araç Satış Sitesi",
            description: "Araç satış sitesi tasarımı.",
            fullDescription: "Modern ve kullanıcı dostu bir araç satış platformu. Kullanıcılar araçlarını listeleyebilir, detaylı arama yapabilir ve favorilerine ekleyebilirler.",
            features: [
              "Detaylı araç listeleme",
              "Gelişmiş arama filtreleri",
              "Favori araç kaydetme",
              "İlan yönetim sistemi"
            ]
          },
          "e-ticaret": {
            title: "E-ticaret Tasarımı",
            description: "Modern ve kullanıcı dostu e-ticaret platformu",
            fullDescription: "Responsive tasarıma sahip modern bir e-ticaret platformu. Kullanıcılar ürünleri kategorilere göre filtreleyebilir, sepete ekleyebilir ve satın alma işlemlerini gerçekleştirebilirler. Admin paneli üzerinden ürün ve kategori yönetimi yapılabilir.",
            features: [
              "Responsive tasarım",
              "Ürün filtreleme ve arama",
              "Sepet yönetimi",
              "Kullanıcı hesap sistemi",
              "Admin paneli",
              "Ödeme entegrasyonu"
            ]
          },
          "otel-tanitim": {
            title: "Otel Tanıtım Sitesi",
            description: "Lüks otel tanıtım ve rezervasyon platformu",
            fullDescription: "Modern ve şık tasarıma sahip otel tanıtım sitesi. Kullanıcılar odaları inceleyebilir, fiyatları görebilir ve online rezervasyon yapabilirler. Ayrıca otelin sunduğu hizmetler, restoranlar ve aktiviteler hakkında detaylı bilgi edinebilirler.",
            features: [
              "Responsive tasarım",
              "Online rezervasyon sistemi",
              "Oda kategorileri ve detayları",
              "Fiyat karşılaştırma",
              "Otel hizmetleri tanıtımı",
              "Müşteri yorumları",
              "İletişim formu"
            ]
          },
          "ruvidoTekstil": {
            title: "Ruvido Tekstil Web Sitesi",
            description: "Ruvido Tekstil için modern ve şık bir web sitesi.",
            fullDescription: "Ruvido Tekstil için geliştirilen bu web sitesi, şirketin ürünlerini ve hizmetlerini sergilemek amacıyla modern bir tasarıma ve kullanıcı dostu bir arayüze sahiptir. Responsive tasarımı sayesinde tüm cihazlarda sorunsuz bir deneyim sunar.",
            features: ["Modern ve şık tasarım", "Responsive arayüz", "Ürün ve hizmet tanıtımı", "İletişim formu entegrasyonu"]
          }
        }
      }
    },
    en: {
      // Hero section
      greeting: "Hi! I'm",
      description: "A developer who turns dreams into code.",
      role: "Full Stack | Mobile Development",
      
      // Navbar
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact"
      },
      
      // About section
      about: {
        title: "About Me",
        description: "Hello! I am a software developer creating modern web and mobile applications. I am experienced in React, React Native, JavaScript, and UI/UX. I also have knowledge of Python and basic level C#.",
        description2: "I develop performance-oriented, mobile-friendly and user-friendly versions. In each project, I continue to implement new technologies and what I have learned. I work focusing on continuous learning and development.",
        skills: "My Skills"
      },
      
      // Projects section
      projects: {
        title: "Projects",
        viewProject: "View Project"
      },
      
      // Contact section
      contact: {
        title: "Contact",
        description: "You can get in touch with me for your projects or ask any questions. You can reach me through the channels below.",
        email: "Email",
        copyright: "All Rights Reserved"
      },
      
      // Project Detail section
      projectDetail: {
        notFound: "Project not found",
        technologiesTitle: "Technologies",
        featuresTitle: "Features",
        viewOnGithub: "View on GitHub",
        projects: {
          "esya-hatirlatici": {
            title: "Item Reminder App",
            description: "Item reminder application built with React Native.",
            fullDescription: "This application allows users to save and remember their items and locations. Users can take photos of their items, save location information, and receive notifications.",
            features: [
              "Save item photos and location",
              "Notification system",
              "Location-based reminders",
              "Category management"
            ]
          },
          "arac-satis": {
            title: "Vehicle Sales Website",
            description: "Vehicle sales website design.",
            fullDescription: "A modern and user-friendly vehicle sales platform. Users can list their vehicles, perform detailed searches, and add to favorites.",
            features: [
              "Detailed vehicle listing",
              "Advanced search filters",
              "Favorite vehicle saving",
              "Listing management system"
            ]
          },
          "e-ticaret": {
            title: "E-commerce Design",
            description: "Modern and user-friendly e-commerce platform",
            fullDescription: "A modern e-commerce platform with responsive design. Users can filter products by categories, add to cart, and complete purchase transactions. Product and category management can be done through the admin panel.",
            features: [
              "Responsive design",
              "Product filtering and search",
              "Cart management",
              "User account system",
              "Admin panel",
              "Payment integration"
            ]
          },
          "otel-tanitim": {
            title: "Hotel Promotion Website",
            description: "Luxury hotel promotion and reservation platform",
            fullDescription: "A hotel promotion website with modern and elegant design. Users can explore rooms, view prices, and make online reservations. They can also get detailed information about hotel services, restaurants, and activities.",
            features: [
              "Responsive design",
              "Online reservation system",
              "Room categories and details",
              "Price comparison",
              "Hotel services promotion",
              "Customer reviews",
              "Contact form"
            ]
          },
          "ruvidoTekstil": {
            title: "Ruvido Tekstil Website",
            description: "A modern and stylish website for Ruvido Tekstil.",
            fullDescription: "This website, developed for Ruvido Tekstil, features a modern design and a user-friendly interface to showcase the company's products and services. Its responsive design ensures a seamless experience across all devices.",
            features: ["Modern and stylish design", "Responsive interface", "Product and service showcase", "Contact form integration"]
          }
        }
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);