import React, {useState, useEffect } from "react";
import { API_URL } from "../config";


function Popproducts(props) {
  const [prod, setProd] = useState([]);
  
    useEffect(() => {
     const ProdCards =  async () => {
        const prodInfo = await fetch(`${API_URL}/product`);
        const data = await prodInfo.json();
        setProd(data)
      };
      ProdCards();
    }, []);
  
   

  return (

      
      

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {prod.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="flex flex-col h-full  rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
          >
            
            <div className="h-64 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 "
              />
            </div>

          
            <div className="p-6 flex flex-col grow">
              <p className="text-xl text-gray-800 font-bold mb-2 line-clamp-2">
                {item.name}
              </p>
              
              
              <div className="mt-auto flex items-center justify-between">
                <p className="text-2xl font-bold text-[rgba(188,95,19,1)]">
                  {item.price}
                </p>
                
              </div>
            </div>
          </div>
        ))}

      </div>
   
  );
}

export default Popproducts;