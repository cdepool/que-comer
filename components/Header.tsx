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
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-rich-black/95 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo de Marca Oficial */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative h-12 md:h-16 transition-transform group-hover:scale-105 duration-300">
             {/* Contenedor blanco para el logo para asegurar visibilidad en fondos oscuros */}
            <div className={`bg-white p-2 rounded-2xl shadow-lg transition-all duration-500 ${isScrolled ? 'scale-90 shadow-red-500/10' : 'scale-100'}`}>
              <img 
                src="https://raw.githubusercontent.com/CliverDP/que-comer-assets/main/logo-que-comer.png" 
                alt="Qué Comer Logo" 
                className="h-full w-auto object-contain"
                onError={(e) => {
                  // Fallback visual si la imagen no carga
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-vibrant-red font-black">QUÉ</span>';
                }}
              />
            </div>
            <div className={`absolute -right-16 top-1/2 -translate-y-1/2 transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
               <span className="text-white font-black text-sm tracking-tighter uppercase ml-2 bg-vibrant-red px-3 py-1 rounded-full">AGENCIA</span>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Servicios', 'Proyectos', 'Nosotros'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-vibrant-red transition-all duration-300 relative group/link"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-red transition-all group-hover/link:w-full"></span>
            </a>
          ))}
          <a 
            href="#contacto" 
            className="text-xs font-black uppercase tracking-widest bg-vibrant-red text-white px-8 py-3 rounded-xl hover:bg-white hover:text-rich-black transition-all shadow-lg shadow-red-500/20 active:scale-95"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-3 rounded-2xl transition-all ${isMobileMenuOpen ? 'text-white bg-vibrant-red' : 'text-white bg-white/10'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-rich-black z-[-1] transition-all duration-700 flex flex-col justify-center items-center space-y-8 px-10 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <img 
            src="https://raw.githubusercontent.com/CliverDP/que-comer-assets/main/logo-que-comer.png" 
            alt="Logo" 
            className="h-24 w-auto mb-10 bg-white p-4 rounded-3xl" 
          />
          {['Servicios', 'Proyectos', 'Nosotros'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white hover:text-vibrant-red transition-all transform hover:scale-110"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-vibrant-red text-white py-6 rounded-3xl text-center font-black text-xl tracking-tighter shadow-2xl shadow-red-500/40"
          >
            INICIAR PROYECTO
          </a>
      </div>
    </nav>
  );
};

export default Header;