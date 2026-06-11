import React, { useState, useEffect } from "react";
import { API_URLN } from "../config";
import { useTranslation } from "react-i18next";

function Popproducts(props) {
  const [prod, setProd] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const ProdCards = async () => {
      const prodInfo = await fetch(API_URLN);
      const result = await prodInfo.json();
      const currentProdCards =
        i18n.language.toUpperCase() === "KA"
          ? result.product_KA
          : result.product;
      setProd(currentProdCards || []);
    };
    ProdCards();
  }, [i18n.language]);

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find(
      (cartItem) => cartItem.id === item.id,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    const event = new CustomEvent("cart-updated", { detail: existingCart });
    window.dispatchEvent(event);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
      {prod.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden group transition-all duration-300"
        >
          <div className="h-64 w-full overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-4 sm:p-6 flex flex-col grow justify-between">
            <div>
              <p className="text-lg md:text-xl text-gray-800 dark:text-white font-bold mb-1 line-clamp-2 transition-colors uppercase">
                {item.name}
              </p>
              <p className="text-xl md:text-2xl font-bold text-[rgba(188,95,19,1)] mb-4">
                {item.price}
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-auto  bg-[#bc5f13] text-white dark:bg-white dark:text-black text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              {t("addToCart")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Popproducts;
