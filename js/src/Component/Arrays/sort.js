import React from "react";

const Sort = () => {
  const animals = ["elephant", "duck", "ant", "bison","camel"];
  const numbers = [5, 3, 8, 1, 2];

  const sortedAnimals = animals.sort();
  console.log(sortedAnimals);


  const sortedNumbers = numbers.sort((a,b) => a-b);
  console.log(sortedNumbers);

    const users = [
      { id: 1, name: "AJade", age: 25 },
      { id: 2, name: "Baylan", age: 30 },
      { id: 3, name: "Cinah", age: 22 },
    ];
  const sortedAge = users.sort((a, b) => b.age - a.age);
  const sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name));
  console.log(sortedAge);
  console.log(sortedUsers);
  //   return (
  //     <div>Sort</div>
  //   )
};

export default Sort;
