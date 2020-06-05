/*
 In this exercise you will deal with Objects stored in array and DOM manipulation with JavaScript.
 From now, exercise descriptions don't provide detailed examples about input and output of functions.
 You should be already able to read and understand the code in order to extract the necessary information
 you need to implement functions' body.
 */

/*
 Optional question:

 Notice how this JavaScript file linked to the index.html file.
 What do you think when this JavaScript file is being executed?

 When you finished this exercise try to move the script tag around the Div tag with the id "content",
 refresh the page and observe what happens. (This should answer the question above.)
 
 What do you think why this changes shouldn't work?
 */
// LEAVE YOUR ANSWER HERE (THIS IS OPTIONAL)

/**git
 * This function recieves a lists of people. Each object should contain the name and the occupation of a person.
 * Look for usage of the function in the code and see what variable is passed into it as an argument.
 *
 * Create and insert the below HTML elements to the DOM for each of Objects in the Array as follows:
 *  1. Add a <h1> tag to the website containing the name of the person
 *  2. Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML elements should go inside the Div tag with the id "content".
 *
 * An example "content" div should look like:
 * <div id="content">
 *      <h1>Mario</h1>
 *      <h2>Plumber</h2>
 *      <h1>Luigi</h1>
 *      <h2>Plumber</h2>
 * </div>
 */

function insertPeopleData(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    var name = document.createElement("h1");
    var job = document.createElement("h2");
    name.textContent = arrayOfPeople[i].name;
    job.textContent = arrayOfPeople[i].job;
    content.appendChild(name);
    content.appendChild(job);
  }
}

/**
 *
 * Create a list of shopping items using an unordered HTML list.
 * The input of this function is a simple Array of Strings, look for the concrete example in the code.
 *
 * All of your HTML elements should go inside the Div tag with the id "content".
 *
 * Hint for type of lists in HTML: https://www.w3schools.com/html/html_lists.asp
 */
function insertShoppingList(shoppingList) {
  //Write your code in here'
  let contentList = document.querySelector("#content");
  var newIl = document.createElement("ul");
  for (let i = 0; i < shoppingList.length; i++) {
    var li = document.createElement("li");
    li.textContent = shoppingList[i];
    newIl.appendChild(li);
  }
  contentList.appendChild(newIl);
}

/**
 * I'd like to display my three favorite books inside a nice webpage!
 *
 * Iterate through the array of books passed into this function and insert each book to page as follows:
 *   - Create a <ul> list and display each book details in <li> element.
 *   - For each book, create a <p> element with the book title and author and append it to the page.
 *   - Add an <img> after <p> element to each book that links to a URL of the book cover.
 *     You should find an appropriate image to each book.
 *   - Change the style of the book depending on whether you have read it (green) or not (red).*
 *
 * Find in the code what properties a book object has in the array.
 *
 * All of your HTML elements should go inside the Div tag with the id "content".
 *
 * The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com
 */
function insertBooks(books) {
  //Write your code in here
  books[0].imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
  books[1].imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg";
  books[2].imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg";
  let titulo = document.querySelector("#content");
  let createH1 = document.createElement("h1");
  createH1.textContent = "Book List";
  titulo.appendChild(createH1);

  let info = document.querySelector("#content");

  var ulEl = document.createElement("ul");

  for (let i = 0; i < books.length; i++) {
    var liEl = document.createElement("li");
    var paragraph = document.createElement("p");
    paragraph.textContent = books[i].title + " - " + books[i].author;
    liEl.appendChild(paragraph);
    var image = document.createElement("img");
    image.src = books[i].imgUrl;
    liEl.appendChild(image);
    ulEl.appendChild(liEl);
    liEl.style.width = "400";
    image.style.width = "200";
    liEl.style.listStyleType = "none";
    liEl.style.margin = "20";
    if (books[i].alreadyRead === true) {
      liEl.style.backgroundColor = "green";
    } else {
      liEl.style.backgroundColor = "red";
    }
  }
  ulEl.style.display = "flex";
  info.appendChild(ulEl);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

insertPeopleData(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

insertShoppingList(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

insertBooks(books);
