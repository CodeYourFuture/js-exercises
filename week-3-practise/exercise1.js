// 1. Write a function (`captialise`) that capitlises the first letter of a provided string
// 2. Declare a new array (`carsTidy`) containing:
//    - every item from `cars` run through the `tidyUpString` function
//    - every resulting item run through the `captialise` function

function tidyUpString(str) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

function captialise(str) {
  // complete this function
}

var cars = [" vauxhall/ ", "bMw ", " ferrari", "nissan "];
var carsTidyAndCapitalised;

console.log(carrsTidyAndCapitalised);

/*
  EXPECTED RESULT
  ---------------
  ["Vauxhall", "Bmw", "Ferrari", "Nissan"]
*/
