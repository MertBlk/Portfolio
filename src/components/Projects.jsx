import React, { useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
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
  
// Component dışında tanımla ki her render'da yeniden oluşturulmasın
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
      entries.forEach(entry => { // PARANTEZ EKLENDİ
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
  }, []); // projectsData artık component dışında tanımlandığı için bağımlılık listesinden kaldırıldı
  
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
  
  const [hoveredNavs, setHoveredNavs] = useState({});
  
  // Responsive design için react-responsive kullanma
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' });
  
  const styles = {
    projectsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '60px' : (isTablet ? '80px' : '100px'),
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
    },
    projectsTitle: {
      fontSize: isMobile ? '2rem' : (isTablet ? '2.5rem' : '3.5rem'),
      fontWeight: '700',
      color: 'var(--primary-color, #9c27b0)',
      marginBottom: isMobile ? '40px' : (isTablet ? '60px' : '80px'),
      textAlign: 'center',
      textShadow: '0 2px 10px rgba(156, 39, 176, 0.3)',
    },
    projectSection: {
      width: '100%',
      maxWidth: isMobile ? '94%' : (isTablet ? '95%' : '1200px'), // Masaüstünde daha büyük
      backgroundColor: 'rgba(30, 30, 30, 0.6)',
      borderRadius: isMobile ? '16px' : '24px',
      padding: isMobile ? '20px' : (isTablet ? '30px' : '60px'), // Padding artırıldı
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(156, 39, 176, 0.15)',
      opacity: 0,
      transform: 'translateY(40px)',
      transition: 'opacity 0.8s ease, transform 0.8s ease',
      border: '1px solid rgba(156, 39, 176, 0.15)',
      minHeight: isMobile ? 'auto' : (isTablet ? '450px' : '550px'),
      margin: '0 auto 30px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    projectSectionVisible: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '20px' : '30px',
      flexDirection: isMobile ? 'column' : 'row',
      textAlign: 'center',
      width: '100%',
      justifyContent: 'center',
    },
    projectNumber: {
      fontSize: isMobile ? '1.2rem' : (isTablet ? '1.4rem' : '1.6rem'),
      fontWeight: 'bold',
      color: 'var(--primary-color, #9c27b0)',
      marginRight: isMobile ? '0' : '18px',
      marginBottom: isMobile ? '8px' : '0',
      opacity: 0.85,
      textShadow: '0 0 8px rgba(156, 39, 176, 0.4)',
    },
    projectTitle: {
      fontSize: isMobile ? '1.5rem' : (isTablet ? '2rem' : '2.6rem'),
      margin: 0,
      fontWeight: '700',
      letterSpacing: '-0.5px',
      background: 'linear-gradient(135deg, #fff 0%, #c5c5c5 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center',
    },
    projectTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: isMobile ? '8px' : '12px',
      marginBottom: isMobile ? '25px' : '35px',
      justifyContent: 'center',
      width: '100%',
    },
    projectTag: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'var(--text-color, #fff)',
      padding: isMobile ? '8px 16px' : '10px 20px',
      borderRadius: '25px',
      fontSize: isMobile ? '0.85rem' : '1rem',
      fontWeight: '500',
    },
    projectContent: {
      display: 'flex',
      flexDirection: isMobile ? 'column-reverse' : 'row',
      gap: isMobile ? '24px' : '40px',
      alignItems: isMobile ? 'center' : 'flex-start',
      justifyContent: 'center',
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      overflow: 'visible',
    },
    galleryContainer: {
      width: isMobile ? '100%' : '80%',  // %75'ten %80'e çıkarıldı
      maxWidth: isMobile ? '100%' : '1000px', // 950px'den 1000px'e çıkarıldı
      minWidth: isMobile ? 'auto' : 'auto',
      height: isMobile ? 'auto' : '400px', // 420px'den 450px'e çıkarıldı
      aspectRatio: isMobile ? '16/9' : undefined,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      borderRadius: isMobile ? '12px' : '20px',
      overflow: 'hidden', // İçindeki görselin taşmasını engeller
      boxShadow: isMobile 
        ? '0 4px 16px rgba(0, 0, 0, 0.3)' 
        : '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 15px rgba(156, 39, 176, 0.25)',
      backgroundColor: '#1a1a1a',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      marginBottom: isMobile ? '20px' : 0,
      boxSizing: 'border-box',
      flex: isMobile ? '1 1 100%' : '0 0 70%', // %65'ten %70'e çıkarıldı
    },
    galleryImage: {
      width: '100%',
      height: '100%', 
      objectFit: 'scale-down', // 'contain' yerine 'scale-down' kullanılabilir
      objectPosition: 'center', 
      backgroundColor: '#111',
      display: 'block',
      transition: 'transform 0.3s ease, opacity 0.3s ease',
      cursor: isMobile ? 'pointer' : 'default',
      filter: 'brightness(1.02) contrast(1.05)',
      padding: '8px', // 0px'den 8px'e çıkarıldı, görselin kenarlarda kırpılma riskini azaltır
      maxHeight: 'none', // Yükseklik için max limitini kaldırdık
      minHeight: 'auto',
      borderRadius: isMobile ? '8px' : '16px',
    },
    projectDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '16px' : '30px',
      width: isMobile ? '100%' : '33%', // %38'den %33'e düşürüldü
      maxWidth: isMobile ? '100%' : '600px',
      height: '100%',
      justifyContent: 'flex-start',
      flex: isMobile ? '1 1 100%' : '0 0 33%', // %38'den %33'e düşürüldü
      boxSizing: 'border-box',
      padding: isMobile ? '0' : '0 20px',
    },
    // Galeri Navigasyon butonları
    galleryNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      width: isMobile ? '35px' : '40px',
      height: isMobile ? '35px' : '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '18px',
      opacity: 0.7,
      zIndex: 5,
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
      zIndex: 5,
    },
    galleryDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    galleryDotActive: {
      backgroundColor: 'var(--primary-color)',
      transform: 'scale(1.2)',
    },
    projectDescription: {
      fontSize: isMobile ? '0.95rem' : '1.05rem',
      lineHeight: '1.6',
      color: 'var(--text-color)',
      marginBottom: '15px',
      textAlign: 'left',
    },
    projectFeatures: {
      marginTop: '20px',
    },
    featuresTitle: {
      fontSize: isMobile ? '1.1rem' : '1.2rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: 'var(--text-color)',
    },
    featuresList: {
      paddingLeft: '20px',
      listStyle: 'none',
      margin: 0,
    },
    featureItem: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      marginBottom: '8px',
      position: 'relative',
      lineHeight: '1.5',
      color: 'var(--text-secondary, rgba(255, 255, 255, 0.8))',
    },
    featureIcon: {
      color: 'var(--primary-color)',
      marginRight: '5px',
      fontWeight: 'bold',
    },
    placeholderContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'rgba(255, 255, 255, 0.6)',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    placeholderIcon: {
      fontSize: '3rem',
      marginBottom: '15px',
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
        padding: '0 10px',
      },
      projectCard: {
        padding: '15px',
      },
      projectTitle: {
        fontSize: '1.4rem',
      },
      projectDescription: {
        fontSize: '0.9rem',
      },
      featureList: {
        paddingLeft: '20px',
      },
      featureItem: {
        fontSize: '0.9rem',
        marginBottom: '5px',
      },
      techTag: {
        fontSize: '0.8rem',
        padding: '4px 10px',
      },
      
      galleryContainer: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        minHeight: '240px', // 220px'den 240px'e çıkarıldı
        maxHeight: '300px', // 270px'den 300px'e çıkarıldı
        marginBottom: '20px',
      },
      
      galleryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'scale-down', // 'contain' yerine 'scale-down' kullanılabilir
        maxHeight: 'none', // Sınırlamayı kaldırıldı
        minHeight: 'auto',
        padding: '8px', // Padding eklendi
        borderRadius: '8px',
        cursor: 'pointer',
      },
      
      // projectContent: { // BU BLOK KALDIRILDI, isMobile ile ana stilde yönetiliyor
      //   flexDirection: 'column-reverse',
      // },
      
      galleryContainer: {
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: '16/9', // Telefon için daha uygun oran
        minHeight: '240px', // 220px'den 240px'e çıkarıldı
        maxHeight: '300px', // 270px'den 300px'e çıkarıldı
        marginBottom: '20px',
      },
      
      galleryImage: {
        width: '100%',
        height: '100%',
        objectFit: 'scale-down', // 'contain' yerine 'scale-down' kullanılabilir
        maxHeight: 'none', // Sınırlamayı kaldırıldı
        minHeight: 'auto',
        padding: '8px', // Padding eklendi
        borderRadius: '8px',
        cursor: 'pointer',
      },
      
      // Navigation butonlarını mobil için optimize et
      galleryNav: {
        width: '35px',
        height: '35px',
        fontSize: '16px',
        opacity: 0.9, // Mobilde daha görünür
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(4px)',
      },
      
      galleryNavLeft: {
        left: '8px',
      },
      
      galleryNavRight: {
        right: '8px',
      },
      
      // Dot indicator'ları mobil için optimize et
      galleryDotsContainer: {
        bottom: '10px',
        gap: '6px',
      },
      
      galleryDot: {
        width: '8px',
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
      },
      
      galleryDotActive: {
        backgroundColor: 'var(--primary-color)',
        transform: 'scale(1.3)',
        boxShadow: '0 0 8px rgba(156, 39, 176, 0.6)',
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
  
  return (
    <section id="projects" className="section" style={{width: '100%', margin: '0 auto'}}>
      <div className="section-content" style={{maxWidth: '1400px', margin: '0 auto', width: '100%'}}>
        <h2 style={styles.projectsTitle}>{text.title}</h2>
        
        <div className="projects-container" style={styles.projectsContainer}>
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
                  className="project-content"
                  style={styles.projectContent}
                >
                  {/* Gallery Container */}
                  <div 
                    className="gallery-container" 
                    style={styles.galleryContainer}
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
                            opacity: 1
                          }}
                          loading="lazy"
                          onClick={(e) => {
                            // Placeholder for potential future click action (e.g., open lightbox)
                            console.log("Image clicked:", getImagePath(currentImage));
                          }}
                          onError={() => handleImageError(project.id, currentImageIndex)}
                          onLoad={(e) => {
                            // Placeholder for potential future load action
                            console.log("Image loaded:", getImagePath(currentImage));
                            setLoadingImages(prev => ({ ...prev, [project.id]: false }));
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
                          ) : 'Image not found or no images for this project.'}
                        </div>
                      </div>
                    )}
                    
                    {/* Navigation Arrows */}
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
                          onClick={(e) => { e.stopPropagation(); changeImage(project.id, 'prev'); }}
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
                          onClick={(e) => { e.stopPropagation(); changeImage(project.id, 'next'); }}
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
                        
                        {/* Dot Indicators */}
                        <div style={styles.galleryDotsContainer}>
                          {images.map((_, i) => (
                            <div
                              key={i}
                              style={{
                                ...styles.galleryDot,
                                ...(i === currentImageIndex ? styles.galleryDotActive : {})
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveImageIndices(prev => ({ ...prev, [project.id]: i }));
                                // Clear error for this project when dot is clicked
                                setImageErrors(prevErrors => {
                                  const newErrors = { ...prevErrors };
                                  Object.keys(newErrors).forEach(key => {
                                    if (key.startsWith(`${project.id}-`)) {
                                      delete newErrors[key];
                                    }
                                  });
                                  return newErrors;
                                });
                                setLoadingImages(prev => ({ ...prev, [project.id]: false })); // Reset loading
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Project Details */}
                  <div 
                    className="project-details"
                    style={styles.projectDetails}
                  >
                    <div> {/* Wrapper for description and features to allow button to be at bottom */}
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
                    </div>
                    
                    {/* İletişim ve proje bağlantıları KISMI KALDIRILDI */}
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