import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
import { services } from "../component/services";
import { CiStar } from "react-icons/ci";

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <hero
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center"
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white w-[80vw] mx-auto">
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />
            <span className="text-sm capitalize">
              jabra gardening and landscaping solutions.
            </span>
          </p>
          <h1 className="text-6xl font-semibold"> Our Services</h1>
        </div>
      </hero>

      <main className="w-[90vw] mx-auto">
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p className="text-center w-[60vw] mx-auto my-6 text-gray-600">
            At Jabra Landscaping and Design, we create beautiful,
            functional outdoor spaces through professional landscaping, garden
            design, lawn care, and maintenance services. Our team is dedicated
            to delivering customized solutions that enhance the beauty and value
            of your property.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {services.map((service) => (
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
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
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
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Services;
