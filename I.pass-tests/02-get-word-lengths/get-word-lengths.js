var getWordLengths = function(someWords) {
  return someWords.map(string => string.length);
};

/*
var tryIt = ["dog", "cat", "crocodile"];
var maybe = getWordLengths(tryIt);
console.log(maybe);
*/

module.exports = getWordLengths;
