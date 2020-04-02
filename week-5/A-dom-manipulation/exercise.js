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
let paragraphss = document.querySelectorAll("p");
console.log(paragraphss.length);
let paragraphs1 = document.querySelector("p");
console.log(document.querySelectorAll(".site-header"));
let paragraphs2 = document.querySelectorAll("p");

let jumbotron =document.querySelector("#jumbotron-text");
let jumbotron2 = document.getElementById("jumbotron-text");


let primary =document.querySelector('.primary-content');
let allP = document.querySelectorAll('p');
console.log(allP);
/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let myButton = document.querySelector("#alertBtn");
console.log(myButton);
myButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Hi guys ");
}


/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let changeButton = document.querySelector('#bgrChangeBtn');
 changeButton.addEventListener("click", changeColor);

 function changeColor(){
     document.querySelector('#jumbotron-text').style.backgroundColor = 'red';
 }


/*
 let changeButton = document.querySelector('#bgrChangeBtn');
 changeButton.addEventListener("click", changeColor);
 let body = document.querySelector('body');

 function changeColor(){
     body.style.backgroundColor = 'red';
 }
*/


/*
Task 4
======
When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let createP = document.querySelector('#addTextBtn');
  createP.addEventListener("click", function () {
      let newP = document.createElement('p');
      newP.innerText = "How are you?";
      let paragraphNew = document.querySelector(".display-3"); 
      paragraphNew.appendChild(newP); 
      

      
 });
 


/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.


let up = document.querySelector('largerLinksBtn');
  up.addEventListener("click", function (){
        let paragraphNewq = document.querySelector(".display-3");

       for(let i=0; i<paragraphNewq.length; i++) {
        paragraphNewq[i].style.backgroundColor = "blue";
   }
})
/*
*/
let container = document.querySelector("#largerLinksBtn");
container.className = "largeBlock";


let updateTitleBtn = document.querySelector("#addArticleBtn");

updateTitleBtn.addEventListener("click", function() {
    let inputBox = document.querySelector("#titleInput");
    let title = inputBox.value;

    let titleElement = document.querySelector("#lessonTitle");
    titleElement.innerText = title;
    inputBox.value = title;
});
 

