import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../constants.jsx';

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-white">Resume & Certificates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, i) => {
            const src = cert.image;
            const ext = src && src.split('.').pop().split('?')[0] ? src.split('.').pop().split('?')[0] : 'png';
            const filename = `${cert.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${ext}`;

            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group glass rounded-[2.5rem] overflow-hidden border-white/5 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={src} alt={cert.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${cert.title}`}>
                      <ExternalLink className="text-white w-10 h-10" />
                    </a>
                  </div>
                </div>
                <div className="p-8 text-left flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 flex-grow">{cert.desc}</p>
                  <a href={src} download={filename} className="mt-auto py-4 bg-white/5 hover:bg-white/10 rounded-2xl flex items-center justify-center gap-2 font-bold text-white transition-all border border-white/5">
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