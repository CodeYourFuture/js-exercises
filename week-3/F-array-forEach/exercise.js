/* 
  Using .forEach() print the numbers 0 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 0-15 has been provided.
*/
//var formatMultiple = isMultipleOfThree() + isMultipleOfFive();

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
 arr.forEach(function(value) {

for (var i = 0; i <= 15; i++) {
	var isMultipleOfThree = arr[i] % 3 === 0;
	var isMultipleOfFive = arr[i] % 5 === 0;

	if (isMultipleOfThree && isMultipleOfFive) {
		arr[i]='FizzBuzz';
	}
	else if (isMultipleOfThree) {
		arr[i]='Fizz';
	}
	else if (isMultipleOfFive) {
		arr[i]='Buzz';
	}
	else {
		arr[i];
  }
}
});
console.log(arr);

// /* EXPECTED OUTPUT */

// /*
// 1
// 2
// 'Fizz'
// 4
// 'Buzz'
// 'Fizz'
// 7
// 8
// 'Fizz'
// 'Buzz'
// 11
// 'FizzBuzz'
// 13
// 14
// 'FizzBuzz'
