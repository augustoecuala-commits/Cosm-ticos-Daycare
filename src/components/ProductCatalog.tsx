import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { PRODUCTS, SOCIAL_LINKS } from '../data/products';
import { Star, ExternalLink, ShoppingBag, Eye, Search, Filter, Facebook, Sparkles, Truck } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'Todos os Cosméticos' },
    { id: 'facial', label: 'Skincare Facial' },
    { id: 'body', label: 'Cuidados Corporais' },
    { id: 'kits', label: 'Kits & Presentes' },
    { id: 'sun', label: 'Proteção Solar' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="produtos" className="py-16 sm:py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F4EFEA] text-[#7A5F4C] text-xs font-semibold uppercase tracking-wider border border-[#DFD7CB] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9A7B66]" />
            Catálogo Oficial de Cosméticos & Skincare
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D2926] font-normal tracking-tight">
            Fórmulas que respeitam e transformam a sua pele
          </h2>
          <p className="text-[#635B53] text-base sm:text-lg leading-relaxed">
            Selecione seus itens favoritos e finalize com frete rápido e garantia na nossa loja do <strong className="text-[#2D2926] font-semibold">Mercado Livre</strong>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-4">
          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#2D2926] text-[#FDFBF7] shadow-xs'
                    : 'bg-white text-[#5C534B] hover:bg-[#F2EDE6] border border-[#E8E2D9]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Sort controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#E8E2D9] shadow-2xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#8C827A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por ativo (ex: Vitamina C, Ácido Hialurônico)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-[#F9F6F0] border border-[#E8E2D9] rounded-xl focus:outline-hidden focus:border-[#9A7B66] text-[#2D2926]"
              />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs">
              <span className="text-[#7C726A] font-medium whitespace-nowrap">
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </span>
              
              <div className="flex items-center gap-1.5 bg-[#F9F6F0] px-3 py-1.5 rounded-xl border border-[#E8E2D9]">
                <Filter className="w-3.5 h-3.5 text-[#7C726A]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#3C3836] font-medium text-xs focus:outline-hidden cursor-pointer"
                >
                  <option value="featured">Destaques</option>
                  <option value="rating">Mais Bem Avaliados</option>
                  <option value="price-asc">Menor Preço</option>
                  <option value="price-desc">Maior Preço</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E2D9] p-8 space-y-4">
            <p className="text-[#7C726A] text-base">Nenhum produto encontrado com os filtros selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-[#2D2926] text-[#FDFBF7] text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1C1917] transition-colors cursor-pointer"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Area */}
                  <div className="relative aspect-[4/4.2] overflow-hidden bg-[#F2EDE6]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-[#2D2926]/90 text-[#FFE600] text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs shadow-xs">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick View Hover Button */}
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-[#2D2926] rounded-full shadow-md transition-transform hover:scale-110 cursor-pointer"
                      title="Ver detalhes do produto"
                      aria-label={`Ver detalhes de ${product.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-4 sm:p-5 space-y-2.5">
                    
                    {/* Category & Rating */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[11px] font-semibold text-[#8C827A] uppercase tracking-wider">
                        {product.categoryLabel}
                      </span>
                      <div className="flex items-center text-amber-500 font-bold text-xs">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 text-[#2D2926]">{product.rating}</span>
                        <span className="text-[#8C827A] font-normal text-[11px] ml-0.5">({product.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProduct(product)}
                      className="font-serif text-lg font-normal text-[#2D2926] hover:text-[#7A5F4C] transition-colors line-clamp-2 cursor-pointer leading-snug"
                    >
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-[#635B53] text-xs line-clamp-2 leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Active Ingredients Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {product.ingredients.slice(0, 2).map((ing, i) => (
                        <span key={i} className="text-[10px] bg-[#F4EFEA] text-[#5C534B] px-2 py-0.5 rounded-md font-medium border border-[#E8E2D9]">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & Actions */}
                <div className="p-4 sm:p-5 pt-0 border-t border-[#F2EDE6] mt-2 space-y-3">
                  
                  {/* Price info */}
                  <div className="pt-2 flex items-baseline justify-between">
                    <div>
                      <span className="font-serif text-2xl font-bold text-[#2D2926]">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                      {product.originalPrice && (
                        <span className="ml-2 text-xs text-[#8C827A] line-through">
                          R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#2A6E3F] font-semibold bg-[#EBF5EE] px-2 py-0.5 rounded border border-[#CDE5D4]">
                      12x no ML
                    </span>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-1 gap-2">
                    {/* Primary Button: Mercado Livre Link */}
                    <a
                      id={`buy-ml-${product.id}`}
                      href={product.mercadoLivreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 bg-[#FFE600] hover:bg-[#F2DA00] text-[#1C1917] font-bold py-2.5 px-3 rounded-xl text-xs shadow-2xs hover:shadow-xs transition-all group/btn border border-[#E6CE00]"
                      title="Comprar no Mercado Livre com Garantia"
                    >
                      <span>Comprar no Mercado Livre</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#1C1917] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>

                    {/* Secondary: Quick Cart or Details */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="flex-1 flex items-center justify-center gap-1.5 bg-[#F4EFEA] hover:bg-[#EAE3DC] text-[#3C3836] font-semibold py-2 px-3 rounded-xl text-xs transition-colors cursor-pointer border border-[#DFD7CB]"
                        title="Adicionar à sacola"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#7A5F4C]" />
                        <span>Sacola</span>
                      </button>

                      <button
                        onClick={() => onSelectProduct(product)}
                        className="flex items-center justify-center p-2 bg-[#F4EFEA] hover:bg-[#EAE3DC] text-[#5C534B] rounded-xl transition-colors cursor-pointer border border-[#DFD7CB]"
                        title="Ver detalhes completos"
                        aria-label="Ver detalhes"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
