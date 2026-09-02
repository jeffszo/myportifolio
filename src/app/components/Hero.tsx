'use client';

import { Mail } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Hero() {
  const { language } = useLanguage();
  const text = content[language].home;

  return (
    <section id="sobre" className="mb-16 mt-36 sm:mb-24 lg:mb-32">
      <div className="flex flex-col items-center">
        <Fade cascade damping={0.1} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center">
          Jeferson Ferreira
        </Fade>

        <Fade cascade damping={0.1} className="text-lg sm:text-xl text-teal-400 text-center mb-6">
          {text.role}
        </Fade>

        <div className="mb-6 text-center w-full sm:w-3/4 lg:w-1/2">
          <p className="text-sm sm:text-base">{text.hero}</p>
        </div>

        <Fade>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded hover:opacity-80 transition-opacity duration-300"
          >
            <Mail strokeWidth={2} className="h-4 w-4" />
            {text.talk}
          </a>
        </Fade>
      </div>
    </section>
  );
}
