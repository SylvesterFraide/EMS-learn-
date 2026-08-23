import React from "react";
import { motion } from "framer-motion"; // <-- import
import jabra9 from "../assets/projectImg/home2.jpg";
import { GoDash } from "react-icons/go";
import { services } from "../component/services";
import ProductItem from "../component/ProductItem";
import Footer from "../component/Footer";

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      {/* Hero */}
      <div
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center relative"
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="text-white w-[80vw] mx-5 md:mx-30 absolute"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />{" "}
            <span className="text-sm capitalize">
              jabra gardening and landscaping solutions.
            </span>
          </p>
          <h1 className="text-6xl font-semibold">Our Services</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">Services</span>
          </div>
        </motion.div>
      </div>

      <main className="w-[90vw] mx-auto">
        <motion.div
          className="w-full flex-col items-center justify-center py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }} // animates every time
        >
          <h2 className="text-4xl text-center font-bold">What We Do</h2>
          <p className="text-center w-[60vw] mx-auto text-xl my-6 text-gray-600">
            We create beautiful, functional outdoor spaces...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} // reduced delay so it doesn't feel slow
                viewport={{ once: false, amount: 0.2 }} // <-- animate every time
                whileHover={{ y: -8 }}
              >
                <ProductItem service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </section>
  );
};

export default Services;
