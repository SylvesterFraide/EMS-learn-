import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    if (isDarkMode) {
      // If it's dark mode, switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // If it's light mode, switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

 useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setIsDarkMode(true);
    document.documentElement.classList.add("dark");
  } else {
    setIsDarkMode(false);
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, []);
  return (
    <div>
      <button onClick={toggleTheme} className="rounded-full transition-colors duration-300">
        {isDarkMode ? (
          <FiSun className="w-6 h-6 text-yellow-300 cursor-pointer" />
        ) : (
          <FaMoon className="w-6 h-6 text-blue-900 cursor-pointer" />
        )}
      </button>
    </div>
  );
};
