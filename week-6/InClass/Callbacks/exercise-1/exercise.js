/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
let changeColor = document.getElementById("main");

setTimeout(function () {
  changeColor.style.backgroundColor = "red";
}, 5000);

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen
*/
setInterval(function () {
  colors = ["pink", "red", "blue", "black"];
  randomColors = Math.floor(Math.random() * 4);
  changeColor.style.backgroundColor = colors[randomColors];
}, 500);
/*
Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
