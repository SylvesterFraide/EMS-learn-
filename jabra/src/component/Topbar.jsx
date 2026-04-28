import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Topbar = () => {
  return (
    <section className="h-[8vh] bg-green-700/80 text-xl text-white items-center flex">
      <div className="w-[80vw] mx-auto flex items-center justify-between">
        <div className="font-semibold">Jabra landScaping solutions</div>
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
