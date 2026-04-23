import React, { useState } from "react";
import { data, type } from "../component/HeroData";
import { ProductsItems } from "../component/ProductItems";

const Products = () => {
  const [activetype, setActiveType] = useState("All");

  const filteredData = data.filter(
    (item) => activetype === "All" || item.type === activetype,
  );
  return (
    <section className="w-[80vw] mx-auto my-15 text-white">
      <h3 className="text-2xl font-semibold text-center py-8 text-foreground">
        Experience luxury on every journey. Choose your ride below
      </h3>

      <div className="flex justify-center items-center mb-6 space-x-6">
        {type.map((Item, index) => (
          <div key={index}>
            <button
              onClick={() => setActiveType(Item)}
              className={`text-black text-xl font-semibold  py-2 px-4 rounded-xl shadow-md hover:bg-pink-400 hover:text-white cursor-pointer
                 ${activetype === Item ? "bg-pink-300 text-black" : "bg-pink-100"}`}
            >
              {Item}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-2">
        {filteredData.map((item, id) => (
          <div key={id}>
            <ProductsItems item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
