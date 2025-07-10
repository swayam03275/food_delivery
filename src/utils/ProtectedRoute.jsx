import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useSelector(state => state.auth);

  // If user is not logged in, redirect to /login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise render the protected component
  return children;
}

export default ProtectedRoute;
