import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListingPage from './pages/ProductListingPage';
import ProtectedRoute from './components/ProtectedRoute';
import AccountDashboardPage from './pages/AccountDashboardPage';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <AccountDashboardPage />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
