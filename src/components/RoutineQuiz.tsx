import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, RotateCcw, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { PRODUCTS, SOCIAL_LINKS } from '../data/products';
import { Product } from '../types';

interface RoutineQuizProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const RoutineQuiz: React.FC<RoutineQuizProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onAddToCart
}) => {
  const [step, setStep] = useState<number>(1);
  const [skinType, setSkinType] = useState<string>('');
  const [concern, setConcern] = useState<string>('');
  const [preference, setPreference] = useState<string>('');

  if (!isOpen) return null;

  const resetQuiz = () => {
    setStep(1);
    setSkinType('');
    setConcern('');
    setPreference('');
  };

  // Logic to recommend routine products based on choices
  const getRecommendedProducts = (): Product[] => {
    if (concern === 'manchas' || concern === 'viço') {
      return [PRODUCTS[0], PRODUCTS[1], PRODUCTS[6]]; // Vit C, Gel Limpeza, Protetor
    }
    if (concern === 'linhas' || skinType === 'madura') {
      return [PRODUCTS[2], PRODUCTS[0], PRODUCTS[5]]; // Bakuchiol, Vit C, Kit
    }
    if (skinType === 'oleosa' || concern === 'poros') {
      return [PRODUCTS[1], PRODUCTS[0], PRODUCTS[6]]; // Gel Limpeza, Vit C, Protetor
    }
    if (skinType === 'seca' || concern === 'hidratacao') {
      return [PRODUCTS[3], PRODUCTS[2], PRODUCTS[7]]; // Manteiga, Bakuchiol, Balm
    }
    return [PRODUCTS[5], PRODUCTS[0], PRODUCTS[1]]; // Kit Completo por padrão
  };

  const recommendedList = getRecommendedProducts();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#171513]/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#E8E2D9] overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#1C1917] text-[#EDE7E1] p-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#3A342F] text-[#E5BF9E] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal">
                Consultor de Rotina Personalizada
              </h3>
              <p className="text-[#A89F96] text-xs">
                Descubra os ativos botânicos ideais para sua pele em 3 perguntas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#2E2A26] text-[#A89F96] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Steps */}
        <div className="p-6 sm:p-8">
          
          {/* Progress Bar */}
          <div className="w-full bg-[#EFE9E1] h-1.5 rounded-full mb-6 overflow-hidden">
            <div
              className="bg-[#9A7B66] h-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>

          {/* STEP 1: Skin Type */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A5F4C]">
                Passo 1 de 3
              </span>
              <h4 className="font-serif text-2xl text-[#2D2926] font-normal">
                Como você sente a sua pele na maior parte do dia?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'oleosa', title: 'Oleosa ou com Brilho', desc: 'Poros aparentes e tendência a oleosidade na zona T' },
                  { id: 'mista', title: 'Mista / Equilibrada', desc: 'Zona T com leve brilho e bochechas normais ou secas' },
                  { id: 'seca', title: 'Seca ou Ressecada', desc: 'Sensação de repuxamento e necessidade de hidratação intensa' },
                  { id: 'madura', title: 'Madura / Com Linhas', desc: 'Busca firmeza, elasticidade e renovação celular' },
                  { id: 'sensivel', title: 'Sensível ou Reativa', desc: 'Facilidade para vermelhidão e sensibilidade a produtos' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSkinType(type.id);
                      setStep(2);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all cursor-pointer ${
                      skinType === type.id
                        ? 'border-[#9A7B66] bg-[#F4EFEA] shadow-xs ring-1 ring-[#9A7B66]'
                        : 'border-[#E8E2D9] bg-white hover:border-[#C49B7A]'
                    }`}
                  >
                    <p className="font-bold text-[#2D2926] text-sm">{type.title}</p>
                    <p className="text-[#635B53] text-xs mt-1">{type.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Concern */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A5F4C]">
                Passo 2 de 3
              </span>
              <h4 className="font-serif text-2xl text-[#2D2926] font-normal">
                Qual é a sua principal prioridade de cuidado hoje?
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { id: 'manchas', title: 'Manchas & Tom Desuniforme', desc: 'Marcas de sol, melasma ou marcas pós-acne' },
                  { id: 'viço', title: 'Falta de Viço & Luminosidade', desc: 'Pele opaca, cansada e com sinais de poluição' },
                  { id: 'linhas', title: 'Linhas Finas & Firmeza', desc: 'Atenuar rugas e estimular o colágeno' },
                  { id: 'poros', title: 'Controle de Oleosidade & Poros', desc: 'Desobstruir poros e matificar a pele' },
                  { id: 'hidratacao', title: 'Nutrição & Reparação Profunda', desc: 'Recuperar a barreira e maciez da pele' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      setConcern(c.id);
                      setStep(3);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all cursor-pointer ${
                      concern === c.id
                        ? 'border-[#9A7B66] bg-[#F4EFEA] shadow-xs ring-1 ring-[#9A7B66]'
                        : 'border-[#E8E2D9] bg-white hover:border-[#C49B7A]'
                    }`}
                  >
                    <p className="font-bold text-[#2D2926] text-sm">{c.title}</p>
                    <p className="text-[#635B53] text-xs mt-1">{c.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Lifestyle / Step Preference */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7A5F4C]">
                Passo 3 de 3
              </span>
              <h4 className="font-serif text-2xl text-[#2D2926] font-normal">
                Quanto tempo você gosta de dedicar à sua rotina?
              </h4>

              <div className="grid grid-cols-1 gap-3 pt-2">
                {[
                  { id: 'rapida', title: 'Rotina Essencial (2 a 3 minutos)', desc: 'Limpeza prática + Sérum de alta performance + Proteção solar' },
                  { id: 'completa', title: 'Rotina Completa Spa em Casa (5 a 10 minutos)', desc: 'Passo a passo com renovação noturna e hidratação rica' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPreference(p.id);
                      setStep(4);
                    }}
                    className={`p-4 text-left rounded-2xl border transition-all cursor-pointer ${
                      preference === p.id
                        ? 'border-[#9A7B66] bg-[#F4EFEA] shadow-xs ring-1 ring-[#9A7B66]'
                        : 'border-[#E8E2D9] bg-white hover:border-[#C49B7A]'
                    }`}
                  >
                    <p className="font-bold text-[#2D2926] text-sm">{p.title}</p>
                    <p className="text-[#635B53] text-xs mt-1">{p.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: Results & Custom Bundle */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2A6E3F] bg-[#EBF5EE] px-3.5 py-1 rounded-full border border-[#CDE5D4]">
                  ✓ Diagnóstico Concluído
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl text-[#2D2926] font-normal pt-2">
                  Sua Rotina Botânica Recomendada
                </h4>
                <p className="text-[#635B53] text-xs sm:text-sm">
                  Fórmula selecionada para pele <strong>{skinType}</strong> com foco em <strong>{concern}</strong>.
                </p>
              </div>

              {/* Recommended items list */}
              <div className="space-y-3">
                {recommendedList.map((prod, idx) => (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#E8E2D9] shadow-2xs gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#F7F3EE] shrink-0">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5F4C]">
                          Passo {idx + 1} • {prod.categoryLabel}
                        </span>
                        <h5 className="font-serif text-sm font-semibold text-[#2D2926] line-clamp-1">
                          {prod.name}
                        </h5>
                        <p className="text-xs font-bold text-[#2D2926] mt-0.5">
                          R$ {prod.price.toFixed(2).replace('.', ',')}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <a
                        href={prod.mercadoLivreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] p-2 rounded-xl text-xs font-bold transition-colors border border-[#E6CE00]"
                        title="Comprar no Mercado Livre"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => {
                          onAddToCart(prod);
                        }}
                        className="bg-[#2D2926] hover:bg-[#1C1917] text-white p-2 rounded-xl text-xs transition-colors cursor-pointer"
                        title="Adicionar à sacola"
                      >
                        + Sacola
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mercado Livre Direct Combo Box */}
              <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-[#92400E] block">
                    🎁 Leve o Kit Completo com Frete Grátis
                  </span>
                  <p className="text-[11px] text-[#A16207]">
                    Disponível no Mercado Livre com envio expresso e parcelamento em 12x.
                  </p>
                </div>
                <a
                  id="quiz-bundle-ml-btn"
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold px-4 py-2.5 rounded-xl text-xs shadow-xs border border-[#E6CE00]"
                >
                  <span>Ver Oferta no Mercado Livre</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Reset Quiz button */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-1 text-xs text-[#8C827A] hover:text-[#2D2926] font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Refazer Teste
                </button>
                <button
                  onClick={onClose}
                  className="text-xs bg-[#EFE9E1] hover:bg-[#E3DC83] text-[#2D2926] font-semibold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
