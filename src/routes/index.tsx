import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ElectronicsPage from '../pages/ElectronicsPage';
import MensPage from '../pages/MensPage';
import WomensPage from '../pages/WomensPage';
import WatchesPage from '../pages/WatchesPage';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AdminDashboard from '../components/AdminDashboard';
import AdminLogin from '../components/AdminLogin';
import AdminCredentials from '../components/AdminCredentials';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/electronics" element={<ElectronicsPage />} />
      <Route path="/men" element={<MensPage />} />
      <Route path="/women" element={<WomensPage />} />
      <Route path="/watches" element={<WatchesPage />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/credentials"
        element={
          <ProtectedRoute>
            <AdminCredentials />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}