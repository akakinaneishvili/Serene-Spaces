import Rectangle from "./assets/Rectangle 1.svg";
import Vector from "./assets/Vector.svg";
import Arrow from "./assets/Arrow.svg";
import ArrowDown from "./assets/Arrow Down 2.svg";

import "./App.css";
import Meniu from "./meniu/meniu";
import Category from "./category/Category";

function App() {
  return (
    <>
      <header
        className="w-full h-[800px] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="absolute  top-10 left-1/2 transform -translate-x-1/2 flex w-[1500px] h-[80px] justify-between items-center bg-[rgba(163,148,133,0.8)] rounded-2xl p-4">
          <h2 className="text-black text-2xl font-bold">Serene Spaces</h2>

          <nav>
            <ul className="flex gap-6 text-black">
              <li>Home</li>
              <li>Collections</li>
              <li>Inspiration</li>
              <li>About Us</li>
            </ul>
          </nav>

          <nav className="flex gap-3 items-center">
            <img src={Vector} alt="" />
            <button className=" text-black px-4 py-2 rounded p-10 ">EN</button>
            <button className=" bg-[rgba(163,148,133,0.8)] border border-black text-black px-4 py-2 rounded-xl">
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <main className=" bg-[#fcf3e7]">
        <div className="w-[1500px] m-auto">
          <div className="flex pt-10 items-center ">
            <p className="text-5xl font-bold"> Our Bestsellers</p>
            <p className="ml-auto flex items-center justify-between  w-25 font-bold">
              {" "}
              See all <img src={Arrow} alt="" />{" "}
            </p>
          </div>

          <div className="flex mt-10 justify-between">
            <Meniu />
          </div>

          <div className="flex pt-20 items-center ">
            <p className="text-5xl font-bold">Explore by Category</p>
            <p className="ml-auto flex items-center justify-between  w-25 font-bold">
              Sort by
            </p>

            <div className="flex justify-between w-[350px]">
              <button className="flex items-center justify-between w-[100px] h-[40px] border border-black rounded-xl px-3">
                Prize <img src={ArrowDown} alt="" />
              </button>
              <button className="flex items-center justify-between w-[100px] h-[40px] border border-black rounded-xl px-3">
                Date <img src={ArrowDown} alt="" />{" "}
              </button>
              <button className="flex items-center justify-between w-[130px] h-[40px] border border-black rounded-xl px-3">
                Relevance <img src={ArrowDown} alt="" />{" "}
              </button>
            </div>
          </div>

           <Category/>

        </div>


        
      </main>
    </>
  );
}

export default App;
