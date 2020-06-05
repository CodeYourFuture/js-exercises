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
let getAllP = document.querySelectorAll("p");
console.log(getAllP);
let firstDiv = document.getElementsByTagName("div")[0];
console.log(firstDiv);
let getById = document.getElementById("jumbotron-text");
console.log(getById);
let allthePs = document.getElementsByClassName("primary-content")[0].getElementsByTagName("p");
console.log(allthePs);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/


























// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Creating DOM Elements</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
// </head>
// <body>
//   <div class="wizards">
//   </div>
//   <script src="creating.js"></script>
// </body>
// </html>

/* once you got the files, comment the line below and check your browser's developer tools console to see if you see this text
if you don't, go to index.html and change the way you import your javascript file to this <script src="./creating.js"></script>
*/
// console.log('it works!');
​
// You are given the following array of objects
const wizards = [
  {
    name: 'Harry Potter',
    house: 'Gryfindor'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
  },
  {
    name: 'Tonks',
    house: 'Hufflepuff'
  },
  {
    name: 'Ronald Weasley',
    house: 'Gryfindor'
  },
  {
    name: 'Hermione Granger',
    house: 'Gryfindor'
  }
];
// Create an unordered list
​
// Create a list item for each wizzard and his/her house and
// append it to the list
// if you can, give EVERY SECOND wizard a background colour of #785AA8
// as an example, each item's text should read '{name of wizard} belongs to the {name of house} house'
​
// Create a button with a class of button-primary and a value/text of "Add wizards"
​
// inject the button into the dom AFTER the wizards div
​
// when the button is clicked the list of wizards is injected into the DOM, inside the div with a class of wizards.
​
// insert a heading above the wizards div to read 'List of Harry Potter wizards'
​
// create a button with a text of Delete wizards and a marginLeft of 1em
​
// insert button in the dom after the Add Wizards button you created above
​
// when clicking the remove wizards button, the list of wizards whould be removed from the 

/* once you got the files, comment the line below and check your browser's developer tools console to see if you see this text
if you don't, go to index.html and change the way you import your javascript file to this <script src="./creating.js"></script>
*/
// console.log('it works!');
​
// You are given the following array of objects
const wizards = [
  {
    name: 'Harry Potter',
    house: 'Gryfindor'
  },
  {
    name: 'Cedric Diggory',
    house: 'Hufflepuff'
  },
  {
    name: 'Tonks',
    house: 'Hufflepuff'
  },
  {
    name: 'Ronald Weasley',
    house: 'Gryfindor'
  },
  {
    name: 'Hermione Granger',
    house: 'Gryfindor'
  }
];



// Create an unordered list
const ul = document.createElement('ul');
// Create a list item for each wizzard and his/her house and
// append it to the list
wizards.forEach(function (wizard, index) {
  let listItem = document.createElement('li');
  // as an example, each item's text should read '{name of wizard} belongs to the {name of house} house'
  listItem.textContent = `${wizard.name} belongs to the ${wizard.house} house.`
  // if you can, give EVERY SECOND wizard a background colour of #785AA8
  if (index % 2) listItem.style.backgroundColor = '#785AA8';
  ul.appendChild(listItem);
})
​
const wizardsDiv = document.querySelector('.wizards');
​
// Create a button with a class of button-primary and a value/text of "Add wizards"
const button = document.createElement('button');
button.classList.add('button-primary');
button.textContent = 'Add wizards';
// inject the button into the dom AFTER the wizards div
wizardsDiv.insertAdjacentElement('afterend', button);
// when the button is clicked the list of wizards is injected into the DOM, inside the div with a class of wizards.
button.addEventListener('click', () => wizardsDiv.appendChild(ul));
​
// insert a heading above the wizards div to read 'List of Harry Potter wizards'
const heading = document.createElement('h1');
heading.textContent = 'List of Harry Potter Wizards';
wizardsDiv.insertAdjacentElement('beforebegin', heading);
​
// create a button with a text of Delete wizards and a marginLeft of 1em
const removeWizardsButton = document.createElement('button');
removeWizardsButton.textContent = 'Delete wizards';
removeWizardsButton.style.marginLeft = '1em';
​
// insert button in the dom after the Add Wizards button you created above
button.insertAdjacentElement('afterend', removeWizardsButton);
​
// when clicking the remove wizards button, the list of wizards whould be removed from the DOM
removeWizardsButton.addEventListener('click', () => ul.remove());





