const cities = [
  { name: "Los Angeles", population: 40 },
  { name: "New York", population: 50 },
  { name: "Chicago", population: 60 },
  { name: "Houston", population: 80 },
  { name: "Philadelphia", population: 120 },
];

//FILTER
const filteredCities = cities.filter((city) => city.population < 100);
console.log("Filter: ");
console.log(filteredCities);

//MAP
const mappedCities = cities.map((city) => {
  return city.name;
});
console.log("Map: ");
console.log(mappedCities);

//FIND
const findCity = cities.find((city) => city.name == "Chicago");
console.log("Find: ");
console.log(findCity);

//FOREACH
console.log("ForEach: ");
cities.forEach((city) => console.log(city.name));

//SOME
const someCities = cities.some((city) => city.population < 100);
console.log("Some: ");
console.log(someCities);

//EVERY
const everyCities = cities.every((city) => city.population < 100);
console.log("Every: ");
console.log(everyCities);

//REDUCE
const summedPopulations = cities.reduce((total, city) => {
  return total + city.population;
}, 0);
console.log("Reduce: ");
console.log(summedPopulations);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const includesTwo = numbers.includes(2);
console.log("Includes: ");
console.log(includesTwo);
