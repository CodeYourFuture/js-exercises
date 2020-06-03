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
  //Write your code in here
  
  for (let i = 0; i < arrayOfPeople.length ; i ++) {
    let name  = document.createElement("h1");
    let job = document.createElement("h2");
    name.innerText = arrayOfPeople[i].name;
    job.innerText = arrayOfPeople[i].job;
    content.append(name);
    content.append(job);
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
  //Write your code in here
  let content = document.querySelector("#content");
  let myList = document.createElement("ul");
  content.appendChild(myList)
  for (let i = 0; i < shoppingList.length ; i ++) {
    let tempLi = document.createElement("li")
    tempLi.innerText = shoppingList[i];
    myList.append(tempLi)
  }
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
  let images = ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcej0xfvRf7aB-hIonqVwHAgrxSOyUyEAt_z9w1jKmMPudjZG5ZIqZKXqxhmgoBVmmfk3e3b_e4gPkVfKYmn4bAZj6fy9cfL8Rsv7dgi7-&usqp=CAY",
  "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  "https://imagery.pragprog.com/products/595/tpp20.jpg?1557173963"]
  let content = document.querySelector("#content");
  let myList = document.createElement("ul");
  myList.className = "ul";
  content.appendChild(myList)
  for (let i = 0; i < books.length ; i ++) {
    let tempLi = document.createElement("li");
    tempLi.className = "li";
    let para = document.createElement("p");
    let image = document.createElement("img");
    image.src = images[i];
    image.width = "182";
    image.height = "277";
    tempLi.appendChild(para);
    tempLi.appendChild(image);
    para.innerText = books[i].title + " - " + books[i].author;
    myList.append(tempLi)
    if (books[i].alreadyRead === true) {
      tempLi.style.backgroundColor = "green"
    } else { tempLi.style.backgroundColor = "red"}
  }
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
  { name: "Boris", job: "Prime Minister" }
];

insertPeopleData(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

insertShoppingList(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

insertBooks(books);
