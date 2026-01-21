import React from 'react';
import { ADVANTAGES } from '../constants';

const Advantages: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-vibrant-red text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tighter mb-8">
              Aumenta tu Presencia <br />
              Digital Hoy Mismo.
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end">
            <p className="text-white/80 max-w-sm mb-8 text-sm md:text-base lg:text-right font-light">
              Nuestra metodología te permite conectar sin esfuerzo con tu audiencia, impulsando el compromiso y la visibilidad en todas las plataformas locales.
            </p>
            <button className="bg-white text-vibrant-red px-6 py-3 rounded-xl font-bold text-sm hover:bg-rich-black hover:text-white transition-all">
              CONTACTAR AHORA
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/20 pt-16">
          {ADVANTAGES.concat(ADVANTAGES[0]).slice(0, 4).map((adv, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-6 opacity-80">
                {React.cloneElement(adv.icon as React.ReactElement, { className: 'w-8 h-8 text-white', strokeWidth: 1.5 })}
              </div>
              <h3 className="text-lg font-bold mb-3 tracking-tight">{adv.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative text mask like the style */}
      <div className="absolute -bottom-10 left-0 text-[15rem] font-black text-black/5 select-none pointer-events-none uppercase whitespace-nowrap">
        QUÉ AGENCIA
      </div>
    </section>
  );
};

export default Advantages;