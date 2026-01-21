import React from 'react';
import { PORTFOLIO } from '../constants';
import { ArrowUpRight, Star } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-rich-black text-white">
      <div className="container mx-auto px-6">
        
        {/* Testimonial Feature like the image */}
        <div className="max-w-3xl mx-auto text-center mb-32 animate-fade-in">
          <div className="flex justify-center mb-6 space-x-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-vibrant-red text-vibrant-red" />)}
          </div>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10 text-white/90">
            "Nuestra experiencia con Qué Agencia ha sido sencillamente excepcional. Su experiencia en el mercado local nos ha ayudado a aumentar nuestra visibilidad y ventas en tiempo récord."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-vibrant-red mb-4 overflow-hidden border-2 border-white/20">
              <img src="https://i.pravatar.cc/150?u=consultor" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <p className="font-bold text-lg">Cliver De Pool</p>
            <p className="text-xs text-vibrant-red uppercase tracking-widest font-black">CEO - TEAMTALK</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <p className="text-vibrant-red font-bold uppercase tracking-widest text-[10px] mb-4">Nuestro Trabajo</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Proyectos de <span className="text-white/40 italic">Alto Impacto.</span></h2>
          </div>
          <p className="text-gray-400 text-sm md:text-right max-w-xs">
            Nos enfocamos en entregar resultados que se traducen en crecimiento real para nuestros clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[...PORTFOLIO, PORTFOLIO[0]].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-[2.5rem] overflow-hidden bg-[#1a1a1a] mb-6 aspect-square relative border border-white/5 transition-all group-hover:border-vibrant-red/30">
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + idx * 222222}?q=80&w=600&auto=format&fit=crop`} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700"
                  alt={item.name}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-rich-black to-transparent opacity-60"></div>
                
                {/* Floating Content within Image */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex space-x-2 mb-4">
                    <span className="text-[10px] font-black bg-vibrant-red text-white px-3 py-1 rounded-full uppercase">SaaS</span>
                    <span className="text-[10px] font-black bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full uppercase">UI/UX</span>
                  </div>
                  <h3 className="text-3xl font-black tracking-tighter text-white">{item.name} Campaign</h3>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                   <ArrowUpRight className="text-white w-6 h-6" />
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