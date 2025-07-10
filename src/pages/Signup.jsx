import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/about-bg.jpg'; // ✅ Replace with your actual image

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(login({ name: username }));
    navigate('/home');
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for clarity */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-white rounded-3xl shadow-xl p-10 md:p-16 max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-2">Create Account</h2>
        <p className="text-center text-gray-600 mb-8">
          Join FoodZone and enjoy delicious meals delivered fast!
        </p>

        <form onSubmit={handleSignup} className="space-y-6">
          <div>
            <label className="block mb-1 text-gray-700 font-medium">Username</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md text-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-red-600 hover:underline font-medium">Login</a>
        </p>
      </div>
    </section>
  );
}

export default Signup;
