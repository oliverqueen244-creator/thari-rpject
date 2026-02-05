import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Placeholder until Supabase auth provider is connected.
  const isAuthenticated = Boolean(localStorage.getItem('thari_user'));
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}

export default ProtectedRoute;
