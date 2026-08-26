import React from 'react';
import { Truck, ShieldCheck, CreditCard, Award, ExternalLink, Star, PackageCheck, CheckCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

export const MercadoLivreHighlight: React.FC = () => {
  return (
    <section id="mercado-livre" className="py-20 bg-[#171513] text-[#EDE7E1] relative overflow-hidden">
      {/* Yellow accent background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFE600]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#24201D] border border-[#FFE600]/25 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE600] text-[#1C1917] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-2xs border border-[#E6CE00]">
                <span>Mercado Livre</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#1C1917]"></span>
                <span>Loja Oficial Certificada</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
                Compre com a máxima segurança e rapidez do Mercado Livre
              </h2>

              <p className="text-[#C5BCB4] text-base leading-relaxed">
                Nossos cosméticos e dermocosméticos estão armazenados nos Centros de Distribuição do Mercado Livre pelo programa <strong className="text-[#FFE600] font-semibold">Mercado Envios Full</strong>. Isso significa envio imediato e rastreio em tempo real.
              </p>

              {/* 4 Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 bg-[#1C1917] rounded-2xl border border-[#3A3531]">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE600]/20 text-[#FFE600] flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Envio Full Expresso</h4>
                    <p className="text-xs text-[#A89F96] mt-0.5">Entrega no mesmo dia ou no dia seguinte para a maioria das capitais.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#1C1917] rounded-2xl border border-[#3A3531]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Compra Garantida</h4>
                    <p className="text-xs text-[#A89F96] mt-0.5">Receba o produto exatamente como esperado ou seu dinheiro de volta.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#1C1917] rounded-2xl border border-[#3A3531]">
                  <div className="w-9 h-9 rounded-xl bg-blue-400/20 text-blue-400 flex items-center justify-center shrink-0">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Até 12x Sem Juros</h4>
                    <p className="text-xs text-[#A89F96] mt-0.5">Facilidade no cartão, Pix com aprovação imediata ou boleto bancário.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 bg-[#1C1917] rounded-2xl border border-[#3A3531]">
                  <div className="w-9 h-9 rounded-xl bg-purple-400/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">MercadoLíder Platinum</h4>
                    <p className="text-xs text-[#A89F96] mt-0.5">O mais alto nível de reputação e excelência de atendimento no ML.</p>
                  </div>
                </div>
              </div>

              {/* Call to action button to Mercado Livre */}
              <div className="pt-3">
                <a
                  id="ml-highlight-cta-btn"
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold px-7 py-4 rounded-xl text-sm shadow-md transition-all hover:scale-102 border border-[#E6CE00]"
                >
                  <span>Visitar Nossa Loja Oficial no Mercado Livre</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Card: Seller Reputation Box */}
            <div className="lg:col-span-5">
              <div className="bg-[#1C1917] p-6 sm:p-7 rounded-3xl border border-[#3A3531] shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#A89F96] uppercase tracking-wider block">
                      Reputação do Vendedor
                    </span>
                    <h3 className="font-serif text-xl font-bold text-white mt-0.5">
                      Lumina Botanicals Oficial
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFE600] text-[#1C1917] flex items-center justify-center font-black text-sm">
                    ML
                  </div>
                </div>

                {/* Score bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-[#D6CEC7] font-medium">
                    <span>Termômetro de Reputação</span>
                    <span className="text-emerald-400 font-bold">100% Positivo</span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-2.5">
                    <div className="bg-emerald-700 rounded-xs"></div>
                    <div className="bg-emerald-600 rounded-xs"></div>
                    <div className="bg-emerald-500 rounded-xs"></div>
                    <div className="bg-emerald-400 rounded-xs"></div>
                    <div className="bg-emerald-400 rounded-xs ring-2 ring-emerald-300"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-2">
                  <div className="p-3 bg-[#262320] rounded-xl border border-[#3A3531]">
                    <span className="text-lg font-bold text-white block">+10 mil</span>
                    <span className="text-[10px] text-[#A89F96]">Vendas nos últimos 60 dias</span>
                  </div>
                  <div className="p-3 bg-[#262320] rounded-xl border border-[#3A3531]">
                    <span className="text-lg font-bold text-emerald-400 block">Bom</span>
                    <span className="text-[10px] text-[#A89F96]">Atendimento ao cliente</span>
                  </div>
                  <div className="p-3 bg-[#262320] rounded-xl border border-[#3A3531]">
                    <span className="text-lg font-bold text-emerald-400 block">No Prazo</span>
                    <span className="text-[10px] text-[#A89F96]">Entrega sem atrasos</span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FFE600]/10 border border-[#FFE600]/20 rounded-2xl flex items-center gap-3 text-xs text-[#FFE600]">
                  <Star className="w-5 h-5 fill-current shrink-0 text-[#FFE600]" />
                  <span>Nota 4.9 baseada em mais de 1.800 avaliações verificadas de compradores.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
