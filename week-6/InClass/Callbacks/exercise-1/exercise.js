/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================


================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
let div = document.getElementById("main");

setTimeout(function () {
  div.style.backgroundColor = "pink";
}, 5000);
/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

================
*/

setInterval(function () {
  let colors = ["green", "blue", "yellow", "red"];
  let randomColorIndex = Math.floor(Math.random() * 4);
  div.style.backgroundColor = colors[randomColorIndex];
}, 500);
