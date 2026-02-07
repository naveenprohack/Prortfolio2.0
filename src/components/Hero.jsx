import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Code, Sparkles } from 'lucide-react';
import './Hero.css';

/**
 * Enhanced Hero Section Component
 * Advanced UX with professional animations and interactions
 */
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tracking for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Typing animation for roles
  const roles = ['Full-Stack Developer', 'Creative Designer', 'Problem Solver', 'UI/UX Enthusiast'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Animated Background Grid */}
      <div className="hero-grid-bg">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>

      {/* Particle Effects */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div className="hero-container container" style={{ opacity }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            className="hero-badge" 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} />
            <span>Available for exciting projects</span>
          </motion.div>

          {/* Greeting with animation */}
          <motion.div className="hero-greeting" variants={itemVariants}>
            <motion.span 
              className="greeting-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.span>
          </motion.div>

          {/* Name with gradient animation */}
          <motion.h1 className="hero-name" variants={itemVariants}>
            <motion.span 
              className="gradient-text animated-gradient"
              style={{
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              Naveen
            </motion.span>
          </motion.h1>

          {/* Rotating Title */}
          <motion.div className="hero-title-wrapper" variants={itemVariants}>
            <motion.h2 className="hero-title">
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="role-text"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            Crafting exceptional digital experiences that merge elegant design
            with powerful functionality. Specializing in modern web technologies
            and user-centered solutions that make a real impact.
          </motion.p>

          {/* Stats Bar */}
          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat-item">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                5+
              </motion.span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                50+
              </motion.span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.span 
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                20+
              </motion.span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.button 
              className="btn-primary btn-enhanced" 
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="btn-text">Get In Touch</span>
              <motion.span 
                className="btn-icon"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.button 
              className="btn-secondary btn-enhanced" 
              onClick={scrollToAbout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code size={18} />
              <span className="btn-text">View My Work</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div className="hero-social" variants={itemVariants}>
            {[
              { icon: Github, url: 'https://github.com', label: 'GitHub', delay: 0 },
              { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', delay: 0.1 },
              { icon: Mail, url: 'mailto:hello@example.com', label: 'Email', delay: 0.2 }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link enhanced-social"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + social.delay, type: 'spring' }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  transition: { duration: 0.5 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon size={22} />
                <span className="social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Decorative Elements */}
        <motion.div className="hero-decoration" style={{ y: y1 }}>
          <motion.div
            className="decoration-circle circle-1"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5
            }}
          />
          <motion.div
            className="decoration-circle circle-2"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3
            }}
          />
          
          {/* Additional geometric shapes */}
          <motion.div
            className="decoration-square"
            animate={{
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </motion.div>

        {/* Floating Code Symbols */}
        <div className="floating-symbols">
          {['{ }', '</>', '< />', '( )'].map((symbol, index) => (
            <motion.div
              key={index}
              className="code-symbol"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: index * 0.2 }}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + (index % 2) * 40}%`
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="scroll-indicator enhanced-scroll"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          style={{ y: y2 }}
        >
          <motion.div
            className="scroll-content"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ArrowDown size={24} />
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
