import React from 'react';
import WorkExperience from './workExperience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-8 sm:mb-12 text-center text-slate-900 dark:text-white">
          Upwork Experience
        </h2>
        <WorkExperience />
      </div>
    </section>
  );
}
