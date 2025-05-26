import React, { useState, useEffect, useRef } from 'react';
import esyaHatirlatici from '../assets/images/esyaHatirlatici.jpeg';
import esyaHatirlatici2 from '../assets/images/esyaHatirlatici2.jpeg';
import ruvido from '../assets/images/ruvido.jpeg';
import { useLanguage } from '../Context/LanguageContext';

const Projects = () => {
  const { language, translations } = useLanguage();
  const text = translations[language].projects;
  
  // Debug for image paths
  useEffect(() => {
    console.log('Projects component loaded');
    console.log('Vite BASE_URL:', import.meta.env.BASE_URL);
    
    // Test image paths for each project
    projectsData.forEach(project => {
      if (project.images && project.images.length > 0) {
        const firstImage = project.images[0];
        const processedPath = getImagePath(firstImage);
        
        console.log(`Project ${project.id} (${project.title[language]}) test:`, { 
          originalPath: firstImage,
          processedPath: processedPath
        });
        
        // Test path
        const testImg = new Image();
        testImg.onload = () => console.log(`✅ ${project.title[language]} image loaded: ${processedPath}`);
        testImg.onerror = () => console.log(`❌ ${project.title[language]} image failed to load: ${processedPath}`);
        testImg.src = processedPath;
      }
    });
  }, [language]);

  // Image path helper function
  const getImagePath = (path) => {
    // If path is undefined or empty, return default image
    if (!path) {
      console.warn('Image path is undefined');
      return '';
    }
    
    // If path references an imported variable, use that
    if (path === 'esyaHatirlatici.jpeg') {
      return esyaHatirlatici;
    }
    if (path === 'esyaHatirlatici2.jpeg') {
      return esyaHatirlatici2;
    }
    if (path === 'ruvido.jpeg') {
      return ruvido;
    }
    
    // If image is already a full URL, use it
    if (path.startsWith('http')) {
      return path;
    }
    
    // For images in the public folder
    try {
      // Use Vite base setting (/Portfolio/)
      const basePath = import.meta.env.BASE_URL || '/';
      
      // Normalize path - remove leading slash
      let imagePath = path;
      if (imagePath.startsWith('/')) {
        imagePath = imagePath.substring(1);
      }
      
      // Add base path
      return `${basePath}${imagePath}`;
    } catch (error) {
      console.error('Error creating image path:', error);
      return path; // Return original path in case of error
    }
  };
  
  const projectsData = [
    {
      id: 1,
      title: {
        tr: "Eşya Hatırlatıcı Uygulaması",
        en: "Item Reminder App"
      },
      description: {
        tr: "Tek bir amaca hizmet eden ve bu amacı etkili bir şekilde yerine getiren bir uygulama. Konum tabanlı bildirimler ve kullanıcı dostu arayüz ile eşyalarınızı hatırlamanıza yardımcı olur.",
        en: "An application with a single purpose, developed to serve that purpose effectively. It provides location-based notifications and a user-friendly interface to help users remember their items."
      },
      technologies: ["React Native", "JavaScript"],
      features: {
        tr: [
          "Duyarlı tasarım (tüm cihazlarda çalışır)",
          "Koyu/açık tema desteği",
          "Animasyonlu geçişler",
          "Konum tabanlı bildirimler",
          "Kullanıcı dostu arayüz",
          "Eşya hatırlatma ve bildirim sistemi"
        ],
        en: [
          "Responsive design (works on all devices)",
          "Dark/light theme support",
          "Animated transitions",
          "Location-based notifications",
          "User-friendly interface",
          "Item reminder and notification system"
        ]
      },
      images: [
        'esyaHatirlatici.jpeg',
        'esyaHatirlatici2.jpeg',
        "images/esyaBildirim.png",
        "images/esyaKonum.png",
        "images/esyaAyar.png"
      ]
    },    
    {
      id: 2,
      title: {
        tr: "E-Ticaret Platformu",
        en: "E-Commerce Platform"
      },
      description: {
        tr: "Kapsamlı bir e-ticaret platformu. React ve Node.js ile geliştirilmiş, kullanıcı kimlik doğrulama, ürün katalogları, sepet yönetimi ve ödeme işleme özellikleri içerir.",
        en: "A comprehensive e-commerce platform. Developed with React and Node.js, includes user authentication, product catalogs, cart management, and payment processing."
      },
      technologies: ["React", "Node.js", "Firebase", "Virtual-POS"],
      features: {
        tr: [
          "Kullanıcı kaydı ve kimlik doğrulama",
          "Ürün arama ve filtreleme",
          "Sepet ve favoriler yönetimi",
          "Güvenli ödeme işleme",
          "Admin paneli ile ürün yönetimi"
        ],
        en: [
          "User registration and authentication",
          "Product search and filtering",
          "Cart and favorites management",
          "Secure payment processing",
          "Product management with admin panel"
        ]
      },
      images: [
        "images/ruvidoHome.png",
        "images/ruvidoNavbar.png", 
        "images/ruvidoSepet.png",
        "images/ruvidoKoleksiyon.png",
        "images/ruvidoAdminEkleme.png",
        "images/ruvidoUrunDuzenleme.png",
        "images/ruvidoProfil.png"
      ]
    },
    {
      id: 3,
      title: {
        tr: "Kurumsal Web Sitesi",
        en: "Corporate Website"
      },
      description: {
        tr: "Kurumsal şirketler için özel olarak tasarlanmış bir web sitesi. Modern tasarım ve kullanıcı dostu arayüz ile kurumsal iletişimi güçlendirir.",
        en: "A website specially designed for corporate companies. Strengthens corporate communication with modern design and user-friendly interface."
      },
      technologies: ["React"],
      features: {
        tr: [
          "Kurumsal iletişim formları",
          "Hizmet sunumları",
          "Referans projeler",
          "Blog ve haber güncellemeleri",
          "İletişim bilgileri ve harita"
        ],
        en: [
          "Corporate communication forms",
          "Service presentations",
          "Reference projects",
          "Blog and news updates",
          "Contact information and map"
        ]
      },
      images: [
        "images/ruvidoTekstil.png",
        "images/ruvido3.png",
        "images/ruvido4.png",
        "images/ruvido5.png"
      ]
    },
    {
      id: 4,
      title: {
        tr: "Araç Satış Platformu",
        en: "Vehicle Sales Platform"
      },
      description: {
        tr: "Kapsamlı araç alım ve satım platformu. Kullanıcılar araç ilanları oluşturabilir, arama yapabilir ve detaylı araç bilgilerine erişebilir.",
        en: "Comprehensive vehicle buying and selling platform. Users can post vehicle listings, search, and access detailed vehicle information."
      },
      technologies: ["React", "Node.js"],
      features: {
        tr: [
          "Araç ilanı oluşturma ve yönetimi",
          "Gelişmiş arama ve filtreleme seçenekleri",
          "Kullanıcı hesap yönetimi",
          "Araç fotoğraf galerisi"
        ],
        en: [
          "Vehicle listing creation and management",
          "Advanced search and filtering options",
          "User account management",
          "Vehicle photo gallery"
        ]
      },
      images: [
        "images/aracSatis.png", 
        "images/aracIlan.png",
        "images/aracHesap.png"
      ]
    },
    {
      id: 5,
      title: {
        tr: "Otel Web Sitesi",
        en: "Hotel Website"
      },
      description: {
        tr: "Otel hakkında tüm bilgileri içeren kullanıcı dostu arayüze sahip bir web sitesi.",
        en: "A website with a user-friendly interface containing all information about the hotel."
      },
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: {
        tr: [
          "Gelişmiş otel ve oda arama filtresi",
          "İnteraktif harita üzerinde otel görselleştirme",
          "Çoklu oda rezervasyon seçenekleri",
          "Kullanıcı yorumları ve puanlamaları",
          "Özel teklifler ve indirim sistemi"
        ],
        en: [
          "Advanced hotel and room search filtering",
          "Hotel visualization on interactive map",
          "Multiple room reservation options",
          "User reviews and ratings",
          "Special offers and discount system"
        ]
      },
      images: [
        "images/otel.jpeg", 
        "images/otel2.jpeg",
        "images/otel3.jpeg"
      ]
    }
  ];
  
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [activeImageIndices, setActiveImageIndices] = useState({});
  const [imageErrors, setImageErrors] = useState({}); // Hatalı görselleri takip et
  const [loadingImages, setLoadingImages] = useState({}); // Yüklenen görselleri takip et
  const projectRefs = useRef(projectsData.map(() => React.createRef()));
  
  useEffect(() => {
    console.log('Setting up initial project states...');
    // Başlangıçta her proje için aktif görsel indeksini 0 olarak ayarla
    // Mevcut active image indekslerini koruyarak yeni projeler için indeks ayarlama
    setActiveImageIndices(prev => {
      const initialIndices = {...prev};
      projectsData.forEach((project) => {
        // Eğer bu proje için daha önce bir indeks belirlenmemişse 0 olarak ayarla
        if (initialIndices[project.id] === undefined) {
          initialIndices[project.id] = 0;
        }
      });
      console.log('Initial image indices:', initialIndices);
      return initialIndices;
    });
    
    // Yükleme durumlarını ayarla
    const initialLoadingState = {};
    projectsData.forEach((project) => {
      initialLoadingState[project.id] = false; // Yükleniyor animasyonu kapatıldı
    });
    setLoadingImages(initialLoadingState);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleProjects(prev => {
            if (!prev.includes(parseInt(entry.target.dataset.index))) {
              return [...prev, parseInt(entry.target.dataset.index)];
            }
            return prev;
          });
        }
      });
    }, { threshold: 0.1 });
    
    projectRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });
    
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [projectsData]);
  
  // Switch between images
  const changeImage = (projectId, direction) => {
    // Önce görsel indeksini değiştirelim
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !project.images || project.images.length === 0) return;
    
    const currentIndex = activeImageIndices[projectId] || 0;
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % project.images.length;
    } else {
      newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
    }
    
    console.log(`Changing image for project ${projectId}: ${currentIndex} -> ${newIndex}`);
    
    // Clear error state
    setImageErrors(prev => {
      const newErrors = { ...prev };
      // Clear all errors for this project
      Object.keys(newErrors).forEach(key => {
        if (key.startsWith(`${projectId}-`)) {
          delete newErrors[key];
        }
      });
      return newErrors;
    });
    
    // Yükleme animasyonu devre dışı bırakıldı
    setLoadingImages(prev => ({
      ...prev,
      [projectId]: false
    }));
    
    // Set new index
    setActiveImageIndices(prev => ({
      ...prev,
      [projectId]: newIndex
    }));
  };
  
  // Handle image error state
  const handleImageError = (projectId, index) => {
    // Save error state for this image+index combination
    setImageErrors(prev => ({
      ...prev,
      [`${projectId}-${index}`]: true
    }));
    
    const project = projectsData.find(p => p.id === projectId);
    const imagePath = project?.images?.[index];
    const processedPath = getImagePath(imagePath);
    
    console.error(`🚨 Image loading error:`, {
      projectId: projectId,
      projectName: project?.title,
      index: index,
      originalPath: imagePath,
      processedPath: processedPath,
      totalImages: project?.images?.length || 0,
      timestamp: new Date().toLocaleTimeString()
    });
    
    // Turn off loading state
    setLoadingImages(prev => ({
      ...prev,
      [projectId]: false
    }));
    
    // Test: Is the image actually available?
    if (imagePath && imagePath.startsWith('/images/')) {
      const testImg = new Image();
      testImg.onload = () => console.log(`✅ Image actually exists: ${imagePath}`);
      testImg.onerror = () => console.log(`❌ Image really doesn't exist: ${imagePath}`);
      testImg.src = imagePath;
    }
  };
  
  const styles = {
    projectsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '150px', // Daha büyük boşluk
      width: '100%',
      maxWidth: '1600px', // Genişliği daha da artırdık
      margin: '0 auto', // Ortala
    },
    projectsTitle: {
      fontSize: '3.5rem', // Başlık daha da büyütüldü
      fontWeight: '700',
      color: 'var(--primary-color, #9c27b0)',
      marginBottom: '80px', // Daha büyük margin
      textAlign: 'center',
      textShadow: '0 2px 10px rgba(156, 39, 176, 0.3)', // Işıltılı efekt
    },
    projectSection: {
      width: '100%',
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      borderRadius: '24px',
      padding: '50px 60px', // Yanlarda daha fazla boşluk
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(156, 39, 176, 0.15)',
      opacity: 0,
      transform: 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      border: '1px solid rgba(156, 39, 176, 0.15)',
      marginBottom: '30px', // Bölümler arası ek boşluk
      minHeight: '500px', // Minimum yükseklik garantisi
    },
    projectSectionVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '20px', // Daha büyük margin
    },
    projectNumber: {
      fontSize: '1.6rem', // Daha büyük
      fontWeight: 'bold',
      color: 'var(--primary-color, #9c27b0)',
      marginRight: '18px', // Daha büyük margin
      opacity: 0.85,
      textShadow: '0 0 8px rgba(156, 39, 176, 0.4)', // Işıltılı efekt
    },
    projectTitle: {
      fontSize: '2.6rem', // Daha büyük başlık
      margin: 0,
      fontWeight: '700',
      letterSpacing: '-0.5px', // Daha modern görünüm için karakter aralığı
      background: 'linear-gradient(135deg, #fff 0%, #c5c5c5 100%)', // Gradyan efekti
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    projectTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px', // Daha büyük gap
      marginBottom: '25px', // Daha büyük margin
    },
    projectTag: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--text-color, #fff)',
      padding: '8px 16px', // Daha büyük padding
      borderRadius: '25px', // Daha büyük border radius
      fontSize: '1rem', // Büyütüldü
      fontWeight: '500',
    },
    projectContent: {
      display: 'flex',
      flexDirection: 'row', // Desktop'ta yan yana
      gap: '20px',
      alignItems: 'flex-start', // İçeriği üstten hizala
      justifyContent: 'space-between', // İçerik arası boşluk dengeli dağıtılsın
    },
    galleryContainer: {
      width: '55%', // Daha dengeli bir genişlik
      position: 'relative',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3), 0 0 10px rgba(156, 39, 176, 0.2)',
      aspectRatio: '4/3', // Daha fazla yükseklik için 16/9 yerine 4/3 oranı
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      transform: 'translateZ(0)',
      transition: 'transform 0.3s ease',
      marginRight: '25px', // Sağa doğru fazla genişlemeyi önlemek için
    },
    galleryLoadingOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: '#fff',
      zIndex: 1,
      backdropFilter: 'blur(5px)', // Bulanıklaştırma efekti
      WebkitBackdropFilter: 'blur(5px)',
    },
    galleryLoadingAnimation: {
      width: '40px', // Daha büyük yükleme göstergesi
      height: '40px',
      border: '4px solid rgba(255, 255, 255, 0.15)',
      borderRadius: '50%',
      borderTop: '4px solid var(--primary-color, #9c27b0)',
      boxShadow: '0 0 15px rgba(156, 39, 176, 0.5)', // Işıltılı efekt
      animation: 'spin 1s cubic-bezier(0.68, -0.6, 0.32, 1.6) infinite', // Daha yumuşak animasyon
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain', // Görüntünün tamamını göster, kırpmayı önle
      backgroundColor: '#111', // Görsel arka planı
      display: 'block',
      transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: 'pointer',
      filter: 'brightness(1.02)',
      padding: '5px', // İçten boşluk ekleyerek görüntünün kenarlarına mesafe bırak
    },
    placeholderContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb', // Daha parlak renk
      fontSize: '1.2rem', // Daha büyük yazı
      textAlign: 'center',
      padding: '30px',
      backgroundColor: 'rgba(35, 35, 35, 0.85)',
      borderRadius: '16px',
      border: '1px solid rgba(156, 39, 176, 0.2)', // Mor kenarlık
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
    },
    placeholderIcon: {
      fontSize: '3rem', // Daha büyük ikon
      marginBottom: '15px',
      color: 'var(--primary-color, #9c27b0)',
      animation: 'pulse 2s infinite', // Nabız efekti
      opacity: '0.8',
    },
    galleryNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(25, 25, 25, 0.75)',
      color: 'white',
      width: '50px', // Daha büyük düğmeler
      height: '50px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.7rem', // Daha büyük ok ikonları
      fontWeight: '300',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      outline: 'none',
      zIndex: 2,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(3px)',
      WebkitBackdropFilter: 'blur(3px)',
    },
    galleryNavLeft: {
      left: '10px',
    },
    galleryNavRight: {
      right: '10px',
    },
    galleryDotsContainer: {
      position: 'absolute',
      bottom: '15px',
      left: '0',
      right: '0',
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      zIndex: 2,
    },
    galleryDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
    },
    galleryDotActive: {
      backgroundColor: 'white',
      transform: 'scale(1.2)',
    },
    projectDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '42%', // Metin kısmı için daha dengeli genişlik
      maxWidth: '500px', // Maksimum genişlik sınırlaması
      height: '100%', // Yüksekliği ayarla
      justifyContent: 'flex-start', // İçeriği üstten başlat
      flex: '1',
    },
    projectDescription: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: 'var(--text-color, #fff)',
    },
    projectFeatures: {
      marginTop: '10px',
    },
    featuresTitle: {
      fontSize: '1.3rem',
      marginBottom: '10px',
      color: 'var(--primary-color, #9c27b0)',
    },
    featuresList: {
      listStyleType: 'none',
      paddingLeft: 0,
    },
    featureItem: {
      position: 'relative',
      paddingLeft: '25px',
      marginBottom: '8px',
      lineHeight: 1.5,
    },
    featureIcon: {
      marginRight: '8px',
      color: 'var(--primary-color, #9c27b0)',
    },
    // Proje kartını daha responsive hale getirin
    projectCard: {
      width: '100%', // Yüzde genişlik kullan
      maxWidth: '900px',
      margin: '0 auto 40px',
      display: 'flex',
      flexDirection: 'column',
    },
    
    // Görsel galerisini mobil için düzenleyin
    imageGallery: {
      width: '100%',
      maxWidth: '500px', // Maksimum genişlik ekleyin
      height: 'auto', // Aspekt oranını korusun
      maxHeight: '300px',
    },
    
    // Oklar ve göstergeler için daha büyük dokunma alanı
    navigationButton: {
      width: '40px',  // Mobilde daha büyük
      height: '40px', // Mobilde daha büyük
      opacity: 0.8,   // Her zaman biraz görünür
    },
    
    // Teknoloji etiketlerini mobil için düzelt
    techTag: {
      display: 'inline-block',
      margin: '0 5px 5px 0', // Alt marjin ekle, taşma olursa yeni satıra geçebilsin
      whiteSpace: 'normal', // Metin sarması aktif
    },
    
    // Media queries ekleyin
    '@media (max-width: 768px)': {
      projectsContainer: {
        padding: '0 10px', // Mobilde daha az padding
      },
      projectCard: {
        padding: '15px', // Mobilde daha az padding
      },
      projectTitle: {
        fontSize: '1.4rem', // Mobilde daha küçük başlık
      },
      projectDescription: {
        fontSize: '0.9rem', // Mobilde daha küçük açıklama
      },
      featureList: {
        paddingLeft: '20px', // Mobilde daha az liste girintisi
      },
      featureItem: {
        fontSize: '0.9rem', // Mobilde daha küçük özellik metni
        marginBottom: '5px',
      },
      techTag: {
        fontSize: '0.8rem',
        padding: '4px 10px',
      },
      projectContent: {
        flexDirection: 'column-reverse', // Mobilde görseller üstte, detaylar altta
      },
      
      imageGallery: {
        maxWidth: '100%', // Mobilde tam genişlikte
        marginBottom: '20px',
      },
    },
    
    '@media (max-width: 480px)': {
      projectTitle: {
        fontSize: '1.3rem',
      },
      
      navigationButton: {
        width: '35px', // Daha küçük ekranlarda biraz daha küçük
        height: '35px',
      },
      
      dotIndicatorsContainer: {
        marginTop: '10px', // Küçük ekranlarda daha az boşluk
      },
      
      dotIndicator: {
        width: '8px', // Daha küçük noktalar
        height: '8px',
        margin: '0 4px', // Daha az boşluk
      }
    }
  };
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [hoveredNavs, setHoveredNavs] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024 && windowWidth > 768;

  return (
    <section id="projects" className="section">
      <div className="section-content">
        <h2 style={styles.projectsTitle}>{text.title}</h2>
        
        <div style={styles.projectsContainer}>
          {projectsData.map((project, index) => {
            const images = project.images || [];
            const currentImageIndex = activeImageIndices[project.id] || 0;
            const currentImage = images[currentImageIndex];
            const hasError = imageErrors[`${project.id}-${currentImageIndex}`];
            
            return (
              <div 
                key={project.id} 
                ref={projectRefs.current[index]}
                className="projectSection"
                style={{
                  ...styles.projectSection,
                  ...(visibleProjects.includes(index) ? styles.projectSectionVisible : {})
                }}
              >
                <div style={styles.projectHeader}>
                  <div style={styles.projectNumber}>#{index + 1}</div>
                  <h3 className="projectTitle" style={styles.projectTitle}>{project.title[language]}</h3>
                </div>
                
                <div style={styles.projectTags}>
                  {project.technologies?.map((tech, i) => (
                    <span key={i} style={styles.projectTag}>{tech}</span>
                  ))}
                </div>
                
                <div 
                  className="projectContent"
                  style={{
                    ...styles.projectContent,
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    minHeight: isMobile ? 'auto' : (isTablet ? '400px' : '450px'),
                    flexWrap: isTablet ? 'wrap' : 'nowrap' // Tablet görünümünde sarmalama
                  }}
                >
                  {/* Proje görsel galerisi */}
                  <div 
                    className="galleryContainer"
                    style={{
                      ...styles.galleryContainer,
                      width: isMobile ? '100%' : '55%',
                      height: isMobile ? 'auto' : '400px', // Sabit yükseklik
                      marginBottom: isMobile ? '30px' : 0
                    }}
                  >
                    {images.length > 0 && !hasError ? (
                      <>
                        <img 
                          key={`project-${project.id}-image-${currentImageIndex}`}
                          src={getImagePath(currentImage)}
                          alt={`${project.title[language]} görsel ${currentImageIndex + 1}`}
                          style={{
                            ...styles.galleryImage,
                            transition: 'opacity 0.3s, transform 0.3s ease',
                            opacity: 1 // Baştan görünür yap
                          }}
                          loading="lazy"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeImage(project.id, 'next');
                          }}
                          onError={() => handleImageError(project.id, currentImageIndex)}
                          onLoad={(e) => {
                            // Clear error state for this image
                            setImageErrors(prev => {
                              const newErrors = { ...prev };
                              delete newErrors[`${project.id}-${currentImageIndex}`];
                              return newErrors;
                            });
                            console.log(`Image loaded successfully: Project ${project.id}, index ${currentImageIndex}`);
                          }}
                          className="gallery-image"
                        />
                      </>
                    ) : (
                      <div style={styles.placeholderContainer}>
                        <div style={styles.placeholderIcon}>🖼️</div>
                        <div>Image could not be loaded for {project.title[language]}</div>
                        <div style={{fontSize: '0.85rem', marginTop: '8px', opacity: 0.7}}>
                          {hasError && currentImage ? (
                            <>
                              <div>Original Path: {currentImage}</div>
                              <div>Processed Path: {getImagePath(currentImage)}</div>
                              <div>Index: {currentImageIndex}</div>
                            </>
                          ) : 'Image not found'}
                        </div>
                      </div>
                    )}
                    
                    {/* Gezinme düğmeleri (sadece birden fazla görsel varsa ve hata yoksa göster) */}
                    {images.length > 1 && !hasError && (
                      <>
                        <button 
                          style={{
                            ...styles.galleryNav,
                            ...styles.galleryNavLeft,
                            backgroundColor: hoveredNavs[`${project.id}-left`] 
                              ? 'rgba(156, 39, 176, 0.8)' 
                              : 'rgba(0, 0, 0, 0.7)'
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeImage(project.id, 'prev');
                          }}
                          onMouseEnter={() => setHoveredNavs(prev => ({
                            ...prev,
                            [`${project.id}-left`]: true
                          }))}
                          onMouseLeave={() => setHoveredNavs(prev => ({
                            ...prev,
                            [`${project.id}-left`]: false
                          }))}
                        >
                          &#10094;
                        </button>
                        <button 
                          style={{
                            ...styles.galleryNav,
                            ...styles.galleryNavRight,
                            backgroundColor: hoveredNavs[`${project.id}-right`] 
                              ? 'rgba(156, 39, 176, 0.8)' 
                              : 'rgba(0, 0, 0, 0.7)'
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            changeImage(project.id, 'next');
                          }}
                          onMouseEnter={() => setHoveredNavs(prev => ({
                            ...prev,
                            [`${project.id}-right`]: true
                          }))}
                          onMouseLeave={() => setHoveredNavs(prev => ({
                            ...prev,
                            [`${project.id}-right`]: false
                          }))}
                        >
                          &#10095;
                        </button>
                        
                        {/* Nokta göstergeler */}
                        <div style={styles.galleryDotsContainer}>
                          {images.map((_, i) => (
                            <div
                              key={i}
                              style={{
                                ...styles.galleryDot,
                                ...(i === currentImageIndex ? styles.galleryDotActive : {})
                              }}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log(`Changing to dot index ${i} for project ${project.id}`);
                                
                                // Önce hata state'ini temizle
                                setImageErrors(prev => {
                                  const newErrors = { ...prev };
                                  delete newErrors[`${project.id}-${i}`];
                                  return newErrors;
                                });
                                
                                // Yükleme durumu kaldırıldı
                                setLoadingImages(prev => ({
                                  ...prev,
                                  [project.id]: false
                                }));
                                
                                // Görsel indeksini doğrudan değiştir
                                setActiveImageIndices(prev => {
                                  const newState = {
                                    ...prev,
                                    [project.id]: i
                                  };
                                  console.log('New active indices:', newState);
                                  return newState;
                                });
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Proje detayları */}
                  <div 
                    className="projectDetails"
                    style={{
                      ...styles.projectDetails,
                      width: isMobile ? '100%' : '42%',
                      minHeight: isMobile ? 'auto' : '400px', // Minimum yükseklik
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <p className="projectDescription" style={styles.projectDescription}>
                      {project.description[language]}
                    </p>
                    
                    {project.features && project.features[language] && project.features[language].length > 0 && (
                      <div style={styles.projectFeatures}>
                        <h4 style={styles.featuresTitle}>{text.features}</h4>
                        <ul style={styles.featuresList}>
                          {project.features[language].map((feature, i) => (
                            <li key={i} style={styles.featureItem}>
                              <span style={styles.featureIcon}>➤</span>
                              {" " + feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* İletişim ve proje bağlantıları */}
                    <div className="navButtons" style={{marginTop: 'auto', marginBottom: '10px'}}>
                      <a
                        href={`mailto:mert54bolukbasi@gmail.com?subject=Project Inquiry: ${project.title[language]}`}
                        className="contactButton"
                        style={{
                          ...styles.contactButton,
                          backgroundColor: 'var(--primary-color, #9c27b0)',
                          color: '#fff',
                          padding: '12px 24px',
                          borderRadius: '30px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-block',
                          transition: 'background-color 0.3s ease',
                          marginRight: '10px',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'rgba(156, 39, 176, 0.9)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'var(--primary-color, #9c27b0)';
                        }}
                      >
                        {text.contactButton}
                      </a>
                      
                      <a
                        href="#"
                        className="viewProjectButton"
                        style={{
                          ...styles.viewProjectButton,
                          backgroundColor: 'transparent',
                          color: 'var(--primary-color, #9c27b0)',
                          padding: '12px 24px',
                          borderRadius: '30px',
                          fontSize: '1rem',
                          fontWeight: '600',
                          textDecoration: 'none',
                          display: 'inline-block',
                          transition: 'all 0.3s ease',
                          border: '2px solid var(--primary-color, #9c27b0)',
                          boxShadow: '0 4px 12px rgba(156, 39, 176, 0.2)',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = 'var(--primary-color, #9c27b0)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                          e.target.style.color = 'var(--primary-color, #9c27b0)';
                        }}
                      >
                        {text.viewProjectButton}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;