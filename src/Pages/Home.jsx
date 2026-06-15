import { useSearchParams } from "react-router-dom";
import Arrow from "../assets/Arrow.svg";
import ArrowDown from "../assets/ArrowDown2.svg";
import bgimg from "../assets/BgImg.svg";

import Cards from "../cards/Cards";
import SmallCards from "../cards/SmallCards";
import Popproducts from "../cards/PoProducts";
import CategotyMenu from "../components/CategotyMenu";
import Inspiration from "../components/Inspiration";
import { useTranslation } from "react-i18next";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get("sort");
  const { t, i18n } = useTranslation();

  const isGeorgian = i18n.language.toUpperCase() === "KA";

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
    if (currentSort === "asc") return t("sort_low_high", "Price: Low to High");
    if (currentSort === "desc") return t("sort_high_low", "Price: High to Low");
    return t("sort_price", "Price");
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
            <h1
              className={`text-black dark:text-white leading-tight tracking-tight drop-shadow-sm transition-all duration-300
                ${
                  isGeorgian
                    ? "font-sans text-5xl md:text-6xl font-bold tracking-wide"
                    : "font-serif text-6xl md:text-8xl"
                }`}
            >
              {isGeorgian ? (
                <>
                  ჩვენ ვქმნით თქვენს <br />
                  <span className="text-[#bc5f13] font-medium">
                    ოცნების სახლს
                  </span>
                </>
              ) : (
                <>
                  We Craft Your <br />
                  <span className="text-[#bc5f13] italic font-medium">
                    Dream Home
                  </span>
                </>
              )}
            </h1>

            <p
              className={`text-gray-600 dark:text-slate-400 max-w-md leading-relaxed transition-all duration-300
                ${
                  isGeorgian
                    ? "font-sans text-base md:text-lg font-normal tracking-wide opacity-90"
                    : "font-light text-xl"
                }`}
            >
              {t(
                "home_desc",
                "Discover furniture and interior solutions where timeless heritage meets slick modernity...",
              )}
            </p>
            <div className="pt-4"></div>
          </div>

          <div className="hidden lg:flex justify-center items-center relative h-125 z-10">
            <div className="w-80 h-80 border border-[rgba(188,95,19,0.2)] dark:border-slate-800 rounded-full absolute animate-ping-slow"></div>
            <div className="w-64 h-64 bg-[rgba(163,148,133,0.1)] dark:bg-slate-900/50 backdrop-blur-md border border-[rgba(188,95,19,0.15)] rounded-2xl rotate-12 flex items-center justify-center p-8 shadow-xl transition-colors">
              <p
                className={`text-center text-[#bc5f13] ${isGeorgian ? "font-sans font-bold text-xl" : "font-serif italic text-2xl"}`}
              >
                {isGeorgian ? "მარადიული და მშვიდი" : "Timeless & Serene"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgb(252,243,231)] dark:bg-slate-950 text-black dark:text-white transition-colors duration-300">
        <div className="max-w-7xl m-auto px-6">
          <div className="flex pt-10 items-center">
            <p
              className={`font-bold ${isGeorgian ? "font-sans text-4xl" : "text-5xl"}`}
            >
              {t("bestsellers", "Our Bestsellers")}
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Cards props={3} />
            </div>
          </div>

          <div className="flex pt-20 items-center justify-between flex-wrap gap-4">
            <p
              className={`font-bold ${isGeorgian ? "font-sans text-4xl" : "text-5xl"}`}
            >
              {t("explore_category", "Explore by Category")}
            </p>
            <div className="flex items-center gap-4">
              <span
                className={`text-gray-400 dark:text-gray-500 font-bold ${isGeorgian ? "font-sans text-sm" : ""}`}
              >
                {t("sort_by", "Sort by")}
              </span>

              <button
                onClick={handleSortChange}
                className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-[rgba(188,95,19,0.15)] dark:border-slate-800 rounded-xl px-5 py-2.5 hover:border-[#bc5f13] dark:hover:border-[#bc5f13] hover:shadow-md transition-all duration-300 cursor-pointer font-medium text-sm text-gray-800 dark:text-gray-200 min-w-48 justify-between active:scale-95 shadow-sm"
              >
                <span className={isGeorgian ? "font-sans" : ""}>
                  {getSortLabel()}
                </span>
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

          <div className="flex flex-col lg:flex-row mt-14 justify-between gap-10 items-start">
            <div className="w-full lg:w-1/4">
              <CategotyMenu />
            </div>
            <div className="w-full lg:w-3/4">
              <SmallCards />
            </div>
          </div>

          <div className="py-20">
            <h1
              className={`font-bold mb-10 ${isGeorgian ? "font-sans text-4xl" : "text-5xl"}`}
            >
              {t("inspiration_title", "Interior Inspiration")}
            </h1>
            <Inspiration />
          </div>

          <div
            className="w-full bg-cover bg-center mt-20 flex justify-start items-end py-32 px-10 md:px-20 rounded-[2.5rem] overflow-hidden"
            style={{ backgroundImage: `url(${bgimg})` }}
          >
            <div className="max-w-xl bg-black text-white dark:bg-white dark:text-black rounded-2xl p-10 border border-white dark:border-black opacity-90 transition-colors duration-300">
              <p
                className={`mb-4 font-bold ${isGeorgian ? "font-sans text-2xl" : "text-3xl"}`}
              >
                {t("about_title", "About Us")}
              </p>
              <p
                className={`leading-relaxed font-light ${isGeorgian ? "font-sans text-base font-normal tracking-wide" : "text-lg"}`}
              >
                {t(
                  "about_desc",
                  "At Serene Spaces, we believe that your home is a reflection...",
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
