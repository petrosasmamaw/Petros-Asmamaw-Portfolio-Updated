import React from 'react';
import { motion } from 'framer-motion';

export default function WorkExperience() {
  return (
    <div className="p-8 glass rounded-2xl shadow-xl">
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-xl bg-indigo-600/20 flex items-center justify-center text-indigo-300 font-black text-xl">UP</div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">React.js Developer — Figma → React</h3>
              <p className="text-sm text-slate-400 mt-1">Upwork · Dec 15, 2025 - Dec 16, 2025 · Fixed price</p>
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
            "Excellent work! The transformation from Figma to React was done very fast and very neatly. The components are clean, accurate, and well-structured. Communication was smooth and delivery was quicker than expected. I’ll definitely come back for future work. Highly recommended!"
          </motion.blockquote>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">Reliable</span>
            <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">Committed to Quality</span>
            <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">Clear Communicator</span>
            <span className="px-3 py-1 bg-slate-800/40 text-slate-300 rounded-full text-xs">Detail Oriented</span>
          </div>
        </div>
      </div>
    </div>
  );
}
