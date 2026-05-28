import { useTheme } from "../context/ThemeContext.jsx";

function DarkModeBtn() {
  const { darkmode, setDarkmode } = useTheme();

  return (
    <button
      onClick={() => setDarkmode(!darkmode)}
      className="p-2.5 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm border
                
                 bg-[rgba(163,148,133,0.15)] text-[rgba(45,40,35,1)] border-[rgba(188,95,19,0.15)] 
                 hover:bg-[rgba(188,95,19,1)] hover:text-white hover:border-transparent hover:shadow-md
                
                 dark:bg-slate-900/60 dark:text-slate-300 dark:border-slate-800/60 
                 dark:hover:bg-[rgba(188,95,19,1)] dark:hover:text-white dark:hover:border-transparent
                 
                 active:scale-95 cursor-pointer group"
      title={darkmode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkmode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 transition-transform duration-300 group-hover:-rotate-12"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}

export default DarkModeBtn;
