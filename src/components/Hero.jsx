import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import myPhoto from '../assets/images-all/my-photo1.png';

const socials = [
  {
    icon: <Linkedin size={20} />,
    link: 'https://www.linkedin.com/in/petros-asmamaw-172ab4375',
    label: 'LinkedIn',
  },
  {
    icon: <img src="https://cdn.simpleicons.org/upwork/06c167" alt="" className="w-5 h-5" />,
    link: 'https://www.upwork.com/freelancers/~0133f4dd6dbac80057',
    label: 'Upwork',
  },
  {
    icon: <Send size={20} />,
    link: 'https://t.me/Nehemiah00',
    label: 'Telegram',
  },
  {
    icon: <Instagram size={20} />,
    link: 'https://www.instagram.com/piter._rock',
    label: 'Instagram',
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center nav-offset pb-8 sm:pb-12 overflow-hidden">
      <div className="page-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1
            className="font-heading font-black mb-4 text-[var(--color-text)]"
            style={{ fontSize: 'clamp(2rem, 1.4rem + 3.5vw, 4.5rem)', lineHeight: 1.15 }}
          >
            Hi, I&apos;m <br />
            <span className="text-gradient">Petros Asmamaw</span>
          </h1>
          <p
            className="prose-muted mx-auto lg:mx-0 mb-8 font-medium"
            style={{ fontSize: 'clamp(1rem, 0.95rem + 0.4vw, 1.35rem)' }}
          >
            Full-Stack Developer | AI-Powered Applications
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a href="#contact" className="btn-primary">
              Contact <ArrowRight size={18} />
            </a>

            <div className="flex items-center justify-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="btn-icon surface text-[var(--color-text-muted)] hover:bg-[var(--color-text)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--color-bg)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 to-sky-500/15 blur-3xl -z-10 rounded-full" aria-hidden="true" />
            <div
              className="rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-xl relative group"
              style={{
                width: 'clamp(9.5rem, 28vw, 22rem)',
                height: 'clamp(9.5rem, 28vw, 22rem)',
              }}
            >
              <img
                src={myPhoto}
                alt="Petros Asmamaw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
