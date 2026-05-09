import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
import jabra2 from "../assets/Images/jabra2.jpg";

const About = () => {
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
          <h1 className="text-6xl font-semibold">About Us</h1>
        </div>
      </div>

      <div className="w-[80vw] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src={jabra2}
            alt=""
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-12">
            <div className="">
              <h2 className="font-bold text-gray-800 text-2xl capitalize">
                Why Choose jabra?
              </h2>
              <p className="text-sm text-gray-500 mt-4">
                At jabra, we are committed to providing top-notch gardening and
                landscaping solutions tailored to your needs. Our team of
                experts is dedicated to transforming your outdoor space into a
                beautiful and functional area that you can enjoy for years to
                come.
              </p>
            </div>

            <div className="">
              <h2 className="font-bold text-gray-800 text-2xl capitalize">our story</h2>
              <p className="text-sm text-gray-500 mt-4">
                Founded in [Year], jabra has been at the forefront of gardening
                and landscaping innovation. Our passion for nature and design
                drives us to create stunning outdoor spaces that enhance the
                beauty and functionality of your property.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
