import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../constants.jsx';

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-slate-900 dark:text-white">
          Resume &amp; Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CERTIFICATES.map((cert, i) => {
            const src = cert.image;
            const fileUrl = cert.fileUrl || src;
            const ext = fileUrl?.split('.').pop()?.split('?')[0] || 'png';
            const filename = `${cert.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${ext}`;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group glass rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <a
                    href={fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${cert.title}`}
                    className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/45 active:bg-slate-900/45 transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <ExternalLink className="text-white w-9 h-9 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity drop-shadow-lg" />
                  </a>
                </div>
                <div className="p-5 sm:p-8 text-left flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 sm:mb-8 flex-grow">{cert.desc}</p>
                  <a
                    href={fileUrl}
                    download={filename}
                    className="cursor-pointer mt-auto py-3.5 sm:py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-2xl flex items-center justify-center gap-2 font-bold text-slate-900 dark:text-white transition-colors border border-slate-200 dark:border-slate-700"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
