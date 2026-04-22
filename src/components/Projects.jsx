import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink } from 'lucide-react';
import { FULLSTACK_PROJECTS } from '../constants.jsx';
import ThreeDImageCarousel from './ThreeDImageCarousel.jsx';

const ProjectCard = ({ project }) => {
  const imgSrc = typeof project.image === 'string' ? project.image : project.image?.src;
  const imgAlt = typeof project.image === 'string' ? project.title : project.image?.alt || project.title;
  const gallery = project.imageGallery?.length ? project.imageGallery : [{ src: imgSrc, alt: imgAlt }];
  const previewHref =
    project.liveLinks?.[0]?.url ||
    project.viewDetailsLink ||
    project.repoLinks?.[0]?.url ||
    project.githubLink ||
    project.github ||
    '#';
  const slides = gallery.map((item, index) => ({
    id: index + 1,
    src: item.src,
    href: previewHref,
    alt: item.alt || `${project.title} preview ${index + 1}`,
  }));
  const liveLinks = project.liveLinks || [];
  const repoLinks = project.repoLinks || [];
  const tags = project.tags || project.tech || [];
  const suiteSummary =
    liveLinks.length > 0
      ? `This suite includes ${liveLinks.map((link) => link.label).join(', ')} experiences in one ecosystem.`
      : 'This project is delivered as a complete, production-style implementation with polished UI and practical workflows.';

  return (
    <div className="glass rounded-[2.5rem] overflow-hidden border-slate-300 dark:border-white/5 p-5 md:p-6">
      <div className="w-full overflow-hidden mb-4 md:mb-5">
        <ThreeDImageCarousel
          slides={slides}
          itemCount={3}
          autoplay
          delay={2.8}
          pauseOnHover
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">{project.description || project.desc}</p>
        <p className="text-slate-500 dark:text-slate-300 text-sm mb-6 leading-relaxed">{suiteSummary}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-indigo-500/10">
              {t}
            </span>
          ))}
        </div>

        {liveLinks.length > 0 || repoLinks.length > 0 ? (
          <div className="space-y-4">
            {liveLinks.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Live Apps</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {liveLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5"
                    >
                      <ExternalLink size={14} /> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {repoLinks.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Source Code</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {repoLinks.map((repo) => (
                    <a
                      key={repo.label}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 rounded-xl text-center text-xs font-bold border border-slate-300 dark:border-white flex items-center justify-center gap-1.5"
                    >
                      <Github size={14} /> {repo.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <a href={project.viewDetailsLink || '#'} target="_blank" rel="noopener noreferrer" className="py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
              <ExternalLink size={16} /> Details
            </a>
            <a href={project.githubLink || project.github || '#'} target="_blank" rel="noopener noreferrer" className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 rounded-xl text-center text-sm font-bold border border-slate-300 dark:border-white flex items-center justify-center gap-2">
              <Github size={16} /> GitHub
            </a>
          </div>
        )}
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
    imageGallery: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      })
    ),
    description: PropTypes.string,
    desc: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    viewDetailsLink: PropTypes.string,
    githubLink: PropTypes.string,
    github: PropTypes.string,
    liveLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    repoLinks: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-black mb-16 text-center text-slate-900 dark:text-white">Projects</h2>
        
        {/* Group 1 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3">
             <span className="w-12 h-1 bg-indigo-500 rounded-full"></span>
             Full-Stack Projects
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {FULLSTACK_PROJECTS.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}