import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "esya-hatirlatici",
    title: "Eşya Hatırlatıcı App",
    description: "React Native ile yapılmış eşya hatırlatıcı uygulaması.",
    image: "/Portfolio/images/esyaHatirla.png",
    tags: ["React Native", "İos"]
  },
  {
    id: "e-ticaret",
    title: "E-ticaret Tasarımı",
    description: "Responsive e-ticaret ön yüz tasarımı. Ürün listeleme, sepet işlemleri ve kullanıcı hesap yönetimi.",
    image: "/Portfolio/images/ruvido.jpeg",
    tags: ["HTML", "CSS", "JavaScript","React", "UI/UX", "Node.js","Firebase"]
  },
  {
    id: "arac-satis",
    title: "Araç Satış Sitesi",
    description: "Araç satış sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "/Portfolio/images/aracSatis.png",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX","Node.js"]
  },
 
  {
    id: "otel-tanitim",
    title:"Otel Tanıtım Sitesi",
    description: "Otel tanıtım sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "/Portfolio/images/otel.jpeg",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5", "UI/UX"]
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section id="projeler" style={styles.container}>
      <h2 style={styles.title}>Projelerim</h2>
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
                  alt={project.title} 
                  style={styles.projectImage} 
                />
              </div>
              
              <div style={styles.cardContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.description}>{project.description}</p>
                
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
    </section>
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
    textAlign: 'center',
    marginBottom: '30px', // Mobilde daha az margin
    fontSize: '2rem', // Mobilde daha küçük başlık
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
    '@media (min-width: 768px)': {
      padding: '25px', // Tablet ve üstünde daha fazla padding
    },
  },
  projectTitle: {
    color: 'var(--text-color)',
    fontSize: '1.25rem', // Mobilde daha küçük başlık
    marginBottom: '10px',
    '@media (min-width: 768px)': {
      fontSize: '1.5rem',
    },
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '15px',
    lineHeight: '1.5',
    fontSize: '0.9rem', // Mobilde daha küçük yazı
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
    justifyContent: 'center', // Düğmeyi ortala
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