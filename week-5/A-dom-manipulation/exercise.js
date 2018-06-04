/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bgrChangeBtn = document.querySelector("#bgrChangeBtn");
bgrChangeBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = "orangered";
});


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector("#alertBtn");
alertBtn.addEventListener("click", function(){
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const addTextBtn = document.querySelector("#addTextBtn");
const buttonS = document.querySelector(".buttons");
addTextBtn.addEventListener("click", () => {
    const createdEle = document.createElement('p');
    createdEle.innerText = "Read more below.";  
    createdEle.style.color = "red";
    createdEle.style.fontSize = "3rem";
    addTextBtn.parentElement.appendChild(createdEle);  
    // buttonS.appendChild(createdEle);
});



/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector("#largerLinksBtn");
largerLinksBtn.addEventListener("click", function() {
    bgrChangeBtn.style.fontSize = "3rem";
    alertBtn.style.fontSize = "3rem";
    addTextBtn.style.fontSize = "3rem";
  
});