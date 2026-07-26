import React from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CARDS, AI_POWERED_APPLICATIONS } from '../constants.jsx';

function CardGrid({ cards }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2 }}
          className="p-5 sm:p-6 glass rounded-2xl sm:rounded-3xl border border-[var(--color-border)] text-left flex flex-col items-start h-full"
        >
          <div className="mb-4 p-3 rounded-xl surface shrink-0">
            {card.icon}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] mb-2 leading-snug">{card.title}</h3>
          <p className="text-xs font-bold text-[var(--color-accent-text)] mb-3 uppercase tracking-wider">{card.tech}</p>
          <p className="text-[var(--color-text-muted)] leading-relaxed text-sm">{card.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default function Expertise() {
  return (
    <section className="page-section">
      <div className="page-container text-center">
        <h2 className="section-title">Full-Stack Development</h2>
        <CardGrid cards={EXPERTISE_CARDS} />

        <div className="mt-12 sm:mt-16">
          <h2 className="section-title">AI Powered Applications</h2>
          <CardGrid cards={AI_POWERED_APPLICATIONS} />
        </div>
      </div>
    </section>
  );
}
