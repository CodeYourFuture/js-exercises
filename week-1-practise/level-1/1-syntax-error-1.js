// There is a syntax error in this code. Fix it.
/* ways to write this function
1-function addNumbers(a, b, c){}
2- (a, b, c) => {}. and more consice later
However I read here 
https://stackoverflow.com/questions/1925976/declaring-functions-in-javascript
that the first method is the good practice. 


*/

let addNumbers = function (a, b, c) {
    return a + b + c;
}

var result = addNumbers(1, 3, 4);
console.log(result); // Expected result 8 - Run the program and make sure it works


/*Answer these questions:
 1. How many parameters does the function take?
3 parameters a, b, and c.
2. What is the function name?
addNumbers()
3. Where is the function called? with what parameters?
in line 7, with parameters 1, 3, and 4.
*/