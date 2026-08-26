import { Product, Review } from '../types';

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/photo/?fbid=1491144936390658&set=pcb.1491144966390655',
  mercadoLivre: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
  mercadoLivreLojaOficial: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
  instagram: 'https://www.instagram.com/luminaskincare',
  whatsapp: 'https://wa.me/5511999998888?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20produtos%20Lumina',
};

export const PRODUCTS: Product[] = [
  {
    id: 'serum-vit-c-glow',
    name: 'Sérum Iluminador Vitamina C 15% + Ácido Ferúlico',
    tagline: 'Uniformiza o tom, clareia manchas e estimula colágeno com ação antioxidante 24h.',
    category: 'facial',
    categoryLabel: 'Skincare Facial',
    price: 119.90,
    originalPrice: 159.90,
    rating: 4.9,
    reviewsCount: 384,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1608248597359-00f73fce850c?auto=format&fit=crop&w=800&q=80',
    badge: 'Mais Vendido no Mercado Livre',
    description: 'Fórmula de alta potência com Vitamina C pura estabilizada a 15%, enriquecida com Ácido Ferúlico e Vitamina E. Proporciona viço instantâneo, protege contra poluição e reduz marcas solares em 14 dias.',
    volume: '30 ml',
    skinType: ['Todas', 'Mista', 'Oleosa', 'Normal'],
    benefits: [
      'Clareia manchas e uniformiza a tonalidade',
      'Neutraliza radicais livres e previne envelhecimento precoce',
      'Textura aquosa leve de rápida absorção, sem resíduo oleoso',
      'Dermatologicamente testado e não comedogênico'
    ],
    ingredients: ['Vitamina C Pura (Ascorbic Acid 15%)', 'Ácido Ferúlico 0.5%', 'Vitamina E (Tocoferol)', 'Ácido Hialurônico Botânico'],
    howToUse: 'Aplique 4 a 5 gotas pela manhã sobre a pele limpa e seca antes do hidratante e protetor solar.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    facebookPostUrl: 'https://www.facebook.com/photo/?fbid=1491144936390658&set=pcb.1491144966390655',
    inStock: true,
    featured: true
  },
  {
    id: 'gel-limpeza-botanico',
    name: 'Gel de Limpeza Purificante com Niacinamida & Chá Verde',
    tagline: 'Limpeza profunda sem ressecar, controla a oleosidade e desobstrui poros.',
    category: 'facial',
    categoryLabel: 'Skincare Facial',
    price: 64.90,
    originalPrice: 82.00,
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    badge: 'Envio Full Mercado Livre',
    description: 'Gel micelar facial enriquecido com extrato orgânico de Chá Verde, Niacinamida 3% e Zinco PCA. Remove 99% das impurezas e resíduos de maquiagem preservando a barreira cutânea.',
    volume: '200 ml',
    skinType: ['Oleosa', 'Mista', 'Acneica', 'Sensível'],
    benefits: [
      'Controla o brilho excessivo ao longo do dia',
      'Desobstrui os poros e minimiza cravos',
      'Fórmula com pH equilibrado que não repuxa a pele',
      'Livre de sulfatos agressivos, parabenos e fragrâncias artificiais'
    ],
    ingredients: ['Niacinamida 3%', 'Extrato de Chá Verde Orgânico', 'Zinco PCA', 'Glicerina Vegetal'],
    howToUse: 'Massageie suavemente sobre o rosto úmido em movimentos circulares pela manhã e à noite. Enxágue com água morna ou fria.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    inStock: true,
    featured: false
  },
  {
    id: 'creme-noturno-retinol',
    name: 'Elixir Noturno Renovador com Bio-Retinol & Rosa Mosqueta',
    tagline: 'Renovação celular intensiva, atenua linhas finas e devolve a firmeza durante o sono.',
    category: 'facial',
    categoryLabel: 'Skincare Facial',
    price: 139.90,
    originalPrice: 189.90,
    rating: 5.0,
    reviewsCount: 168,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=800&q=80',
    badge: 'Destaque Beleza & Bem-Estar',
    description: 'Tratamento regenerador noturno com Bakuchiol (Bio-Retinol vegetal seguro para peles sensíveis) e Óleo Prensado a Frio de Rosa Mosqueta da Patagônia.',
    volume: '45 g',
    skinType: ['Madura', 'Seca', 'Normal', 'Com linhas de expressão'],
    benefits: [
      'Estimula a regeneração celular sem causar descamação ou sensibilidade',
      'Melhora a elasticidade e textura da pele em 21 dias',
      'Nutrição profunda com toque aveludado e aroma relaxante de lavanda',
      'Reduz a aparência de poros dilatados e linhas'
    ],
    ingredients: ['Bakuchiol 1% (Bio-Retinol)', 'Óleo de Rosa Mosqueta 100% Puro', 'Ceramidas Vegetais', 'Esqualano de Oliva'],
    howToUse: 'Aplique 3 a 4 gotas no rosto e pescoço à noite, com movimentos ascendentes após a higienização.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    facebookPostUrl: 'https://www.facebook.com/photo/?fbid=1491144936390658&set=pcb.1491144966390655',
    inStock: true,
    featured: true
  },
  {
    id: 'manteiga-corporal-cupuacu',
    name: 'Manteiga Corporal Nutritiva Cupuaçu & Castanha do Brasil',
    tagline: 'Hidratação profunda 48h para áreas ressecadas com toque seco e perfume floral aconchegante.',
    category: 'body',
    categoryLabel: 'Cuidados Corporais',
    price: 79.90,
    originalPrice: 99.00,
    rating: 4.9,
    reviewsCount: 312,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    badge: '100% Vegano',
    description: 'Enriquecida com manteiga virgem de Cupuaçu amazônica e óleo de Castanha-do-Pará. Restaura a barreira protetora da pele de cotovelos, pernas e colo.',
    volume: '250 g',
    skinType: ['Seca', 'Extra Seca', 'Normal'],
    benefits: [
      'Ação ultra-hidratante de 48 horas clinicamente comprovada',
      'Toque aveludado sem sensação pegajosa',
      'Previne estrias e ressecamento severo',
      'Fragrância hipoalergênica suave e envolvente'
    ],
    ingredients: ['Manteiga de Cupuaçu Pura', 'Óleo de Castanha do Brasil', 'Manteiga de Karité', 'Vitamina E'],
    howToUse: 'Espalhe pelo corpo todo após o banho com a pele levemente úmida para potencializar a retenção hídrica.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    inStock: true,
    featured: false
  },
  {
    id: 'oleo-bifasico-cabelo-corpo',
    name: 'Óleo Bifásico Iluminador Corporal & Capilar Glow Dourado',
    tagline: 'Partículas minerais que realçam o bronzeado e hidratam sem pesar.',
    category: 'body',
    categoryLabel: 'Cuidados Corporais',
    price: 89.90,
    originalPrice: 110.00,
    rating: 4.8,
    reviewsCount: 147,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    badge: 'Edição Especial Glow',
    description: 'Fórmula bifásica com micas minerais sustentáveis, óleo de Macadâmia e Argan. Deixa a pele radiante com reflexos dourados e fios de cabelo selados e perfumados.',
    volume: '120 ml',
    skinType: ['Todas'],
    benefits: [
      'Efeito acetinado iluminador imediato',
      'Nutre e previne pontas duplas nos cabelos',
      'Fragrância marcante com notas de baunilha e jasmim',
      'Secagem ultra rápida'
    ],
    ingredients: ['Óleo de Macadâmia', 'Óleo de Argan', 'Micas Minerais Naturais', 'Extrato de Baunilha Real'],
    howToUse: 'Agite vigorosamente antes de usar. Borrife nas pernas, braços e colo, ou espalhe gotas nas pontas dos cabelos.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    inStock: true,
    featured: false
  },
  {
    id: 'kit-rotina-completa',
    name: 'Kit Rotina Completa Skincare Glow & Renovação (4 Passos)',
    tagline: 'Limpeza + Sérum Iluminador + Hidratante Preenchedor + Elixir Noturno com 35% OFF no Mercado Livre.',
    category: 'kits',
    categoryLabel: 'Kits & Presentes',
    price: 269.90,
    originalPrice: 415.00,
    rating: 5.0,
    reviewsCount: 429,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    badge: 'Melhor Custo-Benefício | Frete Grátis ML',
    description: 'A solução definitiva para transformar a saúde da sua pele. Inclui o Gel Purificante (200ml), Sérum Vitamina C 15% (30ml), Creme Hidratante Hialurônico (50g) e o Elixir de Bakuchiol (45g) em uma nécessaire exclusiva.',
    volume: 'Kit 4 Produtos + Nécessaire',
    skinType: ['Todas', 'Mista', 'Seca', 'Oleosa'],
    benefits: [
      'Rotina completa matutina e noturna em 4 passos simples',
      'Economia de mais de R$ 145 comparado à compra individual',
      'Acompanha guia impresso de cronograma facial passo a passo',
      'Embalagem para presente sustentável e reutilizável'
    ],
    ingredients: ['Vitamina C 15%', 'Bakuchiol 1%', 'Niacinamida', 'Ácido Hialurônico Triplo Peso Molecular'],
    howToUse: 'Passo 1: Gel Limpeza -> Passo 2: Sérum Glow (manhã) -> Passo 3: Hidratante -> Passo 4: Elixir Bakuchiol (noite).',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    facebookPostUrl: 'https://www.facebook.com/photo/?fbid=1491144936390658&set=pcb.1491144966390655',
    inStock: true,
    featured: true
  },
  {
    id: 'protetor-solar-fluido-fps60',
    name: 'Fluido Protetor Solar Mineral FPS 60 com Toque Seco Invisível',
    tagline: 'Filtros 100% físicos com óxido de zinco não-nano, resistente à água e com proteção luz azul.',
    category: 'sun',
    categoryLabel: 'Proteção Solar',
    price: 94.90,
    originalPrice: 119.00,
    rating: 4.9,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    badge: 'FPS 60 + UVA/UVB',
    description: 'Fórmula fluida mineral de alta tecnologia. Não deixa resíduo esbranquiçado (zero white cast), matifica o rosto o dia todo e previne o fotoenvelhecimento.',
    volume: '50 ml',
    skinType: ['Sensível', 'Oleosa', 'Mista', 'Normal', 'Com Melasma'],
    benefits: [
      'Proteção de amplo espectro FPS 60 / PPD 24 contra raios UVA/UVB e luz visível',
      'Acabamento mate aveludado que serve como primer de maquiagem',
      'Fórmula amiga dos corais marinhos (Reef Safe)',
      'Não arde os olhos nem escorre com suor'
    ],
    ingredients: ['Óxido de Zinco 18%', 'Extrato de Physalis Anti-Luz Azul', 'Vitamina E', 'Bisabolol Calmante'],
    howToUse: 'Aplique abundantemente sobre a pele 15 minutos antes da exposição solar. Reaplique a cada 2-3 horas.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    inStock: true,
    featured: false
  },
  {
    id: 'lip-balm-hidratante-acido-hialuronico',
    name: 'Balm Labial Reparador Volumizador Ácido Hialurônico & Menta',
    tagline: 'Lábios macios, preenchidos e regenerados contra o ressecamento diário.',
    category: 'facial',
    categoryLabel: 'Skincare Facial',
    price: 39.90,
    originalPrice: 49.90,
    rating: 4.8,
    reviewsCount: 182,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    badge: 'Queridinho no Facebook',
    description: 'Tratamento labial emoliente com microesferas de Ácido Hialurônico e Manteiga de Manga. Nutre instantaneamente e proporciona leve efeito plumping natural.',
    volume: '15 g',
    skinType: ['Todas'],
    benefits: [
      'Cicatrização rápida de lábios rachados',
      'Sensação refrescante suave com extrato de hortelã',
      'Brilho natural saudável sem ficar pegajoso',
      'Embalagem prática para levar na bolsa'
    ],
    ingredients: ['Ácido Hialurônico Preenchedor', 'Manteiga de Manga', 'Óleo de Jojoba', 'Extrato de Menta Piperita'],
    howToUse: 'Aplique sobre os lábios sempre que sentir necessidade ou como base hidratante antes do batom.',
    mercadoLivreUrl: 'https://www.mercadolivre.com.br/dove-original-antitranspirante-em-aerossol-150-ml/p/MLB17017707?pdp_filters=item_id%3AMLB3689215435',
    facebookPostUrl: 'https://www.facebook.com/photo/?fbid=1491144936390658&set=pcb.1491144966390655',
    inStock: true,
    featured: false
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Mariana Silveira',
    location: 'São Paulo, SP',
    rating: 5,
    comment: 'Comprei pelo Mercado Livre e chegou no dia seguinte com o Envio Full! O Sérum de Vitamina C mudou o aspecto da minha pele em 10 dias. O viço é impressionante!',
    productName: 'Sérum Iluminador Vitamina C 15%',
    verified: true,
    date: 'Há 3 dias',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-2',
    author: 'Camila Fernandes',
    location: 'Belo Horizonte, MG',
    rating: 5,
    comment: 'Acompanho a página no Facebook há meses e finalmente comprei o Kit Rotina Completa. Vale cada centavo! Texturas levíssimas e fragrância natural maravilhosa.',
    productName: 'Kit Rotina Completa Skincare',
    verified: true,
    date: 'Há 1 semana',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-3',
    author: 'Juliana Castro',
    location: 'Curitiba, PR',
    rating: 5,
    comment: 'Minha pele é super sensível e o Elixir de Bakuchiol foi a salvação. Não tive nenhuma irritação e minhas linhas ao redor dos olhos já suavizaram bastante.',
    productName: 'Elixir Noturno Renovador',
    verified: true,
    date: 'Há 2 semanas',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'rev-4',
    author: 'Renata Albuquerque',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    comment: 'A Manteiga de Cupuaçu salvou minhas pernas no inverno. E poder comprar em 12x no Mercado Livre com garantia de entrega me deu total segurança.',
    productName: 'Manteiga Corporal Nutritiva Cupuaçu',
    verified: true,
    date: 'Há 3 semanas',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80'
  }
];

