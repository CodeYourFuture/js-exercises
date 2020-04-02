/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let pis =  document.querySelectorAll('p');
console.log(pis);
let hea =  document.querySelector('.site-header');
console.log(hea);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.getElementById("alertBtn");
let onClick = function (){
    alert("Thanks for visiting Bikes for Refugees!");
}
alertBtn.addEventListener("click", onClick);
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBtn = document.getElementById("bgrChangeBtn");
let onClickChange  = function (){
    
    document.body.style.backgroundColor = "green";

}

changeBtn.addEventListener("click", onClickChange);
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addTextBtn = document.getElementById("addTextBtn");
let onClickaddTextBtn  = function (){
    
   let newPar = document.createElement("p");
   console.log(newPar);
   newPar.innerHTML = ("Read more below.");
   var jumbotron = document.getElementsByClassName("jumbotron");
   jumbotron[0].appendChild(newPar);



}

addTextBtn.addEventListener("click", onClickaddTextBtn);


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.getElementById("largerLinksBtn");
let onClicklargerLinksBtn  = function (){
    let lin = document.getElementsByTagName("a");
    for (var i = 0; i < lin.length; i++) {
        lin[i].style.fontSize = "xx-large";;
           
}
}
largerLinksBtn.addEventListener("click", onClicklargerLinksBtn);

//this is the latest version v2