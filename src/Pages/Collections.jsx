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

  return (
    <>
      <div className="pt-36 pb-20 bg-[rgb(252,243,231)]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl text-center mb-24 tracking-tight mt-20">
            Our Collections
          </h1>

          <div className="flex flex-col items-center text-center">
            <p className="max-w-[45ch] text-xl md:text-2xl leading-loose font-light text-gray-800 italic mb-8">
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
                <div className="flex flex-col h-full rounded-lg shadow-sm p-4 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-full h-64 overflow-hidden rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="flex flex-col grow">
                    <p className="text-lg text-gray-900 font-bold line-clamp-2 uppercase h-14">
                      {item.name}
                    </p>

                    <p className="mt-auto pt-4 text-xl font-bold text-[rgba(188,95,19,1)]">
                      {item.price}
                    </p>
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
