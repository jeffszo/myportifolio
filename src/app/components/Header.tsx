'use client'

import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const t = content[language].nav;

  return (
    <header className="w-full bg-gray-900 border-b text-gray-100 border-gray-800 z-10 fixed top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600 flex items-center">
          <Code strokeWidth={1} className="w-8 h-8 text-teal-400 ml-6" />
        </h1>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="hover:text-teal-400 transition-colors">{t.about}</a>
          <a href="#habilidades" className="hover:text-teal-400 transition-colors">{t.skills}</a>
          <a href="#projetos" className="hover:text-teal-400 transition-colors">{t.projects}</a>
          <a href="#contato" className="hover:text-teal-400 transition-colors">{t.contact}</a>

          <div className="flex items-center border border-gray-700 rounded-full overflow-hidden ml-4">
            <button
              onClick={() => setLanguage('pt')}
              aria-pressed={language === 'pt'}
              className={`px-3 py-1 text-sm transition-colors ${
                language === 'pt'
                  ? 'bg-teal-500 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              PT
            </button>

            <button
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-3 py-1 text-sm transition-colors ${
                language === 'en'
                  ? 'bg-teal-500 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-teal-400"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-gray-900 p-4 flex flex-col gap-2">
          <a href="#sobre" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.about}</a>
          <a href="#habilidades" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.skills}</a>
          <a href="#projetos" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.projects}</a>
          <a href="#contato" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.contact}</a>

          <div className="flex items-center border border-gray-700 rounded-full overflow-hidden w-fit mt-4">
            <button
              onClick={() => setLanguage('pt')}
              aria-pressed={language === 'pt'}
              className={`px-3 py-1 text-sm transition-colors ${
                language === 'pt'
                  ? 'bg-teal-500 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              PT
            </button>

            <button
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`px-3 py-1 text-sm transition-colors ${
                language === 'en'
                  ? 'bg-teal-500 text-white'
                  : 'bg-transparent text-gray-300'
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}