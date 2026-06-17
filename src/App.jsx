import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { motion, useScroll, useSpring } from 'framer-motion';
import store from './store/store.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Expertise from './components/Expertise.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Projects from './components/Projects.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const themeMode = useSelector((state) => state.theme.mode);

  // Apply theme to document on mount and when theme changes
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  return (
    <div className="relative w-full min-h-screen selection:bg-indigo-500/30">
      {/* Global Scroll Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 z-[60] origin-left"
        style={{ scaleX }}
      />
      
      {/* Decorative Background */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none z-50"></div>
      
      <Navbar />
      
      <main className="w-full">
        <Hero />
        <Expertise />
        <Skills />
        <Experience />
        <Certificates />
        <Projects />
        <ContactUs />
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}