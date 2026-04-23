import React from "react";
import voxy from "../assets/voxy.webp";
import voxy2 from "../assets/voxy2.webp";

const About = () => {
  return (
    <section
      id="about"
      className=" relative w-[80vw] mx-auto mb-15 bg-purple-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-3">
        <div className="">
          <img
            src={voxy}
            alt="About Us"
            className="object-fit md:h-[20rem] h-full md:w-[37rem] w-full rounded-md hover:scale-105 transition-transform duration-300 hover:opacity-90"
          />
        </div>
        <div className="">
          <h1 className="text-4xl text-purple-600 font-bold">About Us</h1>
          <p className="text-lg p-4">
            We offer reliable, affordable car rental services tailored to your
            needs. With a fleet of well-maintained vehicles and flexible rental
            options, we make every journey easy and comfortable.
          </p>
          <p className="mt-2 text-lg p-4">
            Our focus is on quality service, transparency, and getting you on
            the road with confidence.
          </p>

          <button
            className="border-3 border-purple-600 text-purple-600 font-semibold
          py-2 px-4 rounded tranition duration-300 ease-in-out hover:scale-105 hover:bg-purple-600 hover:text-white"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* // Additional content can go here */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-20 mt-10 items-center p-3">
        {" "}
        <div className="">
          <h2 className="text-4xl font-bold text-purple-600 mb-2">
            Core values
          </h2>
          <p className="text-gray-900 text-md mb-2">
            We go through extensive product training so that we may provide you
            with the knowledge you need to make an educated decision in choosing
            the vehicle that is right for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul>
              <li className=" text-gray-500 hover:text-purple-600">
                Customer-Centric Service
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Trust & Transparency
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Accessibility & Convenience
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Safety First
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Value for Money
              </li>
            </ul>
            <ul>
              <li className=" text-gray-500 hover:text-purple-600">
                Integrity
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Reliability
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Innovation & Simplicity
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Value for Money
              </li>
              <li className=" text-gray-500 hover:text-purple-600">
                Continuous Improvement
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <img
            src={voxy2}
            alt="About Us"
            className="object-fit md:h-[20rem] h-full md:w-[37rem] w-full rounded-md hover:scale-105 transition-transform duration-300 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
