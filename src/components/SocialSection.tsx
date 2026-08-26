import React from 'react';
import { Facebook, ExternalLink, MessageCircle, Heart, Share2, Sparkles, Users, Flame } from 'lucide-react';
import { FACEBOOK_POSTS, SOCIAL_LINKS } from '../data/products';

export const SocialSection: React.FC = () => {
  return (
    <section id="redes-sociais" className="py-20 bg-[#F7F3EE] border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F5FF] text-[#1E40AF] text-xs font-semibold uppercase tracking-wider border border-[#CDE0FF] shadow-2xs">
              <Facebook className="w-3.5 h-3.5 text-[#1877F2] fill-current" />
              <span>Redes Sociais & Comunidade Oficial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2926] font-normal tracking-tight">
              Acompanhe nossa comunidade no Facebook
            </h2>
            <p className="text-[#635B53] text-base leading-relaxed">
              Dicas diárias de skincare, perguntas e respostas ao vivo, tutoriais de rotinas botânicas e cupons exclusivos direto na nossa página do Facebook.
            </p>
          </div>

          <a
            id="social-facebook-main-cta"
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#1565C0] text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-sm transition-all shrink-0 hover:scale-102"
          >
            <Facebook className="w-4 h-4 fill-current" />
            <span>Curtir Página no Facebook</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Community Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] text-[#1877F2] flex items-center justify-center shrink-0 border border-[#DBEAFE]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#2D2926] block font-serif">+45.000</span>
              <span className="text-xs text-[#7C726A]">Membros na Comunidade</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] text-[#E11D48] flex items-center justify-center shrink-0 border border-[#FFE4E6]">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#2D2926] block font-serif">100% Amor</span>
              <span className="text-xs text-[#7C726A]">Avaliações e Troca de Dicas</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#E8E2D9] shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FFFBEB] text-[#D97706] flex items-center justify-center shrink-0 border border-[#FEF3C7]">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#2D2926] block font-serif">Sorteios</span>
              <span className="text-xs text-[#7C726A]">Kits Grátis Todo Mês</span>
            </div>
          </div>
        </div>

        {/* Facebook Feed Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FACEBOOK_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-[#F2EDE6]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#1877F2] text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <Facebook className="w-3 h-3 fill-current" />
                    <span>Facebook Post</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-semibold text-[#8C827A] block">
                    {post.date}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-[#2D2926] leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#635B53] text-xs leading-relaxed line-clamp-3">
                    {post.snippet}
                  </p>
                </div>
              </div>

              {/* Engagement Bar & Link */}
              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F2EDE6] flex items-center justify-between text-xs">
                  <span className="text-[#8C827A] text-[11px]">{post.reactions}</span>
                  <a
                    id={`post-link-${post.id}`}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1877F2] hover:text-[#1565C0] font-bold transition-colors"
                  >
                    <span>Ver no Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
