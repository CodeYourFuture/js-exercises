/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
var myButton = document.querySelector('#bgrChangeBtn');
myButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Something");
}


document.body.style.backgroundColor = 'green';
  

var myButton = document.querySelector('#bgrChangeBtn');
myButton.addEventListener("click", alertSomething);

function alertSomething() {
    alert("Something");
}

document.body.style.backgroundColor = 'green';

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var myButton = document.querySelector('#alertBtn');
    myButton.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
        myButton.innerText = "Thanks for visiting Bikes for Refugees!";
    }
    
/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

var addTextBtn = document.querySelector('#addTextBtn'); 
addTextBtn.addEventListener("click", alertSomething);

    function alertSomething() {
        alert("Something");
        var newAddTextBtn = document.createElement('p');
    
    newAddTextBtn.innerHTML = "Read more below"
    addTextBtn.parentNode.appendChild(newAddTextBtn); 
    }

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

    
var increasedLargeLinks = document.getElementById("largerLinksBtn"); 

var linksArray = document.querySelectorAll("a");
increasedLargeLinks.addEventListener("click", function() {
     
    for (var i = 0; i < linksArray.length; i++) {
        
        linksArray[i].style.fontSize= "30px"; 
  }

});

// const largerLinksBtn = document.querySelector("#largerLinksBtn");
// largerLinksBtn.addEventListener("click", function() {
//     bgrChangeBtn.style.fontSize = "3rem";
//     alertBtn.style.fontSize = "3rem";
//     addTextBtn.style.fontSize = "3rem";
  
// });