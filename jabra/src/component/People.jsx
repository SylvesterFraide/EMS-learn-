import React from "react";
import { motion } from "framer-motion";
import friendly from '../assets/icons/friendly.png';
import price from '../assets/icons/price.png';
import shield from '../assets/icons/shield.png';
import users from '../assets/icons/users4.png';

const cardData = [
  {
    icon: users,
    title: "Experienced Team",
    desc: "Skilled professionals with years of experience."
  },
  {
    icon: friendly,
    title: "Eco-Friendly",
    desc: "Environmentally friendly practices and solutions."
  },
  {
    icon: shield,
    title: "Quality Work",
    desc: "We deliver high-quality work that exceeds expectations."
  },
  {
    icon: price,
    title: "Affordable Pricing",
    desc: "Competitive prices with transparent estimates."
  }
];

const People = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="w-full h-auto bg-green-100/80 my-20 py-12">
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <div className="flex md:flex-row flex-col gap-10 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-4 md:w-1/3"
          >
            <h3 className="text-green-600 text-lg capitalize font-semibold mb-4">
              Why Choose Us
            </h3>
            <p className="capitalize text-3xl md:text-4xl font-bold leading-tight">
              We create beautiful <br /> outdoor experience
            </p>
          </motion.div>

          {/* Right Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/50 transition-colors duration-300"
                >
                  <motion.img
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    src={card.icon}
                    alt={card.title}
                    className="w-12 h-12 mb-4 object-contain"
                  />
                  <h4 className="text-lg capitalize font-semibold mb-2">
                    {card.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default People;