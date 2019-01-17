/* Given is an array arrange it and return a new array 
so that each string in the array is converted to upper case letters */

var names = ["martin", "chloe", "sam", "john", "kathy"];

var namesInUppercase = names.map(function(name) {
  return name.toLocaleUpperCase();
});

console.log(namesInUppercase);
/* Expected Output
["MARTIN","CHLOE","SAM","JOHN","KATHY"]
*/
