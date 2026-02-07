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
                I'm a passionate Full-Stack Developer with over 2 years of experience building
                robust and scalable web applications. My journey in tech started with a curiosity
                for how things work and has grown into a dedication to creating efficient, 
                high-quality digital solutions.
              </p>

              <p className="about-details">
                I specialize in both front-end and back-end development, working with modern
                technologies to deliver seamless functionality and optimized performance.
                When I'm not coding, I enjoy contributing to open-source projects, exploring
                new tools, and continuously improving my skills to stay ahead in the fast-paced
                world of web development.
              </p>

              <p className="about-philosophy">
                My approach emphasizes clean, maintainable code, effective problem-solving, and
                building applications that exceed expectations. I thrive on turning ideas into
                fully functional solutions that provide real value to users and businesses alike.
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
