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
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      className={`btn-icon bg-[var(--color-surface-muted)] dark:bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] ${className}`}
    >
      {themeMode === 'dark' ? (
        <Sun size={20} className="text-amber-300" />
      ) : (
        <Moon size={20} className="text-slate-600" />
      )}
    </button>
  );

  return (
    <nav
      ref={mobileNavRef}
      className={`fixed top-0 left-0 right-0 transition-all duration-200 ${scrolled ? 'py-2 sm:py-3' : 'py-4 sm:py-6'}`}
      style={{ zIndex: 'var(--z-sticky)' }}
    >
      <div className="page-container">
        <div
          className={`flex justify-between items-center gap-3 transition-all duration-200 ${
            scrolled ? 'glass px-3 sm:px-5 py-2.5 rounded-2xl shadow-lg' : ''
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group cursor-pointer min-w-0 rounded-lg">
            <div className="w-10 h-10 shrink-0 bg-[var(--color-accent)] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-200">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-lg sm:text-xl font-heading font-bold tracking-tight text-[var(--color-text)] truncate">
              Petros<span className="text-[var(--color-accent)]">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-150 cursor-pointer py-2"
              >
                {link.name}
              </a>
            ))}
            <ThemeButton />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeButton />
            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              className="btn-icon text-[var(--color-text)]"
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass p-4 rounded-2xl shadow-xl"
            style={{ zIndex: 'var(--z-dropdown)' }}
          >
            <div className="flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-bold text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-150 cursor-pointer py-3 min-h-11 flex items-center border-b border-[var(--color-border)] last:border-0"
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
