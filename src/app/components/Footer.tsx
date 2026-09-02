'use client'

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const { rights } = content[language].footer;

  return (
    <footer className="bg-gray-900 border-gray-800 border-t text-gray-100 py-6 transition-colors">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Jeferson Ferreira. {rights}
        </p>
      </div>
    </footer>
  );
}