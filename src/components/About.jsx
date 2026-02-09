import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Code, Palette, Zap, Heart, Download, Award, Users, Target } from 'lucide-react';
import './About.css';

/**
 * Enhanced About Section Component
 * Professional showcase with advanced animations
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeValue, setActiveValue] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const values = [
    {
      icon: <Code size={28} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
      color: '#60A5FA',
      stats: '99% Code Quality'
    },
    {
      icon: <Palette size={28} />,
      title: 'Design First',
      description: 'Believing that great UX starts with thoughtful, intentional design.',
      color: '#F472B6',
      stats: 'Award Winning'
    },
    {
      icon: <Zap size={28} />,
      title: 'Performance',
      description: 'Optimizing every detail for blazing fast, efficient experiences.',
      color: '#FBBF24',
      stats: '<100ms Response'
    },
    {
      icon: <Heart size={28} />,
      title: 'User-Centric',
      description: 'Building with empathy and putting users at the heart of every decision.',
      color: '#EF4444',
      stats: '98% Satisfaction'
    }
  ];

  const achievements = [
    { icon: <Award size={24} />, label: 'Certified Developer', value: '10+' },
    { icon: <Users size={24} />, label: 'Team Leadership', value: '3+' },
    { icon: <Target size={24} />, label: 'Success Rate', value: '99%' }
  ];

  return (
    <section id="about" className="about-section section">
      {/* Animated Background Pattern */}
      <div className="about-bg-pattern">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="pattern-dot"
            style={{
              left: `${(i % 5) * 25}%`,
              top: `${Math.floor(i / 5) * 33}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{ opacity }}
        >
          {/* Section Header */}
          <motion.div className="about-header" variants={itemVariants}>
            {/* <motion.div 
              className="section-badge"
              whileHover={{ scale: 1.05 }}
            >
              <span className="badge-dot"></span>
              <span>Get to know me</span>
            </motion.div> */}
            <h2 className="section-title enhanced-title">
              About Me
              <motion.span 
                className="title-underline"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            <p className="section-subtitle">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="about-content">
            {/* Bio Section with Image */}
            <motion.div className="about-bio-section" variants={itemVariants}>
              <div className="bio-grid">
                <div className="bio-image-wrapper">
                  <motion.div 
                    className="bio-image-frame"
                    whileHover={{ scale: 1.02, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="image-placeholder">
                      <motion.div
                        className="placeholder-icon"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear'
                        }}
                      >
                        <Code size={80} />
                      </motion.div>
                    </div>
                    <div className="image-glow"></div>
                  </motion.div>
                  
                  {/* Floating Stats */}
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      className="floating-stat"
                      style={{
                        top: `${20 + index * 30}%`,
                        right: index % 2 === 0 ? '-20px' : 'auto',
                        left: index % 2 !== 0 ? '-20px' : 'auto',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1 + index * 0.2, type: 'spring' }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="stat-icon">{achievement.icon}</div>
                      <div className="stat-content">
                        <span className="stat-value">{achievement.value}</span>
                        <span className="stat-label">{achievement.label}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bio-text">
                  <motion.p 
                    className="about-intro"
                    variants={itemVariants}
                  >
                    I'm a passionate developer and designer with over 5 years of experience
                    crafting digital solutions that make a difference. My journey in tech
                    began with a curiosity for how things work and evolved into a love for
                    creating experiences that are both beautiful and functional.
                  </motion.p>

                  <motion.p 
                    className="about-details"
                    variants={itemVariants}
                  >
                    When I'm not coding, you'll find me exploring new design trends,
                    contributing to open-source projects, or sharing knowledge with the
                    developer community. I believe in continuous learning and pushing the
                    boundaries of what's possible with modern web technologies.
                  </motion.p>

                  <motion.p 
                    className="about-philosophy"
                    variants={itemVariants}
                  >
                    My approach combines technical expertise with creative problem-solving,
                    ensuring every project not only meets requirements but exceeds expectations.
                    I'm committed to writing clean, maintainable code and creating interfaces
                    that users love.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.button
                    className="download-cv-btn"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Core Values Section */}
            <motion.div className="about-values" variants={itemVariants}>
              <div className="values-header">
                <h3 className="values-title">Core Values & Principles</h3>
                <p className="values-subtitle">What drives my work and defines my approach</p>
              </div>
              
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className={`value-card ${activeValue === index ? 'active' : ''}`}
                    variants={itemVariants}
                    onHoverStart={() => setActiveValue(index)}
                    onHoverEnd={() => setActiveValue(null)}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="value-icon-wrapper"
                      animate={{
                        rotate: activeValue === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div 
                        className="value-icon"
                        style={{ 
                          background: `linear-gradient(135deg, ${value.color}, ${value.color}99)`
                        }}
                      >
                        {value.icon}
                      </div>
                      <motion.div 
                        className="icon-ring"
                        animate={{
                          scale: activeValue === index ? [1, 1.2, 1] : 1,
                          opacity: activeValue === index ? [0.5, 0.8, 0.5] : 0.3,
                        }}
                        transition={{ duration: 1, repeat: activeValue === index ? Infinity : 0 }}
                        style={{ borderColor: value.color }}
                      />
                    </motion.div>

                    <div className="value-content">
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-description">{value.description}</p>
                      <motion.div 
                        className="value-stats"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: activeValue === index ? 1 : 0,
                          height: activeValue === index ? 'auto' : 0
                        }}
                      >
                        <span className="stats-badge" style={{ background: value.color }}>
                          {value.stats}
                        </span>
                      </motion.div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      className="card-glow"
                      style={{ background: `radial-gradient(circle at center, ${value.color}33, transparent)` }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeValue === index ? 1 : 0 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Overview */}
            <motion.div className="about-skills-preview" variants={itemVariants}>
              <div className="skills-preview-content">
                <h3 className="preview-title">Technical Expertise</h3>
                <p className="preview-subtitle">Specialized in modern web development</p>
                <div className="tech-tags">
                  {['React', 'Node.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
