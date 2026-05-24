import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Topbar from "./component/Topbar";
import NavBar from "./component/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
