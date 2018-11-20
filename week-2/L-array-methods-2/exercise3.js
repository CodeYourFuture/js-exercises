/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];
//problem with location of isInUK
function isInUk(name) {
  return ukNations.includes(name); // complete this statement
};

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(isInUk("France"));
console.log(isInUk("Republic of Ireland"));
console.log(isInUk("England"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
