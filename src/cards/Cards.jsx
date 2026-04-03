
import products from "./products"
import "./cards.css";

function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col rounded shadow p-4 hover:shadow-lg transition"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-110 h-130 object-cover rounded"
          />
          <p className="mt-4 text-2xl text-black font-bold">{item.name}</p>
          <p className="mt-2 text-2xl font-bold text-[rgba(188,95,19,1)]">
            {item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;