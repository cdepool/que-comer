import React from 'react';
import { PORTFOLIO } from '../constants';
import { ArrowUpRight, Star, Quote } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 md:py-40 bg-white text-rich-black">
      <div className="container mx-auto px-6">
        
        {/* Testimonial de Impacto - Estilo Minimalista Tipográfico */}
        <div className="max-w-4xl mx-auto text-center mb-40 relative">
          <div className="flex justify-center mb-10 space-x-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-vibrant-red text-vibrant-red" />)}
          </div>
          
          <h3 className="text-3xl md:text-5xl font-black leading-tight mb-12 tracking-tight">
            "Implementamos la tecnología que hoy domina el mercado regional. Nuestra experiencia propia es tu mayor garantía."
          </h3>
          
          <div className="flex flex-col items-center">
            <div className="w-px h-16 bg-vibrant-red mb-8"></div>
            <p className="font-black text-xl tracking-tighter uppercase">Qué Agencia Team</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-black mt-2">Fundadores & Estrategas</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="text-center md:text-left">
            <p className="text-vibrant-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Autoridad Comprobada</p>
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.85]">
              Nuestras <br />
              <span className="text-rich-black/10 italic">Insignias.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-right max-w-sm font-light leading-relaxed">
            No solo asesoramos. Construimos plataformas desde cero que hoy son líderes indiscutibles en sus sectores.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {PORTFOLIO.map((item, idx) => (
            <div key={idx} className="group cursor-pointer relative">
              <div className="rounded-[4rem] bg-soft-gray p-12 md:p-20 aspect-square flex flex-col justify-between border border-transparent transition-all duration-700 group-hover:border-vibrant-red group-hover:bg-white group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
                
                <div className="flex justify-between items-start">
                  <div className="w-24 h-24 bg-vibrant-red rounded-3xl flex items-center justify-center text-white text-4xl font-black italic shadow-2xl shadow-red-500/20 group-hover:scale-110 transition-transform">
                    {item.logo}
                  </div>
                  <div className="w-16 h-16 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-vibrant-red group-hover:border-vibrant-red transition-all duration-500">
                    <ArrowUpRight className="text-rich-black group-hover:text-white w-8 h-8 transition-colors" />
                  </div>
                </div>

                <div>
                  <div className="flex space-x-3 mb-8">
                    <span className="text-[10px] font-black bg-rich-black text-white px-5 py-2 rounded-full uppercase tracking-widest">CASO DE ÉXITO</span>
                    <span className="text-[10px] font-black border border-black/10 text-rich-black px-5 py-2 rounded-full uppercase tracking-widest">LÍDER LOCAL</span>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-rich-black mb-6 group-hover:translate-x-2 transition-transform duration-500">{item.name}</h3>
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;