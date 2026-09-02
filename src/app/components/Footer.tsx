'use client'

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const { rights } = content[language].footer;

  return (
    <footer className="border-line border-t text-gray-400 py-6 text-sm">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Jeferson Ferreira. {rights}
        </p>
      </div>
    </footer>
  );
}