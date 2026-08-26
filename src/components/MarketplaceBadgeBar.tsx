import React from 'react';
import { Facebook, ExternalLink, ShieldCheck, Truck, Sparkles, CheckCircle2, ShoppingCart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

export const MarketplaceBadgeBar: React.FC = () => {
  return (
    <section className="bg-[#1C1917] text-[#EDE7E1] py-10 border-y border-[#2E2A27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-center">
          
          {/* Card 1: Mercado Livre Official Marketplace */}
          <div className="relative overflow-hidden bg-[#262320] p-6 sm:p-7 rounded-2xl border border-[#FFE600]/30 shadow-md flex flex-col justify-between group hover:border-[#FFE600]/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFE600] flex items-center justify-center text-[#1C1917] font-black text-base shadow-xs">
                  ML
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#FFE600]/20 text-[#FFE600] text-[11px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-3 h-3 text-[#FFE600]" />
                    Loja Oficial Mercado Livre
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Compre no Maior Marketplace do Brasil
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-[#C5BCB4] text-sm mb-6 leading-relaxed">
              Garantia de entrega rápida com <strong className="text-white font-semibold">Envio Full</strong>, parcelamento em até 12x sem juros e proteção total ao consumidor com o programa Compra Garantida.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3A3531]">
              <div className="flex items-center gap-3 text-xs text-[#C5BCB4]">
                <span className="flex items-center gap-1 text-[#FFE600] font-medium">
                  <Truck className="w-3.5 h-3.5" /> Chega amanhã
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> Compra Garantida
                </span>
              </div>

              <a
                id="banner-ml-link"
                href={SOCIAL_LINKS.mercadoLivre}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-xs group-hover:scale-102"
              >
                <span>Acessar Loja Mercado Livre</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Facebook Official Community & Content */}
          <div className="relative overflow-hidden bg-[#262320] p-6 sm:p-7 rounded-2xl border border-[#3B82F6]/30 shadow-md flex flex-col justify-between group hover:border-[#3B82F6]/60 transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center text-white font-black text-xl shadow-xs">
                  <Facebook className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#3B82F6]/20 text-[#93C5FD] text-[11px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-[#60A5FA]" />
                    Comunidade Oficial no Facebook
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Dicas, Rotinas & Lives com Especialistas
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-[#C5BCB4] text-sm mb-6 leading-relaxed">
              Junte-se a mais de <strong className="text-white font-semibold">45.000 apaixonados por skincare</strong>. Participe de sorteios mensais de kits, tire dúvidas sobre ingredientes e receba cupons secretos.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3A3531]">
              <div className="flex items-center gap-2 text-xs text-[#C5BCB4]">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-pulse"></span>
                <span>Conteúdo diário & Suporte direto</span>
              </div>

              <a
                id="banner-facebook-link"
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white px-5 py-2.5 rounded-xl font-bold text-xs tracking-wide transition-all shadow-xs group-hover:scale-102"
              >
                <span>Seguir no Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
