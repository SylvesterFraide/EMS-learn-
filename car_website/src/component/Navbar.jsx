import React, { useState } from "react";
import { href } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#/" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <section className="w-full h-[10vh] shadow-md">
      <nav className="flex justify-between pt-5 items-center w-[80vw] mx-auto">
        <h2 className="text-2xl font-bold capitalize">car rental</h2>

        <div className="flex items-center space-x-6 ">
          {navItems.map((item) => (
            <p key={item.name} className="text-xl font-semibold hidden md:flex">
              <a href={item.href}>{item.name}</a>
            </p>
          ))}

          <p onClick={toggleTheme} className="text-xl font-semibold">
            {isDarkMode ? <FiSun  /> : <FaMoon  />}
          </p>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
