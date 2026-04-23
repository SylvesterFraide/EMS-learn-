import React, { useEffect, useState } from "react";
import HeroImg from "../assets/heroImg3.jpg";
import { heroData } from "./HeroData";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < heroData.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval); // clear when the component unmount
  }, [nextSlide]);

  return (
    <section
      className="w-[80vw] relative mx-auto h-[65vh] mt-10 opacity-90 rounded-xl shadow-lg mb-20 transition-all duration-500"
      style={{
        backgroundImage: `url(${heroData[slideIndex].Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-30 items-start h-full p-8 text-white">
        {/* <h1 className="text-xl font-bold text-pink-600">Effortless</h1> */}
        <h2 className="text-6xl font-semibold capitalize my-4">
          {heroData[slideIndex].text}
        </h2>
        <p className="text-xl">{heroData[slideIndex].description}</p>

          <button id="about" className="bg-pink-600 text-white py-2 px-4 rounded mt-4 transition duration-300 ease-in-out hover:bg-pink-700 hover:scale-110">
            Get Started
          </button>
   

        <div className=" flex items-center space-x-3 mt-10 ">
          {heroData.map((item, index) => (
            <span
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`bg-pink-600 h-3 w-3 rounded-full ${index === slideIndex && "bg-white"}`}
            ></span>
          ))}
        </div>
      </div>
      {/* <div className="pt-4">
         <img src={HeroImg} alt="Car Rental" className='h-auto w-150 object-cover bg-transparent' />
       </div> */}
    </section>
  );
};

export default Hero;
