
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-[#fdfdfd]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="text-vibrant-red font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Ecosistema de Crecimiento</span>
          <h2 className="text-5xl md:text-6xl font-serif font-black text-rich-black mb-8 leading-tight">
            Soluciones integrales para la <br />
            <span className="italic text-gray-300">nueva era comercial.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed">
            Como tus socios tecnológicos, hemos diseñado servicios que cubren cada ángulo de tu transformación digital. Sin rellenos, solo lo que necesitas para ganar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-vibrant-red/20 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 group flex flex-col"
            >
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-vibrant-red group-hover:text-white transition-all duration-500 text-vibrant-red">
                {React.cloneElement(service.icon as React.ReactElement, { className: 'w-7 h-7' })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-rich-black tracking-tight">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                {service.description}
              </p>
              <div className="mt-8 pt-6 border-t border-gray-50">
                <span className="text-vibrant-red text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Consultar Servicio
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
