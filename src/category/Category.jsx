import Component_1 from "./category img/Component 1 (1).svg";
import Component_2 from "./category img/Component 1 (2).svg";
import Component_3 from "./category img/Component 1 (3).svg";
import Component_4 from "./category img/Component 1 (4).svg";
import Component_5 from "./category img/Component 1 (5).svg";
import Component_6 from "./category img/Component 1.svg";
import ArrowRight from "./category img/Arrow Right 1.svg";


import Rectangle_1 from "./category img/Rectangle 12.svg";
import Rectangle_2 from "./category img/Rectangle 65.svg";
import Rectangle_3 from "./category img/Rectangle 66.svg";
import Rectangle_4 from "./category img/Rectangle 86.svg";
import Rectangle_5 from "./category img/Rectangle 87.svg";
import Rectangle_6 from "./category img/Rectangle 88.svg";
import Rectangle_7 from "./category img/Rectangle 95.svg";
import Rectangle_8 from "./category img/Rectangle 96.svg";
import Rectangle_9 from "./category img/Rectangle 97.svg";


function Category() {
  return (
    <>
      <div className="flex mt-14 justify-between">
        <div className="flex-col  p-4  h-[650px] w-[400px]">
          <button className="flex gap-10 items-center  w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_1} /> <p className="text-2xl">Dressers </p>{" "}
          </button>
          <button className="flex gap-10 items-center mt-5 w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_2} /> <p>Chairs </p>{" "}
          </button>
          <button className="flex gap-10 items-center mt-5  w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_3} /> <p>Dressers </p>{" "}
          </button>
          <button className="flex gap-10 items-center mt-5  w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_4} /> <p>Outdoor </p>{" "}
          </button>
          <button className="flex gap-10 items-center mt-5  w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_5} /> <p>Rugs </p>{" "}
          </button>
          <button className="flex gap-10 items-center  mt-5 w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <img src={Component_6} /> <p>Sofas </p>{" "}
          </button>
          <button className="flex gap-10 items-center mt-5 bg-black  w-[400px] h-[65px] border border-black rounded-xl px-3">
            {" "}
            <p className="text-white text-2xl"> All Category </p>{" "}
            <img src={ArrowRight} alt="" />{" "}
          </button>
        </div>

        <div className=" flex gap-3  flex-wrap w-[900px]">
          <div>
            <img src={Rectangle_1} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Modern Luxe Chair
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $214.00
            </p>
          </div>

          <div>
            <img src={Rectangle_2} alt="" />
            <p className="mt-3 text-2xl text-black font-bold"> Noir Dresser</p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $399.00
            </p>
          </div>

          <div>
            <img src={Rectangle_3} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Luxe Comfort Rug
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $175.00
            </p>
          </div>

          <div>
            <img src={Rectangle_4} alt="" />
            <p className="mt-3 text-2xl text-black font-bold"> Harmony Table</p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $115.00
            </p>
          </div>

          <div>
            <img src={Rectangle_5} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Crystal Hive Sofa
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $510.00
            </p>
          </div>

          <div>
            <img src={Rectangle_6} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Cove Coffee Sofa
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $600.00
            </p>
          </div>

          <div>
            <img src={Rectangle_7} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Artisan Highboy
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $330.00
            </p>
          </div>

          <div>
            <img src={Rectangle_8} alt="" />
            <p className="mt-3 text-2xl text-black font-bold"> Opulent Chair</p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $185.00
            </p>
          </div>

          <div>
            <img src={Rectangle_9} alt="" />
            <p className="mt-3 text-2xl text-black font-bold">
              {" "}
              Tradition Wool Rug
            </p>
            <p className="mt-3  text-2xl font-bold text-[rgba(188,95,19,1)] ">
              {" "}
              $220.00
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;