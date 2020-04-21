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

// Select all p element in document
let allPEl = document.querySelectorAll("p");
// Log all p element in document 
console.log(allPEl);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// Select alert button in document
let alertBt = document.querySelector("#alertBtn");
// Add click event to alert button
alertBt.addEventListener("click", function () {
  // Show alert when you clicked on alert button  
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// Select chaneg colour button in document
let changeBackgroundColorBtn = document.querySelector("#bgrChangeBtn");
// Add click event to change colour button 
changeBackgroundColorBtn.addEventListener("click", function () {
  // Select body in document   
  let bodyEl = document.querySelector("body");
  // Change color of body
  bodyEl.style.backgroundColor = "red";
});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

// Select add text button in document
let addTextBtn = document.querySelector("#addTextBtn");
// Add click event to add text button
addTextBtn.addEventListener("click", function () {
  // Create a p element   
  let newText = document.createElement("p");
  // Evaluate text to p element 
  newText.textContent = "Read more below.";
  // Select button through css name
  let buttonsContainer = document.querySelector(".buttons");
  // buttonContainer is parent and I add new p in this container
  buttonsContainer.appendChild(newText);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

// Select larg link button in document
let largerLinksBtn = document.querySelector("#largerLinksBtn");
// Add click event to larg link button
largerLinksBtn.addEventListener("click", function () {
  // Select all a elements in document   
  let allALinks = document.querySelectorAll("a");
  // Access to all a elements through this forEach loop and increase font size
  allALinks.forEach((Element) => {
    // Getting font size of each a element   
    let elementFSize = Element.style.fontSize;    
    // '1em' is a sample of font size but I need only number in font size like '1'
    elementFSize = elementFSize.slice(0, elementFSize.indexOf("em"));    
    // 1em is equal 16px so each pixel is 0.0625em, if I want to add only one pixel I have to add 0.0625em to each element 
    elementFSize = parseFloat(elementFSize) + 0.0625;        
    // At the end I have only one number and if I want to chane font size so I have to add 'em' to my font size number like 1.0625em  
    Element.style.fontSize = elementFSize + "em";
  });
});
