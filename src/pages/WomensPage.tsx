import { useProducts } from '../contexts/ProductContext';
import ProductGrid from '../components/ProductGrid';

export default function WomensPage() {
  const { products } = useProducts();
  const womensProducts = products.filter(product => product.category === 'Women');

  return (
    <div className="pt-16">
      <ProductGrid
        title="Women's Collection"
        description="Elegant Styles for Women"
        heroImage="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
        products={womensProducts}
      />
    </div>
  );
}