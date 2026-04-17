import Rectangle from "./assets/Rectangle 1.svg";
import Vector from "./assets/Vector.svg";
import Arrow from "./assets/Arrow.svg";
import ArrowDown from "./assets/Arrow Down 2.svg";

import "./App.css";
import Cards from "./cards/Cards";
import Inspiration from "./Inspiration/Inspiration";

import navbarData from "./navbar/navbar"; 
import SmallCards from "./cards/SmallCards";
import CategoryMenuComponent from "./category/Menu";
import Popproducts from "./products/PopularProducts";

import bgimg from "./assets/BgImg.svg"
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header
        className="w-full h-200 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${Rectangle})` }}
        
      >
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 flex w-375 h-20 justify-between items-center bg-[rgba(163,148,133,0.8)] rounded-2xl p-4">
          <h2 className="text-black text-2xl font-bold">Serene Spaces</h2>

          <nav>
            <ul className="flex gap-6 justify-around items-center text-black w-125 h-11">
              
              {navbarData.map((item) => (
                <li
                  key={item.path}
                  className="cursor-pointer h-9 flex items-center justify-center px-3 transition-colors duration-300 rounded-2xl hover:bg-[rgba(140,125,110,0.8)] hover:shadow-md"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3 items-center">
            <div className="rounded-2xl px-4 py-2 inline-flex items-center justify-center transition-all duration-300 hover:bg-[rgba(140,125,110,0.8)] hover:shadow-md">
              <img src={Vector} alt="Vector Icon" className="w-5 h-5" />
            </div>

            <button className="text-black px-4 py-2 rounded-2xl inline-flex items-center justify-center transition-all duration-300 hover:bg-[rgba(140,125,110,0.8)] hover:shadow-md">
              EN
            </button>
            <button className="bg-[rgba(163,148,133,0.8)] border border-black text-black px-4 py-2 rounded-xl">
              Contact Us
            </button>
          </div>
          
        </div>


        <div className="absolute bottom-10 left-80 text-7xl text-white"> We Craft Your Dream Home</div>
 


      </header>

      <main className="bg-[rgb(252,243,231)] pb-36">
        <div className="w-375 m-auto">
          <div className="flex pt-10 items-center">
            <p className="text-5xl font-bold">Our Bestsellers</p>
            <p className="ml-auto flex items-center justify-between w-25 font-bold">
              See all <img src={Arrow} alt="Arrow" />
            </p>
          </div>

          <div className="flex mt-10 justify-between">
            <Cards />
          </div>

          <div className="flex pt-20 items-center">
            <p className="text-5xl font-bold">Explore by Category</p>
            <p className="ml-auto flex items-center justify-between w-25 font-bold">
              Sort by
            </p>

            <div className="flex justify-between w-87.5">
              <button className="flex items-center justify-between w-25 h-10 border border-black rounded-xl px-3">
                Prize <img src={ArrowDown} alt="Arrow Down" />
              </button>
              <button className="flex items-center justify-between w-25 h-10 border border-black rounded-xl px-3">
                Date <img src={ArrowDown} alt="Arrow Down" />
              </button>
              <button className="flex items-center justify-between w-32.5 h-10 border border-black rounded-xl px-3">
                Relevance <img src={ArrowDown} alt="Arrow Down" />
              </button>
            </div>
          </div>

          <div className="flex mt-14 justify-between">
            
            <CategoryMenuComponent />
            <SmallCards />
          </div>

          <div>
            <h1 className="text-black text-5xl font-bold mt-20 mb-20 ">
              Interior Inspiration
            </h1>
            <Inspiration />
          </div>

          
            
            <Popproducts/>
        
            <div 
                    className="w-full h-200 bg-cover bg-center mt-20 mb-32  flex justify-start items-end p-20 "
                    style={{ backgroundImage: `url(${bgimg})` }}
                  >
 
  
                    <div className="w-150 h-92.5 bg-black text-white rounded-2xl p-10 border border-white"> 
                            <p className="text-3xl mb-2">About Us</p>
                            <p>At Serene Spaces, we believe that your home is a reflection of your personality and style.
                              Established with a passion for design and an eye for detail, we specialize in crafting exquisite 
                              furniture and providing bespoke interior
                            solutions that transform spaces into elegant, comfortable, and functional homes.</p>
                    </div>            
              </div>
           
        </div>

        
      </main>

      <Footer/>
    </>
  );
}

export default App;
