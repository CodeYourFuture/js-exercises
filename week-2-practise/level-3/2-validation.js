// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function validate(num) {
  var res;
  
   if (isNum && isExcluded(num) && isInteger(num)){
     return res = true;
    }
   else {
    return res  = false;
   }
}
function isNum(num){
  var res;
  if (typeof num == 'number'){
    res = true;
  } 
  else{
    res = false;
  }
  return res;
}
function isInteger(num){
  var res;
   if(Number.isInteger(num)){
      res = true;
    } 
    else{
      res = false;
    }
  
  
  return res;
}
function isExcluded(num){
 var res;
  if (excludedNums.indexOf(num) >=0){
    res = false;
  }
   else {
     res = true;
   }
   return res;
}

console.log(validate(6));
console.log(validate(14));
console.log(validate(101));
console.log(validate(-91));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  false
  false
  true
  true
  false
*/