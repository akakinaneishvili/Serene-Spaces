import { Link } from "react-router-dom";

function Card({ id, image, name, price }) {
  const productPath = id ? `/product/${id}` : "#";

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = existingCart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ id, image, name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    const event = new CustomEvent("cart-updated", { detail: existingCart });
    window.dispatchEvent(event);
  };

  return (
    <Link
      to={productPath}
      className="flex flex-col h-full rounded-2xl p-4 shadow-sm hover:shadow-lg bg-[#fcf3e7] dark:bg-slate-900 no-underline group transition-all duration-300"
    >
      <div className="w-full h-64 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col grow justify-between">
        <div>
          <p className="mt-3 text-lg md:text-xl text-black dark:text-white font-bold line-clamp-2 uppercase transition-colors duration-300 mb-1">
            {name}
          </p>

          <p className="text-xl md:text-2xl font-bold text-[rgba(188,95,19,1)] mb-4">
            {price}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-auto  bg-[#bc5f13] text-white dark:bg-white dark:text-black text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-black hover:text-white flex items-center justify-center gap-2 cursor-pointer active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default Card;
