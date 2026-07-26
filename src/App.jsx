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

  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
  }, [themeMode]);

  return (
    <div className="relative w-full min-h-screen selection:bg-indigo-500/30 dark:selection:bg-indigo-400/25">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] origin-left"
        style={{ scaleX, zIndex: 'var(--z-toast)' }}
        aria-hidden="true"
      />

      <div
        className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] dark:opacity-[0.03] pointer-events-none"
        style={{ zIndex: 'var(--z-base)' }}
        aria-hidden="true"
      />

      <Navbar />

      <main className="relative w-full" style={{ zIndex: 1 }}>
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