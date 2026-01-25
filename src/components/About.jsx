import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';
import './About.css';

/**
 * About Section Component
 * Showcases personal information and values
 */
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const values = [
    {
      icon: <Code size={28} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: <Palette size={28} />,
      title: 'Design First',
      description: 'Believing that great UX starts with thoughtful, intentional design.'
    },
    {
      icon: <Zap size={28} />,
      title: 'Performance',
      description: 'Optimizing every detail for blazing fast, efficient experiences.'
    },
    {
      icon: <Heart size={28} />,
      title: 'User-Centric',
      description: 'Building with empathy and putting users at the heart of every decision.'
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p className="about-intro">
                I'm a passionate developer and designer with over 5 years of experience
                crafting digital solutions that make a difference. My journey in tech
                began with a curiosity for how things work and evolved into a love for
                creating experiences that are both beautiful and functional.
              </p>

              <p className="about-details">
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sharing knowledge with the
                developer community. I believe in continuous learning and pushing the
                boundaries of what's possible with modern web technologies.
              </p>

              <p className="about-philosophy">
                My approach combines technical expertise with creative problem-solving,
                ensuring every project not only meets requirements but exceeds expectations.
                I'm committed to writing clean, maintainable code and creating interfaces
                that users love.
              </p>
            </motion.div>

            <motion.div className="about-values" variants={itemVariants}>
              <h3 className="values-title">Core Values</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="value-card"
                    variants={itemVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <h4 className="value-title">{value.title}</h4>
                    <p className="value-description">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
