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
var keysGroup1 = Object.keys(storeBranches);
// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(keysGroup1)

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
//var keysGroup2 = keysGroup1.map((item)=>Object.keys(item));
var keysGroup2 = Object.keys(storeBranches.glasgow);
console.log(keysGroup2)

// # 3
// prints [ 'head_intern', 'intern' ]
// var keysGroup3 = keysGroup2.map(obj=>Object.keys(obj));
var keysGroup3 = Object.keys(storeBranches.glasgow.interns);
console.log(keysGroup3);

// ONLY EDIT ABOVE THIS LINE
