import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

function Cards({ props }) {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const ProdCards = async () => {
      const prodInfo = await fetch(`${API_URL}/products`);
      const data = await prodInfo.json();
      setProd(data);
    };
    ProdCards();
  }, []);

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

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

  const displayData = props ? prod.slice(0, props) : prod;

  return (
    <>
      {displayData.map((item) => (
        <Link
          to={`/product/${item.id}`}
          key={item.id}
          className="no-underline block h-full"
        >
          <div className="flex flex-col h-full bg-[#fcf3e7] dark:bg-slate-900 rounded shadow p-4 hover:shadow-lg transition hover:cursor-pointer border border-transparent dark:border-slate-800 transition-colors duration-300">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <div className="flex flex-col grow">
              <p className="text-2xl text-black dark:text-white font-bold transition-colors duration-300 mb-2">
                {item.name}
              </p>
              <p className="text-2xl font-bold text-[rgba(188,95,19,1)] mb-4">
                {item.price}
              </p>

              <button
                onClick={(e) => handleAddToCart(e, item)}
                className="w-full mt-auto bg-black text-white dark:bg-white dark:text-black text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#bc5f13] hover:text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Cards;
