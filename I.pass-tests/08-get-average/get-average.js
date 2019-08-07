// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(arr) {
  var onlyNum = function(arr) {
    return arr.filter(function(element) {
      return Number(element) === element;
    });
  };
  var makeIt = onlyNum(arr);
  var sum = makeIt.reduce((a, b) => a + b);
  return sum / makeIt.length;
}

module.exports = average;
