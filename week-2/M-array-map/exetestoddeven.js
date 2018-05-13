function evenOrOdd(number1, number2) {
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    return "all even";
  } else {
    return "not all even";
  }
}

var result = evenOrOdd(7);

console.log(result);

// all even
// not all even
