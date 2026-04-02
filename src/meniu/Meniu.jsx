import Rectangle6 from "../assets/Rectangle6.svg";
import Rectangle7 from "../assets/Rectangle7.svg";
import Rectangle8 from "../assets/Rectangle8.svg";

import "./Meniu.css";

function Meniu() {
  return (
    <>
      <div className="flex-col h-[600px] ">
        <img src={Rectangle6} alt="" />
        <p className="mt-6 text-2xl text-black font-bold">Dining Room </p>
        <p className="mt-6  text-2xl font-bold text-[rgba(188,95,19,1)] ">
          $1900.00
        </p>
      </div>

      <div className="flex-col h-[600px] ">
        <img src={Rectangle7} alt="" />
        <p className="mt-6 text-2xl text-black font-bold">Bed Room </p>
        <p className="mt-6  text-2xl font-bold text-[rgba(188,95,19,1)] ">
          $2290.00{" "}
        </p>
      </div>

      <div className="flex-col h-[600px] ">
        <img src={Rectangle8} alt="" />
        <p className="mt-6 text-2xl text-black font-bold">Living Room </p>
        <p className="mt-6  text-2xl font-bold text-[rgba(188,95,19,1)] ">
          $1285.00{" "}
        </p>
      </div>
    </>
  );
}

export default Meniu;
