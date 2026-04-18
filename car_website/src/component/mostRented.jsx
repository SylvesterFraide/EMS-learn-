import React from "react";
import { data } from "./HeroData";
import { ProductsItems } from "./ProductItems";

const MostRented = () => {
  const slicedData = data.slice(3, 6);
  console.log(slicedData);
  return (
    <section className="w-[80vw] mx-auto my-15 p-6 bg-gradient-to-r from-pink-500 from-10% via-purple-500 via-30% to-pink-400 to-90%">
      <h1 className="text-3xl font-bold text-center my-6">
        Most Rented Products
      </h1>
      <div className="flex justify-center items-center mb-6 space-x-6">
        {slicedData.map((item) => (
          <div key={item.id}>
            <ProductsItems item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostRented;
