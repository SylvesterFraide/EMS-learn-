import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";

const Contact = () => {
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
          <h1 className="text-6xl font-semibold">Contact Us</h1>
        </div>
      </div>

      <div className="w-[80vw] mx-auto my-10">
        <h1 className="text-3xl text-center mt-6 text-green-800 font-bold capitalize">
          Get in Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="">
            <h2 className="font-bold text-gray-800 text-2xl capitalize">
              Talk to jabra landscaping experts who care about your yard.
            </h2>
            <p className="text-sm text-gray-500 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              iure ipsum eaque eligendi doloribus deleniti ad quasi, autem nulla
              sequi neque architecto. Corrupti, facere omnis id iusto architecto
              quod sequi.
            </p>

            <div className="">
              
            </div>
          </div>
          <form className="">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
