import React from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    {
      icon: <Instagram size={20} />,
      link: 'https://www.instagram.com/piter._rock',
      label: 'Instagram',
    },
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
  ];

  return (
    <footer className="py-10 sm:py-12 border-t border-slate-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide text-sm sm:text-base">
          &copy; {year} Petros Asmamaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
