import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { services } from "../component/services";

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

  console.log(productData);
  console.log(image);

  return (
    <div className="flex gap-12 sm:gap-12 flex-col md:flex-row w-[90vw] mx-auto mt-10 h-full">
      <div className="flex-1 flex flex-col-reverse gap-3 md:flex-row">
        <div className="flex md:flex-col overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll justify-between sm:justify-normal md:w-[18.7%] w-full ">
          {productData?.image?.map((img, index) => (
            <img
              onMouseEnter={() => setImage(img)}
              key={index}
              src={img}
              alt=""
              className="w-[24%] md:w-full md:mb-3 flex-shrink-0 cursor-pointer"
            />
          ))}
        </div>
        <div className="w-full md:w-[80%]">
          <img src={image} alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold">{productData?.name}</h2>
      </div>
    </div>
  );
};

export default Product;
