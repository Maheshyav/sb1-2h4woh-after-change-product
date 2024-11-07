import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Product } from '../types';
import { initialProducts } from '../data/products';
import toast from 'react-hot-toast';

interface ProductContextType {
  products: Product[];
  loading: boolean;
  error: string | null;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (productId: string) => Promise<void>;
  getProductsByCategory: (category: string) => Product[];
  refreshProducts: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('app_products');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync products with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('app_products', JSON.stringify(products));
  }, [products]);

  const refreshProducts = useCallback(() => {
    const savedProducts = localStorage.getItem('app_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const addProduct = useCallback((product: Product) => {
    try {
      setLoading(true);
      const newProduct = {
        ...product,
        id: `prod_${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProducts(prev => {
        const updated = [...prev, newProduct];
        localStorage.setItem('app_products', JSON.stringify(updated));
        return updated;
      });
      toast.success('Product added successfully');
    } catch (error) {
      toast.error('Failed to add product');
      setError('Failed to add product');
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback(async (updatedProduct: Product) => {
    try {
      setLoading(true);
      setProducts(prev => {
        const updated = prev.map(p => 
          p.id === updatedProduct.id 
            ? { 
                ...updatedProduct, 
                updatedAt: new Date().toISOString(),
                price: typeof updatedProduct.price === 'string' 
                  ? parseFloat(updatedProduct.price.replace(/[^0-9.]/g, ''))
                  : updatedProduct.price
              }
            : p
        );
        localStorage.setItem('app_products', JSON.stringify(updated));
        return updated;
      });
      toast.success('Product updated successfully');
    } catch (error) {
      toast.error('Failed to update product');
      setError('Failed to update product');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteProduct = useCallback(async (productId: string) => {
    try {
      setLoading(true);
      setProducts(prev => {
        const updated = prev.filter(p => p.id !== productId);
        localStorage.setItem('app_products', JSON.stringify(updated));
        return updated;
      });
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
      setError('Failed to delete product');
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const getProductsByCategory = useCallback((category: string) => {
    return products.filter(product => 
      category === 'All' ? true : product.category === category
    );
  }, [products]);

  const value = {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
    refreshProducts
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}