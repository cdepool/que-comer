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
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-rich-black/95 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 bg-vibrant-red rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
            <span className="text-white font-serif font-black text-lg italic">Q</span>
          </div>
          <span className={`text-xl font-black tracking-tighter transition-colors ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-rich-black lg:text-white'}`}>
            Qué<span className="text-vibrant-red">Agencia</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {['Servicios', 'Proyectos', 'Nosotros'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              className={`text-xs font-bold uppercase tracking-widest hover:text-vibrant-red transition-colors ${isScrolled ? 'text-white' : 'text-rich-black lg:text-white'}`}
            >
              {link}
            </a>
          ))}
          <a 
            href="#contacto" 
            className="text-xs font-black uppercase tracking-widest text-vibrant-red border border-vibrant-red/30 px-6 py-2 rounded-full hover:bg-vibrant-red hover:text-white transition-all"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled || isMobileMenuOpen ? 'text-white bg-white/10' : 'text-rich-black bg-rich-black/5'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-rich-black z-[-1] transition-all duration-500 flex flex-col justify-center items-center space-y-8 px-10 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {['Servicios', 'Proyectos', 'Nosotros'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-white hover:text-vibrant-red transition-colors"
            >
              {link}
            </a>
          ))}
          <a 
            href="#contacto" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-vibrant-red text-white py-5 rounded-2xl text-center font-black text-xl tracking-tighter"
          >
            INICIAR PROYECTO
          </a>
      </div>
    </nav>
  );
};

export default Header;