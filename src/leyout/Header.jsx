import { useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.svg";
import { API_URL } from "../config.js";
import NavBar from "../components/navbar/NavBar.jsx";
import DarkModeBtn from "../components/DarkModeBtn.jsx";
import CartDropdown from "../components/CartDropdown.jsx";

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeCart = () => setIsCartOpen(false);

  return (
    <>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full lg:max-w-7xl h-20 justify-between items-center bg-[rgba(163,148,133,0.3)] dark:bg-slate-900/40 rounded-2xl px-4 md:px-6 backdrop-blur-sm border border-transparent dark:border-slate-800/50 transition-colors duration-300 z-50">
        <h2 className="text-black dark:text-white text-xl md:text-2xl font-serif font-bold transition-colors whitespace-nowrap">
          Serene Spaces
        </h2>

        <div className="flex items-center gap-3 ml-auto lg:ml-0 lg:order-2">
          <div className="hidden lg:block">
            <NavBar onItemClick={closeCart} />
          </div>

          <div className="flex gap-2 items-center relative">
            <div
              onClick={() => setIsCartOpen(!isCartOpen)}
              className={`rounded-2xl px-3 py-2 md:px-4 inline-flex items-center justify-center transition-all duration-300 hover:shadow-md cursor-pointer group
                          ${isCartOpen ? "bg-[#bc5f13] text-white shadow-md" : "hover:bg-[#bc5f13]"}`}
            >
              <img
                src={Vector}
                alt="Vector Icon"
                className={`w-5 h-5 transition-all
                            ${isCartOpen ? "invert-0" : "dark:invert group-hover:invert-0"}`}
              />
            </div>

            {isCartOpen && <CartDropdown onClose={closeCart} />}

            <button className="text-black dark:text-white px-2.5 py-2 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:bg-[#bc5f13] hover:text-white hover:shadow-md text-sm md:text-base">
              EN
            </button>

            <DarkModeBtn />

            <Link
              to="/Registration"
              onClick={closeCart}
              className="hidden sm:inline-block bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-3 py-2 rounded-xl transition-all text-sm whitespace-nowrap"
            >
              Register
            </Link>

            <Link
              to="/LogIn"
              onClick={closeCart}
              className="hidden sm:inline-block bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-3 py-2 rounded-xl transition-all text-sm whitespace-nowrap"
            >
              Log In
            </Link>
          </div>

          <div className="block lg:hidden">
            <NavBar onItemClick={closeCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
