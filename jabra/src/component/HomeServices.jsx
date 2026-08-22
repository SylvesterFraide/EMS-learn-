import React from "react";
import { services } from "./services";
import { Link } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";

const HomeServices = () => {
  const SlicedProduct = services.slice(0, 4);

  return (
    <main className="w-[90vw] md:w-[80vw] mx-auto py-12">
      <div>
        <h2 className="font-bold text-2xl md:text-3xl text-center">What We Offer</h2>
        <p className="text-gray-600 text-center my-4 max-w-2xl mx-auto">
          We create beautiful, functional outdoor spaces through professional landscaping,
          garden design, lawn care, and maintenance services. Our team is dedicated to
          delivering customized solutions that enhance the beauty and value of your property.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {SlicedProduct.map((service, id) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-[10%_30%_10%_0%] shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="overflow-hidden rounded-[10%_30%_40%_60%]">
                <img
                  src={service.image[2]}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-4">
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/services"
          className="flex items-center justify-center hover:underline flex-row gap-2 text-center mt-8 text-blue-600 font-semibold group"
        >
          <p>View All Services</p>
          <FaGreaterThan className="inline-block transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </main>
  );
};

export default HomeServices;