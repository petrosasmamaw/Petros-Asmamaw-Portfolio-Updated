import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CARDS, AI_POWERED_APPLICATIONS } from '../constants.jsx';

export default function Expertise() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-slate-900 dark:text-white">Full-Stack Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERTISE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] border-slate-200 dark:border-white/5 text-left flex flex-col items-start transition-all"
            >
              <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-widest">{card.tech}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-slate-900 dark:text-white">
            AI Powered Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AI_POWERED_APPLICATIONS.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 glass rounded-[2.5rem] border-slate-200 dark:border-white/5 text-left flex flex-col items-start transition-all"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-800">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm font-bold text-indigo-400 mb-4 uppercase tracking-widest">{card.tech}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}