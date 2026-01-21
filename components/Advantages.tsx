
import React from 'react';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section id="nosotros" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-serif font-black text-rich-black leading-tight">
              ¿Por qué elegirnos como <br />
              <span className="text-vibrant-red italic">tu brazo tecnológico?</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm uppercase tracking-widest font-bold max-w-xs text-right hidden lg:block">
            Basamos nuestro éxito en tres pilares innegociables: Confianza, Tecnología y Cercanía.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="relative">
              <div className="text-vibrant-red mb-6">
                {React.cloneElement(adv.icon as React.ReactElement, { className: 'w-10 h-10' })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rich-black">{adv.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                {adv.description}
              </p>
              <div className="absolute -top-4 -left-4 text-slate-100 font-serif font-black text-7xl -z-10 select-none opacity-50">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
