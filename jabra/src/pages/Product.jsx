import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      window.scrollTo(0, 0); // Auto scroll to top when product changes
    }
  }, [id]);

  // FILTER OUT CURRENT PRODUCT + TAKE 3 RANDOM
  const relatedProducts = services
   .filter((item) => item.id!== parseInt(id)) // remove current service
   .sort(() => 0.5 - Math.random()) // shuffle so it's not always same 3
   .slice(0, 3); // take first 3

  if (!productData) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="flex flex-col xl:flex-row gap-8">

     
          <div className="flex flex-col xl:flex-row gap-4 bg-gray-100 p-4 rounded-xl shadow-sm xl:w-[55%]">
            <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-y-auto xl:overflow-x-hidden pb-2 xl:pb-0 xl:w-24 w-full">
              {productData?.image?.map((img, index) => (
                <img
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
            <div className="w-full">
              <img
                src={image}
                alt={productData.title}
                className="w-full h-[350px] md:h-[450px] xl:h-[500px] object-contain bg-white rounded-lg"
              />
            </div>
          </div>

          <div className="xl:flex-1 bg-gray-100 p-6 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {productData?.title}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => <FaStar key={i} className="text-yellow-500" />)}
                <FaStar className="text-yellow-300" />
              </div>
              <p className="text-gray-500 text-sm">(4.0 Reviews)</p>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{productData?.description}</p>
              <p>{productData?.desc}</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold my-8 text-center">Related Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <ProductItem key={product.id} service={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;