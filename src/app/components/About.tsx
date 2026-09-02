'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function About() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="sobre-detalhado" className="mb-16 sm:mb-24 lg:mb-32">
      <div className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-2">{text.about}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">{text.who}</h2>

      <div className="max-w-2xl space-y-4">
        {text.aboutText.map((paragraph, index) => (
          <p key={index} className="text-sm sm:text-base text-gray-400">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
