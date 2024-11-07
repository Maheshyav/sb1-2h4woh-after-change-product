import { useState, memo } from 'react';
import { useProducts } from '../contexts/ProductContext';
import ProductCard from './ProductCard';
import ProductLightbox from './ProductLightbox';
import { Product } from '../types';

const TrendingProducts = memo(function TrendingProducts() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Get the first 8 products for trending section
  const trendingProducts = products.slice(0, 8);

  if (loading) return <div className="text-center py-12">Loading...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  const handleQuickView = (product: Product, index: number) => {
    setSelectedProduct(product);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={() => handleQuickView(product, index)}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductLightbox
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={() => {}}
          onAddToWaitlist={() => {}}
        />
      )}
    </section>
  );
});

export default TrendingProducts;