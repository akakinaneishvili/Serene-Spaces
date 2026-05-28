import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Inspiration() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`${API_URL}/InspirationImg`);
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="flex justify-between gap-12">
          <div className="flex flex-col w-1/2">
            {images.slice(0, 2).map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? "mb-12" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt="Inspiration"
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-1/2">
            {images.slice(2, 4).map((item, index) => (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  index === 0 ? "mb-40" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt="Inspiration"
                  className="w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Inspiration;
