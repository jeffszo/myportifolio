'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Projects() {
  const { language } = useLanguage();
  const text = content[language].home;

  const featured = text.projectsList.find((project) => project.featured);
  const rest = text.projectsList.filter((project) => !project.featured);

  return (
    <section id="projetos" className="mb-16 sm:mb-24 lg:mb-32">
      <div className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-2">{text.projects}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">{text.projectsSubtitle}</h2>

      {featured && (
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-line bg-card overflow-hidden mb-6">
          <div className="relative h-56 md:h-full min-h-[280px] bg-ink-soft">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-9 flex flex-col gap-5">
            <span className="inline-block w-fit text-[11px] font-bold text-ink bg-gradient-to-r from-teal-400 to-indigo-400 px-2.5 py-1 rounded-full">
              {text.featuredTag}
            </span>

            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold">{featured.title}</h3>
              <p className="text-sm text-gray-400">{featured.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {featured.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-full bg-indigo-400/10 text-indigo-300 border border-indigo-400/25"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center w-fit text-sm font-bold text-teal-400 hover:text-teal-300"
            >
              {text.seeProject}
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {rest.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-line bg-card transition-colors hover:border-teal-500/50"
          >
            <div className="relative h-40 sm:h-44 bg-ink-soft">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="text-base font-bold mb-1.5">{project.title}</h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-0.5 text-[11px] bg-indigo-400/10 text-indigo-300 border border-indigo-400/25 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 text-sm font-semibold"
              >
                {text.seeProject}
                <ExternalLink className="ml-2 h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
