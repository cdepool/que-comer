
import React from 'react';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const whatsappUrl = "https://wa.me/584125542250?text=Hola!%20Vengo%20de%20la%20web%20y%20me%20gustaría%20iniciar%20mi%20transformación%20digital.";

  return (
    <section id="contacto" className="py-20 md:py-32 bg-rich-black text-white relative overflow-hidden">
      {/* Patrones de fondo refinados */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] border-[1px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] border-[1px] border-vibrant-red rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <header className="animate-fade-in">
            <h2 className="text-4xl md:text-7xl font-serif font-black mb-8 leading-tight tracking-tighter">
              ¿Listo para dar el <br />
              <span className="text-vibrant-red italic text-3xl md:text-7xl">salto digital</span> con nosotros?
            </h2>
            <p className="text-lg md:text-2xl text-gray-400 mb-10 md:mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              No dejes tu crecimiento al azar. Agendemos una consultoría directa para aplicar la tecnología que ya impulsa a los líderes.
            </p>
          </header>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-16 animate-fade-in delay-200">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-vibrant-red text-white px-8 md:px-10 py-5 md:py-6 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-red-700 transition-all group shadow-2xl shadow-red-500/20 active:scale-95"
            >
              <MessageCircle className="mr-3 w-6 h-6" />
              Agendar vía WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#proyectos" 
              className="w-full sm:w-auto px-8 md:px-10 py-5 md:py-6 rounded-2xl font-bold text-lg flex items-center justify-center border border-white/20 hover:bg-white/5 transition-all"
            >
              Ver más éxitos
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto text-left animate-fade-in delay-300">
            <div className="flex items-center space-x-4 md:space-x-5 p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-vibrant-red rounded-2xl flex items-center justify-center shrink-0">
                 <Calendar className="text-white w-6 h-6 md:w-7 md:h-7" />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Disponibilidad</p>
                 <p className="text-base md:text-lg font-bold">Lunes a Viernes</p>
                 <p className="text-[10px] md:text-xs text-gray-500">Sesiones de 30 min sin costo.</p>
               </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-5 p-5 md:p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                 <MessageCircle className="text-vibrant-red w-6 h-6 md:w-7 md:h-7" />
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Atención Directa</p>
                 <p className="text-base md:text-lg font-bold">Consultor Amigo</p>
                 <p className="text-[10px] md:text-xs text-gray-500">Respuesta rápida garantizada.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
