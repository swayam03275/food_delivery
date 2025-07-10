import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import About from './pages/About';
import Header from './components/Header';
import ProtectedRoute from './utils/ProtectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <Signup />} />
        <Route
          path="/home"
          element={
            isLoggedIn ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
