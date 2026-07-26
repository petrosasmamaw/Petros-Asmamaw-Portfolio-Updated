import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../constants.jsx';

export default function Certificates() {
  return (
    <section id="certificates" className="page-section">
      <div className="page-container text-center">
        <h2 className="section-title">Resume &amp; Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {CERTIFICATES.map((cert, i) => {
            const src = cert.image;
            const fileUrl = cert.fileUrl || src;
            const ext = fileUrl?.split('.').pop()?.split('?')[0] || 'png';
            const filename = `${cert.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${ext}`;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group glass rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--color-border)] flex flex-col h-full text-left"
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
                    className="absolute inset-0 bg-slate-900/0 hover:bg-slate-900/45 active:bg-slate-900/45 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                  >
                    <ExternalLink className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity drop-shadow-lg" />
                  </a>
                </div>
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-sm mb-5 flex-grow">{cert.desc}</p>
                  <a
                    href={fileUrl}
                    download={filename}
                    className="btn-icon w-full min-h-11 surface text-[var(--color-text)] hover:bg-[var(--color-surface-muted)] font-bold text-sm gap-2"
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
