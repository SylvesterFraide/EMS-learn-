import React from "react";
import Hero from "./Hero";
import About from "../Pages/About";
import WhyChooseUs from "../Pages/WhyChooseUs";
import Products from "../Pages/Products";
import MostRented from "./mostRented";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <MostRented />
      <Products />
    </main>
  );
};

export default Home;
