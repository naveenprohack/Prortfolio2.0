import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Layers, Server, Code2, Wrench, 
  TrendingUp, CheckCircle, Star, Zap 
} from 'lucide-react';
import './Skills.css';

/**
 * Enhanced Skills Section Component
 * Professional showcase with interactive elements
 */
const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: <Layers size={24} />,
      color: '#60A5FA',
      skills: [
        { name: 'React.js', level: 95, years: 4 },
        { name: 'Next.js', level: 90, years: 3 },
        { name: 'TypeScript', level: 88, years: 3 },
        { name: 'Tailwind CSS', level: 92, years: 3 },
        { name: 'Framer Motion', level: 85, years: 2 }
      ]
    },
    {
      category: 'Backend',
      icon: <Server size={24} />,
      color: '#34D399',
      skills: [
        { name: 'Node.js', level: 90, years: 4 },
        { name: 'Express.js', level: 88, years: 4 },
        { name: 'MongoDB', level: 85, years: 3 },
        { name: 'PostgreSQL', level: 82, years: 3 },
        { name: 'REST APIs', level: 93, years: 5 }
      ]
    },
    {
      category: 'Tools & Others',
      icon: <Wrench size={24} />,
      color: '#FBBF24',
      skills: [
        { name: 'Git & GitHub', level: 94, years: 5 },
        { name: 'Docker', level: 80, years: 2 },
        { name: 'AWS', level: 75, years: 2 },
        { name: 'Figma', level: 88, years: 3 },
        { name: 'Jest', level: 82, years: 2 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="skills" className="skills-section section">
      {/* Animated Background */}
      <div className="skills-bg-gradient"></div>
      
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div className="skills-header" variants={itemVariants}>
            {/* <motion.div 
              className="section-badge"
              whileHover={{ scale: 1.05 }}
            >
              <Zap size={16} />
              <span>What I bring to the table</span>
            </motion.div> */}
            <h2 className="section-title enhanced-title">
              Skills & Technologies
              <motion.span 
                className="title-underline"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>
            <p className="section-subtitle">
              Mastering the tools and technologies that power modern web development
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div className="category-tabs" variants={itemVariants}>
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.category}
                className={`category-tab ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.category}</span>
                {activeCategory === index && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="activeTab"
                    style={{ background: category.color }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <div className="skills-display">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="skill-category-content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeCategory === categoryIndex ? 1 : 0,
                  x: activeCategory === categoryIndex ? 0 : 20,
                  display: activeCategory === categoryIndex ? 'block' : 'none'
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="skills-list-enhanced">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item-enhanced"
                      initial={{ opacity: 0, y: 20 }}
                      animate={activeCategory === categoryIndex ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: skillIndex * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skill-header-enhanced">
                        <div className="skill-name-wrapper">
                          <span className="skill-name">{skill.name}</span>
                          <motion.span 
                            className="skill-badge"
                            initial={{ scale: 0 }}
                            animate={{ scale: hoveredSkill === skill.name ? 1 : 0 }}
                          >
                            {skill.years}+ years
                          </motion.span>
                        </div>
                        <div className="skill-level-wrapper">
                          <motion.span 
                            className="skill-percentage"
                            animate={{ 
                              scale: hoveredSkill === skill.name ? 1.1 : 1,
                              color: hoveredSkill === skill.name ? category.color : 'var(--text-tertiary)'
                            }}
                          >
                            {skill.level}%
                          </motion.span>
                          {skill.level >= 90 && (
                            <motion.span
                              initial={{ rotate: -180, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              transition={{ delay: 0.5 + skillIndex * 0.1 }}
                            >
                              <Star size={16} fill={category.color} color={category.color} />
                            </motion.span>
                          )}
                        </div>
                      </div>
                      
                      <div className="skill-bar-container-enhanced">
                        <motion.div
                          className="skill-bar-bg"
                          style={{ background: `${category.color}15` }}
                        />
                        <motion.div
                          className="skill-bar-enhanced"
                          initial={{ width: 0 }}
                          animate={activeCategory === categoryIndex ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.2,
                            delay: skillIndex * 0.15,
                            ease: [0.6, 0.01, 0.05, 0.95]
                          }}
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                          }}
                        >
                          <motion.div 
                            className="skill-bar-glow"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'easeInOut'
                            }}
                            style={{ background: category.color }}
                          />
                        </motion.div>
                      </div>

                      {/* Proficiency Indicator */}
                      <motion.div 
                        className="proficiency-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                      >
                        {skill.level >= 90 ? (
                          <><CheckCircle size={14} style={{ color: category.color }} /> Expert</>
                        ) : skill.level >= 80 ? (
                          <><TrendingUp size={14} style={{ color: category.color }} /> Advanced</>
                        ) : (
                          <><Code2 size={14} style={{ color: category.color }} /> Intermediate</>
                        )}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Showcase */}
          <motion.div className="tech-stack-showcase" variants={itemVariants}>
            <div className="showcase-header">
              <h3 className="showcase-title">Complete Technology Stack</h3>
              <p className="showcase-subtitle">Technologies I work with daily</p>
            </div>
            
            <div className="tech-icons-grid">
              {[
                { name: 'React', color: '#61DAFB' },
                { name: 'Node.js', color: '#339933' },
                { name: 'TypeScript', color: '#3178C6' },
                { name: 'MongoDB', color: '#47A248' },
                { name: 'PostgreSQL', color: '#4169E1' },
                { name: 'Next.js', color: '#c96ad1' },
                { name: 'Express', color: '#59d18f' },
                { name: 'Tailwind', color: '#06B6D4' },
                { name: 'Git', color: '#F05032' },
                { name: 'Docker', color: '#2496ED' },
                { name: 'AWS', color: '#FF9900' },
                { name: 'Figma', color: '#F24E1E' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="tech-badge-enhanced"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    delay: 1 + index * 0.05, 
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -5,
                    boxShadow: `0 10px 30px ${tech.color}40`
                  }}
                >
                  <span className="tech-name">{tech.name}</span>
                  <motion.div 
                    className="tech-indicator"
                    style={{ background: tech.color }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div className="skills-stats" variants={itemVariants}>
            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper" style={{ background: '#60A5FA20' }}>
                <Code2 size={32} color="#60A5FA" />
              </div>
              <div className="stat-info">
                <h4 className="stat-number">15+</h4>
                <p className="stat-label">Technologies Mastered</p>
              </div>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper" style={{ background: '#34D39920' }}>
                <TrendingUp size={32} color="#34D399" />
              </div>
              <div className="stat-info">
                <h4 className="stat-number">2+</h4>
                <p className="stat-label">Years Experience</p>
              </div>
            </motion.div>

            <motion.div 
              className="stat-card"
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon-wrapper" style={{ background: '#FBBF2420' }}>
                <Star size={32} color="#FBBF24" />
              </div>
              <div className="stat-info">
                <h4 className="stat-number">90%+</h4>
                <p className="stat-label">Average Proficiency</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
