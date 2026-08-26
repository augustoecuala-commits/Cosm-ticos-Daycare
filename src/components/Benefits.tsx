import React from 'react';
import { Leaf, ShieldCheck, Sparkles, Droplets, HeartHandshake, Award } from 'lucide-react';

export const Benefits: React.FC = () => {
  const pillars = [
    {
      icon: Leaf,
      title: '100% Vegano & Cruelty-Free',
      description: 'Zero ingredientes de origem animal e rigorosamente sem testes em animais em nenhuma etapa da cadeia produtiva.'
    },
    {
      icon: Sparkles,
      title: 'Biotecnologia Botânica',
      description: 'Ativos vegetais de alta pureza (Bakuchiol, Rosa Mosqueta, Cupuaçu) combinados a moléculas clínicas como Ácido Hialurônico e Niacinamida.'
    },
    {
      icon: ShieldCheck,
      title: 'Dermatologicamente Seguro',
      description: 'Fórmulas hipoalergênicas, livres de parabenos, petrolatos, silicones pesados e fragrâncias sintéticas agressivas.'
    },
    {
      icon: Award,
      title: 'Resultados Clínicos Reais',
      description: 'Testes de eficácia comprovam hidratação por 48 horas e redução visível de manchas e linhas finas a partir do 14º dia de uso.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-[#F7F3EE] border-y border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7A5F4C] bg-[#F4EFEA] px-3.5 py-1.5 rounded-full border border-[#DFD7CB] shadow-2xs">
            Compromisso Clean Beauty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D2926] font-normal tracking-tight">
            Ciência limpa para quem busca resultados de verdade
          </h2>
          <p className="text-[#635B53] text-base sm:text-lg leading-relaxed">
            Desenvolvemos cosméticos inteligentes que nutrem a barreira cutânea sem agredir o meio ambiente.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#E8E2D9] shadow-2xs hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F5EFEB] border border-[#DFD7CB] text-[#7A5F4C] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#2D2926]">
                    {pillar.title}
                  </h3>
                  <p className="text-[#635B53] text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                
                <div className="pt-2 flex items-center gap-1.5 text-xs text-[#7A5F4C] font-semibold">
                  <span>Padrão Lumina Labs</span>
                  <span className="text-amber-500">★</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
