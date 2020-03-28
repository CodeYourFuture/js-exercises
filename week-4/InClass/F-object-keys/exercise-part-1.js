/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. 
You want to return an array of mentors with the names in uppercase.

You're going to have to use what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

let mentorsAges = {
  james: 29,   //
  JOSH: 35,     //
  JAMIE: 25,
  Mozafar: 30
};

// ONLY EDIT BELOW THIS LINE

//let mentorsNames = [];
let mentorsNames = Object.keys(mentorsAges)

//let mentorsNamedUppercased = mentorsNames.toUpperCase()
let mentorsNamedUppercased = mentorsNames.map(name => name.toUpperCase())
//console.log(mentorsNames) //mentors name is an array
// ONLY EDIT ABOVE THIS LINE
//.map.filter.forEach - for [arrays]
//.toUpperCase only applies to 'string'
console.log(mentorsNamedUppercased);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]
