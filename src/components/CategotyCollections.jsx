import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { API_URLN } from "../config";
import { useTranslation } from "react-i18next";

function CategoryCollections() {
  const [menu, setMenu] = useState([]);
  const [englishMenu, setEnglishMenu] = useState([]);
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const catmenu = async () => {
      const response = await fetch(`${API_URLN}?_t=${new Date().getTime()}`);
      const result = await response.json();

      setEnglishMenu(result.menuCategory || []);

      const currentCatmenu =
        i18n.language.toUpperCase() === "KA"
          ? result.menuCategory_KA
          : result.menuCategory;

      setMenu(currentCatmenu || []);
    };
    catmenu();
  }, [i18n.language]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10  ">
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Link
          to="?"
          className={`px-6 py-3 rounded-full transition-all duration-300 no-underline font-medium shadow-sm
            ${
              !activeCategory
                ? "bg-[rgba(140,125,110,0.8)] text-white shadow-md scale-105"
                : "bg-[#fcf3e7] text-black hover:bg-[#f5e6d3] dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            }`}
        >
          {t("allCategories", "All Category")}
        </Link>

        {menu.map((item) => {
          const englishItem = englishMenu.find(
            (eng) => String(eng.id) === String(item.id),
          );
          const englishName = englishItem ? englishItem.name : item.name;

          const isActive = activeCategory === englishName;

          return (
            <Link
              to={`?category=${englishName}`}
              key={item.id}
              className={`flex items-center gap-3 px-5 py-2 rounded-full transition-all duration-300 no-underline shadow-sm
                ${
                  isActive
                    ? "bg-[rgba(140,125,110,0.8)] text-white shadow-md scale-105"
                    : "bg-[#fcf3e7] text-black hover:bg-[#f5e6d3] dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                }`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-8 h-8 rounded-full object-cover border transition-all duration-300
                    ${isActive ? "border-white/20 invert-0" : "border-transparent dark:border-slate-700 dark:invert"}`}
                />
              )}

              <p className="m-0 font-medium">{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryCollections;
