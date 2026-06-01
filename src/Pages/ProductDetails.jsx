import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${API_URL}/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    const event = new CustomEvent("cart-updated", { detail: existingCart });
    window.dispatchEvent(event);
  };

  return (
    <>
      <div className="bg-[rgb(252,243,231)] dark:bg-slate-950 pt-60 pb-20 min-h-screen text-black dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold uppercase">
              {product?.name}
            </h1>
            <p className="text-4xl font-bold text-orange-700 dark:text-orange-500">
              {product?.price}
            </p>
            <p className="text-xl text-gray-700 dark:text-slate-300 leading-relaxed">
              {product?.description}
            </p>

            <button
              onClick={handleAddToCart}
              className="w-40 mt-4 bg-black text-white dark:bg-white dark:text-black text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-[#bc5f13] hover:text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
