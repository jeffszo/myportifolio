'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Contact() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="contato" className="text-center">
      <h2 className="text-xl sm:text-2xl font-semibold">{text.contact}</h2>

      <div className="p-2 sm:p-8 rounded-lg flex flex-col items-center transition-colors">
        <p className="text-sm sm:text-base mb-4">{text.contactText}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:jefersonferreira27@outlook.com"
            className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base"
          >
            <Mail strokeWidth={1} className="mr-2 h-5 w-5" aria-hidden="true" />
            jefersonferreira27@outlook.com
          </a>

          <a
            href="https://github.com/jeffszo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base"
          >
            <Github strokeWidth={1} className="mr-2 h-5 w-5" aria-hidden="true" />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jefersonf7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-400 hover:text-teal-600 text-sm sm:text-base"
          >
            <Linkedin strokeWidth={1} className="mr-2 h-5 w-5" aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
