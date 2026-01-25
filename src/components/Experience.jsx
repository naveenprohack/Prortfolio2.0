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
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale web applications, mentoring junior developers, and implementing best practices across the engineering team.',
      achievements: [
        'Architected and deployed microservices reducing load time by 40%',
        'Led team of 5 developers on flagship product',
        'Implemented CI/CD pipeline improving deployment efficiency by 60%'
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and cloud services. Collaborated with design and product teams.',
      achievements: [
        'Built 15+ production-ready web applications',
        'Improved code quality through comprehensive testing',
        'Reduced bug reports by 35% through improved QA processes'
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2019 - 2020',
      description: 'Focused on creating responsive, accessible user interfaces. Worked closely with UX designers to bring concepts to life.',
      achievements: [
        'Redesigned company website improving conversion by 25%',
        'Implemented responsive design system used across products',
        'Optimized performance achieving 95+ Lighthouse scores'
      ]
    }
  ];

  const education = [
    {
      id: 1,
      type: 'education',
      degree: 'Master of Science in Computer Science',
      school: 'Tech University',
      period: '2017 - 2019',
      description: 'Specialized in Web Technologies and Software Engineering. Graduated with honors.',
      achievements: [
        'GPA: 3.9/4.0',
        'Research in Progressive Web Applications',
        'Teaching Assistant for Web Development courses'
      ]
    },
    {
      id: 2,
      type: 'education',
      degree: 'Bachelor of Science in Information Technology',
      school: 'State University',
      period: '2013 - 2017',
      description: 'Comprehensive study of computer science fundamentals, algorithms, and software development.',
      achievements: [
        'Dean\'s List all semesters',
        'President of Computer Science Society',
        'Won hackathon with innovative mobile app'
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
