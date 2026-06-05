import { useEffect, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { API_URLN } from "../config";

function CategoryMenu() {
  const [menu, setMenu] = useState([]);
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const catmenu = async () => {
      const response = await fetch(API_URLN);
      const result = await response.json();
      setMenu(result.menuCategory);
    };
    catmenu();
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col p-4 h-auto w-[400px]">
        {menu.map((item) => (
          <Link
            to={`?category=${item.name}`}
            key={item.id}
            className={`flex gap-4 items-center mt-5 w-full h-[65px] border border-black dark:border-slate-700 rounded-xl px-4
                cursor-pointer transition-all duration-300
                ${
                  activeCategory === item.name
                    ? "bg-[rgba(140,125,110,0.8)] text-white"
                    : "bg-[#fcf3e7] text-black dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-contain dark:invert"
            />
            <p className="text-2xl font-medium">{item.name}</p>
          </Link>
        ))}

        <Link
          to="?"
          className={`flex gap-4 items-center mt-5 w-full h-[65px] border border-black dark:border-slate-700 rounded-xl px-4
                     transition-all duration-300 hover:shadow-md
                     ${
                       !activeCategory
                         ? "bg-[rgba(140,125,110,0.8)] text-white"
                         : "bg-[#fcf3e7] text-black dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                     }`}
        >
          <div className="flex justify-between w-full items-center text-2xl font-medium">
            All Category
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategoryMenu;
