// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is an integer (not a float)
// - is not equal any of the numbers in the array `excludedNums`
// Tip: write other small functions for each requirement

var excludedNums = [6, 14, 91, 111];

function isNumber(num){
   if(typeof num === 'number'){
      return true;
   }
   else{
      return false;
   }
}

function isInteger(num){
  return Number.isInteger(num);
}

function numArray(num){
  var indice = excludedNums.indexOf(num);
  if(indice === -1){
     return true;
   }
   else{ return false;
   }
}

function validate(num) {
  var valor1 = isNumber(num);
  var valor2 = isInteger(num);
  var valor3 = numArray(num);

   if(valor1 === true && valor2 === true && valor3 === true){
	return true;
   }
   else{
      return false;
   }
}

console.log(validate(6));
console.log(validate(10.5));
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
