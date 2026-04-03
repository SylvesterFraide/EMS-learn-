import React from "react";
import Sort from "./sort";
import Slice from "./slice";
import { ArrayLength } from "./arrayLenght";
import { Splice } from "./splice";
import { Filter } from "./filter";
import { Include } from "./include";
import { Closures } from "./closures";
import { SetTimeout } from "./setTimeOut()";

const ArrayMethods = () => {
  return (
    <main>
      <h1 className="text-4xl mt-4 uppercase text-center font-bold text-purple-500">
        js daily
      </h1>
      <Sort />
      <ArrayLength />
      <Slice />
      <Splice />
      <Filter />
      <Include />
      <Closures />

      {/* async programming */}
      <SetTimeout />
    </main>
  );
};

export default ArrayMethods;
