/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/

// Separate function definition
function myCallbackFunction() {
    console.log("Hello world!");
  }
  setTimeout(myCallbackFunction, 1000);
  
  // Inline function
  setTimeout(function () {
    console.log("Hello world!");
  }, 500);
  