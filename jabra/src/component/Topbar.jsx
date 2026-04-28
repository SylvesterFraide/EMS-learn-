import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Topbar = () => {
  return (
    <section className="h-[8vh] w-full bg-green-700/80 text-xl text-white items-center flex">
      <div className="w-[80vw] mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center space-x-6">
          <p className="flex items-center gap-1">
            <IoCallOutline className="inline-block mr-2" />
            <span> +1 (254) 700 376 500</span>
          </p>
          <p className="flex items-center gap-1">
            <CiMail className="inline-block mr-2" />
            <span> jabralandscaping@gmail.com</span>
          </p>
        </div>
        <div className="space-x-6 flex items-center cursor-pointer">
          <FaFacebook className="bg-blue-600" />
          <FaYoutube className="bg-red-600" />
          <FaLinkedin className="bg-blue-700" />
          <FaInstagramSquare className="bg-pink-600" />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
