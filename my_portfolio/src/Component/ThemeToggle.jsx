import { useEffect, useState } from "react"; 
import { Sun, Moon } from "lucide-react"; 

export const ThemeToggle = () => { 
  const [isDarkMode, setIsDarkMode] = useState(false); 
  
  const toggleTheme = () => { 
    if (isDarkMode) { 
      document.documentElement.classList.remove("dark"); 
      localStorage.setItem("theme", "light"); 
      setIsDarkMode(false); 
    } else { 
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
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-secondary/50 transition-colors duration-300" // removed fixed
    > 
      {isDarkMode ? ( 
        <Sun className="w-5 h-5 text-yellow-400 cursor-pointer" /> 
      ) : ( 
        <Moon className="w-5 h-5 text-blue-900 dark:text-blue-300 cursor-pointer" /> 
      )} 
    </button> 
  ); 
};