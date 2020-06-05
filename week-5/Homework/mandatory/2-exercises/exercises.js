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
  arrayOfPeople.forEach(element => {
    let createH1 = document.createElement('h1')
    createH1.innerText = element.name
    let createH2 = document.createElement('h2')
    createH2.textContent = element.job
    content.appendChild(createH1)
    content.appendChild(createH2)

  });

}

//Write your code in here


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
  let myList = document.createElement('ul')
  // console.log(myList)
  shoppingList.forEach(element => {
    let item = document.createElement('li')
    // console.log(item)
    item.innerHTML = element
    myList.appendChild(item)
    content.appendChild(myList)


  });
}
//Write your code in here

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
  let chosenBook = ['https://productdork.com/uploads/default/original/1X/ddbda1150301e89cdf0119d84f2a7fb8930beffb.png', 'https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg', 'https://images-na.ssl-images-amazon.com/images/I/418M2053aNL.jpg']
  let newList = document.createElement('ul')

  books.forEach((element, index) => {
    let bookList = document.createElement('li')
    bookList.style.width = '300px'
    let createP = document.createElement('p')
    createP.innerHTML = `${element.title} - ${element.author}`;
    bookList.appendChild(createP)
    // console.log(bookList);
    let createImg = document.createElement('img') // I don't know how to change between the photos?//
    createImg.src = chosenBook[index]
    createImg.alt = "books"
    createImg.style.width = "250px"
    newList.style.display = 'flex';
    newList.style.justifyContent = "space-between" // why this instruction can't be applied on the document??//
    bookList.appendChild(createImg)
    console.log(createImg);
    if (element.alreadyRead) {
      bookList.style.backgroundColor = 'green'
    }
    else {
      bookList.style.backgroundColor = 'red'
    }

    newList.appendChild(bookList)
    content.appendChild(newList)

  });
}
//Write your code in here

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
