function Search({ query, onSearchChange }) {
  return (
    <nav className="flex m-auto mb-10 items-center gap-2 bg-white/80 p-2 rounded-full border border-[rgba(188,95,19,0.15)] shadow-sm max-w-md backdrop-blur-sm">
      <input
        type="text"
        placeholder="Search modern furniture..."
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full bg-transparent px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none text-base font-light"
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
