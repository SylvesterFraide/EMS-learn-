import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import Footer from "../component/Footer";

const Contact = () => {
  return (
    <>
      {" "}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 space-y-6">
            <div className="">
              <h2 className="font-bold text-gray-800 text-2xl capitalize">
                Talk to jabra landscaping experts who care about your yard.
              </h2>
              <p className="text-sm text-gray-500 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique iure ipsum eaque eligendi doloribus deleniti ad quasi,
                autem nulla sequi neque architecto. Corrupti, facere omnis id
                iusto architecto quod sequi.
              </p>

              <div className="mt-6 text-gray-500 flex items-center">
                <CiLocationOn className="mr-4" />
                <p className="flex items-start flex-col">
                  <span className="text-sm">Location:</span>
                  <span className="">123 Main St, Nairobi, Kenya</span>
                </p>
              </div>
              <div className="my-6 text-gray-500 flex items-center">
                <CiMail className="mr-4" />
                <p className="flex items-start flex-col">
                  <span className="text-sm">Email Us:</span>
                  <span className="">info@jabra.com</span>
                </p>
              </div>

              <div className="text-gray-500 flex items-center">
                <LuPhoneCall className="mr-4" />
                <p className="flex items-start flex-col">
                  <span className="text-sm">Phone:</span>
                  <span className="">+254 700 000 000</span>
                </p>
              </div>
            </div>
            <form className="bg-green-700 text-white p-6 rounded-xl shadow-md">
              <h2 className="text-lg text-center font-semibold my-2 capitalize">
                send us a message
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-green-500 rounded shadow-lg outline-none focus:border-green-600"
                  placeholder="jabra landscaping..."
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
                  className="w-full p-2 border border-green-500 rounded shadow-lg outline-none focus:border-green-600"
                  placeholder="jabra@gmail.com"
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
                  className="w-full p-2 border border-green-500 rounded shadow-lg outline-none focus:border-green-600"
                  rows="4"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button className="bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-600 transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
