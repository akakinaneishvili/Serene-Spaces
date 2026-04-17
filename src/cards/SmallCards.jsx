import products from "./products";

function SmallCards() {
  return (
    <div className=" w-247.5 grid grid-cols-2 md:grid-cols-4 gap-6 ">
      {products
        .filter(item => item.id > 4)
        .map((item) => (
          <div key={item.id} className="  rounded-lg p-4 shadow-sm hover:shadow-lg hover:cursor-pointer">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <p className="mt-3 text-2xl text-black font-bold">{item.name}</p>
            <p className="mt-2 text-2xl font-bold text-[rgba(188,95,19,1)]">
              {item.price}
            </p>
          </div>
        ))}
    </div>
  );
}

export default SmallCards;