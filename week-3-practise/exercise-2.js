/* You are working a project in the council to give some benefits to the aged people older than 65. Find out them in a new array in the following list */
var numbers = [56, 45, 32, 67, 89, 41, 65, 62, 59, 73];

var findTheAgedOnes = numbers.filter(number => number > 65);
console.log(findTheAgedOnes);

/* EXPECTED RESULT
 -----------
67, 89, 73
 */
