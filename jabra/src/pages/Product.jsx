import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../component/services";
import { FaStar } from "react-icons/fa";
import ProductItem from "../component/ProductItem";

const Product = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProduct = () => {
    services.find((item) => {
      if (item.id === parseInt(id)) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
    // const product = services.find(item => item.id === parseInt(id));
    // if (product) {
    //     setProductData(product);
    //     setImage(product.image[0]);
    // }
  };
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const relatedProducts = services.slice(0, 3);

  return (
    <div className="h-full w-[80vw] mx-auto my-12">
      <div className="flex gap-12 sm:gap-12 flex-col md:flex-row ">
        <div className="flex gap-3 md:flex-row bg-gray-100 p-4 rounded-md shadow-md">
          <div className="flex md:flex-col overflow-x-scroll md:overflow-x-hidden overflow-y-scroll-hidden justify-between sm:justify-normal md:w-[18.7%] w-full ">
            {productData?.image?.map((img, index) => (
              <img
                onMouseEnter={() => setImage(img)}
                key={index}
                src={img}
                alt=""
                className="w-[24%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer rounded-md "
              />
            ))}
          </div>
          <div className="w-full md:w-[80%]">
            <img src={image} alt="" className="w-full h-auto rounded-md" />
          </div>
        </div>

        <div className="mb-12 bg-gray-100 p-4 rounded-md shadow-md">
          <h2 className="text-2xl font-bold text-gray-600">
            {productData?.title}
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 my-6">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-300" />
            </div>
            <p className="text-gray-500">(4.0)</p>
          </div>

          <p className="text-gray-500 my-6">{productData?.description}</p>
          <p className="text-gray-500 my-6">{productData?.desc}</p>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-bold my-8 text-center">Related Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
             <ProductItem key={product.id} service={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
