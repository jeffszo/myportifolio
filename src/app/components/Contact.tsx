'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Contact() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="contato">
      <div className="relative overflow-hidden text-center rounded-3xl border border-line bg-card px-6 sm:px-10 py-14 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 50% 0%, rgba(45,212,191,0.12), transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">{text.contact}</h2>
          <p className="text-sm sm:text-base text-gray-400 mb-8 max-w-lg mx-auto">{text.contactText}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <a
              href="mailto:jefersonferreira27@outlook.com"
              className="inline-flex items-center gap-2 border border-line bg-ink-soft px-5 py-3 rounded-xl text-sm font-semibold hover:border-teal-500/50 transition-colors"
            >
              <Mail strokeWidth={1.5} className="h-4 w-4 text-teal-400" aria-hidden="true" />
              jefersonferreira27@outlook.com
            </a>

            <a
              href="https://github.com/jeffszo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line bg-ink-soft px-5 py-3 rounded-xl text-sm font-semibold hover:border-teal-500/50 transition-colors"
            >
              <Github strokeWidth={1.5} className="h-4 w-4 text-teal-400" aria-hidden="true" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jefersonf7/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-line bg-ink-soft px-5 py-3 rounded-xl text-sm font-semibold hover:border-teal-500/50 transition-colors"
            >
              <Linkedin strokeWidth={1.5} className="h-4 w-4 text-teal-400" aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
