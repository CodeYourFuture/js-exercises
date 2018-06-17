/*
Task 1
=======

Write JavaScript below that changes the background colour of the page  
when the 'Change colour' button is clicked.
*/
var backgroundColor = document.querySelector("#bgrChangeBtn");
backgroundColor.addEventListener("click", function (){
document.body.style.backgroundColor = "red"; 
});


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up 
with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", alertButton);
    function alertButton(){
        alert("Thanks for visiting Biks for Regfugees!");
}


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph 
should be added below the buttons that says "Read more below."
*/
var textBtn = document.querySelector("#addTextBtn");
textBtn.addEventListener("click", function(){
    var paragraph = document.createElement("p")
    
    paragraph.innerText ="read more below.";
    textBtn.parentElement.appendChild(paragraph);
});


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all 
links on the page should increase.
*/
var changeSize = document.querySelector("#largerLinksBtn");
changeSize.addEventListener("click", function(){
changeSize.style.fontSize ="3rem";
textBtn.style.fontSize ="3rem";
alertBtn.style.fontSize ="3rem";
backgroundColor.style.fontSize ="3rem";
});