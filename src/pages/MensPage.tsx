import { useProducts } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';

export default function MensPage() {
  const { products } = useProducts();
  const mensProducts = products.filter(product => product.category === 'Men');

  return (
    <div className="pt-16">
      <ProductGrid
        title="Men's Collection"
        description="Premium Fashion for Men"
        heroImage="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80"
        products={mensProducts}
      />
    </div>
  );
}