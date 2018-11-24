// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = false;
if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
/* 
1. The code was misleading because  when the function will excute it will convert the right hand side 
to the type of the left hand side so in this case the comparsion is beteween "false"=="true" which
is not true so it will excute the else function .
2. we better not use the == unless we know all the possible coercion and we need it in the function
so 
3.because of this i think we have to remove the    == true    from the if function and remove 
the double quote from  false in      isHappy = false;
4.it really depends upon the expected values for boolean and how you want the code to work.
if you know in advance that it's only ever going to have a true or false value, then comparing it
 explicitly with
if (booleanValue)
is more compact and arguably cleaner/better.

*/
