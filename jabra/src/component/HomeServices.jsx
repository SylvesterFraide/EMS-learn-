import React from "react";
import { services } from "./services";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import {
  FaArrowAltCircleLeft,
  FaArrowRight,
  FaGreaterThan,
} from "react-icons/fa";

const HomeServices = () => {
  const SlicedProduct = services.slice(0, 4);

  return (
    <main className="w-[80vw] mx-auto">
      <div className="">
        <h2 className="font-bold text-2xl text-center">What We Offer</h2>
        <p className="text-gray-600 text-center my-4">
          we create beautiful, functional outdoor spaces through professional
          landscaping, garden design, lawn care, and maintenance services. Our
          team is dedicated to delivering customized solutions that enhance the
          beauty and value of your property.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SlicedProduct.map((service, index) => (
            <div className="border border-gray-200 rounded-[10%_30%_10%_0%] shadow ">
              <div className="overflow-hidden">
                {" "}
                <img
                  src={service.image[2]}
                  alt=""
                  className="w-full rounded-[10%_30%_40%_60%] h-48 object-cover transition-transform-transform duration-300 hover:scale-105"
                />
              </div>

              <div key={index} className="flex flex-col ">
                <h3 className="font-bold p-2">{service.title}</h3>
                <p className="p-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="flex items-center justify-center hover:underline flex-row gap-2 text-center my-6 text-blue-500"
        >
          <p>View All Services</p>
          <FaGreaterThan className="inline-block ml-1" />
        </Link>
      </div>
    </main>
  );
};

export default HomeServices;
