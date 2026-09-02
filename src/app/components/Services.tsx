'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Services() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="servicos" className="mb-16 sm:mb-24 lg:mb-32">
      <div className="text-xs uppercase tracking-widest text-teal-400 font-bold mb-2">{text.services}</div>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-8">{text.servicesSubtitle}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {text.servicesList.map((service, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 rounded-2xl border border-line bg-card hover:border-teal-500/50 transition-colors"
          >
            {service.icon}
            <h3 className="text-base sm:text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
