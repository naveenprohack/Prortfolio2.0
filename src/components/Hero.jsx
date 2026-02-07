import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/profile.png'; // adjust filename


/**
 * Hero Section Component
 * Main landing section with animated introduction and CTA
 */
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        ease: 'easeOut'
      }
    }
  };

  return (
    <section
  id="hero"
  className="hero-section"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  }}
>
  {/* Overlay */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 0
    }}
  ></div>

  <div className="hero-container container" style={{ position: 'relative', zIndex: 1 }}>
    <motion.div
      className="hero-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-greeting" variants={itemVariants}>
        <span className="greeting-text">Hello, I'm</span>
      </motion.div>

      <motion.h1 className="hero-name" variants={itemVariants}>
        <span className="gradient-text">Naveen</span>
      </motion.h1>

      <motion.h2 className="hero-title" variants={itemVariants}>
        Full Stack Developer
      </motion.h2>

      <motion.p className="hero-description" variants={itemVariants}>
        I build robust, scalable web applications that deliver seamless functionality
        and efficient performance. Skilled in both front-end and back-end
        technologies, I turn ideas into fully functional digital solutions.
      </motion.p>

      <motion.div className="hero-actions" variants={itemVariants}>
        <button className="btn-primary" onClick={scrollToContact}>
          Get In Touch
        </button>
        <button className="btn-secondary" onClick={scrollToAbout}>
          Learn More
        </button>
      </motion.div>

      <motion.div className="hero-social" variants={itemVariants}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={22} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={22} />
        </a>
        <a href="mailto:hello@example.com" aria-label="Email">
          <Mail size={22} />
        </a>
      </motion.div>
    </motion.div>

    {/* Decorative Circles and Scroll Indicator remain unchanged */}
  </div>
</section>

  );
};

export default Hero;
