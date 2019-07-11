// Update the variable `isBigEnough` so that the program produces the expected result
// TIP: You should write an expression that returns a boolean value

var num = 10;
var isBigEnough = function big(number) {
  if (number < 8) {
    return true;
  } else {
    return false;
  }
}; // ONLY EDIT THIS LINE

if (isBigEnough) {
  console.log("num is bigger than or equal to 10");
} else {
  console.log("num is not big enough");
}

/* 
  EXPECTED RESULT
  ---------------
  num is bigger than or equal to 10
*/
