import { useState, useEffect } from "react";
import { API_URL } from "../config";
import { useSearchParams } from "react-router-dom";
import Card from "./card";

function SmallCards() {
  const [prod, setProd] = useState([]);
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category");

  useEffect(() => {
    const getProdCards = async () => {
      try {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setProd(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getProdCards();
  }, []);

  const filteredProducts = prod.filter((item) => {
    if (!activeCategory) return true;
    return item.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
        <div className="text-center py-20 text-gray-400">
          ამ კატეგორიაში პროდუქტები არ მოიძებნა.
        </div>
      )}
    </div>
  );
}

export default SmallCards;
