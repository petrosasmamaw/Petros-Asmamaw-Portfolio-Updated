import React from 'react';
import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="p-5 sm:p-8 glass rounded-2xl shadow-xl">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-indigo-600/15 dark:bg-indigo-600/25 flex items-center justify-center text-indigo-600 dark:text-indigo-300 font-black text-xl">
            UP
          </div>

          <div className="flex-1 min-w-0 w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  React.js Developer — Figma → React
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Upwork · Dec 15, 2025 - Dec 16, 2025 · Fixed price
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <p className="text-sm text-slate-600 dark:text-slate-400">$** earned</p>
                <div className="mt-2 inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800/80 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                  <span className="text-amber-500 dark:text-yellow-400 font-bold">5.0</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Rating</span>
                </div>
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-5 sm:mt-6 text-slate-700 dark:text-slate-300 italic border-l-2 border-indigo-500 pl-4 text-sm sm:text-base"
            >
              &quot;Excellent work! The transformation from Figma to React was done very
              fast and very neatly. The components are clean, accurate, and
              well-structured. Communication was smooth and delivery was quicker
              than expected. Highly recommended!&quot;
            </motion.blockquote>

            <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              {['Reliable', 'Committed to Quality', 'Clear Communicator', 'Detail Oriented'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 rounded-full text-xs border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 sm:mt-6">
              <a
                href="https://www.upwork.com/freelancers/~0133f4dd6dbac80057"
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-2xl font-semibold transition-colors"
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
        className="p-5 sm:p-8 glass rounded-2xl shadow-xl border border-dashed border-slate-300 dark:border-slate-600"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 font-black text-xl border border-slate-200 dark:border-slate-700">
            +
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              More experience coming soon
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
              Additional professional experience will be added here as new
              projects are completed.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              {['Will be added', 'Future projects'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 rounded-full text-xs border border-slate-200 dark:border-slate-700"
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
