import { useEffect, useState } from "react";
const API_URLN =
  "https://api.myjson.online/v1/records/836223de-fa91-4342-91f2-2780c715da6c";

function Inspiration() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(API_URLN);
      const result = await response.json();
      setImages(result.data.InspirationImg);
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
