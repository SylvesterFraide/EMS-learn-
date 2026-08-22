import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../assets/icons/logo.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // close menu on route change

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`flex items-center w-full sticky z-50 top-0 left-0 h-[12vh] transition-all duration-300 ${
        isScrolled? "bg-white shadow-md" : "bg-gray-200"
      }`}
    >
      <div className="w-[90vw] md:w-[80vw] mx-auto flex items-center justify-between font-semibold">
        <Link to="/">
          <img src={logo} alt="Jabra Logo" className="w-14 h-auto object-contain" />
        </Link>

        {/* Desktop view */}
        <div className="md:flex hidden justify-center items-center space-x-6 text-lg">
          {NavItems.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-6">
              <Link
                to={item.path}
                className={`hover:text-green-700 transition-colors ${
                  location.pathname === item.path? "text-green-700" : ""
                }`} // active link
              >
                {item.name}
              </Link>
              {index < NavItems.length - 1 && (
                <span className="w-[1px] h-[20px] bg-gray-400"></span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-green-700 z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMenuOpen? <FaX size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed z-40 inset-0 top-[12vh] h-[calc(100vh-12vh)] flex flex-col ${
            isMenuOpen? "translate-x-0" : "translate-x-full"
          } space-y-8 md:hidden justify-start items-center pt-12 text-2xl bg-white transition-transform duration-300`}
        >
          {NavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-green-700 block transition-colors ${
                location.pathname === item.path? "text-green-700" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;