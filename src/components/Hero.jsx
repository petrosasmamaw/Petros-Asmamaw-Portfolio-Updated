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
    <section id="home" className="relative min-h-[100svh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-4 sm:mb-6 leading-[1.1] text-slate-900 dark:text-white">
            Hi, I&apos;m <br />
            <span className="text-gradient">Petros Asmamaw</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
            Full-Stack Developer | AI-Powered Applications
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="#contact"
              className="cursor-pointer px-6 sm:px-8 py-3.5 sm:py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-colors flex items-center justify-center gap-2"
            >
              Contact <ArrowRight size={20} />
            </a>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="cursor-pointer p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-sky-500/20 blur-3xl -z-10 rounded-full" />
            <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-slate-200/60 dark:border-white/10 shadow-2xl relative group">
              <img
                src={myPhoto}
                alt="Petros Asmamaw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
