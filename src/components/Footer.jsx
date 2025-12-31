import React from 'react';
import { Instagram, Linkedin, Send } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {[
            { icon: <Instagram />, link: "https://instagram.comhttps://www.instagram.com/piter._rock?igsh=MXJhbjJ5bnZwMWhoYg==", label: 'Instagram' },
            { icon: <Linkedin />, link: "https://www.linkedin.com/in/petros-asmamaw-172ab4375?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bx7FClNBmQDm0fhSaWV5Zzg%3D%3D", label: 'LinkedIn' },
            { icon: <img src="https://cdn.simpleicons.org/upwork/06c167" alt="Upwork" className="w-5 h-5" />, link: "https://www.upwork.com/freelancers/~0133f4dd6dbac80057", label: 'Upwork' },
            { icon: <Send />, link: "https://t.me/Nehemiah00", label: 'Telegram' }
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
              className="p-3 glass rounded-2xl text-slate-400 hover:text-white transition-all hover:translate-y-[-2px]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className="text-slate-500 font-medium tracking-wide">
          &copy; {year} Petros Asmamaw. All rights reserved.
        </p>
      </div>
    </footer>
  );
}