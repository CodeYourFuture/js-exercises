/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector('#bgrChangeBtn');

myButton.addEventListener("click", function () {
    document.body.style.backgroundColor = 'red';
});




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector('#alertBtn');

myButton.addEventListener("click", function () {
    alert("Thanks for visiting Bikes for Refugees!");
});


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

document.getElementById("addTextBtn").addEventListener("click", function () {
    document.getElementById("addTextBtn").innerHTML = "Hello World";
});



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var myButton = document.querySelector('#largerLinksBtn');

myButton.addEventListener("click", function () {
    document.body.style.fontSize = '25px';
});