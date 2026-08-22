import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroServices } from "./NavItems";

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev === HeroServices.length - 1? 0 : prev + 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full mx-auto h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-fixed"
          style={{
            backgroundImage: `url(${HeroServices[slideIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 flex items-center flex-col justify-center h-full p-8 text-white text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold capitalize mb-4 drop-shadow-lg">
              {HeroServices[slideIndex].text}
            </h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
              {HeroServices[slideIndex].desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Slider Dots */}
        <div className="flex items-center space-x-3 mt-10">
          {HeroServices.map((item, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === slideIndex
                 ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;