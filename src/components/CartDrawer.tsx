import React from 'react';
import { X, Trash2, Plus, Minus, ExternalLink, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { SOCIAL_LINKS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const checkoutMessage = encodeURIComponent(
    `Olá! Gostaria de finalizar o pedido Lumina:\n${cartItems
      .map(
        (i) =>
          `• ${i.quantity}x ${i.product.name} (R$ ${(i.product.price * i.quantity).toFixed(2)})`
      )
      .join('\n')}\nTotal: R$ ${total.toFixed(2)}\nGostaria do link de pagamento no Mercado Livre / Pix!`
  );

  const whatsappCheckoutUrl = `https://wa.me/5511999998888?text=${checkoutMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-50 shadow-2xl border-l border-stone-200 flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-[#1C1917] text-[#EDE7E1] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#E5BF9E]" />
              <div>
                <h3 className="font-serif text-lg font-normal">Sua Sacola de Beleza</h3>
                <p className="text-[#A89F96] text-xs">{totalItems} item(s) selecionado(s)</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#2E2A26] text-[#A89F96] hover:text-[#EDE7E1] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FDFBF7]">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFE9E1] text-[#8C827A] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg text-[#2D2926]">Sua sacola está vazia</h4>
                <p className="text-xs text-[#635B53] max-w-xs mx-auto">
                  Explore nossos cosméticos e adicione seus favoritos para garantir frete rápido no Mercado Livre.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#2D2926] text-white px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#1C1917] transition-colors cursor-pointer"
                >
                  Explorar Cosméticos
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 bg-white p-3.5 rounded-2xl border border-[#E8E2D9] shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-[#F7F3EE] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <h5 className="font-serif text-xs font-semibold text-[#2D2926] line-clamp-1">
                        {item.product.name}
                      </h5>
                      <span className="text-[10px] text-[#8C827A]">{item.product.volume}</span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-[#2D2926]">
                        R$ {(item.product.price * item.quantity).toFixed(2).replace('.', ',')}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#E8E2D9] rounded-lg bg-[#FAF7F2]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-[#635B53] hover:text-[#2D2926] cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2D2926]">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-[#635B53] hover:text-[#2D2926] cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="text-[#8C827A] hover:text-rose-600 p-1 transition-colors cursor-pointer"
                        title="Remover produto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Actions */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#E8E2D9] space-y-4">
              
              {/* Trust Badge */}
              <div className="flex items-center justify-between text-[11px] text-[#635B53] bg-[#FAF7F2] p-2.5 rounded-xl border border-[#E8E2D9]">
                <span className="flex items-center gap-1 text-[#8C6D1F] font-semibold">
                  <Truck className="w-3.5 h-3.5" /> Mercado Envios Full
                </span>
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" /> Compra Garantida
                </span>
              </div>

              {/* Total calculation */}
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#8C827A] font-medium">Subtotal Estimado</span>
                <span className="font-serif text-2xl font-bold text-[#2D2926]">
                  R$ {total.toFixed(2).replace('.', ',')}
                </span>
              </div>

              {/* Checkout options */}
              <div className="space-y-2">
                {/* Direct Mercado Livre Store Button */}
                <a
                  id="cart-checkout-mercadolivre"
                  href={SOCIAL_LINKS.mercadoLivre}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold py-3.5 px-4 rounded-xl text-xs shadow-xs transition-all group border border-[#E6CE00]"
                >
                  <span>Finalizar Compra no Mercado Livre</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>

                {/* Secondary WhatsApp Assisted Checkout */}
                <a
                  id="cart-checkout-whatsapp"
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#2D2926] hover:bg-[#1C1917] text-white font-semibold py-3 px-4 rounded-xl text-xs transition-colors"
                >
                  <span>Finalizar com Consultora no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-[#8C827A] hover:text-rose-600 transition-colors cursor-pointer"
                >
                  Esvaziar Sacola
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
