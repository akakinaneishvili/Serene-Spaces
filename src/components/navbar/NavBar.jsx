import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { API_URLN } from "../../config";

function NavBar({ onItemClick }) {
  const [menu, setMenu] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNavbar = async () => {
      const response = await fetch(API_URLN);
      const result = await response.json();
      setMenu(result.navbar);
    };
    fetchNavbar();
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  return (
    <nav className="flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 lg:hidden text-black dark:text-white cursor-pointer focus:outline-none flex items-center justify-center rounded-xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-50"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <ul
        className={`
          flex justify-center items-center text-black dark:text-white transition-all duration-300 ease-in-out
          absolute top-16 right-0 w-64 flex-col gap-4 bg-[rgb(252,243,231)] dark:bg-slate-950 p-6 rounded-2xl shadow-xl border border-[rgba(188,95,19,0.15)] dark:border-slate-800 z-40 h-auto
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4 lg:translate-y-0"}
          lg:static lg:w-auto lg:flex-row lg:gap-2 lg:bg-transparent lg:dark:bg-transparent lg:p-0 lg:rounded-none lg:shadow-none lg:border-none lg:opacity-100 lg:visible
        `}
      >
        {menu.map((item) => (
          <li key={item.id} className="w-full lg:w-auto text-center">
            <NavLink
              to={item.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `cursor-pointer h-10 lg:h-9 flex items-center justify-center px-4 transition-colors duration-300 rounded-2xl hover:shadow-md text-base whitespace-nowrap w-full lg:w-auto
                ${
                  isActive
                    ? "bg-[rgba(140,125,110,0.8)] text-white dark:bg-amber-700 font-medium"
                    : "hover:bg-[rgba(140,125,110,0.3)] dark:hover:bg-slate-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}

        <li className="w-full sm:hidden border-t border-black/10 dark:border-white/10 pt-4 mt-2">
          <NavLink
            to="/Registration"
            onClick={handleLinkClick}
            className="flex h-11 items-center  justify-center w-full bg-[rgba(163,148,133,0.5)]  dark:bg-slate-800 text-black dark:text-white rounded-xl text-sm mb-3 font-medium"
          >
            Register
          </NavLink>

          <NavLink
            to="/LogIn"
            onClick={handleLinkClick}
            className="flex h-11 items-center justify-center w-full bg-[#bc5f13] text-white rounded-xl text-sm font-medium"
          >
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
