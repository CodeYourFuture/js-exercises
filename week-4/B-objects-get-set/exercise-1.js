/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown"
};

// YOUR CODE GOES BELOW HERE

// console.log(kitten.furColour);
Object.keys(kitten).map(item => {
  console.log(kitten[item]);
});
// YOUR CODE GOES ABOVE HERE
