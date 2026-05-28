'use client'

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language } = useLanguage();

  const translations = {
    pt: 'Todos os direitos reservados.',
    en: 'All rights reserved.',
  };

  return (
    <footer className="bg-gray-900 border-gray-800 border-t text-gray-100 py-6 transition-colors">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; 2026 Jeferson Ferreira. {translations[language]}
        </p>
      </div>
    </footer>
  );
}