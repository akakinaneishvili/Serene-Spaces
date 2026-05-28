import React, { memo } from "react";
import { Link } from "react-router-dom";

const Footer = memo(() => {
  return (
    <div className="bg-[rgba(163,148,133,0.3)] dark:bg-slate-900 w-full py-20 text-[rgba(45,40,35,1)] dark:text-white transition-colors duration-300">
      <div className="max-w-7xl m-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <nav>
          <p className="text-3xl font-serif font-bold italic">Serene Spaces</p>
        </nav>

        <nav>
          <ul className="space-y-3 text-[rgba(45,40,35,0.7)] dark:text-slate-400">
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Abuse
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">
              Blog
            </li>
            <li className="hover:text-black dark:hover:text-white transition-colors">
              <Link
                to="/About"
                className="block w-full text-inherit no-underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="flex flex-col gap-6">
          <p className="text-2xl font-serif">Join Newsletter</p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="text"
              placeholder="Your Email Address"
              className="bg-transparent text-black dark:text-white w-full sm:w-64 h-12 rounded-full border border-[rgba(45,40,35,0.3)] dark:border-slate-700 px-6 outline-none focus:border-black dark:focus:border-white transition-all placeholder:text-[rgba(45,40,35,0.5)] dark:placeholder:text-slate-500"
            />
            <button className="bg-[rgba(45,40,35,1)] dark:bg-slate-800 text-white px-8 h-12 rounded-full font-bold hover:bg-black dark:hover:bg-slate-700 transition-colors">
              Submit
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
});

export default Footer;
