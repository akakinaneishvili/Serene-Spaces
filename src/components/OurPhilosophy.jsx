import { useEffect, useState } from "react";
import { API_URLN } from "../config";
import { useTranslation } from "react-i18next";

function OurPhilosophy() {
  const [info, setinfo] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const getOurPhilosophy = async () => {
      const response = await fetch(API_URLN);
      const result = await response.json();
      const isGeorgian = i18n.language.toUpperCase() === "KA";
      setinfo(isGeorgian ? result.OurPhilosophy_KA : result.OurPhilosophy);
    };

    getOurPhilosophy();
  }, [i18n.language]);

  return (
    <>
      {info.map((item) => (
        <div className="flex flex-col items-center text-center" key={item.id}>
          <div className="w-20 h-20 border border-[rgba(188,95,19,0.4)] dark:border-[rgba(188,95,19,0.7)] flex items-center justify-center mb-8 transition-colors duration-300">
            <img
              src={item.image}
              className="w-10 h-10 object-contain dark:invert"
            />
          </div>
          <h3 className="text-2xl font-serif mb-6 text-black dark:text-white transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed text-sm md:text-base transition-colors duration-300">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default OurPhilosophy;
