import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Facebook, ExternalLink, Menu, X, Heart, Search } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenQuiz: () => void;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenQuiz,
  onSelectCategory,
  selectedCategory
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E2D9] shadow-xs">
      {/* Announcement bar with direct external links */}
      <div className="bg-[#1C1917] text-[#EDE7E1] text-xs py-2.5 px-4 border-b border-[#2D2825]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 font-medium">
            <span className="inline-flex items-center justify-center bg-[#FFE600]/15 text-[#FFE600] px-2 py-0.5 rounded-sm text-[11px] font-bold tracking-wider border border-[#FFE600]/30">
              OFERTA DE HOJE
            </span>
            <span className="text-[#D6CEC7]">Frete Grátis com Envio Full no Mercado Livre em compras selecionadas</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-normal">
            <a
              id="header-top-mercadolivre"
              href={SOCIAL_LINKS.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#FFE600] hover:text-yellow-200 transition-colors font-semibold"
              title="Ir para a Loja Oficial no Mercado Livre"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFE600] animate-pulse"></span>
              Loja Oficial Mercado Livre
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a
              id="header-top-facebook"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#93C5FD] hover:text-white transition-colors"
              title="Acessar nossa página no Facebook"
            >
              <Facebook className="w-3.5 h-3.5 fill-current text-[#60A5FA]" />
              Siga no Facebook
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              id="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#2D2926] hover:bg-[#F2EDE6] focus:outline-hidden transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-full bg-[#2D2926] text-[#FDFBF7] flex items-center justify-center font-serif text-xl tracking-wider font-semibold shadow-xs">
              L
            </div>
            <div>
              <span className="font-serif text-2xl tracking-tight text-[#2D2926] font-semibold block leading-none">
                LUMINA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#8C827A] uppercase font-medium">
                Botanicals & Skincare
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#4A443E]">
            <button
              id="nav-link-products"
              onClick={() => scrollToSection('produtos')}
              className="hover:text-[#9A7B66] transition-colors cursor-pointer py-1"
            >
              Catálogo de Cosméticos
            </button>
            <button
              id="nav-link-benefits"
              onClick={() => scrollToSection('beneficios')}
              className="hover:text-[#9A7B66] transition-colors cursor-pointer py-1"
            >
              Fórmulas & Ciência
            </button>
            <button
              id="nav-link-quiz"
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 text-[#7A5F4C] bg-[#F4EFEA] hover:bg-[#EAE3DC] px-3.5 py-1.5 rounded-full transition-all border border-[#DFD7CB] text-xs font-semibold cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9A7B66]" />
              Descubra sua Rotina
            </button>
            <button
              id="nav-link-reviews"
              onClick={() => scrollToSection('depoimentos')}
              className="hover:text-[#9A7B66] transition-colors cursor-pointer py-1"
            >
              Resultados Reais
            </button>
            <button
              id="nav-link-social"
              onClick={() => scrollToSection('redes-sociais')}
              className="hover:text-[#9A7B66] transition-colors cursor-pointer py-1"
            >
              Comunidade
            </button>
            <button
              id="nav-link-faq"
              onClick={() => scrollToSection('faq')}
              className="hover:text-[#9A7B66] transition-colors cursor-pointer py-1"
            >
              Dúvidas
            </button>
          </nav>

          {/* Right Action Icons & Off-Page Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Facebook Direct Icon Button */}
            <a
              id="header-facebook-icon-link"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#1877F2] bg-[#F0F5FF] hover:bg-[#E0ECFF] hover:scale-105 transition-all border border-[#CDE0FF] shadow-2xs"
              title="Visite nossa página no Facebook"
              aria-label="Página do Facebook"
            >
              <Facebook className="w-5 h-5 fill-current" />
            </a>

            {/* Mercado Livre Direct Action Button */}
            <a
              id="header-mercadolivre-cta"
              href={SOCIAL_LINKS.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] px-4 py-2.5 rounded-full font-bold text-xs transition-all duration-200 shadow-xs hover:shadow-md border border-[#E6CE00]"
              title="Acessar catálogo oficial no Mercado Livre"
            >
              <span>Mercado Livre</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#1C1917]" />
            </a>

            {/* Cart Drawer Trigger */}
            <button
              id="header-cart-button"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-[#2D2926] bg-[#F5EFEB] hover:bg-[#EBE3DC] transition-all border border-[#E8E2D9]"
              aria-label="Ver sacola de compras"
              title="Ver sacola de compras"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9A7B66] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#FDFBF7] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D9] bg-[#FDFBF7] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              id="mobile-nav-ml"
              href={SOCIAL_LINKS.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#FFE600] text-[#1C1917] py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs"
            >
              <span>Mercado Livre</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              id="mobile-nav-fb"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#1877F2] text-white py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs"
            >
              <Facebook className="w-3.5 h-3.5 fill-current" />
              <span>Facebook</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="space-y-1 text-sm font-medium text-[#3C3836]">
            <button
              onClick={() => scrollToSection('produtos')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F2EDE6]"
            >
              Catálogo de Produtos
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-[#7A5F4C] font-semibold bg-[#F4EFEA]"
            >
              ✨ Teste de Pele & Rotina Personalizada
            </button>
            <button
              onClick={() => scrollToSection('beneficios')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F2EDE6]"
            >
              Fórmulas Botânicas & Ciência
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F2EDE6]"
            >
              Avaliações de Clientes
            </button>
            <button
              onClick={() => scrollToSection('redes-sociais')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F2EDE6]"
            >
              Redes Sociais & Facebook
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F2EDE6]"
            >
              Perguntas Frequentes
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
