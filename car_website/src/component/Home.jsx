import React from "react";
import Hero from "./Hero";
import About from "../Pages/About";
import WhyChooseUs from "../Pages/WhyChooseUs";
import Products from "../Pages/Products";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
    </main>
  );
};

export default Home;
