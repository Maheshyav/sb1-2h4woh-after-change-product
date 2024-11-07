import { useProducts } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';

export default function WatchesPage() {
  const { products } = useProducts();
  const watchProducts = products.filter(product => product.category === 'Watches');

  return (
    <div className="pt-16">
      <ProductGrid
        title="Luxury Watches"
        description="Timeless Elegance"
        heroImage="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80"
        products={watchProducts}
      />
    </div>
  );
}