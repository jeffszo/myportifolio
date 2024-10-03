'use client'

import { Code, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gray-900 border-b text-gray-100 border-gray-800 z-10 fixed top-0">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-teal-600 flex items-center">
          <Code strokeWidth={1} className="w-8 h-8 text-teal-400 ml-6 " />
          {/* <span className="hidden sm:inline">Jeferson Ferreira</span> */}
        </h1>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="hover:text-teal-400 transition-colors">Sobre</a>
          <a href="#habilidades" className="hover:text-teal-400 transition-colors">Habilidades</a>
          <a href="#projetos" className="hover:text-teal-400 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-teal-400 transition-colors">Contato</a>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-teal-400">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <a href="#sobre" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>Sobre</a>
          <a href="#habilidades" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>Habilidades</a>
          <a href="#projetos" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>Projetos</a>
          <a href="#contato" className="block py-2 hover:text-teal-400 transition-colors" onClick={toggleMenu}>Contato</a>
        </nav>
      )}
    </header>
  );
}