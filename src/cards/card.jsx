import { Link } from "react-router-dom";

function Card({ id, image, name, price }) {
  const productPath = id ? `/product/${id}` : "#";

  return (
    <Link
      to={productPath}
      className="flex flex-col h-full rounded-lg p-4 shadow-sm hover:shadow-lg transition-all bg-[#fcf3e7] no-underline group"
    >
      <div className="w-full h-48 overflow-hidden rounded-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col grow">
        <p className="mt-3 text-xl text-black font-bold line-clamp-2 uppercase">
          {name}
        </p>

        <p className="mt-auto pt-2 text-2xl font-bold text-[rgba(188,95,19,1)]">
          {price}
        </p>
      </div>
    </Link>
  );
}

export default Card;
