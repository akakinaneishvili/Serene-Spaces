import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link, useSearchParams } from "react-router-dom";

function CategotyMenu() {
  const [menu, setMenu] = useState([]);
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const catmenu = async () => {
      const respons = await fetch(`${API_URL}/menuCategory`);
      const data = await respons.json();
      setMenu(data);
    };
    catmenu();
  }, []);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col p-4 h-auto w-100">
        {menu.map((item) => (
          <Link
            to={`?category=${item.name}`}
            key={item.id}
            className={`flex gap-4 items-center mt-5 w-full h-16.25 border border-black rounded-xl px-4
                cursor-pointer transition-all duration-300
                ${
                  activeCategory === item.name
                    ? "bg-[rgba(140,125,110,0.8)] text-white"
                    : "bg-[#fcf3e7] text-black"
                }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-contain"
            />
            <p className="text-2xl font-medium">{item.name}</p>
          </Link>
        ))}

        <Link
          to="?"
          className={`flex gap-4 items-center mt-5 w-full h-16.25 border border-black rounded-xl px-4
                     transition-all duration-300 hover:shadow-md
                     ${!activeCategory ? "bg-[rgba(140,125,110,0.8)] text-white" : "bg-[#fcf3e7] text-black"}`}
        >
          <div className="flex justify-between w-full items-center text-2xl font-medium">
            All Category
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CategotyMenu;
