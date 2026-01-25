import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import './Projects.css';

/**
 * Projects Section Component
 * Displays project cards with modal details view
 */
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'A modern e-commerce platform with real-time inventory management and payment integration.',
      fullDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing via Stripe, advanced search and filtering, user authentication with JWT, and an admin dashboard for analytics. The platform handles thousands of products with optimized performance.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Real-time inventory synchronization',
        'Secure payment processing with Stripe',
        'Advanced search and filtering system',
        'Responsive admin dashboard',
        'Performance optimizations for large catalogs'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'Collaborative task management tool with drag-and-drop functionality and team features.',
      fullDescription: 'Developed a feature-rich task management application with drag-and-drop kanban boards, real-time collaboration, team workspaces, deadline tracking, and customizable workflows. Implemented using React and Firebase for real-time data synchronization.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Drag-and-drop kanban boards',
        'Real-time collaboration features',
        'Team workspaces and permissions',
        'Deadline tracking and notifications',
        'Custom workflow automation'
      ]
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Beautiful weather application with location-based forecasts and interactive maps.',
      fullDescription: 'Created an elegant weather dashboard featuring accurate forecasts, interactive weather maps, air quality monitoring, and customizable location tracking. Integrated with multiple weather APIs for comprehensive data and built with performance in mind.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Mapbox'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        '7-day weather forecasts',
        'Interactive weather maps',
        'Air quality monitoring',
        'Location-based alerts',
        'Beautiful data visualizations'
      ]
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'Full Stack',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
      fullDescription: 'Built a comprehensive analytics dashboard that aggregates data from multiple social media platforms, providing insights through interactive charts, engagement metrics, audience demographics, and performance tracking. Features automated reporting and export capabilities.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['Next.js', 'PostgreSQL', 'Chart.js', 'OAuth'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Multi-platform integration',
        'Real-time analytics updates',
        'Custom reporting tools',
        'Audience insights dashboard',
        'Automated scheduling features'
      ]
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      category: 'Full Stack',
      description: 'SaaS platform for developers to create and deploy professional portfolio websites.',
      fullDescription: 'Developed a SaaS application that enables developers to build and deploy professional portfolios without coding. Features customizable templates, drag-and-drop editor, custom domain support, and integrated analytics. Built with modern tech stack for optimal performance.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Drag-and-drop website builder',
        'Multiple customizable templates',
        'Custom domain integration',
        'Built-in analytics dashboard',
        'One-click deployment'
      ]
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform mobile app for tracking workouts and nutrition goals.',
      fullDescription: 'Created a comprehensive fitness tracking application with workout planning, nutrition logging, progress tracking, and social features. Includes personalized workout recommendations, meal planning, and integration with wearable devices for automated tracking.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Redux'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      highlights: [
        'Workout and nutrition tracking',
        'Personalized recommendations',
        'Social sharing features',
        'Wearable device integration',
        'Progress visualization'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>

              <div className="modal-body">
                <div className="modal-header">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                </div>

                <p className="modal-description">{selectedProject.fullDescription}</p>

                <div className="modal-highlights">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h4>Technologies</h4>
                  <div className="modal-tech-list">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <ExternalLink size={18} />
                    <span>View Live</span>
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <Github size={18} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
