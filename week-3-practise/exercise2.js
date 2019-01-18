/*  print the ages greater than 15 */

var filterAge = [];
var ages = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35];
// write your answer here :
filterAge = ages.filter(age => age > 15);
console.log(filterAge);

/* expected results

[ 20, 25, 30, 35 ]

*/
