import React from 'react';
import { Star, CheckCircle, Quote, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A5F4C] bg-[#F4EFEA] px-3.5 py-1.5 rounded-full border border-[#DFD7CB] shadow-2xs">
            Avaliações Verificadas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2926] font-normal tracking-tight">
            Quem experimenta recomenda e transforma a rotina
          </h2>
          <p className="text-[#635B53] text-base sm:text-lg leading-relaxed">
            Mais de 1.800 avaliações 5 estrelas em nossa Loja Oficial no Mercado Livre e grupos de beleza.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-[#E8E2D9] shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Stars */}
                <div className="flex items-center text-amber-500 text-xs">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-[#8C827A] text-[11px]">{rev.date}</span>
                </div>

                <p className="text-[#3C3836] text-xs sm:text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>

                <div className="pt-1">
                  <span className="text-[11px] font-semibold text-[#7A5F4C] bg-[#F4EFEA] px-2.5 py-1 rounded-md border border-[#DFD7CB]">
                    {rev.productName}
                  </span>
                </div>
              </div>

              {/* Author */}
              <div className="pt-4 mt-4 border-t border-[#F2EDE6] flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#E8E2D9]"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-[#2D2926] text-xs">{rev.author}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  </div>
                  <p className="text-[10px] text-[#8C827A]">{rev.location} • Compra ML</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Before & After Transformation Highlight */}
        <div className="bg-white rounded-3xl border border-[#E8E2D9] p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2A6E3F] bg-[#EBF5EE] px-3.5 py-1 rounded-full border border-[#CDE5D4]">
                Estudo de Caso Real
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D2926] font-normal">
                Resultado em 21 dias com o Sérum Vitamina C + Bakuchiol
              </h3>
              <p className="text-[#635B53] text-sm leading-relaxed">
                "Minha pele estava desvitalizada e com marcas solares. Com o uso diário da rotina Lumina comprada no Mercado Livre, o viço voltou sem nenhuma sensação de oleosidade."
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#2D2926]">
                <span>— Beatriz Mendes, 34 anos</span>
                <span className="text-[#8C827A]">•</span>
                <span className="text-[#2A6E3F]">Compradora Verificada</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F2EDE6] border border-[#E8E2D9]">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80"
                  alt="Antes do tratamento de skincare"
                  className="w-full h-full object-cover grayscale-[25%]"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-[#2D2926]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  Dia 1
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#F2EDE6] ring-2 ring-[#C49B7A]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Depois do tratamento de skincare"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-[#9A7B66] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs">
                  Dia 21 (Pele Luminosa)
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
