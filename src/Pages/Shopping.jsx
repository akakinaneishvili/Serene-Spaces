import { useState, useEffect } from "react";
import { useUser } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Shopping() {
  const [cartItems, setCartItems] = useState([]);
  const { isUser } = useUser();
  const { t, i18n } = useTranslation();

  const isGeorgian = i18n.language.toUpperCase() === "KA";

  const loadCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  };

  useEffect(() => {
    loadCart();

    const handleCartUpdate = (event) => {
      if (event.detail) {
        setCartItems(event.detail);
      } else {
        loadCart();
      }
    };

    window.addEventListener("storage", loadCart);
    window.addEventListener("cart-updated", handleCartUpdate);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cart-updated", handleCartUpdate);
    };
  }, []);

  const saveCartToStorage = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const event = new CustomEvent("cart-updated", { detail: updatedCart });
    window.dispatchEvent(event);
  };

  const updateQuantity = (id, amount) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.quantity + amount;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    saveCartToStorage(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCartToStorage(updated);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const priceNum = Number(String(item.price).replace(/[^0-9.]/g, ""));
      return total + priceNum * item.quantity;
    }, 0);
  };

  return (
    <div className="bg-[#FCF3E7] dark:bg-slate-950 min-h-screen pt-36 pb-20 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1
          className={`tracking-tight mb-12 border-b border-gray-300/50 pb-4 transition-all duration-300
            ${isGeorgian ? "font-sans text-3xl md:text-4xl font-bold tracking-wide" : "font-serif text-4xl md:text-5xl"}`}
        >
          {t("cart_title", "Your Shopping Cart")}
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-[#fcf3e7] dark:bg-slate-900 rounded-3xl p-8">
            <p
              className={`text-xl text-gray-500 transition-all duration-300 ${isGeorgian ? "font-sans font-normal tracking-wide" : "font-light italic text-2xl"}`}
            >
              {t("cart_empty", "Your cart is currently empty.")}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-6 bg-[#fcf3e7] dark:bg-slate-900 p-5 rounded-2xl border dark:border-slate-800/60"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold uppercase m-0 font-sans tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-[#bc5f13] font-bold text-lg mt-1 font-sans">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border rounded-xl px-3 py-1 bg-white dark:bg-slate-950">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="font-bold text-lg cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-medium text-lg px-2 font-sans">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="font-bold text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 cursor-pointer p-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-[#fcf3e7] dark:bg-slate-900 p-6 rounded-2xl flex flex-col justify-between min-h-[280px]">
              <div>
                <h3
                  className={`border-b pb-3 m-0 transition-all duration-300
                  ${isGeorgian ? "font-sans text-xl font-bold tracking-wide" : "font-serif text-2xl"}`}
                >
                  {t("order_summary", "Order Summary")}
                </h3>
                <div
                  className={`space-y-3 mt-5 ${isGeorgian ? "font-sans text-sm font-normal tracking-wide" : "text-sm"}`}
                >
                  <div className="flex justify-between">
                    <span>{t("subtotal", "Subtotal")}</span>
                    <span className="font-medium font-sans">
                      ${calculateTotal()}
                    </span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4 border-t mt-2">
                    <span>{t("total", "Total")}</span>
                    <span className="text-[#bc5f13] font-sans">
                      ${calculateTotal()}
                    </span>
                  </div>
                </div>
              </div>

              {isUser ? (
                <button
                  onClick={() => alert(t("order_success", "Order Placed!"))}
                  className={`w-full bg-black text-white dark:bg-white dark:text-black py-4 rounded-xl font-medium mt-6 cursor-pointer transition-all
                    ${isGeorgian ? "font-sans text-xs font-bold tracking-wider" : "text-sm"}`}
                >
                  {t("place_order", "Place Order")}
                </button>
              ) : (
                <Link
                  to="/Login"
                  className={`flex w-full items-center justify-center bg-orange-600 text-white py-4 rounded-xl font-medium mt-6 hover:bg-orange-700 transition-colors block text-center
                    ${isGeorgian ? "font-sans text-xs font-bold tracking-wider" : "text-sm"}`}
                >
                  {t("login_to_order", "Log In to Place Order")}
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shopping;
