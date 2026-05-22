import { useEffect, useState } from "react";
import { API_URL } from "../config";

function Milestones() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const getMilestones = async () => {
      const response = await fetch(`${API_URL}/milestones`);
      const data = await response.json();
      setinfo(data);
    };
    getMilestones();
  }, []);

  return (
    <>
      {info.map((item) => (
        <div className="border-b border-gray-200 pb-12" key={item.id}>
          <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
            {item.year}
          </h2>

          <h3 className="text-xl font-semibold text-black mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-lg">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default Milestones;
