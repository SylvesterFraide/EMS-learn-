import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-teal-700 text-white  h-[8vh]">
      <p className="ml-15 text-2xl macondo-regular" >Welcome <span className="text-teal-200">Admin</span> </p>
      <Link to='/Login'></Link>
      <button className="mr-15 bg-teal-600 p-[0.6rem] rounded-lg text-xl font-semibold cursor-pointer hover:bg-gray-700">LogOut</button>
    </div>
  );
};
export default NavBar;
