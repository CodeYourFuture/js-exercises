function evenOrOdd(number) {
  if (number % 2 === 0) {
    return number + " is Even";
  } else {
    return number + " is odd";
  }
}

var result = evenOrOdd(3);
console.log(result);

var result2 = evenOrOdd(4);
console.log(result2);

var result = evenOrOdd(3, 4);
console.log(result);

// expected result
// 3 is odd
// 4 is even
