/*

Objects very often contain other objects.

This exercise will give you practice in getting the keys of objects inside other objects.

Use the provided console.log statements below and follow the instructions above them.

*/

let storeBranches = {

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
// prints [ 'glasgow', 'edinburgh' ]
let getTheObjectsCity = Object.keys(storeBranches).map(x => x.toUpperCase())
console.log(getTheObjectsCity)

// # 2
// prints [ 'manager', 'assistant', 'interns' ]
let getTheObjectsCityKeys = Object.keys(storeBranches.glasgow).map(x => x.toUpperCase())
console.log(getTheObjectsCityKeys)

// # 3
// prints [ 'head_intern', 'intern' ]
let getTheObjectsCityKeysFacts = Object.keys(storeBranches.glasgow.interns).map(x =>x.toUpperCase())
console.log(getTheObjectsCityKeysFacts)

// ONLY EDIT ABOVE THIS LINE
