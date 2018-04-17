/**
 * Creat a function that returns "odd" if the number is odd
 * and even if number is even
 */
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return number + " is Even";
  } else {
    return number + " is Odd";
  }
}
var result = evenOrOdd(3);
console.log(result);

var result2 = evenOrOdd(4);
console.log(result2);

//Expected result
//3 is Odd
//4 is Even
