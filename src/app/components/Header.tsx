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
    <header className="w-full bg-ink/75 backdrop-blur-md border-b text-gray-100 border-line z-20 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#sobre" className="flex items-center" aria-label="Jeferson Ferreira">
          <Code strokeWidth={1.5} className="w-8 h-8 text-teal-400" />
        </a>

        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
          <a href="#sobre" className="hover:text-teal-400 transition-colors">{t.about}</a>
          <a href="#habilidades" className="hover:text-teal-400 transition-colors">{t.skills}</a>
          <a href="#projetos" className="hover:text-teal-400 transition-colors">{t.projects}</a>
          <a href="#contato" className="hover:text-teal-400 transition-colors">{t.contact}</a>

          <div className="flex items-center border border-line rounded-full overflow-hidden ml-4">
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
        <nav className="md:hidden bg-ink p-4 flex flex-col gap-2">
          <a href="#sobre" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.about}</a>
          <a href="#habilidades" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.skills}</a>
          <a href="#projetos" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.projects}</a>
          <a href="#contato" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>{t.contact}</a>

          <div className="flex items-center border border-line rounded-full overflow-hidden w-fit mt-4">
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