import React from "react";
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

const NavBar = () => {
  return (
    <section className="flex items-center bg-gray-200 w-full h-[20vh] text-gray-700">
      <div className="w-[80vw] mx-auto flex items-center justify-between font-semibold">
        <p className="text-3xl">Logo</p>
        <div className="flex justify-center items-center space-x-6 text-xl">
          {NavItems.map((item) => (
            <>
              <Link key={item.name} to={item.path} className="hover:text-green-700">
                {item.name}
              </Link>
              <p className="w-[1px] h-[20px] bg-gray-400"></p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
