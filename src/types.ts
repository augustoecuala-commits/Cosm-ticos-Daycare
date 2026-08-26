export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'facial' | 'body' | 'hair' | 'kits' | 'sun';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImage?: string;
  badge?: string;
  description: string;
  volume: string;
  skinType: string[];
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  mercadoLivreUrl: string;
  facebookPostUrl?: string;
  inStock: boolean;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  productName: string;
  verified: boolean;
  date: string;
  avatar: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface SkinQuizAnswers {
  skinType: string;
  primaryConcern: string;
  routineStepPreference: string;
}
