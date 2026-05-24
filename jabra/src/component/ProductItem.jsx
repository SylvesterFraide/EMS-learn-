import React from "react";
import { CiStar } from "react-icons/ci";
import { Link, Links } from "react-router-dom";

const ProductItem = ({ service }) => {
  return (
    <Link to="">
      <div
        key={service.id}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <img
          src={service.image[1]}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <div className="flex items-center">
              <CiStar className="text-yellow-600   h-5 w-5 mr-1" />
              <CiStar className="text-yellow-600  h-5 w-5 mr-1" />
              <CiStar className="text-yellow-600  h-5 w-5 mr-1" />
              <CiStar className="text-yellow-600  h-5 w-5 mr-1" />
              <CiStar className="text-yellow-300  h-5 w-5 mr-1" />
            </div>
          </div>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;