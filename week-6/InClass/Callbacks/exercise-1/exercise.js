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


let colorPage = function(){
    let colors = ["white", "black", "green","pink"];
  
    let background = document.getElementsByTagName("body");
    console.log(background);
background[0].style.backgroundColor = colors[Math.floor(Math.random() * 3)];
}



setInterval(colorPage, 500)