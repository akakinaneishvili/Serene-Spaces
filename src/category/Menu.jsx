import React from "react";
import Arrow from "./category img/Arrow Right 1.svg";
import menu_Category from "./menu_Category";

function MenuCategory() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col p-4 h-[650px] w-[400px]">
        {menu_Category.map((item) => (
          <button
            key={item.id}
            className="flex gap-4 items-center mt-5 w-full h-[65px] border border-black dark:border-slate-700 rounded-xl px-4
                         bg-[#fcf3e7] text-black dark:bg-slate-900 dark:text-white
                         cursor-pointer
                         transition-all duration-300
                         hover:bg-[rgba(140,125,110,0.8)] dark:hover:bg-slate-800
                         hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-contain dark:invert"
            />
            <p className="text-2xl font-medium">{item.name}</p>
          </button>
        ))}
        <button
          className="flex gap-4 items-center mt-5 w-full h-[65px] border border-black dark:border-slate-700 rounded-xl px-4
                       bg-[#fcf3e7] text-black dark:bg-slate-900 dark:text-white
                       cursor-pointer
                       transition-all duration-300
                       hover:bg-[rgba(140,125,110,0.8)] dark:hover:bg-slate-800
                       hover:shadow-md"
        >
          <nav className="flex justify-between w-full items-center text-2xl font-medium">
            All Category
            <img src={Arrow} alt="" className="dark:invert" />
          </nav>
        </button>
      </div>
    </div>
  );
}

export default MenuCategory;
