import React from "react";
import { data } from "../component/HeroData";
import { ProductsItems } from "../component/ProductItems";

const Products = () => {
  console.log(data);
  return (
    <section className="w-[80vw] mx-auto my-15 text-white">
      <h3 className="text-2xl font-semibold text-center py-8 text-pink-600">
        Experience luxury on every journey. Choose your ride below
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-5 space-x-2">
        {data.map((item, id) => (
          <div key={id}>
            <ProductsItems item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
