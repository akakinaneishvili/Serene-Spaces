import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.svg";
import NavBar from "../components/navbar/NavBar.jsx";
import DarkModeBtn from "../components/DarkModeBtn.jsx";
import CartDropdown from "../components/CartDropdown.jsx";
import { useUser } from "../context/AuthContext.jsx";
import LogIn from "../components/LogIn.jsx";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const closeCart = () => setIsCartOpen(false);

  const { isUser, handleLogOut } = useUser();

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0,
    );
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cart-updated", updateCartCount);
    return () => {
      window.removeEventListener("cart-updated", updateCartCount);
    };
  }, []);

  return (
    <>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full lg:max-w-7xl h-20 justify-between items-center bg-[rgba(163,148,133,0.3)] dark:bg-slate-900/40 rounded-2xl px-4 md:px-6 backdrop-blur-sm border border-transparent dark:border-slate-800/50 transition-colors duration-300 z-50">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-serif font-bold transition-colors whitespace-nowrap">
          Serene Spaces
        </h2>

        <div className="flex items-center gap-3 ml-auto lg:ml-0 lg:order-2">
          <NavBar onItemClick={closeCart} />

          <div className="flex gap-2 items-center relative">
            <div
              onClick={() => setIsCartOpen(!isCartOpen)}
              className={`rounded-2xl px-3 py-2 md:px-4 inline-flex items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer group relative ${
                isCartOpen
                  ? "bg-[#bc5f13] text-white shadow-md"
                  : "hover:bg-[#bc5f13]"
              }`}
            >
              <img
                src={Vector}
                alt="Vector Icon"
                className={`w-5 h-5 transition-all ${
                  isCartOpen ? "invert-0" : "dark:invert group-hover:invert-0"
                }`}
              />

              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-scaleIn">
                  {cartCount}
                </span>
              )}
            </div>

            {isCartOpen && <CartDropdown onClose={closeCart} />}

            <button className="text-black dark:text-white px-2.5 py-2 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:bg-[#bc5f13] hover:text-white hover:shadow-md text-sm md:text-base">
              EN
            </button>

            <DarkModeBtn />

            {!isUser ? (
              <Link
                to="/Registration"
                onClick={closeCart}
                className="hidden sm:inline-block bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-3 py-2 rounded-xl transition-all text-sm whitespace-nowrap"
              >
                Register
              </Link>
            ) : (
              <Link
                to="/UserPage"
                onClick={closeCart}
                className="hidden sm:inline-flex items-center gap-2 bg-[#bc5f13] text-white px-3 py-2 rounded-xl transition-all text-sm font-medium whitespace-nowrap shadow-md shadow-orange-700/10 hover:bg-[#a04e0e] cursor-pointer capitalize"
              >
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
                  {isUser.firstname ? isUser.firstname[0] : "U"}
                </span>
                {isUser.firstname || "Profile"}
              </Link>
            )}

            {isUser ? (
              <button
                onClick={handleLogOut}
                className="hidden sm:inline-block bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-3 py-2 rounded-xl transition-all text-sm whitespace-nowrap cursor-pointer"
              >
                log Out
              </button>
            ) : (
              <Link
                to="/LogIn"
                onClick={closeCart}
                className="hidden sm:inline-block bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-3 py-2 rounded-xl transition-all text-sm whitespace-nowrap"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
