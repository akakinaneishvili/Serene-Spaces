import { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";
import Card from "./card";
import { API_URLN } from "../config";
import { useTranslation } from "react-i18next";

function SmallCards() {
  const [prod, setProd] = useState([]);
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");
  const sortByPrice = searchParams.get("sort");

  useEffect(() => {
    const ProdCards = async () => {
      const prodInfo = await fetch(API_URLN);
      const result = await prodInfo.json();
      const currentProdCards =
        i18n.language.toUpperCase() === "KA"
          ? result.products_KA
          : result.products;
      setProd(currentProdCards || []);
    };
    ProdCards();
  }, [i18n.language]);

  let filteredProducts = prod.filter((item) => {
    if (!activeCategory) return true;
    return item.category === activeCategory;
  });

  if (sortByPrice) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      const priceA = Number(String(a.price).replace(/[^0-9.]/g, ""));
      const priceB = Number(String(b.price).replace(/[^0-9.]/g, ""));

      if (sortByPrice === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
  }

  return (
    <div className="w-full grow">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-400 dark:text-slate-500 transition-colors duration-300">
          ამ კატეგორიაში პროდუქტები არ მოიძებნა.
        </div>
      )}
    </div>
  );
}

export default SmallCards;
