import React from "react";

const Slice = () => {
  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  const newarray = animals.slice(1,4);
  const animalsCopy = animals.slice();
  console.log(newarray);
  console.log(animalsCopy);
  // return (
  // );
};

export default Slice;
