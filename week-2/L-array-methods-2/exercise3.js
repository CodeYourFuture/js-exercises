/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];

function isInUk(country) {
  if (ukNations) {
    return ukNations.includes(country); // complete this statement
  } else {
    return false;
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
