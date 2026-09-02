'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Services() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="servicos" className="mb-16 sm:mb-24 lg:mb-32">
      <h2 className="text-xl sm:text-2xl font-semibold mb-1">{text.services}</h2>
      <h3 className="font-normal text-teal-400 mb-8">{text.servicesSubtitle}</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {text.servicesList.map((service, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-teal-500/50 transition-colors"
          >
            {service.icon}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
