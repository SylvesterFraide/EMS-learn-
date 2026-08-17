import React from "react";
import jabra9 from "../assets/projectImg/home11.jpg";
import { GoDash } from "react-icons/go";
import jabra2 from "../assets/projectImg/home3.webp";
import jabra3 from "../assets/projectImg/hotel.webp";
import Team from "../component/Team";
import Footer from "../component/Footer";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <div
        className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center relative"
        style={{
          backgroundImage: `url(${jabra9})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="text-white w-[80vw] mx-30 absolute">
          <p className="">
            <GoDash className="inline-block mr-2 h-4" />
            <span className="text-sm capitalize">
              jabra gardening and landscaping solutions.
            </span>
          </p>
          <h1 className="text-6xl font-semibold">About Us</h1>
          <div className="mt-4 font-bold">
            Home / <span className="font-semibold">About</span>
          </div>
        </div>
      </div>

      <div className="w-[80vw] mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="overflow-hidden">
            <img
              src={jabra2}
              alt=""
              className="w-full h-auto object-cover rounded-lg shadow-lg transtion duration-500 hover:scale-105"
            />
          </div>

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
              <h2 className="font-bold text-gray-800 text-2xl capitalize">
                our story
              </h2>
              <p className="text-sm text-gray-500 mt-4">
                Founded in [Year], jabra has been at the forefront of gardening
                and landscaping innovation. Our passion for nature and design
                drives us to create stunning outdoor spaces that enhance the
                beauty and functionality of your property.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-fixed rounded-md shadow-lg opacity-95 my-20"
          style={{
            backgroundImage: `url(${jabra9})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 text-white w-[80vw]">
            <div className="bg-green-800 p-4 rounded-md">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-2 text-md text-gray-300">
                Our mission at jabra is to provide exceptional gardening and
                landscaping solutions that exceed our clients' expectations. We
                strive to create beautiful, sustainable outdoor spaces that
                enhance the natural beauty of the environment.
              </p>
            </div>
            <div className="bg-green-800 p-4 rounded-md">
              <h2 className="text-2xl font-semibold">Vision</h2>
              <p className="mt-2 text-md text-gray-300">
                Our vision at jabra is to be a leader in the gardening and
                landscaping industry, recognized for our innovative designs and
                commitment to sustainability. We aim to inspire our clients to
                embrace the beauty of nature and create outdoor spaces that
                reflect their unique personalities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="">
            <h2 className="text-2xl font-semibold capitalize">
              our Core Values
            </h2>
            <p className="mt-2 text-md text-gray-600">
              At jabra, we believe in integrity, quality, and sustainability.
              Our core values guide us in every project, ensuring that we
              deliver exceptional results while respecting the environment.
            </p>

            <div className="grid grid-cols-1 gap-4 p-6">
              <div className="bg-green-800 p-4 rounded-md">
                <h3 className="text-lg font-bold text-white">
                  Quality Assurance
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  We uphold the highest standards of quality in all our
                  projects, ensuring that every detail is meticulously crafted
                  and executed.
                </p>
              </div>
              <div className="bg-green-800 p-4 rounded-md">
                <h3 className="text-lg font-bold text-white">Sustainability</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We are committed to sustainable practices that protect the
                  environment and promote biodiversity in our landscaping
                  solutions.
                </p>
              </div>
              <div className="bg-green-800 p-4 rounded-md">
                <h3 className="text-lg font-bold text-white">Expertise</h3>
                <p className="mt-2 text-sm text-gray-300">
                  We bring years of experience and knowledge to every project,
                  ensuring that our clients receive the best possible solutions
                  for their landscaping needs.
                </p>
              </div>
            </div>
          </div>
          <div className="block overflow-hidden">
            <img
              src={jabra3}
              alt=""
              className="w-full h-auto rounded-md transition duration-500 hover:scale-110 "
            />
          </div>
        </div>

        <div className="my-20">
          <Team />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
