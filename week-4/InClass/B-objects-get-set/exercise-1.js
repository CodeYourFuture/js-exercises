/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

// YOUR CODE GOES BELOW HERE

console.log(kitten);
for (let attr in kitten) {
  console.log(`Kitten ${attr} is ${kitten[attr]}`);
}
// YOUR CODE GOES ABOVE HERE
