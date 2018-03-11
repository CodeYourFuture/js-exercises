function concatenate(firstWord, secondWord, thirdWord) {
  var middle = firstWord.concat(secondWord);
  return middle.concat(thirdWord); // Write the body of this function to concatenate three words together
}

var result = concatenate("code", "your", "future");
console.log(result); // expected result = "codeyourfuture"
