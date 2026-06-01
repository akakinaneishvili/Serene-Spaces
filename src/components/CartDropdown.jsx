import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CartDropdown({ onClose }) {
  const [cartItems, setCartItems] = useState([]);

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  };

  useEffect(() => {
    loadCart();

    const handleCustomUpdate = (e) => {
      if (e.detail) {
        setCartItems(e.detail);
      } else {
        loadCart();
      }
    };

    window.addEventListener("storage", loadCart);
    window.addEventListener("cart-updated", handleCustomUpdate);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cart-updated", handleCustomUpdate);
    };
  }, []);

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));

    const event = new CustomEvent("cart-updated", { detail: updated });
    window.dispatchEvent(event);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNum = Number(String(item.price).replace(/[^0-9.]/g, ""));
    return total + priceNum * item.quantity;
  }, 0);

  return (
    <div className="absolute right-0 top-16 w-85 bg-[#fcf3e7] dark:bg-slate-900 rounded-2xl p-5 shadow-2xl border border-[rgba(188,95,19,0.15)] dark:border-slate-800 z-50 text-black dark:text-white">
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h4 className="text-lg font-bold m-0">My Cart</h4>
        <span className="text-xs text-gray-400">{totalItems} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className="text-gray-500 text-sm m-0 italic">
            Your cart is currently empty.
          </p>
        </div>
      ) : (
        <div className="max-h-60 overflow-y-auto space-y-3 pb-3 mb-3 border-b">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white/50 dark:bg-slate-950/40 p-2 rounded-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate m-0">{item.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {item.quantity} x{" "}
                  <span className="text-[#bc5f13]">{item.price}</span>
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-gray-400 hover:text-red-500 cursor-pointer p-1"
              >
                ✕
              </button>
            </div>
          ))}
          <div className="flex justify-between text-sm font-bold pt-2">
            <span>Total:</span>
            <span className="text-[#bc5f13]">${totalPrice}</span>
          </div>
        </div>
      )}

      <div className="pt-1">
        <Link
          to="/Shopping"
          onClick={onClose}
          className="w-full bg-[#bc5f13] text-white text-center py-2.5 rounded-xl font-medium text-sm block no-underline hover:bg-[#a14f0e] active:scale-95"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default CartDropdown;
