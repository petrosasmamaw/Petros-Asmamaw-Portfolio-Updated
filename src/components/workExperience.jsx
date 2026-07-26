import React from 'react';
import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl shadow-lg border border-[var(--color-border)]">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--color-accent-text)] font-black text-lg">
            UP
          </div>

          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold text-[var(--color-text)] leading-snug">
                  React.js Developer — Figma → React
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] mt-1">
                  Upwork · Dec 15, 2025 - Dec 16, 2025 · Fixed price
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <p className="text-sm text-[var(--color-text-muted)]">$** earned</p>
                <div className="mt-2 inline-flex items-center gap-2 surface px-3 py-1 rounded-full">
                  <span className="text-amber-500 dark:text-amber-300 font-bold">5.0</span>
                  <span className="text-xs text-[var(--color-text-muted)]">Rating</span>
                </div>
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-4 sm:mt-5 text-[var(--color-text-muted)] italic border-l-2 border-[var(--color-accent)] pl-4 text-sm sm:text-base max-w-[65ch]"
            >
              &quot;Excellent work! The transformation from Figma to React was done very
              fast and very neatly. The components are clean, accurate, and
              well-structured. Communication was smooth and delivery was quicker
              than expected. Highly recommended!&quot;
            </motion.blockquote>

            <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
              {['Reliable', 'Committed to Quality', 'Clear Communicator', 'Detail Oriented'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 surface text-[var(--color-text-muted)] rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5">
              <a
                href="https://www.upwork.com/freelancers/~0133f4dd6dbac80057"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <img src="https://cdn.simpleicons.org/upwork/ffffff" alt="" className="w-5 h-5" />
                View on Upwork
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl border border-dashed border-[var(--color-border-strong)]"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl surface flex items-center justify-center text-[var(--color-text-subtle)] font-black text-xl">
            +
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[var(--color-text)]">
              More experience coming soon
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] mt-1 max-w-[65ch]">
              Additional professional experience will be added here as new
              projects are completed.
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {['Will be added', 'Future projects'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 surface text-[var(--color-text-subtle)] rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
