import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // 1. import
import { services } from "../component/services";
import { FaStar } from "react-icons/fa";
import ProductItem from "../component/ProductItem";
import Footer from "../component/Footer";

const Product = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const product = services.find((item) => item.id === parseInt(id));
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      window.scrollTo(0, 0);
    }
  }, [id]);

  const relatedProducts = services
   .filter((item) => item.id!== parseInt(id))
   .sort(() => 0.5 - Math.random())
   .slice(0, 3);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  if (!productData) return <div className="text-center py-20">Loading...</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex flex-col xl:flex-row gap-8">

          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col xl:flex-row gap-4 bg-gray-100 p-4 rounded-xl shadow-sm xl:w-[55%]"
          >
            
            <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-y-auto xl:overflow-x-hidden pb-2 xl:pb-0 xl:w-24 w-full">
              {productData?.image?.map((img, index) => (
                <motion.img
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setImage(img)}
                  key={index}
                  src={img}
                  alt={productData.title}
                  className={`w-20 h-20 xl:w-24 xl:h-24 object-cover flex-shrink-0 cursor-pointer rounded-lg border-2 transition ${
                    image === img? "border-green-600" : "border-transparent hover:border-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Main Image with AnimatePresence for smooth swap */}
            <div className="w-full overflow-hidden rounded-lg bg-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={image} // key triggers animation on change
                  src={image}
                  alt={productData.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  whileHover={{ scale: 1.03 }}
                  className="w-full h-[350px] md:h-[450px] xl:h-[500px] object-contain"
                />
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="xl:flex-1 bg-gray-100 p-6 rounded-xl shadow-sm"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              {productData?.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }}>
                    <FaStar className="text-yellow-500" />
                  </motion.div>
                ))}
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9 }}>
                  <FaStar className="text-yellow-300" />
                </motion.div>
              </div>
              <p className="text-gray-500 text-sm">(4.0 Reviews)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <p>{productData?.description}</p>
              <p>{productData?.desc}</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold my-8 text-center"
          >
            Related Services
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {relatedProducts.map((product) => (
              <motion.div key={product.id} variants={item}>
                <ProductItem service={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Product;