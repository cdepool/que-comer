
import React from 'react';
import { PORTFOLIO } from '../constants';
import { CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-vibrant-red font-bold text-sm uppercase tracking-widest mb-4 block">Autoridad & Respaldo</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-rich-black leading-tight">
              No improvisamos. Creamos <span className="italic">casos de éxito</span> propios.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              "Qué Agencia" nace del éxito de nuestras propias plataformas líderes en el mercado venezolano. Aplicamos en tu negocio la misma tecnología robusta y estrategias de marketing que nos posicionaron en la cima.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-vibrant-red w-6 h-6 shrink-0 mt-1" />
                <p className="text-gray-700"><span className="font-bold">Tecnología Probada:</span> Escalamiento masivo con arquitectura en la nube.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-vibrant-red w-6 h-6 shrink-0 mt-1" />
                <p className="text-gray-700"><span className="font-bold">Diseño Centrado en Usuario:</span> Optimización de flujo basada en datos reales.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {PORTFOLIO.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-3xl bg-rich-black p-10 flex flex-col justify-between h-80 transition-all hover:scale-[1.02]">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <span className="text-8xl font-serif font-black text-white">{item.logo}</span>
                </div>
                <div className="relative z-10">
                   <h3 className="text-3xl font-serif text-white mb-4">{item.name}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className="relative z-10">
                  <span className="inline-block bg-vibrant-red text-white text-xs px-4 py-2 rounded-full font-bold">Ver plataforma</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
