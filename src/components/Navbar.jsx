import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../store/themeSlice';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const onPointerDown = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const ThemeButton = ({ className = '' }) => (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      aria-label={themeMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`cursor-pointer p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors ${className}`}
    >
      {themeMode === 'dark' ? (
        <Sun size={20} className="text-amber-400" />
      ) : (
        <Moon size={20} className="text-slate-600" />
      )}
    </button>
  );

  return (
    <nav
      ref={mobileNavRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5 sm:py-8'} bg-transparent`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex justify-between items-center transition-all ${scrolled ? 'glass px-4 sm:px-6 py-3 rounded-2xl shadow-lg' : ''}`}>
          <a href="#home" className="flex items-center gap-2 group cursor-pointer min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-lg sm:text-xl font-heading font-bold tracking-tight text-slate-900 dark:text-white truncate">
              Petros<span className="text-indigo-500">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <ThemeButton />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeButton />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="cursor-pointer p-2 text-slate-900 dark:text-white"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass p-6 rounded-2xl z-50 shadow-xl"
          >
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-slate-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer py-3 border-b border-slate-200/80 dark:border-white/10 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
