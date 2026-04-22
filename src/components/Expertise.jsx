import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, Workflow } from 'lucide-react';
import { EXPERTISE_CARDS } from '../constants.jsx';

const AI_POWERED_APPLICATIONS = [
  {
    title: 'AI Content Assistant',
    tech: 'LLM Integration',
    description:
      'Built smart writing workflows with prompt engineering, response refinement, and reusable templates for faster content production.',
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: 'Conversational Chat App',
    tech: 'Chatbot UX',
    description:
      'Designed context-aware chat interfaces with session memory, clear fallback flows, and user-friendly prompt handling.',
    icon: <Bot className="w-6 h-6 text-blue-400" />,
  },
  {
    title: 'AI Search & Insights',
    tech: 'Semantic Search',
    description:
      'Implemented intelligent retrieval patterns to surface relevant information quickly using embeddings and ranking strategies.',
    icon: <Brain className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: 'Automation Pipelines',
    tech: 'Agent Workflows',
    description:
      'Created AI-powered automation chains to connect tools, summarize outputs, and streamline repetitive product operations.',
    icon: <Workflow className="w-6 h-6 text-fuchsia-400" />,
  },
];

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
              <div className="mb-6 p-4 bg-indigo-500/10 rounded-2xl">
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
                <div className="mb-6 p-4 bg-indigo-500/10 rounded-2xl">
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