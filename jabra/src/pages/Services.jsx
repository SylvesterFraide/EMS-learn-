import React from "react";
import jabra9 from "../assets/projectImg/home2.jpg";
import { GoDash } from "react-icons/go";
import { services } from "../component/services";
import ProductItem from "../component/ProductItem";
import Footer from "../component/Footer";

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center relative" // <-- added relative
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black/30"></div> {/* <-- 30% black overlay */}

        {/* Content - needs to be above overlay */}
        <div className="text-white w-[80vw] mx-auto relative z-10"> {/* <-- added relative z-10 */}
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />
            <span className="text-sm capitalize"> jabra gardening and landscaping solutions. </span>
          </p>
          <h1 className="text-6xl font-semibold"> Our Services</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">Services</span>
          </div>
        </div>
      </div>

      <main className="w-[90vw] mx-auto">
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-bold">What We Do</h2>
          <p className="text-center w-[60vw] mx-auto text-xl my-6 text-gray-600">
            We create beautiful, functional outdoor spaces through professional landscaping, garden design, lawn care, and maintenance services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {services.map((service) => (
              <ProductItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};

export default Services;