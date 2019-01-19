/* Odd or Even: write a program that checks if  
the numbers in an array are odd or even and
 returns one of the following messages:
“All Odd!”, “All Even !” or “All Mixed”
An array of numbers is provided */

var numbers = [7, 10, 4, 5, 12];

var numbers1 = numbers.filter(number => number % 2 == 1);
var numbers2 = numbers.filter(number => number % 2 == 0);
if (numbers1 !== []) {
  if (numbers1.length == numbers.length) {
    console.log("All odd!");
  } else if (numbers2.length == numbers.length) {
    console.log("All even!");
  } else {
    console.log("All mixed!");
  }
} // input your code here

//Expected result: “All Mixed !”
