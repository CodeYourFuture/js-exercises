/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/ 
// need to

function isNegative(number) {

  if(number<0) {
    return true;

  }else if(number>0) {
  return false;}}

function isBetween5and10(numbers){
  if(5<numbers<10) {
    return true;
}
}
function isLongName(name) {
  if(name== "Daniel") {
  return true;
}
}
function startsWithD(name) {
  if(name=="Daniel") {
    return true;
}
}




/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isLongName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a long name? true
  Does Daniel start with 'D'?
*/
