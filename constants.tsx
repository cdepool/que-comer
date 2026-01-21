
import React from 'react';
import { Globe, Cpu, PenTool, Share2, MapPin, Zap, Rocket, Camera } from 'lucide-react';
import { ServiceCardProps, AdvantageProps, PortfolioItem, PromptDoc } from './types';

export const SERVICES: ServiceCardProps[] = [
  {
    title: "Desarrollo Web & SaaS",
    description: "No solo hacemos páginas; construimos máquinas de venta rápidas y aplicaciones que solucionan problemas reales de tu operación diaria.",
    icon: <Globe className="w-8 h-8 text-vibrant-red" />
  },
  {
    title: "Marketing con IA",
    description: "Usamos algoritmos para encontrar a tus clientes antes que tu competencia. Automatizamos tu crecimiento para que tú te enfoques en el negocio.",
    icon: <Cpu className="w-8 h-8 text-vibrant-red" />
  },
  {
    title: "Contenido & Gastronomía",
    description: "Expertos en capturar la esencia de tu cocina. Reels de alto impacto y gestión de redes para restaurantes que despiertan el apetito y llenan mesas.",
    icon: <Camera className="w-8 h-8 text-vibrant-red" />
  },
  {
    title: "Branding & Diseño",
    description: "Creamos identidades que imponen respeto. Logotipos, piezas gráficas y avatares diseñados para conectar emocionalmente con tu audiencia.",
    icon: <PenTool className="w-8 h-8 text-vibrant-red" />
  },
  {
    title: "Directorios Digitales",
    description: "Expertos en conectar comunidades locales. Creamos el puente digital entre los negocios de Portuguesa y sus consumidores.",
    icon: <Share2 className="w-8 h-8 text-vibrant-red" />
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    name: "Qué Comer",
    description: "Transformamos el sector gastronómico en Portuguesa con una plataforma robusta que hoy es el estándar de la industria local.",
    logo: "QC"
  },
  {
    name: "Qué Comprar",
    description: "El punto de encuentro comercial más dinámico de la región, optimizado con nuestra metodología de conversión propietaria.",
    logo: "QB"
  }
];

export const ADVANTAGES: AdvantageProps[] = [
  {
    title: "ADN de Acarigua-Araure",
    description: "Entendemos tus retos porque caminamos las mismas calles. Tu contexto es nuestra mayor ventaja estratégica.",
    icon: <MapPin className="w-6 h-6 text-vibrant-red" />
  },
  {
    title: "IA que Trabaja de Verdad",
    description: "Nada de teorías abstractas. Implementamos herramientas de Inteligencia Artificial que ahorran horas de trabajo hoy mismo.",
    icon: <Zap className="w-6 h-6 text-vibrant-red" />
  },
  {
    title: "Acompañamiento 360°",
    description: "Desde tu primer boceto hasta tu primera venta automatizada. Somos tus socios tecnológicos en cada paso del camino.",
    icon: <Rocket className="w-6 h-6 text-vibrant-red" />
  }
];

export const IMAGE_PROMPTS: PromptDoc[] = [
  {
    section: "Hero Visual",
    prompt: "High-end cinematic composition of a glowing red abstract network flowing through a glass-and-steel modern office, rich black accents, soft professional studio lighting, depth of field, minimalist aesthetic, 8k resolution --v 6.0"
  },
  {
    section: "Iconografía de Servicios",
    prompt: "Set of 5 minimalist 3d glass icons, tech symbols (globe, chip, camera, pen, nodes), vibrant red core glow, rich black base, high contrast, isolated on white background, premium digital art style --ar 16:9"
  },
  {
    section: "Casos de Éxito",
    prompt: "Editorial photography of multiple mobile screens showing food delivery and marketplace apps with bold red branding, clean minimalist environment, soft shadows, professional UI presentation --v 6.0"
  }
];
