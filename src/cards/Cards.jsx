import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";

function Cards({props}) {
  const [prod, setProd] = useState([]);

  useEffect(() => {
   const ProdCards =  async () => {
      const prodInfo = await fetch(`${API_URL}/products`);
      const data = await prodInfo.json();
      setProd(data)
    };
    ProdCards();
  }, []);

   const displayData = props ? prod.slice(0, props) : prod;

  return (
    

   <>  
      {displayData.map((item) => (
     <Link 
          to={`/product/${item.id}`} 
          key={item.id} 
          className="no-underline block h-full" 
        >
          <div
            className="flex flex-col h-full rounded shadow p-4 hover:shadow-lg transition hover:cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-110 object-cover rounded"
            />
            <p className="mt-4 text-2xl text-black font-bold">{item.name}</p>
            <p className="mt-2 text-2xl font-bold text-[rgba(188,95,19,1)]">
              {item.price}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Cards;
