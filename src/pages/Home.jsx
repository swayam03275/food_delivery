import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../components/FoodCard';
import { addItem } from '../features/cart/cartSlice';
import { useState, useMemo, useCallback } from 'react';
import bgImage from '../assets/about-bg.jpg'; // ✅ Make sure this image exists

function Home() {
  const { items } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  const handleAddToCart = useCallback((item) => {
    dispatch(addItem(item));
    setSuccessMessage(`${item.name} added to cart!`);
    setTimeout(() => setSuccessMessage(''), 2000);
  }, [dispatch]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start px-4 py-16 overflow-hidden">
    
      <img
        src={bgImage}
        alt="Food background"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-50/80 backdrop-blur-[1px]"></div>

      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-red-600 drop-shadow-md">
            Delicious Foods at Your Doorstep
          </h2>
          <p className="text-gray-700 mt-2 text-lg">
            Fresh, Fast, and Affordable — just for you!
          </p>
        </div>

        {/* Search + Success Message */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <input
            type="text"
            placeholder="🔍 Search your food..."
            className="px-5 py-3 border-2 border-red-300 rounded-full shadow-md w-80 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {successMessage && (
            <div className="bg-red-100 border border-red-300 text-red-700 text-lg font-semibold px-6 py-3 rounded-xl shadow-lg animate-pulse w-fit">
              🍽️ {successMessage}
            </div>
          )}
        </div>

        {/* Food Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.length === 0 ? (
            <p className="text-center col-span-full text-gray-500 text-xl">
              No food found 😢
            </p>
          ) : (
            filteredItems.map(item => (
              <FoodCard key={item.id} item={item} onAdd={handleAddToCart} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
