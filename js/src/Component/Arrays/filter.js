export const Filter = () => {
  // The filter() method creates a new array with all elements
  // that pass the test implemented by the provided function.

  const numbers = [1, 2, 3, 4, 5];
  const evens = numbers.filter((num) => num % 2 === 0);
  const odds = numbers.filter((num) => num % 2 !== 0);
  console.log(evens);
  console.log(odds);


  const cities = [
  { name: 'Los Angeles', population: 3_792_621 },
  { name: 'New York', population: 8_175_133 },
  { name: 'Chicago', population: 2_695_598 },
  { name: 'Houston', population: 2_099_451 },
  { name: 'Philadelphia', population: 1_526_006 },
];


  const largeCities = cities.filter((city) => city.population > 3_000_000);
  console.log(largeCities);
  // return (
  // );
};
