import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CARDS } from '../constants.jsx';

export default function Expertise() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-white">Full-Stack Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border-white/5 text-left flex flex-col items-start transition-all"
            >
              <div className="mb-6 p-4 bg-indigo-500/10 rounded-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-widest">{card.tech}</p>
              <p className="text-slate-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}