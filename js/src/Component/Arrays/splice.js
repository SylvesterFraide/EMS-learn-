export const Splice = () => {
  //    JavaScript Array type provides a very powerful splice()
  //    method that allows you to insert, replace, and delete an
  //     element from an array.

  const animals = ["ant", "bison", "camel", "duck", "elephant"];

  const removedAnimals = animals.splice(2,2);
  console.log(removedAnimals);
  console.log(animals);
  // return (
  // );
};
