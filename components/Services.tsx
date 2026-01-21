import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-40 bg-rich-black text-white relative overflow-hidden">
      {/* Luz de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-vibrant-red/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <p className="text-vibrant-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">Soluciones de Próxima Generación</p>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
              Servicios de <br />
              <span className="text-white/20 italic">Alto Calibre.</span>
            </h2>
          </div>
          <button className="border-2 border-white/10 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-white hover:text-rich-black transition-all group flex items-center">
            MÁS DETALLES
            <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="bg-[#1a1a1a] rounded-[3rem] p-10 md:p-14 border border-white/5 group hover:border-vibrant-red/30 transition-all duration-500 hover:translate-y-[-10px]">
              <div className="w-20 h-20 bg-vibrant-red/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-vibrant-red transition-colors duration-500">
                {React.cloneElement(service.icon as React.ReactElement, { 
                  className: 'w-10 h-10 text-vibrant-red group-hover:text-white transition-colors duration-500' 
                })}
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tighter group-hover:text-vibrant-red transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-light">
                {service.description}
              </p>
              <button className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] flex items-center group/btn hover:text-white transition-colors">
                CONSULTAR AHORA
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;