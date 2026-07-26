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
    <div className="glass rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 p-4 sm:p-5 md:p-6">
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
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 sm:mb-4 leading-relaxed">{project.description || project.desc}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-5 sm:mb-6 leading-relaxed">{suiteSummary}</p>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          {tags.map((t, i) => (
            <span
              key={i}
              className="px-2.5 sm:px-3 py-1 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-indigo-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        {liveLinks.length > 0 || repoLinks.length > 0 ? (
          <div className="space-y-4">
            {liveLinks.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Live Apps</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {liveLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer py-2.5 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-center text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ExternalLink size={14} className="shrink-0" />
                      <span className="truncate">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {repoLinks.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Source Code</p>
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  {repoLinks.map((repo) => (
                    <a
                      key={repo.label}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white rounded-xl text-center text-xs font-bold border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Github size={14} className="shrink-0" />
                      <span className="truncate">{repo.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <a
              href={project.viewDetailsLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink size={16} /> Details
            </a>
            <a
              href={project.githubLink || project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white rounded-xl text-center text-sm font-bold border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2 transition-colors"
            >
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
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-10 sm:mb-16 text-center text-slate-900 dark:text-white">
          Projects
        </h2>

        <div className="mb-12 sm:mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-10 flex items-center gap-3">
            <span className="w-8 sm:w-12 h-1 bg-indigo-500 rounded-full shrink-0" />
            Full-Stack Projects
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {FULLSTACK_PROJECTS.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
