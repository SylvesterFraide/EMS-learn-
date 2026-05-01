import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="h-20vh"></div>
      <section
        className={` flex items-center bg-gray-200 w-full text-gray-700 transition-all duration-800 ease-in-out ${isScrolled ? "fixed top-0 left-0 h-[10vh] w-full z-10" : "h-[20vh]"}`}
      >
        <div className="w-[80vw] mx-auto flex items-center justify-between font-semibold">
          <p className="text-3xl">Logo</p>
          <div className="flex justify-center items-center space-x-6 text-xl">
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
        </div>
      </section>
    </>
  );
};

export default NavBar;
