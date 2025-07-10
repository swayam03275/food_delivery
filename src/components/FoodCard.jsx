function FoodCard({ item, onAdd }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
          Popular
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
          <p className="text-red-600 font-semibold text-md">₹{item.price}</p>
        </div>

        <button
          onClick={() => onAdd(item)}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-all duration-200"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
