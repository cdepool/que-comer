
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-vibrant-red rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">Q</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-rich-black">
            Qué<span className="text-vibrant-red">Agencia</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#servicios" className="text-sm font-medium hover:text-vibrant-red transition-colors">Servicios</a>
          <a href="#proyectos" className="text-sm font-medium hover:text-vibrant-red transition-colors">Casos de Éxito</a>
          <a href="#nosotros" className="text-sm font-medium hover:text-vibrant-red transition-colors">Nosotros</a>
          <a 
            href="#contacto" 
            className="bg-vibrant-red text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Servicios</a>
          <a href="#proyectos" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Casos de Éxito</a>
          <a href="#nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Nosotros</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="bg-vibrant-red text-white py-3 rounded-lg text-center font-bold">Hablemos ahora</a>
        </div>
      )}
    </nav>
  );
};

export default Header;
