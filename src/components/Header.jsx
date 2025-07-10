import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useState } from 'react';

function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    setMenuOpen(false);
  };

  return (
    <header className="bg-red-500 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-200">
          🍔 FoodZone
        </Link>

        
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:flex items-center gap-5 text-lg font-medium">
          <Link to="/about" className="hover:text-yellow-200 transition duration-200">About Us</Link>

          {isLoggedIn && (
            <>
              <Link to="/home" className="hover:text-yellow-200 transition duration-200">Home</Link>
              <Link to="/cart" className="hover:text-yellow-200 transition duration-200">Cart</Link>
            </>
          )}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="bg-white text-red-500 px-4 py-1 rounded-full font-semibold hover:bg-yellow-200 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-white px-4 py-1 rounded-full hover:bg-white hover:text-red-500 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-white text-red-600 px-4 py-1 rounded-full hover:bg-yellow-100 font-semibold transition"
            >
              Logout
            </button>
          )}
        </nav>
      </div>

      {/* Nav Links - Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center text-lg font-medium">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-200 transition">About Us</Link>

          {isLoggedIn && (
            <>
              <Link to="/home" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-200 transition">Home</Link>
              <Link to="/cart" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-200 transition">Cart</Link>
            </>
          )}

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block bg-white text-red-500 px-4 py-1 rounded-full font-semibold hover:bg-yellow-200 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="block border border-white px-4 py-1 rounded-full hover:bg-white hover:text-red-500 transition"
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block w-full bg-white text-red-600 px-4 py-1 rounded-full hover:bg-yellow-100 font-semibold transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
