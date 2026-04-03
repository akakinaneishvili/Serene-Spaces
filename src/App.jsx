import Rectangle from "./assets/Rectangle 1.svg";
import Vector from "./assets/Vector.svg";
import Arrow from "./assets/Arrow.svg";
import ArrowDown from "./assets/Arrow Down 2.svg";

import "./App.css";
import Cards from "./cards/Cards";
import Category from "./category/Category";
import Inspiration from "./Inspiration/Inspiration";
import navbar from "./navbar/navbar"


function App() {
  return (
    <>
      <header
        className="w-full h-200 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        <div className="absolute  top-10 left-1/2 transform -translate-x-1/2 flex w-375 h-20 justify-between items-center bg-[rgba(163,148,133,0.8)] rounded-2xl p-4">
          <h2 className="text-black text-2xl font-bold">Serene Spaces</h2>

          <nav>
                  <ul className="flex gap-6 text-black">
                      {navbar.map((item) => (
                       <li key={item.path}>
                        {item.name}
                       </li>
                       ))}
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
        <div className="w-375 m-auto">
          <div className="flex pt-10 items-center ">
            <p className="text-5xl font-bold"> Our Bestsellers</p>
            <p className="ml-auto flex items-center justify-between  w-25 font-bold">
              {" "}
              See all <img src={Arrow} alt="" />{" "}
            </p>
          </div>

          <div className="flex mt-10 justify-between">
            <Cards/>
          </div>

          <div className="flex pt-20 items-center ">
            <p className="text-5xl font-bold">Explore by Category</p>
            <p className="ml-auto flex items-center justify-between  w-25 font-bold">
              Sort by
            </p>

            <div className="flex justify-between w-87.5">
              <button className="flex items-center justify-between w-25 h-10 border border-black rounded-xl px-3">
                Prize <img src={ArrowDown} alt="" />
              </button>
              <button className="flex items-center justify-between w-25 h-10 border border-black rounded-xl px-3">
                Date <img src={ArrowDown} alt="" />{" "}
              </button>
              <button className="flex items-center justify-between w-32.5 h-10 border border-black rounded-xl px-3">
                Relevance <img src={ArrowDown} alt="" />{" "}
              </button>
            </div>
          </div>

           <Category/>

          <div  >
            <h1 className="text-black text-5xl font-bold mt-20 mb-20">Interior Inspiration  </h1>

            <Inspiration/>
          </div>

           

        </div>


        
      </main>
    </>
  );
}

export default App;
