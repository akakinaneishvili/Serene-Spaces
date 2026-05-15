import headerBG from "../assets/headerBG.svg";
import Arrow from "../assets/Arrow.svg";
import ArrowDown from "../assets/ArrowDown2.svg";
import bgimg from "../assets/BgImg.svg";

import Header from "../leyout/Header";
import Cards from "../cards/Cards";
import SmallCards from "../cards/SmallCards";
import Popproducts from "../cards/PoProducts";
import CategotyMenu from "../components/CategotyMenu";
import Inspiration from "../components/Inspiration";

function Home() {
  return (
    <>
      <div
        className="w-full min-h-150 bg-cover bg-center relative -z-1 flex items-end pb-20" // დავამატე flex და pb-20
        style={{ backgroundImage: `url(${headerBG})` }}
      >
        <div className="max-w-7xl mx-auto w-full px-8 text-7xl text-white font-serif">
          We Craft Your Dream Home
        </div>
      </div>

      <div className="bg-[rgb(252,243,231)]">
        <div className="max-w-7xl m-auto px-6">
          <div className="flex pt-10 items-center">
            <p className="text-5xl font-bold">Our Bestsellers</p>
            <p className="ml-auto flex items-center gap-2 font-bold cursor-pointer">
              See all <img src={Arrow} alt="Arrow" />
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Cards props={3} />
            </div>
          </div>

          <div className="flex pt-20 items-center justify-between flex-wrap gap-4">
            <p className="text-5xl font-bold">Explore by Category</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold">Sort by</span>
              <button className="flex items-center gap-2 border border-black rounded-xl px-4 py-2 hover:bg-[rgba(140,125,110,0.8)]">
                Price <img src={ArrowDown} alt="" />
              </button>
            </div>
          </div>

          <div className="flex mt-14 justify-between gap-10">
            <CategotyMenu />
            <SmallCards />
          </div>

          <div className="py-20">
            <h1 className="text-5xl font-bold mb-10">Interior Inspiration</h1>
            <Inspiration />
          </div>

          <div
            className="w-full bg-cover bg-center mt-20  flex justify-start items-end py-32 px-10 md:px-20"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div className="max-w-xl bg-black text-white rounded-2xl p-10 border border-white opacity-90">
              <p className="text-3xl mb-4 font-bold">About Us</p>
              <p className="leading-relaxed text-lg">
                At Serene Spaces, we believe that your home is a reflection of
                your personality and style. Established with a passion for
                design and an eye for detail, we specialize in crafting
                exquisite furniture and providing bespoke interior solutions
                that transform spaces into elegant, comfortable, and functional
                homes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
