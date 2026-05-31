import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <div className="text-white w-full">
      <div className="bg-gray-700 py-2 h-auto]">
        <div className="flex flex-col">
          <p>logo</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            dignissimos assumenda consequatur totam, error provident fuga velit
            officia,
          </p>
        </div>
        <div className="">
          <h2>useful links</h2>
          <div className="">
            <div className="">
              <MdKeyboardDoubleArrowRight />
              <Link to="/">Home</Link>
            </div>

            <div className="">
              <MdKeyboardDoubleArrowRight />
              <Link to="/about">About</Link>
            </div>
            <div className="">
              <MdKeyboardDoubleArrowRight />
              <Link to="/services">Services</Link>
            </div>
            <div className="">
              <MdKeyboardDoubleArrowRight />
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 mx-auto text-center bg-gray-800">
        <p>
          &copy;
          <span className="capitalize">Jabra landscaping and design. </span>All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
