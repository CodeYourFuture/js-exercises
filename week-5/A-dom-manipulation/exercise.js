/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


 var changeColour = document.querySelector("#bgrChangeBtn");
changeColour.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});

// document.getElementById("bgrChangeBtn").onclick = function(){
//     myFunction();
// }

// function myFunction(){
//  document.body.style.backgroundColor = "blue";
// }
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var alertTrigger = document.querySelector("#alertBtn");
alertTrigger.addEventListener("click", function(){
    alert("thanks for visiting our web");
})


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var textAppender = document.querySelector("#addTextBtn");
var container = document.querySelector('.jumbotron');
textAppender.addEventListener("click", function(){
             container.innerHTML +="<p>show some text</p>";


  // newChild.textContent = "show some text";
  
})



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", function() {
    changeColour.style.fontSize = "3rem";
    alertTrigger.style.fontSize = "3rem";
    textAppender.style.fontSize = "3rem";
  
});