import React from "react";
import jabra9 from "../assets/Images/jabra9.jpg";
import { GoDash } from "react-icons/go";

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <hero
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
      </hero>

      <main className="w-[90vw] mx-auto bg-green-400 h-[100vh]">
        <div className="w-full flex flex-col items-center justify-center py-12">
          <h2 className="text-4xl font-semibold mb-6">Our Services</h2>
          <p>
            At Jabra Landscaping & Gardening, our Flower Designs service brings
            color, elegance, and natural beauty to your outdoor and indoor
            spaces. We create stunning floral arrangements and decorative flower
            displays that enhance the appearance of gardens, homes, events,
            offices, and commercial properties. Our team carefully selects
            fresh, vibrant, and seasonal flowers to design unique arrangements
            that match your style, theme, and environment. Whether you are
            looking for decorative garden flower beds, event floral décor,
            entrance arrangements, patio flower styling, or custom floral
            installations, we deliver creative designs with attention to detail
            and lasting beauty. We combine artistic creativity with professional
            gardening expertise to ensure every flower arrangement complements
            the surrounding landscape while creating a warm and inviting
            atmosphere. From modern minimalist floral concepts to lush colorful
            displays, our flower designs are tailored to meet both aesthetic and
            functional needs. At Jabra Landscaping & Gardening, we believe
            flowers bring life, emotion, and elegance to every space. Our Flower
            Designs service is dedicated to transforming ordinary environments
            into beautiful, refreshing, and memorable settings through the
            natural charm of flowers.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Services;
