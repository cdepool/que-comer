import React from 'react';
import { Instagram, Twitter, Linkedin, Github, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/584125542250";

  return (
    <footer className="bg-rich-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-red/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-2xl shadow-xl transition-transform hover:rotate-3 duration-500">
                <img 
                  src="https://raw.githubusercontent.com/CliverDP/que-comer-assets/main/logo-que-comer.png" 
                  alt="Qué Comer Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="ml-4">
                 <p className="text-xl font-black tracking-tighter leading-none">QUÉ <span className="text-vibrant-red">AGENCIA</span></p>
                 <p className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em] mt-1">Estrategia Digital</p>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-sm mb-10 leading-relaxed font-light">
              Tu aliado estratégico en Portuguesa para la nueva era digital. Implementamos la tecnología que escala y los diseños que dominan el mercado local.
            </p>
            
            <div className="flex space-x-5">
              {[
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Github size={20} />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl hover:bg-vibrant-red hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white/40">Navegación</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              <li><a href="#servicios" className="hover:text-vibrant-red transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-vibrant-red mr-0 group-hover:mr-2 transition-all"></span>Servicios</a></li>
              <li><a href="#proyectos" className="hover:text-vibrant-red transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-vibrant-red mr-0 group-hover:mr-2 transition-all"></span>Casos de Éxito</a></li>
              <li><a href="#nosotros" className="hover:text-vibrant-red transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-vibrant-red mr-0 group-hover:mr-2 transition-all"></span>Ventajas</a></li>
              <li><a href="#contacto" className="hover:text-vibrant-red transition-colors flex items-center group"><span className="w-0 group-hover:w-4 h-0.5 bg-vibrant-red mr-0 group-hover:mr-2 transition-all"></span>Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.3em] mb-8 text-white/40">Contacto Regional</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-vibrant-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Escríbenos</p>
                  <a href={whatsappUrl} className="text-lg font-bold hover:text-vibrant-red transition-colors">+58 412 5542250</a>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-vibrant-red/30 pl-4 font-light italic">
                C.C. Buenaventura, Piso 2<br />
                Araure, Portuguesa, VE.
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.3em]">
          <p>© {new Date().getFullYear()} Qué Agencia. Powered by Qué Comer Tech.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Políticas de IA</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;