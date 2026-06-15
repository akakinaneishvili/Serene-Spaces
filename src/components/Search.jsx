import { useTranslation } from "react-i18next";

function Search({ query, onSearchChange }) {
  const { t, i18n } = useTranslation();
  const isGeorgian = i18n.language.toUpperCase() === "KA";
  return (
    <nav className="flex m-auto mb-10 items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-2 rounded-full border border-[rgba(188,95,19,0.15)] dark:border-slate-800 shadow-sm max-w-md backdrop-blur-sm transition-colors duration-300">
      <input
        type="text"
        placeholder={t("search_placeholder", "Search modern furniture...")}
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        className={`w-full bg-transparent px-4 py-2 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-all duration-300
          ${isGeorgian ? "font-sans text-sm font-normal tracking-wide" : "text-base font-light"}`}
      />

      <button className="bg-[rgba(188,95,19,1)] hover:bg-[rgba(168,85,15,1)] text-white p-3 rounded-full transition-all duration-300 flex items-center justify-center active:scale-95 shadow-md shadow-orange-900/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </nav>
  );
}

export default Search;
