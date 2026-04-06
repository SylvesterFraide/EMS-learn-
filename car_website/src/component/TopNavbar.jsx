import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <section className="w-full h-[15vh] shadow-md">
      <nav className="flex justify-between pt-5 items-center pt-10 w-[90vw] mx-auto">
        <h2 className="text-2xl font-bold capitalize">car rental</h2>
        <div className="md:flex hidden space-x-6 text-lg font-semibold">
            <div className="flex items-center space-x-2">
                <FaWhatsapp  className='text-green-500'/>
                <p>+254 700 000 000</p>
            </div>
            <div className="flex items-center space-x-2">
                <FaPhone className='text-blue-500'/>
                <p>+254 711 000 000</p>
            </div>
        </div>
        <div className="flex items-center md:space-x-6 space-x-2 text-xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className='text-blue-600' />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='text-red-600' />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-pink-600' />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-blue-700' />
            </a>
        </div>
      </nav>
    </section>
  )
}

export default TopNavbar