import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
       localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div>
      <button onClick={toggleTheme} className=" fixed top-5 right-5 z-50 rounded-full transition-colors duration-300">
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-300 cursor-pointer" />
        ) : (
          <Moon className="w-6 h-6 text-blue-900 cursor-pointer" />
        )}
      </button>
    </div>
  );
};
