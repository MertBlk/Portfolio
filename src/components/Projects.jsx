import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../Context/LanguageContext';
import '../styles/Projects.css'; // Yeni CSS dosyası oluşturacağız

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const projectsContainerRef = useRef(null);
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

  const handleProjectClick = (index) => {
    if (isAnimating || index === selectedProject) return;
    
    setIsAnimating(true);
    setSelectedProject(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Animasyon tamamlanma süresi
  };

  useEffect(() => {
    // Projelerin görünürlüğünü kontrol etmek için IntersectionObserver kullanabiliriz
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach(project => observer.observe(project));

    return () => {
      projectElements.forEach(project => observer.unobserve(project));
    };
  }, []);

  return (
    <div className="projects-container">
      <h2 className="projects-title">{translations[language].projects.title}</h2>
      
      <div className="projects-layout">
        {/* Sol tarafta proje listesi */}
        <div className="project-list">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-tab ${selectedProject === index ? 'active' : ''}`}
              onClick={() => handleProjectClick(index)}
            >
              <span className="project-number">0{index + 1}</span>
              <h3>{language === 'tr' ? project.titleTR : project.titleEN}</h3>
            </div>
          ))}
        </div>
        
        {/* Sağ tarafta seçilen projenin detayları */}
        <div className="project-details">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`project-card ${selectedProject === index ? 'active' : ''} ${isAnimating ? 'animating' : ''}`}
            >
              <div className="project-media">
                <img 
                  src={project.image} 
                  alt={language === 'tr' ? project.titleTR : project.titleEN} 
                  className="project-image" 
                />
                <div className="project-image-overlay"></div>
              </div>
              
              <div className="project-info">
                <h3>{language === 'tr' ? project.titleTR : project.titleEN}</h3>
                <p>{language === 'tr' ? project.descriptionTR : project.descriptionEN}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <Link to={`/project/${project.id}`} className="view-project-btn">
                  {translations[language].projects.viewProject}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;