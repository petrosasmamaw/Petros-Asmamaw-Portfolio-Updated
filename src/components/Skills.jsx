import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants.jsx';
import placeholderIcon from '../assets/react.svg';

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-center text-slate-900 dark:text-white">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 border-l-4 border-indigo-500 pl-4">
                {group.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {group.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ x: 4 }}
                    className="p-4 sm:p-5 glass rounded-2xl flex items-center gap-4 sm:gap-5 border border-transparent dark:border-white/5"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 transition-colors">
                      {skill.iconComponent ? (
                        <span className="inline-flex items-center justify-center">{skill.iconComponent}</span>
                      ) : (
                        <img
                          src={`https://cdn.simpleicons.org/${skill.icon}/6366f1`}
                          alt=""
                          className="w-6 h-6"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = placeholderIcon;
                          }}
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-900 dark:text-white truncate">{skill.name}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-bold truncate">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
