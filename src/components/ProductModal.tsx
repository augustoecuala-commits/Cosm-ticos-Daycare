import React from 'react';
import { X, Star, ExternalLink, ShieldCheck, Truck, Droplets, Leaf, Sparkles, Check, ShoppingBag, Facebook, Share2 } from 'lucide-react';
import { Product } from '../types';
import { SOCIAL_LINKS } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto bg-[#171513]/70 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FDFBF7] rounded-3xl shadow-2xl border border-[#E8E2D9] overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          id="modal-close-button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#2D2926]/10 hover:bg-[#2D2926]/20 text-[#2D2926] transition-colors cursor-pointer"
          aria-label="Fechar detalhes do produto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Product Imagery & Badges */}
          <div className="md:col-span-5 bg-[#F7F3EE] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E2D9]">
            <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#EAE3D9] border border-[#DFD7CB] shadow-xs mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 bg-[#2D2926]/90 text-[#E5BF9E] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs border border-[#484039]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Micro Badges */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#635B53]">
              <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-[#E8E2D9]">
                <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Vegano</span>
              </div>
              <div className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-[#E8E2D9]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Dermatológico</span>
              </div>
            </div>

            {/* Social Share & Discussion Bar */}
            <div className="mt-4 pt-4 border-t border-[#E8E2D9] flex items-center justify-between text-xs">
              <span className="text-[#8C827A] font-medium">Fale sobre este produto:</span>
              <a
                href={product.facebookPostUrl || SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#1877F2] hover:text-[#1565C0] font-semibold"
                title="Comentar na página do Facebook"
              >
                <Facebook className="w-3.5 h-3.5 fill-current" />
                Ver no Facebook
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Detailed Specs & Mercado Livre Buy CTA */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#7A5F4C]">
                  {product.categoryLabel} • {product.volume}
                </span>
                <div className="flex items-center text-amber-500 text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="ml-1 text-[#2D2926]">{product.rating}</span>
                  <span className="text-[#8C827A] font-normal ml-1">({product.reviewsCount} opiniões)</span>
                </div>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2D2926] font-normal leading-tight">
                {product.name}
              </h2>
              <p className="text-[#635B53] text-sm mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Box with Mercado Livre conditions */}
            <div className="p-4 rounded-2xl bg-[#F7F3EE] border border-[#E8E2D9]">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#2D2926]">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#8C827A] line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#7A5F4C] font-medium mt-1 flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#9A7B66]" />
                Em até 12x no Mercado Livre com envio rápido para todo o Brasil
              </p>
            </div>

            {/* Benefits list */}
            <div>
              <h4 className="text-xs font-bold text-[#2D2926] uppercase tracking-wider mb-2.5">
                Benefícios Comprovados
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs text-[#524B44]">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#EBF5EE] text-[#2A6E3F] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ingredients & How to Use */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E8E2D9]">
                <span className="font-bold text-[#2D2926] block mb-1">Ativos Principais</span>
                <p className="text-[#635B53] leading-snug">
                  {product.ingredients.join(', ')}
                </p>
              </div>
              <div className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E8E2D9]">
                <span className="font-bold text-[#2D2926] block mb-1">Como Usar</span>
                <p className="text-[#635B53] leading-snug">
                  {product.howToUse}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                id={`modal-ml-buy-${product.id}`}
                href={product.mercadoLivreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold py-3.5 px-6 rounded-xl shadow-xs transition-all text-sm group border border-[#E6CE00]"
              >
                <span>Comprar no Mercado Livre</span>
                <ExternalLink className="w-4 h-4 text-[#1C1917] group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                id={`modal-add-cart-${product.id}`}
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#2D2926] hover:bg-[#1C1917] text-[#EDE7E1] font-semibold py-3.5 px-5 rounded-xl shadow-xs transition-all text-sm cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Adicionar à Sacola</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
