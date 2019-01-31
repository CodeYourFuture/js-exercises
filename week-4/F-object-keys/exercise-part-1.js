/*

You have an object of mentors and their ages below, but the keys are inconsistent. JOSH and JAMIE are uppercase, while james and Mozafar are not. You want to return an array of mentors with the names in uppercase.

You're going to have to used what we learned at the start of this lesson, and some other JavaScript methods to accomplish this task.

*/

var mentorsAges = {
  james: 29,
  JOSH: 35,
  JAMIE: 25,
  Mozafar: 30
};

// ONLY EDIT BELOW THIS LINE

var mentorsNames = Object.keys(mentorsAges);

function captialise(str) {
  var newStr = str.split("");
  newStr[0] = newStr[0].toUpperCase();
  return newStr.join("");
}

var capMen = mentorsNames.forEach(function(item) {
  return captialise(item);
});

var mentorsNamedCapitalised = capMen;

// ONLY EDIT ABOVE THIS LINE

console.log(capMen);
//console.log(mentorsNamedCapitalised);
// prints [ 'JAMES', 'JOSH', 'JAMIE', 'MOZAFAR' ]
