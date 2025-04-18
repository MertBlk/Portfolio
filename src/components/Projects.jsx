import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "React ile yapılmış kişisel portfolyo web sitesi.",
    link: "#",
    tags: ["React", "CSS", "Responsive"]
  },
  {
    title: "Todo App",
    description: "React ve Firebase ile yapılmış yapılacaklar uygulaması.",
    link: "#",
    tags: ["React", "Firebase", "CRUD"]
  },
  {
    title: "E-ticaret Tasarımı",
    description: "Responsive e-ticaret ön yüz tasarımı.",
    link: "#",
    tags: ["HTML", "CSS", "JavaScript"]
  }
];

const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.title}>Projelerim</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <div style={styles.tags}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} style={styles.link}>
                Detaylar
                <span style={styles.arrow}>→</span>
              </a>
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
  },
  title: {
    color: 'var(--primary-color)',
    textAlign: 'center',
    marginBottom: '50px',
    fontSize: '2.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'var(--transition)',
    cursor: 'pointer',
    boxShadow: 'var(--card-shadow)',
  },
  cardContent: {
    padding: '25px',
  },
  projectTitle: {
    color: 'var(--text-color)',
    marginBottom: '15px',
    fontSize: '1.5rem',
  },
  description: {
    color: 'var(--text-secondary)',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  tag: {
    backgroundColor: 'rgba(142, 68, 173, 0.2)',
    color: 'var(--primary-color)',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '0.9rem',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
    transition: 'var(--transition)',
  },
  arrow: {
    transition: 'var(--transition)',
  }
};

export default Projects;