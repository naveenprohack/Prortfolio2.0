import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

/**
 * Experience Section Component
 * Displays work experience and education timeline
 */
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Junior Full-Stack Developer',
      company: 'Netaxis IT Solutions (P) Ltd',
      period: '2024 - Present',
      description: 'Contributing to the development of scalable web applications, following best practices, and collaborating with the engineering team to deliver high-quality software solutions.',
      achievements: [
        'Designed and deployed microservices architecture, reducing load times by 40%',
        'Led a team of 5 developers on the flagship product, ensuring timely delivery and code quality',
        'Implemented CI/CD pipelines, improving deployment efficiency by 60%'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      degree: 'Master of Business Administration (Human Resources)',
      school: 'University of Madras',
      period: '2024 - 2026',
      description: 'Focused on strategic human resource management, organizational behavior, and leadership in business environments.',
      achievements: [
        'Awarded “Best HR Strategy Project” for innovative employee engagement plan',
        'Conducted research on employee engagement strategies',
        'Teaching Assistant for HR Management courses'
      ]
    },
    {
      id: 2,
      type: 'education',
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Madras',
      period: '2020 - 2023',
      description: 'Completed an in-depth curriculum covering core computer science concepts, algorithms, and modern software development practices.',
      achievements: [
        "Consistently on the Dean's List throughout all semesters",
        'Served as President of the Computer Science Society',
        'Winner of a university hackathon for an innovative mobile application'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const TimelineItem = ({ item, index }) => (
    <motion.div
      className="timeline-item"
      variants={itemVariants}
    >
      <div className="timeline-marker">
        <div className="timeline-icon">
          {item.type === 'work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
        </div>
        <div className="timeline-line" />
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">
              {item.type === 'work' ? item.title : item.degree}
            </h3>
            <p className="timeline-company">
              {item.type === 'work' ? item.company : item.school}
            </p>
          </div>
          <span className="timeline-period">{item.period}</span>
        </div>
        <p className="timeline-description">{item.description}</p>
        <ul className="timeline-achievements">
          {item.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience & Education
          </motion.h2>

          <div className="experience-content">
            {/* Work Experience */}
            <div className="experience-category">
              <motion.h3 className="category-heading" variants={itemVariants}>
                <Briefcase size={28} />
                <span>Work Experience</span>
              </motion.h3>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <TimelineItem key={exp.id} item={exp} index={index} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="experience-category">
              <motion.h3 className="category-heading" variants={itemVariants}>
                <GraduationCap size={28} />
                <span>Education</span>
              </motion.h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <TimelineItem key={edu.id} item={edu} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
