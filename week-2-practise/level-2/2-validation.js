// Complete the function to check if the variable `num` satisfies the following requirements:
// - is a number
// - is a positive number
// - is less than or equal to 100
// Tip: write other small functions for each requirement

function isnumber(num){
   if(typeof num === 'number'){
     return true;
    }
    else{ return false;
   }
}

function ispositive(num){
  if(Math.sign(num) === 1){
	return true;}
	else { return false;}
}

function isEqualOLess(num){
	if(num <= 100){
	return true;
	}
	else{ return false;}
}

function validate(num) {
var Valor1 = isnumber(num);
var Valor2 = ispositive(num);
var Valor3 = isEqualOLess(num);

if(Valor1 === true && Valor2 === true && Valor3 === true){
return true; }
else { return false;}

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log(validate(10));
console.log(validate(10.5));
console.log(validate(101));
console.log(validate(-12));
console.log(validate("16"));

/* 
  EXPECTED RESULT
  ---------------
  true
  true
  false
  false
  false
*/
