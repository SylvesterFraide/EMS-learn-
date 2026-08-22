import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from '../assets/icons/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // auto update year

  return (
    <footer className="text-white w-full bg-gray-700">
      <div className="flex flex-col md:flex-row py-12 px-6 md:px-14 gap-8 max-w-7xl mx-auto"> 

        {/* Column 1: Logo + About */}
        <div className="flex flex-col items-start md:items-center justify-start md:w-[30rem] w-full">
          <img src={logo} alt="Jabra Logo" className="w-16 h-auto object-contain mb-4" />
          <p className="text-base text-gray-300 leading-relaxed">
            We are committed to providing top-notch gardening and landscaping solutions tailored to your needs.
            Our team of experts is dedicated to transforming your outdoor space into a beautiful and functional area.
          </p>
          {/* Added socials here for mobile */}
          <div className="flex space-x-4 mt-6 md:hidden">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              <FaFacebook className="text-2xl text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              <FaTwitter className="text-2xl text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
              <FaInstagram className="text-2xl text-gray-300" />
            </a>
          </div>
        </div>

        {/* Column 2-4: Links */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Useful Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Useful Links</h2>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/services", label: "Services" },
                  { to: "/contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link className="flex items-center space-x-2 hover:text-green-500 transition-colors group" to={link.to}>
                      <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div className="hidden md:block"> {/* Hide on mobile*/}
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaFacebook className="text-2xl text-gray-300 hover:text-green-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaTwitter className="text-2xl text-gray-300 hover:text-green-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <FaInstagram className="text-2xl text-gray-300 hover:text-green-500" />
                </a>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-wide">Our Services</h2>
              <ul className="space-y-3">
                {["Landscaping", "Design", "Maintenance"].map((service) => (
                  <li key={service}>
                    <Link className="flex items-center space-x-2 hover:text-green-500 transition-colors group" to="/services">
                      <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1 transition-transform" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-center bg-gray-800 border-t border-gray-600">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} <span className="capitalize text-white font-semibold">Jabra Landscaping and Design.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;