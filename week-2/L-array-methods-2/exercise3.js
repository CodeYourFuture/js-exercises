/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];
function isInUk(country) {
  return ukNations.includes(country); // output boolean
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUk("Wales"));
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

/*function isInUk(country) {
  for (var i = 0; i < ukNations.length; i++) {
    if (ukNations[i] === country) {
      return true;
    } // complete this statement
  }
*/
