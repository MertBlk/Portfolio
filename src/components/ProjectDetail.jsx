import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleNavigation = (e, sectionId) => {
    e.preventDefault();
    navigate('/', { state: { scrollTo: sectionId } });
  };

  const projects = [
    {
      id: "esya-hatirlatici",
      title: "Eşya Hatırlatıcı App",
      description: "React Native ile yapılmış eşya hatırlatıcı uygulaması.",
      fullDescription: "Bu uygulama, kullanıcıların eşyalarını ve konumlarını kaydetmelerini ve hatırlamalarını sağlar. Kullanıcılar eşyalarının fotoğraflarını çekebilir, konum bilgilerini kaydedebilir ve bildirimler alabilirler.",
      images: [
        "/Portfolio/images/esyaHatirla.png", 
        "/Portfolio/images/esyaAyar.png", 
        "/Portfolio/images/esyaBildirim.png", 
        "/Portfolio/images/esyaKonum.png"
      ],
      technologies: ["React Native", "iOS", "Expo", "JavaScript"],
      features: [
        "Eşya fotoğrafı ve konum kaydetme",
        "Bildirim sistemi",
        "Konum bazlı hatırlatmalar",
        "Kategori yönetimi"
      ],
      githubLink: "https://github.com/username/esya-hatirlatici"
    },
    {
      id: "arac-satis",
      title: "Araç Satış Sitesi",
      description: "Araç satış sitesi tasarımı.",
      fullDescription: "Modern ve kullanıcı dostu bir araç satış platformu. Kullanıcılar araçlarını listeleyebilir, detaylı arama yapabilir ve favorilerine ekleyebilirler.",
      images: [
        "/Portfolio/images/aracSatis.png", 
        "/Portfolio/images/aracAraclar.png",
        "/Portfolio/images/aracIlan.png", 
         "/Portfolio/images/aracHesap.png"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      features: [
        "Detaylı araç listeleme",
        "Gelişmiş arama filtreleri",
        "Favori araç kaydetme",
        "İlan yönetim sistemi"
      ],
      githubLink: "https://github.com/username/arac-satis"
    },
    {
      id: "e-ticaret",
      title: "E-ticaret Tasarımı",
      description: "Modern ve kullanıcı dostu e-ticaret platformu",
      fullDescription: "Responsive tasarıma sahip modern bir e-ticaret platformu. Kullanıcılar ürünleri kategorilere göre filtreleyebilir, sepete ekleyebilir ve satın alma işlemlerini gerçekleştirebilirler. Admin paneli üzerinden ürün ve kategori yönetimi yapılabilir.",
      images: [
        "/Portfolio/images/ruvido.jpeg",
        "/Portfolio/images/ruvido2.jpeg",
        "/Portfolio/images/ruvido3.jpeg",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Firebase","Sanal POS"],
      features: [
        "Responsive tasarım",
        "Ürün filtreleme ve arama",
        "Sepet yönetimi",
        "Kullanıcı hesap sistemi",
        "Admin paneli",
        "Ödeme entegrasyonu"
      ],
      githubLink: "https://github.com/username/e-commerce"
    },
    {
      id: "otel-tanitim",
      title: "Otel Tanıtım Sitesi",
      description: "Lüks otel tanıtım ve rezervasyon platformu",
      fullDescription: "Modern ve şık tasarıma sahip otel tanıtım sitesi. Kullanıcılar odaları inceleyebilir, fiyatları görebilir ve online rezervasyon yapabilirler. Ayrıca otelin sunduğu hizmetler, restoranlar ve aktiviteler hakkında detaylı bilgi edinebilirler.",
      images: [
        "/Portfolio/images/otel.jpeg",
        "/Portfolio/images/otel4.jpg",
        "/Portfolio/images/otel2.jpeg",
        "/Portfolio/images/otel3.jpeg",
        
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "PHP", "MySQL"],
      features: [
        "Responsive tasarım",
        "Online rezervasyon sistemi",
        "Oda kategorileri ve detayları",
        "Fiyat karşılaştırma",
        "Otel hizmetleri tanıtımı",
        "Müşteri yorumları",
        "İletişim formu"
      ],
      githubLink: "https://github.com/username/hotel-website"
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Proje bulunamadı</div>;
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

  return (
    <div style={styles.container}>  
      <Link to="/" style={styles.backButton}>← Ana Sayfaya Dön</Link>
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          <ul style={styles.navList}>
            <li>
              <a href="#anasayfa" onClick={(e) => handleNavigation(e, 'anasayfa')} style={styles.navLink}>
                Ana Sayfa
              </a>
            </li>
            <li>
              <a href="#hakkimda" onClick={(e) => handleNavigation(e, 'hakkimda')} style={styles.navLink}>
                Hakkımda
              </a>
            </li>
            <li>
              <a href="#projeler" onClick={(e) => handleNavigation(e, 'projeler')} style={styles.navLink}>
                Projeler
              </a>
            </li>
            <li>
              <a href="#iletisim" onClick={(e) => handleNavigation(e, 'iletisim')} style={styles.navLink}>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </nav>

   
      
      <div style={styles.contentWrapper}>
        <div style={styles.imageSection}>
          <div style={styles.imageContainer}>
            <div style={styles.mainImageWrapper}>
              <img 
                src={project.images[currentImageIndex]} 
                alt={`${project.title} ${currentImageIndex + 1}`} 
                style={styles.mainImage}
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
          <h1 style={styles.title}>{project.title}</h1>
          <p style={styles.description}>{project.fullDescription}</p>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Teknolojiler</h2>
            <div style={styles.tags}>
              {project.technologies.map((tech, index) => (
                <span key={index} style={styles.tag}>{tech}</span>
              ))}
            </div>
          </div>

          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Özellikler</h2>
            <ul style={styles.featureList}>
              {project.features.map((feature, index) => (
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
            GitHub'da İncele
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '40px',
    marginTop: '30px',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
  imageSection: {
    position: 'sticky',
    top: '100px',
    height: 'fit-content',
  },
  imageContainer: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
  mainImageWrapper: {
    position: 'relative',
    width: '100%',
    height: '600px',
    backgroundColor: 'var(--bg-primary)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '20px',
  },
  imageInfo: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'var(--primary-color)',
    color: '#000',
    width: '50px',
    height: '50px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    transition: 'all 0.3s ease',
    opacity: 0.8,
    '&:hover': {
      opacity: 1,
      transform: 'translateY(-50%) scale(1.1)',
    },
  },
  leftButton: {
    left: '20px',
  },
  rightButton: {
    right: '20px',
  },
  imageCounter: {
    color: 'var(--text-secondary)',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  thumbnails: {
    display: 'flex',
    gap: '15px',
    marginTop: '25px',
    overflowX: 'auto',
    padding: '10px 0',
    justifyContent: 'center',
  },
  thumbnailContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    opacity: 0.6,
    transition: 'all 0.3s ease',
    backgroundColor: 'var(--bg-primary)',
    padding: '5px',
    '&:hover': {
      opacity: 0.8,
      transform: 'scale(1.05)',
    },
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  activeThumbnail: {
    opacity: 1,
    border: '2px solid var(--primary-color)',
    transform: 'scale(1.05)',
  },
  infoSection: {
    // ...existing code...
  },
  backButton: {
    display: 'inline-block',
    marginBottom: '30px',
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
  title: {
    fontSize: '2.5rem',
    color: 'var(--text-color)',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: 'var(--text-color)',
    marginBottom: '20px',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center', // Merkeze hizalama ekledim
    alignItems: 'center', // Dikey hizalama da ekledim
  },
  tag: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    color: 'var(--primary-color)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1rem',
    display: 'inline-flex', // Eklendi
    alignItems: 'center', // Eklendi
    justifyContent: 'center', // Eklendi
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
  },
  feature: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    marginBottom: '10px',
    paddingLeft: '20px',
    position: 'relative',
    '&::before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      color: 'var(--primary-color)',
    },
  },
  technologies: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
  },
  technology: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
   
    color: 'var(--primary-color)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '1rem',
  },
  githubButton: {
    display: 'inline-block',
    backgroundColor: 'var(--primary-color)',
    color: '#000000',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  navbar: {
    position: 'fixed',
    top: '20px',
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px',
  },
  navContainer: {
    backgroundColor: 'rgba(26, 26, 26, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    padding: '10px 30px',
    maxWidth: '800px',
    width: '90%',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'var(--text-color)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    padding: '5px 0',
    '&:hover': {
      color: 'var(--primary-color)',
    },
  },
};

export default ProjectDetail;