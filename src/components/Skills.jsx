import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants.jsx';
import placeholderIcon from '../assets/react.svg';

const GROUP_ACCENTS = [
  { bar: 'from-indigo-500 to-sky-400', glow: 'rgba(99, 102, 241, 0.14)' },
  { bar: 'from-emerald-500 to-teal-400', glow: 'rgba(16, 185, 129, 0.12)' },
  { bar: 'from-violet-500 to-fuchsia-400', glow: 'rgba(139, 92, 246, 0.12)' },
  { bar: 'from-sky-500 to-cyan-400', glow: 'rgba(14, 165, 233, 0.12)' },
  { bar: 'from-amber-500 to-orange-400', glow: 'rgba(245, 158, 11, 0.12)' },
  { bar: 'from-rose-500 to-pink-400', glow: 'rgba(244, 63, 94, 0.1)' },
  { bar: 'from-lime-500 to-emerald-400', glow: 'rgba(132, 204, 22, 0.12)' },
  { bar: 'from-blue-500 to-indigo-400', glow: 'rgba(59, 130, 246, 0.12)' },
];

function SkillChip({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12px' }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.02, 0.18) }}
      className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full
        pl-1.5 pr-2.5 sm:pl-2 sm:pr-3.5 py-1.5 sm:py-2
        bg-[var(--color-surface)] dark:bg-[var(--color-surface-elevated)]
        border border-[var(--color-border)]
        hover:border-[var(--color-accent)]/35
        transition-colors duration-150 cursor-default max-w-full"
    >
      <span
        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0
        bg-[var(--color-accent-soft)] ring-1 ring-[var(--color-accent)]/10"
      >
        {skill.iconComponent ? (
          <span className="inline-flex [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4">
            {skill.iconComponent}
          </span>
        ) : (
          <img
            src={`https://cdn.simpleicons.org/${skill.icon}/6366f1`}
            alt=""
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = placeholderIcon;
            }}
          />
        )}
      </span>
      <span className="font-heading font-semibold text-[var(--color-text)] text-xs sm:text-sm tracking-tight truncate">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="page-section relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-35"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 20% 20%, rgba(99,102,241,0.07), transparent 60%), radial-gradient(ellipse 50% 35% at 80% 70%, rgba(14,165,233,0.06), transparent 55%)',
        }}
      />

      <div className="page-container">
        <div className="text-center mb-7 sm:mb-12 max-w-2xl mx-auto px-1">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-text)] mb-2 sm:mb-3">
            Stack & tools
          </p>
          <h2 className="section-title !mb-2 sm:!mb-4">
            Technical Skills
          </h2>
          <p className="prose-muted mx-auto text-xs sm:text-base leading-relaxed">
            A focused toolkit for building full-stack products — from polished interfaces to APIs, data, auth, and AI features.
          </p>
        </div>

        <div className="space-y-3.5 sm:space-y-6 md:space-y-8">
          {SKILL_GROUPS.map((group, i) => {
            const accent = GROUP_ACCENTS[i % GROUP_ACCENTS.length];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-2xl sm:rounded-3xl border border-[var(--color-border)] p-3.5 sm:p-5 md:p-6 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-3xl pointer-events-none"
                  style={{ background: accent.glow }}
                />

                <div className="relative flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="min-w-0 flex items-center gap-2 sm:block">
                    <div className={`hidden sm:block h-1 w-10 md:w-14 rounded-full bg-gradient-to-r ${accent.bar} mb-2.5`} />
                    <div className={`sm:hidden h-4 w-1 rounded-full bg-gradient-to-b ${accent.bar} shrink-0`} />
                    <h3 className="font-heading font-extrabold text-[var(--color-text)] tracking-tight text-sm sm:text-lg md:text-xl leading-tight truncate">
                      {group.title}
                    </h3>
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-[var(--color-text-subtle)] shrink-0">
                    {group.skills.length}
                  </span>
                </div>

                <div className="relative flex flex-wrap gap-1.5 sm:gap-2.5">
                  {group.skills.map((skill, j) => (
                    <SkillChip key={skill.name} skill={skill} index={j} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
