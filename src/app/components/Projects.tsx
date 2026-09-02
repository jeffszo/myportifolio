'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Projects() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="projetos" className="mb-16 sm:mb-24 lg:mb-32">
      <h2 className="text-xl sm:text-2xl font-semibold mb-1">{text.projects}</h2>
      <h3 className="font-normal text-teal-400 mb-8">{text.projectsSubtitle}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {text.projectsList.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-800 transition-colors hover:border-teal-500/50 bg-gray-900"
          >
            <div className="relative h-48 sm:h-56 bg-gray-800 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-sm sm:text-base mb-3 text-gray-300">{project.description}</p>

              <p className="text-xs sm:text-sm mb-4 text-teal-400">{project.result}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs sm:text-sm bg-teal-800 text-teal-100 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base"
              >
                {text.seeProject}
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
