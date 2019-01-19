/*
It was given a list of adresses, we would like to know
all the addresses that contain Lane on its name.
Hint: Use filter as a method to get all the right strings.
*/

var streets = [
  "Hammersmith Grove",
  " Mark Lane",
  "Uxbridge Road",
  "Oxford Street",
  "Wood Lane",
  "Baker Street",
  "Bread Street"
];

var list = streets.filter(street => {
  return street.includes("Lane");
}); //Complete this line

console.log(list);

/* EXPECTED OUTPUT
----------------------
[Mark Lane, Wood Lane]
*/
