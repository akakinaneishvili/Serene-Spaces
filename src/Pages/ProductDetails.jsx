import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../config";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`${API_URL}/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-60 text-center text-2xl bg-[rgb(252,243,231)] dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
        იტვირთება...
      </div>
    );
  }

  return (
    <>
      <div className="bg-[rgb(252,243,231)] dark:bg-slate-950 pt-60 pb-20 min-h-screen text-black dark:text-white transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl object-cover border border-transparent dark:border-slate-800"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-5xl font-extrabold uppercase">
              {product.name}
            </h1>
            <p className="text-4xl font-bold text-orange-700 dark:text-orange-500 transition-colors">
              {product.price}
            </p>
            <p className="text-xl text-gray-700 dark:text-slate-300 leading-relaxed transition-colors">
              {product.description}
            </p>
            <button className="bg-black text-white dark:bg-white dark:text-black px-12 py-5 rounded-full font-bold uppercase transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
