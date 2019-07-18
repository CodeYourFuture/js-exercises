// The syntax for this function is valid but it has an error, find it and fix it.
/*
function multiply(a, b, c) {
  return a * b * c;
}

var result = multiply(1, 3, 4);
console.log(result);
// Expected result 12
// Run the program and make sure it works
*/

//You can use this code to flatten the multi - dimensional array:

function flatten(array) {
  var flat = [];
  for (var i = 0, l = array.length; i < l; i++) {
    var type = Object.prototype.toString
      .call(array[i])
      .split(" ")
      .pop()
      .split("]")
      .shift()
      .toLowerCase();
    if (type) {
      flat = flat.concat(
        /^(array|collection|arguments|object)$/.test(type)
          ? flatten(array[i])
          : array[i]
      );
    }
  }
  return flat;
}
var mi = flatten(["7553467739"]);
console.log(mi);
