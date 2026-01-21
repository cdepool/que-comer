import React from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-rich-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <p className="text-vibrant-red font-bold uppercase tracking-widest text-xs mb-4">Descubre lo nuevo</p>
            <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
              Servicios que Impulsan <br />
              <span className="text-white/40 italic">Resultados Reales.</span>
            </h2>
          </div>
          <button className="border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center hover:bg-white hover:text-rich-black transition-all group">
            TODOS LOS SERVICIOS
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service, idx) => (
            <div key={idx} className="bg-[#2a2627] rounded-[2rem] overflow-hidden group hover:scale-[1.02] transition-all duration-500">
              <div className="h-64 bg-gray-800 relative overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${1550000000000 + idx * 100000}?q=80&w=600&auto=format&fit=crop`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={service.title}
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase">Marketing</span>
                  <span className="bg-white/10 backdrop-blur-md text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase">5 min read</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-vibrant-red transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-white text-xs font-black uppercase tracking-widest flex items-center group/btn">
                  Leer más
                  <ArrowUpRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;