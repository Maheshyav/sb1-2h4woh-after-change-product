import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import ProductLightbox from './ProductLightbox';

interface ProductGridProps {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
  isAdmin?: boolean;
  onUpdateProduct?: (product: Product) => void;
  onDeleteProduct?: (productId: string) => void;
}

export default function ProductGrid({ 
  title, 
  description, 
  heroImage, 
  products,
  isAdmin,
  onUpdateProduct,
  onDeleteProduct
}: ProductGridProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isAdmin={isAdmin}
            onUpdate={onUpdateProduct}
            onDelete={onDeleteProduct}
            onQuickView={handleQuickView}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}

      {selectedProduct && (
        <ProductLightbox
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {}}
          onAddToWaitlist={() => {}}
        />
      )}
    </div>
  );
}