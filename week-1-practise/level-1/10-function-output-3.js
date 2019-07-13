concatenate = (firstWord, secondWord, thirdWord, four, five) =>
  firstWord.concat(secondWord.concat(thirdWord.concat(four.concat(five))));

var result = concatenate("code ", "your ", "future ", "by milley ", "from cyf");
console.log(result); // expected result = "code your future by milley from cyf"
