/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var button = document.querySelector("#bgrChangeBtn");

button.addEventListener("click",changeColour);
function changeColour(){
    document.body.style.backgroundColor = "blue";;
}
//button.style.backgroundColor = "green";
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var mybutton = document.querySelector("#alertBtn");
mybutton.addEventListener("click",alerting)

function alerting(){
alert ("Thanks for visiting Bikes for Refugees!");
}
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
textBtn = document.querySelector("#addTextBtn");
textBtn.addEventListener("click",addPara)
function addPara(){
   var paragraph = document.createElement("p");
    //deyourfuture
    textBtn.appendChild(paragraph);
    paragraph.innerText = "Read more below.";
    console.log(paragraph)
}


/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
largeBtn = document.querySelector("#largerLinksBtn");// getting only one tag with matching id
largeBtn.addEventListener("click",formatLinks);

function formatLinks(){
    linksArr = document.querySelectorAll("a") // getting all a tag from document in an array
    for (button of linksArr){
     button.style.fontSize = "28px";
     //console.log(button);
    }
}