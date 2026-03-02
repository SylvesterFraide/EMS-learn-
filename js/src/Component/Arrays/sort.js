import React from "react";

const Sort = () => {
  const users = [
    { id: 1, name: "AJade", age: 25 },
    { id: 2, name: "Baylan", age: 30 },
    { id: 3, name: "Cinah", age: 22 },
  ];
//   const sortedAge = users.sort((a, b) => a.age - b.age);
  const sortedUsers = users.sort((a, b) => b.name.localeCompare(a.name));
  console.log(sortedUsers);

  //   return (
  //     <div>Sort</div>
  //   )
};

export default Sort;
