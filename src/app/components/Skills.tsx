'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Skills() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="habilidades" className="mb-16 sm:mb-24 lg:mb-32">
      <div className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-2">{text.skills}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">{text.skillsSubtitle}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {text.skillCategories.map((category, index) => (
          <div key={index} className="p-5 sm:p-6 rounded-2xl border border-line bg-card">
            {category.icon}
            <h3 className="text-base sm:text-lg font-bold mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-full bg-ink-soft border border-line text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
