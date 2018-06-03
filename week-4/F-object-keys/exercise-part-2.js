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
// var mentorsNames =Object.keys(mentorsAges);
// function toUpperCase(name) {
//   return name.toUpperCase();
// }
// var mentorsNamedCapitalised= mentorsNames.map(toUpperCase);

var citiesBranches = Object.keys(storeBranches);
// prints [ 'glasgow', 'edinburgh' ]
console.log(citiesBranches);


// # 2


var storeBranchPositions = Object.keys(storeBranches.glasgow);// prints [ 'manager', 'assistant', 'interns' ]
console.log(storeBranchPositions);

// prints [ 'manager', 'assistant', 'interns' ]

// # 3

// prints [ 'head_intern', 'intern' ]
 console.log(Object.keys(storeBranches.glasgow.interns));

// ONLY EDIT ABOVE THIS LINE
