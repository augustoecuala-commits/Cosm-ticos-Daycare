import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarketplaceBadgeBar } from './components/MarketplaceBadgeBar';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { RoutineQuiz } from './components/RoutineQuiz';
import { Benefits } from './components/Benefits';
import { MercadoLivreHighlight } from './components/MercadoLivreHighlight';
import { Testimonials } from './components/Testimonials';
import { SocialSection } from './components/SocialSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingActions } from './components/FloatingActions';
import { Product, CartItem } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToProducts = () => {
    const el = document.getElementById('produtos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#2D2926] antialiased selection:bg-[#EADBCE] selection:text-[#2D2926]">
      
      {/* Main Navigation Header */}
      <Header
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onExploreProducts={scrollToProducts}
        />

        {/* Featured Marketplace & Social Community Bar */}
        <MarketplaceBadgeBar />

        {/* Product Catalog Grid */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* Science & Clean Beauty Benefits */}
        <Benefits />

        {/* Mercado Livre Official Security & Delivery Showcase */}
        <MercadoLivreHighlight />

        {/* Verified Reviews & Before & After Transformation */}
        <Testimonials />

        {/* Dedicated Facebook & Social Network Hub */}
        <SocialSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Modals & Slide-over Drawers */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <RoutineQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onSelectProduct={(product) => {
          setIsQuizOpen(false);
          setSelectedProduct(product);
        }}
        onAddToCart={(product) => {
          handleAddToCart(product);
        }}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
