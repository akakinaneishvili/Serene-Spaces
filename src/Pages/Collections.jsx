import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { Link, useSearchParams } from "react-router-dom";
import CategotyMenu from "../components/CategotyMenu";
import CategotyCollections from "../components/CategotyCollections";
import Search from "../components/Search";

function Collections() {
  const [prod, setProd] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const ProdCards = async () => {
      const prodInfo = await fetch(`${API_URL}/products`);
      const data = await prodInfo.json();
      setProd(data);
    };

    ProdCards();
  }, []);

  const filteredProducts = prod.filter((item) => {
    const matchesCategory = !activeCategory || item.category === activeCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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

  return (
    <>
      <div className="pt-36 pb-20 bg-[rgb(252,243,231)] dark:bg-slate-950 transition-colors duration-300">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl text-center mb-24 tracking-tight mt-20 text-black dark:text-white transition-colors">
            Our Collections
          </h1>

          <div className="flex flex-col items-center text-center">
            <p className="max-w-[45ch] text-xl md:text-2xl leading-loose font-light text-gray-800 dark:text-slate-300 italic mb-8 transition-colors">
              Discover thoughtfully curated furniture pieces that transform your
              living spaces into sanctuaries of comfort and timeless elegance
            </p>
          </div>

          <div className="w-2xl h-0.5 bg-[rgba(188,95,19,0.3)] mt-20 mb-20"></div>
        </div>
        <Search query={searchQuery} onSearchChange={setSearchQuery} />

        <CategotyCollections />

        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="no-underline group"
              >
                <div className="flex flex-col h-full bg-[#fcf3e7] dark:bg-slate-900 rounded-lg shadow-sm p-4 hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800">
                  <div className="w-full h-64 overflow-hidden rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col grow">
                    <p className="text-lg text-gray-900 dark:text-white font-bold line-clamp-2 uppercase h-14 transition-colors mb-2">
                      {item.name}
                    </p>

                    <p className="text-xl font-bold text-[rgba(188,95,19,1)] mb-4">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
