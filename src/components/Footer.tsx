import React from 'react';
import { Facebook, ExternalLink, ShieldCheck, Truck, Sparkles, Heart, Instagram, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171513] text-[#D6CEC7] pt-16 pb-12 border-t border-[#2D2824]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Off-Page Hub */}
        <div className="bg-[#24201D] rounded-3xl p-8 sm:p-10 border border-[#3A3531] mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <span className="text-xs font-bold text-[#E5BF9E] uppercase tracking-wider block">
                Clube VIP Lumina
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Receba cupons do Mercado Livre e novidades de skincare
              </h3>
              <p className="text-[#A89F96] text-xs sm:text-sm">
                Cadastre seu e-mail para receber ofertas relâmpago e conteúdos de beleza semanais.
              </p>
            </div>

            <div className="lg:col-span-6">
              <form onSubmit={(e) => { e.preventDefault(); alert('Obrigado por se inscrever! Enviamos seu cupom de boas-vindas.'); }} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Digite seu melhor e-mail..."
                  className="flex-1 bg-[#171513] border border-[#3A3531] text-white placeholder-[#786F67] px-4 py-3.5 rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#C49B7A]"
                />
                <button
                  type="submit"
                  className="bg-[#C49B7A] hover:bg-[#B38763] text-[#1C1917] font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Cadastrar</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2D2824]">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C49B7A] text-[#1C1917] flex items-center justify-center font-serif text-lg font-bold">
                L
              </div>
              <span className="font-serif text-2xl tracking-tight text-white font-semibold">
                LUMINA
              </span>
            </div>
            <p className="text-[#A89F96] text-xs sm:text-sm leading-relaxed">
              Cosméticos de alta performance botânica, dermatologicamente seguros e 100% veganos. Feitos com amor para realçar sua melhor versão.
            </p>
            <div className="pt-2 text-xs text-[#8C827A] space-y-1">
              <p>CNPJ: 45.123.890/0001-99</p>
              <p>São Paulo - SP • Brasil</p>
            </div>
          </div>

          {/* Column 2: Marketplaces Off-Page Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Marketplaces & Onde Comprar
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89F96]">
              <li>
                <a
                  id="footer-ml-loja-oficial"
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FFE600] hover:text-[#FFF066] font-semibold group"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FFE600]"></span>
                  <span>Loja Oficial Mercado Livre</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Catálogo de Séruns & Tratamentos</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Kits Promocionais com Envio Full</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Cuidados Corporais & Manteigas</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Redes Sociais Off-Page Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Redes Sociais & Comunidade
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A89F96]">
              <li>
                <a
                  id="footer-facebook-link"
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#93C5FD] font-semibold group"
                >
                  <Facebook className="w-4 h-4 fill-current text-[#3B82F6]" />
                  <span>Facebook Página Oficial</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a
                  id="footer-facebook-group"
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#786F67]" />
                  <span>Grupo VIP de Skincare no Facebook</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
              <li>
                <a
                  id="footer-instagram-link"
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FB7185]" />
                  <span>Instagram @luminaskincare</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
              <li>
                <a
                  id="footer-whatsapp-link"
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#34D399]" />
                  <span>Atendimento WhatsApp Direto</span>
                  <ExternalLink className="w-3 h-3 text-[#786F67]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Guarantees & Security Seals */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Segurança & Logística
            </h4>
            <div className="space-y-2 text-xs text-[#A89F96]">
              <div className="p-3 bg-[#24201D] rounded-xl border border-[#3A3531] flex items-center gap-3">
                <Truck className="w-5 h-5 text-[#FFE600] shrink-0" />
                <div>
                  <p className="font-bold text-white text-[11px]">Mercado Envios Full</p>
                  <p className="text-[10px] text-[#A89F96]">Entrega rápida em todo o Brasil</p>
                </div>
              </div>
              <div className="p-3 bg-[#24201D] rounded-xl border border-[#3A3531] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold text-white text-[11px]">Mercado Pago Seguro</p>
                  <p className="text-[10px] text-[#A89F96]">Compra 100% Protegida</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C827A] gap-4">
          <p>© 2026 Lumina Botanicals & Skincare. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#produtos" className="hover:text-white">Cosméticos</a>
            <a href="#beneficios" className="hover:text-white">Ciência Limpa</a>
            <a href={SOCIAL_LINKS.mercadoLivre} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE600]">Mercado Livre</a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#60A5FA]">Facebook</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
