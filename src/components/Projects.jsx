import React from 'react';
import PropTypes from 'prop-types';
import { Github, ExternalLink, Layers } from 'lucide-react';
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
  const isLive = liveLinks.length > 0;
  const mobileTags = tags.slice(0, 3);
  const category = project.category || project.type || 'Full-Stack';

  return (
    <article className="glass rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--color-border)] p-2.5 sm:p-4 md:p-5 h-full flex flex-col min-w-0">
      {/* Card header */}
      <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3 min-h-8">
        <div className="inline-flex items-center gap-1.5 min-w-0 rounded-full px-2 sm:px-2.5 py-1 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)]">
          <Layers size={12} className="shrink-0 hidden xs:block sm:block" aria-hidden="true" />
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider truncate">
            {category}
          </span>
        </div>
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider shrink-0 border ${
            isLive
              ? 'bg-[var(--color-success-soft)] text-[var(--color-success)] border-emerald-200/60 dark:border-emerald-500/20'
              : 'bg-[var(--color-surface-muted)] text-[var(--color-text-subtle)] border-[var(--color-border)]'
          }`}
        >
          {isLive ? 'Live' : 'Code'}
        </span>
      </div>

      <div className="w-full overflow-hidden mb-2.5 sm:mb-4 rounded-xl sm:rounded-2xl bg-[var(--color-surface-muted)]">
        <ThreeDImageCarousel
          slides={slides}
          itemCount={3}
          autoplay
          delay={3}
          pauseOnHover
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-sm sm:text-lg md:text-xl font-bold text-[var(--color-text)] leading-snug line-clamp-2 min-h-[2.5em] sm:min-h-[2.6em] mb-2">
          {project.title}
        </h3>

        <p className="text-[var(--color-text-muted)] text-[11px] sm:text-sm mb-3 leading-relaxed line-clamp-3 min-h-[3.9em] sm:min-h-[4.2em]">
          {project.description || project.desc}
        </p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-5 min-h-[1.75rem]">
          <div className="contents sm:hidden">
            {mobileTags.map((t) => (
              <span
                key={t}
                className="px-1.5 py-0.5 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] rounded-md text-[8px] font-bold uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-1.5 py-0.5 text-[var(--color-text-subtle)] text-[8px] font-bold">
                +{tags.length - 3}
              </span>
            )}
          </div>
          <div className="hidden sm:contents">
            {tags.slice(0, 6).map((t) => (
              <span
                key={t}
                className="px-2 sm:px-2.5 py-1 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] rounded-lg text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
              >
                {t}
              </span>
            ))}
            {tags.length > 6 && (
              <span className="px-2 py-1 text-[var(--color-text-subtle)] text-[10px] font-bold">
                +{tags.length - 6}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto space-y-2">
          {liveLinks.slice(0, 3).map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-[10px] sm:text-xs py-2.5 min-h-10 sm:min-h-11"
            >
              <ExternalLink size={12} className="shrink-0" />
              <span className="truncate">{link.label}</span>
            </a>
          ))}

          {repoLinks.slice(0, 2).map((repo) => (
            <a
              key={repo.label}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon w-full surface text-[var(--color-text)] hover:bg-[var(--color-surface-muted)] text-[10px] sm:text-xs font-bold gap-1.5 min-h-10 sm:min-h-11"
            >
              <Github size={12} className="shrink-0" />
              <span className="truncate">{repo.label}</span>
            </a>
          ))}

          {!liveLinks.length && !repoLinks.length && (
            <a
              href={project.viewDetailsLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-xs"
            >
              <ExternalLink size={14} /> Details
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    type: PropTypes.string,
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
    <section id="projects" className="page-section">
      <div className="page-container">
        <h2 className="section-title">Projects</h2>

        <div className="mb-4 sm:mb-8">
          <h3 className="section-subtitle mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <span className="w-6 sm:w-10 h-1 bg-[var(--color-accent)] rounded-full shrink-0" aria-hidden="true" />
            Full-Stack Projects
          </h3>
          <div className="grid grid-cols-2 gap-2.5 sm:gap-5 lg:gap-6 items-stretch">
            {FULLSTACK_PROJECTS.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
