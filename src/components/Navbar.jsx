import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { toggleTheme } from '../store/themeSlice';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'} bg-transparent`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center transition-all ${scrolled ? 'glass px-6 py-3 rounded-2xl shadow-xl' : ''}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Code2 className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-heading font-bold tracking-tight ${themeMode === 'dark' ? 'text-white' : 'text-slate-900'}`}>Petros<span className="text-indigo-500">.</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${themeMode === 'dark' ? 'text-white hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              >
                {link.name}
              </a>
            ))}
            {/* Theme Toggle - Desktop */}
            <button
              onClick={handleThemeToggle}
              className="ml-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {themeMode === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>
          </div>

          {/* Mobile Toggle & Theme */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {themeMode === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>
            <button className={themeMode === 'dark' ? 'text-white' : 'text-slate-900'} onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass p-8 rounded-3xl z-50"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xl font-bold transition-colors ${themeMode === 'dark' ? 'text-white hover:text-white' : 'text-slate-700 hover:text-slate-900'}`}
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