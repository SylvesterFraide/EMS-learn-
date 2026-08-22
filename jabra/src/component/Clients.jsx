import React from "react";
import { motion } from "framer-motion";
import creative from "../assets/icons/creative.png";
import serena from "../assets/icons/serena.png";
import eka from "../assets/icons/Eka.webp";
import prideInn from "../assets/icons/PrideInn.svg";
import somerset from "../assets/icons/somerset.jpg";
import norsk from "../assets/icons/norsk.jpg";

const clients = [
  { logo: creative, name: "Creative" },
  { logo: serena, name: "Serena" },
  { logo: eka, name: "Eka" },
  { logo: prideInn, name: "Pride Inn" },
  { logo: somerset, name: "Somerset" },
  { logo: norsk, name: "Norsk" },
];

const Clients = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-green-100/80 py-16">
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base text-green-600 text-center uppercase font-bold tracking-wider mb-3"
        >
          Our Clients
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold capitalize text-gray-800 text-center mb-4"
        >
          Trusted by amazing companies
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-center mb-10 max-w-2xl mx-auto"
        >
          We are proud to work with a diverse range of clients, from small businesses to large corporations.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center" // Fixed typo
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex justify-center items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;