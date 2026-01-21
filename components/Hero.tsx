import React from 'react';
import { ArrowUpRight, Zap, MapPin, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-0 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-vibrant-red rounded-[2.5rem] md:rounded-[5rem] min-h-[80vh] relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20">
          
          {/* Elementos decorativos abstractos (Toque Tecnológico) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-rich-black/10 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-rich-black/10 backdrop-blur-xl px-6 py-2.5 rounded-full mb-10 border border-white/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Estrategia Digital de Vanguardia</span>
            </div>
            
            <h1 className="text-6xl md:text-[10rem] font-black leading-[0.85] tracking-tighter mb-12 text-white animate-fade-in drop-shadow-sm">
              CREAMOS <br />
              <span className="opacity-80 italic">EL ÉXITO</span> <br />
              DIGITAL.
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="w-full sm:w-auto bg-rich-black text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center justify-center group transition-all hover:scale-105 active:scale-95 shadow-2xl">
                INICIAR AHORA
                <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/20 transition-all">
                SERVICIOS
              </button>
            </div>
            
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-light">
              Transformamos negocios en Portuguesa con la misma arquitectura tecnológica que impulsa a <span className="font-black text-white">Qué Comer</span>. Resultados, no promesas.
            </p>
          </div>

          {/* Badges Flotantes (Minimalistas) */}
          <div className="absolute bottom-12 left-12 hidden lg:flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 animate-float">
            <div className="w-10 h-10 bg-rich-black rounded-xl flex items-center justify-center">
              <Zap className="text-vibrant-red w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Tecnología</p>
              <p className="text-sm font-black text-white">IA Integrada</p>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 hidden lg:flex items-center space-x-4 bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 animate-float-delayed">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <MapPin className="text-vibrant-red w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-white/50 uppercase tracking-widest">Ubicación</p>
              <p className="text-sm font-black text-white">Acarigua - Araure</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-20 container mx-auto px-6 overflow-hidden">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-10 grayscale">
          <span className="text-4xl font-black italic tracking-tighter">QUÉ COMER</span>
          <span className="text-4xl font-black italic tracking-tighter">QUÉ COMPRAR</span>
          <span className="text-4xl font-black italic tracking-tighter">TEAMTALK</span>
          <span className="text-4xl font-black italic tracking-tighter">GLOBALCHART</span>
          <span className="text-4xl font-black italic tracking-tighter">EXDONE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;