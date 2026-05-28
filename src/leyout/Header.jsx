import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../assets/Vector.svg";
import { API_URL } from "../config.js";
import NavBar from "../components/navbar/NavBar.jsx";
import DarkModeBtn from "../components/DarkModeBtn.jsx";

function Header() {
  return (
    <>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex w-[1200px] h-20 justify-between items-center bg-[rgba(163,148,133,0.3)] dark:bg-slate-900/40 rounded-2xl p-4 backdrop-blur-sm border border-transparent dark:border-slate-800/50 transition-colors duration-300">
        <h2 className="text-black dark:text-white text-2xl font-serif font-bold transition-colors">
          Serene Spaces
        </h2>

        <NavBar />

        <div className="flex gap-3 items-center">
          <div className="rounded-2xl px-4 py-2 inline-flex items-center justify-center transition-all duration-300 hover:bg-[#bc5f13] hover:shadow-md cursor-pointer group">
            <img
              src={Vector}
              alt="Vector Icon"
              className="w-5 h-5 dark:invert group-hover:invert-0 transition-all"
            />
          </div>

          <button className="text-black dark:text-white px-4 py-2 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:bg-[#bc5f13] hover:text-white hover:shadow-md transition-colors">
            EN
          </button>
          <DarkModeBtn />

          <Link
            to="/Registration"
            className="bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-4 py-2 rounded-xl transition-all text-sm"
          >
            Register
          </Link>

          <Link
            to="/LogIn"
            className="bg-[rgba(163,148,133,0.8)] dark:bg-slate-800 hover:bg-[#bc5f13] dark:hover:bg-[#bc5f13] hover:text-white border border-[rgba(0,0,0,0.2)] dark:border-slate-700 text-black dark:text-white px-4 py-2 rounded-xl transition-all text-sm"
          >
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
