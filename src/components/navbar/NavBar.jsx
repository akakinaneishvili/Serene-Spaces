import { NavLink } from "react-router-dom";
import { API_URL } from "../../config.js";
import { useEffect, useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchNavbar = async () => {
      const response = await fetch(`${API_URL}/navbar`);
      const data = await response.json();
      setMenu(data);
    };

    fetchNavbar();
  }, []);

  return (
    <nav>
      <ul className="flex gap-6 justify-around items-center text-black dark:text-white w-[500px] h-11">
        {menu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer h-9 flex items-center justify-center px-3 transition-colors duration-300 rounded-2xl hover:shadow-md 
                ${
                  isActive
                    ? "bg-[rgba(140,125,110,0.8)] text-white dark:bg-amber-700"
                    : "hover:bg-[rgba(140,125,110,0.8)] dark:hover:bg-slate-800"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
