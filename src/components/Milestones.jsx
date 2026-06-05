import { useEffect, useState } from "react";
const API_URLN =
  "https://api.myjson.online/v1/records/836223de-fa91-4342-91f2-2780c715da6c";

function Milestones() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    const getMilestones = async () => {
      const response = await fetch(API_URLN);
      const result = await response.json();
      setinfo(result.data.milestones);
    };
    getMilestones();
  }, []);

  return (
    <>
      {info.map((item) => (
        <div
          className="border-b border-gray-200 dark:border-slate-800 pb-12 transition-colors duration-300"
          key={item.id}
        >
          <h2 className="text-4xl font-serif text-[rgba(188,95,19,1)] mb-6">
            {item.year}
          </h2>

          <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed max-w-lg transition-colors duration-300">
            {item.description}
          </p>
        </div>
      ))}
    </>
  );
}

export default Milestones;
