import React from 'react';
import { Sparkles, ExternalLink, ShieldCheck, Truck, Star, ArrowRight, Heart, Droplets, Leaf } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

interface HeroProps {
  onOpenQuiz: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-[#F7F3ED] pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle organic background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#EADBCE] blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#EADFD7] blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-[#EFE9DF] blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE6] border border-[#DFD7CB] text-[#5C534B] text-xs font-semibold tracking-wide shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9A7B66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7A5F4C]"></span>
              </span>
              <span>Biotecnologia Botânica & Cuidados de Alta Performance</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D2926] leading-[1.12] font-normal tracking-tight">
              A pureza da natureza com a{' '}
              <span className="italic font-serif text-[#7A5F4C] font-semibold underline decoration-[#C49B7A] decoration-3 underline-offset-6">
                ciência dermatológica
              </span>{' '}
              para a sua pele.
            </h1>

            {/* Sub-headline */}
            <p className="text-[#635B53] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              Cosméticos veganos, séruns iluminadores e tratamentos corporais formulados para realçar o seu viço natural. Compre com total segurança em nossa{' '}
              <strong className="text-[#2D2926] font-semibold">Loja Oficial no Mercado Livre</strong> ou interaja em nossa comunidade no Facebook.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                id="hero-cta-mercadolivre"
                href={SOCIAL_LINKS.mercadoLivre}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all text-sm group border border-[#E6CE00]"
              >
                <span>Comprar no Mercado Livre</span>
                <ExternalLink className="w-4 h-4 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                id="hero-cta-quiz"
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 bg-[#2D2926] hover:bg-[#1C1917] text-[#FDFBF7] font-semibold px-6 py-4 rounded-xl shadow-xs transition-all text-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#C49B7A]" />
                <span>Montar Minha Rotina de Skincare</span>
              </button>
            </div>

            {/* Trust highlights bar below CTAs */}
            <div className="pt-4 border-t border-[#E8E2D9] grid grid-cols-3 gap-4 text-[#5C534B] text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF9D6] border border-[#F2E599] flex items-center justify-center text-[#8C6D00] shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2926] leading-tight">Envio Full</p>
                  <p className="text-[#8C827A] text-[11px]">Mercado Livre</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EBF5EE] border border-[#CDE5D4] flex items-center justify-center text-[#2A6E3F] shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2926] leading-tight">100% Vegano</p>
                  <p className="text-[#8C827A] text-[11px]">Cruelty-Free</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#EEF4FF] border border-[#CCE0FF] flex items-center justify-center text-[#1E56B3] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-bold text-[#2D2926] leading-tight">Compra Segura</p>
                  <p className="text-[#8C827A] text-[11px]">Mercado Pago</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Product Hero Image with organic frame */}
              <div className="relative z-10 overflow-hidden rounded-3xl bg-[#EBE4DC] border-4 border-white shadow-xl aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1608248597359-00f73fce850c?auto=format&fit=crop&w=1000&q=80"
                  alt="Linha de Skincare e Cosméticos Lumina Botanicals"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-[#1C1917]/10"></div>
                
                {/* Overlay bottom product detail */}
                <div className="absolute bottom-5 left-5 right-5 text-white p-4 rounded-2xl bg-[#1C1917]/75 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-semibold text-[#FFE600] uppercase tracking-wider block">
                        Fórmula Premiada
                      </span>
                      <p className="font-serif text-lg font-medium text-white">
                        Sérum Vitamina C 15% + Bakuchiol
                      </p>
                    </div>
                    <a
                      href={SOCIAL_LINKS.mercadoLivre}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] p-2.5 rounded-xl transition-all font-bold"
                      title="Ver no Mercado Livre"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Mercado Livre Official Store */}
              <div className="absolute -top-4 -right-4 sm:-right-6 z-20 bg-white/95 backdrop-blur-md py-2.5 px-4 rounded-2xl shadow-lg border border-[#F2E599] flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-xl bg-[#FFE600] flex items-center justify-center font-bold text-[#1C1917] text-xs">
                  ML
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#2D2926]">Loja Oficial</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </div>
                  <p className="text-[11px] text-[#7C726A]">Líder Platinum no Brasil</p>
                </div>
              </div>

              {/* Floating Badge 2: Real Customer Rating */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-md py-3 px-4 rounded-2xl shadow-lg border border-[#E8E2D9] flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Cliente 1"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
                    alt="Cliente 2"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80"
                    alt="Cliente 3"
                  />
                </div>
                <div>
                  <div className="flex items-center text-amber-500 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="ml-1 text-[#2D2926] font-bold text-xs">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-[#7C726A]">+1.500 avaliações no ML</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
