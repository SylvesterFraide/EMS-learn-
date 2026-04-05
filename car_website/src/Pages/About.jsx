import React from "react";
import aboutImg from '../assets/aboutImg.png';
import aboutImg2 from '../assets/aboutImg2.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center h-screen w-[80vw] mx-auto"
    >
      <div className="bg-blue-200">
        <img src={aboutImg2} alt="About Us" className="object-cover h-full w-full" />
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl text-purple-600 font-bold">About Us</h1>
        <p className="text-lg p-4">
          We offer reliable, affordable car rental services tailored to your
          needs. With a fleet of well-maintained vehicles and flexible rental
          options, we make every journey easy and comfortable.
        </p>
        <p className="mt-2 text-lg p-4">
          Our focus is on quality service, transparency, and getting you on the
          road with confidence.
        </p>
      </div>
    </section>
  );
};

export default About;
