// // WRITE CODE BELOW THIS
// let kitten = {
//     name: "Mimi",
//     color: "brown",
//     monthOld: 3,
// }
// // WRITE CODE ABOVE THIS
// console.log(kitten.name, kitten.color, kitten.monthOld);
// // -> it should output the values of the newly created properties

/*
Write code in the space provided so that the expected values output
*/
let dog = {
    name: "Billy",
    wantsToPlay: false,
  };
  // WRITE CODE BELOW THIS LINE
  dog.name = "Rex"
  dog.wantsToPlay = true
  dog.numberOfLegs = 4
  dog["color"] = "white"
  // WRITE CODE ABOVE THIS LINE
  console.log(dog.name);
  console.log(dog.wantsToPlay);
  console.log(dog.numberOfLegs)
  console.log(dog)
  // -> it should output:
  // Rex
  // true