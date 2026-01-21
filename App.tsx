
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Advantages from './components/Advantages';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { IMAGE_PROMPTS } from './constants';
import { Info, Code, Image as ImageIcon, Zap as ZapIcon, MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [showDocs, setShowDocs] = useState(false);
  const whatsappUrl = "https://wa.me/584125542250?text=Hola!%20Me%20interesa%20saber%20más%20sobre%20los%20servicios%20de%20Qué%20Agencia.";

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Advantages />
        <ContactForm />
      </main>
      
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce duration-[3000ms]"
        title="Chat con Consultor"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>

      {/* Internal Documentation Toggle for the client (UX Helper) */}
      <button 
        onClick={() => setShowDocs(!showDocs)}
        className="fixed bottom-6 right-6 z-[60] bg-rich-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Directrices de Diseño"
      >
        <Info className="w-6 h-6" />
      </button>

      {/* Docs Modal */}
      {showDocs && (
        <div className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" onClick={() => setShowDocs(false)}>
          <div className="bg-white text-rich-black w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl p-8 md:p-12 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <h2 className="text-3xl font-bold italic">Directrices del Proyecto</h2>
              <button onClick={() => setShowDocs(false)} className="text-gray-400 hover:text-black">✕</button>
            </div>

            <div className="space-y-8">
              <section>
                <div className="flex items-center space-x-2 mb-4 text-vibrant-red">
                  <ImageIcon className="w-5 h-5" />
                  <h3 className="font-bold uppercase text-sm tracking-widest">Prompts de Imagen (Midjourney/DALL-E)</h3>
                </div>
                <div className="space-y-4">
                  {IMAGE_PROMPTS.map((p, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold mb-1">{p.section}:</p>
                      <p className="text-sm text-gray-600 font-mono leading-tight">{p.prompt}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4 text-vibrant-red">
                  <ZapIcon className="w-5 h-5" />
                  <h3 className="font-bold uppercase text-sm tracking-widest">Recomendaciones Técnicas</h3>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                  <li><strong>Animaciones:</strong> Usar <code className="bg-slate-100 px-1">Intersection Observer</code> para disparar las animaciones de fade-in solo cuando el usuario haga scroll hasta la sección.</li>
                  <li><strong>Optimización:</strong> Todas las imágenes deben servirse en formato <code className="bg-slate-100 px-1">WebP</code>. El logo debe ser un <code className="bg-slate-100 px-1">SVG</code> inline para evitar CLS.</li>
                  <li><strong>Tipografía:</strong> Cargar las fuentes desde Google Fonts con <code className="bg-slate-100 px-1">display=swap</code> para asegurar legibilidad inmediata.</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center space-x-2 mb-4 text-vibrant-red">
                  <Code className="w-5 h-5" />
                  <h3 className="font-bold uppercase text-sm tracking-widest">Paleta Identitaria</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#fc0203]"></div>
                    <div>
                      <p className="text-xs font-bold">Vibrant Red</p>
                      <p className="text-xs text-gray-400">#fc0203</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-[#231f20]"></div>
                    <div>
                      <p className="text-xs font-bold">Rich Black</p>
                      <p className="text-xs text-gray-400">#231f20</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <button 
              onClick={() => setShowDocs(false)}
              className="mt-12 w-full bg-vibrant-red text-white py-4 rounded-xl font-bold hover:bg-red-700 transition-all"
            >
              Entendido, volver a la Web
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
