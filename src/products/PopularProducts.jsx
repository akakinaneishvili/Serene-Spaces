import React from "react";
import products from "./products";

function Popproducts() {
  return (
    <div className="w-full px-4">
      <h1 className="text-black text-5xl font-bold mt-20 mb-20 font-serif">
        Popular Products
      </h1>

      <div className="flex flex-nowrap justify-between gap-6">
        {products.slice(0, 4).map((prod) => (
          
          <div 
            key={prod.id} 
            className="flex flex-col  transition-all duration-300  rounded-lg p-4 shadow-sm hover:shadow-lg hover:cursor-pointer"
          >
            
            <div className="w-75 overflow-hidden rounded-[2.5rem]">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            
            <div className="mt-5 flex flex-col items-start px-2">
              <p className="text-[20px] font-bold text-black font-serif leading-tight">
                {prod.name}
              </p>
              <p className="text-[20px] font-bold text-[rgba(188,95,19,1)] mt-2">
                {prod.price} 
              </p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popproducts;