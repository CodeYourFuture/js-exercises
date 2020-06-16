/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.

================
*/
setTimeout(function() {
    document.body.style.backgroundColor = "yellow"
}, 5000)


let colors = ["yellow", "green", "blue","red"];
let counter = 0;

setInterval(function(colors) {
    document.body.style.backgroundColor = colors[counter];
    counter++;
    if (counter >= colors.length) {
        counter = 0;
    }
}, 1000, colors);