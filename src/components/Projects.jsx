import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../Context/LanguageContext';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language, translations } = useLanguage();
  
  const projects = [
    {
      id: "esya-hatirlatici",
      titleTR: "Eşya Hatırlatıcı App",
      titleEN: "Item Reminder App",
      descriptionTR: "React Native ile yapılmış eşya hatırlatıcı uygulaması.",
      descriptionEN: "Item reminder application built with React Native.",
      image: "/Portfolio/images/esyaHatirla.png",
      tags: ["React Native", "iOS"]
    },

    {
      id: "arac-satis",
      titleTR: "Araç Satış Sitesi",
      titleEN: "Vehicle Sales Website",
      descriptionTR: "Araç satış sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
      descriptionEN: "Vehicle sales website design. Focused on user interface and experience.",
      image: "/Portfolio/images/aracSatis.png",
      tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Node.js"]
    },
    {
      id: "otel-tanitim",
      titleTR: "Otel Tanıtım Sitesi",
      titleEN: "Hotel Promotion Website",
      descriptionTR: "Otel tanıtım sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
      descriptionEN: "Hotel promotion website design. Focused on user interface and experience.",
      image: "/Portfolio/images/otel.jpeg",
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap5", "UI/UX"]
    },
    {
      id: "ruvidoTekstil",
      titleTR: "Ruvido Tekstil",
      titleEN: "Ruvido Textile",
      descriptionTR: "Ruvido Tekstil için responsive web tasarımı. Ürün listeleme, Firma tanıtımı ve iletişim bilgileri.",
      descriptionEN: "Responsive web design for Ruvido Textile. Product listing, company introduction and contact information.",
      image: "/Portfolio/images/ruvidoTekstil.png",
      tags: ["React","Responsive Design","UI/UX"]

    },
  ];

  return (
    <>
      <h2 style={styles.title}>{translations[language].projects.title}</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <Link 
            to={`/project/${project.id}`} 
            key={index}
            style={{ textDecoration: 'none' }}
          >
            <div 
              style={{
                ...styles.card,
                ...(hoveredIndex === index ? styles.cardHovered : {})
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={styles.imageContainer}>
                <img 
                  src={project.image} 
                  alt={language === 'tr' ? project.titleTR : project.titleEN} 
                  style={styles.projectImage} 
                />
              </div>
              
              <div style={styles.cardContent}>
                <h3 style={styles.projectTitle}>
                  {language === 'tr' ? project.titleTR : project.titleEN}
                </h3>
                <p style={styles.description}>
                  {language === 'tr' ? project.descriptionTR : project.descriptionEN}
                </p>
                
                <div style={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '40px 15px', // Mobilde daha az padding
    position: 'relative',
    backgroundColor: 'transparent',
    '@media (min-width: 768px)': {
      padding: 'var(--section-padding)',
    },
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'left', // Sola hizala
    marginBottom: '30px',
    fontSize: '2rem',
    '@media (min-width: 768px)': {
      marginBottom: '50px',
      fontSize: 'var(--heading-medium, 2.5rem)',
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Daha küçük minimum genişlik
    gap: '20px', // Boşlukları azalttım
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 15px', // Kenarlarda padding ekledim
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '15px', // Biraz daha küçük radius
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left', // Sola hizala
  },
  cardHovered: {
    transform: 'translateY(-10px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    
  },
  imageContainer: {
    width: '100%',
    height: '200px', // Mobilde daha küçük resim alanı
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--bg-secondary)',
    '@media (min-width: 768px)': {
      height: '250px', // Tablet ve üstünde daha büyük
    },
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '10px',
    transition: 'transform 0.5s ease',
  },
  cardContent: {
    padding: '20px', // Mobilde daha az padding
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      padding: '25px', // Tablet ve üstünde daha fazla padding
    },
  },
  projectTitle: {
    color: 'var(--text-color)',
    fontSize: '1.25rem',
    marginBottom: '10px',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '15px',
    lineHeight: '1.5',
    fontSize: '0.9rem',
    textAlign: 'left', // Sola hizala
    '@media (min-width: 768px)': {
      fontSize: '1rem',
      marginBottom: '20px',
    },
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px', // Mobilde daha az boşluk
    marginBottom: '20px',
    justifyContent: 'flex-start', // Sola hizala
    '@media (min-width: 768px)': {
      gap: '10px',
    },
  },
  tag: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    color: 'var(--primary-color)',
    padding: '4px 10px', // Mobilde daha küçük padding
    borderRadius: '12px',
    fontSize: '0.8rem', // Mobilde daha küçük yazı
    fontWeight: '500',
    '@media (min-width: 768px)': {
      padding: '5px 12px',
      fontSize: '0.85rem',
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'flex-start', // Sola hizala
    marginTop: 'auto',
  },
  projectButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    backgroundColor: 'var(--primary-color)',
    color: '#000000',
    fontWeight: '600',
    padding: '12px 25px', // Biraz daha büyük düğme
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1rem',
    minWidth: '160px', // Minimum genişlik ekledik
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)', // Hafif bir gölge
    ':hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
    }
  },
  arrow: {
    transition: 'transform 0.3s ease',
  },
};

export default Projects;