'use client';

import { Map } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function About() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="sobre-detalhado" className="mb-16 sm:mb-24 lg:mb-32">
      <h2 className="text-xl mt-32 sm:text-2xl font-semibold mb-1">{text.about}</h2>
      <h3 className="font-normal text-teal-400 mb-8">{text.who}</h3>

      <div className="p-4 sm:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center rounded-lg border border-gray-800">
        <div className="w-full lg:w-3/12 mb-6 lg:mb-0">
          <p className="text-sm sm:text-base">{text.aboutText}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {text.timeline.map((event, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-40 lg:w-48">
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <Map strokeWidth={1} className="w-8 h-8 text-teal-400" aria-hidden="true" />
              </div>

              <div className="mt-4 text-center">
                <span className="font-bold">{event.date}</span>
                <h3 className="font-semibold mt-2">{event.title}</h3>
                <p className="text-xs sm:text-sm mt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
