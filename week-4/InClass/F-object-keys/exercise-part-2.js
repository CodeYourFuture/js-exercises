//COMPLETED
/*

Objects very often contain other objects.
This exercise will give you practice in getting the keys of objects inside other objects.
Use the provided console.log statements below and follow the instructions above them.

*/

let storeBranches = {
  glasgow: {
    manager: "Andrew",
    assistant: "Laura",
    interns: {
      head_intern: "Mozafar",
      intern: "James",
    },
  },

  edinburgh: {
    director: "Kelly",
    manager: "Sally",
    assistant: "Derek",
    interns: {
      head_intern: "John",
      intern: "Sarah",
    },
  },
};

// ONLY EDIT BELOW THIS LINE

// # 1 get the names of the cities
// prints [ 'glasgow', 'edinburgh' ]
let namesOfCities = Object.keys(storeBranches);
console.log(namesOfCities);

// # 2 get the positions in Glasgow
// prints [ 'manager', 'assistant', 'interns' ]
let positions = Object.keys(storeBranches.glasgow);
console.log(positions);

// # 3 get the positions for internt in Glasgow
// prints [ 'head_intern', 'intern' ]
let internsPositions = Object.keys(storeBranches.glasgow.interns);
console.log(internsPositions);

// ONLY EDIT ABOVE THIS LINE
