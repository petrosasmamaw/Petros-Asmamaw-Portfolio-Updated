import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants.jsx';
import placeholderIcon from '../assets/react.svg';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-center text-white">Technical Skills</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {SKILL_GROUPS.map((group, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-2xl font-bold text-indigo-400 mb-8 border-l-4 border-indigo-500 pl-4">{group.title}</h3>
              <div className="space-y-4">
                {group.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ x: 5 }}
                    className="p-5 glass rounded-2xl flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-white/5">
                        {skill.iconComponent ? (
                          <span className="inline-flex items-center justify-center">{skill.iconComponent}</span>
                        ) : (
                          <img
                            src={`https://cdn.simpleicons.org/${skill.icon}/6366f1`}
                            alt={skill.name}
                            className="w-6 h-6"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = placeholderIcon;
                            }}
                          />
                        )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{skill.name}</h4>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{skill.desc}</p>
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