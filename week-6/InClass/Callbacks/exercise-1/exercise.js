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

let changColor = document.getElementById('main')
//  function color2 (){
//   changColor.style.backgroundColor = 'red'
// }
//  function color3 (){
//   changColor.style.backgroundColor = 'green'
// }
// let newColor = setInterval(color2, 5000)
// let newColor2= setInterval(color3,3000)
// console.log(newColor)
var idVar = setInterval(() => {
  setColor()
}, 400);
setTimeout(stopColor, 10000)
function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "blue" ? "red" : "blue" ;
}
function stopColor() {
  clearInterval(idVar);
}