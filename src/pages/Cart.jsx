import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart
} from '../features/cart/cartSlice';
import QuantityButton from '../components/QuantityButton';
import { useMemo, useState } from 'react';
import bgImage from '../assets/about-bg.jpg'; // ✅ Add your image in assets

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = useMemo(()=>{
    return items.reduce((sum,item)=>sum+item.price*item.quantity,0)

  },[items])

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    dispatch(clearCart());
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <section
      className="relative min-h-screen px-6 py-16"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-orange-50/80 backdrop-blur-[1px]"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-red-600 drop-shadow">
          🛒 Your Cart
        </h2>

        {orderPlaced && (
          <div className="text-center text-green-600 font-semibold mb-6 text-lg animate-pulse">
            ✅ Order Placed Successfully!
          </div>
        )}

        {items.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center bg-white shadow-lg p-4 rounded-xl gap-4"
                >
                  <img
                    src={item.image}
                    className="w-24 h-24 rounded-lg object-cover"
                    alt={item.name}
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                    <QuantityButton
                      quantity={item.quantity}
                      onDecrease={() => dispatch(decreaseQty(item.id))}
                      onIncrease={() => dispatch(increaseQty(item.id))}
                    />
                  </div>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 text-2xl hover:scale-110 transition"
                    title="Remove"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* Total & Buttons */}
            <div className="mt-10 bg-white rounded-xl p-6 shadow-md">
              <div className="flex justify-between text-2xl font-bold text-gray-700 mb-4">
                <span>Total:</span>
                <span>₹{total}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-lg font-semibold transition"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                >
                  Place Order
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;
