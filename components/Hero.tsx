import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-vibrant-red rounded-[2.5rem] md:rounded-[4rem] min-h-[85vh] relative overflow-hidden flex flex-col lg:flex-row items-center">
          
          {/* Content */}
          <div className="lg:w-1/2 p-8 md:p-20 z-10 text-white">
            <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 animate-fade-in">
              Hacemos Crecer <br />
              <span className="opacity-90">Tu Propio</span> <br />
              Negocio.
            </h1>
            
            <button className="bg-rich-black text-white px-8 py-4 rounded-xl font-bold flex items-center group transition-all hover:scale-105 active:scale-95 mb-12">
              EMPEZAR AHORA
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <p className="text-white/80 max-w-sm text-sm md:text-base leading-relaxed font-light">
              Presentamos una variedad de servicios y estrategias atractivas para asegurar el éxito rotundo de tu marca en Portuguesa.
            </p>
          </div>

          {/* Image Area */}
          <div className="lg:w-1/2 relative h-[400px] lg:h-full w-full flex items-end justify-center lg:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Consultoría Digital" 
              className="h-[110%] w-auto object-cover object-top z-10 lg:mr-10 drop-shadow-2xl"
            />
            
            {/* Decorative circles from the style guide */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-20 left-10 lg:left-0 z-20 bg-white p-4 rounded-2xl shadow-2xl flex items-center space-x-3 animate-float hidden md:flex">
              <div className="w-10 h-10 bg-vibrant-red rounded-full flex items-center justify-center">
                <span className="text-white text-xs">💬</span>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Atención 24/7</p>
                <p className="text-sm font-black text-rich-black tracking-tight">Chat con Expertos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands Strip */}
      <div className="py-12 md:py-16 container mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span className="text-2xl font-black italic">GLOBALCHART</span>
          <span className="text-2xl font-black italic">EXDONE</span>
          <span className="text-2xl font-black italic">TEAMTALK</span>
          <span className="text-2xl font-black italic">SLABSPACE</span>
          <span className="text-2xl font-black italic">FANCYWEAR</span>
          <span className="text-2xl font-black italic">SELFAST</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;