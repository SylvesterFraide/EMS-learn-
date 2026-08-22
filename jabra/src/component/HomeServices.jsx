import React from "react";
import { motion } from "framer-motion"; // 1. Import this
import { services } from "./services";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const HomeServices = () => {
  const SlicedProduct = services.slice(0, 4);

  // Animation variants for stagger
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // delay between each card
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="w-[90vw] md:w-[80vw] mx-auto py-12">
      <div>
        {/* Animate Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-bold text-2xl md:text-3xl text-center"
        >
          What We Offer
        </motion.h2>

        {/* Animate Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center my-4 max-w-2xl mx-auto"
        >
          We create beautiful, functional outdoor spaces through professional landscaping, garden design, lawn care, and maintenance services. Our team is dedicated to delivering customized solutions that enhance the beauty and value of your property.
        </motion.p>

        {/* Animate Grid with Stagger */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {SlicedProduct.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{ y: -8 }} // lift card on hover
              className="border border-gray-200 rounded-[10%_30%_10%_0%] shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <div className="overflow-hidden rounded-[10%_30%_40%_60%]">
                <motion.img
                  whileHover={{ scale: 1.1 }} // zoom image on hover
                  transition={{ duration: 0.4 }}
                  src={service.image[2]}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="flex flex-col p-4">
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animate CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/services"
            className="flex items-center justify-center hover:underline flex-row gap-2 text-center mt-8 text-blue-600 font-semibold group"
          >
            <p>View All Services</p>
            <motion.div
              animate={{ x: [0, 5, 0] }} // subtle bounce
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaGreaterThan />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default HomeServices;