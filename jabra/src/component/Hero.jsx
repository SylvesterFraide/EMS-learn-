import React, { useEffect, useState } from "react";
import { HeroServices } from "./NavItems";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex < HeroServices.length - 1) {
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
      className="w-full bg-fixed mx-auto h-[80vh] transition-all duration-500"
      style={{
        backgroundImage: `url(${HeroServices[slideIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center flex-col justify-center items-start h-full p-8 text-white">
        {/* <h1 className="text-xl font-bold text-pink-600">Effortless</h1> */}
        <h2 className="text-6xl font-semibold capitalize my-4">
          {HeroServices[slideIndex].text}
        </h2>
        <p className="text-xl">{HeroServices[slideIndex].desc}</p>

        <div className=" flex items-center space-x-3 mt-10 ">
          {HeroServices.map((item, index) => (
            <span
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`bg-green-700/80 cursor-pointer h-3 w-3 rounded-full ${index === slideIndex && "bg-white"}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;