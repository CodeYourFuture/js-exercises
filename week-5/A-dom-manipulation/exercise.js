/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

var myButton1 = document.querySelector('#bgrChangeBtn');
myButton1.addEventListener("click", colorChange);
function colorChange(){
    document.body.style.background = "purple";
}

var bgrChangeBtn = document.querySelector("#bgrChangeBtn");
 bgrChangeBtn.addEventListener("click", changeBackground);

 function changeBackground() {
    document.body.style.backgroundColor = "red";

 }

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

var myButton2 = document.querySelector("#alertBtn");
myButton2.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addText = document.querySelector("#addTextBtn"); 
for(var i = 0; i <=1000; i++ ){

addTextFunction();
};

addText.addEventListener("click", addTextFunction);
function addTextFunction(){
var parent = document.querySelector("#myJumbo");
console.log(parent); 
var para = document.createElement("p");

console.log(para);
parent.appendChild(para);
para.innerHTML = "Hello World";
}


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largeButtonText = document.querySelector("#largerLinksBtn");
largeButtonText.addEventListener("click", largeBTextIncrease);
function largeBTextIncrease() {
    document.querySelectorAll("a").forEach(function (largeButtonText) {
        largeButtonText.style.fontSize = "24 px"
    })
}