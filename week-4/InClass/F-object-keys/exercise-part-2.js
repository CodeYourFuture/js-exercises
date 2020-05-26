/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/
//I will solve this exercise in two different ways for mater of practising

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
let getCities = [];
for (let getNames in storeBranches) {
  getCities.push(getNames);
}
console.log(getCities);
//Or i can do in other way
let getAllKeys = Object.keys(storeBranches);
console.log(getAllKeys);

// # 2 get the positions in Glasgow
// prints [ 'manager', 'assistant', 'interns' ]
let putNamesInArray = [];
for (let getPositions in storeBranches.glasgow) {
  putNamesInArray.push(getPositions);
}
console.log(putNamesInArray);
//Or i can do it in other way
let getCityNamesPosition = Object.keys(storeBranches.glasgow);
console.log(getCityNamesPosition);
// # 3 get the positions for internt in Glasgow
// prints [ 'head_intern', 'intern' ]
let internKeys = [];
for (let getPositionInsidePosition in storeBranches.glasgow.interns) {
  internKeys.push(getPositionInsidePosition);
}
console.log(internKeys);
//Or in other way
let getInternsKeys = Object.keys(storeBranches.glasgow.interns);
console.log(getInternsKeys);
// ONLY EDIT ABOVE THIS LINE
