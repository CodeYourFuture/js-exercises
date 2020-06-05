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

/**
 * This function recieves a list of people. Each object should contain the name and the occupation of a person.
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

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

function insertPeopleData(arrayOfPeople) {
  let content = document.querySelector("#content");
  for (let i = 0; i < arrayOfPeople.length; i++) {
    let name = document.createElement("h1");
    let job = document.createElement("h2");
    name.innerText = arrayOfPeople[i].name;
    job.innerText = arrayOfPeople[i].job;
    content.appendChild(name);
    content.appendChild(job);
  }
}
insertPeopleData(people);

/**
 *
 * Create a list of shopping items using an unordered HTML list.
 * The input of this function is a simple Array of Strings, look for the concrete example in the code.
 *
 * All of your HTML elements should go inside the Div tag with the id "content".
 *
 * Hint for type of lists in HTML: https://www.w3schools.com/html/html_lists.asp
 */

// let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

function insertShoppingList(shoppingList) {
  let content = document.querySelector("#content");
  let unorderedList = document.createElement("ul");
  shoppingList.forEach(function (element) {
    let listItem = document.createElement("li");
    listItem.innerText = element;
    unorderedList.appendChild(listItem);
  });
  content.appendChild(unorderedList);
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
 * The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/*
 */

function insertBooks(books) {
  books[0].imageUrl =
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg";
  books[1].imageUrl =
    "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg";
  books[2].imageUrl =
    "https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg";

  let bookList = document.createElement("ul");
  bookList.style.display = "flex";
  bookList.style.justifyContent = "space-evenly";
  bookList.style.listStyle = "none";

  for (var i = 0; i < books.length; i++) {
    let book = document.createElement("li");
    let bookDetail = document.createElement("p");
    bookDetail.innerText = books[i].title + " - " + books[i].author;
    let bookImg = document.createElement("img");
    bookImg.style.width = "180px";
    bookImg.style.padding = "10px";
    bookImg.src = books[i].imageUrl;
    if (books[i].alreadyRead) book.style.backgroundColor = "green";
    else book.style.backgroundColor = "red";
    bookList.appendChild(book);
    book.appendChild(bookDetail);
    book.appendChild(bookImg);
  }
  content.appendChild(bookList);
}

// DO NOT EDIT BELOW HERE

// let people = [
//   { name: "Chris", job: "Teacher" },
//   { name: "Joanna", job: "Student" },
//   { name: "Boris", job: "Prime Minister" },
// ];

// insertPeopleData(people);

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