export const FACEBOOK_POSTS = [
  {
    id: 'fb-1',
    title: 'Guia Definitivo: Como aplicar Vitamina C sem oxidar e obter o viço máximo 🌿',
    snippet: 'Veja o passo a passo dermatológico para potencializar sua rotina matinal e tirar suas dúvidas nos comentários com nossa comunidade!',
    date: 'Publicado ontem no Facebook',
    reactions: '1.4k curtidas · 238 comentários',
    link: SOCIAL_LINKS.facebook,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fb-2',
    title: 'Bakuchiol vs Retinol Tradicional: Qual o melhor para peles brasileiras?',
    snippet: 'Descubra por que o Bio-Retinol vegetal virou o queridinho dos dermatologistas para rejuvenescimento sem descamação.',
    date: 'Publicado há 3 dias no Facebook',
    reactions: '980 curtidas · 142 comentários',
    link: SOCIAL_LINKS.facebook,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fb-3',
    title: 'Sorteio Mensal da Comunidade Lumina no Facebook 🎁',
    snippet: 'Participe do nosso grupo oficial para concorrer todo mês a um Kit Completo de Skincare e receber cupons exclusivos do Mercado Livre.',
    date: 'Fixado na Página Oficial',
    reactions: '2.8k curtidas · 890 comentários',
    link: SOCIAL_LINKS.facebook,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
  }
];

