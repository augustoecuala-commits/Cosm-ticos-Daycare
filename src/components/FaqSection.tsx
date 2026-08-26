import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';
import { FAQS, SOCIAL_LINKS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] text-[#7A5F4C] text-xs font-semibold uppercase tracking-wider border border-[#DFD7CB] shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#9A7B66]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2926] font-normal tracking-tight">
            Perguntas Frequentes sobre Cosméticos & Envio
          </h2>
          <p className="text-[#635B53] text-sm sm:text-base">
            Tudo sobre nossa loja no Mercado Livre, fórmulas, prazos de entrega e redes sociais.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E8E2D9] overflow-hidden shadow-2xs transition-all"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-medium text-[#2D2926] hover:bg-[#FAF6F0] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C827A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#7A5F4C]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#635B53] leading-relaxed border-t border-[#F2EDE6] bg-[#FAF7F2]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact & Facebook Help */}
        <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-[#F7F3EE] border border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[#2D2926] text-sm">Ainda tem alguma dúvida?</h4>
            <p className="text-xs text-[#635B53] mt-0.5">
              Nossa equipe de consultoras de beleza atende diretamente pelo Facebook ou WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              id="faq-contact-facebook"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#1877F2] hover:bg-[#1565C0] text-white font-semibold px-4 py-2.5 rounded-xl text-xs shadow-xs transition-colors"
            >
              <span>Mensagem no Facebook</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
