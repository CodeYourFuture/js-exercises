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
      //sub_intern: 'Carl'
    }
  }
}
// ONLY EDIT BELOW THIS LINE
// # 1
// prints [ 'glasgow', 'edinburgh' ]
console.log(Object.keys(storeBranches))
// # 2
// prints [ 'manager', 'assistant', 'interns' ]
console.log(Object.keys(storeBranches.glasgow))
// # 3
// prints [ 'head_intern', 'intern' ]
// prints [ 'head_intern', 'intern', 'sub_intern' ] // this was added to object ediburgh to test if the object had different information
console.log(Object.keys(storeBranches.edinburgh.interns))

//To access the nested objects inside an object. 
//inside variableName 'storeBranches' use .map method to loop through the properties of the object. This will allow you to access the dynamic object.keys [string array]  
console.log(
  Object.keys(storeBranches).map(branch => 
    Object.keys(storeBranches[branch].interns)
    )
)

//testing save on github desktop

// ONLY EDIT ABOVE THIS LINE
