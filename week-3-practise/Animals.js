/* Everybody knows I love animals! So I have decided to check if all small animals has a short name.
You should create a function that runs through the array and check if the name length is equal or less than 4.
If it's smaller or equal than 4 it should print the name and the message saying that x animal has a short name.
If the name is longer print a  message saying that is a long name and the name of the animal
 Hint: Use map to solve this problem. */

var smallAnimals = [
  "Fox",
  "Cat",
  "Dog",
  "Flying squirrel",
  "Hamster",
  "Sloth",
  "Otter",
  "Guinea Pig"
];

//smallAnimals.forEach(string => {
//if (string.length <= 4) {
// console.log(string + " is a small animal with a small name");
// } else console.log(string + " is a small animal but has a long name");
//});

//console.log(animals);

console.log(
  smallAnimals.forEach(string => {
    if (string.length <= 4) {
      console.log(string + " is a small animal with a small name");
    } else console.log(string + " is a small animal but has a long name");
  })
);

/* EXPECTED RESULT
-----------------------------------------
["Fox is a small animal with a small name.",
"Cat is a small animal with a small name.",
"Dog is a small animal with a small name.",
"Flying squirrel is a small animal but has a long name.",
"Hamster is a small animal but has a long name.",
"Sloth is a small animal but has a long name.",
"Otter is a small animal but has a long name.",
"Guinea Pig is a small animal but has a long name."]
 */
