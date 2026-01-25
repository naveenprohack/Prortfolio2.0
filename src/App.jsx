import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

/**
 * Main App Component
 * Orchestrates the entire portfolio website with smooth scrolling,
 * theme management, and section transitions
 */
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entry animation after mount
    setIsLoaded(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        {/* Navigation Bar - Fixed at top */}
        <Navbar />
        
        {/* Main Content with staggered section reveals */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </motion.main>

        {/* Footer with social links */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
