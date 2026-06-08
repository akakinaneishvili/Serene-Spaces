import React, { memo } from "react";
import facebook from "../../public/facebook.svg";
import twitter from "../../public/twitter-x.svg";
import instagram from "../../public/instagram.svg";

const Footer = memo(() => {
  return (
    <div className="bg-[rgba(163,148,133,0.3)] dark:bg-slate-900 w-full py-12 text-[rgba(45,40,35,1)] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl m-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <p className="text-2xl font-serif font-bold italic tracking-wide">
            Serene Spaces
          </p>
          <span className="text-xs opacity-40 font-mono hidden sm:inline">
            |
          </span>
          <p className="text-xs opacity-50 uppercase tracking-widest hidden sm:inline">
            Tbilisi
          </p>
        </div>

        <div className="text-xs opacity-40 font-mono tracking-tight text-center md:text-left">
          © {new Date().getFullYear()} Serene Spaces. All rights reserved.
        </div>

        <div className="flex gap-6 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="w-full h-full object-contain dark:invert transition-all"
            />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-full h-full object-contain dark:invert transition-all"
            />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          >
            <img
              src={twitter}
              alt="X"
              className="w-full h-full object-contain dark:invert transition-all"
            />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Footer;