export const FAQS = [
  {
    question: 'Como faço para comprar com segurança no Mercado Livre?',
    answer: 'Nossa loja é certificada como Loja Oficial no Mercado Livre (MercadoLíder Platinum). Ao clicar em "Comprar no Mercado Livre", você é direcionado diretamente para a página oficial do produto, com garantia de entrega do Mercado Pago, parcelamento em até 12x e envio Full expresso.'
  },
  {
    question: 'Os produtos são liberados para todos os tipos de pele?',
    answer: 'Sim! Nossas fórmulas foram desenvolvidas em laboratórios de biotecnologia botânica, 100% livres de sulfatos agressivos, parabenos, corantes sintéticos e fragrâncias artificiais irritantes. São dermatologicamente testados e hipoalergênicos.'
  },
  {
    question: 'A marca é Cruelty-Free e Vegana?',
    answer: 'Com certeza. Nenhum de nossos ingredientes ou produtos finais é testado em animais, e 100% da nossa linha não contém matérias-primas de origem animal (selos PETA e Vegan Society aprovados).'
  },
  {
    question: 'Qual o prazo de entrega comprando pelo Mercado Livre?',
    answer: 'Graças ao programa Mercado Envios Full, os produtos já estão armazenados nos centros de distribuição do Mercado Livre. Em capitais e regiões metropolitanas, os pedidos chegam no mesmo dia ou no dia seguinte à aprovação da compra.'
  },
  {
    question: 'Como acompanhar conteúdos e novidades no Facebook?',
    answer: 'Você pode curtir e seguir nossa página oficial no Facebook @lumina.botanicals.oficial. Por lá compartilhamos tutoriais de skincare, lives com dermatologistas, novidades de lançamentos e sorteios exclusivos para seguidores.'
  }
];
