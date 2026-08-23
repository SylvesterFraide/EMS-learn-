import React, { useState } from "react"; // 1. ADD useState
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jabra9 from "../assets/projectImg/home1.jpeg";
import { GoDash } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import Footer from "../component/Footer";

const contactInfo = [
  {
    icon: <CiLocationOn className="mr-4 text-2xl" />,
    label: "Location:",
    value: "Nairobi, Kenya",
  },
  {
    icon: <CiMail className="mr-4 text-2xl" />,
    label: "Email Us:",
    value: "info@jabra.com",
  },
  {
    icon: <LuPhoneCall className="mr-4 text-2xl" />,
    label: "Phone:",
    value: "+254 700 000 000",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    const toastId = toast.loading("Sending message...");

    // Simulate a successful message send
    setTimeout(() => {
      toast.success("Message sent successfully! We will get back to you soon.");
      toast.dismiss(toastId);
    }, 2000);

    //RESET FORM
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="w-full flex-col items-center justify-center gap-4">
        {/* Hero */}
        <div
          className="w-full bg-fixed h-[40vh] flex flex-col items-start justify-center relative"
          style={{
            backgroundImage: `url(${jabra9})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <motion.div
            className="text-white w-[80vw] mx-5 md:mx-30 absolute"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="">
              {" "}
              <GoDash className="inline-block mr-2 h-4" />{" "}
              <span className="text-sm capitalize">
                {" "}
                jabra gardening and landscaping solutions.{" "}
              </span>{" "}
            </p>
            <h1 className="text-6xl font-semibold">Contact Us</h1>
            <div className="mt-4 font-bold">
              {" "}
              Home / <span className="font-semibold">Contacts</span>{" "}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          className="w-[80vw] mx-auto my-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl text-center mt-6 text-green-800 font-bold capitalize">
            {" "}
            Get in Touch{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold text-gray-800 text-2xl capitalize">
                {" "}
                Talk to jabra landscaping experts who care about your yard.{" "}
              </h2>
              <p className="text-sm text-gray-500 mt-4">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique iure ipsum eaque eligendi doloribus deleniti ad quasi,
                autem nulla sequi neque architecto. Corrupti, facere omnis id
                iusto architecto quod sequi.{" "}
              </p>
              <div className="mt-6 space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-gray-500 flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: i * 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    {item.icon}
                    <p className="flex items-start flex-col">
                      <span className="text-sm">{item.label}</span>
                      <span className="font-medium text-gray-700">
                        {" "}
                        {item.value}{" "}
                      </span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="bg-green-700 text-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
            >
              <h2 className="text-lg text-center font-semibold my-2 capitalize">
                {" "}
                send us a message{" "}
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  {" "}
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name} // VALUE
                  onChange={handleChange} //ONCHANGE
                  required
                  className="w-full p-2 border-green-500 rounded shadow-lg outline-none focus:border-green-300 bg-white text-gray-800 transition"
                  placeholder="jabra landscaping..."
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email} //VALUE
                  onChange={handleChange} //ONCHANGE
                  required
                  className="w-full p-2 border-green-500 rounded shadow-lg outline-none focus:border-green-300 bg-white text-gray-800 transition"
                  placeholder="jabra@gmail.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  {" "}
                  Message{" "}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message} // VALUE
                  onChange={handleChange} // ONCHANGE
                  required
                  className="w-full p-2 border-green-500 rounded shadow-lg outline-none focus:border-green-300 bg-white text-gray-800 transition"
                  rows="4"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <motion.button
                className="bg-green-500 text-white py-2 px-4 rounded shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      <Footer />
    </>
  );
};

export default Contact;
