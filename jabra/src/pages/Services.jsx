import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div
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
          <h1 className="text-6xl font-semibold">Services Us</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
