function listEvenOrOdd(numbers) {
  if (numbers % 2 === 0) {
    return numbers + " even Even";
  } else {
    return numbers + " are odd";
  }
}

var result = listEvenOrOdd(1 && 100);
console.log(result);
