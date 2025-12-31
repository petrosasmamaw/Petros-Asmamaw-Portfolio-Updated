import React from "react";
import { motion } from "framer-motion";

export default function WorkExperience() {
  return (
    <div className="space-y-6">
      <div className="p-8 glass rounded-2xl shadow-xl">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-300 font-black text-xl">
            UP
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">
                  React.js Developer — Figma → React
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  Upwork · Dec 15, 2025 - Dec 16, 2025 · Fixed price
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-slate-400">$** earned</p>
                <div className="mt-2 inline-flex items-center gap-2 bg-slate-900/40 px-3 py-1 rounded-full">
                  <span className="text-yellow-400 font-bold">5.0</span>
                  <span className="text-xs text-slate-400">Rating</span>
                </div>
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-slate-300 italic border-l-2 border-indigo-500 pl-4"
            >
              "Excellent work! The transformation from Figma to React was done very
              fast and very neatly. The components are clean, accurate, and
              well-structured. Communication was smooth and delivery was quicker
              than expected. Highly recommended!"
            </motion.blockquote>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">
                Reliable
              </span>
              <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">
                Committed to Quality
              </span>
              <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">
                Clear Communicator
              </span>
              <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">
                Detail Oriented
              </span>
            </div>
            <div className="mt-6">
              <a
                href="https://www.upwork.com/freelancers/~0133f4dd6dbac80057"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-2xl font-semibold transition-all"
              >
                <img src="https://cdn.simpleicons.org/upwork/06c167" alt="Upwork" className="w-5 h-5" />
                View on Upwork
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === Will Be Added Card === */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="p-8 glass rounded-2xl shadow-xl border border-dashed border-slate-700"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-xl bg-slate-700/30 flex items-center justify-center text-slate-400 font-black text-xl">
            +
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-200">
              Work Experience
            </h3>
            <p className="text-sm text-slate-400 mt-1 max-w-lg">
              Additional professional experience will be added here as new
              projects are completed.
            </p>

            <div className="mt-4 flex gap-3">
              <span className="px-3 py-1 bg-slate-800/40 text-slate-400 rounded-full text-xs">
                Will be added
              </span>
              <span className="px-3 py-1 bg-slate-800/40 text-slate-400 rounded-full text-xs">
                Future projects
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
