import { useSearchParams } from "react-router-dom";
import Arrow from "../assets/Arrow.svg";
import ArrowDown from "../assets/ArrowDown2.svg";
import bgimg from "../assets/BgImg.svg";

import Cards from "../cards/Cards";
import SmallCards from "../cards/SmallCards";
import Popproducts from "../cards/PoProducts";
import CategotyMenu from "../components/CategotyMenu";
import Inspiration from "../components/Inspiration";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort");

  const handleSortChange = () => {
    if (!currentSort) {
      searchParams.set("sort", "asc");
    } else if (currentSort === "asc") {
      searchParams.set("sort", "desc");
    } else {
      searchParams.delete("sort");
    }
    setSearchParams(searchParams);
  };

  const getSortLabel = () => {
    if (currentSort === "asc") return "Price: Low to High";
    if (currentSort === "desc") return "Price: High to Low";
    return "Price";
  };

  return (
    <>
      <div
        className="w-full min-h-195 relative overflow-hidden flex flex-col justify-center pt-32
                   bg-linear-to-br from-[#fbf6f0] via-[#FCF3E7] to-[#f3e6d5]
                   dark:from-slate-950 dark:via-slate-900 dark:to-neutral-950
                   transition-colors duration-500"
      >
        <div className="absolute top-20 right-[-10%] w-150 h-150 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob bg-[#bc5f13] dark:opacity-10 z-0"></div>
        <div className="absolute bottom-10 right-[10%] w-125 h-125 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000 bg-[#a39485] dark:opacity-5 z-0"></div>

        <div className="max-w-7xl mx-auto w-full px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 relative z-10 mt-12">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl text-black dark:text-white font-serif leading-tight tracking-tight drop-shadow-sm transition-colors">
              We Craft Your <br />
              <span className="text-[#bc5f13] italic font-medium">
                Dream Home
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-slate-400 font-light max-w-md leading-relaxed transition-colors">
              Discover furniture and interior solutions where timeless heritage
              meets slick modernity, tailored specifically for your peace of
              mind.
            </p>
            <div className="pt-4"></div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative h-[500px] z-10">
            <div className="w-80 h-80 border border-[rgba(188,95,19,0.2)] dark:border-slate-800 rounded-full absolute animate-ping-slow"></div>
            <div className="w-64 h-64 bg-[rgba(163,148,133,0.1)] dark:bg-slate-900/50 backdrop-blur-md border border-[rgba(188,95,19,0.15)] rounded-2xl rotate-12 flex items-center justify-center p-8 shadow-xl transition-colors">
              <p className="font-serif text-2xl text-center italic text-[#bc5f13]">
                Timeless & Serene
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(252,243,231)] dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
        <div className="max-w-7xl m-auto px-6">
          <div className="flex pt-10 items-center">
            <p className="text-5xl font-bold">Our Bestsellers</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Cards props={3} />
            </div>
          </div>

          <div className="flex pt-20 items-center justify-between flex-wrap gap-4">
            <p className="text-5xl font-bold">Explore by Category</p>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 dark:text-gray-500 font-bold">
                Sort by
              </span>

              <button
                onClick={handleSortChange}
                className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[rgba(188,95,19,0.15)] dark:border-slate-800 rounded-xl px-5 py-2.5 hover:border-[#bc5f13] dark:hover:border-[#bc5f13] hover:shadow-md transition-all duration-300 cursor-pointer font-medium text-sm text-gray-800 dark:text-gray-200 min-w-48 justify-between active:scale-95 shadow-sm"
              >
                <span>{getSortLabel()}</span>
                <img
                  src={ArrowDown}
                  alt=""
                  className={`w-3.5 h-3.5 dark:invert opacity-70 transition-transform duration-300 ${
                    currentSort ? "opacity-100 text-[#bc5f13]" : ""
                  } ${currentSort === "desc" ? "rotate-180" : ""}`}
                />
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
            className="w-full bg-cover bg-center mt-20 flex justify-start items-end py-32 px-10 md:px-20 rounded-[2.5rem] overflow-hidden"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div className="max-w-xl bg-black text-white dark:bg-white dark:text-black rounded-2xl p-10 border border-white dark:border-black opacity-90 transition-colors duration-300">
              <p className="text-3xl mb-4 font-bold">About Us</p>
              <p className="leading-relaxed text-lg font-light">
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
