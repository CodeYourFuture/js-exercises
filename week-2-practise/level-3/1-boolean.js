// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain
var happy = false;
function isHappy(){
 var message;
  if (happy == true) {
    message="I am happy";
  } else {
    message="I am not happy";
  }
  return message;
}
// creating a function and calling the function from the console command make the code scalable and reusable.
//with function we can only make modification in one occurence rather than making modification on every single occurence of the code.
console.log(isHappy());
/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
