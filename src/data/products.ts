import { Product } from '../types';

export const initialProducts: Product[] = [
  // Electronics
  {
    id: 'electronics-1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'electronics-2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health monitoring features.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  // Men's Products
  {
    id: 'men-1',
    name: 'Classic White Tee',
    description: 'Essential cotton crew neck t-shirt in pristine white.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'men-2',
    name: 'Vintage Denim Jacket',
    description: 'Classic denim jacket with a lived-in wash and comfortable fit.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&q=80&w=800',
    category: 'Men',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  // Women's Products
  {
    id: 'women-1',
    name: 'Floral Maxi Dress',
    description: 'Elegant floral maxi dress perfect for summer occasions.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'women-2',
    name: 'Designer Handbag',
    description: 'Luxury designer handbag crafted from genuine leather.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    category: 'Women',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  // Watches
  {
    id: 'watch-1',
    name: 'Luxury Chronograph',
    description: 'Premium chronograph watch with Swiss movement.',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'watch-2',
    name: 'Classic Gold Watch',
    description: 'Timeless gold-plated watch with leather strap.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
    category: 'Watches',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];