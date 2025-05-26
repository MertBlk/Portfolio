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
        
        console.log(`Project ${project.id} (${project.title}) test:`, { 
          originalPath: firstImage,
          processedPath: processedPath
        });
        
        // Test path
        const testImg = new Image();
        testImg.onload = () => console.log(`✅ ${project.title} image loaded: ${processedPath}`);
        testImg.onerror = () => console.log(`❌ ${project.title} image failed to load: ${processedPath}`);
        testImg.src = processedPath;
      }
    });
  }, []);

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
      title: "Item Reminder App",
      description: "An application with a single purpose, developed to serve that purpose effectively. It provides location-based notifications and a user-friendly interface to help users remember their items.",
      technologies: ["React Native", "JavaScript"],
      features: [
        "Responsive design (works on all devices)",
        "Dark/light theme support",
        "Animated transitions",
        "Location-based notifications",
        "User-friendly interface",
        "Item reminder and notification system"
      ],
      images: [
        'esyaHatirlatici.jpeg',
        'esyaHatirlatici2.jpeg',
        "images/esyaBildirim.png",
        "images/esyaKonum.png",
        "images/esyaAyar.png"
      ]
    },    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce platform. Developed with React and Node.js, includes user authentication, product catalogs, cart management, and payment processing.",
      technologies: ["React", "Node.js", "Firebase", "Virtual-POS"],
      features: [
        "User registration and authentication",
        "Product search and filtering",
        "Cart and favorites management",
        "Secure payment processing",
        "Product management with admin panel"
      ],
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
      title: "Corporate Website",
      description: "A website specially designed for corporate companies. Strengthens corporate communication with modern design and user-friendly interface.",
      technologies: ["React"],
      features: [
        "Corporate communication forms",
        "Service presentations",
        "Reference projects",
        "Blog and news updates",
        "Contact information and map"
      ],
      images: [
        "images/ruvidoTekstil.png",
        "images/ruvido3.png",
        "images/ruvido4.png",
        "images/ruvido5.png"
      ]
    },
    {
      id: 4,
      title: "Vehicle Sales Platform",
      description: "Comprehensive vehicle buying and selling platform. Users can post vehicle listings, search, and access detailed vehicle information.",
      technologies: ["React", "Node.js"],
      features: [
        "Vehicle listing creation and management",
        "Advanced search and filtering options",
        "User account management",
        "Vehicle photo gallery"
      ],
      images: [
        "images/aracSatis.png", 
        "images/aracIlan.png",
        "images/aracHesap.png"
      ]
    },
    {
      id: 5,
      title: "Hotel Website",
      description: "A website with a user-friendly interface containing all information about the hotel.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      features: [
        "Advanced hotel and room search filtering",
        "Hotel visualization on interactive map",
        "Multiple room reservation options",
        "User reviews and ratings",
        "Special offers and discount system"
      ],
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
    // Başlangıçta her proje için aktif görsel indeksini 0 olarak ayarla
    // ve tüm görselleri yükleniyor olarak işaretle
    const initialIndices = {};
    const initialLoadingState = {};
    projectsData.forEach((project) => {
      initialIndices[project.id] = 0;
      initialLoadingState[project.id] = true; // Başlangıçta tüm görseller yükleniyor
    });
    setActiveImageIndices(initialIndices);
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
  }, []);
  
  // Switch between images
  const changeImage = (projectId, direction) => {
    // Mark new image as starting to load
    setLoadingImages(prev => ({
      ...prev,
      [projectId]: true
    }));
    
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
    
    setActiveImageIndices(prev => {
      const project = projectsData.find(p => p.id === projectId);
      if (!project || !project.images || project.images.length === 0) return prev;
      
      const currentIndex = prev[projectId] || 0;
      let newIndex;
      
      if (direction === 'next') {
        newIndex = (currentIndex + 1) % project.images.length;
      } else {
        newIndex = (currentIndex - 1 + project.images.length) % project.images.length;
      }
      
      return {
        ...prev,
        [projectId]: newIndex
      };
    });
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
      flexDirection: 'row',
      gap: '20px', // Daha küçük boşluk, içeriğin daha iyi sığması için
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
                style={{
                  ...styles.projectSection,
                  ...(visibleProjects.includes(index) ? styles.projectSectionVisible : {})
                }}
              >
                <div style={styles.projectHeader}>
                  <div style={styles.projectNumber}>#{index + 1}</div>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                </div>
                
                <div style={styles.projectTags}>
                  {project.technologies?.map((tech, i) => (
                    <span key={i} style={styles.projectTag}>{tech}</span>
                  ))}
                </div>
                
                <div style={{
                  ...styles.projectContent,
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: isMobile ? 'center' : 'flex-start',
                  minHeight: isMobile ? 'auto' : (isTablet ? '400px' : '450px'),
                  flexWrap: isTablet ? 'wrap' : 'nowrap' // Tablet görünümünde sarmalama
                }}>
                  {/* Proje görsel galerisi */}
                  <div style={{
                    ...styles.galleryContainer,
                    width: isMobile ? '100%' : '55%',
                    height: isMobile ? 'auto' : '400px', // Sabit yükseklik
                    marginBottom: isMobile ? '30px' : 0
                  }}>
                    {images.length > 0 && !hasError ? (
                      <>
                        <img 
                          src={getImagePath(currentImage)}
                          alt={`${project.title} görsel ${currentImageIndex + 1}`}
                          style={{
                            ...styles.galleryImage,
                            transition: 'opacity 0.3s, transform 0.3s ease',
                          }}
                          loading="lazy"
                          onClick={() => changeImage(project.id, 'next')}
                          onError={() => handleImageError(project.id, currentImageIndex)}
                          onLoad={(e) => {
                            // Add animation when image loads successfully
                            e.target.style.opacity = 1;
                            // Update loading state
                            setLoadingImages(prev => ({
                              ...prev,
                              [project.id]: false
                            }));
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
                        {loadingImages[project.id] && (
                          <div style={styles.galleryLoadingOverlay}>
                            <div style={styles.galleryLoadingAnimation}></div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div style={styles.placeholderContainer}>
                        <div style={styles.placeholderIcon}>🖼️</div>
                        <div>Image could not be loaded for {project.title}</div>
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
                                e.stopPropagation();
                                // Önce hata state'ini temizle
                                setImageErrors(prev => {
                                  const newErrors = { ...prev };
                                  delete newErrors[`${project.id}-${i}`];
                                  return newErrors;
                                });
                                // Yükleme durumunu başlat
                                setLoadingImages(prev => ({
                                  ...prev,
                                  [project.id]: true
                                }));
                                // Görsel indeksini güncelle
                                setActiveImageIndices(prev => ({
                                  ...prev,
                                  [project.id]: i
                                }));
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Proje detayları */}
                  <div style={{
                    ...styles.projectDetails,
                    width: isMobile ? '100%' : '42%',
                    minHeight: isMobile ? 'auto' : '400px', // Minimum yükseklik
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <p style={styles.projectDescription}>
                      {project.description}
                    </p>
                    
                    {project.features && project.features.length > 0 && (
                      <div style={styles.projectFeatures}>
                        <h4 style={styles.featuresTitle}>Features</h4>
                        <ul style={styles.featuresList}>
                          {project.features.map((feature, i) => (
                            <li key={i} style={styles.featureItem}>
                              <span style={styles.featureIcon}>➤</span>
                              {" " + feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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