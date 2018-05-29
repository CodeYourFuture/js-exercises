/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

var storeBranches = {

  glasgow: {
    manager: 'Andrew',
    assistant: 'Laura',
    interns: {
      head_intern: 'Mozafar',
      intern: 'James'
    }
  },

  edinburgh: {
    director: 'Kelly',
    manager: 'Sally',
    assistant: 'Derek',
    interns: {
      head_intern: 'John',
      intern: 'Sarah'
    }
  }
}
// ONLY EDIT BELOW THIS LINE

// # 1
var citiesBranches = storeBranches;// prints [ 'glasgow', 'edinburgh' ]
console.log(citiesBranches);


// # 2
var storeBranchPositions = citiesBranches.glasgow;
console.log(storeBranchPositions);
// prints [ 'manager', 'assistant', 'interns' ]
// console.log(Object.keys(storeBranches.mananger.assistant.nterns));

// # 3
var internPositions = citiesBranches.interns;
// prints [ 'head_intern', 'intern' ]
// console.log(Object.keys(storeBranches.nterns));

// ONLY EDIT ABOVE THIS LINE
