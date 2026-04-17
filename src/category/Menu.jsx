import React from "react";
import menu_Category from "./menu_Category";

function MenuCategory() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col p-4 h-162.5 w-100">
        {menu_Category.map((item) => (
          <button
            key={item.id}
            className="flex gap-4 items-center mt-5 w-full h-16.25 border border-black rounded-xl px-4
                         bg-[#fcf3e7] text-black
                         cursor-pointer
                         transition-all duration-300
                         hover:bg-[rgba(140,125,110,0.8)]
                         hover:shadow-md"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-contain"
            />
            <p className="text-2xl font-medium">{item.name}</p>
          </button>
        ))}
        <button
          className="flex gap-4 items-center mt-5 w-full h-16.25 border border-black rounded-xl px-4
                         bg-[#fcf3e7] text-black
                         cursor-pointer
                         transition-all duration-300
                         hover:bg-[rgba(140,125,110,0.8)]
                         hover:shadow-md"
        >
          All Category
        </button>
      </div>
    </div>
  );
}

export default MenuCategory;