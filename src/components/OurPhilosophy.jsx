import { useEffect, useState } from "react";
import { API_URL } from "../config";

function OurPhilosophy() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const getOurPhilosophy = async () => {
      const response = await fetch(`${API_URL}/OurPhilosophy`);
      const data = await response.json();
      setinfo(data);
    };

    getOurPhilosophy();
  }, []);

  return (
    <>
      {info.map((item) => (
        <div className="flex flex-col items-center text-center" key={item.id}>
          <div className="w-20 h-20 border border-[rgba(188,95,19,0.4)] flex items-center justify-center mb-8">
            <img src={item.image} className="w-10 h-10 object-contain" />
          </div>
          <h3 className="text-2xl font-serif mb-6 text-black">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default OurPhilosophy;
