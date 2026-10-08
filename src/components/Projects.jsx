import { useState } from 'react';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Cert-Tracker',
      shortDesc: 'A full-stack certification progress tracking application.',
      fullDesc: 'A full-stack certification progress tracking application designed to help students and learners organize certifications, monitor study progress, track completed topics and manage learning milestones.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Tailwind CSS', 'REST API'],
      features: [
        'Authentication',
        'Certification management',
        'Progress tracking',
        'Topic tracking',
        'Learning milestones',
        'REST APIs',
        'MongoDB / Mongoose',
        'JWT authentication'
      ],
      github: 'https://github.com/Hamzaayyubi/Cert-Tracker',
      live: 'https://cert-tracker-murex.vercel.app/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'E-School — Classes 9–12 Learning Platform',
      shortDesc: 'A modern learning platform designed for students of Classes 9–12.',
      fullDesc: 'A modern learning platform designed for students of Classes 9–12, providing organized NCERT resources, subjects, chapters, video lectures, study material and learning-focused features through a responsive interface.',
      technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Node.js', 'C++', 'DSA'],
      features: [
        'Classes 9–12 NCERT resources',
        'Subjects & Chapters organization',
        'Video lectures & Study material',
        'Courses & Faculty section',
        'Learning dashboard',
        'Responsive interface',
        'Dark/light mode',
        'Organized learning resources',
        'Video learning interface'
      ],
      github: null,
      live: null,
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card card" onClick={() => openModal(project)}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="btn btn-primary">View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>
                <div className="project-tech-mini">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-dot">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && <span className="tech-dot">+{project.technologies.length - 3} more</span>}
                </div>
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm" onClick={(e) => e.stopPropagation()} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" onClick={(e) => e.stopPropagation()} style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-actions">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm">
                    <Github size={16} /> Code
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div className="modal-body">
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.fullDesc}</p>
              </div>
              
              <div className="modal-grid">
                <div className="modal-section">
                  <h4>Technologies</h4>
                  <div className="modal-tags">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="modal-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>
                        <ChevronRight size={16} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
