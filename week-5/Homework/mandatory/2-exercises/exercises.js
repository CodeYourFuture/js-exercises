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

  arrayOfPeople.forEach((person) => {
    let h1Element = document.createElement("h1");
    let h2Element = document.createElement("h2");

    h1Element.textContent = person.name;
    h2Element.textContent = person.job;

    content.appendChild(h1Element);
    content.appendChild(h2Element);

    
  });
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
  let content = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);

  shoppingList.forEach((item) => {
    let liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
  });
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
  let content = document.querySelector("#content");

  // array of image URL's
  let coverUrlArray = [
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
    "https://imagery.pragprog.com/products/595/tpp20.jpg",
  ];

  // Add coverImageUrl property to main object (books)
  books.forEach((book, index) => (book.coverImageUrl = coverUrlArray[index]));

  // Declare unordered list and add to the page
  let ulElement = document.createElement("ul");
  ulElement.style.listStyleType = "none";
  content.appendChild(ulElement);

  // Create loop to read all properties of an object in array and show on the page
  books.forEach((book) => {
    /* Declare li for title with styles and if book is already read background color is green 
    if is not read background color is red and then show in an unordered list */
    let liElement = document.createElement("li");
    liElement.innerHTML = `<p>${book.title} - ${book.author}</p>`;
    liElement.style.width = "350px";
    liElement.style.height = "350px";
    liElement.style.padding = "10px";
    liElement.style.margin = "15px";
    liElement.style.display = "inline-block";
    if (book.alreadyRead) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }
    ulElement.appendChild(liElement);

    // Create a link for images
    let imgLink = document.createElement("a");
    imgLink.href = book.coverImageUrl;
    imgLink.target = "_blank";
    liElement.appendChild(imgLink);

    // Create an image element to show cover of the book with styles
    let coverImg = document.createElement("img");
    coverImg.src = book.coverImageUrl;
    coverImg.alt = "Book cover";
    coverImg.style.width = "200px";
    coverImg.style.height = "300px";
    imgLink.appendChild(coverImg);
  });
 
 /*solution 2*/
  // //Write your code in here
  // let coverUrlArray = [
  //   "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  //   "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
  //   "https://imagery.pragprog.com/products/595/tpp20.jpg",
  // ];

  // // creatign unorder list
  // let unorderList = document.createElement("ul");
  // content.appendChild(unorderList);

  // //creating the loop to go through the books
  // books.forEach((book, index) => {
  //   //console.log(index);
  //   let liElement = document.createElement("li");
  //   liElement.innerHTML = `<p> ${book.title} - ${book.author}</p>`;
  //   liElement.style.width = "250px";
  //   liElement.style.height = "350px";
  //   unorderList.appendChild(liElement);
  //   if (book.alreadyRead) {
  //     liElement.style.backgroundColor = "green";
  //   } else {
  //     liElement.style.backgroundColor = "red";
  //   }
  //   let imgElemenet = document.createElement("img");
  //   imgElemenet.src = coverUrlArray[index];
  //   imgElemenet.style.width = "100px";
  //   imgElemenet.style.height = "100px";
  //   liElement.appendChild(imgElemenet);
  // });
 
}


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