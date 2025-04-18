import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "React ile yapılmış kişisel portfolyo web sitesi.",
    link: "#"
  },
  {
    title: "Todo App",
    description: "React ve Firebase ile yapılmış yapılacaklar uygulaması.",
    link: "#"
  },
  {
    title: "E-ticaret Tasarımı",
    description: "Responsive e-ticaret ön yüz tasarımı.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 style={{ color: 'var(--primary-color)', textAlign: 'center' }}>Projelerim</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} style={styles.link}>Detaylar</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gap: '20px',
    marginTop: '30px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.4)',
  },
  link: {
    marginTop: '10px',
    display: 'inline-block',
    color: 'var(--primary-color)',
    fontWeight: 'bold',
  }
};

export default Projects;