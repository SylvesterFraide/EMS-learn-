import React from "react";
import { RiPriceTag2Line } from "react-icons/ri";
import { AiOutlineSafety } from "react-icons/ai";
import { GrUserExpert } from "react-icons/gr";

const WhyChooseUs = () => {
  return (
    <section className="w-[80vw] mx-auto bg-purple-102 h-screen">
      <h1
        duration-100
        className="text-4xl text-purple-600 text-center font-bold mb-4"
      >
        Why Choose Us?
      </h1>
      <div className="flex md:flex-row flex-col flex-wrap justify-evenly mt-10 space-y-10 md:space-y-0">
        <div className="bg-black text-center text-white md:w-110 w-full px-6 py-6 rounded-md shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-800 hover:scale-102 transition-transform duration-100">
          <RiPriceTag2Line className="text-6xl mx-auto my-4" />
          <h2 className="text-3xl font-semibold my-6">Best Price</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get unbeatable deals on a wide range of vehicles for every journey.
            We ensure competitive pricing so you always drive away with more
            incredible savings.
          </p>

          <a
            href="#"
            className="text-purple-400 hover:underline hover:text-white"
          >
            Learn More
          </a>
        </div>

        <div className="bg-black text-center text-white md:w-110 w-full px-6 py-6 rounded-md shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-800 hover:scale-102 transition-transform duration-100">
          <AiOutlineSafety className="text-6xl mx-auto my-4" />
          <h2 className="text-3xl font-semibold my-6">Fast and safe</h2>
          <p className="text-lg text-gray-300 mb-8">
            Experience lightning-fast service without compromising safety. Our
            vehicles undergo rigorous checks to ensure your peace of mind on
            every journey.
          </p>

          <a
            href="#"
            className="text-purple-400 hover:underline hover:text-white"
          >
            Learn More
          </a>
        </div>

        <div className="bg-black text-center text-white md:w-110 w-full px-6 py-6 rounded-md shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-800 hover:scale-102 transition-transform duration-100">
          <GrUserExpert className="text-6xl mx-auto my-4" />
          <h2 className="text-3xl font-semibold my-6">Experienced Drivers</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our team of skilled drivers is dedicated to providing you with a
            safe and enjoyable journey. With years of experience, we know the
            best routes and ensure a smooth ride.
          </p>

          <a
            href="#"
            className="text-purple-400 hover:underline hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
