import { createContext, useEffect, useState, useContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvaider({ children }) {
  const [darkmode, setDarkmode] = useState(() => {
    const savedTheme = localStorage.getItem("darkmode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));

    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <ThemeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
