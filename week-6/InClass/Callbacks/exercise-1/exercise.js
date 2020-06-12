/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
*/
document.body.style.backgroundColor = "red";
function change() {
  if (document.body.style.backgroundColor === "red") {
    setTimeout(function () {
      document.body.style.backgroundColor = "blue";
    }, 5000);
  }
}

/*
Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.  Complete the exercises in this CodePen

Prefer to work on a codepen? https://codepen.io/makanti/pen/abOreLg
================
*/
function randomColor() {
  setTimeout(function () {
    let randomColors = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColors;
  }, 500);
}
randomColor();
