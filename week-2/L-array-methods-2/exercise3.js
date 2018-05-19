/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUk(country) {
  if (ukNations.includes(country)) {
    return "true"; // complete this statement
  } else {
    return "false";
  }
}

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
