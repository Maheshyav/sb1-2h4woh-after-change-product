import { useProducts } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';

export default function ElectronicsPage() {
  const { products } = useProducts();
  const electronicsProducts = products.filter(product => product.category === 'Electronics');

  return (
    <div className="pt-16">
      <ProductGrid
        title="Electronics"
        description="Latest Tech & Gadgets"
        heroImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
        products={electronicsProducts}
      />
    </div>
  );
}