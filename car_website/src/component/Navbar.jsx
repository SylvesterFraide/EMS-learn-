import React, { useState } from "react";
import { href } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="w-full h-[10vh] shadow-md bg-pink-600 text-white sticky top-0 z-50">
      <nav className="flex justify-center pt-5 items-center w-[80vw] mx-auto">
        {/* <h2 className="text-2xl font-bold capitalize">car rental</h2> */}

        <div className="flex items-center space-x-20 ">
          {navItems.map((item) => (
            <p key={item.name} className="text-xl font-semibold hidden md:flex">
              <a href={item.href}>{item.name}</a>
            </p>
          ))}
{/* 
          <p onClick={toggleTheme} className="text-xl font-semibold">
            {isDarkMode ? <FiSun  /> : <FaMoon  />}
          </p> */}

          <ThemeToggle />

        </div>
      </nav>
    </section>
  );
};

export default Navbar;
