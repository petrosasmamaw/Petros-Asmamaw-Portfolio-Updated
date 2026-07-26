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
    <footer className="py-8 sm:py-10 border-t border-[var(--color-border)]">
      <div className="page-container text-center">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.link}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="btn-icon surface text-[var(--color-text-muted)] hover:bg-[var(--color-text)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--color-bg)]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-[var(--color-text-subtle)] font-medium tracking-wide text-sm">
          &copy; {year} Petros Asmamaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
