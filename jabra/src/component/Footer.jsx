import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../assets/icons/logo.png'

const Footer = () => {
  return (
    <div className="text-white w-full ">
      <div className="flex flex-col md:flex-row bg-gray-700 py-2 px-14 h-auto gap-4">
        <div className="flex flex-col items-center justify-center sm:w-[30rem] w-full">
          {/* <p className="text-2xl font-bold text-green-600 uppercase">logo</p> */}
          <div className="">
            <img src={logo} alt="Logo" className="w-12 h-auto object-contain " />
          </div>

          <p className="text-base text-gray-300 mt-4 capitalize">
            we are committed to providing top-notch gardening and landscaping solutions tailored to your needs. 
            Our team of experts is dedicated to transforming your outdoor space into a beautiful and functional 
            area that you can enjoy for years to come.
          </p>
        </div>
        <div className="flex-1">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 p-4">
            <div>
              <h2 className="text-lg font-semibold mt-4">useful links</h2>
              <div className="my-4">
                <div className="flex items-center space-x-2">
                  <MdKeyboardDoubleArrowRight />
                  <Link className="hover:underline hover:text-green-500" to="/">
                    Home
                  </Link>
                </div>

                <div className="flex items-center space-x-2">
                  <MdKeyboardDoubleArrowRight />
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/about"
                  >
                    About
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <MdKeyboardDoubleArrowRight />
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/services"
                  >
                    Services
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <MdKeyboardDoubleArrowRight />
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg font-semibold">Follow us</h2>
              <div className="flex space-x-4 my-4">
                <Link
                  className="hover:underline hover:text-green-500"
                  to="/facebook"
                >
                  <FaFacebook className="text-xl text-gray-300 hover:text-green-500" />
                </Link>
                <Link
                  className="hov;er:underline hover:text-green-500"
                  to="/twitter"
                >
                  <FaTwitter className="text-xl text-gray-300 hover:text-green-500" />
                </Link>
                <Link
                  className="hover:underline hover:text-green-500"
                  to="/instagram"
                >
                  <FaInstagram className="text-xl text-gray-300 hover:text-green-500" />
                </Link>
              </div>
            </div>

            <div className="">
              <h2 className="text-lg font-semibold">Our Services</h2>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/"
                  >
                    Landscaping
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline hover:text-green-500"
                    to="/"
                  >
                    Maintenance
                  </Link>
                </li>
              </ul>
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
