import { useEffect, useState } from "react";
import Vector from "../assets/Vector.svg";
import { API_URL } from "../config.js";
import NavBar from "../components/navbar/NavBar.jsx";

function Header() {
  return (
    <>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex w-375 h-20 justify-between items-center bg-[rgba(163,148,133,0.3)] rounded-2xl p-4">
        <h2 className="text-black text-2xl font-bold">Serene Spaces</h2>

        <NavBar />

        <div className="flex gap-3 items-center">
          <div className="rounded-2xl px-4 py-2 inline-flex items-center justify-center transition-all duration-300 hover:bg-[rgba(140,125,110,0.8)] hover:shadow-md">
            <img src={Vector} alt="Vector Icon" className="w-5 h-5" />
          </div>

          <button className="text-black px-4 py-2 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:bg-[rgba(140,125,110,0.8)] hover:shadow-md">
            EN
          </button>
          <button className="bg-[rgba(163,148,133,0.8)] border border-black text-black px-4 py-2 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
