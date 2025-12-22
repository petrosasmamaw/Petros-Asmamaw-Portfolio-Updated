import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';
import { FULLSTACK_PROJECTS, REACT_PROJECTS } from '../constants.jsx';

const ProjectCard = ({ project }) => {
  const imgSrc = typeof project.image === 'string' ? project.image : project.image?.src;
  const imgAlt = typeof project.image === 'string' ? project.title : project.image?.alt || project.title;
  const tags = project.tags || project.tech || [];

  return (
    <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 flex flex-col h-full group">
      <div className="aspect-video relative overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow">{project.description || project.desc}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-indigo-500/10">
              {t}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href={project.viewDetailsLink || '#'} target="_blank" rel="noopener noreferrer" className="py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
            <ExternalLink size={16} /> Details
          </a>
          <a href={project.githubLink || project.github || '#'} target="_blank" rel="noopener noreferrer" className="py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-center text-sm font-bold border border-white/5 flex items-center justify-center gap-2">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string }),
    ]),
    description: PropTypes.string,
    desc: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    viewDetailsLink: PropTypes.string,
    githubLink: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-center text-white">Projects</h2>
        
        {/* Group 1 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
             <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
             Full-Stack Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FULLSTACK_PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>

        {/* Group 2 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
             <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
             React Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REACT_PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}