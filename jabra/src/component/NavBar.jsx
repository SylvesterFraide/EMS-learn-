import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../assets/icons/logo.png";

const NavBar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 60);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* <div className="h-15vh"></div> */}
      <section
        className='flex items-center bg-gray-200 w-full text-gray-700 sticky z-50 top-0 left-0 h-[12vh]'
      >
        <div className="w-[80vw] mx-auto flex items-center justify-between font-semibold">
          <img src={logo} alt="Logo" className="w-12 h-auto object-contain" />

          {/* desktop view */}
          <div className="md:flex hidden justify-center items-center space-x-6 text-xl">
            {NavItems.map((item, index) => (
              <>
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-green-700"
                >
                  {item.name}
                </Link>
                {index < NavItems.length - 1 && (
                  <p className="w-[1px] h-[20px] bg-gray-400"></p>
                )}
              </>
            ))}
          </div>

          {/* mobile view */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-blue-500 z-50 cursor-pointer"
          >
            {isMenuOpen ? <FaX size={20} /> : <FaBars size={20} />}
          </button>

          <div
            className={`fixed z-50 inset-0 top-42 h-[72.5vh] flex ${isMenuOpen ? "flex-col" : "hidden"} space-y-6 md:hidden justify-center items-center text-xl bg-red-200`}
          >
            {NavItems.map((item, index) => (
              <>
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-green-700 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;