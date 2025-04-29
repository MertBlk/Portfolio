import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../Context/LanguageContext';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { language, translations } = useLanguage();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: sectionId } });
  };

  const projects = [
    {
      id: "esya-hatirlatici",
      images: [
        "/Portfolio/images/esyaHatirla.png", 
        "/Portfolio/images/esyaAyar.png", 
        "/Portfolio/images/esyaBildirim.png", 
        "/Portfolio/images/esyaKonum.png"
      ],
      technologies: ["React Native", "iOS", "Expo", "JavaScript"],
      githubLink: "https://github.com/username/esya-hatirlatici"
    },
    {
      id: "arac-satis",
      images: [
        "/Portfolio/images/aracSatis.png", 
        "/Portfolio/images/aracAraclar.png",
        "/Portfolio/images/aracIlan.png", 
        "/Portfolio/images/aracHesap.png"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      githubLink: "https://github.com/username/arac-satis"
    },
    {
      id: "e-ticaret",
      images: [
        "/Portfolio/images/ruvido.jpeg",
        "/Portfolio/images/ruvido2.jpeg",
        "/Portfolio/images/ruvido3.jpeg",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase", "Sanal POS"],
      githubLink: "https://github.com/username/e-commerce"
    },
    {
      id: "otel-tanitim",
      images: [
        "/Portfolio/images/otel.jpeg",
        "/Portfolio/images/otel4.jpg",
        "/Portfolio/images/otel2.jpeg",
        "/Portfolio/images/otel3.jpeg",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
      githubLink: "https://github.com/username/hotel-website"
    }
  ];

  const project = projects.find(p => p.id === id);
  const projectTranslations = translations[language].projectDetail.projects[id];

  if (!project || !projectTranslations) {
    return <div>{translations[language].projectDetail.notFound}</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>  
      <div style={styles.navWrapper}>
        <nav style={styles.navbar}>
          <div style={styles.navContainer}>
            <ul style={styles.navList}>
              <li style={styles.navItem}>
                <a href="#anasayfa" onClick={(e) => handleNavigation(e, 'anasayfa')} style={styles.navLink}>
                  {translations[language].nav.home}
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#hakkimda" onClick={(e) => handleNavigation(e, 'hakkimda')} style={styles.navLink}>
                  {translations[language].nav.about}
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#projeler" onClick={(e) => handleNavigation(e, 'projeler')} style={styles.navLink}>
                  {translations[language].nav.projects}
                </a>
              </li>
              <li style={styles.navItem}>
                <a href="#iletisim" onClick={(e) => handleNavigation(e, 'iletisim')} style={styles.navLink}>
                  {translations[language].nav.contact}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <div style={styles.mainImageWrapper}>
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${projectTranslations.title} ${currentImageIndex + 1}`} 
                style={styles.mainImage}
                onClick={handleImageClick}
              />
              <button onClick={prevImage} style={{...styles.navButton, ...styles.leftButton}}>←</button>
              <button onClick={nextImage} style={{...styles.navButton, ...styles.rightButton}}>→</button>
            </div>
            <div style={styles.imageInfo}>
              <span style={styles.imageCounter}>
                {currentImageIndex + 1} / {project.images.length}
              </span>
            </div>
            <div style={styles.thumbnails}>
              {project.images.map((img, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.thumbnailContainer,
                    ...(currentImageIndex === index ? styles.activeThumbnail : {})
                  }}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    style={styles.thumbnail}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.infoSection}>
          <h1 style={styles.title}>{projectTranslations.title}</h1>
          <p style={styles.description}>{projectTranslations.fullDescription}</p>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations[language].projectDetail.technologiesTitle}</h2>
            <div style={styles.tags}>
              {project.technologies.map((tech, index) => (
                <span key={index} style={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>{translations[language].projectDetail.featuresTitle}</h2>
            <ul style={styles.featureList}>
              {projectTranslations.features.map((feature, index) => (
                <li key={index} style={styles.feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            style={styles.githubButton}
          >
            {translations[language].projectDetail.viewOnGithub}
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent}>
            <img 
              src={project.images[currentImageIndex]} 
              alt={`${projectTranslations.title} ${currentImageIndex + 1}`} 
              style={styles.modalImage}
            />
            <button 
              style={styles.closeButton}
              onClick={closeModal}
            >
              ×
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }} 
              style={{...styles.modalNavButton, ...styles.modalLeftButton}}
            >
              ←
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }} 
              style={{...styles.modalNavButton, ...styles.modalRightButton}}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px 15px',
    position: 'relative',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      padding: '40px 15px',
    }
  },
  navWrapper: {
    position: 'fixed',
    top: '20px',
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 15px',
  },
  navbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  navContainer: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '25px',
    padding: '8px 15px',
    maxWidth: '800px',
    width: '100%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    '@media (min-width: 768px)': {
      padding: '10px 30px',
      borderRadius: '50px',
    }
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    listStyle: 'none',
    margin: 0,
    padding: '5px 0',
    '@media (min-width: 768px)': {
      gap: '25px',
      flexWrap: 'nowrap',
    }
  },
  navItem: {
    fontSize: '0.9rem',
    '@media (min-width: 768px)': {
      fontSize: '0.95rem',
    }
  },
  navLink: {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    padding: '5px 8px',
    '@media (min-width: 768px)': {
      padding: '5px 0',
    },
    ':hover': {
      color: 'var(--primary-color)',
    }
  },
 
  backButton: {
    display: 'inline-flex',
    alignItems: 'center',
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    ':hover': {
      transform: 'translateX(-5px)',
    },
    '@media (min-width: 768px)': {
      fontSize: '1.1rem',
    }
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '30px',
    marginTop: '40px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 1024px)': {
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '40px',
      marginTop: '60px',
    }
  },
  imageSection: {
    position: 'relative',
    width: '100%',
    '@media (min-width: 1024px)': {
      position: 'sticky',
      top: '100px',
      height: 'fit-content',
    }
  },
  imageContainer: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '15px',
    padding: '15px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    '@media (min-width: 768px)': {
      padding: '20px',
      borderRadius: '20px',
    }
  },
  mainImageWrapper: {
    position: 'relative',
    width: '100%',
    height: '300px',  // Mobilde daha büyük
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '8px',
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      height: '500px',  // Tablet ve masaüstünde daha büyük
    }
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '10px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.02)',
    },
    '@media (min-width: 768px)': {
      padding: '15px',
    }
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    transition: 'all 0.3s ease',
    opacity: 0.8,
    '@media (min-width: 768px)': {
      width: '50px',
      height: '50px',
      fontSize: '24px',
    },
    ':hover': {
      opacity: 1,
      transform: 'translateY(-50%) scale(1.1)',
    }
  },
  leftButton: {
    left: '10px',
    '@media (min-width: 768px)': {
      left: '20px',
    }
  },
  rightButton: {
    right: '10px',
    '@media (min-width: 768px)': {
      right: '20px',
    }
  },
  imageInfo: {
    textAlign: 'left', // Sola hizala
    marginTop: '10px',
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    '@media (min-width: 768px)': {
      marginTop: '15px',
      fontSize: '1rem',
    }
  },
  thumbnails: {
    display: 'flex',
    gap: '8px',
    marginTop: '15px',
    overflowX: 'auto',
    padding: '5px 0',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      gap: '15px',
      marginTop: '25px',
      padding: '10px 0',
    }
  },
  thumbnailContainer: {
    width: '60px',
    height: '60px',
    borderRadius: '6px',
    overflow: 'hidden',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'all 0.3s ease',
    backgroundColor: 'var(--bg-primary)',
    padding: '3px',
    '@media (min-width: 768px)': {
      width: '80px',
      height: '80px',
      borderRadius: '8px',
      padding: '5px',
    },
    ':hover': {
      opacity: 0.8,
      transform: 'scale(1.05)',
    }
  },
  activeThumbnail: {
    opacity: 1,
    border: '2px solid var(--primary-color)',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    '@media (min-width: 768px)': {
      borderRadius: '6px',
    }
  },
  infoSection: {
    padding: '0',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      padding: '0 20px',
    }
  },
  title: {
    fontSize: '1.8rem',
    color: 'var(--text-color)',
    marginBottom: '15px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '2.5rem',
      marginBottom: '20px',
    }
  },
  description: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '30px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '1.2rem',
      marginBottom: '40px',
    }
  },
  section: {
    marginBottom: '30px',
    '@media (min-width: 768px)': {
      marginBottom: '40px',
    }
  },
  sectionTitle: {
    fontSize: '1.4rem',
    color: 'var(--text-color)',
    marginBottom: '15px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '1.8rem',
      marginBottom: '20px',
    }
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'flex-start', // Sola hizala
    '@media (min-width: 768px)': {
      gap: '10px',
    }
  },
  tag: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    color: 'var(--primary-color)',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '0.9rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (min-width: 768px)': {
      padding: '8px 16px',
      fontSize: '1rem',
      borderRadius: '20px',
    }
  },
  featureList: {
    listStyle: 'none',
    padding: '0 15px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      padding: '0 20px',
    }
  },
  feature: {
    fontSize: '0.95rem',
    color: 'var(--text-secondary)',
    marginBottom: '8px',
    position: 'relative',
    paddingLeft: '15px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '1.1rem',
      marginBottom: '10px',
      paddingLeft: '20px',
    },
    ':before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: 'var(--primary-color)',
    }
  },
  githubButton: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-color)',
    color: '#000000',
    padding: '10px 20px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'transform 0.2s ease',
    '@media (min-width: 768px)': {
      padding: '12px 24px',
      fontSize: '1.1rem',
      borderRadius: '8px',
    },
    ':hover': {
      transform: 'translateY(-2px)',
    }
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1100,
    cursor: 'zoom-out',
  },
  modalContent: {
    position: 'relative',
    maxWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalImage: {
    maxWidth: '100%',
    maxHeight: '90vh',
    objectFit: 'contain',
    cursor: 'default',
  },
  closeButton: {
    position: 'absolute',
    top: '-40px',
    right: '-40px',
    width: '40px',
    height: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease',
    ':hover': {
      transform: 'scale(1.1)',
    },
    '@media (max-width: 768px)': {
      top: '-50px',
      right: '0',
    },
  },
  modalNavButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    width: '50px',
    height: '50px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'translateY(-50%) scale(1.1)',
    },
  },
  modalLeftButton: {
    left: '-70px',
    '@media (max-width: 768px)': {
      left: '10px',
    },
  },
  modalRightButton: {
    right: '-70px',
    '@media (max-width: 768px)': {
      right: '10px',
    },
  },
};

export default ProjectDetail;