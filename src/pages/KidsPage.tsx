import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';

interface KidsPageProps {
  onAddToCart: (product: Product, size: string) => void;
  onAddToWaitlist: (product: Product, email: string, size: string) => void;
  isAdmin?: boolean;
}

export default function KidsPage({ onAddToCart, onAddToWaitlist, isAdmin }: KidsPageProps) {
  const { getProductsByCategory, updateProduct } = useProducts();
  const kidsProducts = getProductsByCategory('Kids');

  return (
    <ProductGrid
      title="Kids Collection"
      description="Playful and comfortable styles for children"
      heroImage="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=800&q=80"
      products={kidsProducts}
      onAddToCart={onAddToCart}
      onAddToWaitlist={onAddToWaitlist}
      isAdmin={isAdmin}
      onProductUpdate={updateProduct}
    />
  );
}