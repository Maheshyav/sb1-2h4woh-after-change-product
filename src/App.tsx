import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ProductProvider } from './contexts/ProductContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { AdminProvider } from './contexts/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AdminProvider>
            <ProductProvider>
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow pt-16">
                  <AppRoutes />
                </main>
                <Footer />
              </div>
              <Toaster 
                position="bottom-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    background: '#333',
                    color: '#fff',
                  },
                }}
              />
            </ProductProvider>
          </AdminProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}