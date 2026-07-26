import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CARDS, AI_POWERED_APPLICATIONS } from '../constants.jsx';

export default function Expertise() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-slate-900 dark:text-white">
          Full-Stack Development
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {EXPERTISE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="p-6 sm:p-8 lg:p-10 glass rounded-[1.75rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 text-left flex flex-col items-start transition-all"
            >
              <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4 uppercase tracking-widest">{card.tech}</p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-slate-900 dark:text-white">
            AI Powered Applications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {AI_POWERED_APPLICATIONS.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 sm:p-8 lg:p-10 glass rounded-[1.75rem] sm:rounded-[2.5rem] border border-slate-200 dark:border-white/10 text-left flex flex-col items-start transition-all"
              >
                <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-3 sm:mb-4 uppercase tracking-widest">{card.tech}</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
