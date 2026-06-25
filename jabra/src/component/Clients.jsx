import React from "react";
import africa from "../assets/icons/africa.png";
import creative from "../assets/icons/creative.png";
import serena from "../assets/icons/serena.png";
import eka from "../assets/icons/Eka.webp";
import prideInn from "../assets/icons/PrideInn.svg";
import somerset from "../assets/icons/somerset.jpg";
import norsk from "../assets/icons/norsk.jpg";
import cabro1 from "../assets/Images/cabro1.webp";

const Clients = () => {
  return (
    <div className="w-full bg-green-100/80 my-12">
      <div className="w-[80vw] mx-auto py-6">
        <h2 className="text-base text-green-600 text-center uppercase font-bold mb-6">
          Our Clients
        </h2>
        <h3 className="text-2xl font-semibold capitalize text-gray-800 text-center mb-4">
          trusted by amazing companies
        </h3>
        <p className="text-gray-700 text-center mb-4 w-1/2 mx-auto">
          We are proud to work with a diverse range of clients, from small
          businesses to large corporations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-cente my-4">
          <div className="flex justify-center">
            <img
              src={creative}
              alt="Creative"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={serena}
              alt="Serena"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={eka}
              alt="Eka"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={prideInn}
              alt="Pride Inn"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={somerset}
              alt="Somerset"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={norsk}
              alt="Norsk"
              className="w-34 rounded-lg shadow-md h-25 object-fit"
            />
          </div>
        </div>

        {/* <div className="overflow-hidden rounded-xl my-6">
          <img
            src={cabro1}
            alt="Garden"
            className="w-full h-64 object-cover transition duration-500 hover:scale-110"
          />
        </div> */}
        
        {/* <img
          src={cabro1}
          alt="Garden"
          className="w-50 h-50 object-cover rounded-[10%_30%_40%_60%]"
        /> */}
      </div>
    </div>
  );
};
export default Clients;
