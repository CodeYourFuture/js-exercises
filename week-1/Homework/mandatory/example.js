const array = ["cat", "dog", "squirrel"];
const output = array.forEach(function logItems(arr) {
  console.log(arr.concat(array.indexOf(arr + 1)));
});
console.log(output);
