import React, { useState, useEffect } from 'react';
import { ExternalLink, Facebook, MessageCircle, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/products';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#1C1917]/90 hover:bg-[#1C1917] text-[#EDE7E1] flex items-center justify-center shadow-lg backdrop-blur-xs transition-all hover:-translate-y-0.5 cursor-pointer border border-[#484039]"
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Facebook Quick Button */}
      <a
        id="floating-facebook-btn"
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white font-bold px-3.5 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 group text-xs border border-blue-400/40"
        title="Acessar página no Facebook"
      >
        <Facebook className="w-4 h-4 fill-current" />
        <span className="hidden sm:inline">Facebook</span>
      </a>

      {/* Floating Mercado Livre Official Store Button */}
      <a
        id="floating-mercadolivre-btn"
        href={SOCIAL_LINKS.mercadoLivre}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105 border border-[#E6CE00] text-xs animate-pulse hover:animate-none"
        title="Ir para a Loja Oficial no Mercado Livre"
      >
        <span className="w-6 h-6 rounded-full bg-[#1C1917] text-[#FFE600] flex items-center justify-center text-[10px] font-black">
          ML
        </span>
        <span className="font-bold tracking-tight">Loja Mercado Livre</span>
        <ExternalLink className="w-3.5 h-3.5 text-[#1C1917]" />
      </a>

    </div>
  );
};
