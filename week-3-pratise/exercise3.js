/* Given is an array return an array containing only even numbers */

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var filterNumber = numbers.filter(function(number) {
  if (number % 2 === 0) {
    return number;
  }
});

console.log(filterNumber);
/* Expected Output
[2,4,6,8,10,12]
*/
