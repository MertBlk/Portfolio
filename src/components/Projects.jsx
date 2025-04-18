import React, { useState } from 'react';

const projects = [
 
  {
    title: "Eşya Hatırlatıcı App",
    description: "React ile yapılmış eşya hatırlatıcı uygulaması.",
    image: "https://via.placeholder.com/400x200?text=Esya+Hatirlatici",
    link: "/todo-project",
    tags: ["React Native", "İos",]
  },
  {
    title: "E-ticaret Tasarımı",
    description: "Responsive e-ticaret ön yüz tasarımı. Ürün listeleme, sepet işlemleri ve kullanıcı hesap yönetimi.",
    image: "https://via.placeholder.com/400x200?text=Esya+Hatirlatici", // public klasörünün kök dizininde
    link: "/ecommerce-project",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Araç Satış Sitesi",
    description: "Araç satış sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "https://via.placeholder.com/400x200?text=Esya+Hatirlatici", // public klasörünün kök dizininde
    link: "/car-sales-project",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX","Node.js"]
  },

  {
    title: "Şehir Tanıtıcı App",
    description: "Java ile yapılan andorid için şehir tanıtımı uygulaması.",
    image: "https://via.placeholder.com/400x200?text=Esya+Hatirlatici",
    link: "/todo-project",
    tags: ["Java", "Android","Sqlite","Admin Management"]
  },
  {
    title:"Otel Tanıtım Sitesi",
    description: "Otel tanıtım sitesi tasarımı. Kullanıcı arayüzü ve deneyimi odaklı.",
    image: "https://via.placeholder.com/400x200?text=Esya+Hatirlatici", // public klasörünün kök dizininde
    link: "/hotel-project",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap5", "UI/UX"]
  }
];

// Sabit gradyan renklerini tanımlayalım - Ana renk ve koyu versiyonu

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <section id="projeler" style={styles.container}>
      <h2 style={styles.title}>Projelerim</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            style={{
              ...styles.card,
              ...(hoveredIndex === index ? styles.cardHovered : {})
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.imageContainer}>
              {/* Resim eklemek için img etiketi kullanıyoruz */}
              <img 
                src={project.image} 
                alt={project.title} 
                style={styles.projectImage} 
              />
              <span style={styles.projectNumber}>0{index + 1}</span>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              
              <div style={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>{tag}</span>
                ))}
              </div>
              
              <div style={styles.links}>
                {/* GitHub yerine proje sayfasına yönlendirme */}
                <a 
                  href={project.link} 
                  style={styles.projectButton}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Projeyi Görüntüle</span>
                  <span style={styles.arrow}>→</span>
                </a>
              </div>
            </div>
          </div>
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '15px',
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
    height: '180px',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    position: 'relative',
  },
  projectImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Resmi kırpmadan, container'a sığdır
    transition: 'transform 0.5s ease',
  },
  projectNumber: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    opacity: 0.7,
    color: 'rgba(255, 255, 255, 0.8)',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)', // Metin okunabilirliği için gölge
  },
  cardContent: {
    padding: '25px',
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