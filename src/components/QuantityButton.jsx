function QuantityButton({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-full px-4 py-2 shadow-sm w-fit">
      <button
        onClick={onDecrease}
        className="text-red-600 text-xl font-bold w-8 h-8 rounded-full border border-red-400 hover:bg-red-100 transition"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className="text-lg font-semibold text-gray-800 min-w-[24px] text-center">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="text-red-600 text-xl font-bold w-8 h-8 rounded-full border border-red-400 hover:bg-red-100 transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantityButton;
