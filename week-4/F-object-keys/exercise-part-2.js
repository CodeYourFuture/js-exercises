/*

Objects very often contain other objects. You'll encounter nested objects all the time in the wild. This exercise will give you practice in getting the keys of objects inside other objects.

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
// Should return [ 'glasgow', 'edinburgh' ]
console.log()

// # 2
// Should return [ 'manager', 'assistant', 'interns' ]
console.log()

// # 3
// Should return [ 'head_intern', 'intern' ]
console.log()

// ONLY EDIT ABOVE THIS LINE
