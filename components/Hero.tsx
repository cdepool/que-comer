
import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Elementos Orgánicos Asimétricos */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 -left-12 w-64 h-64 bg-vibrant-red/5 rounded-full blur-2xl -z-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <header className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-rich-black text-white px-5 py-2 rounded-full mb-8 shadow-lg">
                <span className="w-2 h-2 bg-vibrant-red rounded-full animate-ping"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Tu Consultor de Confianza</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-serif font-black leading-[0.95] mb-8 text-rich-black tracking-tighter">
                Hacemos que tu <br />
                <span className="text-vibrant-red italic">negocio escale</span> <br />
                con IA y Web.
              </h1>
              
              <p className="text-xl text-gray-500 leading-relaxed max-w-xl text-balance font-light">
                No somos solo una agencia; somos el aliado estratégico que estabas esperando en <span className="text-rich-black font-semibold">Portuguesa</span>. Fusionamos tecnología de punta con una visión humana para transformar tu presencia digital.
              </p>
            </header>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="#contacto" 
                className="w-full sm:w-auto bg-vibrant-red text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center hover:bg-red-700 transition-all group shadow-2xl shadow-red-500/30 active:scale-95"
              >
                Inicia tu Transformación
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#proyectos" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold flex items-center justify-center text-rich-black hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
              >
                Ver Casos de Éxito
              </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-8 items-center text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="text-rich-black font-bold text-2xl">50+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest leading-none">Marcas <br />Impulsadas</span>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
              <p className="text-sm italic">"La misma tecnología de Qué Comer aplicada a tu negocio."</p>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 p-4 bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] rotate-3 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop" 
                alt="Agencia Digital Portuguesa" 
                className="rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-rich-black p-8 rounded-3xl shadow-2xl text-white">
                <Zap className="text-vibrant-red w-8 h-8 mb-2" />
                <p className="text-xs uppercase font-bold tracking-tighter opacity-60">Resultados IA</p>
                <p className="text-3xl font-serif font-bold">100% Real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
