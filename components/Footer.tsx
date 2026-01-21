
import React from 'react';
import { Instagram, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/584125542250";

  return (
    <footer className="bg-rich-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-vibrant-red rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">Q</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Qué<span className="text-vibrant-red">Agencia</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Tu aliado estratégico en Portuguesa para la nueva era digital. Implementamos tecnología que escala y diseños que enamoran.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vibrant-red transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vibrant-red transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vibrant-red transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vibrant-red transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 italic">Explorar</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#servicios" className="hover:text-vibrant-red transition-colors">Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-vibrant-red transition-colors">Casos de Éxito</a></li>
              <li><a href="#nosotros" className="hover:text-vibrant-red transition-colors">Ventajas</a></li>
              <li><a href="#contacto" className="hover:text-vibrant-red transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 italic">Ubicación</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              C.C. Buenaventura, Piso 2<br />
              Araure, Estado Portuguesa<br />
              Venezuela
            </p>
            <div className="space-y-2">
              <p className="text-vibrant-red text-sm font-bold">info@queagencia.com</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                <MessageCircle size={16} className="mr-2 text-vibrant-red" />
                +58 412-5542250
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Qué Agencia. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
