function concatenate(firstWord, secondWord, thirdWord) {
  var middle = firstWord.concat(secondWord);
  return middle.concat(thirdWord);
}

var result = concatenate("code", "your", "future");
console.log(result); // expected result = "codeyourfuture"
