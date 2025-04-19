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
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: "arac-satis",
    title: "Araç Satış Sitesi",
    description: "Araç satış sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "/Portfolio/images/aracSatis.png",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX","Node.js"]
  },
  {
    id: "sehir-tanitim",
    title: "Şehir Tanıtıcı App",
    description: "Java ile yapılan andorid için şehir tanıtımı uygulaması.",
    image: "/Portfolio/images/aracAraclar.png",
    tags: ["Java", "Android","Sqlite","Admin Management"]
  },
  {
    id: "otel-tanitim",
    title:"Otel Tanıtım Sitesi",
    description: "Otel tanıtım sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "/Portfolio/images/aracHesap.png",
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
    padding: 'var(--section-padding)',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: 'var(--heading-medium, 2.5rem)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '40px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '20px',
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
    borderColor: 'var(--primary-color)',
  },
  imageContainer: {
    width: '100%',
    height: '22rem',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--bg-secondary)',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    padding: '10px',
    transition: 'transform 0.5s ease',
  },
  cardContent: {
    padding: '35px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
  projectTitle: {
    color: 'var(--text-color)',
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: '1.6',
    fontSize: '1rem',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '25px',
  },
  tag: {
    backgroundColor: 'rgba(241, 196, 15, 0.1)',
    color: 'var(--primary-color)',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: '500',
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