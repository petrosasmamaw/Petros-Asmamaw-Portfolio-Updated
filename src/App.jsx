import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-indigo-500/30">
      {/* Global Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Decorative Background */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none z-50"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Expertise />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}